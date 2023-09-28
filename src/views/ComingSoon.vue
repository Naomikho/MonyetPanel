<template>
  <div class="comingSoon centered-element-x">
    <h1>Sorry, this feature is coming soon!</h1>
  </div>
</template>

<style scoped>
  .comingSoon {
    min-height: 100vh;
    align-items: center;
    padding-top: 2rem;
  }

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComingSoonView",
});
</script>
