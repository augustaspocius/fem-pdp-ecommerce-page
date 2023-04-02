<script lang="ts">
import { defineComponent } from 'vue';
import Main from './components/Main.vue'

export default defineComponent({
  name: 'App',
});
</script>

<template>
  <div class="font-kumbh-sans bg-neutral-light-grayish-blue min-h-screen">
    <header class="bg-primary-orange">
          <!--Nav bar-->
          Collections
          Men
          Women
          About
          Contact
          
          <!--Logo-->
          
          <!--cart icon-->
          
          <!--User icon-->
    </header>

    <main class="container mx-auto px-4 py-6">
      <!-- Main content -->
      <!-- Product image gallery, product details, add to cart functionality, etc. -->
      
          <!--Brand above the product name-->
          Sneaker Company

          <!--Product name-->
          Fall Limited Edition Sneakers

          <!--Product description-->
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.

          <!--Discounted price-->
          $125.00
          <!--Discount-->
          50%
          <!--Original price-->
          $250.00

          <!--Quantity-->
          0
          <!--Add to cart button-->
          Add to cart
      <Main/>
    </main>
  </div>
</template>