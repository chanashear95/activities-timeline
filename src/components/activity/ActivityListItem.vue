<template>
  <div>
    <LineSeparator />
    <div
      class="activity-container px-4 py-5 rounded d-flex justify-space-between align-center flex-column flex-sm-row"
    >
      <div class="d-flex align-center">
        <ActivityIcon :icon-path="item.topic_data.icon_path" :product="item.product" />
        <div class="d-inline-block pl-3">
          <p class="lh-14 ma-0 font-weight-medium">
            {{ generateFullActivityName(item) }}
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
        <v-icon @click="() => hideActivity(item.id)" size="20" :color="$options.COLORS.MAIN_GREEN"
          >mdi-eye</v-icon
        >
        <button
          v-if="doesItemSupportZoom(item)"
          @click="() => $router.push(getPath(item))"
          class="view-work font-weight-medium pl-1 green-text"
        >
          View work
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LineSeparator from "@/components/common/LineSeparator.vue";
import ActivityIcon from "@/components/activity/ActivityIcon.vue";
import { formatDate } from "@/utils/formatting";
import Score from "./Score.vue";
import { generateFullActivityName } from "@/utils/dataHelpers";
import { RESOURCE_TYPES } from "@/enums/dataTypes";
import ApiV from "@/mixins/apiV.vue";
import { COLORS } from "@/styles/colors.js";

export default {
  name: "ActivityListItem",
  components: {
    LineSeparator,
    ActivityIcon,
    Score
  },
  mixins: [ApiV],
  props: ["item"],
  COLORS,
  methods: {
    formatDate,
    generateFullActivityName,
    hideActivity(itemId) {
      this.$store.commit("hideActivity", itemId);
    },
    doesItemSupportZoom(item) {
      return RESOURCE_TYPES[item.resource_type].zoom;
    },
    getPath(item) {
      return this.$route.path + (this.isV2 ? "" : "v1") + `/activity/${item.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.activity-container {
  border: 1px solid var(--light-grey);
  .lh-14 {
    line-height: 14px;
  }
  .view-work {
    transition: 0.2s ease-in-out all;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
