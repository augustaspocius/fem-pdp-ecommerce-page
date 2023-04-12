<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { CartItem } from '../types';

export default defineComponent({
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
        cartItems: {
            type: Array as PropType<CartItem[]>,
            default: () => [],
        },
    },
    methods: {
        removeFromCart(itemId: number) {
            this.$emit('remove-item', itemId);
        },
    },

});
</script>
<template>
    <div class="bg-white w-[95%] rounded-lg shadow-md flex flex-col m-auto mt-2" :class="{ 'hidden': !isOpen }">
        <h2 class="font-bold text-lg mb-2 p-4">Cart</h2>
        <div class="bg-gray-300 h-[1px] mb-6 w-full"></div>
        <div v-if="cartItems.length === 0"
            class="display flex justify-center items-center text-base font-bold text-neutral-dark-grayish-blue pb-20 pt-14">
            Your cart is empty.
        </div>
        <template v-if="cartItems.length > 0">
            <ul class="px-4 pb-4">
                <li v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between mb-4">
                    <img class="w-[50px] h-[50px] rounded" src="../assets/image-product-1-thumbnail.jpg" alt="product" />
                    <div>
                        <span class="text-neutral-dark-grayish-blue text-[15px]">
                            {{ item.name }}
                        </span>
                        <br />
                        <div class="flex gap-1 items-center justify-start">
                            <span class="text-neutral-dark-grayish-blue text-[15px]">
                                ${{ item.price }} x {{ item.quantity }}
                            </span>
                            <p class="inline font-bold">${{ item.price * item.quantity }}</p>
                        </div>
                    </div>
                    <button class="pl-5" @click="removeFromCart(item.id)">
                        <img src="../assets/icon-delete.svg" alt="delete" />
                    </button>
                </li>
            </ul>
            <div class="p-4">
                <button class="w-full py-5 text-base bg-primary-orange text-white font-bold rounded-xl">
                    Checkout
                </button>
            </div>
        </template>
</div></template>

  