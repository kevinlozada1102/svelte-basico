import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		//name: 'Kevin',
		contador : 0
	}
});

export default app;