import Vue from "vue";
import VueRouter from "vue-router";
import Activities from "@/views/Activities.vue";
import Zoom from "@/views/Zoom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "activities",
    component: Activities,
    children: [
      {
        path: "v1/activity/:activityId",
        component: Zoom,
        props: true
      }
    ]
  },
  {
    path: "/v2/",
    name: "activitiesv2",
    component: Activities,
    children: [
      {
        path: "activity/:activityId",
        component: Zoom,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
