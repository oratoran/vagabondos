<script>
    import { metatags } from '@roxi/routify'
    const since = (new Date().getFullYear()) - 1989;
    const isMonday = new Date().getDay() == 1 ? '-- BUGÜN KAPALIYIZ --': '';
    metatags.title = "Vagabondo's Pizza Restaurant - Yeniköy Pizza"
    metatags.description = `Boğaz Kıyısında Bir Yeniköy Klasiği olan Vagabondo’s Pizza Restaurant 1989 dan bu zamana kadar, ${since} yıldır aralıksız sizlere hizmet vermektedir.`;
</script>

    <div class="py-8 flex md:flex-row flex-col-reverse justify-center md:space-x-8 bg-hero-pattern bg-cover">
        <div class="md:w-auto md:mx-1 w-80 border-8 border-yellow-100 mx-auto my-6"><img src="/images/vagabondo_restaurant_home_41.jpg" alt="vagabondos pizza restaurant 1"></div>
        <div class="md:w-auto w-80 border-8 border-yellow-100 mx-auto my-6"><img src="/images/vagabondo_restaurant_home_6.jpg" alt="vagabondos pizza restaurant 2"></div>
        <div class="md:w-auto w-80 border-8 border-yellow-100 mx-auto my-6 px-8 max-w-xs bg-yellow-50">
            <h1 class="text-xl py-3">Vagabondo’s Pizza</h1>
            <img src="/images/vagabondo_restaurant_home_desc.jpg" alt="vagabondos pizza dış görünüşü">
            <p class="py-2">Boğaz Kıyısında Bir Yeniköy Klasiği olan Vagabondo’s Pizza 1989 dan bu zamana kadar, {since} yıldır aralıksız sizlere hizmet vermektedir.</p>
    
            <p class="py-2">Romantik atmosferi ile ister soğuk bir kış günü isterseniz güneşli ışıl ışıl bir yaz gününde gerçek İtalyan pizzasının keyfini sürebilirsiniz.</p>
        </div>
    </div>
    <div class=" flex-row md:flex justify-center text-center py-20 bg-red-900">
        <div class="hidden boxes mx-4 my-4">
            <div class="p-6 max-w-sm mx-auto bg-yellow-50 rounded-xl shadow-md flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-xl font-medium text-red-900">Açılış Kapanış (Open Daily)</div>
                  <p class="text-gray-500">Pazar günü hariç hergün 12.00 - 19.00</p>
                    <p class="italic underline text-green-700">Pazar günleri kapalıyız! (We are closed on Sundays!)</p>
                </div>
            </div>
        </div>
        <div class="hidden boxes mx-4 my-4">
            <div class="p-6 max-w-sm mx-auto bg-yellow-50 rounded-xl shadow-md flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <svg class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                </div>
                <div>
                  <div class="text-xl font-medium text-red-900">GEL-AL Paket servisi</div>
                  <p class="text-gray-500">Salgın boyunca sadece paket servis</p>
                    <p class="italic underline text-green-700">Masa müşterisi kabul edemiyoruz</p>
                </div>
            </div>
        </div>
        <div>
            <p class="text-white text-4xl mb-2 animate-bounce">{isMonday}</p>
            <p class="text-white">AÇILIŞ: 16:00 KAPANIŞ: 23:00 - PAZARTESİ GÜNLERİ KAPALIYIZ. YEMEKSİZ, İÇECEK SERVİSİ YAPILMAMAKTADIR.</p>
        </div>
        <div class="hidden boxes mx-4 my-4">
            <div class="p-6 max-w-sm mx-auto bg-yellow-50  rounded-xl shadow-md flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <svg class="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                </div>
                <div>
                  <div class="text-xl font-medium text-red-900">0-212-299-0054</div>
                  <p class="text-gray-500">GEL-AL Paket Servisimiz</p>
                    <p class="italic underline text-green-700">Siparişinizi hızlıca hazırlayalım</p>
                </div>
            </div>
        </div>
    </div>