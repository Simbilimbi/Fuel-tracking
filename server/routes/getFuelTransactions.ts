import {prisma} from "~~/prisma/db"
export default defineEventHandler(async(event)=>{
   const getFuelTransactions = await prisma.dispencement.findMany()
   return {
      data:getFuelTransactions,
      success:true
   }

})