<script>
    
    import { metatags } from '@roxi/routify';
    metatags.title = 'Menümüz'
    metatags.description = 'Description coming soon...'
    
    import { onMount } from 'svelte';




onMount(async () => {

    const menu = document.getElementById('3cr-1');
    console.log('asa',menu);

    const scriptList = document.querySelectorAll("script[type='text/javascript']");
    console.log(scriptList);
    const convertedNodeList = Array.from(scriptList);
    const testScript = convertedNodeList.find(script => script.id === "3cr-1");
    console.log(testScript);
    testScript.parentNode.removeChild(testScript);


});
</script>

<svelte:head>
	<script id="3cr-1" type="text/javascript" src="https://imenupro.com/!3cr-1"> </script>
</svelte:head>

<div id="3cr-1"></div>




