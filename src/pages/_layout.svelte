<script>
    import NavLinks from "./_navlinks.svelte";
    import Content from './Content.svelte';
    import Modal from './Modal.svelte';
</script>

<!-- routify:options preload="proximity" -->
<Modal>
	<Content />
</Modal>
<div class="bg-yellow-300 bg-opacity-40">
    <header class="flex flex-col mx-auto py-5">
        <div>
            <img class="mx-auto" src="/vagabondos-yenikoy-logo.png" alt="vagabondos logo">
        </div>
            <NavLinks/>
           
    </header>
    </div>
    <div class="bg-yellow-50">
        <slot />
    </div>
<div class="bg-gray-800 py-6 text-center">
	<p class="text-white text-sm">Copyright {new Date().getFullYear()} - Vagabondos Restaurant - Yeniköy / Tasarım: <a href="https://www.kentajans.com" rel="noreferrer">Kent Ajans</a></p>
</div>
