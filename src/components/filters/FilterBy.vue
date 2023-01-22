<template>
  <div>
    <p class="ma-0">Filter by:</p>
    <FilterOption :selected="isAllSelected" @toggle-selected="selectAll" item-text="All Work" />
    <FilterOption
      v-for="item in Object.keys($options.RESOURCE_TYPES)"
      :key="item"
      :item-text="$options.RESOURCE_TYPES[item].text"
      :value="item"
      :selected="isItemSelected(item)"
      @toggle-selected="() => toggleOption(item)"
    />
  </div>
</template>

<script>
import { RESOURCE_TYPES } from "@/enums/dataTypes.js";
import FilterOption from "@/components/filters/FilterOption.vue";

export default {
  name: "FilterBy",
  components: { FilterOption },
  props: {
    selected: {
      type: Array,
      default: () => []
    }
  },
  RESOURCE_TYPES,
  computed: {
    isAllSelected() {
      return (
        this.selected.length === 0 ||
        this.selected.length === Object.keys(this.$options.RESOURCE_TYPES).length
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
      console.log(option);
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
