<template>
  <div>
    <div class="float-right q-pa-md" v-if="$route.name != 'printAll'">
      <q-btn
        class="printBtn"
        icon="fas fa-print"
        color="pink-4"
        round
        @click="printBtn()"
      ></q-btn>
    </div>

    <!-- Page A4 -->
    <div class="page-A4 relative-position q-pa-md">
      <div
        v-if="$route.name != 'printAll'"
        class="absolute-right text-h7 printDate"
        style="right:15px;top:10px;"
      >
        {{ printDate }}
      </div>

      <div align="center" class="q-pa-md">
        <span class="text-h6">ตัวชี้วัดหมวด 7</span>
      </div>


      <div
        class="q-mt-md"
        :class="index == 0 ? 'q-mt-lg' : 'q-mt-md'"
        v-for="(item, index) in data"
        :key="index"
      >
        <div class="q-pa-xs">
          <div class="">
            <span style="font-size:16px;"
              ><b>{{ item.title }}</b></span
            >
          </div>
          <div v-if="index == 0">
            <span>
              เป็นการวัดความสำเร็จของการดำเนินการบรรลุเป้าหมามตามแผนปฏิบัติราชการของส่วนราชการ
            </span>
            <br />
            <span
              >ซึ่งตัวชี้วัดดังกล่าวต้องมีความสัมพันธ์กับพันธกิจหลักและยุธทศาสตร์ของส่วนราชการ</span
            >
            <br />
            <span
              >รวมทั้งตัววัดที่ดำเนินการตามนโยบายและแผนของรัฐบาลที่กำหนดไว้ประจำปี
              และตัววัดร่วม ตัววัดด้านการดำเนินการตามกฏหมาย
              และการบรรลุตามแผนยุทธศาสตร์ของส่วนราชการ</span
            >
          </div>
          <div v-if="index == 1">
            <span>
              เป็นการวัดผลด้านการให้ความสำคัญกับผู้รับการบริการ
              ผู้มีส่วนได้ส่วนเสีย และประชาชนจากการบริการส่วนราชการในด้านต่างๆ
              ได้แก่ ความพึงพอใจ ความไม่พึงพอใจ ความผูกพัน
              การเติบโตของโครงการที่มุ่งเน้นประโยชน์แก้กลุ่มผู้รับบริการ
              การสร้างสัมพันธ์และความร่วมมือ
            </span>
          </div>

          <div v-if="index == 2">
            <span>
              การวัดความสำเร็จของการดำเนินการด้านการบรหารบุคคล การพัฒนา
              และการสร้างการมีส่วนร่วมของบุคลากรของส่วนราชการ
              เพื่อให้มีสมรรถนะสูง
            </span>
          </div>

          <div v-if="index == 3 || index == 4">
            <span>
              เป็นการวัดความสำเร็จของการดำเนินการบรรลุเป้าหมายด้านการเป็นแบบอย่างที่ดีหรือการเป็นต้นแบบของผู้บริหารและบุคลากรของส่วนราชการ
            </span>
          </div>

          <div v-if="index == 5">
            <span>
              เป็นการวัดความสำเร็จของการดำเนินการบรรลุเป้าหมายด้านการบริหารจัดการเพื่อการลดต้นทุน
              การสร้างนวัตกรรม และการจัดการกระบวนการ
            </span>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th>
                <div class="q-pt-md"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item2, index2) in item.question" :key="index2">
              <td>
                <div class="q-pb-lg ">
                  <div class="q-pa-xs border-top-lr">
                    <span
                      style="font-size:16px;"
                      v-html="item2.headerTextUpper"
                    ></span>
                    <br />
                    <span
                      class="block q-mt-xs"
                      v-html="item2.headerTextLower"
                    ></span>
                  </div>

                  <div
                    class="row border-top-lr"
                    style="background-color:#e5e5e5;"
                  >
                    <div class="col border-right" align="center">
                      <div class="q-pa-xs">
                        <span>ตัวชี้วัด</span>
                      </div>
                    </div>
                    <div
                      class="col-1 border-right"
                      style="width:100px;"
                      align="center"
                    >
                      <div class="q-pa-xs">
                        <span>ค่าเป้าหมาย <br />ปีล่าสุด</span>
                      </div>
                    </div>
                    <div class="col row border-right">
                      <div class="col-12 border-bottom" align="center">
                        <div class="q-pa-xs">
                          <span>
                            ผลการดำเนินงาน
                          </span>
                        </div>
                      </div>
                      <div class="col border-right" align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${$q.sessionStorage.getItem("y") + 541}`
                          }}</span>
                        </div>
                      </div>
                      <div class="col border-right" align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${$q.sessionStorage.getItem("y") + 542}`
                          }}</span>
                        </div>
                      </div>
                      <div class="col" align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${$q.sessionStorage.getItem("y") + 543}`
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-1 border-right"
                      style="width:90px;"
                      align="center"
                    >
                      <span
                        >%
                        <br />
                        ความสำเร็จ</span
                      >
                    </div>
                    <div class="col-1 " style="width:50px;" align="center">
                      <span>คะแนน</span>
                    </div>
                  </div>

                  <div
                    class="row border-top-lr "
                    style="border-bottom:1px solid"
                   
                  >
                    <div class="col border-right">
                      <div class="q-pa-xs">
                        <span v-html="replaceN(item2.indicators)"></span>
                      </div>
                    </div>
                    <div
                      class="col-1 border-right "
                      style="width:100px;"
                      align="center"
                    >
                      <div class="q-pa-xs">
                        <span>
                          {{
                            `${item2.goalCurrentYear || ""} ${item2
                              .unit || ""}`
                          }}
                        </span>
                      </div>
                    </div>
                    <div class="col row border-right">
                      <div class="col border-right" align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${item2.result[
                              $q.sessionStorage.getItem("y") + 541
                            ] || ""}`
                          }}</span>
                        </div>
                      </div>
                      <div class="col border-right" align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${item2.result[
                              $q.sessionStorage.getItem("y") + 542
                            ] || ""}`
                          }}</span>
                        </div>
                      </div>
                      <div class="col " align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${item2.result[
                              $q.sessionStorage.getItem("y") + 543
                            ] || ""}`
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-1 border-right"
                      style="width:90px;"
                      align="center"
                    >
                      <div class="q-pa-xs"></div>
                      <!-- <span>{{ `${item2.successRate || ""}` }}</span> -->
                    </div>
                    <div class="col-1 " style="width:50px;" align="center">
                      <div class="q-pa-xs"></div>
                      <!-- <span>{{ `${item2.score || ""}` }}</span> -->
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      printDate: "",
      data: [
        {
          title: "7.1 ด้านพันธกิจ",
          no: 1,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          a_avgScore: -1,
          question: [
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 1,
              headerTextUpper:
                "RM 1 ร้อยละความสำเร็จของร้อยละเฉลี่ยถ่วงน้ำหนักในการบรรลุเป้าหมายตามแผนปฏิบัติราชการขององค์กร",
              numberOfIndicators: 1,
              indicators:
                "ร้อยละความสำเร็จของร้อยละเฉลี่ยถ่วงน้ำหนักในการบรรลุเป้าหมายตามแผนปฏิบัติราชการขององค์กร",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "%",
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null,
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 2,
              headerTextUpper:
                "RM 2 ร้อยละความสำเร็จของร้อยละเฉลี่ยถ่วงน้ำหนักในการบรรลุเป้าหมายตัวชี้วัดคำรับรองการปฏิบัติราชการมิติด้านประสิทธิผลการปฏิบัติราชการ",

              numberOfIndicators: 1,
              indicators:
                "ร้อยละความสำเร็จของร้อยละเฉลี่ยถ่วงน้ำหนักในการบรรลุเป้าหมายตามแผนปฏิบัติราชการขององค์กร",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "%",
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null,
                },
              ],
              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
          ],
        },
        {
          title: "7.2 ด้านผู้รับบริการและผู้มีส่วนได้ส่วนเสีย",
          no: 2,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          a_avgScore: -1,
          question: [
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 1,
              headerTextUpper:
                "RM 3 ร้อยละความสำเร็จของร้อยละเฉลี่ยถ่วงน้ำหนักในการบรรลุเป้าหมายตามแผนปฏิบัติราชการขององค์กร",
              numberOfIndicators: 1,
              indicators:
                "ร้อยละความพึงพอใจของผู้รับบริการและผู้มีส่วนได้ส่วนเสียต่อการพัฒนางานบริการของหน่วยงาน",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "%",
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null,
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
          ],
        },
        {
          title: "7.3 ด้านการพัฒนาบุคลากร",
          no: 3,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          a_avgScore: -1,
          question: [
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 1,
              headerTextUpper:
                "RM 4 ร้อยละความสำเร็จของการดำเนินการตามแผนกลยุทธ์การบริหารทรัพยากรบุคคล",
              numberOfIndicators: 1,
              indicators:
                "ร้อยละความสำเร็จของการดำเนินการตามแผนกลยุทธ์การบริหารทรัพยากรบุคคล",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 90,
              unit: "%",
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null,
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 2,
              headerTextUpper:
                "RM 5 ร้อยละความสำเร็จของการดำเนินการตามแผนสร้างความผูกพันของบุคลากร",
              numberOfIndicators: 1,
              indicators:
                "ร้อยละความสำเร็จของร้อยละเฉลี่ยถ่วงน้ำหนักในการบรรลุเป้าหมายตามแผนปฏิบัติราชการขององค์กร",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 90,
              unit: "%",
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null,
                },
              ],
              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
          ],
        },
        {
          title: "7.4 ด้านการเป็นต้นแบบ",
          no: 4,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          a_avgScore: -1,
          question: [
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 1,
              headerTextUpper:
                "RM 6 ระดับคุณธรรมและความโปร่งใสในการดำเนินงานของหน่วยงาน (ITA)",
              numberOfIndicators: 1,
              indicators:
                "ใช้ผลจากการประเมินระดับคุณธรรมและความโปร่งใสในการดำเนินงาน<br>ของหน่วยงาน (ITA)",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 60,
              unit: "%",
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null,
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 2,
              headerTextUpper:
                "RM 7 ร้อยละความพึงพอใจของบุคลากรที่มีต่อการนำองค์กรของผู้บริหาร",
              numberOfIndicators: 1,
              indicators:
                "หน่วยงานประเมินความพึงพอใจต่อการนำองค์กรของผู้บริหาร โดยใช้แบบสอบถามกลางจาก กพร. ",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "%",
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null,
                },
              ],
              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
          ],
        },
        {
          title: "7.5 ด้านผลกระทบต่อเศรษฐกิจ สังคม สาธารณสุข สิ่งแวดล้อม",
          no: 5,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          a_avgScore: -1,
          question: [
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 1,
              headerTextUpper: "RM 8 ร้อยละการเบิกจ่ายของงบประมาณรายจ่ายรวม ",
              numberOfIndicators: 1,
              indicators: "ร้อยละของอัตราการเบิกจ่ายเงินงบประมาณรายจ่ายรวม ",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 96,
              unit: "%",
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null,
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
          ],
        },
        {
          title: "7.6 ด้านการลดต้นทุน สร้างนวัตกรรม และการจัดการกระบวนการ",
          no: 6,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          a_avgScore: -1,
          question: [
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 1,
              headerTextUpper:
                "RM 9 ร้อยละความสำเร็จของร้อยละเฉลี่ยถ่วงน้ำหนักในการบรรลุเป้าหมายตัวชี้วัดของกระบวนการที่สำคัญ",
              numberOfIndicators: 1,
              indicators: "ตัวชี้วัดการปรับปรุงกระบวนการ ",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 80,
              unit: "%",
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null,
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
            {
              editable: false,
              avgScore: -1,
              a_avgScore: -1,
              subNo: 2,
              headerTextUpper:
                "RM 10 ร้อยละความสำเร็จเฉลี่ยถ่วงน้ำหนักความสำเร็จจากผลสัมฤทธิ์ของการดำเนินการตามแผนการจัดการความรู้/แผนพัฒนานวัตกรรมของหน่วยงาน",
              numberOfIndicators: 1,
              indicators:
                "ตัวชี้วัดคำรับรองฯที่ 4.1 ระดับความสำเร็จของนวัตกรรมที่หน่วยงานสร้างใหม่แล้วได้นำไปใช้ประโยชน์ ",
              a_successpercent: "",
              a_suggestion: "",
              a_assesment: -1,
              a_score: -1,
              goalCurrentYear: 80,
              unit: "%",
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null,
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี",
            },
          ],
        },
      ]
    };
  },
  methods: {
    async getCategory7() {
      const url = this.apiPath + "user/getCategory7.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y") + 543
      };
      let data = await Axios.post(url, postData);
      let getData = data.data;

      getData = getData.sort((a, b) => Number(a.number) - Number(b.number));

      for (let i = 0; i < 6; i++) {
        if (getData[i]) {
          let index = Number(getData[i].q_number) - 1;
          let json = JSON.parse(getData[i].json);

          this.data[index].avgScore = getData[i].avg_score;
          this.data[index].question = json;
        }
      }

        // RM2
      this.data[0].question[1].indicators =
        "ร้อยละเฉลี่ยความสำเร็จถ่วงน้ำหนักในการบรรลุเป้าหมายตัวชี้วัดคำรับรองการปฏิบัติราชการของหน่วยงานประจำปีงบประมาณ";
      this.data[1].question[0].headerTextUpper =
        "RM 3 ร้อยละความพึงพอใจของผู้รับบริการ และผู้มีส่วนได้ส่วนเสีย";
      this.data[2].question[1].indicators =
        "ร้อยละความสำเร็จของการดำเนินการตามแผนสร้างความผูกพันของบุคลากร";

      this.data[4].question[0].goalCurrentYear = 85;

      
    }
  },
  async mounted() {
    this.getCategory7();

    let printDate = await this.getDate();
    printDate = printDate[0];
    printDate = `${printDate.date} ${this.showMonth(printDate.month)} ${
      printDate.year
    }`;
    this.printDate = printDate;
  }
};
</script>

<style lang="scss" scoped>
.page-A4 {
  width: 210mm;
  min-height: 297mm;
  max-height: fit-content;
  margin: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table .td {
  padding: 0px;
  border: 1px solid;
}

.space-top {
  padding-top: 0px;
}

.border-top-lr {
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
}

.border-bottom {
  border-bottom: 1px solid;
}

.border-right {
  border-right: 1px solid;
}

@media print {
  .printBtn {
    display: none;
  }

  .space-top {
    padding-top: 20px;
  }
}
</style>
