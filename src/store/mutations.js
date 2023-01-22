export const mutations = {
  setActivities: (state, activities) => {
    state.activities = activities;
  },
  hideActivity: (state, activityId) => {
    state.hiddenActivities.push(activityId);
  },
  setErrToast: (state, err) => {
    state.errToast = err;
  }
};
