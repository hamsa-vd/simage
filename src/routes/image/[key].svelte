<script context="module">
	export function load({ page: { params } }) {
		return {
			props: {
				key: params.key + '.jpg'
			}
		};
	}
</script>

<script>
	import { Storage } from '@aws-amplify/storage';
	import Auth from '../../lib/auth.svelte';
	export let key;
</script>

<Auth>
	<div class="w-full flex-1 p-8">
		{#await Storage.get('images/' + key)}
			<p>loading...</p>
		{:then imgUrl}
			<img src={imgUrl.toString()} alt={key} class="object-cover rounded-xl h-full w-full" />
		{/await}
	</div>
</Auth>

<style>
	div {
		aspect-ratio: 16/9;
	}
</style>
