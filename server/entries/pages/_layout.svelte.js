import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-b4s6cj.svelte-b4s6cj{justify-content:center}nav.svelte-b4s6cj.svelte-b4s6cj{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.2)}ul.svelte-b4s6cj.svelte-b4s6cj{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-b4s6cj.svelte-b4s6cj{position:relative;height:100%}nav.svelte-b4s6cj a.svelte-b4s6cj{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-b4s6cj.svelte-b4s6cj:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="svelte-b4s6cj"><nav class="svelte-b4s6cj"><ul class="svelte-b4s6cj"><li class="svelte-b4s6cj"><a href="${escape(base, true) + "/"}" class="svelte-b4s6cj">Home</a></li>
			<li class="svelte-b4s6cj"><a href="${escape(base, true) + "/xkcd_fetcher"}" class="svelte-b4s6cj">XKCD Fetcher</a></li></ul></nav>
</header>`;
});
const SocialBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".socials.svelte-18oolnc p.svelte-18oolnc{text-align:center;font-weight:bold;font-style:italic}",
  map: null
};
let ghLink = "http://github.com/justsomedude2001";
let tgLink = "https://t.me/JustSomeDude22";
let email = "mailto:kim.yaroslavik@gmail.com";
const SocialBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ghLinkElem;
  let tgLinkElem;
  let emailElem;
  $$result.css.add(css$1);
  return `<div class="socials svelte-18oolnc"><p class="svelte-18oolnc">Contact Me:
    </p>

    <nav><li><a${add_attribute("href", ghLink, 0)}${add_attribute("this", ghLinkElem, 0)}>GitHub</a></li>
        <li><a${add_attribute("href", tgLink, 0)}${add_attribute("this", tgLinkElem, 0)}>Telegram</a></li>
        <li><a${add_attribute("href", email, 0)}${add_attribute("this", emailElem, 0)}>Email</a></li></nav>
</div>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1wevoko{display:flex;flex-direction:column;min-height:100vh}main.svelte-1wevoko{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1wevoko{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1wevoko{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1wevoko"><header>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</header>

	<main class="svelte-1wevoko">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-1wevoko">${validate_component(SocialBar, "SocialBar").$$render($$result, {}, {}, {})}</footer>
</div>`;
});
export {
  Layout as default
};
