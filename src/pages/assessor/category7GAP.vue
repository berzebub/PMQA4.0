<template>
  <q-page class="q-pa-md" style=" max-width: 1280px;width: 100%;
  margin:auto" align="center">
    <div class="row justify-center q-pb-md relative-position">
      <div class="relative-position" style="width: 150px;z-index:10">
        <div class>
          <q-btn round push class="q-pa-sm bg1 text-white">
            <q-icon name="fas fa-trophy"></q-icon>
          </q-btn>
        </div>
        <div class align="center">
          <span class="text-no-wrap">หมวด7</span>
        </div>
      </div>

      <div class="absolute-right full-height flex flex-center">
        <q-btn
          @click="finish7GAP()"
          style="width:160px"
          dense
          class="font-24"
          :color="cat7GAPStatus ? 'teal' : null"
          :outline="!cat7GAPStatus"
          :label="cat7GAPStatus ? 'ประเมินแล้ว' : 'ยังไม่ประเมิน'"
        ></q-btn>
      </div>
    </div>

    <div align="left" class="bg4 q-pa-md q-px-lg" style="border-radius: 10px">
      <div>
        <span class="font-24">หมวด 7 ผลลัพธ์การดำเนินการ</span>
      </div>
    </div>

    <div align="left" class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
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
                <div style="width: 180px;" align="center">
                  <q-icon
                    v-if="item.question.filter(x => x.extend).filter(e => e.a_assesment_GAP != -1).length != item.question.filter(x => x.extend).length"
                    name="fas fa-exclamation-circle"
                    color="red"
                  ></q-icon>
                  <q-icon name="fas fa-check-circle" color="teal" v-else></q-icon>
                  เสร็จสิ้น
                  {{ item.question.filter(x => x.extend).filter(e => e.a_assesment_GAP != -1).length }} / {{ item.question.filter(x => x.extend).length }}
               
                </div>
              </div>
            </div>
          </template>

          <div class v-for="(sub, indexSub) in item.question">
            <q-separator class="bg-grey-7" style="height: 1px"></q-separator>
            <div class="bg-4 row q-py-sm" style="border-right:1px solid;border-left:1px solid">
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
                <div class="q-pa-md border col-2" style="width:350px;" align="center">การประเมินผล</div>
              </div>
              <div class="row">
                <div class="q-pa-sm border col-5 row q-py-md" align="center" style="width:300px;">
                  <div align="center" class="q-pa-sm col-12">
                    <div
                      align="left"
                      v-html="
                        data[index].question[indexSub].indicators
                      "
                    ></div>
                  </div>
                  <div class="col-12 self-end">
                    <div class="q-px-sm">
                      <q-separator class="bg-black q-my-sm"></q-separator>
                      <div class="row">
                        <div class="col" align="left">การคำนวนคะแนน</div>
                        <div class="self-center col center" style="font-size:16px">
                          {{
                          item.question[indexSub].scoreStandard
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ผลการดำเนินการ -->
                <div class="q-pa-md border col row items-center" align="center">
                  <div
                    align="center"
                    style="width:100%"
                    v-if="!item.question[indexSub].extend"
                  >ยังไม่มีผลดำเนินการ</div>

                  <div style="width:100%" class v-else>
                    <div class="row items-center">
                      <div class="col-4">
                        ค่าเป้าหมาย
                        <br />ปีล่าสุด (ตัวเลข)
                      </div>
                      <div class="col-4">
                        {{  item.question[indexSub].goalCurrentYear }}
                      </div>
                      <div class="col-4">{{  item.question[indexSub].unit }}</div>

                      <div class="col-12 q-py-md">
                        <q-separator color="black" />
                      </div>

                      <div class="col-4">ผลการดำเนินงาน</div>
                      <div class="col-4">ปี {{ $q.sessionStorage.getItem("y") +543 }}</div>
                      <div class="col-4">-</div>

                      <div class="col-12 q-py-sm"></div>
                      <div class="col-4"></div>
                      <div class="col-4">ปี {{ $q.sessionStorage.getItem("y") +542 }}</div>
                      <div
                        class="col-4"
                      >{{ item.question[indexSub].result[$q.sessionStorage.getItem("y") +542] }}</div>
                      <div class="col-12 q-py-sm"></div>
                      <div class="col-4"></div>
                      <div class="col-4">ปี {{ $q.sessionStorage.getItem("y") +541 }}</div>
                      <div
                        class="col-4"
                      >{{ item.question[indexSub].result[$q.sessionStorage.getItem("y") +541] }}</div>
                    </div>
                  </div>
                </div>
                <div class="q-pa-md border col-2" style="width:350px;" align="center">
                  <div v-if="item.question[indexSub].extend">
                    <q-btn
                      class="full-width"
                      :label="
                        item.question[indexSub].a_assesment_GAP == -1
                          ? 'ยังไม่ประเมิน'
                          : item.question[indexSub].a_assesment_GAP ==
                            0
                          ? 'ไม่เหมาะสม'
                          : 'เหมาะสม'
                      "
                      @click="assesment(index, indexSub,)"
                      :class="
                        item.question[indexSub].a_assesment_GAP == -1
                          ? 'ยังไม่ประเมิน'
                          : item.question[indexSub].a_assesment_GAP ==
                            0
                          ? 'text-red'
                          : 'text-teal'
                      "
                      dense
                      outline
                    ></q-btn>
                  </div>

                  <div v-else>
                    <div
                      align="center"
                      class="q-py-xs"
                      style="background-color:#C4C4C4"
                    >ไม่มีการประเมิน</div>
                  </div>
                  <div class="q-mt-md" v-if="item.question[indexSub].extend">
                    <q-input
                      type="textarea"
                      input-style="height:250px;"
                      outlined
                      v-model="
                        item.question[indexSub].a_suggestion_GAP
                      "
                    />
                  </div>
                  <div v-else style="height:250px"></div>
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
        cat7GAPStatus : false,
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "",
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "",
              result: 
                {
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "",
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 90,
              unit: "",
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 90,
              unit: "",
              result: 
                {
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 60,
              unit: "",
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 85,
              unit: "",
              result: 
                {
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 96,
              unit: "",
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 80,
              unit: "",
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
              a_suggestion_GAP: "",
              a_assesment_GAP: -1,
              a_score: -1,
              goalCurrentYear: 80,
              unit: "",
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
    assesment(no, subNo) {
      if (this.data[no].question[subNo].score != -1) {
        let current = this.data[no].question[subNo].a_assesment_GAP;
        if (current == -1) {
          // เหมาะสม
          this.data[no].question[subNo].a_assesment_GAP = 1;
        } else if (current == 1) {
          //  0=ไม่เหมาะสม
          this.data[no].question[subNo].a_assesment_GAP = 0;
        } else {
          // ยังไม่ประเมิน
          this.data[no].question[subNo].a_assesment_GAP = -1;
        }
      }
    },

    async saveCategory7(q_number) {
      this.loadingShow();
      let index = q_number - 1;
      const url = this.apiPath + "user/addUpdateCategory7.php";

      let totala_avg_score = this.data
        .filter((x) => x.a_avgScore != "-1")
        .map((x) => Number(x.a_avgScore))
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
        totala_avg_score: totala_avg_score,
      };

      let data = await Axios.post(url, postData);

      setTimeout(() => {
        this.loadingHide();
      }, 900);
    },

    async getAssessmentStepperLog(){
         const apiCheckStatus =
          this.apiPath + "user/getAssessmentStepperLog.php";
        let postCheckStatusData = {
          user_id: this.$route.params.userId,
          year: this.$q.sessionStorage.getItem("y"),
        };

        let responseCheck = await Axios.post(
          apiCheckStatus,
          postCheckStatusData
        );
        let responseData = responseCheck.data[0];

        if(responseData.cat7_gap == '2'){
            this.cat7GAPStatus = true
        }else{

this.cat7GAPStatus = false
        }

    },
    async getCategory7() {
      const url = this.apiPath + "user/getCategory7.php";
      let postData = {
        user_id: this.$route.params.userId,
        year: this.$q.sessionStorage.getItem("y") + 543,
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

      this.getAssessmentStepperLog()

    //   setTimeout(() => {
    //     this.randerGraph();
    //   }, 500);
    },
    randerGraph() {
      let this_ = this;
      let getYear = [
        this.$q.sessionStorage.getItem("y") + 541,
        this.$q.sessionStorage.getItem("y") + 542,
        this.$q.sessionStorage.getItem("y") + 543,
      ];
    },

    async finish7GAP() {
      let checkGAPStatus = [];
      this.data.forEach((element) => {
        let checkGAP = element.question.filter((x) => x.extend);
        checkGAP.forEach((gap) => {
          checkGAPStatus.push(gap.a_assesment_GAP);
        });
      });

      if (!checkGAPStatus.includes(-1)) {
        this.cat7GAPStatus = !this.cat7GAPStatus
        const urlUpdateStepper =
          this.apiPath + "user/update_assessment_stepper_log.php";

        const stepperData = {
          uid: this.$route.params.userId,
          step: "cat7_gap",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: this.cat7GAPStatus ? 2 : 1,
        };

        let response = await Axios.post(urlUpdateStepper,stepperData)



      } else {

         const urlUpdateStepper =
          this.apiPath + "user/update_assessment_stepper_log.php";

        const stepperData = {
          uid: this.$route.params.userId,
          step: "cat7_gap",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: 1,
        };

        let response = await Axios.post(urlUpdateStepper,stepperData)


        this.cat7GAPStatus = false
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
