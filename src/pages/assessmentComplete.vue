<template>
  <q-page>
    <div style="width:1200px;margin:auto;">
      <div class="q-pa-md row" align="right">
        <div class="col"></div>
        <div class="q-pr-sm self-center">
          <q-select
            outlined
            v-model="yearSelected"
            :options="yearList"
            label="ปีงบประมาณ"
            style="width:170px;"
            @input="getAssessmentLog()"
            dense
          />
        </div>
      </div>

      <div class="q-pa-md">
        <div class="row justify-center">
          <div style="width:11%" class="q-pa-xs" v-for="(item,index) in categoryGroup" :key="index">
            <div
              @click="toPage(item,index)"
              class="row relative-position cursor-pointer"
              v-ripple
              style="border:1px solid"
            >
              <div align="center" class="col-12 q-py-sm">{{ item.name }}</div>

              <div
                class="col-12 text-white"
                align="center"
                :class="item.status == 'ยังไม่ประเมิน' ?'my-red' : item.status == 'ประเมินแล้ว' ? 'my-green' : 'my-yellow'"
              >{{ item.status }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="isShowGraph" class="q-pt-lg" style="height:597px">
        <div class="row relative-position q-py-md">
          <div class="col-6 q-pa-lg" style="margin-top:-70px;" align="left">
            <div id="container"></div>
          </div>
          <div class="col q-mt-lg" align="center" v-if="assessmentLog">
            <div class="font-24" align="left">
              <div>
                <span class="color1 text-bold">ผู้ประเมิน :</span>
                <span class="q-ml-sm">{{ assessorName }}</span>
              </div>
              <div class="q-mt-lg">
                <span class="color8 text-bold">หน่วยงานประเมิน</span>
                <div class="q-mt-xs">
                  <span>
                    ผลดำเนินการ PMQA4.0 ในภาพรวม =
                    <span style="font-size:48px">
                      {{
                      assessmentLog.office_score
                      }}
                    </span>
                    คะแนน
                  </span>
                </div>
              </div>

              <div class="q-mt-lg">
                <span class="color9 text-bold">คณะกรรมการประเมิน</span>
                <div class="q-mt-xs">
                  <span>
                    ผลดำเนินการ PMQA4.0 ในภาพรวม =
                    <span
                      style="font-size:48px"
                      v-if="assessmentLog.assessor_score != '-1'"
                    >
                      {{
                      assessmentLog.assessor_score
                      }} คะแนน
                    </span>
                    <span class="color1">ยังไม่ประเมิน</span>
                  </span>
                </div>
              </div>
              <div style="height:30px"></div>
              <div class="q-pa-md" style="border:1px solid;width:320px;margin:auto">
                หน่วยงานระบบราชการ
                <span v-if="assessmentLog.assessor_score == '-1'">-</span>
                <span v-else>{{ ((assessmentLog.assessor_score / 500) * 4).toFixed(1) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <step-footer></step-footer>
  </q-page>
</template>

<script>
import stepFooter from "../components/footer";
import Axios from "axios";
export default {
  components: {
    stepFooter,
  },
  data() {
    return {
      file1Y: "",
      file3Y: "",
      categoryGroup: [
        { name: "ลักษณะองค์กร", status: "ยังไม่ประเมิน" },
        { name: "หมวด 1-6", status: "ยังไม่ประเมิน" },
        { name: "หมวด 7 GAP", status: "ยังไม่ประเมิน" },
        { name: "แผน 1 ปี", status: "ยังไม่ประเมิน" },
        { name: "แผน 3 ปี", status: "ยังไม่ประเมิน" },
        { name: "ติดตาม 6 เดือน", status: "ยังไม่ประเมิน" },
        { name: "หมวด7", status: "ยังไม่ประเมิน" },
        { name: "ติดตาม 12 เดือน", status: "ยังไม่ประเมิน" },
        { name: "สรุป 12 เดือน", status: "ยังไม่ประเมิน" },
      ],
      isShowGraph: false,
      assessorName: "",
      assessmentLog: "",
      activeStep: 0,
      yearList: [],
      // yearSelected: this.$q.sessionStorage.getItem("y") + 543,
      yearSelected: 2564,
      dataList: [
        {
          title: `ลักษณะสำคัญขององค์กร`,
          fontawesome: "fas fa-flag",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0],
        },
        {
          title: `การนำองค์กร `,
          fontawesome: "fas fa-street-view",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0],
        },
        {
          title: `การวางแผน เชิงยุทธศาสตร์`,
          fontawesome: "fas fa-map-signs",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0],
        },
        {
          title: `การให้ความสำคัญ กับผู้รับบริการและ ผู้มีส่วนได้ส่วนเสีย`,
          fontawesome: "fas fa-users",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0],
        },
        {
          title: `การวัด การวิเคราะห์ และการจัดการความรู้`,
          fontawesome: "fas fa-chart-line",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0],
        },
        {
          title: `การมุ่งเน้นบุคลากร`,
          fontawesome: "fas fa-users-cog",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0],
        },
        {
          title: `การมุ่งเน้นระบบ ปฏิบัติการ`,
          fontawesome: "fas fa-project-diagram",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0],
        },
        {
          title: `ผลลัพธ์การดำเนินการ`,
          fontawesome: "fas fa-trophy",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0, 0, 0],
        },
      ],
    };
  },
  methods: {
    toPage(item, index) {
      if (item.status == "ยังไม่ประเมิน") return;

      if (index == 0) {
        // OP
        if (item.status == "รอผลประเมิน") {
          // ปริ้น ลักษณะองค์กร แบบไม่มีผู้ประเมิน
        } else if (item.status == "ประเมินแล้ว") {
          // ปริ้นลักษณะองค์กรแบบมีผู้ประเมิน
        }
      } else if (index == 1) {
        // หมวด1-6
        if (item.status == "รอผลประเมิน") {
          // ปริ้น รวม 1-6 แบบไม่มีผู้ประเมิน
        } else if (item.status == "ประเมินแล้ว") {
          // ปริ้นรวม 1-6 แบบมีผู้ประเมิน
        }
      } else if (index == 2) {
        // หมวด7 GAP

        if (item.status == "รอผลประเมิน") {
          // ปริ้นหมวด7 GAP ไม่มีข้อเสนอแนะ
          this.printData(7);
        } else {
          // ปริ้นหมวด7 GAP + ข้อเสนอแนะจากกรรมการ

          let route = this.$router.resolve({
            name: "printStep7A",
          });
          window.open(route.href);
        }
      } else if (index == 3) {
        // แผน 1 ปี
        if (item.status == "รอผลประเมิน") {
          // download plan1y
          this.openFile(1);
        } else {
          // route to print plan1y พร้อมกับข้อเสนอแนะจากกรรมการ

          let route = this.$router.resolve({
            name: "printPlan1",
          });
          window.open(route.href);
        }
      } else if (index == 4) {
        // แผน 3 ปี
        if (item.status == "รอผลประเมิน") {
          // download plan3y
          this.openFile(2);
        } else {
          // route to print plan3y พร้อมกับข้อเสนอแนะจากกรรมการ
          let route = this.$router.resolve({
            name: "printPlan3",
          });
          window.open(route.href);
        }
      } else if (index == 6) {
        // ติดตาม 6 เดือน
        if (item.status == "รอผลประเมิน") {
          // download month_6
        } else {
          // route to print month_6 พร้อมกับข้อเสนอแนะจากกรรมการ
        }
      } else if (index == 7) {
        // หมวด 7
        if (item.status == "รอผลประเมิน") {
          // ปริ้นหมวด7  ไม่มีข้อเสนอแนะ
        } else {
          // ปริ้นหมวด7  + ข้อเสนอแนะจากกรรมการ
        }
      } else if (index == 8) {
        // ติดตาม 12 เดือน

        if (item.status == "รอผลประเมิน") {
          // download month_12
        } else {
          // route to print month_12 พร้อมกับข้อเสนอแนะจากกรรมการ
        }
      } else if (index == 9) {
        // สรุป 12 เดือน
        if (item.status == "รอผลประเมิน") {
          // download summary_month_12
        } else {
          // route to print summary_month_12 พร้อมกับข้อเสนอแนะจากกรรมการ
        }
      }
    },
    printData(step) {
      let route = this.$router.resolve({
        name: "printStep" + step,
      });
      window.open(route.href);
    },
    render() {
      this.isShowGraph = true;

      let dataScoreA = [
        this.assessmentLog.category1_score,
        this.assessmentLog.category2_score,
        this.assessmentLog.category3_score,
        this.assessmentLog.category4_score,
        this.assessmentLog.category5_score,
        this.assessmentLog.category6_score,
        this.assessmentLog.category7_score,
      ];
      dataScoreA = dataScoreA.map((x) => Number(x));

      let dataScoreB;
      if (this.assessmentLog.assessor_score != "-1") {
        dataScoreB = [
          this.assessmentLog.a_category1_score,
          this.assessmentLog.a_category2_score,
          this.assessmentLog.a_category3_score,
          this.assessmentLog.a_category4_score,
          this.assessmentLog.a_category5_score,
          this.assessmentLog.a_category6_score,
          this.assessmentLog.a_category7_score,
        ];
      } else {
        dataScoreB = [0, 0, 0, 0, 0, 0, 0];
      }

      dataScoreB = dataScoreB.map((x) => Number(x));

      let newData = Highcharts.chart("container", {
        chart: {
          polar: true,

          style: {
            fontFamily: "PROMPT-R",
          },
        },

        title: {
          text: "",
          x: -80,
        },

        pane: {
          size: "85%",
        },

        xAxis: {
          useHTML: false,
          categories: [
            "หมวด 1",
            "หมวด 2",
            "หมวด 3",
            "หมวด 4",
            "หมวด 5",
            "หมวด 6",
            "หมวด 7",
          ],
          tickmarkPlacement: "on",
          lineWidth: 0,
          labels: {
            style: {
              fontSize: "16px",
              color: "#000000",
            },
          },
          gridLineColor: "transparent",
        },

        yAxis: {
          gridLineInterpolation: "polygon",
          lineWidth: 0,
          gridLineColor: "#000000",
          max: 500,
        },

        tooltip: {
          shared: true,
          pointFormat: "",
        },
        legend: {
          useHTML: true,
          borderColor: "transparent",
          align: "center",
          verticalAlign: "bottom",
          symbolWidth: 0.1,
          symbolHeight: 0.1,
          labelFormatter() {
            return `<div style='display:inline-block;width:37px;height:37px;background-color:${this.color};border:.8mm solid ${this.options.borderColor};'></div> <span>${this.name}</span>`;
          },
        },

        series: [
          {
            name: "หน่วยงานประเมิน",
            data: dataScoreA,
            pointPlacement: "on",
            showInLegend: true,
            type: "area",
            color: "#418ED9",
            borderColor: "#1976D2",
          },
          {
            name: "คณะกรรมการประเมิน",
            data: dataScoreB,
            pointPlacement: "on",
            showInLegend: true,
            type: "area",
            color: "#79BDA3",
            borderColor: "#009688",
          },
        ],
        credits: {
          enabled: false,
        },
      });
    },
    async getData() {
      const url = this.apiPath + "user/getAllCategory1_6.php";

      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid"),
      };

      let getData = await Axios.post(url, postData);
      getData = getData.data;

      const postData1 = {
        year: this.yearSelected,
        user_id: this.$q.sessionStorage.getItem("uid"),
      };

      for (let i = 1; i < this.dataList.length; i++) {
        let score = getData.filter((x) => x.step == i && x.mode == "basic");
        score = score.sort((a, b) => Number(a.q_number) - Number(b.q_number));

        for (let j = 0; j < 4; j++) {
          let checkScore = score.filter(
            (x) => x.q_number == (j + 1).toString()
          );
          if (checkScore.length) {
            this.dataList[i].score[j] =
              checkScore[0].score == "-1" ? 0 : checkScore[0].score;
            this.dataList[i].a_score[j] =
              checkScore[0].a_score == "-1" ? 0 : checkScore[0].a_score;
          }
        }
      }

      const url1 = this.apiPath + "user/getCategory7.php";
      let getCategory7 = await Axios.post(url1, postData1);

      let cat7 = getCategory7.data.sort(
        (a, b) => Number(a.q_number) - Number(b.q_number)
      );

      let mapCat7 = cat7.map((x) => Number(x.avg_score));

      for (let i = 0; i < 6; i++) {
        let checkExist = cat7.filter((x) => x.q_number == (i + 1).toString());

        if (checkExist.length) {
          this.dataList[7].score[i] = parseInt(checkExist[0].avg_score);
          this.dataList[7].a_score[i] = parseInt(checkExist[0].a_avg_score);
        }
      }

      this.getAssessmentLog();
    },
    async getAssessmentLog() {
      let postData = {
        year: this.yearSelected - 543,
      };

      let url = this.apiPath + "getAssessmentLog.php";

      let data = await Axios.post(url, postData);

      this.assessmentLog = data.data.filter(
        (x) => x.user_id == this.$q.sessionStorage.getItem("uid")
      )[0];

      if (this.assessmentLog) {
        postData = {
          user_id: this.assessmentLog.assessor_id,
        };

        url = this.apiPath + "getAssessorInfo.php";

        let dataB = await Axios.post(url, postData);

        // this.assessorName = dataB.data[0].name;
        this.render();
      } else {
        this.isShowGraph = false;
      }

      this.getAssessmentStepper();
    },
    async getAssessmentStepper() {
      const apiCheckStatus = this.apiPath + "user/getAssessmentStepperLog.php";
      let postCheckStatusData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
      };

      let responseCheck = await Axios.post(apiCheckStatus, postCheckStatusData);
      let responseData = responseCheck.data[0];

      const convertStatusToText = (status) => {
        let result;
        if (status == "0") {
          result = "ยังไม่ประเมิน";
        } else if (status == "1") {
          result = "รอผลประเมิน";
        } else if (status == "2") {
          result = "ประเมินแล้ว";
        }
        return result;
      };

      this.categoryGroup = [
        { name: "ลักษณะองค์กร", status: convertStatusToText(responseData.op) },
        { name: "หมวด 1-6", status: convertStatusToText(responseData.cat1_6) },
        {
          name: "หมวด 7 GAP",
          status: convertStatusToText(responseData.cat7_gap),
        },
        { name: "แผน 1 ปี", status: convertStatusToText(responseData.plan_1y) },
        { name: "แผน 3 ปี", status: convertStatusToText(responseData.plan_3y) },
        {
          name: "ติดตาม 6 เดือน",
          status: convertStatusToText(responseData.month_6),
        },
        { name: "หมวด7", status: convertStatusToText(responseData.cat7) },
        {
          name: "ติดตาม 12 เดือน",
          status: convertStatusToText(responseData.month_12),
        },
        {
          name: "สรุป 12 เดือน",
          status: convertStatusToText(responseData.sum_month_12),
        },
      ];
    },
    async getFilePlan() {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "getFileMain.php";
      let response = await Axios.post(url, formData);

      if (response.data != "no files") {
        let data = response.data[0];
        this.file1Y = data.path1 != "" ? data.path1 : "";
        this.file3Y = data.path2 != "" ? data.path2 : "";
      }
    },

    openFile(file) {
      if (file == 1) {
        // userid-1-year
        window.open(this.apiPath + this.file1Y);
      } else {
        window.open(this.apiPath + this.file3Y);
      }
    },
  },
  mounted() {
    this.getData();
  },
  created() {
    let year = [
      this.$q.sessionStorage.getItem("y") + 541,
      this.$q.sessionStorage.getItem("y") + 542,
      this.$q.sessionStorage.getItem("y") + 543,
      this.$q.sessionStorage.getItem("y") + 544,
      this.$q.sessionStorage.getItem("y") + 545,
      this.$q.sessionStorage.getItem("y") + 546,
    ];

    this.yearList = year;
    this.getAssessmentStepper();
    this.getFilePlan();
  },
};
</script>

<style lang="scss" scoped>
.my-red {
  background-color: #c92a07;
}
.my-yellow {
  background-color: #bb950d;
}
.my-green {
  background-color: #138c6f;
}
</style>
