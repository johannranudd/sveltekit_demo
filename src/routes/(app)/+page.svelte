<script lang="ts">
	let counter = 0;
	function increment() {
		counter++;
	}
	function decrement() {
		if (counter > 0) {
			counter--;
		}
	}
	let title = '';
	let newTitle = '';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Counter: {counter}</p>
<div>
	<button class="primary-btn" on:click={increment}>increment</button>
	<button class="primary-btn" on:click={decrement}>decrement</button>
</div>
<p>Title: {newTitle}</p>
<input class="border" type="text" bind:value={title} />
<button class="primary-btn" on:click={() => (newTitle = title)}>Update title</button>
<button class="primary-btn" on:click={() => ((title = ''), (newTitle = ''))}>Reset title</button>
