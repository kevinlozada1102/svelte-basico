<script>
    let value = '';
    let loading = false;
    let response = [];
    const handleInput = (event) => value = event.target.value;
    $: if (value.length > 4){
        loading = true;
        fetch(`http://www.omdbapi.com/?s=${value}&apikey=6dba4cf7`)
            .then(res => res.json())
            .then(apiResponse => {
                response = apiResponse.Search || [];
                loading = false;
            })
    }
</script>

<main>
    <input type="text" value="{value}" on:input={handleInput} placeholder="Buscar películas ..."/>

    {#if loading}
        <strong>Cargando ...</strong>
    {:else}
        {#if response.length > 0}
            <strong>Tenemos {value.length} películas</strong>
        {:else}
            <strong>No hay resultados</strong>
        {/if}
    {/if}

</main>