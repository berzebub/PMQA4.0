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
    path: "/print1-6",
    component: () => import("pages/print1-6.vue"),
    name: "print1-6"
  },
  {
    path: "/print1-6a",
    component: () => import("pages/print1-6a.vue"),
    name: "print1-6a"
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

  // print plan 1y

  {
    path: "/printPlan1",
    component: () => import("pages/printPlan1Y.vue"),
    name: "printPlan1"
  },
  {
    path: "/printPlan3",
    component: () => import("pages/printPlan3Y.vue"),
    name: "printPlan3"
  },

  // PRINT ASSESSOR PAPER
  {
    path: "/print/0A",
    component: () => import("pages/print0A.vue"),
    name: "printStep0A"
  },
  {
    path: "/print/1A",
    component: () => import("pages/print1A.vue"),
    name: "printStep1A"
  },
  {
    path: "/print/2A",
    component: () => import("pages/print2A.vue"),
    name: "printStep2A"
  },
  {
    path: "/print/3A",
    component: () => import("pages/print3A.vue"),
    name: "printStep3A"
  },
  {
    path: "/print/4A",
    component: () => import("pages/print4A.vue"),
    name: "printStep4A"
  },
  {
    path: "/print/5A",
    component: () => import("pages/print5A.vue"),
    name: "printStep5A"
  },
  {
    path: "/print/6A",
    component: () => import("pages/print6A.vue"),
    name: "printStep6A"
  },
  {
    path: "/print/7A",
    component: () => import("pages/print7A.vue"),
    name: "printStep7A"
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
      },

      {
        path: "/cat7",
        component: () => import("pages/category7.vue"),
        name: "cat7"
      },
      {
        path: "/assessmentResult",
        component: () => import("pages/assessmentResult.vue"),
        name: "assessmentResult"
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
        path: "assessor/stepper/:step",
        component: () => import("pages/assessor/stepper.vue"),
        name: "stepper"
      },
      {
        path: "/assessor/details",
        component: () => import("pages/assessor/details.vue"),
        name: "assessorDetails"
      },
      {
        path: "assessor/stepMain/:userId",
        component: () => import("pages/assessor/stepMain.vue"),
        name: "assessorStepMain"
      },
      {
        path: "assessor/plan1y/:userId",
        component: () => import("pages/assessor/plan1y.vue"),
        name: "plan1y"
      },
      {
        path: "assessor/plan3y/:userId",
        component: () => import("pages/assessor/plan3y.vue"),
        name: "plan3y"
      },
      {
        path: "assessor/category7GAP/:userId",
        component: () => import("pages/assessor/category7GAP.vue"),
        name: "assessorCategory7GAP"
      },
      {
        path: "assessor/op",
        component: () => import("pages/assessor/step0.vue"),
        name: "step0"
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
