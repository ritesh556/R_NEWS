<template>
  <div class="bg-gray-100 p-4">
  <h1 class="text-2xl font-bold mb-6 text-center text-blue-600">Neplai News</h1>
  <div class="flex flex-wrap -mx-4">
    <div v-for="(singledata, index) in filteredNews" :key="index" class="w-full  md:w-1/2 lg:w-1/3 px-4 mb-4 	">
      <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:bg-slate-400">
        <div class="flex-none">
          <img :src="singledata.image_url || defaultImage"    alt="Article Image" class="w-full h-48 object-cover">
          

        </div>
        <div class="flex-auto p-4">
          <p class="text-gray-500 text-sm"><strong>Source:</strong> {{ singledata.source_id}}</p>
          <p class="text-gray-500 text-sm"><strong>Language:</strong> {{ singledata.language }}</p>
          <p class="text-gray-500 text-sm"><strong>publishedAt:</strong> {{ singledata.pubDate }}</p>
          <h2 class="text-lg font-semibold mb-2">{{ singledata.title }}</h2>
          <p class="text-gray-700 mb-4 overflow-hidden text-ellipsis	" >{{ singledata.description }}</p>
          
          
          <a :href="singledata.link" class="text-blue-500 hover:text-blue-900 " target="_blank" >Read more..</a>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>


<script >


import { useNewsStore } from '@/stores/counter';
import { onMounted, ref, computed } from 'vue';
import defult from '@/components/icons/nopic.jpg'




export default {
setup() {
  const newsStore = useNewsStore();
  const defaultImage = ref(defult);

  onMounted(() => {
    newsStore.fetchDataFromAPINepali();
  });

  const filteredNews = computed(() => newsStore.nepaliNews);


  // function setAltImg(e){
  //   e.target.src=defaultImage

  // }


  return {
    filteredNews,
    defaultImage,
   
    
   
  };
}
}




</script>