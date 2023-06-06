<template>
   <div class="container">
      <div class = "form-container">
         <Form/>
      </div>
      <div class="chart-container" style="position: relative; height:50vh; width:80vw">
          <canvas id="fuelChart">This is my real-time line graph</canvas>
      </div>
   </div>
</template>

<script setup >
import Chart from "chart.js/auto";
import { storeToRefs } from "pinia";
import { useFuelDispencementStore } from "~~/stores/fuelDispencement";

const fuelStore = useFuelDispencementStore()

const transactions = storeToRefs(fuelStore).transactions

onMounted(async() => {
  await fuelStore.fetchTransactionsData(); 

  // Process the fuel transactions for chart data
  const fuelData = fuelStore.transactions.reduce((accumulator, transaction) => {
  const previousValue = accumulator.length > 0 ? accumulator[accumulator.length - 1].y : 0;
  const newValue = previousValue + (transaction.dispencement_type === "WITHDRAWAL" ? -transaction.amount : transaction.amount);
  accumulator.push({
    x: transaction.created_at,
    y: newValue,
  });
  return accumulator;
}, []);


  // Create the chart using Chart.js
  Chart.defaults.font.size = 16;
  new Chart("fuelChart", {
    type: "line",
    data: {
      datasets: [
        {
          label: "Fuel Transactions",
          data: fuelData,
          backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    borderColor: 'red',
        },
      ],
      
    },
    options: {
      animations: {
      tension: {
        duration: 2000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    },
    

  });
});


</script>

<style scooped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form-container {
   margin-bottom: 20px
}

.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  

}
</style>