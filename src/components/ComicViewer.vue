<!-- Este componente se encarga de mostrar las estrellas para calificar el comic-->
<template>
  <div class="container mx-auto p-4 mt-4 flex flex-col items-center">
    <h1 class="text-3xl font-bold text-cyan-700">Random Comics</h1>
    <h6 class="mt-2 text-gray-600">
      View your favorite comics at random and rate them as you like
    </h6>
  </div>
  <div>
    <div class="container mx-auto p-6 flex flex-col items-center">
      <div class="flex flex-row justify-center">
        <button
          @click="getRandomComic"
          class="bg-black hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4 mb-2 rounded"
          style="transition: all 0.5s ease"
        >
          Get Random Comic
        </button>
      </div>
      <div
        class="flex flex-row justify-center mt-2 border border-gray-200 rounded-lg p-4"
        style="
          width: 80%;
          background-color: white;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        "
      >
        <div
          class="flex flex-col items-center overflow-hidden p-4"
          v-if="comic"
        >
          <div class="flex flex-row justify-between w-full">
            <h2 class="text-3xl text-center font-bold my-4 text">
              {{ comic.title }}
            </h2>
            <div>
              <p>
                #<b>{{ comic.num }}</b>
              </p>
              <p><b>Year:</b>{{ comic.year }}</p>
            </div>
          </div>
          <img
            :src="comic.img"
            :alt="comic.title"
            class="w-full object-contain"
          />
          <p class="text-gray-600" style="margin-top: 20px">
            <b>Description:</b> <br />{{ comic.alt }}
          </p>
          <StarRating v-if="comic.num" :comicNum="comic.num" />
        </div>
      </div>
    </div>
  </div>

  <h3 class="text-center my-6">By @Dev-Joshua</h3>
</template>

<!-- Logica para la implementacion de la calificaicon segun el comic que se muestra-->
<script>
import axiosClient from "../utils/axios";
import StarRating from "./StarRating.vue";

export default {
  name: "ComicViewer",
  components: {
    StarRating,
  },
  data() {
    return {
      comic: {},
    };
  },
  created() {
    this.getRandomComic();
  },
  methods: {
    async getRandomComic() {
      try {
        const randomComicNumber = Math.floor(Math.random() * 2500);
        const response = await axiosClient.get(
          `/${randomComicNumber}/info.0.json`
        );
        this.comic = response.data;
      } catch (error) {
        console.error("Failed to fetch comic", error);
      }
    },
  },
};
</script>
