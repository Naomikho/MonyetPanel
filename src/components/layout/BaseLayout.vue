<template>
  <div>
    <TopBar></TopBar>
    <v-card id="contentBody">
      <v-layout>
        <SideBar></SideBar>
        <v-main class="centered-element-x centered-element-inline">
          <router-view />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style scoped>
#contentBody {
  height: 93vh;
  background-color: rgb(248, 237, 237);
  color: black;
  overflow-y: auto;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./TopBar.vue";
import SideBar from "./SideBar.vue";

export default defineComponent({
  name: "BaseLayout",
  components: {
    TopBar,
    SideBar,
  },
});
</script>
