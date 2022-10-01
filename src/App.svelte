<script>
	import FeedbackForm from './components/FeedbackForm.svelte'
	import FeedBackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'
</script>

<main class="container">
	<figure class="logo-wrapper">
		<img alt="frs logo" src="../../images/frs-logo.png" class="logo" />
	</figure>
	<FeedbackForm />
	<FeedbackStats />
	<FeedBackList />
</main>

<style>
	.logo-wrapper {
		display: flex;
		justify-content: center;
	}

	.logo {
		width: 500px;
	}

	@media (max-width: 767px) {
		.logo {
			width: 375px;
		}
	}
</style>