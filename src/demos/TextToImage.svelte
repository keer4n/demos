<script lang="ts">
import { onMount } from 'svelte';

   import CollapsibleSeparator from '../components/CollapsibleSeparator.svelte';

   let canvas, h = 200, w = 200, t="Hello", s;
   $: {
       if(canvas){
           canvas.height = h;
           canvas.width = w;
           fillCanvas();
           writeText(t,s);
        }
   }

   const fillCanvas = () => {
       const ctx = canvas.getContext('2d');
       ctx.fillStyle = 'blue';
       ctx.fillRect(0,0, canvas.width, canvas.height);
   };

   const writeText = (text, size) => {
       const ctx = canvas.getContext('2d');
       ctx.fillStyle = 'black';
       ctx.font = `${size}px serif`;
       ctx.textAlign = 'center';
       ctx.textBaseline = 'middle';
       let measure = ctx.measureText(text);
       ctx.fillText(text, canvas.width/2, canvas.height/2, canvas.width )
   }

   onMount(() => {
       fillCanvas();
   })
    
</script>

<div class="container">
    <div class="content">
        <canvas class="canvas" bind:this={canvas}></canvas>
    </div>

    <CollapsibleSeparator collapseTo="right"/>

    <div class="settings">
        <fieldset>
            <label for="height">
                <input name="height" type="number" bind:value={h}>
            </label>
            <label for="width">
                <input name="width" type="number" bind:value={w}>
            </label>
            <label for="textContent">
                <input name="textContent" type="text" bind:value={t}>
            </label>

            <label for="fontSize">
                <input name="fontSize" type="number" bind:value={s}>
            </label>

        </fieldset>

    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        height: 200px;
    }

    .content {
        display: flex;
        width: 50%;
        flex-grow: 1;
        background-color: aqua;
        align-items: center;
        justify-content: center;
    }
    
    .settings{
        background-color: bisque; 
        flex-grow: 1;
    }
    
    .canvas {
        margin: 0 auto; 
    }
</style>
