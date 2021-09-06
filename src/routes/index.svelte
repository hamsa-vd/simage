<script lang="ts">
	import { images } from '../auth-store';
	import Auth from '../lib/auth.svelte';
	import { Storage } from '@aws-amplify/storage';
</script>

<Auth>
	<div
		class="flex-1 grid grid-flow-row gap-4 w-full p-8  justify-around items-center overflow-y-auto"
	>
		{#each $images.filter((img) => img.size > 0) as image}
			<a class="img-card rounded-lg" href={'image/' + image.key.split('/')[1].split('.')[0]}>
				{#await Storage.get(image.key)}
					<p>loading</p>
				{:then imageUrl}
					<img
						src={imageUrl.toString()}
						class="h-full w-full object-cover "
						alt={image.key.split('/').pop()}
					/>
				{/await}
			</a>
		{/each}
	</div>
</Auth>

<style>
	div.grid {
		grid-template-columns: repeat(auto-fill, 500px);
	}

	a.img-card {
		margin: 0px;
		aspect-ratio: 16/9;
		background-color: rgb(177, 177, 177);
		overflow: hidden;
	}
</style>
