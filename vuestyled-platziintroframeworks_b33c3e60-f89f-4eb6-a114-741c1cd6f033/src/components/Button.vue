<template>
  <form v-for="movie in movies">
    <p>¿Cuántos boletos para {{ movie.name }}?</p>

    <div>
      <button type="button" v-on:click="movie.quantity -= 1">-</button>

      <span v-text="movie.quantity"></span>

      <button type="button" v-on:click="movie.quantity += 1">+</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Title",
  props: [""],
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

form {
  border: 1px solid $shadow;
  font-family: courier;
  margin: 0 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;
}

form:hover {
  transform: scale(1.2);
  cursor: pointer;
}
</style>
