<script lang="ts">
    import { getItem, getBestStories } from '../apis/hn.js';
    let stories =
    getBestStories()
        .then(storyIds => {
            const storyPromises = storyIds.slice(0, 15).map(id => getItem(id));
            return Promise.all(storyPromises);
        })
</script>

<div class="container">
    <ol>

        {#await stories then s}
        {#each s as story, id}
            <li>
                <div>
                    <a href="{story.url}" target="_blank">
                        <div class="story-title">
                            <h3>[{story.score}] {story.title}</h3>
                            <pre>{new Date(story.time*1000).toDateString()}</pre>
                        </div>
                    </a>
                </div>
            </li>
        {/each}
        {/await}
    </ol>
</div>

<style>
    .story-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>