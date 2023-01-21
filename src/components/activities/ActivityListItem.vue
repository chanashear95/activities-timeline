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
        <span v-if="item.score && item.possible_score" class="pr-5 green-text"
          >Score <strong>{{ item.score }}</strong
          >/<strong>{{ item.possible_score }}</strong>
        </span>
        <v-icon size="20" color="#008081">mdi-eye</v-icon>
        <span class="font-weight-medium pl-1 green-text">View work</span>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import LineSeparator from "../common/LineSeparator.vue";
import ActivityIcon from "./ActivityIcon.vue";

export default {
  name: "ActivityListItem",
  props: ["item"],
  methods: {
    formatDate(date) {
      return format(date, "MMM dd, yyyy • hh:mm aaaaa'm'");
    }
  },
  components: {
    LineSeparator,
    ActivityIcon
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
