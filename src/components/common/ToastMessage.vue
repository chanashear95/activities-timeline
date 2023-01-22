<template>
  <v-snackbar :timeout="6000" color="error" top :value="err">
    {{ err }}
  </v-snackbar>
</template>

<script>
export default {
  name: "ToastMessage",

  computed: {
    err() {
      return this.$store.state.errToast;
    }
  }
};
</script>
