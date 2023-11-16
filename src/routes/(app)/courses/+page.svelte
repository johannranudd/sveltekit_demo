<script context="module" lang="ts">
	// https://jsonplaceholder.typicode.com/posts
	export async function load({ fetch }: any) {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		console.log(res);
		if (res.ok) {
			return {
				props: {
					data
				}
			};
		}

		return {
			status: res.status,
			error: 'could not fetch data'
		};
	}
</script>

<script lang="ts">
	export let data: any[];
	console.log(data);
</script>

<ul>
	<!-- <li><a href={`./courses/${1}`}>Course 1</a></li>
	<li><a href={`./courses/${2}`}>Course 2</a></li> -->
	{#each data as post}
		<li><a href="/">{post.title}</a></li>
	{/each}
</ul>
