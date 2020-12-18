<script>
    

    import { onMount } from 'svelte';
function detach(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
    else if (node) console.warn('node ' + node + ' is detached. Please submit a bug report.');
    else console.warn('node is falsy. Please submit a bug report.');
}
const googlaApiKey = 'AIzaSyCJVu4jI5maTOmYwf2bIqtGT18JoXjum8g';


onMount(async () => {

detach();
});
</script>

<svelte:head>
	<script id="3cr-1" type="text/javascript" src="https://imenupro.com/!3cr-1"> </script>
</svelte:head>
<div id="3cr-1"></div>