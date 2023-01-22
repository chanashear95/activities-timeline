<template>
  <button
    :class="{
      'filter-option green-text font-weight-medium pa-1 px-2 ma-1 ml-0 rounded': true,
      selected: selected
    }"
    @click="() => $emit('toggle-selected')"
  >
    <v-icon v-if="selected" size="15" :color="$options.COLORS.MAIN_GREEN">mdi-check-circle</v-icon>
    {{ itemText }}
  </button>
</template>

<script>
import { COLORS } from "@/styles/colors.js";

export default {
  name: "FilterOption",
  props: {
    value: {
      type: String,
      default: ""
    },
    itemText: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  COLORS
};
</script>

<style scoped lang="scss">
.filter-option {
  border: 1px solid var(--main-green);
  font-size: 14px;
  transition: 0.2s ease-in-out all;
  &:hover {
    background-color: var(--mint-green);
  }
  &.selected {
    background-color: var(--mint-green);
  }
}
</style>
