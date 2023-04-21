<script lang="ts">
export default {
  data(): { currentSlide: number, images: string[] } {
    return {
      currentSlide: 0,
      images: [
        "/src/assets/image-product-1.jpg",
        "/src/assets/image-product-2.jpg",
        "/src/assets/image-product-3.jpg",
        "/src/assets/image-product-4.jpg",
      ],
    };
  },
  computed: {
    slideStyles(): { [key: string]: string } {
      return {
        transform: `translateX(-${this.currentSlide * 100}%)`,
      };
    },
  },
  methods: {
    nextSlide(): void {
      if (this.currentSlide < this.images.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    previousSlide(): void {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.images.length - 1;
      }
    },
  },
};
</script>
<template>
    <div class="relative w-full overflow-x-hidden">
      <div
        class="w-full whitespace-nowrap transition-all duration-500"
        :style="slideStyles"
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          class="w-full h-full inline-block 
                md:rounded-xl"
          :src="image"
          alt="product"
        />
      </div>
  
      <!-- Left button -->
      <button
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex justify-center items-center
               md:hidden"
        @click="previousSlide"
      >
        <img src="/src/assets/icon-previous.svg" alt="icon previous" />
      </button>
      <!-- Right button -->
      <button
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex justify-center items-center
               md:hidden"
        @click="nextSlide"
      >
        <img src="/src/assets/icon-next.svg" alt="icon next" />
      </button>
    </div>
    
    <div
        class="hidden w-full md:flex pt-8 gap-8"
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          class="w-full max-w-[88px] rounded-xl border-2 border-transparent hover:border-primary-orange hover:cursor-pointer hover:opacity-50"
          :src="image"
          alt="product"
        />
      </div>
  </template>