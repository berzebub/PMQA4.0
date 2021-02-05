<template>
  <q-page>
    <div v-show="!isLoadData">
      <div style="width:1200px;margin:auto;">
        <div class="row relative-position">
          <div class="col-5 q-pt-lg" align="center">
            <div id="container"></div>
          </div>
          <div class="col self-center" align="center">
            <span style="font-size:24px;">ผลดำเนินการ PMQA4.0 ในภาพรวม</span>
            <br />
            <span style="font-size:48px;"
              >{{ parseInt(totalAvgScore) }} คะแนน</span
            >
          </div>
          <div class="absolute q-pa-md" style="right:0">
            <q-btn round push size="lg" class="bg-teal" @click="printBtn()">
              <q-icon class="text-white" size="md" name="fas fa-print"></q-icon>
            </q-btn>
          </div>
          <div class="absolute q-pa-md" style="left:0"></div>
        </div>

        <q-separator class="bg-black" style="height:2px;"></q-separator>

        <div class="q-mt-lg">
          <div
            class="row items-end q-pb-lg q-pa-md"
            style="min-height:120px"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <div
              class="self-center q-pa-sm font-18"
              v-html="item.title"
              style="width:350px"
              align="left"
            ></div>
            <div class="col q-px-md q-pa-sm">
              <div class="row q-px-lg">
                <div
                  class="col self-end q-px-lg"
                  v-for="(score, index2) in item.score"
                  :key="index2"
                >
                  <div
                    class="bg5 relative-position"
                    :style="`height:${(130 / 500) * score || 2}px`"
                    align="center"
                  >
                    <span
                      class="absolute-center text-white"
                      style="font-size:24px;"
                    >
                      {{ score == "0" ? "" : score }}</span
                    >
                    <span
                      class="absolute-bottom"
                      style="bottom:-45px;font-size:24px;"
                      >{{ `${index + 1}.${index2 + 1}` }}</span
                    >
                  </div>
                </div>
              </div>
              <div style="border-bottom:2px solid"></div>
            </div>
          </div>
        </div>
      </div>

      <step-footer class="q-pt-lg"></step-footer>
    </div>
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
      dataList: [
        {
          title: `1. การนำองค์กร `,
          fontawesome: "fas fa-street-view",
          score: [0, 0, 0, 0]
        },
        {
          title: `2. การวางแผน เชิงยุทธศาสตร์`,
          fontawesome: "fas fa-map-signs",
          score: [0, 0, 0, 0]
        },
        {
          title: `3. การให้ความสำคัญกับผู้รับบริการและ<br> ผู้มีส่วนได้ส่วนเสีย`,
          fontawesome: "fas fa-users",
          score: [0, 0, 0, 0]
        },
        {
          title: `4. การวัด การวิเคราะห์ และการจัดการความรู้`,
          fontawesome: "fas fa-chart-line",
          score: [0, 0, 0, 0]
        },
        {
          title: `5. การมุ่งเน้นบุคลากร`,
          fontawesome: "fas fa-users-cog",
          score: [0, 0, 0, 0]
        },
        {
          title: `6. การมุ่งเน้นระบบ ปฏิบัติการ`,
          fontawesome: "fas fa-project-diagram",
          score: [0, 0, 0, 0]
        },
        {
          title: `7. ผลลัพธ์การดำเนินการ`,
          fontawesome: "fas fa-trophy",
          score: [0, 0, 0, 0, 0, 0]
        }
      ],
      totalAvgScore: 0,
      isLoadData: true
    };
  },
  methods: {
    printBtn() {
      let result = this.$router.resolve({
        path: "/print/assessment"
      });

      window.open(result.href, "__blank");
    },
    render() {
      let avgScoreLst = [];

      for (let i = 0; i < this.dataList.length; i++) {
        let devine = 4;

        if (i == 6) {
          devine = 6;
        }

        avgScoreLst.push(
          this.dataList[i].score.map(x => x).reduce((a, b) => Number(a) + Number(b), 0) / devine
        );
      }

      this.totalAvgScore = avgScoreLst.reduce((a, b) => Number(a) + Number(b), 0) / 7;
      let setPrintData = {
        data: this.dataList,
        avgScore: avgScoreLst,
        totalAvgScore: parseInt(this.totalAvgScore)
      };

      this.$q.sessionStorage.set("printData", setPrintData);

      Highcharts.chart("container", {
        credits: {
          enabled: false
        },
        chart: {
          polar: true,
          style: {
            fontFamily: "PROMPT-R"
          }
        },

        accessibility: {
          description: ""
        },

        title: {
          text: "",
          x: -80
        },

        pane: {
          size: "80%"
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
          min: 0,
          max: 500,
          gridLineColor: "#000000"
        },

        tooltip: {
          shared: true,
          pointFormat: "<span >คะแนน: <b>{point.y:,.0f}</b><br/>"
        },

        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical"
        },

        series: [
          {
            name: "",
            data: avgScoreLst,
            pointPlacement: "on",
            showInLegend: false,
            type: "area",
            color: "#79BDA3",
            borderColor: "#009688"
          }
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  align: "center",
                  verticalAlign: "bottom",
                  layout: "horizontal"
                },
                pane: {
                  size: "70%"
                }
              }
            }
          ]
        }
      });

      this.isLoadData = false;
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
        year: this.$q.sessionStorage.getItem("y") + (543-1),
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
