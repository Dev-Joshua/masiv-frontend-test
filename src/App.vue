<!-- importO el componente ComicViewer y se renderiza en el template -->
<script>
import ComicViewer from "./components/ComicViewer.vue";

export default {
  components: {
    ComicViewer,
  },
};
</script>

<template>
  <div class="container">
    <h1 class="title">Frontend developer technical test</h1>
  </div>
  <div>
    <ComicViewer />
  </div>
</template>

<style>
@import "./assets/app.scss";
</style>
