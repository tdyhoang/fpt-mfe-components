import { createRouter, createWebHistory } from "vue-router";
import { h } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: {
        render: () =>
          h("div", [h("h1", "Vue Container"), h("p", "Main content")]),
      },
    },
  ],
});

export default router;
