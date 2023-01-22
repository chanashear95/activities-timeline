import { SERVER_URL } from "@/enums/config";
import store from "@/store/store";

export const fetchActivities = async isV2 => {
  try {
    const res = await fetch(SERVER_URL + "activities/" + (isV2 ? "v2" : "v1"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    const formatted = isV2 ? formatV2Data(data) : data;
    const sortedData = formatted.sort((a, b) => {
      return Number(a.d_created) > Number(b.d_created) ? -1 : 1;
    });
    store.commit("setActivities", sortedData);
  } catch (e) {
    return [];
  }
};

const formatV2Data = data => {
  const formattedData = [];
  data.forEach(item => {
    item.activities.forEach(a => {
      formattedData.push({ ...a, resource_type: item.resource_type });
    });
  });
  return formattedData;
};
