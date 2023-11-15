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
	let titleIsLocked = false;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Counter: {counter}</p>
<div>
	<button class="primary-btn" on:click={increment}>increment</button>
	<button class="primary-btn" on:click={decrement}>decrement</button>
</div>
<p>Title: {title}</p>
<input class="border" type="text" bind:value={title} disabled={titleIsLocked} />
<button class="primary-btn" on:click={() => (titleIsLocked = true)}>Lock title</button>
<button class="primary-btn" on:click={() => (titleIsLocked = false)}>unock title</button>
<p>{titleIsLocked}</p>
