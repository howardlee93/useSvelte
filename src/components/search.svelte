<script>

    import {fetchInfo} from '../util/api_util';

    let query;
    const ENTER_KEY = 13;

    const keyDown = (event)=>{
        let key = event.keyCode;

        if (key == ENTER_KEY){
            console.log("call api");
            //handleSubmit
        }
    };


    const handleSubmit = (type, query) =>{
        fetchInfo(type, query)
        .then(res => console.log(res));
    }

</script>


<input bind:value={query} on:keydown|once={keyDown}>
<p> Searching for ... {query}</p>
