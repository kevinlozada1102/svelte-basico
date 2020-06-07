<script>
    export let contadorInicial = 0;
    export let maximoContador = 9;
    let contador = contadorInicial;

	function aumentarContador() {
		contador++;
	}

	$: esParOImpar = contador % 2 === 0 ? 'es par' : 'es impar';

	$: if (contador > maximoContador) {
		contador = maximoContador;
	}
</script>

<main>
	<button on:click={aumentarContador}>Contador</button>
	<p>Contador click : {contador} , número {esParOImpar}</p>
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