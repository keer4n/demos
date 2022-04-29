<script lang="ts">
    import {
        getItem,
        getBestStories,
        getNewStories,
        getTopStories,
    } from "../apis/hn.js";
    let stories = [];
    getBestStories().then((storyIds) => {
        storyIds.forEach(async (id) => {
            const story = await getItem(id);
            stories = [...stories, story];
        });
    });

    window.addEventListener("scroll", maybeLoadMore);
    window.addEventListener("resize", maybeLoadMore);
    function maybeLoadMore(e) {
        console.log(e);
        console.log(e.scrollY);
        console.log("scroll", e.target.scrollingElement);
    }

    async function handleNavClick(e) {
        const loadType = e.target.dataset.type;
        let storyIds;
        switch (loadType) {
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
        storyIds.forEach(async (id) => {
            const story = await getItem(id);
            stories = [...stories, story];
        });
    }
</script>

<div class="container">
    <nav>
        <ul>
            <li>
                <button on:click={handleNavClick} data-type="best">best</button>
            </li>
            <li>
                <button on:click={handleNavClick} data-type="top">top</button>
            </li>
            <li>
                <button on:click={handleNavClick} data-type="new">new</button>
            </li>
        </ul>
    </nav>
    <ol>
        {#if stories}
            {#each stories as story, id}
                <li>
                    <div>
                        <div
                            class="story-title"
                            on:click={(e) => {
                                const kids = story.kids;
                                const modalContainer =
                                    document.createElement("div");
                                modalContainer.classList.add("modal-container");
                                document.body.classList.add('modal-open');

                                const modal = document.createElement("div");
                                modal.classList.add("modal");

                                const title = document.createElement('h3');
                                title.innerText = story.title;
                                modal.append(title);

                                kids.forEach(async id => {
                                    let comment = await getItem(id);
                                    const commentText = document.createElement('p');
                                    commentText.innerHTML = comment.text;
                                    modal.append(commentText);
                                    console.log('comment');
                                })

                                modalContainer.append(modal);
                                modalContainer.onclick = (e) => {
                                    modalContainer.remove();
                                    document.body.classList.remove('modal-open');
                                };

                                modal.onclick = (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                };

                                document.body.append(modalContainer);
                            }}
                        >
                            <h3>
                                [{story.score}] {story.title}
                                <a href={story.url} target="_blank"> L </a>
                            </h3>
                            <pre>{new Date(
                                    story.time * 1000
                                ).toDateString()}</pre>
                        </div>
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

    :global(.modal-container) {
        position: fixed;
        top: 0;
        left: 0;
        /* text-align: center; */
        margin: auto 0;
        background-color: grey;
        height: 100vh;
        width: 100vw;
    }

    :global(.modal) {
        max-width: 80%;
        height: 90vh;
        margin: 10px auto;
        overflow-y: auto;
        padding: 1em;
    }

    :global(body.modal-open){
        overflow: hidden;
    }
</style>
