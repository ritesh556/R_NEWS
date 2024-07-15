<template>
    <div class="bg-gray-100 p-4">
    <h1 class="text-2xl font-bold mb-6 text-center text-blue-600">Blogs</h1>
    <div class="flex flex-wrap -mx-4">
      <div v-for="(singledata, index) in filteredNews" :key="index" class="w-full  md:w-1/2 lg:w-1/3 px-4 mb-4 	">
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:bg-blue-100 bg-opacity-0">
          <div class="flex-none">
            <img :src="singledata.urlToImage || defaultImage"    alt="Article Image" class="w-full h-48 object-cover">
            

          </div>
          <div class="flex-auto p-4">
            <p class="text-gray-500 text-sm"><strong>Source:</strong> {{ singledata.source.name }}</p>
            <p class="text-gray-500 text-sm"><strong>Author:</strong> {{ singledata.author }}</p>
            <p class="text-gray-500 text-sm"><strong>publishedAt:</strong> {{ singledata.publishedAt.slice(0,10) }}</p>
            <h2 class="text-lg font-semibold mb-2">{{ singledata.title }}</h2>
            <p class="text-gray-700 mb-4 overflow-hidden text-ellipsis	" >{{ singledata.description }}</p>
            
            
            <a :href="singledata.url" class="text-blue-500 hover:text-blue-900 " target="_blank" >Read more..</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>


<script >
// import { ref, onMounted } from 'vue';
// import axios from 'axios';

// export default {
//   setup() {
//     // Define reactive references
//     const data = ref([]);
    
//     const defaultImage = ref('');

//     // Fetch data from API
   
  
//     const api = "b9e54969aa94421597c7802ea926f7d1"
//     // const apikey = ref(process.env.VUE_APP_API_KEY)
//     // console.log(apikey)
    
   

   
//     const fetchDataFromAPI = () => {
//       const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${api}`;

//       axios.get(apiUrl)
//         .then((response) => {
//           data.value = response.data;
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//         });
//     };

//     // Fetch data on component mount
//     onMounted(() => {
//       fetchDataFromAPI();
      
//     });

  
//     return {
//       data,
//       defaultImage,
//       fetchDataFromAPI
//     };
//   }
// };

import { useNewsStore } from '@/stores/counter';
import { onMounted, ref, computed } from 'vue';
import defult from '@/components/icons/nopic.jpg'




export default {
  setup() {
    const newsStore = useNewsStore();
    const defaultImage = ref(defult);

    onMounted(() => {
      newsStore.fetchDataFromAPI();
    });

    const filteredNews = computed(() => newsStore.filteredNews);
    const searchTerm = computed({
      get: () => newsStore.searchTerm,
      set: (value) => { newsStore.searchTerm = value; }
    });

    // function setAltImg(e){
    //   e.target.src=defaultImage

    // }
  

    return {
      filteredNews,
      defaultImage,
      searchTerm,
      
     
    };
  }
}
  



</script>