<template>
  <div>
    <LineSeparator />
    <div
      class="activity-container px-4 py-5 rounded d-flex justify-space-between align-center flex-column flex-sm-row"
    >
      <div class="d-flex align-center">
        <ActivityIcon :icon-path="item.topic_data.icon_path" :product="item.product" />
        <div class="d-inline-block pl-3">
          <p class="text-capitalize lh-14 ma-0 font-weight-medium">
            {{ item.topic_data.name }} {{ item.resource_type.replaceAll("_", " ") }}
          </p>
          <span class="font-weight-light caption">{{
            formatDate(Number(item.d_created * 1000))
          }}</span>
        </div>
      </div>
      <div>
        <Score
          v-if="item.score && item.possible_score"
          :score="item.score"
          :possibleScore="item.possible_score"
        />
        <v-icon @click="() => hideActivity(item.id)" size="20" color="#008081">mdi-eye</v-icon>
        <button
          @click="() => $router.push(`/${item.id}`)"
          class="font-weight-medium pl-1 green-text"
        >
          View work
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LineSeparator from "../common/LineSeparator.vue";
import ActivityIcon from "./ActivityIcon.vue";
import { formatDate } from "@/utils/formatting";
import Score from "./Score.vue";

export default {
  name: "ActivityListItem",
  props: ["item"],
  methods: {
    formatDate,
    hideActivity(itemId) {
      this.$store.commit("hideActivity", itemId);
    }
  },
  components: {
    LineSeparator,
    ActivityIcon,
    Score
  }
};
</script>

<style lang="scss" scoped>
.activity-container {
  border: 1px solid var(--light-grey);
}
.lh-14 {
  line-height: 14px;
}
</style>
