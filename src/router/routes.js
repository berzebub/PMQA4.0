const routes = [
  {
    path: "/",
    component: () => import("pages/login.vue"),
    name: "login"
  },
  {
    path: "/addUser",
    component: () => import("pages/admin/tempAddUser.vue"),
    name: "addUser"
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/main",
        component: () => import("pages/main.vue"),
        name: "main"
      },
      {
        path: "/stepper",
        component: () => import("pages/stepper.vue"),
        name: "stepper"
      },
      {
        path: "/admin/main",
        component: () => import("pages/admin/main.vue"),
        name: "adminMain"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
