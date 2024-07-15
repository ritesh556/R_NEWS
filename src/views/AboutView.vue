<template>
  <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
    <h1 class="text-4xl font-bold mb-4 text-center text-blue-600">About R_NEWS</h1>
    <p class="text-lg text-gray-700 mb-4">
      Welcome to R_NEWS, your premier destination for the latest news from Nepal and around the world. We are committed to bringing you accurate, timely, and engaging news coverage, whether it's breaking news, in-depth analysis, or insightful commentary.
    </p>
    <p class="text-lg text-gray-700 mb-4">
      Our team of dedicated journalists and editors work tirelessly to ensure that you stay informed about the most important events and issues affecting our global community. At R_NEWS, we believe in the power of journalism to inform, educate, and inspire.
    </p>
    <p class="text-lg text-gray-700 mb-8">
      Thank you for choosing R_NEWS as your trusted news source. Stay connected with us for reliable news updates and stay ahead of the curve.
    </p>

    <h2 class="text-3xl font-bold mb-4 text-center text-blue-600"><u> Contact Us </u></h2>
    <form class="space-y-4"   @submit.prevent="onSubmit">
      <div>
        <label for="name" class="block text-lg font-medium text-gray-700">Name</label>
        <input required type="text" id="name" name="name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Name">
      </div>
      <div>
        <label for="email" class="block text-lg font-medium text-gray-700">Email</label>
        <input required type="email" id="email" name="email" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Email">
      </div>
      <div>
        <label for="message" class="block text-lg font-medium text-gray-700">Message</label>
        <textarea required   name="message" rows="4" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your Message"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script>


</script>
