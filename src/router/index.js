import Vue from "vue";
import VueRouter from "vue-router";
import dashboard from "../views/dashboard";
import trending from "../views/trending";
import PhotoPage from "../views/PhotoPage";
//import NProgress from "nprogress";
import NotFound from "../views/NotFound";
import NetworkIssue from "../views/NetworkIssue";
import PhotoInfo from "../components/PhotoInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
  },
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/trending",
    name: "trending",
    component: trending,
    /*
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      trending.fetchCards().then(() => next());
    }, */
  },
  {
    path: "/photos/:id",
    name: "photo",
    component: PhotoPage,
    props: true,
    children: [
      {
        path: "/photo-info/:id",
        name: "photo-info",
        component: PhotoInfo,
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "*",
    redirect: { name: "404" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

/*
router.beforeResolve((routeTo, routeFrom, next) => {
  if (routeTo.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
*/

export default router;
