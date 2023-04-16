<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import MobileMenu from './components/MobileMenu.vue'
import CartFlyout from './components/CartFlyout.vue';
import ImageSlider from './components/ImageSlider.vue';
import { CartItemInterface } from './types';

interface DataProps {
  mobileMenuOpen: boolean;
  quantity: number;
  cartOpen: boolean;
  cartItems: CartItemInterface[];
}

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Main,
    MobileMenu,
    CartFlyout,
    ImageSlider,
  },
  data(): DataProps {
    return {
      mobileMenuOpen: false,
      quantity: 0,
      cartOpen: false,
      cartItems: [],
    }
  },
  computed: {
    totalQuantity(): number {
      return this.cartItems.reduce((acc: number, item: CartItemInterface) => acc + item.quantity, 0);
    },
  },
  methods: {
    increment() {
      this.quantity++
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--
      }
    },
    addToCart() {
      const newItem = {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        price: 125,
        image: 'image-product-1.jpg', // Add the image file name
        originalPrice: 250,
        discount: 50,
        quantity: this.quantity,
      };

      const existingItemIndex = this.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        this.cartItems.push(newItem);
      }
    },
    handleRemoveFromCart(itemId: number) {
      this.cartItems = this.cartItems.filter((item: CartItemInterface) => item.id !== itemId);
    },
  },
});
</script>

<template>
  <div class="font-kumbh-sans min-h-screen">
    <MobileMenu :isOpen="mobileMenuOpen" @close="mobileMenuOpen = false" />
    <Header
      :mobileMenuOpen="mobileMenuOpen"
      :cartOpen="cartOpen"
      :totalQuantity="totalQuantity"
      @toggle-mobile-menu="mobileMenuOpen = !mobileMenuOpen"
      @toggle-cart="cartOpen = !cartOpen"
    />

    <main class="container mx-auto">
      <div class="grid grid-cols-1">
        <div class="relative w-full">
          <ImageSlider />
          <div class="absolute left-0 right-0 top-0">
            <CartFlyout :isOpen="cartOpen" :cartItems="cartItems" @remove-item="handleRemoveFromCart" />
          </div>
        </div>

        <div class="px-6  pt-6">
          <h3 class="text-primary-orange font-bold text-xs mb-2 uppercase tracking-[1.85px]">
            Sneaker Company
          </h3>

          <h1 class="text-neutral-very-dark-blue font-bold text-[28px] leading-8 mb-4">
            Fall Limited Edition Sneakers
          </h1>

          <p class="text-neutral-dark-grayish-blue text-[15px] mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything the
            weather can offer.
          </p>

          <div class="flex items-center mb-4 justify-between">
            <div class="flex items-center justify-between">
              <span class="text-neutral-very-dark-blue text-[28px] leading-9 font-bold mr-4">
                $125.00
              </span>
              <span class="bg-primary-pale-orange text-primary-orange font-bold py-0.5 px-2 rounded-md">
                50%
              </span>
            </div>
            <span class="text-neutral-grayish-blue font-bold line-through">
              $250.00
            </span>
          </div>

          <div class="mb-4">
            <div class="flex justify-between ound items-center bg-neutral-greyish-white border-0 rounded-xl
               py-[22px] px-[24px]">
              <button @click="decrement" class="text-primary-orange px-3">
                <img src="./assets/icon-minus.svg" alt="icon minus">
              </button>
              <input type="number" class="w-full text-center bg-transparent font-bold" v-model="quantity" min="0" />
              <button @click="increment" class="text-primary-orange px-3 py-1">
                <img src="./assets/icon-plus.svg" alt="icon plus">
              </button>
            </div>
          </div>

          <button @click="addToCart"
            class="w-full bg-primary-orange text-white font-bold py-[19px] rounded-xl flex justify-center items-center gap-1 button-shadow">
            <img class="w-4 filter sepia-0 saturate-0 brightness-200 contrast-200 hue-rotate-15"
              src="./assets/icon-cart.svg" alt="cart" />
            <span class="ml-2">Add to cart</span>
          </button>

        </div>
      </div>
    </main>
  </div>
</template>