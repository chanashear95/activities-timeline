import { RESOURCE_TYPES } from "@/enums/dataTypes";
import { capitalize } from "@/utils/formatting";

export const generateFullActivityName = item => {
  return capitalize(item.topic_data.name) + " " + RESOURCE_TYPES[item.resource_type].text;
};
