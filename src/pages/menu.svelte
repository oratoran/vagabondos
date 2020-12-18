<script>
    
    import { metatags } from '@roxi/routify';
    metatags.title = 'Vagabondo Pizza Menüsü'
    metatags.description = 'Vagabondo Restaurant Menüsü Yeniköy. Nefis Pizzaların yanı sıra Başlangıçlar, Salatalar, Makarnalar ve Tatlılar ile gününüze keyif katıyor...'
    
    import { onMount } from 'svelte';

    function loadMenu(url) {
        const script = document.createElement("script");  // create a script DOM node
        script.src = url;  // set its src to the provided URL

        document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }
	
    onMount(async () => {

        loadMenu('https://imenupro.com/!3cr-1');

    });
	
</script>

<div class="md:w-4/5 mx-auto py-10 font-semibold text-center">
    <h1 class="text-green-600 text-2xl">Vagabondo's Restaurant Menüsü</h1>
    <p>Sadece enfes pizzaların değil İtalyan mutfağının tüm lezzetlerini sunuyoruz.</p>
</div>

<div class="md:w-4/5 mx-auto">
    <div id="3cr-1"></div>
</div>





