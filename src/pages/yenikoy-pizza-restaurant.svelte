<script>
    import Gallery from 'svelte-image-gallery';
    import { onMount } from 'svelte';
    import { metatags } from '@roxi/routify';
    metatags.title = 'Yeniköy Pizza Restaurant';
    metatags.description = 'Description coming soon...';
    const photos = 34; // number of photos 




onMount(async () => {
    
  const lightbox = document.getElementById('lightbox');

  const createModal = (imgSrc, imgAlt) => {
    // Create DOM elements
    const modalElement = document.createElement('div');
    modalElement.className = 'lightbox-modal';

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    // Set img and figcaption attributes
    img.src = imgSrc;
    img.alt = imgAlt;
    figcaption.innerText = imgAlt;

    // Append elements to parent modalElement
    figure.appendChild(img);
    figure.appendChild(figcaption);
    modalElement.appendChild(figure);

    // Button element to close modal on click
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <title>close</title>
        <path
            d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z">
        </path>
    </svg>
    `;

    closeBtn.addEventListener('click', () => {
      document.body.removeChild(modalElement);
    });

    modalElement.appendChild(closeBtn);

    return modalElement;
  };

  lightbox.addEventListener('click', e => {
    // Do nothing if user clicks on anything other than img tag.
    if (e.target.tagName.toLowerCase() !== 'img') {
      return;
    }

    // Append modal to body
    document.body.appendChild(createModal(e.target.src, e.target.alt));
  });

    });
   
    
</script>

<div class="md:w-4/5 mx-auto pt-10 font-semibold text-center">
  <h1 class="text-green-600 text-2xl">Vagabondo's Restaurant'ı Keşfedin</h1>
  <p>Vagabondo’s Restaurant 1989 yılından bu yana aralıksız olarak hizmet vermektedir.</p>
</div>

<div class="flex md:w-4/5 mx-auto my-20 lightbox" id="lightbox">
<Gallery gap="10" maxColumnWidth="600">
    {#each Array(photos) as photo, i}
        
            <img src="/images/restoran/vagabondos-pizza-yenikoy-restaurant-{i+1}.jpg" alt=" Vagabondo's Yeniköy Pizza Restaurant">
       
    {/each}
</Gallery>
</div>

<style global>

    /* Modal */
    .lightbox-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.9);
      display: block;
      animation: fade-in 0.4s;
    }
    
    .lightbox-modal figure {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 80vw;
      max-height: 80vh;
    }
    
    .lightbox-modal img {
      max-width: 80vw;
      max-height: 80vh;
    }
    
    .lightbox-modal figcaption {
      color: #eee;
      font-style: italic;
      font-size: 1.2rem;
      text-align: center;
    }
    
    .lightbox-modal button {
      background: transparent;
      border-radius: 100%;
      border: 2px solid #eee;
      display: block;
      width: 30px;
      height: 30px;
    
      display: flex;
      justify-content: center;
      align-items: center;
    
      position: absolute;
      top: 20px;
      right: 20px;
    
      cursor: pointer;
    }
    
    .lightbox-modal button svg {
      display: block;
      fill: #eee;
    }
    
    @keyframes fade-in {
      from {
        opacity: 0;
      }
    
      to {
        opacity: 1;
      }
    }
    </style>