<script lang="ts">
import { defineComponent, ref } from 'vue';
import ImageSlider from './ImageSlider.vue';
import CartFlyout from './CartFlyout.vue';
import { CartItemInterface } from '../types';

export default defineComponent({
  components: {
    ImageSlider,
    CartFlyout,
  },
  props: {
    cartOpen: {
      type: Boolean,
      required: true,
    },
    cartItems: {
      type: Array as () => CartItemInterface[],
      required: true,
    },
  },
  setup(props, context) {
    const quantity = ref(1);

    const incrementQuantity = () => {
      quantity.value++;
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };
    
    const addToCart = () => {
      const newItem: CartItemInterface = {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        image: '/src/assets/image-product-1-thumbnail.jpg',
        price: 125,
        originalPrice: 250,
        discount: 50,
        quantity: quantity.value,
      };
      
      context.emit('add-to-cart', newItem);
    };

    const handleRemoveFromCart = (itemId: number) => {
      context.emit('remove-from-cart', itemId);
    };

    return {
      quantity,
      incrementQuantity,
      decrementQuantity,
      addToCart,
      handleRemoveFromCart,
    };
  },
});
</script>

<template>
      <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-32 md:pt-24 md:px-10">
        <div class="relative w-full md:max-w-md">
          <ImageSlider />
          <div class="absolute left-0 right-0 top-0 md:hidden">
            <CartFlyout :isOpen="cartOpen" :cartItems="cartItems" @remove-item="handleRemoveFromCart" />
          </div>
        </div>

        <div class="px-6 pt-6 md:pt-14 md:px-0">
          <h3 class="text-primary-orange font-bold text-xs mb-2 uppercase tracking-[1.85px] md:mb-6">
            Sneaker Company
          </h3>

          <h1 class="text-neutral-very-dark-blue font-bold text-[28px] leading-8 mb-4 md:text-[44px] md:leading-[48px] md:mb-8">
            Fall Limited Edition Sneakers
          </h1>

          <p class="text-neutral-dark-grayish-blue text-[15px] mb-6 md:mb-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything the
            weather can offer.
          </p>

          <div class="flex items-center mb-4 md:mb-8 justify-between md:flex-col md:items-start md:gap-3">
            <div class="flex items-center justify-between gap-4">
              <span class="text-neutral-very-dark-blue text-[28px] leading-9 font-bold">
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

          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex justify-between items-center bg-neutral-greyish-white border-0 rounded-xl
                py-[22px] px-[24px] md:p-0">
              <button @click="decrementQuantity" class="text-primary-orange px-3 md:py-4">
                <img class="min-w-[12px]" src="/src/assets/icon-minus.svg" alt="icon minus">
              </button>
              <input type="number" class="w-full text-center bg-transparent font-bold" v-model="quantity" min="0" />
              <button @click="incrementQuantity" class="text-primary-orange px-3 md:py-4">
                <img class="min-w-[12px]" src="/src/assets/icon-plus.svg" alt="icon plus">
              </button>
            </div>
            
            <button @click="addToCart"
              class="w-full bg-primary-orange text-white font-bold py-[19px] rounded-xl flex justify-center items-center gap-1 button-shadow hover:opacity-75">
              <img class="w-4 filter sepia-0 saturate-0 brightness-200 contrast-200 hue-rotate-15"
                src="/src/assets/icon-cart.svg" alt="cart" />
              <span class="ml-2">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
</template>