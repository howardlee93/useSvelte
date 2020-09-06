<script>
    let query;
    const ENTER_KEY = 13;

    const keyDown = (event) =>{
        let key = event.key;
        if (key == ENTER_KEY){
            console.log("call api");
        }
    }



</script>

<input bind:value={query} on:keydown={keyDown}>
<p> Searching for ... {query}</p>
