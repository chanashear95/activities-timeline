<template>
  <div class="screen-content">
    <h1 class="my-2">Timeline</h1>
    <Loading v-if="loading" />
    <div v-else>
      <SearchBar @update-search="updateSearch" :autocomplete="autoCompleteOptions" />
      <FilterBy @update-selected="updateFilterBy" :selected="filterBy" />
      <ActivityList :list="filteredActivities" />
    </div>
  </div>
</template>

<script>
import { fetchActivities } from "@/services/activities.js";
import ActivityList from "../components/activities/ActivityList.vue";
import Loading from "../components/common/Loading.vue";
import FilterBy from "../components/filters/FilterBy.vue";
import SearchBar from "../components/filters/SearchBar.vue";
import { capitalize } from "@/utils/formatting";
import { generateFullActivityName } from "../utils/dataHelpers";

export default {
  name: "Activities",
  components: {
    Loading,
    ActivityList,
    SearchBar,
    FilterBy
  },
  data() {
    return {
      loading: true,
      search: "",
      filterBy: []
    };
  },
  async mounted() {
    await fetchActivities();
    this.loading = false;
  },
  computed: {
    allActivities() {
      return this.$store.state.activities;
    },
    filteredActivities() {
      return this.allActivities.filter(
        item =>
          (this.filterBy.length === 0 || this.filterBy.includes(item.resource_type)) &&
          generateFullActivityName(item)
            .toLowerCase()
            .includes(this.search.toLowerCase())
      );
    },
    autoCompleteOptions() {
      return this.filteredActivities.map(item => capitalize(generateFullActivityName(item)));
    }
  },
  methods: {
    updateSearch(val) {
      this.search = val;
    },
    updateFilterBy(updatedFilters) {
      this.filterBy = updatedFilters;
    }
  }
};
</script>
<style scoped lang="scss">
.screen-content {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
