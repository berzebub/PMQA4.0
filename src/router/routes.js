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
  // PRINT ASSESSMENT PAPER
  {
    path: "/printAll",
    component: () => import("pages/printAll.vue"),
    name: "printAll"
  },
  {
    path: "/print/0",
    component: () => import("pages/print0.vue"),
    name: "printStep0"
  },
  {
    path: "/print/1",
    component: () => import("pages/print1.vue"),
    name: "printStep1"
  },
  {
    path: "/print/2",
    component: () => import("pages/print2.vue"),
    name: "printStep2"
  },
  {
    path: "/print/3",
    component: () => import("pages/print3.vue"),
    name: "printStep3"
  },
  {
    path: "/print/4",
    component: () => import("pages/print4.vue"),
    name: "printStep4"
  },
  {
    path: "/print/5",
    component: () => import("pages/print5.vue"),
    name: "printStep5"
  },
  {
    path: "/print/6",
    component: () => import("pages/print6.vue"),
    name: "printStep6"
  },
  {
    path: "/print/7",
    component: () => import("pages/print7.vue"),
    name: "printStep7"
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
    path: "/",
    component: () => import("layouts/AssessorLayout.vue"),
    children: [
      {
        path: "/assessor/main",
        component: () => import("pages/assessor/main.vue"),
        name: "assessorMain"
      },
      {
        path: "/assessor/details",
        component: () => import("pages/assessor/details.vue"),
        name: "assessorDetails"
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
