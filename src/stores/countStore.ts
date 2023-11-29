import { writable } from 'svelte/store';

export function createCountStore(initialValue: number) {
	const count = writable(initialValue);
	function increment() {
		count.update((c) => c + 1);
	}
	function decrement() {
		count.update((c) => c - 1);
	}
	function reset() {
		count.set(0);
	}
	function square() {
		count.update((c) => c * c);
	}

	return {
		...count,
		increment,
		decrement,
		reset,
		square
	};
}
