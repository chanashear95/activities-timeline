<template>
  <div>
    <v-list class="mt-2">
      <v-list-item v-for="(item, i) in paginatedList" :key="item.id">
        <div class="flex-column d-flex">
          <MonthSeparator
            v-if="isNewMonth(i)"
            :month="getMonthString(item.d_created)"
            :hide-line="i === 0"
          />
          <ActivityListItem :item="item" />
        </div>
      </v-list-item>
    </v-list>
    <button
      class="d-flex align-start mx-auto my-3 green-text font-weight-medium"
      v-if="shouldShowLoadMoreBtn"
      @click="loadMore"
    >
      <v-icon :color="$options.COLORS.MAIN_GREEN">mdi-chevron-down</v-icon>Load more
    </button>
  </div>
</template>

<script>
import { MONTHS } from "@/enums/dates.js";
import ActivityListItem from "@/components/activity/ActivityListItem.vue";
import MonthSeparator from "@/components/activity/MonthSeparator.vue";
import { COLORS } from "@/styles/colors.js";

export default {
  name: "ActivityList",
  components: {
    MonthSeparator,
    ActivityListItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  MAX_PER_SCROLL: 10,
  COLORS,
  data() {
    return {
      currentScroll: 1
    };
  },
  computed: {
    paginatedList() {
      return [...this.list].slice(0, this.currentScroll * this.$options.MAX_PER_SCROLL);
    },
    shouldShowLoadMoreBtn() {
      return this.paginatedList.length !== this.list.length;
    }
  },
  methods: {
    isNewMonth(currIdx) {
      if (currIdx === 0) return true;
      const currMonth = new Date(Number(this.list[currIdx].d_created) * 1000).getMonth();
      const prevIdxMonth = new Date(Number(this.list[currIdx - 1].d_created) * 1000).getMonth();
      if (currMonth !== prevIdxMonth) return true;
      return false;
    },
    getMonthString(date) {
      return MONTHS[new Date(Number(date) * 1000).getMonth()];
    },
    loadMore() {
      this.currentScroll = this.currentScroll + 1;
    }
  }
};
</script>
<style scoped lang="scss">
.v-list-item {
  padding: 0;
  ::v-deep div.flex-column {
    width: 100%;
  }
}
</style>
