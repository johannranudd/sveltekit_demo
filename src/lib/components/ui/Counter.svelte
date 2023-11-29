<script lang="ts">
	import count, { inc, dec } from '@/stores/countStore';
</script>

<div>
	<button class="primary-btn" on:click={dec}>-1</button>
	<button class="primary-btn" on:click={inc}>+1</button>
	<p>{$count}</p>
</div>
