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
    path: "/print/assessment",
    component: () => import("pages/printAssessment.vue"),
    name: "printAssessment"
  },
  {
    path: "/reset",
    component: () => import("pages/reset.vue"),
    name: "reset"
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

      //type 0 = ส่งแบบประเมินแล้ว
      // type 1  = หมดเวลา
      // type 2 = กรรมการพิจารณาแล้ว
      {
        path: "/waitingAssessment/:type",
        component: () => import("pages/waitingAssessment.vue"),
        name: "waitingAssessment"
      },
      {
        path: "/assessment",
        component: () => import("pages/assessment.vue"),
        name: "assessment"
      },
      {
        path: "/assessmentComplete",
        component: () => import("pages/assessmentComplete.vue"),
        name: "assessmentComplete"
      },

      {
        path: "/admin/main",
        component: () => import("pages/admin/main.vue"),
        name: "adminMain"
      }
    ]
  },
  // ASSESSOR
  {
    path : "/",
    component: () => import("layouts/AssessorLayout.vue"),
    children:[
      {
        path : "/assessor/main",
        component: () => import("pages/assessor/main.vue"),
        name : "assessorMain"
      },
      {
        path : "/assessor/details",
        component: () => import("pages/assessor/details.vue"),
        name : "assessorDetails"
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
