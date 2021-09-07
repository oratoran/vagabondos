<script>
    import NavLinks from "./_navlinks.svelte";
    // import Content from './Content.svelte';
    // import Modal from './Modal.svelte';
</script>

<!-- routify:options preload="proximity" -->
<!-- to show popup Modal>
	<Content />
</Modal -->
<div class="bg-yellow-300 bg-opacity-40">
    <header class="flex flex-col mx-auto py-5">
        <div>
            <img class="mx-auto" src="/vagabondos-yenikoy-pizza.png" alt="vagabondos logo">
        </div>
            <NavLinks/>
           
    </header>
    </div>
    <div class="flex-row md:flex justify-center text-center py-20 bg-red-900">
        <h3 class="text-2xl text-white">Sayın müşterimiz, Vagabondo's Pizza restoranımızdaki tadilat çalışmaları tamamlanmıştır. <br>Yenilenen ve Vagabondo's ruhunu yansıtan pizza restoranımız yeniden hizmet vermektedir.</h3>
    </div>
    <div class="bg-yellow-50">
        <slot />
    </div>
<div class="bg-gray-800 py-6 text-center">
	<p class="text-white text-sm">Copyright {new Date().getFullYear()} - Vagabondo's Pizza - Yeniköy / Tasarım: <a href="https://www.kentcode.com" rel="noreferrer">Kent Code</a></p>
</div>
