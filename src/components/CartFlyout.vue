<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { CartItemInterface } from '../types';
import CartItem from './CartItem.vue';

export default defineComponent({
    components: {
        CartItem
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
        cartItems: {
            type: Array as PropType<CartItemInterface[]>,
            default: () => [],
        },
    },
    methods: {
        removeFromCart(itemId: number) : void {
            this.$emit('removeItem', itemId);
        },
    },

});
</script>
<template>
    <div class="bg-white w-[95%] rounded-lg shadow-md flex flex-col m-auto mt-2 md:w-full" v-show="isOpen">
        <h2 class="font-bold text-lg mb-2 p-4">Cart</h2>
        <div class="bg-gray-300 h-[1px] mb-6 w-full"></div>
        <div v-if="cartItems.length === 0"
            class="display flex justify-center items-center text-base font-bold text-neutral-dark-grayish-blue pb-20 pt-14">
            Your cart is empty.
        </div>
        <template v-if="cartItems.length > 0">
            <ul class="px-4 pb-4">
                <CartItem v-for="(item, index) in cartItems" :key="index" :item="item" @remove="removeFromCart" />
            </ul>
            <div class="p-4">
                <button class="w-full py-5 text-base bg-primary-orange text-white font-bold rounded-xl">
                    Checkout
                </button>
            </div>
        </template>
    </div>
</template>

  