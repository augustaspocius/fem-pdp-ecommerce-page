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
    slideStyles(): { transform: string } {
      return {
        transform: `translateX(-${this.currentSlide * 100}%)`,
      };
    },
  },
  setup() {
    const nextSlide = (currentSlide: number, images: string[]): number => {
      return currentSlide < images.length - 1 ? currentSlide + 1 : 0;
    };

    const previousSlide = (currentSlide: number, images: string[]): number => {
      return currentSlide > 0 ? currentSlide - 1 : images.length - 1;
    };

    const selectSlide = (index: number): number => {
      return index;
    };

    return {
      nextSlide,
      previousSlide,
      selectSlide,
    };
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
      @click="currentSlide = previousSlide(currentSlide, images)"
    >
      <img src="/src/assets/icon-previous.svg" alt="icon previous" />
    </button>
    <!-- Right button -->
    <button
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex justify-center items-center
             md:hidden"
      @click="currentSlide = nextSlide(currentSlide, images)"
    >
      <img src="/src/assets/icon-next.svg" alt="icon next" />
    </button>
  </div>

  <div class="hidden w-full md:flex pt-8 gap-8">
    <img
      v-for="(image, index) in images"
      :key="index"
      class="w-full max-w-[88px] rounded-xl border-2 border-transparent hover:cursor-pointer hover:opacity-50"
      :class="{ 'border-primary-orange opacity-50': currentSlide === index }"
      :src="image"
      alt="product"
      @click="currentSlide = selectSlide(index)"
    />
  </div>
</template>
