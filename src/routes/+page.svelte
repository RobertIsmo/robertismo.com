<script lang="ts">
    import { sitemap } from "$lib/sitemap";
</script>

<section class="flex flex-col w-full gap-4">
    <h1 class="font-bold text-5xl text-center">{sitemap.site.header}</h1>
    <h2 class="italic text-gray-500 text-xl font text-center md:w-1/2 mx-auto">{sitemap.site.subtitle}</h2>
</section>
<section class="mt-2">
    <ol class="border-black border-4 rounded-md p-2">
        {#each Object.entries(sitemap.articles).reverse() as [link, value]}
            <li class="group border-b-2 border-gray-500 hover:bg-yellow-100 py-2"><a href="/articles/{link}">
                <h4 class="group-hover:font-bold text-xl">{value.title}</h4>
                <p class="text-sm text-gray-400">Created: <span>{value.dateCreated}</span> Updated: <span>{value.dateUpdated}</span></p>
                <h5>{value.subtitle}</h5>
                <ul class="flex flex-wrap gap-4 text-gray-400">
                    {#if value.series}{#each value.series as series}
                        <li>/{series.name}</li>
                    {/each}{/if}
                    {#if value.tags}{#each value.tags as tag}
                        <li>#{tag}</li>
                    {/each}{/if}
                </ul>
            </a></li>
        {/each}
    </ol>
</section>
