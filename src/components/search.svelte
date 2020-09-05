<script>
    let query;
    const ENTER_KEY = 13;

    const keyDown = (event) =>{
        key = event.key;
        if (key == ENTER_KEY){
            console.log("call api");
        }
    }



</script>


<input bind:value={query}>
<p> Searching for ... {query}</p>
