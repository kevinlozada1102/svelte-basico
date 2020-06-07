<script>
	export let name;
    export let contadorInicial = 0;
    let contador = contadorInicial;

	function aumentarContador() {
		contador++;
	}
</script>

<main>
	<button on:click={aumentarContador}>Contador</button>
	<p>Contador click : {contador}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>