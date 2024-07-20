<template>
  <form v-for="movie in movies">
    <p>¿Cuántos boletos para {{ movie.name }}?</p>

    <div>
      <button
        type="button"
        v-on:click="movie.quantity -= 1"
        :disabled="movie.quantity <= 0"
      >
        -
      </button>

      <span v-text="movie.quantity"></span>

      <button
        type="button"
        v-on:click="movie.quantity += 1"
        :disabled="movie.quantity >= movie.available"
      >
        +
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Title",
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
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

form {
  background: $bg;
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

button {
  background: $shadow;
  border: 1px solid transparent;
  padding: 5px 10px;
  margin: 0 5px;
  transition: border 0.15s;
}

button:hover {
  border: 1px solid $color;
  cursor: pointer;
}

button[disabled] {
  background: $shadow;
  opacity: 0.5;
}
</style>
