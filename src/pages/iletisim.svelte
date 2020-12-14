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
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Name</label>
                <input id="password" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name">
              </div>
            </div>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
      
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: lock-closed -->
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
        </form>
    </div>
    <div class="md:w-1/2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6011.5980593932945!2d29.063461999999998!3d41.11708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba4a63d80b3b9f6!2sVagabondo&#39;s%20Pizzeria!5e0!3m2!1str!2sus!4v1607937377073!5m2!1str!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" title="Vagabondos Restaurant"></iframe>
    </div>
</div>