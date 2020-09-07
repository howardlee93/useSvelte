
<script>

    import { afterUpdate, getContext, onMount } from "svelte";

    import Chart from "chart.js";

    const data =  {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        };


    const createChart = () =>{
        const ctx = document.getElementById("chart").getContext('2d');

        let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: data,

        // Configuration options go here
        options: {}
        });
    }

   // onMount(); fetch data 


    afterUpdate(
    createChart
);




</script>

<canvas id="chart" width="100" height="100"/>

<p>Chart component</p>





