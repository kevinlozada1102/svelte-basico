<script>
	import Counter from './Counter.svelte';
	import Input from './Input.svelte';
	const comonsProps = { maximoContador : 15}
</script>

<Counter contadorInicial="2" {...comonsProps}/>
<Counter contadorInicial="10" {...comonsProps} />
<Input/>