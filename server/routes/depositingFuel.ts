import { prisma } from "~~/prisma/db";
export default defineEventHandler (async (event)=>{
   const { amount,  dispencement_type} = await readBody(event);
   const createDispencement = await prisma.dispencement.create({
      data: {
        amount: parseFloat(amount),
        dispencement_type
      }
    })
    return {
      data:createDispencement,
      success:true
    }
  })
