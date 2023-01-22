<template>
  <v-app>
    <v-main>
      <router-view />
      <ToastMessage />
    </v-main>
  </v-app>
</template>

<script>
import ToastMessage from "@/components/common/ToastMessage.vue";

export default {
  name: "App",
  components: { ToastMessage }
};
</script>
