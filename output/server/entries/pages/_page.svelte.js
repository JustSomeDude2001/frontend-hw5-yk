import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "bio.svelte-64pikt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-64pikt{width:100%}h2.svelte-64pikt{font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-19p1brn_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="Home" content="Home page"><!-- HEAD_svelte-19p1brn_END -->`, ""}

<bio class="svelte-64pikt"><h1 class="svelte-64pikt">Yaroslav Kim</h1>
    <h2 class="svelte-64pikt">Personal Webpage</h2>
    <p>My name is Yaroslav Kim. I am a student at the University of Innopolis. I am currently studying Computer Science. I am interested in programming, especially in game development.</p>
    <p>I am currently working as a gamedev curator for <a href="https://nti-center.ru/">National Technologies Institute</a> and</p>
    <p>Here are some of the project I have worked on:</p>
    <ul><li><a href="https://justsomedude22.itch.io/offbeat-snowflake">&quot;Offbeat Snowflake&quot;</a></li>
        <li><a href="https://anlaut.itch.io/pixel-0">&quot;Pixel-0&quot;</a></li>
        <li><a href="https://anlaut.itch.io/ctg">&quot;Capture the Geese&quot;</a></li></ul>
</bio>`;
});
export {
  Page as default
};
