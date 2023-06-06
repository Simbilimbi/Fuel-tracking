<template>
   <div class="form-container">
   <Toast/>
    <div class="form-group">
      <label for="amount">Amount:</label>
      <input type="text" id="amount" required v-model="amount" />
      <div class="card flex justify-content-center">
        <label>Dispencement Type: </label>
        <select v-model="dispencement_type"  placeholder="Select a dispencemt type">
          <option disabled value="">Select a dispencemt type</option>
          <option>DEPOSIT</option>
          <option>WITHDRAWAL</option>
        </select>
    </div>
      <button @click="submitToDatabase">Submitt</button>
    </div>
    
  </div>
  <!-- <div class="chart-container" style="position: relative; height:60vh; width:80vw">
       <canvas id="fuelChart"  >This is my real-time line graph</canvas>
   </div> -->
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFuelDispencementStore } from "~~/stores/fuelDispencement";
 import { useToast } from "primevue/usetoast";
 import Chart from "chart.js/auto";

const value = ref('off');
const options = ref(['Withdraw', 'Deposit']);
const toast = useToast()
const fuelStore = useFuelDispencementStore()
const amount = storeToRefs(fuelStore).amount
const dispencement_type = storeToRefs(fuelStore).dispencement_type



const submitToDatabase = async () => {
 let result = await fuelStore.creatingDispencement()
  console.log("status pppppppp",result)
   if (result.data.success) {

     toast.add({
       severity: "success",
       summary: "Success Message",
       detail: "Fuel successfully deposited",
       life: 3000,
     });
   } 
   else {
     toast.add({
       severity: "error",
       summary: "Error Message",
       detail: result.data.message,
       life: 3000,
     });
   }
 };

</script>

<style scooped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-group {
  text-align: center;
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  height: 40px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 50%;
  height: 50px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px
}

button:hover {
  background-color: #45a049;
}
select{
  width: 100%;
  height: 40px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px; 
}


</style>