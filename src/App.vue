<template>
  <BaseLayout/>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import BaseLayout from '@/components/reuseables/BaseLayout.vue';

export default defineComponent({
  name: 'App',
  components: {
    BaseLayout
  },
  data () {
    return {
      //
    }
  },
})
</script>
