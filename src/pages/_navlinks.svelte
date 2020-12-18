<script>
  import { url, isActive } from "@roxi/routify";
  let show = false;
  const _links = [
    ["/", "Ana Sayfa"],
    ["/menu", "Menümüz"],
    ["/yenikoy-pizza-restaurant", "Restaurantımız"],
    ["/iletisim", "İletişim"],
  ];

  function handleBurger() {
    show = !show;
  }
</script>

<style>
  aside {
    text-align: center;
  }
 

  .link {
    display: block;
    white-space: nowrap;
  }
  .active {
    font-weight: bold;
  }
  .mobile-nav {
    font-size: 18px;
    padding: 8px;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.075);
    display: block;
  }
  .mobile-nav * {
    vertical-align: middle;
  }


  .burger {
    font-size: 24px;
  }
  nav {    
    display: none;
  }

  @media (min-width: 640px) {
    nav {
      margin: 16px;
      border-radius: 4px;
      box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.075);
      display: inline-block;
      position: relative;
      width: auto;
    }
    .link {
      padding: 0 16px;
      min-width: 56px;
      display: inline-block;
    }

    .mobile-nav {
      display: none;
    }
  }

  nav.show {
    display: block;
  }
</style>

<aside>
  <nav class="mobile-nav bg-yellow-100 w-1/6 mx-auto my-4">
    <span class="burger" on:click={handleBurger}>☰</span>
  </nav>
  <nav class="bg-yellow-100 p-4" class:show on:click={() => (show = false)}>
    {#each _links as [path, name]}
      <a class="link p-2 text-lg" class:active={$isActive(path)} href={$url(path)}>
        {name}
      </a>
    {/each}
  </nav>
</aside>
