<script lang="ts">
	import CollapsibleSeparator from './components/CollapsibleSeparator.svelte';

	import TFJS from './demos/TFJS.svelte';
	import TextToImage from './demos/TextToImage.svelte';

	const views = {
		TFJS,
		TextToImage,
	}

	// set first view as selected
	let selectedView = Object.keys(views)[0];
	document.getElementsByTagName('title')[0].innerText = selectedView;
	let storedSelectedView = localStorage.getItem('selectedView');
	if(storedSelectedView) {
		selectedView = storedSelectedView;
	}

</script>

<main>
	<select name="demo" on:change={(e) => {
		selectedView = e.target.value;
		localStorage.setItem('selectedView', selectedView);
		document.getElementsByTagName('title')[0].innerText = selectedView;
	}}>
	{#each Object.keys(views) as view}
		<option value={view} selected={view == selectedView}>{view}</option>
	{/each}
	</select>

	<CollapsibleSeparator/>

	<div class="view">
		<svelte:component this={views[selectedView]}></svelte:component>
	</div>
</main>

<style></style>