<template>
  <div>
    <LineSeparator v-if="!hideLine" />
    <div class="month-container rounded-pill text-center">
      {{ month }}
    </div>
  </div>
</template>
<script>
import LineSeparator from "../common/LineSeparator.vue";

export default {
  name: "MonthSeparator",
  components: {
    LineSeparator
  },
  props: {
    month: {
      type: String,
      required: true
    },
    hideLine: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="scss">
.month-container {
  background-color: var(--faded-yellow);
  width: 120px;
}
</style>
