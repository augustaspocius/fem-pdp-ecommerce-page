<script lang="ts">
import { defineComponent } from 'vue';
import { getImageUrl } from '../utils'; // Import the helper function

export default defineComponent({
  props: {
    item: {
      type: Object as () => {
        id: number;
        name: string;
        image: string;
        price: number;
        quantity: number;
      },
      required: true,
    },
  },
});
</script>

<template>
    <li class="flex items-center justify-between">
    <img class="w-[50px] h-[50px] rounded" :src="item.image" alt="product" />
      <div>
        <span class="text-neutral-dark-grayish-blue text-[15px]">{{ item.name }}</span>
        <br>
        <div class="flex gap-1 items-center justify-start">
          <span class="text-neutral-dark-grayish-blue text-[15px]">${{ item.price }} x {{ item.quantity }}</span>
          <p class="inline font-bold">${{ item.price * item.quantity }}</p>
        </div>
      </div>
      <button class="pl-5" @click="$emit('remove', item.id)">
        <img src="../assets/icon-delete.svg" alt="delete" />
      </button>
    </li>
</template>
  