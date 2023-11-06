<template>
  <div>
    <v-card class="postSchedulerCard">
      <div>
        <h2 id="cardTitle" class="displayInline">
          {{
            data !== undefined && data.title !== undefined ? data.title : "Edit Name Here"
          }}
        </h2>
        <v-btn icon id="editTitle" class="cardButton" @click="toggleEditMode">
          <v-icon>mdi-square-edit-outline</v-icon>
        </v-btn>
        <v-btn v-if="!isEditState" icon id="deleteSchedule" class="cardButton">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn v-else icon id="saveSchedule" class="cardButton">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </div>
      <br />
      <span class="inputLabel text-subtitle-1 text-medium-emphasis">Schedule</span>
      <br v-if="!isDesktop" />
      <div id="daySelector">
        <v-select
          label="Day"
          :items="days"
          v-model="selectedDay"
          variant="solo-inverted"
          :readonly="!isEditState"
        ></v-select>
      </div>
      <input type="time" id="timeSelector" :readonly="!isEditState" />
      <br />
      <span class="inputLabel text-subtitle-1 text-medium-emphasis">Post Title</span>
      <br v-if="!isDesktop" />
      <div id="postTitleInput">
        <v-text-field
          density="compact"
          placeholder="e.g. Daily chat thread for $date"
          variant="outlined"
          :readonly="!isEditState"
        >
        </v-text-field>
      </div>
      <br />
      <span class="textAreaLabel text-subtitle-1 text-medium-emphasis">Content</span>
      <br v-if="!isDesktop" />
      <div id="postBodyInput">
        <v-textarea
          auto-grow
          variant="outlined"
          label="Markdown format is accepted"
          :readonly="!isEditState"
        >
        </v-textarea>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
#cardTitle {
  margin-right: 1rem;
  font-size: 1rem;
}

#daySelector {
  max-width: 6.5rem;
  display: inline-block;
  margin-right: 1rem;
}

#timeSelector {
  display: inline-block;
  vertical-align: 1.4rem;
  background: white;
  min-height: 3.5rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

#postTitleInput {
  display: inline-block;
  min-width: 17rem;
}

#postBodyInput {
  display: inline-block;
  min-width: 17rem;
}

.inputLabel {
  vertical-align: 1.5rem;
  margin-right: 1rem;
  display: inline-block;
  width: 80px;
}

.textAreaLabel {
  vertical-align: 1.5rem;
  margin-right: 1rem;
  display: inline-block;
  width: 80px;
}

.cardButton {
  box-shadow: none;
  background-color: transparent;
  border-radius: 0%;
}

.postSchedulerCard {
  max-width: 80vw;
  margin: 1.5rem auto;
  text-align: left;
  padding: 0.5rem 1rem;
  background-color: rgb(233, 215, 189);
}

@media screen and (min-width: 768px) {
  #cardTitle {
    font-size: 1.25rem;
  }

  #postTitleInput {
    min-width: 50rem;
  }

  #postBodyInput {
    min-width: 50rem;
  }
}

@media screen and (min-width: 1280px) {
  .textAreaLabel {
    vertical-align: 8rem;
  }
}

@media screen and (min-width: 1600px) {
  #postTitleInput {
    min-width: 65rem;
  }

  #postBodyInput {
    min-width: 65rem;
  }

  .textAreaLabel {
    vertical-align: 8rem;
  }
}

@media screen and (min-width: 1800px) {
  #postTitleInput {
    min-width: 80rem;
  }

  #postBodyInput {
    min-width: 80rem;
  }

  .textAreaLabel {
    vertical-align: 8rem;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostSchedulerCard",
  props: {
    data: {
      type: Object, // Define the expected data type of the prop as an object
      required: false, // You can make the prop required if necessary
    },
    isEdit: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
      isEditState: (this.isEdit !== undefined) ? this.isEdit : false,
      isDesktop: window.innerWidth >= 768,
      selectedDay: this.data !== undefined ? this.data.day : "Daily",
      days: ["Daily", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  },
  mounted() {
    // Add an event listener to update the 'isDesktop' data property when the window is resized
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      // Update the 'isDesktop' property based on the current screen width
      this.isDesktop = window.innerWidth >= 768;
    },
    toggleEditMode() {
      this.isEditState = !this.isEditState;
    }
  },
  beforeUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("resize", this.handleResize);
  },
});
</script>
