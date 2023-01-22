export const getters = {
  getActivities: state => {
    return state.activities.filter(item => !state.hiddenActivities.includes(item.id));
  }
};
