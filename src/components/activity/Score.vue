<template>
  <span class="pr-5 green-text"
    >Score <strong>{{ score }}</strong
    >/<strong>{{ possibleScore }}</strong>
  </span>
</template>

<script>
export default {
  name: "Score",
  props: {
    score: {
      type: String,
      default: ""
    },
    possibleScore: {
      type: String,
      default: ""
    }
  }
};
</script>
