<script lang="ts">
    import { sitemap } from "$lib/sitemap";
    import "../app.css";
</script>

<div class="w-screen h-screen overflow-hidden flex flex-col">
    <img class="w-full md:h-32" src="{sitemap.site.images.header}" alt="The header for my site.">
    <div class="flex w-full h-full">
        <img class="w-1/12" src="{sitemap.site.images.left}" alt="The left of my site.">
        <main class="font-main bg-yellow-50 p-8 w-full h-full overflow-scroll pb-[200px]">
            <slot />
        </main>
        <img class="w-1/12" src="{sitemap.site.images.right}" alt="The right of my site.">
    </div>
</div>
