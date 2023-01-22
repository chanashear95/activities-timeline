<template>
  <v-progress-circular indeterminate :color="$options.COLORS.MAIN_GREEN"></v-progress-circular>
</template>

<script>
import { COLORS } from "@/styles/colors.js";

export default {
  name: "Loading",
  COLORS
};
</script>
