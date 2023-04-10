<script lang="ts">
import { defineComponent } from 'vue';
import Main from './components/Main.vue'
import MobileMenu from './components/MobileMenu.vue'
import CartFlyout from './components/CartFlyout.vue';

export default defineComponent({
  name: 'App',
  components: {
    Main,
    MobileMenu,
    CartFlyout
  },
  data(){
    return {
      mobileMenuOpen: false,
      quantity: 0,
      cartOpen: false,
    }
  },
  methods: {
    increment(){
      this.quantity++
    },
    decrement(){
      if(this.quantity > 0){
        this.quantity--
      }
    }
  },
});
</script>

<template>
  <div class="font-kumbh-sans min-h-screen">
    <MobileMenu :isOpen="mobileMenuOpen" @close="mobileMenuOpen = false" />
    <header class="py-5 px-6 flex justify-between items-center">
      <!-- Hamburger menu -->
      <div class="flex justify-between items-center gap-4">
        <div class="md:hidden">
          <button class="flex justify-center items-center" @click="mobileMenuOpen = !mobileMenuOpen">
            <!-- Add hamburger menu icon here -->
            <img src="./assets/icon-menu.svg" alt="menu" />
          </button>
        </div>
        <!-- Logo -->
        <img class="self-center pb-1" src="./assets/logo.svg" alt="sneakers"/>
      </div>

      <!-- Icons -->
      <div class="flex gap-5">
        <!-- Cart icon -->
        <button @click="cartOpen = !cartOpen">
            <img src="./assets/icon-cart.svg" alt="cart" />
        </button>
        <!-- Profile icon -->
        <button class="p-1 rounded-full ring-2 ring-transparent hover:ring-primary-orange">
          <img class="max-w-[1.5rem]" src="./assets/image-avatar.png" alt="avatar" />
        </button>
      </div>
    </header>

    <main class="container mx-auto">
      <!-- Main content -->
      <div class="grid grid-cols-1">
        <!-- Product image gallery -->
        <div class="relative w-full">
          <!-- Add your image gallery component here -->
          <img src="./assets/image-product-1.jpg" alt="product" />
          <!-- Left button -->
          <button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <!-- Add left arrow icon here -->
            <img class="w-3 h-auto" src="./assets/icon-previous.svg" alt="icon previous">
          </button>
          <!-- Right button -->
          <button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <!-- Add right arrow icon here -->
            <img class="w-3 h-auto" src="./assets/icon-next.svg" alt="icon next">
          </button>
          
          <div class="absolute left-0 right-0 top-0">
            <CartFlyout :isOpen="cartOpen" />
          </div>
        </div>

        <!-- Product details -->
        <div class="px-6  pt-6">
          <!-- Brand above the product name -->
          <h3 class="text-primary-orange font-bold text-xs mb-2 uppercase tracking-[1.85px]">
            Sneaker Company
          </h3>

          <!-- Product name -->
          <h1 class="text-neutral-very-dark-blue font-bold text-[28px] leading-8 mb-4">
            Fall Limited Edition Sneakers
          </h1>

          <!-- Product description -->
          <p class="text-neutral-dark-grayish-blue text-[15px] mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything the
            weather can offer.
          </p>

          <!-- Pricing -->
          <div class="flex items-center mb-4 justify-between">
            <!-- Discounted price -->
            <div class="flex items-center justify-between">
              <span class="text-neutral-very-dark-blue text-[28px] leading-9 font-bold mr-4">
                $125.00
              </span>
              <!-- Discount -->
              <span class="bg-primary-pale-orange text-primary-orange font-bold py-0.5 px-2 rounded-md">
                50%
              </span>
            </div>
            <!-- Original price -->
            <span class="text-neutral-grayish-blue font-bold line-through">
              $250.00
            </span>
          </div>

          <!-- Quantity and add to cart button -->
          <div class="mb-4">
            <!-- Quantity -->
            <div class="flex justify-between ound items-center bg-neutral-greyish-white border-0 rounded-xl
             py-[22px] px-[24px]">
              <button @click="decrement"
                      class="text-primary-orange px-3">
                <!-- Add minus icon here -->
                <img src="./assets/icon-minus.svg" alt="icon minus">
              </button>
              <input
                type="number"
                class="w-full text-center bg-transparent font-bold"
                v-model="quantity"
                min="0"
              />
              <button
                @click="increment"
                class="text-primary-orange px-3 py-1">
              <!-- Add plus icon here -->
              
                <img src="./assets/icon-plus.svg" alt="icon plus">
              </button>
            </div>
          </div>

          <!-- Add to cart button -->
          <button class="w-full bg-primary-orange text-white font-bold py-[19px] rounded-xl flex justify-center items-center gap-1 shadow-btn">
            <!-- Add cart icon here -->
            <img class="w-4 filter sepia-0 saturate-0 brightness-200 contrast-200 hue-rotate-15" src="./assets/icon-cart.svg" alt="cart" />
            <span class="ml-2">Add to cart</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>