<template>
  <div id="loginPanel" class="textAlignLeft">
    <v-card
      class="mx-auto pa-12 pb-8 loginPanel"
      elevation="8"
      rounded="lg"
    >
      <h1 class = "loginFormElem">Monyet.cc Login</h1>
      <br>
      <div class="text-subtitle-1 text-medium-emphasis">Username</div>

      <v-text-field
        density="compact"
        placeholder="Username or email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>

<style scoped>
#loginPanel {
  max-width: 80vw;
  margin: 0 auto;
  padding-top: 2rem;
}

#loginLabel {
  margin-left: 2rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    visible: false,
  }),
});
</script>
