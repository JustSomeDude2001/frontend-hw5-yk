<script lang="ts">
    import { onMount } from 'svelte'; 

    let ghLink: string = "http://github.com/justsomedude2001";
    let tgLink: string = "https://t.me/JustSomeDude22";
    let email: string = "mailto:kim.yaroslavik@gmail.com";
  
    let ghLinkElem: HTMLAnchorElement;
    let tgLinkElem: HTMLAnchorElement;
    let emailElem: HTMLAnchorElement;

    onMount(() => {
        ghLinkElem.setAttribute("href", ghLink);
        tgLinkElem.setAttribute("href", tgLink);
        emailElem.setAttribute("href", email);
    });
</script>
  
<div class="socials">
    <p>
        Contact Me:
    </p>

    <nav>
        <li>
            <a bind:this={ghLinkElem} href={ghLink}> GitHub</a>
        </li>
        <li>
            <a bind:this={tgLinkElem} href={tgLink}> Telegram</a>
        </li>
        <li>
            <a bind:this={emailElem} href={email}> Email</a>
        </li>
    </nav>
</div>

<style>
    .socials p {
        text-align: center;
        font-weight: bold;
        font-style: italic;
    }
</style>
  