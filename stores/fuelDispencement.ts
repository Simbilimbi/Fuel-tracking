import { defineStore } from 'pinia';
import axios from 'axios';

export const useFuelDispencementStore = defineStore('fuelDispencement',{
   state : () => ({
     amount : null,
     dispencement_type : null,
     transactions : [] as { amount: null; dispencement_type: null ; created_at : Date}[]
   }),
   actions: {
      async  creatingDispencement(){
          const result : any = await axios.post('/depositingFuel',{
              amount: this.amount,
              dispencement_type: this.dispencement_type
          })
          .then((response)=>{
              return {
                  data: response.data,
                  success: true
              }
          })
          .catch((error)=>{
              console.error(error);
              return {
                  data: error,
                  success: false
              }
          });
          
          this.transactions.push({
            amount: this.amount,
            dispencement_type: this.dispencement_type,
            created_at: new Date()
          });
        console.log("hy",this.transactions)
        return result
      },
      async fetchTransactionsData(){
        const response = await axios.post('/getFuelTransactions')
        this.transactions = response.data.data

        
      } 
    }
})