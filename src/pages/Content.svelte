<script>
    import { getContext } from 'svelte';
    import PopupLong from './PopupLong.svelte';
  
    const { open } = getContext('simple-modal');

      const showPopupLong = () => {
          open(PopupLong, { message: "Kısıtlamalar boyunca kapalıyız!" });
      };
  
      import { onMount } from 'svelte';
      onMount(async () => {
          showPopupLong();
      });
  </script>