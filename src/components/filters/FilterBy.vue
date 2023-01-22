<template>
  <div>
    <p class="ma-0">Filter by:</p>
    <FilterOption :selected="isAllSelected" @toggle-selected="selectAll" value="All Work" />
    <FilterOption
      v-for="item in $options.resourceTypes"
      :key="item"
      :value="item"
      :selected="isItemSelected(item)"
      @toggle-selected="() => toggleOption(item)"
    />
  </div>
</template>

<script>
import { RESOURCE_TYPES } from "@/enums/dataTypes.js";
import FilterOption from "./FilterOption.vue";

export default {
  name: "FilterBy",
  components: { FilterOption },
  props: {
    selected: {
      type: Array,
      default: () => []
    }
  },
  resourceTypes: RESOURCE_TYPES,
  computed: {
    isAllSelected() {
      return (
        this.selected.length === 0 || this.selected.length === this.$options.resourceTypes.length
      );
    }
  },
  methods: {
    isItemSelected(item) {
      return this.selected.indexOf(item) !== -1;
    },
    selectAll() {
      this.$emit("update-selected", []);
    },
    toggleOption(option) {
      const currentSelection = [...this.selected];
      const idx = currentSelection.indexOf(option);
      if (idx === -1) {
        currentSelection.push(option);
      } else {
        currentSelection.splice(idx, 1);
      }
      this.$emit("update-selected", currentSelection);
    }
  }
};
</script>
