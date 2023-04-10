<script lang="ts">
    export default {
        props: {
            isOpen: {
            type: Boolean,
            default: false,
            },
        },
    };
</script>
<template>
    <div
      class="bg-white w-[95%] rounded-lg shadow-md flex flex-col m-auto mt-2"
      :class="{ 'hidden': !isOpen }"
    >
      <h2 class="font-bold text-lg mb-4 p-4">Cart</h2>
      <div class="bg-gray-300 h-[1px] mb-4 w-full"></div>
      <ul class="p-4">
        <li class="flex items-center justify-between mb-4">
          <img class="w-12 h-12 mr-2" src="../assets/image-product-1-thumbnail.jpg" alt="product" />
          <div>
            <span class="text-neutral-dark-grayish-blue text-[15px]">Fall Limited Edition Sneakers</span>
            <span class="text-neutral-dark-grayish-blue text-[15px]">$125.00 x 1</span>
            <p class="font-bold">$125.00</p>
          </div>
          <button>
            <img src="../assets/icon-delete.svg" alt="delete" />
          </button>
        </li>
        <!-- Add more list items for each product in the cart -->
      </ul>
      <div class="p-4">
          <button class="w-full py-5 text-base bg-primary-orange text-white font-bold rounded-xl">
            Checkout
          </button>
      </div>
    </div>
</template>

  