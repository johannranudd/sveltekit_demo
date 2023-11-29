import { getItem, setItem } from '@/storage/localstorage';
import { writable } from 'svelte/store';

const count = writable(getItem('count') || 0);

count.subscribe((currentValue) => {
	if (typeof window !== 'undefined') {
		setItem('count', currentValue);
	}
});

export function inc() {
	count.update((c) => c + 1);
}

export function dec() {
	count.update((c) => c - 1);
}

export default count;
