<script lang="ts">
    import { getItem, getBestStories, getNewStories, getTopStories } from '../apis/hn.js';
    let stories = []
    getBestStories()
        .then(storyIds => {
            storyIds.forEach(async id => {
                const story = await getItem(id);
                stories = [...stories, story];
            });
        });
    
    window.addEventListener('scroll', maybeLoadMore);
    window.addEventListener('resize', maybeLoadMore);
    function maybeLoadMore(e) {
        console.log(e);
        console.log(e.scrollY);
        console.log('scroll', e.target.scrollingElement);
    }

    async function handleNavClick(e) {
        const loadType = e.target.dataset.type;
        let storyIds;
        switch(loadType) {
            case "best":
                storyIds = await getBestStories();
                break;
            case "top":
                storyIds = await getTopStories();
                break;
            case "new":
                storyIds = await getNewStories();
                break;
        }
        stories = [];
        storyIds.forEach(async id => {
                const story = await getItem(id);
                stories = [...stories, story];
            });

    }
</script>

<div class="container">
    <nav>
        <ul>
            <li><button on:click={handleNavClick} data-type="best">best</button></li>
            <li><button on:click={handleNavClick} data-type="top">top</button></li>
            <li><button on:click={handleNavClick} data-type="new">new</button></li>
        </ul>
    </nav>
    <ol>
        {#if stories}
        {#each stories as story, id}
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
        {/if}
    </ol>
</div>

<style>
    .story-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav li {
        display: inline-block;
    }
    
    nav li a {
        padding: 0.5em;
        margin-right: 1em;
    }
</style>