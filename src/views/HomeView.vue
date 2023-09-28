<template>
  <div id="homeContent">
    <h1>Welcome to Monyet Panel!</h1>
    <h2>To navigate between different modules, please use the sidebar on the left.</h2>
    <h2>If you are on mobile view, please drag the screen from the left to reveal the sidebar.</h2>
  </div>
</template>

<style scoped>
  #homeContent {
    padding-top: 5rem;
  }
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>
