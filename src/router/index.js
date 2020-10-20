import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

Vue.mixin({
  data() {
    return {
      apiPath: "http://localhost/pmqa4.0_api/"
    };
  },
  methods: {
    loadingShow() {
      this.$q.loading.show({
        delay: 400
      });
    },
    loadingHide() {
      this.$q.loading.hide();
    },
    notify(message, color, position = "bottom") {
      this.$q.notify({
        message: message,
        color: color,
        position: position
      });
    },
    convertMonth(month) {
      if (month == 1) {
        return "มกราคม";
      } else if (month == 2) {
        return "กุมภาพันธ์";
      } else if (month == 3) {
        return "มีนาคม";
      } else if (month == 4) {
        return "เมษายน";
      } else if (month == 5) {
        return "พฤษภาคม";
      } else if (month == 6) {
        return "มิถุนายน";
      } else if (month == 7) {
        return "กรกฎาคม";
      } else if (month == 8) {
        return "สิงหาคม";
      } else if (month == 9) {
        return "กันยายน";
      } else if (month == 10) {
        return "ตุลาคม";
      } else if (month == 11) {
        return "พฤศจิกายน";
      } else if (month == 12) {
        return "ธันวาคม";
      }
    }
  }
});

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
