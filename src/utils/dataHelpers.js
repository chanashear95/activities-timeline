export const generateFullActivityName = item => {
  return item.topic_data.name + " " + item.resource_type.replaceAll("_", " ");
};
