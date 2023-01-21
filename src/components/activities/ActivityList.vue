<template>
  <v-list>
    <v-list-item v-for="(item, i) in list" :key="item.id">
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
</template>

<script>
import { MONTHS } from "@/enums/dates.js";
import ActivityListItem from "./ActivityListItem.vue";
import MonthSeparator from "./MonthSeparator.vue";

export default {
  name: "ActivityList",
  props: ["list"],
  components: {
    MonthSeparator,
    ActivityListItem
  },
  methods: {
    isNewMonth(currIdx) {
      if (currIdx - 1 < 0) return true;
      const currMonth = new Date(Number(this.list[currIdx].d_created) * 1000).getMonth();
      const prevIdxMonth = new Date(Number(this.list[currIdx - 1].d_created) * 1000).getMonth();
      if (currMonth !== prevIdxMonth) return true;
      return false;
    },
    getMonthString(date) {
      return MONTHS[new Date(Number(date) * 1000).getMonth()];
    }
  }
};
</script>
<style scoped lang="scss">
.v-list-item {
  ::v-deep div.flex-column {
    width: 100%;
  }
}
</style>
