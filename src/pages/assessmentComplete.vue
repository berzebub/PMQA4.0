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
            dense=""
          />
        </div>
        <!-- <div class="self-center">
          <q-btn round="" push="" class="bg-teal">
            <q-icon class="text-white" size="18px" name="fas fa-print"></q-icon>
          </q-btn>
        </div> -->
      </div>
      <div class="row relative-position" style>
        <div class="col-6  q-pa-lg" style="margin-top:-70px;" align="left">
          <div id="container"></div>
        </div>
        <div class="col q-mt-lg" align="center">
          <div class=" font-24" align="left">
            <div>
              <span class="color1 text-bold">ผู้ประเมิน : </span>
              <span class="q-ml-md"> ....</span>
            </div>
            <div class="q-mt-lg">
              <span class="color8 text-bold">หน่วยงานประเมิน</span>
              <div class="q-mt-xs">
                <span>ผลดำเนินการ PMQA4.0 ในภาพรวม = 400 คะแนน</span>
              </div>
            </div>

            <div class="q-mt-lg">
              <span class="color9 text-bold">คณะกรรมการประเมิน</span>
              <div class="q-mt-xs">
                <span>ผลดำเนินการ PMQA4.0 ในภาพรวม = 345 คะแนน</span>
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
                    <span class=" block" style="width:200px;font-size:24px;">{{
                      dataList[activeStep].title
                    }}</span>
                  </div>
                </div>

                <div
                  v-ripple
                  class="relative-position shadow-1 q-pa-md q-mt-lg cursor-pointer"
                  style="border:1px solid#000;"
                  @click="printBtn(activeStep + 1)"
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
              <div class="col q-pb-xl self-end">
                <div style="border:1px solid#000;" class="q-pt-md">
                  <div class="row ">
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
                      class="col self-end"
                      style="border-bottom:2px solid;padding:0px 10px"
                      v-for="(score, index2) in dataList[activeStep].score"
                      :key="index2"
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
                    <div style="width:20px;"></div>
                  </div>

                  <q-separator
                    class="q-my-xl bg-black"
                    style="height:2px;"
                  ></q-separator>

                  <div class="row ">
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
                      class="col self-end "
                      style="border-bottom:2px solid;padding:0px 15px"
                      v-for="(score, index2) in dataList[activeStep]
                        .assessmentScore"
                      :key="index2"
                    >
                      <div
                        class="bg5 relative-position"
                        :style="`height:${(130 / 650) * score || 2}px`"
                        align="center"
                      >
                        <span
                          class="absolute-center text-white "
                          style="font-size:24px;"
                          >{{ score == 0 ? "" : score }}</span
                        >
                        <span
                          class="absolute-bottom "
                          style="bottom:-45px;font-size:24px;"
                          >{{ `${activeStep + 1}.${index2 + 1}` }}</span
                        >
                      </div>
                    </div>
                    <div style="width:20px;"></div>
                  </div>

                  <q-separator
                    class="q-mt-xl transparent"
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
      activeStep: 0,
      yearList: [],
      yearSelected: this.$q.sessionStorage.getItem("y") + 543,
      dataList: [
        {
          title: `1. การนำองค์การ `,
          fontawesome: "fas fa-street-view",
          score: [400, 300, 300, 400],
          assessmentScore: [200, 200, 200, 200]
        },
        {
          title: `2. การวางแผน เชิงยุทธศาสตร์`,
          fontawesome: "fas fa-map-signs",
          score: [200, 100, 400, 200],
          assessmentScore: [0, 0, 0, 0]
        },
        {
          title: `3. การให้ความสำคัญ กับผู้รับบริการและ ผู้มีส่วนได้ส่วนเสีย`,
          fontawesome: "fas fa-users",
          score: [200, 100, 400, 200],
          assessmentScore: [0, 0, 0, 0]
        },
        {
          title: `4. การวัด การวิเคราะห์ และการจัดการความรู้`,
          fontawesome: "fas fa-chart-line",
          score: [200, 100, 400, 200],
          assessmentScore: [0, 0, 0, 0]
        },
        {
          title: `5. การมุ่งเน้นบุคลากร`,
          fontawesome: "fas fa-users-cog",
          score: [200, 100, 400, 200],
          assessmentScore: [0, 0, 0, 0]
        },
        {
          title: `6. การมุ่งเน้นระบบ ปฏิบัติการ`,
          fontawesome: "fas fa-project-diagram",
          score: [200, 100, 400, 200],
          assessmentScore: [0, 0, 0, 0]
        },
        {
          title: `7. ผลลัพธ์การดำเนินการ`,
          fontawesome: "fas fa-trophy",
          score: [200, 100, 400, 200],
          assessmentScore: [0, 0, 0, 0]
        }
      ]
    };
  },
  methods: {
    printBtn(step) {
      let route = this.$router.resolve({
        name: "printStep" + step + "A"
      });
      window.open(route.href);
    },
    render() {
      let year = [
        this.$q.sessionStorage.getItem("y") + 541,
        this.$q.sessionStorage.getItem("y") + 542,
        this.$q.sessionStorage.getItem("y") + 543
      ];

      this.yearList = year;

      let dataScoreA = [];

      let dataScoreB = [];

      for (let i = 0; i < this.dataList.length; i++) {
        let scoreA = this.dataList[i].score;
        let newScoresA = [];

        let scoreB = this.dataList[i].assessmentScore;
        let newScoresB = [];

        if (i != 6) {
          newScoresA = (
            scoreA.reduce((a, b) => {
              return Number(a) + Number(b);
            }, 0) / 4
          ).toFixed(0);

          newScoresB = (
            scoreB.reduce((a, b) => {
              return Number(a) + Number(b);
            }, 0) / 4
          ).toFixed(0);
        } else {
          newScoresA = (
            scoreA.reduce((a, b) => {
              return Number(a) + Number(b);
            }, 0) / 6
          ).toFixed(0);

          newScoresB = (
            scoreB.reduce((a, b) => {
              return Number(a) + Number(b);
            }, 0) / 6
          ).toFixed(0);
        }

        dataScoreA.push(Number(newScoresA));
        dataScoreB.push(Number(newScoresB));
      }

      let newData = Highcharts.chart("container", {
        chart: {
          polar: true,
          width: "500",
          height: "450",
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
          gridLineColor: "#000000"
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
        year: this.$q.sessionStorage.getItem("y") + 543,
        user_id: this.$q.sessionStorage.getItem("uid")
      };

      for (let i = 0; i < this.dataList.length; i++) {
        let score = getData.filter(x => x.step == i + 1 && x.mode == "basic");
        score = score.sort((a, b) => Number(a.q_number) - Number(b.q_number));
        this.dataList[i].score.forEach((element, index) => {
          let filt = score.filter(x => x.q_number == index + 1);
          if (filt.length) {
            this.dataList[i].score[index] = filt[0].score;
          } else {
            this.dataList[i].score[index] = "0";
          }
        });
        // this.dataList[i].score = score.map(x => Number(x.score))
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
          this.dataList[6].score[i] = parseInt(checkExist[0].avg_score);
        }
      }

      this.render();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped></style>
