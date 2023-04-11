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
      <h2 class="font-bold text-lg mb-2 p-4">Cart</h2>
      <div class="bg-gray-300 h-[1px] mb-6 w-full"></div>
      <ul class="px-4 pb-4">
        <li class="flex items-center justify-between">
          <img class="w-[50px] h-[50px] rounded" src="../assets/image-product-1-thumbnail.jpg" alt="product" />
          <div>
            <span class="text-neutral-dark-grayish-blue text-[15px]">Fall Limited Edition Sneakers</span>
            <br>
            <div class="flex gap-1 items-center justify-start">
                <span class="text-neutral-dark-grayish-blue text-[15px]">$125.00 x 3</span>
                <p class="inline font-bold">$375.00</p>
            </div>
          </div>
          <button class="pl-5">
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

  