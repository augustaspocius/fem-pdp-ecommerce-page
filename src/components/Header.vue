<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
    name: 'Header',
    props: {
        mobileMenuOpen: Boolean,
        cartOpen: Boolean,
        totalQuantity: {
            type: Number,
            default: 0,
        },
    },
    });
</script>

<template>
    <header class="py-5 px-6 flex justify-between items-center">
      <div class="flex justify-between items-center gap-4">
        <div class="md:hidden">
          <button class="flex justify-center items-center" @click="$emit('toggle-mobile-menu')">
            <img src="../assets/icon-menu.svg" alt="menu" />
          </button>
        </div>
        <img class="self-center pb-1" src="../assets/logo.svg" alt="sneakers" />
      </div>
  
      <div class="flex gap-5">
        <button class="relative" @click="$emit('toggle-cart')">
          <img src="../assets/icon-cart.svg" alt="cart" />
          <span v-if="totalQuantity > 0"
            class="absolute top-[-3px] right-[-5px] text-white text-[10px] font-bold bg-primary-orange rounded-full w-5 flex items-center justify-center">
            {{ totalQuantity }}
          </span>
        </button>
        <button class="p-1 rounded-full ring-2 ring-transparent hover:ring-primary-orange">
          <img class="max-w-[1.5rem]" src="../assets/image-avatar.png" alt="avatar" />
        </button>
      </div>
    </header>
</template>
