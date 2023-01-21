<template>
  <div class="screen-content">
    <h1>Timeline</h1>
    <Loading v-if="loading" />
    <ActivityList v-else :list="activities" />
  </div>
</template>

<script>
import { fetchActivities } from "@/services/activities.js";
import ActivityList from "../components/activities/ActivityList.vue";
import Loading from "../components/common/Loading.vue";

export default {
  name: "Activities",
  components: {
    Loading,
    ActivityList
  },
  data() {
    return {
      activities: [],
      loading: true
    };
  },
  async mounted() {
    this.getActivities();
  },
  methods: {
    async getActivities() {
      const data = await fetchActivities();
      this.activities = data.sort((a, b) => {
        return Number(a.d_created) > Number(b.d_created) ? -1 : 1;
      });
      this.loading = false;
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
