
<script lang="ts">
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="fixed inset-0 flex z-50"
    :class="{ 'pointer-events-none': !isOpen }"
  >
    <div
      class="w-2/3 py-6 px-6 h-full bg-white md:hidden transition-transform duration-300"
      :class="{ '-translate-x-full': !isOpen }"
    >
    
      <!-- Close button -->
      <button
        class="pb-14"
        @click="$emit('close')"
      >
        <img src="../assets/icon-close.svg" alt="close" />
      </button>
      <!-- Mobile menu content -->
      <nav class="space-y-6 flex flex-col">
        <a href="#" class="font-bold text-lg">Collections</a>
        <a href="#" class="font-bold text-lg">Men</a>
        <a href="#" class="font-bold text-lg">Women</a>
        <a href="#" class="font-bold text-lg">About</a>
        <a href="#" class="font-bold text-lg">Contact</a>
      </nav>
    </div>
    <div
      class="flex-1 bg-black bg-opacity-75 cursor-pointer md:hidden transition-opacity duration-300"
      :class="{ 'opacity-0': !isOpen }"
      @click="$emit('close')"
    ></div>
  </div>
</template>

