import { SERVER_URL } from "@/enums/config";
import store from "@/store/store";

export const fetchActivities = async () => {
  try {
    if (store.getters.getActivities.length > 0) return;
    const res = await fetch(SERVER_URL + "activities/v1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    const sortedData = data.sort((a, b) => {
      return Number(a.d_created) > Number(b.d_created) ? -1 : 1;
    });
    store.commit("setActivities", sortedData);
  } catch (e) {
    return [];
  }
};
