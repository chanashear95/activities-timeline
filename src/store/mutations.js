import { LOCAL_STORAGE_KEYS } from "../enums/config";

export const mutations = {
  setActivities: (state, activities) => {
    state.activities = activities;
  },
  hideActivity: (state, activityId) => {
    state.hiddenActivities.push(activityId);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.HIDDEN_ACTIVITIES,
      JSON.stringify(state.hiddenActivities)
    );
  },
  setErrToast: (state, err) => {
    state.errToast = err;
  }
};
