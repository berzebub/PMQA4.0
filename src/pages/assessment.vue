<template>
  <q-page>
    <div style="width:1200px;margin:auto;">
      <div class="row relative-position ">
        <div class="col-5  q-pa-lg" align="left">
          <div id="container"></div>
        </div>
        <div class="col self-center  " align="center">
          <span style="font-size:24px;">ผลดำเนินการ PMQA4.0 ในภาพรวม</span>
          <br />
          <span style="font-size:48px;">345 คะแนน</span>
        </div>
        <div class="absolute q-pa-md" style="right:0">
          <q-btn round="" push="" class="bg-teal" @click="printBtn()">
            <q-icon class="text-white" size="18px" name="fas fa-print"></q-icon>
          </q-btn>
        </div>
      </div>

      <q-separator class="bg-black" style="height:2px;"></q-separator>

      <div class=" q-mt-lg ">
        <!-- 1 -->
        <div
          class="row q-pb-lg q-pa-md "
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div class="col-3 self-center q-pa-sm" align="center">
            <q-icon
              size="70px"
              class="color1"
              :name="item.fontawesome"
            ></q-icon>
            <br />
            <br />
            <span
              class=" block"
              align="left"
              style="width:200px;font-size:24px;"
              >{{ item.title }}</span
            >
          </div>
          <div class="col q-pr-xl q-pb-xl self-end q-pa-sm ">
            <div class="row q-px-lg">
              <div
                class="col self-end q-px-lg"
                v-for="(score, index2) in item.score"
                :key="index2"
              >
                <div
                  class="bg5 relative-position"
                  style="height:130px;"
                  align="center"
                >
                  <span
                    class="absolute-center text-white "
                    style="font-size:24px;"
                    >{{ score }}</span
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
    <step-footer></step-footer>
  </q-page>
</template>

<script>
import stepFooter from "../components/footer";
export default {
  components: {
    stepFooter
  },
  data() {
    return {
      dataList: [
        {
          title: `1. การนำองค์การ `,
          fontawesome: "fas fa-street-view",
          score: [0, 0, 0, 0]
        },
        {
          title: `2. การวางแผน เชิงยุทธศาสตร์`,
          fontawesome: "fas fa-map-signs",
          score: [200, 100, 400, 200]
        },
        {
          title: `3. การให้ความสำคัญ กับผู้รับบริการและ ผู้มีส่วนได้ส่วนเสีย`,
          fontawesome: "fas fa-users",
          score: [200, 100, 400, 200]
        },
        {
          title: `4. การวัด การวิเคราะห์ และการจัดการความรู้`,
          fontawesome: "fas fa-chart-line",
          score: [200, 100, 400, 200]
        },
        {
          title: `5. การมุ่งเน้นบุคลากร`,
          fontawesome: "fas fa-users-cog",
          score: [200, 100, 400, 200]
        },
        {
          title: `6. การมุ่งเน้นระบบ ปฏิบัติการ`,
          fontawesome: "fas fa-project-diagram",
          score: [200, 100, 400, 200]
        },
        {
          title: `7. ผลลัพธ์การดำเนินการ`,
          fontawesome: "fas fa-trophy",
          score: [200, 100, 400, 200]
        }
      ]
    };
  },
  methods: {
    printBtn() {
      this.$router.push("/printAssessment");
    },
    render() {
      Highcharts.chart("container", {
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
          min: 100,
          gridLineColor: "#000000"
        },

        tooltip: {
          shared: true,
          pointFormat: ""
        },

        series: [
          {
            name: "Allocated Budget",
            data: [1000, 200, 300, 400, 500, 600, 700],
            pointPlacement: "on",
            showInLegend: false,
            type: "area",
            color: "#79BDA3",
            borderColor: "#009688"
          }
        ],
        credits: {
          enabled: false
        }
      });
    }
  },
  mounted() {
    this.render();
  }
};
</script>

<style lang="scss" scoped></style>
