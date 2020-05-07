import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ChatRoom from "@/views/ChatRoom.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/:ChatRoomId",
    name: "ChatRoom",
    component: ChatRoom,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   //validate and connect to wss server.
// });

export default router;
