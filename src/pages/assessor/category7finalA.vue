<template>
  <q-page
    class="q-pa-md"
    style=" max-width: 1280px;width: 100%;
  margin:auto"
  >
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px">
      <div>
        <span class="font-24">หมวด 7 ผลลัพธ์การดำเนินการ</span>
      </div>
    </div>

    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <q-list bordered v-if="isShowPage">
        <q-expansion-item
          group="dataFormStep8"
          header-class="bg-white "
          dense-toggle
          dense
          expand-icon-class="text-grey-10"
          :default-opened="index == 0"
          header-style="height:70px;border:1px solid"
        >
          <template v-slot:header>
            <div class="row full-width q-pa-sm">
              <div class="col self-center">
                <span>{{ item.title }}</span>
              </div>
              <q-space></q-space>
              <div class="col-3 self-center q-px-xl" style="width: 250px">
                <div style="width: 180px; border: 1px solid" align="center">
                  <span class="font-18" v-if="item.a_avgScore == -1"
                    >ยังไม่ทำการประเมิน</span
                  >
                  <span v-else>
                    <span class="text-teal">
                      <span v-if="item.avgScore == -1">0</span>
                      <span v-else>
                        {{ parseInt(item.avgScore) }}
                      </span>
                    </span>
                    /
                    <span class="text-pink-4">
                      <span v-if="item.a_avgScore != -1">{{
                        Math.round(item.a_avgScore) || 0
                      }}</span>
                      <span v-else>-</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </template>

          <div class v-for="(sub, indexSub) in item.question">
            <q-separator class="bg-grey-7" style="height: 1px"></q-separator>
            <div
              class="bg-4 row q-py-sm"
              style="border-right:1px solid;border-left:1px solid"
            >
              <div class="col" style="padding-left: 37px">
                <span v-html="sub.headerTextUpper"></span>
              </div>
              <q-space></q-space>
              <div class="col-1 q-pr-lg self-center" align="right"></div>
            </div>
            <!-- ROW HEADER -->
            <div>
              <div class="row">
                <div
                  class="q-pa-md border col-5 relative-position row items-center"
                  align="center"
                  style="width:300px;"
                >
                  <div class="col-10" align="center">ตัวชี้วัด</div>
                </div>
                <div class="q-pa-md border col" align="center">ผลดำเนินการ</div>
                <div
                  class="q-pa-md border col-2"
                  style="width:350px;"
                  align="center"
                >
                  การประเมินผล
                </div>

                <div class="q-pa-md border" style="width: 120px" align="center">
                  คะแนน
                </div>
              </div>
              <div class="row">
                <div
                  class="q-pa-sm border col-5 row q-py-md"
                  align="center"
                  style="width:300px;"
                >
                  <div align="center" class="q-pa-sm col-12">
                    <div
                      align="left"
                      v-html="data[index].question[indexSub].indicators"
                    ></div>
                  </div>
                  <div class="col-12 self-end">
                    <div class="q-px-sm" v-if="item.question[indexSub].extend">
                      <div class="q-px-sm">
                        <div
                          style="border:1px solid"
                          class="q-pa-sm q-px-md row"
                        >
                          <span>% ความสำเร็จ</span>
                          <q-space></q-space>
                          <span class="text-teal">
                            {{ parseInt(item.question[indexSub].successRate) }}
                          </span>
                        </div>
                      </div>
                      <q-separator class="bg-black q-my-sm"></q-separator>
                      <div class="row">
                        <div class="col" align="left">การคำนวนคะแนน</div>
                        <div
                          class="self-center col center"
                          style="font-size:16px"
                        >
                          {{ item.question[indexSub].scoreStandard }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ผลการดำเนินการ -->
                <div class="q-pa-md border col row items-center" align="center">
                  <div
                    style="width:90%;margin:auto"
                    :id="`container${'' + item.no + sub.subNo}`"
                  ></div>
                </div>
                <div
                  class="q-pa-md border col-2"
                  style="width:350px;"
                  align="center"
                >
                  <div>
                    <q-btn
                      class="full-width"
                      :label="
                        item.question[indexSub].a_assesment == -1
                          ? 'ยังไม่ประเมิน'
                          : item.question[indexSub].a_assesment == 0
                          ? 'ไม่เหมาะสม'
                          : 'เหมาะสม'
                      "
                      @click="assesment(index, indexSub)"
                      :class="
                        item.question[indexSub].a_assesment == -1
                          ? 'ยังไม่ประเมิน'
                          : item.question[indexSub].a_assesment == 0
                          ? 'text-red'
                          : 'text-teal'
                      "
                      dense
                      outline
                    ></q-btn>
                  </div>
                  <div class="q-mt-md">
                    <q-input
                      type="textarea"
                      input-style="height:345px;"
                      outlined
                      v-model="item.question[indexSub].a_suggestion"
                    />
                  </div>
                </div>
                <div class="q-pa-md border" style="width: 120px" align="center">
                  <span v-if="item.question[indexSub].a_assesment == -1">
                  </span>
                  <span v-else-if="item.question[indexSub].a_assesment == 0"
                    >0</span
                  >

                  <span v-else>
                    {{ Math.round(item.question[indexSub].a_score) }}
                   
                  </span>

                  <span v-else>0</span>
                </div>
              </div>
            </div>
          </div>

          <div class="q-py-md" align="center" style="border:1px solid">
            <q-btn
              class="bg-teal text-white font-18"
              label="บันทึกข้อมูล"
              style="width: 220px; border-radius: 0px"
              push
              @click="saveCategory7(item.no)"
            ></q-btn>
          </div>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      isShowPage: false,

      dialogMessage: "",

      currentYear: this.$q.sessionStorage.getItem("y") + 543,
      score: "ยิ่งมากยิ่งดี",
      scoreStandardOptions: ["ยิ่งมากยิ่งดี", "ยิ่งน้อยยิ่งดี"],
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
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
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
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
            }
          ]
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
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
            }
          ]
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
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
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
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
            }
          ]
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
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
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
              result: {
                [this.$q.sessionStorage.getItem("y") + 543]: null,
                [this.$q.sessionStorage.getItem("y") + 542]: null,
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
            }
          ]
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
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
            }
          ]
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
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
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
                [this.$q.sessionStorage.getItem("y") + 541]: null
              },

              successRate: null,
              score: null,
              scoreStandard: "ยิ่งมากยิ่งดี"
            }
          ]
        }
      ]
    };
  },
  methods: {
    assesment(no, subNo) {
      if (this.data[no].question[subNo].score != -1) {
        let current = this.data[no].question[subNo].a_assesment;
        if (current == -1) {
          // เหมาะสม
          this.data[no].question[subNo].a_assesment = 1;
        } else if (current == 1) {
          //  0=ไม่เหมาะสม
          this.data[no].question[subNo].a_assesment = 0;
        } else {
          // ยังไม่ประเมิน
          this.data[no].question[subNo].a_assesment = -1;
        }

        let newCurrent = this.data[no].question[subNo].a_assesment;

        if (newCurrent == 0) {
          // ถ้าไม่เหมาะสมให้คะแนนเป็น 0
          this.data[no].question[subNo].a_score = 0;
          this.data[no].question[subNo].a_successpercent = 0;
        } else if (newCurrent == 1) {
          // เหมาะสม ให้ค่า %ความสำเร็จที่ประเมินเท่ากับค่าที่ยูเซอร์ประเมินมา

          let newScore = this.data[no].question[subNo].score;
          this.data[no].question[subNo].a_score = this.data[no].question[
            subNo
          ].score;
        } else {
          this.data[no].question[subNo].a_successpercent = null;
          this.data[no].question[subNo].a_score = -1;
        }

        // this.data[no].question[subNo].a_assesment.push("");
        // this.data[no].question[subNo].a_assesment.pop();
      } else {
        this.$q.notify({
          message: "ไม่สามารถประเมินได้เนื่องจากไม่มีข้อมูลตัวชี้วัด",
          color: "red"
        });
      }
    },
    showDialog(index) {
      console.log(index);
      this.dialogMessage = this.dialogList[index];
      this.helpDialog = true;
    },
    calculateSuccessRate(no1, no2, type) {
      // การคำนวณคะแนนยิ่งมากยิ่งดี
      // console.log(type);
      let result = 0;
      if (type == "ยิ่งมากยิ่งดี") {
        result = (no1 / no2) * 100;
      } else {
        let cal = 100 - (no1 / no2) * 100;
        result = 100 + cal;
      }
      if (no1 && no2) {
        return result ? result.toFixed(0) : null;
      } else {
        return 0;
      }
    },

    calAvgScore(q_number) {
      let index = q_number - 1;

      let mapScore = this.data[index].question.map(x => x.a_score);
      mapScore = mapScore.filter(x => x > -1);

      let avgScore =
        mapScore.reduce((a, b) => a + b, 0) / this.data[index].question.length;
      avgScore = parseInt(avgScore);

      // เช็คข้อที่จำเป็น
      if (q_number == 1 || q_number == 3 || q_number == 4 || q_number == 6) {
        // ข้อ 1 && 2 จำเป็น
        if (
          this.data[index].question[0].a_score != -1 &&
          this.data[index].question[1].a_score != -1
        ) {
          this.data[index].a_avgScore = avgScore;
        } else {
          this.data[index].a_avgScore = -1;
        }
      } else if (q_number == 2 || q_number == 5) {
        if (this.data[index].question[0].a_score != -1) {
          this.data[index].a_avgScore = avgScore;
        } else {
          this.data[index].a_avgScore = -1;
        }
      }
    },

    calculateScore(score) {
      // การคำนวณคะแนนยิ่งน้อยยิ่งดี
      let result = 0;
      if (score) {
        score = score.replace("%", "");
        score = Number(score);

        if (score < 100) {
          result = (score / 100) * 300;
        } else if (score <= 101) {
          result = 300;
        } else if (score <= 105) {
          result = 400;
        } else if (score > 105) {
          result = 500;
        }
        return result != 0 ? parseInt(result) : 0;
      } else {
        return -1;
      }
    },

    async saveCategory7(q_number) {
      this.loadingShow();
      this.calAvgScore(q_number);
      let index = q_number - 1;
      const url = this.apiPath + "user/addUpdateCategory7.php";

      let totala_avg_score = this.data
        .filter(x => x.a_avgScore != "-1")
        .map(x => Number(x.a_avgScore))
        .reduce((a, b) => Number(a) + Number(b), 0);

      totala_avg_score = parseInt(totala_avg_score / 6);

      let postData = {
        user_id: this.$route.params.userId,
        q_number: q_number,
        status: this.data[index].status,
        json: JSON.stringify(this.data[index].question),
        year: this.currentYear,
        avg_score: Number(this.data[index].avgScore),
        a_avg_score: Number(this.data[index].a_avgScore),
        category: "a_category7_score",
        totala_avg_score: totala_avg_score
      };

      let data = await Axios.post(url, postData);
      this.checkStatus();
      setTimeout(() => {
        this.loadingHide();
      }, 900);
    },
    async getCategory7() {
      const url = this.apiPath + "user/getCategory7.php";
      let postData = {
        user_id: this.$route.params.userId,
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
          this.data[index].a_avgScore = getData[i].a_avg_score;
        }
      }

      this.isShowPage = true;
      this.checkStatus();

      setTimeout(() => {
        this.randerGraph();
      }, 500);
    },
    randerGraph() {
      let this_ = this;
      let getYear = [
        this.$q.sessionStorage.getItem("y") + 541,
        this.$q.sessionStorage.getItem("y") + 542,
        this.$q.sessionStorage.getItem("y") + 543
      ];

      for (let i = 0; i < this.data.length; i++) {
        for (let ii = 0; ii < this.data[i].question.length; ii++) {
          //   for (
          //     let iii = 0;
          //     iii < this.data[i].question[ii].numberOfIndicators;
          //     iii++
          //   ) {
          Highcharts.chart({
            chart: {
              // height: (3 / 4 * 100) + '%',
              height: 350,
              renderTo:
                "container" + this.data[i].no + this.data[i].question[ii].subNo
            },
            title: {
              text: ""
            },

            yAxis: {
              title: {
                text: ""
              }
            },

            xAxis: {
              categories: getYear
            },

            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            },

            plotOptions: {
              line: {
                dataLabels: {
                  enabled: true,
                  formatter: function() {
                    if (this.series.name == "เป้าหมาย") {
                      if (
                        this.x ==
                        this_.$q.sessionStorage.getItem("y") + 543
                      ) {
                        return this.y;
                      }
                    } else {
                      return this.y;
                    }
                  }
                },
                enableMouseTracking: false
              },
              series: {
                label: {}
              }
            },

            credits: {
              enabled: false
            },

            series: [
              {
                name: "เป้าหมาย",
                data: [
                  this.data[i].question[ii].goalCurrentYear,
                  this.data[i].question[ii].goalCurrentYear,
                  this.data[i].question[ii].goalCurrentYear
                ],
                color: "#E84C93"
              },
              {
                name: "ค่าที่ทำได้",
                data: [
                  this.data[i].question[ii].result[
                    this_.$q.sessionStorage.getItem("y") + 541
                  ],
                  this.data[i].question[ii].result[
                    this_.$q.sessionStorage.getItem("y") + 542
                  ],
                  this.data[i].question[ii].result[
                    this_.$q.sessionStorage.getItem("y") + 543
                  ]
                ],
                color: "#13579A"
              }
            ]
          });
        }
        // }
      }
    },
    checkStatus() {
      let mapData = this.data.map(x => x.a_avgScore);
      if (mapData.every(x => x == "-1")) {
        // ยังไม่เคยประเมินสักข้อ
        this.$emit("statusForm", 0);
      } else if (mapData.every(x => x != "-1")) {
        // ประเมินครบทุกข้อ
        this.$emit("statusForm", 1);
      } else {
        // ประเมินไปบางข้อ
        this.$emit("statusForm", 2);
      }
    }
  },
  created() {
    this.getCategory7();
  }
};
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #5a5959;
}

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

.break {
  break-after: page;
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
.a4-portrait {
  width: 210mm;
  height: 297mm;
  margin: auto;
  background-color: white;
  padding: 1cm 2cm;
}

@media print {
  @page {
    size: portrait;
  }
  .printBtn {
    visibility: hidden;
  }
  .printDate {
    top: -20px;
    right: 80px;
  }
  .a4-portrait {
    width: 210mm;
    height: 297mm;
    -webkit-print-color-adjust: exact;
  }
  .a4-landscape {
    width: 297mm;
    -webkit-print-color-adjust: exact;
  }

  .a4-landscape-flip {
    width: 210mm;
    height: 210mm;
    background-color: white;
    transform: rotate(270deg) translate(-210mm, 0);
    transform-origin: 0 0;
    padding: 0cm 1cm;
    position: relative;
    left: -70px;
    -webkit-print-color-adjust: exact;
  }

  .bg {
    background-color: white;
    -webkit-print-color-adjust: exact;
  }
  /* ... the rest of the rules ... */
}
</style>
