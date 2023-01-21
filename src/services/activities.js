import { SERVER_URL } from "@/enums/config";

export const fetchActivities = async () => {
  try {
    const res = await fetch(SERVER_URL + "activities/v1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = res.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
