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
    path: "/test",
    component: () => import("pages/index.vue"),
    name: "test"
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
        path: "/stepper/:step",
        component: () => import("pages/stepper.vue"),
        name: "stepper"
      },
      {
        path: "/waitingAssessment",
        component: () => import("pages/waitingAssessment.vue"),
        name: "waitingAssessment"
      },
      {
        path: "/assessment",
        component: () => import("pages/assessment.vue"),
        name: "assessment"
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
