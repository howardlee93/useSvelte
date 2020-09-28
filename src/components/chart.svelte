<canvas id="chart" width="100" height="100"/>

<script>

    import { afterUpdate, getContext, onMount } from "svelte";
    import {dataset} from '../store/store';

    import Chart from "chart.js";

    const data = {
        labels: ['hospitalizedCurrently', 'inIcuCurrently', 'negative', 'deathConfirmed'],
            datasets: [{
                label: `Coronavirus data for ${dataset.state}`,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [$dataset.hospitalizedCurrently, $dataset.inIcuCurrently, $dataset.negative, $dataset.deathConfirmed]
            }]

    }

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

    const createChart = () =>{

        console.log($dataset.hospitalizedCurrently);

        const ctx = document.getElementById("chart").getContext('2d');

        let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: data,

        // Configuration options go here
        options: {}
        });
    }

    afterUpdate(()=>
    createChart()
);




</script>

{#if $dataset.state}
    <h1>Showing coronavirus data for {$dataset.state}</h1>
{:else}
    <h1>Look up a state's coronavirus data</h1>
{/if}






