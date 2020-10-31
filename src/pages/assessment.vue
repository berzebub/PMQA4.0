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
        <div class="absolute q-pa-sm" style="right:0">
          <q-btn round="" push="" class="bg-teal">
            <q-icon class="text-white" size="18px" name="fas fa-print"></q-icon>
          </q-btn>
        </div>
      </div>

      <q-separator class="bg-black"></q-separator>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    test() {
      Highcharts.chart("container", {
        chart: {
          polar: true,
          width: "400"
        },

        title: {
          text: "",
          x: -80
        },

        // pane: {
        //   size: "85%"
        // },

        xAxis: {
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
          lineWidth: 0
        },

        yAxis: {
          gridLineInterpolation: "polygon",
          lineWidth: 0,
          min: 0,
          color: "#000"
        },

        tooltip: {
          shared: true,
          pointFormat: ""
        },

        // legend: {
        //   align: "right",
        //   verticalAlign: "middle",
        //   layout: "vertical"
        // },

        series: [
          {
            name: "Allocated Budget",
            data: [43000, 19000, 60000, 35000, 17000, 10000, 10000],
            pointPlacement: "on",
            showInLegend: false,
            type: "area",
            color: "#009688"
          }
        ],
        credits: {
          enabled: false
        }
      });
    }
  },
  mounted() {
    this.test();
  }
};
</script>

<style lang="scss" scoped></style>
