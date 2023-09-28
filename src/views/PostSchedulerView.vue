<template>
  <v-toolbar id="postSchedulerBar">
    <span id="dropdownLabel">Community: </span>
    <span id="currentCommunity">Text</span>
    <v-btn icon id="menu-activator">
      <v-icon>mdi-menu-down</v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn icon id="menu-activator">
      <v-icon>mdi-note-plus</v-icon>
    </v-btn>
  </v-toolbar>
  <div class="comingSoon centered-element-x">
    <h1>Test</h1>
  </div>
</template>

<style scoped>
.comingSoon {
  min-height: 100vh;
  align-items: center;
}

#dropdownLabel {
  max-width: fit-content;
  padding-right: 2rem;
  padding-left: 1rem;
}

#currentCommunity {
  padding-right: 2rem;
}

#postSchedulerBar {
  background-color: rgb(7, 7, 70);
  color: white;
  text-align: left;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComingSoonView",
});
</script>
