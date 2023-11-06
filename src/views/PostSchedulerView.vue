<template>
  <v-toolbar id="postSchedulerBar">
    <v-select
      label="Community"
      :items="communities"
      v-model="selectedCommunity"
      variant="solo-inverted"
    ></v-select>
  </v-toolbar>
  <div id="scheduledPosts" class="listContainer centered-element-x">
    <post-scheduler-card
      v-for="(item, index) in postSchedules"
      :key="index"
      :value="index"
      :data="item"
    >
    </post-scheduler-card>
    <v-btn id="addNewSchedule" @click="addNewSchedule"> + Add Schedule </v-btn>
  </div>
</template>

<style scoped>
#communitySelector {
  max-width: 80vw;
}
.listContainer {
  min-height: 100vh;
  align-items: center;
}

#dropdownLabel {
  max-width: fit-content;
  padding-right: 2rem;
  padding-left: 1rem;
}

#postSchedulerBar {
  max-width: 80vw;
  margin: 1rem auto;
  text-align: left;
  background-color: transparent;
}

#addNewSchedule {
  width: 80vw;
  background-color: rgb(233, 215, 189);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import PostSchedulerCard from "../components/modules/PostScheduler/PostSchedulerCard.vue";

export default defineComponent({
  name: "ComingSoonView",
  components: {
    PostSchedulerCard,
  },
  data() {
    return {
      postSchedules: [{ title: "Daily Chat Thread", day: "Daily" }, { day: "Mon" }],
      communities: [
        "Community 1",
        "Community 2",
        "Community 3",
        // Add more community names as needed
      ],
      selectedCommunityIndex: 0,
    };
  },
  computed: {
    selectedCommunity: {
      get() {
        return this.communities[this.selectedCommunityIndex];
      },
      set(value: string) {
        this.selectedCommunityIndex = this.communities.indexOf(value);
      },
    },
  },
  methods: {
    addNewSchedule() {
      
    }
  }
});
</script>
