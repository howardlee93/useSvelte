
<script>

    import { afterUpdate, onMount, onDestroy } from "svelte";
    import {coronadataset} from '../store/store';

    import Chart from "chart.js";

    let data;

    $:data = Array.of($coronadataset.hospitalizedCurrently, 
    $coronadataset.inIcuCurrently, $coronadataset.deathConfirmed)
    
    let label;
    $:label =  `Breakdown of cases in ${$coronadataset.state} today`;
    let coronadata;
    
    
    $:coronadata = {
        labels: ['hospitalizedCurrently', 'inIcuCurrently', 'deathConfirmed'],
            datasets: [{
                label: label, //`Breakdown of in ${coronadataset.state} today`,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]

    }

    

    const createChart = () =>{


        const ctx = document.getElementById("chart").getContext('2d');

        let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: coronadata,

        // Configuration options go here
        options: {
            responsive: true,
            aspectRatio: 5
            }
        });
    }

    afterUpdate(()=>
    // console.log(data)
    createChart()
);




</script>

{#if $coronadataset.state}
    <h1>Showing coronavirus data for {$coronadataset.state}</h1>
{:else}
    <h1>Look up a state's coronavirus data</h1>
{/if}


<canvas id="chart" />




