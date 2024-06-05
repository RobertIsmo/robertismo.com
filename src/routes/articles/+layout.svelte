<script lang="ts">
    import { page } from "$app/stores";
    import { sitemap } from "$lib/sitemap";

    const articleid = $page.url.pathname.split('/')[2];
    const value = sitemap.articles[articleid];
</script>
<div class="flex flex-col gap-8">
    <section>
        <a class="hover:font-bold hover:italic underline" href="/">home</a>
    </section>
    <header class="flex flex-col gap-4">
        <h4 class="font-bold text-5xl text-center">{value.title}</h4>
        <ul class="flex flex-wrap gap-4 text-gray-400">
            {#if value.series}{#each value.series as series}
                <li>/{series.name}</li>
            {/each}{/if}
            {#if value.tags}{#each value.tags as tag}
                <li>#{tag}</li>
            {/each}{/if}
        </ul>
        <p class="text-sm text-gray-400 text-center">Created: <span>{value.dateCreated}</span> Updated: <span>{value.dateUpdated}</span></p>
        <h5 class="italic text-center text-gray-500">{value.subtitle}</h5>
    </header>
    <article class="text-center whitespace-pre">
        <slot />
    </article>
</div>
