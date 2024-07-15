import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';


export const useNewsStore = defineStore('news', () => {
  const data = ref([]);
  const nepaliNews = ref([])
  const searchTerm = ref('');

  let apiKey = import.meta.env.VITE_APP_API_KEY 
  let apiKeyNepal = import.meta.env.VITE_APP_API_KEY_NEPAL

  
  

  const fetchDataFromAPI = () => {
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-06-15&sortBy=publishedAt&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        data.value = response.data.articles; // Assuming the API returns an articles array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const fetchDataFromAPINepali = () => {
    const apiUrl = `https://newsdata.io/api/1/latest?country=np&apikey=${apiKeyNepal}`;

    axios.get(apiUrl)
      .then((response) => {
        nepaliNews.value = response.data.results; // Assuming the API returns an articles array
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const filteredNews = computed(() => {
    return data.value.filter(article => 
      article.title && article.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

 

  const getSearchTerm = (term) => {
    searchTerm.value = term;
  };

 

  return {
    
    fetchDataFromAPI,
    filteredNews,
    getSearchTerm,
    searchTerm,
    nepaliNews,
    fetchDataFromAPINepali
  };
});
