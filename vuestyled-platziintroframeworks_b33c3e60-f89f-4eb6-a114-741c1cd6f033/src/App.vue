<template>
  <custom-title text="Películas"></custom-title>
  <custom-form></custom-form>
</template>

<script>
import Title from "./components/Title.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    "custom-title": Title,
    "custom-form": Form,
  },
  data() {
    return {
      movies: [
        {
          name: "Avengers",
          available: 3,
          quantity: 0,
        },
        {
          name: "Terminator",
          available: 5,
          quantity: 0,
        },
      ],
    };
  },
  methods() {
    return {
      updateMovie(newMovie) {
        const movieIndex = this.movies.findIndex(
          (movie) => movie.name === newMovie.name
        );

        this.movies[movieIndex] = newMovie;
      },
    };
  },
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

* {
  box-sizing: border-box;
}

body {
  background: $bg;
  color: $color;
  margin: 0;
  line-height: 1.5;
}
</style>
