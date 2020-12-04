<template>
  <q-page>
    <div style="width:1200px;margin:auto;">
      <div class="q-pa-md row" align="right">
        <div class="col"></div>
        <div class="q-mr-lg self-center">
          <q-select
            outlined
            v-model="yearSelected"
            :options="yearList"
            label="ปีงบประมาณ"
            style="width:170px;"
            @input="getAssessmentLog()"
            dense=""
          />
        </div>
      </div>

      <div v-show="isShowGraph">
        <div class="row relative-position" style>
          <div class="col-6  q-pa-lg" style="margin-top:-70px;" align="left">
            <div id="container"></div>
          </div>
          <div class="col q-mt-lg" align="center" v-if="assessmentLog">
            <div class=" font-24" align="left">
              <div>
                <span class="color1 text-bold">ผู้ประเมิน : </span>
                <span class="q-ml-sm">{{ assessorName }}</span>
              </div>
              <div class="q-mt-lg">
                <span class="color8 text-bold">หน่วยงานประเมิน</span>
                <div class="q-mt-xs">
                  <span
                    >ผลดำเนินการ PMQA4.0 ในภาพรวม =
                    <span style="font-size:48px">{{
                      assessmentLog.office_score
                    }}</span>
                    คะแนน</span
                  >
                </div>
              </div>

              <div class="q-mt-lg">
                <span class="color9 text-bold">คณะกรรมการประเมิน</span>
                <div class="q-mt-xs">
                  <span
                    >ผลดำเนินการ PMQA4.0 ในภาพรวม =
                    <span style="font-size:48px">{{
                      assessmentLog.assessor_score
                    }}</span>
                    คะแนน</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <q-separator class="bg-black" style="height:2px;"></q-separator>

        <div class=" q-mt-lg ">
          <!-- 1 -->
          <div class="row ">
            <div
              class="col-1 self-center  relative-position "
              align="center"
              style="width:70px;"
              @click="activeStep >= 1 ? activeStep-- : null"
            >
              <span class="absolute-center" style="left:20px;"
                ><q-icon
                  size="150px"
                  name="fas fa-caret-left"
                  :class="
                    activeStep == 0
                      ? 'color2 cursor-not-allowed'
                      : 'color5 cursor-pointer'
                  "
                ></q-icon
              ></span>
            </div>
            <div class="col ">
              <div class="row q-pb-lg q-pa-md ">
                <div
                  class="col-3 self-center"
                  style="width:230px;"
                  align="center"
                >
                  <div style="border:1px solid#000;">
                    <div style="border-bottom:1px solid;padding:25px 0px">
                      <q-icon
                        size="70px"
                        class="color1"
                        :name="dataList[activeStep].fontawesome"
                      ></q-icon>
                    </div>

                    <div
                      class="bg10 text-white"
                      style="padding:40px 0px"
                      align="center"
                    >
                      <span
                        class=" block"
                        style="width:200px;font-size:24px;"
                        >{{ dataList[activeStep].title }}</span
                      >
                    </div>
                  </div>

                  <div
                    v-ripple
                    class="relative-position shadow-1 q-pa-md q-mt-lg cursor-pointer"
                    style="border:1px solid#000;"
                    @click="printBtn(activeStep)"
                  >
                    <q-icon
                      size="25px"
                      class="q-mr-md"
                      name="fas fa-print"
                    ></q-icon>
                    <span>พิมพ์ผลการประเมิน</span>
                  </div>
                </div>

                <div style="width:40px;"></div>
                <div class="col">
                  <div style="border:1px solid#000;">
                    <div class="row q-py-lg q-mt-md">
                      <div
                        class="col-3 self-center "
                        style="width:160px;"
                        align="center"
                      >
                        <span class="font-18"
                          >หน่วยงาน <br />
                          ประเมิน</span
                        >
                      </div>
                      <div style="width:40px;"></div>
                      <div
                        class="col self-end q-mb-md"
                        style="border-bottom:2px solid;padding:0px 10px"
                        v-for="(score, index2) in dataList[activeStep].score"
                        :key="index2"
                        v-if="activeStep != 0"
                      >
                        <div
                          class="bg11 relative-position"
                          :style="`height:${(130 / 650) * score || 2}px`"
                          align="center"
                        >
                          <span
                            class="absolute-center text-white "
                            style="font-size:24px;"
                            >{{ score == 0 ? "" : score }}</span
                          >
                          <span
                            class="absolute-bottom"
                            style="bottom:-45px;font-size:24px;"
                            >{{ `${activeStep + 1}.${index2 + 1}` }}</span
                          >
                        </div>
                      </div>
                      <div
                        class="col self-center "
                        align="center"
                        v-if="activeStep == 0"
                      >
                        <span>
                          ไม่มีการาคิดคะแนน
                        </span>
                      </div>
                      <div style="width:40px;"></div>
                    </div>

                    <q-separator
                      class="bg-black q-my-md"
                      style="height:2px;"
                    ></q-separator>

                    <div class="row q-py-lg">
                      <div
                        class="col-3 self-center "
                        style="width:160px;"
                        align="center"
                      >
                        <span class="font-18"
                          >คณะกรรมการ
                          <br />
                          ประเมิน</span
                        >
                      </div>
                      <div style="width:40px;"></div>
                      <div
                        class="col self-end q-mb-md"
                        style="border-bottom:2px solid;padding:0px 15px"
                        v-for="(score, index2) in dataList[activeStep].a_score"
                        :key="index2"
                        v-if="activeStep != 0"
                      >
                        <div
                          class="bg5 relative-position"
                          :style="`height:${(130 / 650) * score || 2}px`"
                          align="center"
                        >
                          <span
                            class="absolute-center text-white "
                            style="font-size:24px;"
                            >{{ score == 0 || score == -1 ? "" : score }}</span
                          >
                          <span
                            class="absolute-bottom "
                            style="bottom:-45px;font-size:24px;"
                            >{{ `${activeStep + 1}.${index2 + 1}` }}</span
                          >
                        </div>
                      </div>
                      <div
                        class="col  self-center "
                        align="center"
                        v-if="activeStep == 0"
                      >
                        <span>
                          ไม่มีการาคิดคะแนน
                        </span>
                      </div>
                      <div style="width:40px;"></div>
                    </div>

                    <q-separator
                      class="q-mt-md transparent"
                      style="height:2px;"
                    ></q-separator>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-1 self-center relative-position"
              align="center"
              style="width:70px;"
              @click="activeStep <= 5 ? activeStep++ : null"
            >
              <span class="absolute-center " style="right:-85px;"
                ><q-icon
                  size="150px"
                  name="fas fa-caret-right"
                  :class="
                    activeStep == 6
                      ? 'color2 cursor-not-allowed'
                      : 'color5 cursor-pointer'
                  "
                ></q-icon
              ></span>
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
    stepFooter
  },
  data() {
    return {
      isShowGraph: false,
      assessorName: "",
      assessmentLog: "",
      activeStep: 0,
      yearList: [],
      yearSelected: this.$q.sessionStorage.getItem("y") + 543,
      dataList: [
        {
          title: `ลักษณะสำคัญองค์การ `,
          fontawesome: "fas fa-street-view",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0]
        },
        {
          title: `การนำองค์การ `,
          fontawesome: "fas fa-street-view",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0]
        },
        {
          title: `การวางแผน เชิงยุทธศาสตร์`,
          fontawesome: "fas fa-map-signs",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0]
        },
        {
          title: `การให้ความสำคัญ กับผู้รับบริการและ ผู้มีส่วนได้ส่วนเสีย`,
          fontawesome: "fas fa-users",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0]
        },
        {
          title: `การวัด การวิเคราะห์ และการจัดการความรู้`,
          fontawesome: "fas fa-chart-line",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0]
        },
        {
          title: `การมุ่งเน้นบุคลากร`,
          fontawesome: "fas fa-users-cog",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0]
        },
        {
          title: `การมุ่งเน้นระบบ ปฏิบัติการ`,
          fontawesome: "fas fa-project-diagram",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0]
        },
        {
          title: `ผลลัพธ์การดำเนินการ`,
          fontawesome: "fas fa-trophy",
          score: [0, 0, 0, 0],
          a_score: [0, 0, 0, 0, 0, 0]
        }
      ]
    };
  },
  methods: {
    printBtn(step) {
      if (step == 0) {
        let route = this.$router.resolve({
          name: "printStep0"
        });
        window.open(route.href);
      } else {
        let route = this.$router.resolve({
          name: "printStep" + step + "A"
        });
        window.open(route.href);
      }
    },
    render() {
      this.isShowGraph = true;
      let year = [
        this.$q.sessionStorage.getItem("y") + 541,
        this.$q.sessionStorage.getItem("y") + 542,
        this.$q.sessionStorage.getItem("y") + 543,
        this.$q.sessionStorage.getItem("y") + 544,
        this.$q.sessionStorage.getItem("y") + 545,
        this.$q.sessionStorage.getItem("y") + 546
      ];

      this.yearList = year;

      let dataScoreA = [
        this.assessmentLog.category1_score,
        this.assessmentLog.category2_score,
        this.assessmentLog.category3_score,
        this.assessmentLog.category4_score,
        this.assessmentLog.category5_score,
        this.assessmentLog.category6_score,
        this.assessmentLog.category7_score
      ];
      dataScoreA = dataScoreA.map(x => Number(x));

      let dataScoreB = [
        this.assessmentLog.a_category1_score,
        this.assessmentLog.a_category2_score,
        this.assessmentLog.a_category3_score,
        this.assessmentLog.a_category4_score,
        this.assessmentLog.a_category5_score,
        this.assessmentLog.a_category6_score,
        this.assessmentLog.a_category7_score
      ];

      dataScoreB = dataScoreB.map(x => Number(x));

      let newData = Highcharts.chart("container", {
        chart: {
          polar: true,

          style: {
            fontFamily: "PROMPT-R"
          }
        },

        title: {
          text: "",
          x: -80
        },

        pane: {
          size: "85%"
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
            "หมวด 7"
          ],
          tickmarkPlacement: "on",
          lineWidth: 0,
          labels: {
            style: {
              fontSize: "16px",
              color: "#000000"
            }
          },
          gridLineColor: "transparent"
        },

        yAxis: {
          gridLineInterpolation: "polygon",
          lineWidth: 0,
          gridLineColor: "#000000",
          max: 500
        },

        tooltip: {
          shared: true,
          pointFormat: ""
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
          }
        },

        series: [
          {
            name: "หน่วยงานประเมิน",
            data: dataScoreA,
            pointPlacement: "on",
            showInLegend: true,
            type: "area",
            color: "#418ED9",
            borderColor: "#1976D2"
          },
          {
            name: "คณะกรรมการประเมิน",
            data: dataScoreB,
            pointPlacement: "on",
            showInLegend: true,
            type: "area",
            color: "#79BDA3",
            borderColor: "#009688"
          }
        ],
        credits: {
          enabled: false
        }
      });
    },
    async getData() {
      const url = this.apiPath + "user/getAllCategory1_6.php";

      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid")
      };

      let getData = await Axios.post(url, postData);
      getData = getData.data;

      const postData1 = {
        year: this.yearSelected,
        user_id: this.$q.sessionStorage.getItem("uid")
      };

      for (let i = 0; i < this.dataList.length; i++) {
        let score = getData.filter(x => x.step == i + 1 && x.mode == "basic");
        score = score.sort((a, b) => Number(a.q_number) - Number(b.q_number));

        for (let j = 0; j < 4; j++) {
          let checkScore = score.filter(x => x.q_number == (j + 1).toString());
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

      let mapCat7 = cat7.map(x => Number(x.avg_score));

      for (let i = 0; i < 6; i++) {
        let checkExist = cat7.filter(x => x.q_number == (i + 1).toString());
        console.log(checkExist);

        if (checkExist.length) {
          this.dataList[6].score[i] = parseInt(checkExist[0].avg_score);
          this.dataList[6].a_score[i] = parseInt(checkExist[0].a_avg_score);
        }
      }

      this.getAssessmentLog();
    },
    async getAssessmentLog() {
      let postData = {
        year: this.yearSelected - 543
      };

      let url = this.apiPath + "getAssessmentLog.php";

      let data = await Axios.post(url, postData);

      this.assessmentLog = data.data.filter(
        x => x.user_id == this.$q.sessionStorage.getItem("uid")
      )[0];

      if (this.assessmentLog) {
        postData = {
          user_id: this.assessmentLog.assessor_id
        };

        url = this.apiPath + "getAssessorInfo.php";

        let dataB = await Axios.post(url, postData);

        this.assessorName = dataB.data[0].name;
        this.render();
      } else {
        this.isShowGraph = false;
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped></style>
