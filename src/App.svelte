<script>
	
	import Search from './components/search.svelte'; 
	import Chart from './components/chart.svelte';
	import Footer from './components/footer.svelte';
	
</script>

<main>
	<h1>Use This!</h1>
	<h2> UseThis API and ChartJS  </h2>
	<p> Testing out Svelte with data visualization </p>
	<Search/>
	<Chart/>
	<Footer/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>