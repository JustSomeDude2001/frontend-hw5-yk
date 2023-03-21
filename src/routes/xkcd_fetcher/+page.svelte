<script>
    import { XKCDFetcher } from "./xkcd_fetcher";
    import { onMount } from "svelte";

    let fetcher = new XKCDFetcher();

    function loadComic() {
        fetcher
        .fetchComic()
        .then(_ => {
            comicLoaded = true;
        })
        .catch(error => {
            console.error("Failed to load comic:", error);
        });
    }

    let comicLoaded = false;
    
    onMount(() => {
        loadComic();
        console.error("Loaded Comic")
    });
</script>

<svelte:head>
	<title>XKCD Comic Fetcher</title>
	<meta name="description" content="Simple XKCD comic fetcher" />
</svelte:head>

{#if comicLoaded}
    <p>Random XKCD comic (Note, it may take time to load.)</p>
    <h1>{fetcher.comicTitle}</h1>
    <img src="{fetcher.comicImage}" alt="{fetcher.comicAlt}">
    <p>Uploaded on {fetcher.comicDate}</p>
{/if}
