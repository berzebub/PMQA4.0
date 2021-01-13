import Axios from "axios";
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
      apiPath: "http://localhost/pmqa4.0_api/",
      // apiPath: "http://203.157.41.91/pmqa4_0_api/"
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
    async getDate() {
      return new Promise(async (a, b) => {
        let date = await Axios.get(this.apiPath + "/getDate.php");
        a(date.data);
      });
    },
    printBtn() {
      window.print();
    },
    async uGetScore() {
      console.clear();
      const url = this.apiPath + "user/getAllCategory1_6.php";

      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid")
      };

      let getData = await Axios.post(url, postData);
      getData = getData.data;

      const postData1 = {
        year: this.$q.sessionStorage.getItem("y") + 543,
        user_id: this.$q.sessionStorage.getItem("uid")
      };

      let dataList = [
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0, 0, 0]
        }
      ];

      for (let i = 0; i < dataList.length; i++) {
        let score = getData.filter(x => x.step == i + 1 && x.mode == "basic");
        score = score.sort((a, b) => Number(a.q_number) - Number(b.q_number));
        dataList[i].score = score.map(x => Number(x.score));
      }

      const url1 = this.apiPath + "user/getCategory7.php";
      let getCategory7 = await Axios.post(url1, postData1);

      let cat7 = getCategory7.data.sort(
        (a, b) => Number(a.q_number) - Number(b.q_number)
      );

      let mapCat7 = cat7.map(x => Number(x.avg_score));

      for (let i = 0; i < 6; i++) {
        let checkExist = cat7.filter(x => x.q_number == (i + 1).toString());
        if (checkExist.length) {
          dataList[6].score[i] = parseInt(mapCat7[i]);
        }
      }

      let avgScoreLst = [];
      // let avgTemp2 = []

      for (let i = 0; i < dataList.length; i++) {
        let devine = 4;

        if (i == 6) {
          devine = 6;
        }

        avgScoreLst.push(
          dataList[i].score.map(x => x).reduce((a, b) => a + b, 0) / devine
        );
      }

      let totalAvgScore = avgScoreLst.reduce((a, b) => a + b, 0) / 7;

      let result = {
        score: avgScoreLst,
        totalAvgScore: totalAvgScore
      };

      return result;
    },
    async uSendAssessment() {
      let avgScore = await this.uGetScore();

      const sendAPI = this.apiPath + "user/sendAssessment.php";
      let postSendData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        office_score: avgScore.totalAvgScore,
        year: this.$q.sessionStorage.getItem("y"),
        category1_score: parseInt(avgScore.score[0]),
        category2_score: parseInt(avgScore.score[1]),
        category3_score: parseInt(avgScore.score[2]),
        category4_score: parseInt(avgScore.score[3]),
        category5_score: parseInt(avgScore.score[4]),
        category6_score: parseInt(avgScore.score[5]),
        category7_score: parseInt(avgScore.score[6])
      };

      let send = Axios.post(sendAPI, postSendData);

      const url = this.apiPath + "user/setUserStepperLog.php";
      let postData = {
        category: "category1",
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
        status: 1, // 1 = finish
        send_status: 1
      };
      let data = await Axios.post(url, postData);
      this.$router.push("/waitingAssessment/0");
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
    },
    showMonth(month) {
      if (month == 1) {
        return "ม.ค.";
      } else if (month == 2) {
        return "ก.พ.";
      } else if (month == 3) {
        return "มี.ค.";
      } else if (month == 4) {
        return "เม.ย.";
      } else if (month == 5) {
        return "พ.ค.";
      } else if (month == 6) {
        return "มิ.ย.";
      } else if (month == 7) {
        return "ก.ค.";
      } else if (month == 8) {
        return "ส.ค.";
      } else if (month == 9) {
        return "ก.ย.";
      } else if (month == 10) {
        return "ต.ค.";
      } else if (month == 11) {
        return "พ.ย.";
      } else if (month == 12) {
        return "ธ.ค.";
      }
    },
    replaceN(str) {
      if (str) {
        let res = str.replace(/\n/g, "<br>");
        return res;
      } else {
        return str;
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
