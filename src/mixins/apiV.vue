<script>
export default {
  name: "ApiV",
  computed: {
    isV2() {
      return this.$route.path.includes("v2");
    }
  }
};
</script>
