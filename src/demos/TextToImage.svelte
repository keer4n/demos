<script lang="ts">
    import CollapsibleSeparator from "../components/CollapsibleSeparator.svelte";

    let canvas,
        h = 200,
        w = 200,
        t = "Hello",
        s = "60";
    $: {
        if (canvas) {
            canvas.height = h;
            canvas.width = w;
            fillCanvas();
            writeText(t, s);
        }
    }

    const fillCanvas = () => {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const writeText = (text, size) => {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.font = `${size}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let measure = ctx.measureText(text);
        ctx.fillText(text, canvas.width / 2, canvas.height / 2, canvas.width);
    };

    const downloadImage = () => {
        canvas.toBlob((b) => {
            const url = URL.createObjectURL(b);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'preview.png';
            anchor.click();
        })
    }
</script>

<div class="container">
    <div class="content">
        <canvas class="canvas" bind:this={canvas} />
    </div>

    <CollapsibleSeparator collapseTo="right" />

    <div class="settings">
        <fieldset>
            <label for="height">
                Height
                <input name="height" type="number" bind:value={h} />
            </label>
            <label for="width">
                Width
                <input name="width" type="number" bind:value={w} />
            </label>
            <label for="textContent">
                Text
                <input name="textContent" type="text" bind:value={t} />
            </label>

            <label for="fontSize">
                Font Size
                <input name="fontSize" type="number" bind:value={s} />
            </label>
        </fieldset>
        <div class="download">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="gray"
                on:click={downloadImage}
                ><path
                    d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
                /></svg
            >
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        height: 100vh;
    }

    .content {
        display: flex;
        width: 50%;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }

    .settings {
        background-color: #ddd;
        flex-grow: 1;
    }

    .canvas {
        margin: 0 auto;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    label input {
        margin: auto 0;
    }

    fieldset {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .download {
        padding: 1em;
    }

    .download svg:hover {
        fill: black;
        opacity: .9;
        cursor: pointer;
    }
</style>
