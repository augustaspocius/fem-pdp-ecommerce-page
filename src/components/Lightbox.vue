<!-- Lightbox.vue -->
<script lang="ts">
import {PropType} from "vue";

export default {
    props: {
        isLightboxOpen: {
            type: Boolean,
            required: true,
        },
        currentSlide: {
            type: Number,
            required: true,
        },
        images: {
            type: Array as PropType<string[]>,
            required: true,
        },
    },
    computed: {
        currentImage(): string {
            return this.images[this.currentSlide];
        },
    },
    methods: {
        nextSlide(): void {
            this.$emit("nextSlide");
        },
        previousSlide(): void {
            this.$emit("previousSlide");
        },
        selectThumbnail(index: number): void {
            this.$emit("selectThumbnail", index);
        },
    },
};
</script>



<template>
    <div v-if="isLightboxOpen" class="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-75 pt-32">
        <div class="relative">
            <img
                v-if="images"
                :src="currentImage"
                class="w-full h-auto max-w-[550px] max-h-[90%] md:rounded-xl"
                alt="product"
            />

            <!-- Left button -->
            <button
                aria-label="Previous slide"
                class="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full w-14 h-14 flex justify-center items-center stroke-black hover:stroke-primary-orange"
                @click="previousSlide">
                <svg width="12" height="18">
                    <path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd" />
                </svg>
            </button>
            <!-- Right button -->
            <button
                aria-label="Next slide"
                class="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full w-14 h-14 flex justify-center items-center stroke-black hover:stroke-primary-orange"
                @click="nextSlide">
                <svg class="" width="13" height="18">
                    <path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd" />
                </svg>
            </button>

            <button class="absolute -top-8 right-0 w-5 h-5 flex justify-center items-center" @click="$emit('close')">
                <svg class="fill-current text-white hover:text-primary-orange" width="14" height="15">
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
                </svg>
            </button>

            <div
                class="absolute bottom-[-10] left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center space-x-8 py-8">
                <div v-for="(image, index) in images" :key="index"
                    class="relative w-full min-w-0 rounded-xl cursor-pointer overflow-hidden"
                    @click="selectThumbnail(index)">
                    <img :class="[
                        'w-full ',
                        currentSlide === index ? '' : ''
                    ]" :src="image" alt="product" />
                    <div class="absolute inset-0 rounded-xl bg-white opacity-0 hover:opacity-50 transition-opacity border-2 border-transparent"
                        :class="{ 'opacity-50 md:border-x-primary-orange md:border-y-primary-orange border-opacity-100': currentSlide === index }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

  