<template>
  <v-toolbar class="stickyToTop" id="topBar">
    <div :style="{ backgroundImage: `url(${iconUrl})` }" class="icon-container"></div>
    <router-link class="nav" to="/">
      <v-toolbar-title>Monyet Panel</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn icon id="menu-activator">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" :value="index">
          <router-link class="navDark" :to="item.link">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<style scoped>
.stickyToTop {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0; /* Stick to the top of the viewport */
  background-color: #ffffff; /* Customize the background color */
  z-index: 100; /* Adjust the z-index as needed */
  /* Other styles for your component */
}

.icon-container {
  width: 32px; /* Set the width and height as needed */
  height: 32px;
  background-size: cover; /* Scale the background image to cover the container */
  background-position: center; /* Center the background image */
  margin-left: 1rem;
  margin-right: 1.5rem;
}

#topBar {
  width: 100vw;
  background-color: black;
  color: white;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import MonyetIcon from "../icons/logo.ico";

export default defineComponent({
  name: "BaseLayout",
  data() {
    return {
      iconUrl: MonyetIcon,
      menuItems: [
        { title: "Logout", link: "/login" },
        { title: "About", link: "/about" },
      ],
    };
  },
});
</script>
