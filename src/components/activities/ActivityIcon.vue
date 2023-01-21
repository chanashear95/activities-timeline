<template>
  <div class="d-inline-block activity-icon">
    <div
      :class="{
        'icon-bg pa-1 d-flex align-center justify-center rounded-circle': true,
        'bpjr-container': product === 'bpjr',
        'bp-container': product === 'bp'
      }"
    >
      <img class="topic-img" :src="iconPath" />
    </div>
    <div
      v-if="product === 'bpjr'"
      class="jr-container rounded-circle font-weight-bold d-flex align-center justify-center"
    >
      Jr.
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityIcon",
  props: ["iconPath", "product"]
};
</script>

<style scoped lang="scss">
.activity-icon {
  position: relative;
}
.icon-bg {
  height: 45px;
  width: 45px;
}
.topic-img {
  height: 35px;
  width: 35px;
}
.bp-container {
  background-color: var(--light-blue);
}
.bpjr-container {
  background-color: var(--dark-yellow);
}
.jr-container {
  background-color: var(--light-yellow);
  color: var(--light-brown);
  height: 20px;
  width: 20px;
  font-size: 12px;
  position: absolute;
  right: 0;
  bottom: -2px;
}
</style>
