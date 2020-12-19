<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'İletişim'
    metatags.description = 'Description coming soon...'

    import { onMount } from 'svelte';
    let formRes;

	onMount(() => {
    
    const formResult = document.getElementById("formResult");
	  const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);
   
    function formSubmit(e) {
       e.preventDefault()
   
       const formData = new FormData();
       formData.append(
           'name',
           document.querySelector('input[name="name"]').value
       )
       formData.append(
           'email',
           document.querySelector('input[name="email"]').value
       )
       formData.append(
           'message',
           document.getElementById("message").value
       )
   
       fetch("https://getform.io/f/2ea459e6-2f7e-4ab6-b83f-3466164fbcae",
       {
           method: "POST",
           body: formData,
       })
       .then(response => {
				 if(response.ok) {
           formResult.classList.remove('hidden');
           formResult.classList.add('text-green-400');
           formResult.textContent = "Mesajınız ulaştı, en kısa sürede bilgilendireceğiz..."
           form.reset();
				 }
			 })
       .catch(error => {
          formResult.classList.remove('hidden');
          formResult.classList.add('text-red-600');
          formResult.textContent = "Form iletilemedi, lütfen telefonla bize ulaşın..."
        })
       }

  });
  
  grecaptcha.ready(function() {
			grecaptcha.execute('6Lf-_QwaAAAAAKzWA_oXbE99qZmS51gOSJ3yxuIR', {action: 'homepage'})
			.then(function(token) {
			  document.getElementById('captchaResponse').value = token;
			});
	});
  
</script>

<div class="md:w-4/5 mx-auto py-10 font-semibold text-center">
  <h1 class="text-green-600 text-xl">Vagabondo's Restaurant'a Ulaşım</h1>
  <p>Boğazın kıyısı Yeniköy merkezinde hizmetinizdeyiz.</p>
</div>

<div class="flex flex-col md:flex-row md:w-4/5 mx-auto">
    <div class="md:w-1/2 mx-8 content-center">
        <h2 class="text-red-900 text-lg">İletişim Formu </h2>
        <p class="py-1">Köybaşı Caddesi Yalılar Durağı No: 168 Yeniköy 34464 İstanbul / Türkiye </p>
        <p class="py-1">Aşağıdaki formu kullanarak bize görüş, yorum veya isteğinizi iletebilirsiniz..        </p>
        <form id="form" class="mt-8 space-y-6" action="" method="POST">
          <input type="hidden" id="captchaResponse" name="g-recaptcha-response">
              <div class="py-1">
                <label for="email-address" class="sr-only">Email Adresiniz</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email adresiniz">
              </div>

              <div class="py-1">
                <label for="your-name" class="sr-only">İsminiz</label>
                <input id="your-name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="İsminizi">
              </div>
            
            <div class="py-1">
              <label for="message" class="sr-only">Mesajınız:</label>
              <textarea id="message" required cols="50" rows="5" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mesajınız"></textarea>
            </div>
      
            <div class="py-1">
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Formu Gönder
              </button>
            </div>
        </form>
        
          <p id='formResult' class="py-2 "></p>
    

    </div>
    <div class="md:w-1/2 align-middle">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.5980593932945!2d29.063461999999998!3d41.11708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba4a63d80b3b9f6!2sVagabondo&#39;s%20Pizzeria!5e0!3m2!1str!2sus!4v1607937377073!5m2!1str!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" title="Vagabondos Restaurant"></iframe>
    </div>
</div>