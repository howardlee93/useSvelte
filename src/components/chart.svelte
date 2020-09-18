<!-- <canvas id="chart" width="100" height="100"/> -->

<script>

    import { afterUpdate, getContext, onMount } from "svelte";
    import {dataset} from '../store/store';

    import Chart from "chart.js";

    // let data;

    // const unsubscribe = dataset.subscribe( value =>{
    //     data = value;

    // })

    // const dataset =  {
    //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //         datasets: [{
    //             label: 'My First dataset',
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: [0, 10, 5, 2, 20, 30, 45]
    //         }]
    //     };

    // const createChart = () =>{

    //     console.log(dataset);

        // const ctx = document.getElementById("chart").getContext('2d');

        // let chart = new Chart(ctx, {
        // // The type of chart we want to create
        // type: 'line',

        // // The data for our dataset
        // data: dataset,

        // // Configuration options go here
        // options: {}
        // });
    // }

    // afterUpdate(()=>
    // createChart()
// );




</script>


<h1>The count is {$dataset.state}</h1>







