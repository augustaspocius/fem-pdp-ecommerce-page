<script lang="ts">
    import { defineComponent } from 'vue';
    import CartFlyout from './CartFlyout.vue';
    import { CartItemInterface } from '../types';

    export default defineComponent({
      components: {CartFlyout},
      name: 'Header',
      props: {
          mobileMenuOpen: Boolean,
          cartOpen: Boolean,
          totalQuantity: {
              type: Number,
              default: 0,
          },
          cartItems: {
            type: Array as () => CartItemInterface[],
            required: true,
          },
      },
      setup(props, context) {
        const handleRemoveFromCart = (itemId: number) => {
          console.log('remove from cart', itemId);
          context.emit('remove-from-cart', itemId);
        };

        return {
          handleRemoveFromCart,
        };
      },
    });
</script>

<template>
    <header class="py-5 md:py-0 px-6 md:px-0 flex justify-between items-center border-b-neutral-grey border-b-2 relative">
      <div class="flex items-center">
        <button class="md:hidden" @click="$emit('toggle-mobile-menu')">
          <img src="../assets/icon-menu.svg" alt="menu" />
        </button>
        <img class="self-center pb-1 ml-4 md:ml-0" src="../assets/logo.svg" alt="sneakers" />
        <nav class="hidden md:flex justify-between items-center gap-8 pl-14 text-neutral-dark-grayish-blue">
          <a href="#" class="hover:text-[#1D2026] border-b-4 border-b-transparent hover:border-primary-orange py-10">Collections</a>
          <a href="#" class="hover:text-[#1D2026] border-b-4 border-b-transparent hover:border-primary-orange py-10">Men</a>
          <a href="#" class="hover:text-[#1D2026] border-b-4 border-b-transparent hover:border-primary-orange py-10">Women</a>
          <a href="#" class="hover:text-[#1D2026] border-b-4 border-b-transparent hover:border-primary-orange py-10">About</a>
          <a href="#" class="hover:text-[#1D2026] border-b-4 border-b-transparent hover:border-primary-orange py-10">Contact</a>
        </nav>
      </div>


      <div class="absolute right-[-76px] top-[94px] w-[360px] hidden md:block">
          <CartFlyout :isOpen="cartOpen" :cartItems="cartItems" @remove-item="handleRemoveFromCart" />
      </div>
      <div class="flex items-center gap-5 md:gap-12 ">
        <button class="relative" @click="$emit('toggle-cart')">
          <img src="../assets/icon-cart.svg" alt="cart" />
          <span
            v-if="totalQuantity > 0"
            class="absolute top-[-3px] right-[-5px] md:top-[-8px] md:right-[-7px] text-white text-[10px] font-bold bg-primary-orange rounded-full w-5 flex items-center justify-center"
          >
            {{ totalQuantity }}
          </span>
        </button>
        <button class="p-1 md:p-0 rounded-full ring-2 ring-transparent hover:ring-primary-orange">
          <img class="max-w-[1.5rem] md:max-w-[50px]" src="../assets/image-avatar.png" alt="avatar" />
        </button>
      </div>
    </header>
</template>