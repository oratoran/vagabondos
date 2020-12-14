<script>
    import Gallery from 'svelte-image-gallery';
    import { metatags } from '@roxi/routify';
    metatags.title = 'Yeniköy Pizza Restaurant';
    metatags.description = 'Description coming soon...';
   
    const photos = 34;
</script>

<div class="flex w-5/6 mx-auto my-20">


<Gallery gap="10" maxColumnWidth="600">
    {#each Array(photos) as photo, i}
        
            <img src="/images/restoran/vagabondos-pizza-yenikoy-restaurant-{i+1}.jpg" alt=" Vagabondo's Yeniköy Pizza Restaurant">
       
    {/each}
</Gallery>

</div>