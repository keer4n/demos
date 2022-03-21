<script lang="ts">
    export let collapseTo = 'top';
    let separator;

    const onMouseOver = (e) => {
        if(collapseTo=='top'){
            separator.style.height = '2px';
        } else {
            separator.style.width = '2px';
        }
    };

    const onMouseOut = (e) => {
        if(collapseTo == 'top') {
            separator.style.height = '0';
        } else {
            separator.style.width = '0';
        }
    };

</script>

<div
    class="collapsible-separator"
    on:click={(e) => {
        let sibling;
        if(collapseTo == 'top'){
            sibling = e.target.previousSibling.previousSibling;
        } else {
            sibling = e.target.nextSibling.nextSibling;
        }
        let displayStyle = sibling.style.display;

        // default display is block
        if (!displayStyle) {
            displayStyle = "block";
        }

        if (displayStyle == "none") {
            sibling.style.display = "block";
        } else {
            sibling.style.display = "none";
        }
    }}

    on:mouseover={onMouseOver}
    on:focus={onMouseOver}

    on:mouseout={onMouseOut}
    on:blur={onMouseOut}

    bind:this={separator}
/>

<style>
    .collapsible-separator {
        border: 2px solid black;
    }

    /* .collapsible-separator:hover {
        height: 2px;
    } */
</style>
