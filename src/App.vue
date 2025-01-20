<!-- importo el componente ComicViewer y se renderiza en el template -->
<template>
  <div class="container-app">
    <h1 class="title">Frontend developer technical test</h1>
  </div>
  <div>
    <ComicViewer />
  </div>
</template>

<script>
import ComicViewer from "./components/ComicViewer.vue";

export default {
  name: "App",
  components: {
    ComicViewer,
  },
};
</script>

<style>
@import "./assets/app.scss";
</style>
