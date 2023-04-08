<script lang="ts">
import { defineComponent } from 'vue';
import Main from './components/Main.vue'

export default defineComponent({
  name: 'App',
});
</script>

<template>
  <div class="font-kumbh-sans bg-neutral-light-grayish-blue min-h-screen">
    <header class="bg-primary-orange py-4 px-6 flex justify-between items-center">
      <!--Nav bar-->
      <nav>
        <ul class="flex space-x-4 text-white font-bold">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <!--Logo-->
      <div class="text-white font-bold text-2xl">
        Logo
      </div>

      <!--Icons-->
      <div class="flex space-x-4 text-white">
        <!--Cart icon-->
        <i class="fas fa-shopping-cart"></i>
        <!--User icon-->
        <i class="fas fa-user"></i>
      </div>
    </header>

    <main class="container mx-auto px-4 py-6">
      <!-- Main content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Product image gallery -->
        <div>
          <!-- Add your image gallery component here -->
        </div>

        <!-- Product details -->
        <div>
          <!-- Brand above the product name -->
          <h3 class="text-neutral-dark-grayish-blue font-bold text-xl mb-2">
            Sneaker Company
          </h3>

          <!-- Product name -->
          <h1 class="text-neutral-very-dark-blue font-bold text-3xl mb-4">
            Fall Limited Edition Sneakers
          </h1>

          <!-- Product description -->
          <p class="text-neutral-dark-grayish-blue mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything the
            weather can offer.
          </p>

          <!-- Pricing -->
          <div class="flex items-baseline mb-4">
            <!-- Discounted price -->
            <span class="text-primary-orange text-2xl font-bold mr-4">
              $125.00
            </span>
            <!-- Discount -->
            <span class="text-neutral-dark-grayish-blue font-bold mr-2">
              50%
            </span>
            <!-- Original price -->
            <span class="text-neutral-grayish-blue line-through">
              $250.00
            </span>
          </div>

          <!-- Quantity and add to cart button -->
          <div class="flex items-center">
            <!-- Quantity -->
            <input
              type="number"
              min="0"
              class="border-2 border-neutral-dark-grayish-blue w-20 text-center mr-4"
            />
            <!-- Add to cart button -->
            <button class="bg-primary-orange text-white font-bold py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
