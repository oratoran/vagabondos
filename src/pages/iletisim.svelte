<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'İletişim'
    metatags.description = 'Description coming soon...'

    import { onMount } from 'svelte';
    let name;

	onMount(() => {
		
		var form = document.getElementById("form");
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
   
       fetch("https://getform.io/f/f1e8d54c-247c-4a9c-b79c-2af6a0954701",
       {
           method: "POST",
           body: formData,
       })
       .then(response => {
				 if(response.ok) {
					 name = "ok"
				 }
			 })
       .catch(error => console.log(error))
       }

	});

</script>

<div class="flex flex-col md:flex-row md:w-4/5 mx-auto">
    <div class="md:w-1/2">
        <h1>İletişim</h1>
        <p>Köybaşı Caddesi Yalılar Durağı No: 168 Yeniköy / İstanbul / Turkiye 34464Aşağıdaki formu kullanarak bize görüş, yorum veya isteğinizi iletebilirsiniz..        </p>
        <form id="form" class="mt-8 space-y-6 md:w-1/2" action="" method="POST">
            <div>
              <div>
                <label for="email-address" class="sr-only">Email Adresiniz</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email adresiniz">
              </div>

              <div>
                <label for="your-name" class="sr-only">İsminiz</label>
                <input id="your-name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="İsminiz">
              </div>
            
            <div>
              <label for="message" class="sr-only">Mesajınız:</label>
              <textarea cols="50" rows="5" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mesajınız"></textarea>
            </div>
      
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </div>
        </form>
    </div>
    <div class="md:w-1/2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.5980593932945!2d29.063461999999998!3d41.11708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba4a63d80b3b9f6!2sVagabondo&#39;s%20Pizzeria!5e0!3m2!1str!2sus!4v1607937377073!5m2!1str!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" title="Vagabondos Restaurant"></iframe>
    </div>
</div>