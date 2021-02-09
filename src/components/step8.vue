<template>
  <div>
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px">
      <div>
        <span class="font-24">หมวด 7 ผลลัพธ์การดำเนินการ</span>
      </div>
    </div>

    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <q-list bordered>
        <q-expansion-item
          group="dataFormStep7"
          header-class="bg-white "
          dense-toggle
          dense
          expand-icon-class="text-grey-10"
          header-style="height:70px;"
        >
          <!-- :default-opened="index == 0" -->

          <template v-slot:header>
            <div class="row full-width q-pa-sm">
              <div class="col self-center">
                <span>{{ item.title }}</span>
              </div>
              <q-space></q-space>
              <div class="col-3 self-center q-px-xl" style="width: 250px">
                <div style="width: 180px; border: 1px solid" align="center">
                  <span class="font-18" v-if="item.avgScore == -1">ยังไม่ทำการประเมิน</span>
                  <span v-else>{{ parseInt(item.avgScore) }}</span>
                </div>
              </div>
            </div>
          </template>

          <div class v-for="(sub, indexSub) in item.question">
            <q-separator class="bg-grey-7" style="height: 1px"></q-separator>
            <div class="bg-4 row q-py-sm">
              <div class="col" style="padding-left: 37px">
                <span v-html="sub.headerTextUpper"></span>
                &nbsp;
              </div>
              <q-space></q-space>
            </div>
            <!-- ROW HEADER -->
            <div>
              <div class="row">
                <div class="q-pa-md border col-5 relative-position" align="center">
                  <span
                    v-if="item.question[indexSub].extend"
                    class="absolute"
                    style="left:20px;bottom:10px"
                  >
                    <q-btn
                      @click="removeIndicator(index,indexSub)"
                      icon="fas fa-trash-alt"
                      color="teal"
                      round
                    ></q-btn>
                  </span>
                  ตัวชี้วัด
                </div>
                <div class="q-pa-md border col" align="center">ผลดำเนินการ</div>

                <div class="q-pa-md border" style="width: 150px" align="center">%ความสำเร็จ</div>
                <div class="q-pa-md border" style="width: 150px" align="center">คะแนน</div>
              </div>
              <div class="row">
                <div class="q-pa-sm border col-5" align="center">
                  <div v-if="item.question[indexSub].editable">
                    <q-input
                      v-model="
                     item.question[indexSub].indicators
                    "
                      type="textarea"
                      outlined
                      rows="5"
                      readonly
                    ></q-input>
                  </div>
                  <div v-else>
                    <div align="left" v-html="item.question[indexSub].indicators"></div>
                  </div>
                </div>
                <!-- ผลการดำเนินการ -->
                <div class="q-pa-md border col" align="center">
                  <div class="row items-center">
                    <div class="col">
                      ค่าเป้าหมาย
                      <br />ปีล่าสุด(ตัวเลข)
                    </div>
                    <div class="col q-px-md">
                      <q-input
                        :readonly="!item.question[indexSub].editable"
                        v-model.number="
                         item.question[indexSub].goalCurrentYear
                        "
                        type="number"
                        outlined
                        dense
                      ></q-input>
                    </div>
                    <div class="col">
                      <q-input
                        :readonly="!item.question[indexSub].editable"
                        v-model="
                         item.question[indexSub].unit
                        "
                        outlined
                        dense
                        label="หน่วย"
                      ></q-input>
                    </div>
                  </div>
                  <div class="q-py-md">
                    <q-separator class="bg-grey-7" style="height: 1px"></q-separator>
                  </div>
                  <div class="row">
                    <div style="width: 130px">ผลการดำเนินงาน</div>
                    <div style="width: 250px; top: -14px" class="row relative-position">
                      <div class="row q-pt-sm" v-for="i in 3">
                        <div
                          style="width: 130px; left: -10px"
                          class="self-center relative-position"
                        >ปี {{ currentYear - i + 1 }}</div>
                        <div style="width: 120px; left: 12px" class="relative-position">
                          <q-input
                            v-model.number="
                             item.question[indexSub].result[currentYear - i + 1]
                            "
                            type="number"
                            dense
                            readonly
                            outlined
                          ></q-input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div style="width: 140px" align="left">การคำนวนคะแนน</div>
                    <div style="width: 252px">
                      <q-select
                        :readonly="!item.question[indexSub].editable"
                        v-model="
                         item.question[indexSub].scoreStandard"
                        dense
                        outlined
                        :options="scoreStandardOptions"
                      ></q-select>
                    </div>
                  </div>
                </div>
                <!-- ความสำเร็จ % -->
                <div class="q-pa-md border" style="width: 150px" align="center">
                  <span v-if="!item.question[indexSub].editable"></span>
                  <span
                    v-else
                  >{{ calculateSuccessRate(item.question[indexSub].result[currentYear],item.question[indexSub].goalCurrentYear,item.question[indexSub].scoreStandard,index,indexSub) }}</span>
                </div>
                <!-- คะแนน -->
                <div class="q-pa-md border" style="width: 150px" align="center">
                  <span v-if="!item.question[indexSub].editable">
                    {{
                    scoreCalculator(item.question[indexSub].result[currentYear],index,indexSub) != -1 ? scoreCalculator(item.question[indexSub].result[currentYear],index,indexSub) : ''
                    }}
                  </span>
                  <span v-else>
                    {{
                    calculateScore(calculateSuccessRate(item.question[indexSub].result[currentYear],item.question[indexSub].goalCurrentYear,item.question[indexSub].scoreStandard,index,indexSub),index,indexSub) != -1 ? calculateScore(calculateSuccessRate(item.question[indexSub].result[currentYear],item.question[indexSub].goalCurrentYear,item.question[indexSub].scoreStandard,index,indexSub),index,indexSub) : ''
                    }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div align="center" class="q-pt-md">
            <q-btn
              flat
              class="text-teal font-18"
              align="center"
              style="text-decoration:underline"
              @click="addInidcator(index)"
              v-if="item.question.filter((x) => x.extend).length < 3"
            >เพิ่มตัวชี้วัดที่สอดคล้องกับ GAP ตามแผนปรับปรุง ที่หน่วยงานเลือกเพิ่มเติม</q-btn>
          </div>-->

          <!-- <div class="q-py-md" align="center">
            <q-btn
              class="bg-teal text-white font-18"
              label="บันทึกข้อมูล"
              style="width: 220px; border-radius: 0px"
              push
              @click="saveCategory7(item.no)"
            ></q-btn>
          </div>-->
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      // 7.1
      dialogMessage: "",

      currentYear: this.$q.sessionStorage.getItem("y") + (543 - 1),
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
      ],
    };
  },
  methods: {
    // new score calculator
    scoreCalculator(score, index, indexSub) {
      let calculatedScore;

      if (index == 0 || index == 1) {
        // คิดคะแนน 7.1 -- 7.2

        // calculatedScore = (score - 75) * 20 + 100;
        // if (calculatedScore < 75) {
        //   calculatedScore = 0;
        // } else if (calculatedScore > 95) {
        //   calculatedScore = 500;
        // }
        if (score < 75) {
          calculatedScore = 0;
        } else if (score > 95) {
          calculatedScore = 500;
        } else {
          calculatedScore = (score - 75) * 20 + 100;
        }
      } else if (index == 2) {
        // คิดคะแนน 7.3

        // calculatedScore = (score - 80) * 20 + 100;
        // if (calculatedScore < 80) {
        //   calculatedScore = 0;
        // } else if (calculatedScore > 100) {
        //   calculatedScore = 500;
        // }

        if (score < 80) {
          calculatedScore = 0;
        } else if (score > 100) {
          calculatedScore = 500;
        } else {
          calculatedScore = (score - 80) * 20 + 100;
        }
      } else if (index == 3) {
        // คิดคะแนน 7.4
        if (indexSub == 0) {
          // คะแนน 7.4 RM6
          // calculatedScore = (score - 20) * 5 + 100;
          // if (calculatedScore < 20) {
          //   calculatedScore = 0;
          // } else if (calculatedScore > 100) {
          //   calculatedScore = 500;
          // }
          if (score < 20) {
            calculatedScore = 0;
          } else if (score > 100) {
            calculatedScore = 500;
          } else {
            calculatedScore = (score - 20) * 5 + 100;
          }
        } else {
          // คะแนน 7.4 RM7
          // calculatedScore = (score - 75) * 20 + 100;
          // if (calculatedScore < 75) {
          //   calculatedScore = 0;
          // } else if (calculatedScore > 95) {
          //   calculatedScore = 500;
          // }
          if (score < 75) {
            calculatedScore = 0;
          } else if (score > 95) {
            calculatedScore = 500;
          } else {
            calculatedScore = (score - 75) * 20 + 100;
          }
        }
      } else if (index == 4) {
        // 7.5 คิดคะแนน RM8
        // calculatedScore = (score - 94) * 100 + 100;
        // if (calculatedScore < 94) {
        //   calculatedScore = 0;
        // } else if (calculatedScore > 98) {
        //   calculatedScore = 500;
        // }
        if (score > 98) {
          calculatedScore = 500;
        } else if (score < 94) {
          calculatedScore = 0;
        } else {
          calculatedScore = (score - 94) * 100 + 100;
        }
      } else if (index == 5) {
        // 7.6 คิดคะแนน Rm9
        if (indexSub == 0) {
          // RM9
          // calculatedScore = (score - 60) * 10 + 100;
          // if (calculatedScore < 60) {
          //   calculatedScore = 0;
          // } else if (calculatedScore > 100) {
          //   calculatedScore = 500;
          // }
          if (score < 60) {
            calculatedScore = 0;
          } else if (score > 100) {
            calculatedScore = 500;
          } else {
            calculatedScore = (score - 60) * 10 + 100;
          }
        } else {
          // RM10
          // calculatedScore = (score - 70) * 20 + 100;
          // if (calculatedScore < 70) {
          //   calculatedScore = 0;
          // } else if (calculatedScore > 90) {
          //   calculatedScore = 500;
          // }
          if (score < 70) {
            calculatedScore = 0;
          } else if (score > 90) {
            calculatedScore = 500;
          } else {
            calculatedScore = (score - 70) * 20 + 100;
          }
        }
      }

      this.data[index].question[indexSub].score = calculatedScore;
      return isNaN(calculatedScore) ? 0 : parseInt(calculatedScore);
    },
    // ปุ่มเพิ่มตัวชี้วัด
    addInidcator(index) {
      // console.log(this.data[index])
      let data = {
        extend: true,
        editable: true,
        avgScore: -1,
        a_avgScore: -1,
        subNo: "",
        headerTextUpper:
          "ตัวชี้วัดที่สอดคล้องกับ GAP ตามแผนปรับปรุงฯ ที่หน่วยงานเลือกเพิ่มเติม",
        numberOfIndicators: 1,
        indicators: "",
        a_successpercent: "",
        a_suggestion: "",
        a_assesment: -1,
        a_score: -1,
        goalCurrentYear: null,
        unit: "",
        result: {
          [this.$q.sessionStorage.getItem("y") + 543]: null,
          [this.$q.sessionStorage.getItem("y") + 542]: null,
          [this.$q.sessionStorage.getItem("y") + 541]: null,
        },
        successRate: null,
        score: 0,
        scoreStandard: "ยิ่งมากยิ่งดี",
      };

      this.data[index].question.push(data);
    },
    // ลบตัวชี้วัดเพิ่มเติม
    removeIndicator(index, indexSub) {
      this.data[index].question.splice(indexSub, 1);
    },
    calculateSuccessRate(no1, no2, type, index, indexSub) {
      // no1 = "ปีปัจจุบัน"
      // no2 = เป้าหมาย
      // การคำนวณคะแนนยิ่งมากยิ่งดี

      let result = 0;
      if (type == "ยิ่งมากยิ่งดี") {
        result = (no1 / no2) * 100;
      } else {
        let cal = 100 - (no1 / no2) * 100;
        result = 100 + cal;
      }
      if (no1 && no2) {
        this.data[index].question[indexSub].successRate = result
          ? result.toFixed(2) + "%"
          : null;
        return result ? result.toFixed(2) + "%" : null;
      }
    },

    calculateScore(score, index, indexSub) {
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
        this.data[index].question[indexSub].score =
          result != 0 ? parseInt(result) : 0;
        return result != 0 ? parseInt(result) : 0;
      } else {
        this.data[index].question[indexSub].score = -1;
        return -1;
      }
    },
    async checkPassStatus() {
      let status = 0;
      let mapStatus = this.data.map((x) => x.avgScore);
      if (!mapStatus.includes(-1)) {
        // ประเมินครบแล้วทุกข้อ
        status = 1;
      } else if (mapStatus.every((x) => x == -1)) {
        // ยังไม่เคยทำสักข้อ
        status = 0;
      } else {
        // ทำแล้วบางข้อ
        status = 2;
      }

      const url = this.apiPath + "user/setUserStepperLog.php";
      let postData = {
        category: "category7",
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
        status: status, // 1 = finish
      };
      let data = await Axios.post(url, postData);
      this.$emit("statusForm");
    },
    async saveCategory7(q_number) {
      this.calAvgScore(q_number);
      let index = q_number - 1;
      const url = this.apiPath + "user/addUpdateCategory7.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        q_number: q_number,
        status: this.data[index].status,
        json: JSON.stringify(this.data[index].question),
        year: this.currentYear,
        avg_score: Number(this.data[index].avgScore),
        a_avg_score: -1,
      };

      let data = await Axios.post(url, postData);
      this.checkPassStatus();
    },
    calAvgScore(q_number) {
      let index = q_number - 1;

      let mapScore = this.data[index].question.map((x) => x.score);
      mapScore = mapScore.filter((x) => x > -1);

      let avgScore = mapScore.reduce((a, b) => a + b, 0) / mapScore.length;
      avgScore = parseInt(avgScore);

      // เช็คข้อที่จำเป็น
      if (q_number == 1 || q_number == 3 || q_number == 4 || q_number == 6) {
        // ข้อ 1 && 2 จำเป็น
        if (
          this.data[index].question[0].score != -1 &&
          this.data[index].question[1].score != -1
        ) {
          this.data[index].avgScore = avgScore;
        } else {
          this.data[index].avgScore = -1;
        }
      } else if (q_number == 2 || q_number == 5) {
        if (this.data[index].question[0].score != -1) {
          this.data[index].avgScore = avgScore;
        } else {
          this.data[index].avgScore = -1;
        }
      }
    },
    async getCategory7() {
      const url = this.apiPath + "user/getCategory7.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y") + (543 - 1),
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
    },
  },
  created() {
    this.getCategory7();
  },
};
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #5a5959;
}
</style>
0
