<template>
    <v-navigation-drawer expand-on-hover rail id="sideBar">
          <v-list>
            <v-list-item></v-list-item>
          </v-list>
          <v-divider></v-divider>

          <v-list nav v-for="(item, index) in sideBarItems" :key="index" :value="index">
            <router-link class="nav" :to="item.link">
              <v-list-item
                :prepend-icon="item.prependIcon"
                :title="item.title"
                :value="item.value"
              ></v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
</template>

<style scoped>
#sideBar {
  background-color: black;
  color: white;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  data() {
    return {
      sideBarItems: [
        {
          prependIcon: "mdi-cog",
          title: "Settings",
          value: "settings",
          link: "/settings",
        },
        {
          prependIcon: "mdi-calendar-clock",
          title: "Post Scheduler",
          value: "postScheduler",
          link: "/post-scheduler",
        },
        {
          prependIcon: "mdi-bug",
          title: "Bug Report",
          value: "bugReport",
          link: "/bug-report",
        },
      ],
    };
  },
});
</script>
