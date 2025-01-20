<template>
  <div class="flex flex-col items-center mt-4">
    <h3 class="text-lg font-bold">Rate this comic</h3>
    <div class="flex">
      <span
        v-for="star in 5"
        :key="star"
        class="cursor-pointer text-2xl"
        :class="star <= rating ? 'text-yellow-500' : 'text-gray-400'"
        @click="setRating(star)"
        >★</span
      >
    </div>
    <p v-if="rating" class="mt-2 text-gray-600">
      You rated this comic: {{ rating }} star<span v-if="rating > 1">s</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    comicNum: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      rating: 0,
    };
  },
  watch: {
    comicNum: {
      immediate: true,
      handler() {
        this.rating = 0;
      },
    },
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
  },
};
</script>
