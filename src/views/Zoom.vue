<template>
  <div class="text-center">
    <v-dialog
      persistent
      overlay-color="transparent"
      width="75%"
      max-width="600"
      v-model="$options.showDialog"
      content-class="elevation-0 rounded-lg"
    >
      <v-card v-if="item" class="px-4 py-2 pb-4">
        <div class="d-flex justify-end  align-center">
          <button
            @click="navigatBack"
            class="font-weight-black rounded-circle outlined close-btn mb-2"
          >
            X
          </button>
        </div>
        <div class="text-center pa-4">
          <ActivityIcon :icon-path="item.topic_data.icon_path" :product="item.product" />
          <h1 class="mb-4">{{ generateFullActivityName(item) }}</h1>
          <span class="font-weight-light">{{ formatDate(Number(item.d_created)) }}</span>
        </div>
        <p class="mb-10 text-h5">{{ item.comment }}</p>
        <Score
          v-if="item.score && item.possible_score"
          :score="item.score"
          :possibleScore="item.possible_score"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ActivityIcon from "@/components/activity/ActivityIcon.vue";
import { generateFullActivityName } from "@/utils/dataHelpers";
import { formatDate } from "@/utils/formatting";
import Score from "@/components/activity/Score.vue";
import ApiV from "@/mixins/apiV.vue";

export default {
  name: "Zoom",
  components: {
    ActivityIcon,
    Score
  },
  mixins: [ApiV],
  showDialog: true,
  computed: {
    item() {
      return this.$store.state.activities.find(item => item.id === this.$route.params.activityId);
    }
  },
  methods: {
    generateFullActivityName,
    formatDate,
    navigatBack() {
      this.$router.replace(this.isV2 ? "/v2" : "/");
    }
  }
};
</script>

<style scoped lang="scss">
.close-btn {
  border: 3px solid var(--dark-grey);
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--dark-grey);
}
</style>
