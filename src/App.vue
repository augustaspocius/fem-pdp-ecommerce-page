<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Header from './components/Header.vue';
import MobileMenu from './components/MobileMenu.vue';
import Main from './components/Main.vue';
import { CartItemInterface } from './types';

export default defineComponent({
  components: {
    Header,
    MobileMenu,
    Main,
  },
  setup() {
    const cartOpen = ref(false);
    const mobileMenuOpen = ref(false);
    const cartItems = ref<CartItemInterface[]>([]);

    const toggleCart = () => {
      cartOpen.value = !cartOpen.value;
    };

    const addToCart = (newItem: CartItemInterface) => {
      const itemIndex = cartItems.value.findIndex(
        (item) => item.id === newItem.id
      );

      if (itemIndex !== -1) {
        cartItems.value[itemIndex].quantity += newItem.quantity;
      } else {
        cartItems.value.push(newItem);
      }

      cartOpen.value = true;
    };

    const removeFromCart = (itemId: number) => {
      const itemIndex = cartItems.value.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        cartItems.value.splice(itemIndex, 1);
      }
    };
    
    const totalQuantity = computed(() => {
      return cartItems.value.reduce((acc: number, item: CartItemInterface) => acc + item.quantity, 0);
    });
    
    return {
      cartOpen,
      mobileMenuOpen,
      cartItems,
      toggleCart,
      addToCart,
      removeFromCart,
      totalQuantity,
    };
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
    <Main
      :cartOpen="cartOpen"
      :cartItems="cartItems"
      @add-to-cart="addToCart"
      @remove-from-cart="removeFromCart"
    />
  </div>
</template>
