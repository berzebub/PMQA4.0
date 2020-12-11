<template>
  <div class="bg-print">
    <div class="absolute q-pa-md" id="print" style="right:0;top:0;">
      <q-btn round="" size="lg" class="bg5 text-white" push="" @click="printBtn()">
        <q-icon name="fas fa-print" size="md"></q-icon
      ></q-btn>
    </div>
    <div class="pageA4">
      <table>
        <thead>
          <tr>
            <td>
              <div class="relative-position">
                <div class="row bg1 container-header">
                  <div class="col self-center" align="right"></div>
                </div>
                <div class="row bg2 container-header relative-position">
                  <div
                    class="col-1 self-center q-px-md "
                    align="right"
                    style="width: 230px;"
                  ></div>
                  <div class="col  self-center q-px-md" align="center">
                    <span class="font-16">
                      {{ $q.sessionStorage.getItem("office") }}
                    </span>
                  </div>
                  <div
                    class="col-1  self-center q-px-md"
                    align="right"
                    style="width: 150px;"
                  >
                    <span class="font-16">
                      ปี {{$q.sessionStorage.getItem("y")  + 543}}
                    </span>
                  </div>
                </div>
                <div class="absolute-bottom" style="left: 20px; bottom: -7px;">
                  <q-img
                    src="../../public/images/logo.png"
                    width="200px"
                  ></q-img>
                </div>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in dataList" :key="index">
            <td>
              <div class="row q-mt-md  items-end" style="height:100px">
                <div class="col-3 self-center q-pa-sm" align="center">
                 
                  <span
                    class=" block "
                    align="left"
                    style="width:330px;font-size:14px;"
                    v-html="printTitle[index]"
                    ></span
                  >
                </div>
                <div class="col q-pb-lg  self-end ">
                  <div class="row">
                    <div
                      class="col self-end"
                      :class="index + 1 == 7 ? 'q-px-sm' : ' q-px-md'"
                      v-for="(score, index2) in item.score"
                      :key="index2"
                    >
                      <div
                        class="bg5 relative-position"
                        :style="`height:${(85 / 500) * score || 2}px`"
                        align="center"
                      >
                        <span
                          class="absolute-center text-white "
                          style="font-size:16px;"
                          >{{ score || "" }}</span
                        >
                        <span
                          class="absolute-bottom"
                          style="bottom:-35px;font-size:16px;"
                          >{{ `${index + 1}.${index2 + 1}` }}</span
                        >
                      </div>

                      <div class="break"></div>
                    </div>
                  </div>
                  <div style="border-bottom:2px solid"></div>
                </div>
                <div
                  class="col-1 self-center "
                  style="width:100px;"
                  align="center"
                >
                  <span>
                    <span class="block" style="font-size:24px">
                      <span v-if="index != 6">   {{
                      parseInt(item.score.reduce((a, b) => Number(a) + Number(b), 0) / 4)
                    }}</span>
                      <span v-else>   {{
                      parseInt(item.score.reduce((a, b) => Number(a) + Number(b), 0) / 6)
                    }}</span>
                   
                    </span>
                    <span class="block" style="margin-top:-10px;font-size:12px"
                      >คะแนน</span
                    >
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="break"></div>

    <div class="pageA4 ">
      <div class="relative-position">
        <div class="row bg1 container-header">
          <div class="col  self-center" align="right"></div>
        </div>
        <div class="row bg2 container-header relative-position">
          <div
            class="col-1 self-center q-px-md"
            align="right"
            style="width: 230px;"
          ></div>
          <div class="col  self-center q-px-md" align="center">
            <span class="font-16">
              {{ $q.sessionStorage.getItem("office") }}
            </span>
          </div>
          <div
            class="col-1  self-center q-px-md"
            align="right"
            style="width: 150px;"
          >
            <span class="font-16">
              ปี 2563
            </span>
          </div>
        </div>
        <div class="absolute-bottom" style="left: 20px; bottom: -7px;">
          <q-img src="../../public/images/logo.png" width="200px"></q-img>
        </div>
      </div>
      <div class="q-my-xl row q-px-xl " align="center" style="font-size:24px;">
        <div align="center">ผลดำเนินการ PMQA4.0 ในภาพรวม</div>
        <q-space></q-space>
        <div align="center">{{ totalAvgScore }} คะแนน</div>
      </div>
      <div align="center">
        <div id="container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      printTitle : [`1. การนำองค์กร`,`2. การวางแผน เชิงยุทธศาสตร์`,`3. การให้ความสำคัญกับ<br>ผู้รับบริการและ
ผู้มีส่วนได้ส่วนเสีย`,`4. การวัด การวิเคราะห์ และ<br>การจัดการความรู้`,`5. การมุ่งเน้นบุคลากร`,`6. การมุ่งเน้นระบบ ปฏิบัติการ`,'7. ผลลัพธ์การดำเนินการ'],

      dataList: this.$q.sessionStorage.getItem("printData").data,
      totalAvgScore: this.$q.sessionStorage.getItem("printData").totalAvgScore
    };
  },
  methods: {
    render() {
      Highcharts.chart("container", {
        chart: {
          polar: true,
          height: "500",
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
          max: 500,
          gridLineColor: "#000000",
        },

        tooltip: {
          shared: true,
          pointFormat: ""
        },

        series: [
          {
            name: "",
            data: this.$q.sessionStorage.getItem("printData").avgScore,
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
    },
    printBtn() {
      window.print();
    }
  },
  mounted() {
    this.render();
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

.bg-print {
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background-color: rgba(5, 5, 5, 0.5);
  padding: 15px;
}

.pageA4 {
  position: relative;
  width: 210mm;
  min-height: 297mm;
  height: fit-content;
  background-color: #fff;
  margin: 15px auto;
  box-shadow: 5px 0px 10px 2px #555;
}

.container-header {
  height: 40px;
}

.break {
  break-after: page;
}

@media print {
  .bg-print {
    height: fit-content;
    background-color: #fff;
    padding: 0px;
  }

  #print {
    display: none;
  }

  .pageA4 {
    width: 210mm;
    height: fit-content;
    background-color: #fff;
    margin: 0px auto;
    box-shadow: 0px 0px 0px 0px #555;
  }

  @page {
    size: A4;
    margin: 0mm;
    width: 210mm;
    height: 297mm;
  }
}
</style>
