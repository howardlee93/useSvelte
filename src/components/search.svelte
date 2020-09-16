<script>

    import {fetchInfo} from '../util/api_util';
    import {dataset} from '../store/store';
    let query;
    const ENTER_KEY = 13;


    const handleSubmit = (query) =>{
        // console.log(query)
        // let type ="software"; 

        fetchInfo( query)
        // .then(res => console.log(res));
        .then( res => dataset.set(res.data));

    }

    const keyDown = (event)=>{
        let key = event.keyCode;

        if (key == ENTER_KEY){
            handleSubmit(query)
        }
    };

</script>


<input bind:value={query} on:keydown={keyDown}>
<p> Searching for ... {query}</p>
