<template>
  <div>
    <div class="float-right q-pa-md">
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
        class="absolute-right text-h7 printDate"
        style="right:15px;top:10px;"
      >
        {{ printDate }}
      </div>

      <div align="center" class="q-pa-md">
        <span class="text-h6">ตัวชี้วัดหมวด 7</span>
      </div>

      <div>
        <span>ชื่อผู้สมัครรางวัล : กรมควบคุมโรค</span>
      </div>

      <div
        class="q-mt-md"
        :class="index == 0 ? 'q-mt-xl' : 'q-mt-lg'"
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
                    v-if="item2.indicators.length == 0"
                    class="q-pa-sm border-top-lr border-bottom"
                  >
                    <div class="q-pa-xs"></div>
                  </div>

                  <div
                    v-else
                    class="row border-top-lr "
                    :class="
                      item2.indicators.length == index3 + 1
                        ? 'border-bottom'
                        : ''
                    "
                    v-for="(res, index3) in item2.indicators"
                    :key="index3"
                  >
                    <div class="col border-right">
                      <div class="q-pa-xs">
                        <span>
                          {{
                            `${index2 + 1}.${index3 + 1} [${
                              item2.scoreStandard[index3]
                            }]`
                          }}
                        </span>
                        <br />
                        <span v-html="res"></span>
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
                            `${item2.goalCurrentYear[index3] || ""} ${item2
                              .unit[index3] || ""}`
                          }}
                        </span>
                      </div>
                    </div>
                    <div class="col row border-right">
                      <div class="col border-right" align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${item2.result[index3][
                              $q.sessionStorage.getItem("y") + 541
                            ] || ""}`
                          }}</span>
                        </div>
                      </div>
                      <div class="col border-right" align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${item2.result[index3][
                              $q.sessionStorage.getItem("y") + 542
                            ] || ""}`
                          }}</span>
                        </div>
                      </div>
                      <div class="col " align="center">
                        <div class="q-pa-xs">
                          <span>{{
                            `${item2.result[index3][
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
                      <span>{{ `${item2.successRate[index3] || ""}` }}</span>
                    </div>
                    <div class="col-1 " style="width:50px;" align="center">
                      <div class="q-pa-xs"></div>
                      <span>{{ `${item2.score[index3] || ""}` }}</span>
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
          title: "7.1 การบรรลุผลลัพธ์ตามตัวชี้วัดตามพันธกิจ",
          no: 1,
          status: -1, //-1 ยังไม่ประเมิน
          avgScore: -1,
          question: [
            {
              avgScore: -1,
              subNo: 1,
              headerTextUpper: "1. ตัววัดตามภารกิจ <b>(จำเป็น)</b> ",
              headerTextLower:
                "ตัวชี้วัดของการบรรลุผลลัพธ์ตามพันธกิจหรือภารกิจของส่วนราชการตามที่ระบุไว้ (Function base, Area base)",
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
              headerTextUpper: `2. ตัววัดตามนโยบายและแผนรัฐบาล`,
              headerTextLower:
                "ตัวชี้วัดของการบรรลุผลลัพธ์ตามนโยบายและแผนรัฐบาล (Agenda base)",
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
              headerTextUpper: `3. การดำเนินการด้านกฏหมาย`,
              headerTextLower: "ตัวชี้วัดของการดำเนินการด้านกฏหมาย",
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
              headerTextUpper: `4. ตัววัดของการบรรลุตามแผนยุทธศาสตร์ <b>(จำเป็น)</b>`,
              headerTextLower: "ตัวชี้วัดของการบรรลุผลตามแผนยุทธศาสตร์",
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
              headerTextUpper: `5. การบรรลุตามยุทธศาสตร์อื่นๆ เช่น การบรรลุตัววัดร่วม การจัดอันดับต่างๆ`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดของการควบคุมยุทธศาสตร์อื่นๆ ตามนโยบายของส่วนราชการหรือของรัฐบาล เช่น ตัววัดร่วม ตัววัดที่แสดง<br>ถึงการปรับปรุงระดับในการจัดอันดับ โดยองค์กายภายนอกและประเทศในด้านต่างๆ เป็นต้น",
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
              headerTextUpper: `1. ความพึงพอใจของผู้รับบริการและผู้มีส่วนได้ส่วนเสีย <b>(จำเป็น)</b>`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดของการบรรลุผลลัพธ์ของความพึงพอใจของผู้รับบริการและผู้มีส่วนได้ส่วนเสียจากการใช้บริการของส่วนราชการ`,
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
              headerTextUpper: `2. ผลของความผูกพันและการให้ความร่วมมือ <b>(จำเป็น)</b>`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่แสดงออกถึงความผูกพันและการให้ความร่วมมือจากประชาชนและผู้เข้ามารับการบริการจากส่วนราชการ`,
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
              headerTextUpper: `3. ผลการดำเนินการด้านโครงการประชารัฐ`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่แสดงการบรรลุผลหรือความสำเร็จของการดำเนินการด้านโครงการประชารัฐ เช่น ยอดการ<br>จำหน่ายสินค้าภายใต้โครงการประชารัฐ`,
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
              headerTextUpper: `4. ผลจากการปรับเปลี่ยนด้านการบริการที่เกิดประโยชน์ต่อผู้รับบริการที่สามารถวัดผลได้`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่สะท้อนถึงผลจากการปรับเปลี่ยนด้านการบริการ และนวัตกรรมการบริการที่เกิดประโยชน์ต่อผู้รับบริการที่สามารถวัดผลได้`,
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
              headerTextUpper: `5. การแก้ไขเรื่องร้องเรียน`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดที่สะท้อนถึงการจัดการข้อร้องเรียนที่ได้รับการแก้ไขอย่างรวดเร็วและเกิดผล",
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
              headerTextUpper: `1. จำนวนนวัตกรรมต่อบุคลากร <b>(จำเป็น)</b>`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดของการพัฒนานวัตกรรมที่เกิดจากบุคลากรของส่วนราชการ",
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
              headerTextUpper: `2. การเรียนรู้และผลการพัฒนา <b>(จำเป็น) </b>
`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดของการเรียนรู้และผลการพัฒนาบุคลากรของส่วนราชการ",
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
              headerTextUpper: `3. ความก้าวหน้าและการก้าวขึ้นสู่ตำแหน่งตามแผน`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดที่แสดงถึงความก้าวหน้าของบุคลากรและความก้าวหน้าขึ้นสู่ตำแหน่งตามแผน",
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
              headerTextUpper: `4. จำนวนบุคลากรที่ได้รับการแต่งตั้งให้ไปร่วมในภาคีเครือข่ายภายนอกทั้งระดับชาติและนานาชาติ`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่แสดงถึงบุคลากรของส่วนราชการที่ได้รับการแต่งตั้งให้ไปร่วมในภาคีเครือข่ายภายนอกทั้งระดับชาติและนานาชาติ`,
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
              headerTextUpper: `5. จำนวนบุคลากรที่อาสาสมัครในโครงการที่ตอบสนองนโยบายหน่วยงาน`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่แสดงถึงบุคลากรของส่วนราชการไปเป็นอาสาสมัครในโครงการที่ตอบสนองนโยบายหน่วยงาน`,
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
              headerTextUpper: `1. จำนวนรางวัลที่ได้รับจากภายนอก <b>(จำเป็น)</b>`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการที่ได้รับรางวัลจากหน่วยงานภายนอกที่แสดงถึงความสำเร็จในการปรับปรุงกระบวนการ`,
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
              headerTextUpper: `2. จำนวน Best practice <b>(จำเป็น) </b>`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการที่เป็น Best practice",
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
              headerTextUpper: `3. จำนวนรางวัลที่ได้รับจากหน่วยงานระดับกรม / ระดับกระทรวง`,
              numberOfIndicators: 1,
              headerTextLower: `
ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการได้แก่<br>
        &nbsp;&nbsp;&nbsp;- รางวัลระดับกรม เป็นรางวัลที่ส่วนราชการระดับกรมมอบให้หน่วยงานย่อยในสังกัด<br>
        &nbsp;&nbsp;&nbsp;- รางวัลระดับกระทรวง เป็นรางวัลที่มอบให้กับส่วนราชการระดับกรมในสังกัด`,
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
              headerTextUpper: `4. การจัดอันดับในระดับนานาชาติ`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดที่แสดงถึงสำเร็จของการแข่งขัน โดยได้รับการจัดอันดับในระดับนานาชาติ",
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
              headerTextUpper: `5. จำนวนบุคลากรที่ได้รับการยกย่องจากภายนอก`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่แสดงถึงสำเร็จของการเป็นต้นแบบของส่วนราชการ โดยมีบุคลากรของตนเองได้รับการยกย่องจากภายนอก`,
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
              headerTextUpper: `1. การบรรลุผลของตัววัดร่วม (กระบวนการที่ดำเนินการร่วมกันหลายหน่วยงาน)<b>(จำเป็น)</b>`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดของการบรรลุผลลัพธ์การบรรลุผลของตัววัดร่วม ในการมีกระบวนการที่ดำเนินการข้ามหลายหน่วยงานของส่วนราชการ (Area base)`,
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
              headerTextLower: "",
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
              headerTextUpper: `3. ตัววัดผลกระทบจากการดำเนินการที่มีต่อสังคม`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่สะท้อนถึงผลกระทบจากการดำเนินการที่มีต่อสังคม`,
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
              headerTextUpper: `4. ตัววัดผลกระทบจากการดำเนินการด้านสาธารณสุข`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่สะท้อนถึงผลกระทบจากการดำเนินการที่มีต่อด้านสาธารณสุข`,
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
              headerTextUpper: `5. ตัววัดผลกระทบจากการดำเนินการที่มีต่อด้านสิ่งแวดล้อม`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดที่สะท้อนถึงผลกระทบจากการดำเนินการที่มีต่อด้านสิ่งแวดล้อม`,
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
              headerTextUpper: `1. การลดต้นทุน (ทั้งในระดับกระบวนการที่เกิดจากการปรับปรุงงาน และการนำเทคโนโลยีดิจิทัลมาใช้) <b>(จำเป็น)</b>`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดของการลดต้นทุนทั้งในระดับกระบวนการอันเกิดจากการปรับปรุงงาน และการนำเทคโนโลยีดิจิทัลมาใช้เพื่อลดต้นทุนในการทำงาน`,
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
              headerTextUpper: `2. จำนวนนวัตกรรมของการปรับปรุงกระบวนการ`,
              numberOfIndicators: 1,
              headerTextLower: "ตัวชี้วัดของนวัตกรรมการปรับปรุงกระบวนการ",
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
              headerTextUpper: `3. ผลการปรับปรุงจากการใช้เทคโนโลยีดิจิทัล <b>(จำเป็น)</b>`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดผลลัพธ์ของการปรับปรุงกระบวนการ และการบริการจากการใช้เทคโนโลยีดิจิทัล ทั้งทางตรงและทางอ้อม",
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
              headerTextUpper: `4. ประสิทธิผลของการบรรเทาผลกระทบด้านภัยพิบัติต่างๆ`,
              numberOfIndicators: 1,
              headerTextLower:
                "ตัวชี้วัดที่แสดงถึงประสิทธิผลของการบรรเทาผลกระทบด้านภัยพิบัติต่างๆ",
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
              headerTextUpper: `5. นวัตกรรมการปรับปรุงด้านนโยบาย กฏระเบียบและกฏหมาย`,
              numberOfIndicators: 1,
              headerTextLower: `ตัวชี้วัดของนวัตกรรมการปรับปรุงด้านนโยบาย กฏระเบียบ และกฏหมาย`,
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
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
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

  .page-A4 {
    box-shadow: 0 0 0px 0px rgba(0, 0, 0, 0);
  }
}
</style>
