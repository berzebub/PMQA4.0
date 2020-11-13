<template>
  <div>
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 7 ผลลัพธ์การดำเนินการ</span>
      </div>
    </div>

    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <q-list bordered>
        <q-expansion-item
          group="dataFormStep4"
          header-class="bg-white "
          dense-toggle
          dense
          expand-icon-class="text-grey-10"
          header-style="height:70px;"
        >
          <template v-slot:header>
            <div class="row full-width q-pa-sm">
              <div class="col self-center">
                <span>{{ item.title }}</span>
              </div>
              <q-space></q-space>
              <div class="col-3 self-center q-px-xl" style="width:250px;">
                <div style="width:180px;border:1px solid" align="center">
                  <span class="font-18" v-if="item.avgScore == -1"
                    >ยังไม่ทำการประเมิน</span
                  >
                  <span v-else>{{ parseInt(item.avgScore) }} </span>
                </div>
              </div>
            </div>
          </template>

          <div class v-for="(sub, indexSub) in item.question">
            <q-separator class="bg-grey-7" style="height: 1px;"></q-separator>
            <div class="bg-4 row q-py-sm">
              <div class="col" style="padding-left:37px">
                <span v-html="sub.headerTextUpper"></span> &nbsp;
                <br />
              </div>
              <q-space></q-space>
              <div class="col-1 q-pr-lg self-center" align="right">
                <q-icon
                  name="add_circle"
                  class="cursor-pointer relative-position"
                  @click="
                    data[index].question[indexSub].numberOfIndicators < 5
                      ? data[index].question[indexSub].numberOfIndicators++
                      : null
                  "
                  v-ripple
                  color="teal"
                  size="lg"
                ></q-icon>
              </div>
            </div>
            <!-- ROW HEADER -->
            <div
              v-for="(result, indexResult) in item.question[indexSub]
                .numberOfIndicators"
              :key="indexResult"
            >
              <div class="row">
                <div
                  class="q-pa-md border col-5 relative-position row items-center"
                  align="center"
                >
                  <q-btn
                    v-show="indexResult != 0"
                    class="cursor-pointer relative-position"
                    round
                    icon="fas fa-trash-alt"
                    color="teal"
                    size="12px"
                    @click="deleteIndicator(index, indexSub, indexResult)"
                  ></q-btn>
                  <div class="col-10" align="center">ตัวชี้วัด</div>
                </div>
                <div class="q-pa-md border col" align="center">ผลดำเนินการ</div>
                <div class="q-pa-md border" style="width:150px" align="center">
                  %ความสำเร็จ
                </div>
                <div class="q-pa-md border" style="width:150px" align="center">
                  คะแนน
                </div>
              </div>
              <div class="row">
                <div class="q-pa-sm border col-5" align="center">
                  <q-input
                    v-model="
                      data[index].question[indexSub].indicators[indexResult]
                    "
                    type="textarea"
                    outlined
                    rows="5"
                  ></q-input>
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
                        v-model.number="
                          data[index].question[indexSub].goalCurrentYear[
                            indexResult
                          ]
                        "
                        type="number"
                        outlined
                        dense
                      ></q-input>
                    </div>
                    <div class="col">
                      <q-input
                        v-model="
                          data[index].question[indexSub].unit[indexResult]
                        "
                        outlined
                        dense
                        label="หน่วย"
                      ></q-input>
                    </div>
                  </div>
                  <div class="q-py-md">
                    <q-separator
                      class="bg-grey-7"
                      style="height: 1px;"
                    ></q-separator>
                  </div>
                  <div class="row">
                    <div style="width:130px">ผลการดำเนินงาน</div>
                    <div
                      style="width:250px;top:-14px"
                      class="row relative-position"
                    >
                      <div class="row q-pt-sm" v-for="i in 3">
                        <div
                          style="width:130px;left:-10px"
                          class="self-center relative-position"
                        >
                          ปี {{ currentYear - i + 1 }}
                        </div>
                        <div
                          style="width:120px;left:12px"
                          class="relative-position"
                        >
                          <q-input
                            v-model.number="
                              data[index].question[indexSub].result[
                                indexResult
                              ][currentYear - i + 1]
                            "
                            type="number"
                            dense
                            outlined
                          ></q-input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div style="width:140px" align="left">การคำนวนคะแนน</div>
                    <div style="width:252px">
                      <q-select
                        v-model="
                          data[index].question[indexSub].scoreStandard[
                            indexResult
                          ]
                        "
                        dense
                        outlined
                        :options="scoreStandardOptions"
                      ></q-select>
                    </div>
                  </div>
                </div>
                <div class="q-pa-md border" style="width:150px" align="center">
                  <span>
                    {{
                      calculateSuccessRate(
                        item.question[indexSub].result[indexResult][
                          currentYear
                        ],
                        item.question[indexSub].goalCurrentYear[indexResult],
                        item.question[indexSub].scoreStandard[indexResult],
                        index,
                        indexSub,
                        indexResult
                      )
                    }}
                  </span>
                </div>
                <div class="q-pa-md border" style="width:150px" align="center">
                  <span
                    v-if="
                      calculateScore(
                        calculateSuccessRate(
                          item.question[indexSub].result[indexResult][
                            currentYear
                          ],
                          item.question[indexSub].goalCurrentYear[indexResult],
                          item.question[indexSub].scoreStandard[indexResult]
                        ),
                        index,
                        indexSub,
                        indexResult
                      ) != -1
                    "
                  >
                    {{
                      calculateScore(
                        calculateSuccessRate(
                          item.question[indexSub].result[indexResult][
                            currentYear
                          ],
                          item.question[indexSub].goalCurrentYear[indexResult],
                          item.question[indexSub].scoreStandard[indexResult]
                        ),
                        index,
                        indexSub,
                        indexResult
                      )
                    }}
                  </span>
                  <span v-else>0</span>
                </div>
              </div>
            </div>
          </div>

          <div class="q-py-md" align="center">
            <q-btn
              class="bg-teal text-white font-18"
              label="บันทึกข้อมูล"
              style="width: 220px; border-radius: 0px;"
              push
              @click="saveCategory7(item.no)"
            ></q-btn>
          </div>
        </q-expansion-item>
      </q-list>
    </div>

    <!-- 7.1.1 -->
    <q-dialog v-model="d711">
      <q-card class="q-pl-lg q-py-sm" style="max-width: 700px; width: 100%;">
        <q-card-section>
          <div class="font-16 font-prompt-r">
            ตัวอย่าง<br />
            - จำนวนรายได้ภาษีสรรพสามิตที่จัดเก็บได้
            <br />- รายได้จากการจำหน่ายผลิตภัณฑ์ชุมชน <br />-
            รายได้จากการบริหารที่ราชพัสดุที่จัดเก็บได้ <br />-
            ร้อยละของผลิตภัณฑ์ที่ได้รับการตรวจสอบได้มาตรฐานตามเกณฑ์ที่กำหนด
            <br />- ประสิทธิภาพการผลิตสินค้าเกษตรที่สำคัญ
            (ผลผลิตต่อหน่วยที่พร้อมขึ้น) <br />-
            ความสำเร็จของการกำหนดมาตรการส่งเสริมการส่งออก
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- 7.1.2 -->
    <q-dialog v-model="d712">
      <q-card class="q-pl-lg q-py-sm" style="max-width: 700px; width: 100%;">
        <q-card-section>
          <div class="font-16 font-prompt-r">
            - รายได้จากการท่องเที่ยว<br />
            - GDP ภาคการเกษตรขยายตัวไม่น้อยกว่าร้อยละ 3<br />
            - ร้อยละของเด็กอายุ 0-5 ปี มีพัฒนาการสมวัย<br />
            -
            ความสำเร็จของของการขับเคลื่อนการบรูณาการฐานข้อมูลประชาชนและการบริการภาครัฐ<br />
            -
            ความสำเร็จการแก้ไขข้อบกพร่องของระบบการกกำักับดูแลด้านความปลอดภัยการบินพลเรือน
            (ICAO)<br />
            - ร้อยละของการปริมาณขยะมูลผอยที่ได้รับการจัดการอย่างถูกต้อง<br />
            - มูลค่าขอรับการส่งเสริมลงทุนในกลุ่ม 10 อุตสาหกรรมเป้าหมาย (S-
            Curve)
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      // 7.1
      d711: false,
      d712: false,
      d713: false,
      d714: false,
      d715: false,
      // 7.2
      d721: false,
      d722: false,
      d723: false,
      d724: false,
      d725: false,
      // 7.3
      d731: false,
      d732: false,
      d733: false,
      d734: false,
      d735: false,
      //7.4
      d741: false,
      d742: false,
      d743: false,
      d744: false,
      d745: false,
      //7.5
      d751: false,
      d752: false,
      d753: false,
      d754: false,
      d755: false,
      //7.6
      d761: false,
      d762: false,
      d763: false,
      d764: false,
      d765: false,
      currentYear: this.$q.sessionStorage.getItem("y") + 543,
      score: "ยิ่งมากยิ่งดี",
      scoreStandardOptions: ["ยิ่งมากยิ่งดี", "ยิ่งน้อยยิ่งดี"],
      data: [
        {
          title: "7.1 การบรรลุผลลัพธ์ตามตัวชี้วัดตามพันธกิจ",
          no: 1,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          question: [
            {
              avgScore: -1,
              subNo: 1,
              headerTextUpper:
                "1. ตัววัดตามภารกิจ <b>(จำเป็น)</b> <br>ตัวชี้วัดของการบรรลุผลลัพธ์ตามพันธกิจหรือภารกิจของส่วนราชการตามที่ระบุไว้ (Function base, Area base)",
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 2,
              avgScore: -1,
              headerTextUpper: `2. ตัววัดตามนโยบายและแผนรัฐบาล<br>
              ตัวชี้วัดของการบรรลุผลลัพธ์ตามนโยบายและแผนรัฐบาล (Agenda base)`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 3,
              avgScore: -1,
              headerTextUpper: `3. การดำเนินการด้านกฏหมาย<br>ตัวชี้วัดของการดำเนินการด้านกฏหมาย`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 4,
              avgScore: -1,
              headerTextUpper: `4. ตัววัดของการบรรลุตามแผนยุทธศาสตร์ <b>(จำเป็น)</b><br>ตัวชี้วัดของการบรรลุผลตามแผนยุทธศาสตร์`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 5,
              avgScore: -1,
              headerTextUpper: `5. การบรรลุตามยุทธศาสตร์อื่นๆ เช่น การบรรลุตัววัดร่วม การจัดอันดับต่างๆ<br>ตัวชี้วัดของการควบคุมยุทธศาสตร์อื่นๆ ตามนโยบายของส่วนราชการหรือของรัฐบาล เช่น ตัววัดร่วม ตัววัดที่แสดง<br>ถึงการปรับปรุงระดับในการจัดอันดับ โดยองค์กายภายนอกและประเทศในด้านต่างๆ เป็นต้น`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            }
          ]
        },
        {
          title: "7.2 การบรรลุผลลัพธ์ตามตัวชี้วัดด้านผู้รับบริการ และประชาชน",
          no: 2,
          avgScore: -1,
          status: -1, //-1 ยังไม่ประเมิน
          question: [
            {
              subNo: 1,
              avgScore: -1,
              headerTextUpper: `1.ความพึงพอใจของผู้รับบริการและผู้มีส่วนได้ส่วนเสีย <b>(จำเป็น)</b><br>
ตัวชี้วัดของการบรรลุผลลัพธ์ของความพึงพอใจของผู้รับบริการและผู้มีส่วนได้ส่วนเสียจากการใช้บริการของส่วนราชการ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 2,
              avgScore: -1,
              headerTextUpper: `2. ผลของความผูกพันและการให้ความร่วมมือ <b>(จำเป็น)</b><br> 
ตัวชี้วัดที่แสดงออกถึงความผูกพันและการให้ความร่วมมือจากประชาชนและผู้เข้ามารับการบริการจากส่วนราชการ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 3,
              avgScore: -1,
              headerTextUpper: `3. ผลการดำเนินการด้านโครงการประชารัฐ<br>
ตัวชี้วัดที่แสดงการบรรลุผลหรือความสำเร็จของการดำเนินการด้านโครงการประชารัฐ เช่น ยอดการ<br>จำหน่ายสินค้าภายใต้โครงการประชารัฐ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 4,
              avgScore: -1,
              headerTextUpper: `4.  ผลจากการปรบเปลี่ยนด้านการบริการที่เกิดประโยชน์ต่อผู้รับบริการที่สามารถวัดผลได้
ตัวชี้วัดที่สะท้อนถึงผลจากการปรับเปลี่ยนด้านการบริการ และนวัตกรรมการบริการที่เกิดประโยชน์ ต่อผู้รับบริการที่สามารถวัดผลได้`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 5,
              avgScore: -1,
              headerTextUpper: `5. การแก้ไขเรื่องร้องเรียน
ตัวชี้วัดที่สะท้อนถึงการจัดการข้อร้องเรียนที่ได้รับการแก้ไขอย่างรวดเร็วและเกิดผล`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            }
          ]
        },
        {
          title: "7.3 การบรรลุผลลัพธ์ตามตัวชี้วัดด้านการพัฒนาบุคลากร",
          no: 3,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          question: [
            {
              subNo: 1,
              avgScore: -1,
              headerTextUpper: `1.จำนวนนวัตกรรมต่อบุคลากร <b>(จำเป็น)</b><br>ตัวชี้วัดของการพัฒนานวัตกรรมที่เกิดจากบุคลากรของส่วนราชการ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 2,
              avgScore: -1,
              headerTextUpper: `2. การเรียนรู้และผลการพัฒนา <b>(จำเป็น) </b><br>ตัวชี้วัดของการเรียนรู้และผลการพัฒนาบุคลากรของส่วนราชการ
`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 3,
              avgScore: -1,
              headerTextUpper: `3. ความก้าวหน้าและการก้าวขึ้นสู่ตำแหน่งตามแผน<br>
ตัวชี้วัดที่แสดงถึงความก้าวหน้าของบุคลากรและความก้าวหน้าขึ้นสู่ตำแหน่งตามแผน
`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 4,
              avgScore: -1,
              headerTextUpper: `4.จำนวนบุคลากรที่ได้รับการแต่งตั้งให้ไปร่วมในภาคีเครือข่ายภายนอกทั้งระดับชาติและนานาชาติ<br>
ตัวชี้วัดที่แสดงถึงบุคลากรของส่วนราชการที่ได้รับการแต่งตั้งให้ไปร่วมในภาคีเครือข่ายภายนอกทั้งระดับชาติและนานาชาติ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 5,
              avgScore: -1,
              headerTextUpper: `5. จำนวนบุคลากรที่อาสาสมัครในโครงการที่ตอบสนองนโยบายหน่วยงาน<br>
ตัวชี้วัดที่แสดงถึงบุคลากรของส่วนราชการไปเป็นอาสาสมัครในโครงการที่ตอบสนองนโยบายหน่วยงาน`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            }
          ]
        },
        {
          title: "7.4 การบรรลุผลลัพธ์ตามตัวชี้วัดด้านการเป็นต้นแบบ",
          no: 4,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          question: [
            {
              subNo: 1,
              avgScore: -1,
              headerTextUpper: `1.จำนวนรางวัลที่ได้รับจากภายนอก <b>(จำเป็น)</b><br>
ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการที่ได้รับรางวัลจากหน่วยงานภายนอกที่แสดงถึงความสำเร็จในการปรับปรุงกระบวนการ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 2,
              avgScore: -1,
              headerTextUpper: `2. จำนวน Best practice <b>(จำเป็น) </b><br>
ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการที่เป็น Best practice
`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 3,
              avgScore: -1,
              headerTextUpper: `3. จำนวนรางวัลที่ได้รับจากหน่วยงานระดับกรม / ระดับกระทรวง<br>
ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการได้แก่<br>
        &nbsp;&nbsp;&nbsp;- รางวัลระดับกรม เป็นรางวัลที่ส่วนราชการระดับกรมมอบให้หน่วยงานย่อยในสังกัด<br>
        &nbsp;&nbsp;&nbsp;- รางวัลระดับกระทรวง เป็นรางวัลที่มอบให้กับส่วนราชการระดับกรมในสังกัด

`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 4,
              avgScore: -1,
              headerTextUpper: `4.การจัดอันดับในระดับนานาชาติ<br>
ตัวชี้วัดที่แสดงถึงสำเร็จของการแข่งขัน โดยได้รับการจัดอันดับในระดับนานาชาติ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 5,
              avgScore: -1,
              headerTextUpper: `5. จำนวนบุคลากรที่ได้รับการยกย่องจากภายนอก<br>
ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการ โดยมีบุคลากรของตนเองได้รับการยกย่องจากภายนอก`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            }
          ]
        },
        {
          title:
            "7.5 การบรรลุผลลัพธตามตัวชี้วัดด้านผลกระทบต่อเศรษฐกิจ สังคม สาธารณสุข และสิ่งแวดล้อม",
          no: 5,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          question: [
            {
              subNo: 1,
              avgScore: -1,
              headerTextUpper: `1.การบรรลุผลของตัววัดร่วม (กระบวนการที่ดำเนินการร่วมกันหลายหน่วยงาน)<b> (จำเป็น)</b><br>
ตัวชี้วัดของการบรรลุผลลัพธ์การบรรลุผลของตัววัดร่วม ในการมีกระบวนการที่ดำเนินการข้ามหลายหน่วยงานของส่วนราชการ (Area base)`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 2,
              avgScore: -1,
              headerTextUpper: `2. ตัววัดผลกระทบจากการดำเนินการที่มีต่อด้านเศรษฐกิจ
ตัวชี้วัดที่สะท้อนถึงผลกระทบจากการดำเนินการที่มีต่อด้านเศรษฐกิจ
`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 3,
              avgScore: -1,
              headerTextUpper: `3. ตัววัดผลกระทบจากการดำเนินการที่มีต่อสังคม<br>
ตัวชี้วัดที่สะท้อนถึงผลกระทบจากการดำเนินการที่มีต่อสังคม`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 4,
              avgScore: -1,
              headerTextUpper: `4. ตัววัดผลกระทบจากการดำเนินการด้านสาธารณสุข<br>
ตัวชี้วัดที่สะท้อนถึงผลกระทบจากการดำเนินการที่มีต่อด้านสาธารณสุข`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 5,
              avgScore: -1,
              headerTextUpper: `5. ตัววัดผลกระทบจากการดำเนินการที่มีต่อด้านสิ่งแวดล้อม<br>
ตัวชี้วัดที่สะท้อนถึงผลกระทบจากการดำเนินการที่มีต่อด้านสิ่งแวดล้อม`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            }
          ]
        },
        {
          title:
            "7.6 การบรรลุผลลัพธตามตัวชี้วัดด้านการลดต้นทุน การสร้างนวัตกรรม และการจัดการกระบวนการ",
          no: 6,
          avgScore: -1,
          status: -1, //-1 ยังไม่ประเมิน
          question: [
            {
              subNo: 1,
              avgScore: -1,
              headerTextUpper: `1.การลดต้นทุน (ทั้งในระดับกระบวนการที่เกิดจากการปรับปรุงงาน และการนำเทคโนโลยีดิจิทัลมาใช้) <br>(จำเป็น)</br><br>
ตัวชี้วัดของการลดต้นทุนทั้งในระดับกระบวนการอันเกิดจากการปรับปรุงงาน และการนำเทคโนโลยีดิจิทัลมาใช้เพื่อลดต้นทุนในการทำงาน`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 2,
              avgScore: -1,
              headerTextUpper: `2. จำนวนนวัตกรรมของการปรับปรุงกระบวนการ<br>ตัวชี้วัดของนวัตกรรมการปรับปรุงกระบวนการ
`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 3,
              avgScore: -1,
              headerTextUpper: `3. ผลการปรับปรุงจากการใช้เทคโนโลยีดิจิทัล <b>(จำเป็น)</b><br>
ตัวชี้วัดผลลัพธ์ของการปรับปรุงกระบวนการ และการบริการจากการใช้เทคโนโลยีดิจิทัล ทั้งทางตรงและทางอ้อม`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 4,
              avgScore: -1,
              headerTextUpper: `4. ประสิทธิผลของการบรรเทาผลกระทบด้านภัยพิบัติต่างๆ<br>
ตัวชี้วัดที่แสดงถึงประสิทธิผลของการบรรเทาผลกระทบด้านภัยพิบัติต่างๆ`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            },
            {
              subNo: 5,
              avgScore: -1,
              headerTextUpper: `5. นวัตกรรมการปรับปรุงด้านนโยบาย กฏระเบียบและกฏหมาย<br>
ตัวชี้วัดของนวัตกรรมการปรับปรุงด้านนโยบาย กฏระเบียบ และกฏหมาย`,
              numberOfIndicators: 1,
              indicators: [],
              goalCurrentYear: [],
              unit: [],
              result: [
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                },
                {
                  [this.$q.sessionStorage.getItem("y") + 543]: null,
                  [this.$q.sessionStorage.getItem("y") + 542]: null,
                  [this.$q.sessionStorage.getItem("y") + 541]: null
                }
              ],
              successRate: [],
              score: [],
              scoreStandard: [
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี",
                "ยิ่งมากยิ่งดี"
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    deleteIndicator(index, indexSub, indexResult) {
      this.data[index].question[indexSub].indicators.splice(indexResult, 1);
      this.data[index].question[indexSub].goalCurrentYear.splice(
        indexResult,
        1
      );
      this.data[index].question[indexSub].unit.splice(indexResult, 1);
      this.data[index].question[indexSub].successRate.splice(indexResult, 1);
      this.data[index].question[indexSub].score.splice(indexResult, 1);
      this.data[index].question[indexSub].result = [
        {
          [this.$q.sessionStorage.getItem("y") + 543]: null,
          [this.$q.sessionStorage.getItem("y") + 542]: null,
          [this.$q.sessionStorage.getItem("y") + 541]: null
        },
        {
          [this.$q.sessionStorage.getItem("y") + 543]: null,
          [this.$q.sessionStorage.getItem("y") + 542]: null,
          [this.$q.sessionStorage.getItem("y") + 541]: null
        },
        {
          [this.$q.sessionStorage.getItem("y") + 543]: null,
          [this.$q.sessionStorage.getItem("y") + 542]: null,
          [this.$q.sessionStorage.getItem("y") + 541]: null
        },
        {
          [this.$q.sessionStorage.getItem("y") + 543]: null,
          [this.$q.sessionStorage.getItem("y") + 542]: null,
          [this.$q.sessionStorage.getItem("y") + 541]: null
        },
        {
          [this.$q.sessionStorage.getItem("y") + 543]: null,
          [this.$q.sessionStorage.getItem("y") + 542]: null,
          [this.$q.sessionStorage.getItem("y") + 541]: null
        }
      ];

      this.data[index].question[indexSub].numberOfIndicators--;
      this.data.push("");
      this.data.pop();
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
        return result ? result.toFixed(2) + "%" : null;
      }
    },

    calculateScore(score) {
      // การคำนวณคะแนนยิ่งน้อยยิ่งดี
      let result = 0;
      if (score) {
        score = score.replace("%", "");
        score = Number(score);

        if (score < 100) {
          result = 0;
        } else if (score <= 101) {
          result = 300;
        } else if (score <= 105) {
          result = 400;
        } else if (score > 105) {
          result = 500;
        }
        return result != 0 ? result : 0;
      } else {
        return -1;
      }
    },
    async checkPassStatus() {
      let status = 0;
      let mapStatus = this.data.map(x => x.avgScore);
      console.log(mapStatus);
      if (!mapStatus.includes(-1)) {
        // ประเมินครบแล้วทุกข้อ
        status = 1;
      } else if (mapStatus.every(x => x == -1)) {
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
        status: status // 1 = finish
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
        avg_score: Number(this.data[index].avgScore)
      };

      let data = await Axios.post(url, postData);
      this.checkPassStatus();
    },
    calAvgScore(q_number) {
      // if (q_number == 1) {
      // 7.1 จำเป็นข้อ 1
      // console.log(this.data[q_number - 1].question[0]);
      let index = q_number - 1;

      let scoreTemp = [];
      for (let i = 0; i < 5; i++) {
        let totalIndicator = this.data[index].question[i].numberOfIndicators;

        for (let j = 0; j < totalIndicator; j++) {
          let goal = this.data[index].question[i].goalCurrentYear[j];
          let result = this.data[index].question[i].result[j][this.currentYear];
          let type = this.data[index].question[i].scoreStandard[j];
          let success_rate = this.calculateSuccessRate(result, goal, type);
          let score = this.calculateScore(success_rate);
          scoreTemp.push({
            no: i + 1,
            score: score,
            totalIndicator: totalIndicator
          });
        }
      }

      for (let i = 0; i < 5; i++) {
        let filt = scoreTemp.filter(x => x.no == i + 1);

        let length = filt.length;

        let avg = filt.map(x => x.score).reduce((a, b) => a + b, 0) / length;

        this.data[index].question[i].avgScore = avg;
      }

      let totalAvg = this.data[index].question.map(x => {
        if (x.avgScore >= 0) {
          return x.avgScore;
        }
      });

      totalAvg = totalAvg.filter(x => x >= 0);

      if (q_number == 5 || q_number == 6) {
        // ข้อ1 ย่อยจำเป็น
        if (this.data[index].question[0].avgScore >= 0) {
          this.data[index].avgScore =
            totalAvg.reduce((a, b) => a + b, 0) / totalAvg.length;
        } else {
          this.data[index].avgScore = -1;
        }
      } else if (q_number == 3 || q_number == 4 || q_number == 2) {
        //7.2 // 7.3 // 7.4
        if (
          this.data[index].question[0].avgScore >= 0 &&
          this.data[index].question[1].avgScore >= 0
        ) {
          let avg = totalAvg.reduce((a, b) => a + b, 0) / totalAvg.length;
          this.data[index].avgScore = Number(avg);
        } else {
          this.data[index].avgScore = -1;
        }
      } else if (q_number == 6) {
        if (
          this.data[index].question[0].avgScore >= 0 &&
          this.data[index].question[2].avgScore >= 0
        ) {
          let avg = totalAvg.reduce((a, b) => a + b, 0) / totalAvg.length;
          this.data[index].avgScore = Number(avg);
        } else {
          this.data[index].avgScore = -1;
        }
      } else if (q_number == 1) {
        // 7.1
        // ข้อ 1 กับ 4 จำเป็น
        if (
          this.data[index].question[0].avgScore >= 0 &&
          this.data[index].question[3].avgScore >= 0
        ) {
          this.data[index].avgScore =
            totalAvg.reduce((a, b) => a + b, 0) / totalAvg.length;
        } else {
          this.data[index].avgScore = -1;
        }
      }

      // console.log(scoreTemp);
      // this.data[index].avgScore = scoreTemp.reduce((a,b) => a+b,0) / scoreTemp.length
      // }
    },
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
</style>
0
