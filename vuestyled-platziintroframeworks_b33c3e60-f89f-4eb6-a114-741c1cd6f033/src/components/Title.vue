<template>
  <h2>{{ text }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

h2 {
  border-bottom: 1px solid $shadow;
  padding-bottom: 10px;
}
</style>
