<template>
  <div>
    <v-combobox
      :v-model="value"
      :height="40"
      :items="autocomplete"
      placeholder="Search Timeline"
      outlined
      append-icon="mdi-magnify"
      @input.native="handleSearch"
      @change="handleSelectAutocomplete"
      :item-color="null"
      :menu-props="{ contentClass: 'elevation-0' }"
      :error-messages="null"
      class="mb-2"
    >
    </v-combobox>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    autocomplete: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      value: ""
    };
  },

  methods: {
    handleSearch(e) {
      this.$emit("update-search", e.target.value);
    },
    handleSelectAutocomplete(val) {
      if (val) this.$emit("update-search", val);
      else this.$emit("update-search", "");
    }
  }
};
</script>

<style scoped lang="scss">
::v-deep {
  .v-text-field {
    .v-text-field__details {
      display: none;
    }
    .v-input__slot {
      min-height: 30px;
      width: 35%;
      min-width: 300px;
    }
    .v-input__append-inner {
      background-color: var(--main-green);
      height: 100%;
      margin: 0;
      display: flex;
      align-items: center;
      margin-right: -12px;
      width: 50px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      .v-icon {
        color: #fff !important;
        font-size: 30px;
        transform: rotate(0deg) !important;
      }
    }
  }

  .v-list-item--highlighted {
    color: var(--main-green);
    caret-color: var(--main-green);
  }
}
</style>
