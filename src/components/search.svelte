<script>

    import {fetchInfo} from '../util/api_util';
    import {coronadataset} from '../store/store';
    let state;

    const ENTER_KEY = 13;


    const handleSubmit = (state) =>{
        // console.log(state)
        // let type ="software"; 
        // dataset.update(n => n = state);

        // console.log(dataset);



        fetchInfo(state)
        // .then(res => console.log(res));
        .then( res => coronadataset.update(data => Object.assign(data, res.data)));



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
