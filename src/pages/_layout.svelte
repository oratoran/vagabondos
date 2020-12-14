<script>
    import NavLinks from "NavLinks.svelte";
</script>

<!-- routify:options preload="proximity" -->
<div class="bg-yellow-300 bg-opacity-40">
    <header class="flex flex-col mx-auto py-5">
        <div>
            <img class="mx-auto" src="/vagabondos-yenikoy-logo.png" alt="vagabondos logo">
        </div>
            <NavLinks/>
           
    </header>
    </div>
<slot />
<div class="bg-gray-800 py-6 text-center">
	<p class="text-white text-sm">Copyright 2020 - Vagabondos Restaurant - Yeniköy / Tasarım: <a href="https://www.kentajans.com">Kent Ajans</a></p>
</div>
