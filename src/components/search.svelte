<script>

    import {fetchInfo} from '../util/api_util';
    import {dataset} from '../store/store';
    let state;
    $: state;

    const ENTER_KEY = 13;


    const handleSubmit = (state) =>{
        // console.log(query)
        // let type ="software"; 

        fetchInfo(state)
        // .then(res => console.log(res));
        .then( res => dataset.update(data => res.data));

    }

    const keyDown = (event)=>{
        let key = event.keyCode;

        if (key == ENTER_KEY){
            handleSubmit(state)
        }
    };

</script>


<input bind:value={state} on:keydown={keyDown}>
<p> Searching for ... 
    {#if state}  
         {state.toUpperCase()}
    {/if}
</p>
