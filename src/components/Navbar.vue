<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <img src="./icons/RN.png" class="h-8 mr-3 rounded-full" alt="Flowbite Logo" />
        <span class="self-center text-gradient text-2xl font-semibold whitespace-nowrap dark:text-white">R_NEWS</span>
      </a>
      <div class="flex md:order-2">
        <button @click="toggleNavbar" type="button" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
          <span class="sr-only">Search</span>
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
        <div class="relative hidden md:block">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input type="text" v-model="searchTerm" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
        </div>
        <button @click="toggleNavbar" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div :class="{'hidden': !navbarOpen}" class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" v-model="searchTerm" id="mobile-search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
        </div>
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink to="/" exact class="block  hover:text-blue-600 hover:scale-125 py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 md:dark:text-white" active-class="router-link-active" exact-active-class="router-link-exact-active">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" class="block hover:text-blue-600 hover:scale-125 py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 md:dark:text-white" active-class="router-link-active">Blogs</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="block hover:text-blue-600 hover:scale-125 scale-105 py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 md:dark:text-white" active-class="router-link-active">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
 @keyframes moveGradient {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }

    .text-gradient {
  background: linear-gradient(to right, #3873f2, #0cb37b, #3873f2);
  background-size: 200% 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: moveGradient 2s linear infinite;
    }
.router-link-active {
  color: #1d4ed8; /* Blue color for active link */
}


.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; /* Change to the desired thickness of the underline */
  background-color: blue; /* Change to the desired underline color */
  transition: width 0.3s ease;
  width: 100%;
}

.router-link-active {
  position: relative;
}
</style>

<script>
import { ref, watch } from 'vue';
import { useNewsStore } from '@/stores/counter';

export default {
  setup() {
    const newsStore = useNewsStore();
    const searchTerm = ref('');
    const navbarOpen = ref(false);

    watch(searchTerm, (newTerm) => {
      newsStore.getSearchTerm(newTerm);
    });

    const toggleNavbar = () => {
      navbarOpen.value = !navbarOpen.value;
    };

    return {
      searchTerm,
      navbarOpen,
      toggleNavbar,
    };
  },
};
</script>
