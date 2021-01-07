<template>
  <div class="">
    <div class="float-right q-pa-md">
      <div class="bg-red"></div>

      <q-btn
        class="printBtn"
        icon="fas fa-print"
        color="pink-4"
        round
        @click="printBtn()"
      ></q-btn>
    </div>
    <!-- page1 -->
    <div :class="$route.name == 'printAll' ? 'a4-portrait-all' : 'a4-portrait'">
      <div class="absolute-right text-h7 printDate">
        {{ printDate }}
      </div>
      <div align="center" class="q-py-sm relative-position">
        <div class="text-h6">
          {{ $q.sessionStorage.getItem("office") }}
        </div>
      </div>
      <div style="height: 15px"></div>

      <div
        align="left"
        class="b-color text-white q-py-sm q-pl-md"
        style="width: 80%; font-size: 18px"
      >
        ลักษณะสำคัญขององค์กร
      </div>

      <div class="q-pt-md">
        <span class="font-24 q-pl-lg">ลักษณะองค์กร</span>
        <p class="q-pl-lg">
          ลักษณะสำคัญขององค์กร คือ ภาพรวมของส่วนราชการ
          สิ่งสำคัญที่มีอิทธิผลต่อวิธีการดำเนินงาน
          และความท้าทายสำคัญที่ส่วนราชการเผชิญอยู่สำหรับการดำเนินการของส่วนราชการ
          ที่ต้องการ ตอบสนอง การบริหาจัดการเพื่อนำไปสู่การเป็นระบบราชการ 4.0
          ควรพิจารณาในรายละเอียดดังนี้
        </p>
      </div>

      <!-- ข้อ1 -->
      <div
        align="left"
        class="text-white q-py-sm q-pl-md"
        style="width: 80%; font-size: 18px;background-color:#757575"
      >
        1. ลักษณะองค์กร: คุณลักษณะสำคัญของส่วนราชการคืออะไร
      </div>
      <!-- ก -->

      <table>
        <thead>
          <tr>
            <td>
              <div style="padding:10px"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in q1A" :key="index">
            <td>
              <div
                v-if="index == 0"
                style="margin-left:40px;margin-top:20px"
                class="q-pb-lg"
              >
                <div
                  align="left"
                  class="text-black q-py-sm q-pl-md"
                  style="width: 80%; font-size: 18px;background-color:#FFD494"
                >
                  ก. สภาพแวดล้อมของส่วนราชการ
                </div>
              </div>
              <div style="margin-left:50px" class="q-pb-lg">
                <div class="q-px-lg ">
                  <span v-if="index == 0"
                    >(1) พันธกิจหรือหน้าที่ตามกฏหมาย
                  </span>
                  <span v-else-if="index == 1">(2) วิสัยทัศน์และค่านิยม</span>
                  <span v-else-if="index == 2">(3) ลักษณะโดยรวมของบุคลากร</span>
                  <span v-else-if="index == 3">(4) สินทรัพย์</span>
                  <span v-else-if="index == 4"
                    >(5) กฏหมาย กฏระเบียบและข้อบังคับ</span
                  >
                  &nbsp;
                  <span
                    style="border:1px solid"
                    class="q-px-sm"
                    v-if="item.pdf_file"
                    >มีเอกสารแนบ</span
                  >
                </div>

                <div class="q-px-lg" v-html="item.text"></div>
                <div class="q-px-lg q-py-xs">
                  <q-separator></q-separator>
                </div>
                <div
                  class="q-px-lg"
                  v-html="'ข้อเสนอแนะ : ' + item.suggesstion"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td>
              <div style="padding:10px"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in q1B" :key="index">
            <td class="">
              <div
                v-if="index == 0"
                style="margin-left:40px;margin-top:20px"
                class="q-pb-lg"
              >
                <div
                  align="left"
                  class="text-black q-py-sm q-pl-md"
                  style="width: 80%; font-size: 18px;background-color:#FFD494"
                >
                  ข. สภาพแวดล้อมของส่วนราชการ
                </div>
              </div>
              <div style="margin-left:50px" class="q-pb-lg">
                <div class="q-px-lg">
                  <span v-if="index == 0">(1) โครงสร้างองค์กร</span>
                  <span v-else-if="index == 1"
                    >(2) ผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</span
                  >
                  <span v-else-if="index == 2"
                    >(3)
                    ส่วนราชการหรือองค์กรที่เกี่ยวข้องกันในการให้บริการหรือส่งมอบงานต่อกัน</span
                  >
                  &nbsp;
                  <span
                    style="border:1px solid"
                    class="q-px-sm"
                    v-if="item.pdf_file"
                    >มีเอกสารแนบ</span
                  >
                </div>
                <div class="q-px-lg" v-html="item.text"></div>
                <div class="q-px-lg q-py-xs">
                  <q-separator></q-separator>
                </div>
                <div
                  class="q-px-lg"
                  v-html="'ข้อเสนอแนะ : ' + item.suggesstion"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- ข้อ2 -->

      <div
        align="left"
        class="text-white q-py-sm q-pl-md"
        style="width: 80%; font-size: 18px;background-color:#757575"
      >
        2. สภาวการณ์ขององค์กร: สภาวการณ์เชิงยุทธศาสตร์ของส่วนราชการเป็นเช่นใด?
      </div>
      <!-- ก -->

      <table>
        <thead>
          <tr>
            <td>
              <div style="padding:10px"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in q2A" :key="index">
            <td>
              <div
                v-if="index == 0"
                style="margin-left:40px;margin-top:20px"
                class="q-pb-lg"
              >
                <div
                  align="left"
                  class="text-black q-py-sm q-pl-md"
                  style="width: 80%; font-size: 18px;background-color:#FFD494"
                >
                  ก. สภาพแวดล้อมของส่วนราชการ
                </div>
              </div>
              <div style="margin-left:50px" class="q-pb-lg">
                <div class="q-px-lg">
                  <span v-if="index == 0">(1) พันธกิจหรือหน้าที่ตามกฏหมาย</span>
                  <span v-else-if="index == 1">(2) วิสัยทัศน์และค่านิยม</span>
                  <span v-else-if="index == 2">(3) ลักษณะโดยรวมของบุคลากร</span>
                  <span v-else-if="index == 3">(4) สินทรัพย์</span>
                  <span v-else-if="index == 4"
                    >(5) กฏหมาย กฏระเบียบและข้อบังคับ</span
                  >
                  &nbsp;
                  <span
                    style="border:1px solid"
                    class="q-px-sm"
                    v-if="item.pdf_file"
                    >มีเอกสารแนบ</span
                  >
                </div>
                <div class="q-px-lg" v-html="item.text"></div>
                <div class="q-px-lg q-py-xs">
                  <q-separator></q-separator>
                </div>
                <div
                  class="q-px-lg"
                  v-html="'ข้อเสนอแนะ : ' + item.suggesstion"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td>
              <div style="padding:10px"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in q2B" :key="index">
            <td>
              <div
                v-if="index == 0"
                style="margin-left:40px;margin-top:20px"
                class="q-pb-lg"
              >
                <div
                  align="left"
                  class="text-black q-py-sm q-pl-md"
                  style="width: 80%; font-size: 18px;background-color:#FFD494"
                >
                  ข. สภาพแวดล้อมของส่วนราชการ
                </div>
              </div>

              <div style="margin-left:50px" class="q-pb-lg">
                <div class="q-px-lg">
                  <span v-if="index == 0">(1) โครงสร้างองค์กร</span>
                  <span v-else-if="index == 1"
                    >(2) ผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</span
                  >
                  <span v-else-if="index == 2"
                    >(3)
                    ส่วนราชการหรือองค์กรที่เกี่ยวข้องกันในการให้บริการหรือส่งมอบงานต่อกัน</span
                  >
                  &nbsp;
                  <span
                    style="border:1px solid"
                    class="q-px-sm"
                    v-if="item.pdf_file"
                    >มีเอกสารแนบ</span
                  >
                </div>
                <div class="q-px-lg" v-html="item.text"></div>
                <div class="q-px-lg q-py-xs">
                  <q-separator></q-separator>
                </div>
                <div
                  class="q-px-lg"
                  v-html="'ข้อเสนอแนะ : ' + item.suggesstion"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td>
              <div style="padding:10px"></div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in q2C" :key="index">
            <td>
              <div
                v-if="index == 0"
                style="margin-left:40px;margin-top:20px"
                class="q-pb-lg"
              >
                <div
                  align="left"
                  class="text-black q-py-sm q-pl-md"
                  style="width: 80%; font-size: 18px;background-color:#FFD494"
                >
                  ค. ระบบการปรับปรุงผลดำเนินการ
                </div>
              </div>

              <div style="margin-left:50px" class="q-pb-lg">
                <div class="q-px-lg">
                  <span v-if="index == 0"
                    >(1)
                    ความท้าทายเชิงยุทธศาสตร์และความได้เปรียบเชิงยุทธศาสตร์</span
                  >
                </div>
                <div class="q-px-lg" v-html="item.text"></div>
                <div class="q-px-lg q-py-xs">
                  <q-separator></q-separator>
                </div>
                <div
                  class="q-px-lg"
                  v-html="'ข้อเสนอแนะ : ' + item.suggesstion"
                ></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="break"></div>
    </div>
    <!-- end page1 -->

    <!-- start next -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      text: "hello world \n how are you",
      q1A: "",
      q1B: "",
      q2A: "",
      q2B: "",
      q2C: "",
      printDate: "",
      temp: "",
      // Emit Data Status
      status: "none",
      isDelete: false,

      // Environment
      environmentCount: 0,
      isEnvironmentDialog1: false,
      inputEnvironment1: "",
      inputEnvironment1S: "",
      inputEnvironmentPDF1: null,

      isEnvironmentDialog2: false,
      inputEnvironment2: "",
      inputEnvironment2S: "",
      inputEnvironmentPDF2: null,

      isEnvironmentDialog3: false,
      inputEnvironment3: "",
      inputEnvironment3S: "",
      inputEnvironmentPDF3: null,

      isEnvironmentDialog4: false,
      inputEnvironment4: "",
      inputEnvironment4S: "",
      inputEnvironmentPDF4: null,

      isEnvironmentDialog5: false,
      inputEnvironment5: "",
      inputEnvironment5S: "",
      inputEnvironmentPDF5: null,

      // Relation
      isRelationDialog1: false,
      inputRelation1: "",
      inputRelation1S: "",
      inputRelationPDF1: null,

      isRelationDialog2: false,
      inputRelation2: "",
      inputRelation2S: "",
      inputRelationPDF2: null,

      isRelationDialog3: false,
      inputRelation3: "",
      inputRelation3S: "",
      inputRelationPDF3: null,

      // Competition Environment
      isCompetitionEnvironmentDialog1: false,
      inputCompetitionEnvironment1: "",
      inputCompetitionEnvironment1S: "",
      inputCompetitionEnvironmentPDF1: null,

      isCompetitionEnvironmentDialog2: false,
      inputCompetitionEnvironment2: "",
      inputCompetitionEnvironment2S: "",
      inputCompetitionEnvironmentPDF2: null,

      isCompetitionEnvironmentDialog3: false,
      inputCompetitionEnvironment3: "",
      inputCompetitionEnvironment3S: "",
      inputCompetitionEnvironmentPDF3: null,

      // Stategy
      isStategyDialog: false,
      inputStategy: "",
      inputStategyS: "",
      inputStategyPDF1: null,

      // Performance improvement system
      isPerformanceSystemDialog: false,
      inputPerformanceSystem: "",
      inputPerformanceSystemS: "",
      inputPerformanceSystemPDF1: null,

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    async getData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory0.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y")
      };
      let data = await Axios.post(url, postData);
      let getData = data.data;

      if (getData) {
        // ข้อ 1 ก 1
        let inputEnvironment1 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "1"
        );

        if (inputEnvironment1.length) {
          this.inputEnvironment1 = inputEnvironment1[0].text;
          this.inputEnvironment1S = inputEnvironment1[0].suggesstion;
          let checkFile1 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile1.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF1 = null;
          } else {
            this.inputEnvironmentPDF1 = [1];
          }
        }

        // ข้อ1 ก2
        let inputEnvironment2 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "2"
        );

        if (inputEnvironment2.length) {
          this.inputEnvironment2 = inputEnvironment2[0].text;
          this.inputEnvironment2S = inputEnvironment2[0].suggesstion;
          let checkFile2 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile2.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF2 = null;
          } else {
            this.inputEnvironmentPDF2 = [1];
          }
        }

        // ข้อ1 ก3
        let inputEnvironment3 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "3"
        );

        if (inputEnvironment3.length) {
          this.inputEnvironment3 = inputEnvironment3[0].text;
          this.inputEnvironment3S = inputEnvironment3[0].suggesstion;
          let checkFile3 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile3.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF3 = null;
          } else {
            this.inputEnvironmentPDF3 = [1];
          }
        }

        // ข้อ1 ก4
        let inputEnvironment4 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "4"
        );
        if (inputEnvironment4.length) {
          this.inputEnvironment4 = inputEnvironment4[0].text;
          this.inputEnvironment4S = inputEnvironment4[0].suggesstion;
          let checkFile4 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "4"
          )[0];

          if (checkFile4.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF4 = null;
          } else {
            this.inputEnvironmentPDF4 = [1];
          }
        }

        // ข้อ1 ก5
        let inputEnvironment5 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "5"
        );
        if (inputEnvironment5.length) {
          this.inputEnvironment5 = inputEnvironment5[0].text;
          this.inputEnvironment5S = inputEnvironment5[0].suggesstion;
          let checkFile5 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "5"
          )[0];

          if (checkFile5.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF5 = null;
          } else {
            this.inputEnvironmentPDF5 = [1];
          }
        }

        // ข้อ1 ข1
        let inputRelation1 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "1"
        );
        if (inputRelation1.length) {
          this.inputRelation1 = inputRelation1[0].text;
          this.inputRelation1S = inputRelation1[0].suggesstion;
          let checkFile6 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile6.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationPDF1 = null;
          } else {
            this.inputRelationPDF1 = [1];
          }
        }

        // ข้อ1 ข2
        let inputRelation2 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "2"
        );

        if (inputRelation2.length) {
          this.inputRelation2 = inputRelation2[0].text;
          this.inputRelation2S = inputRelation2[0].suggesstion;
          let checkFile7 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile7.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationPDF2 = null;
          } else {
            this.inputRelationPDF2 = [1];
          }
        }

        // ข้อ1 ข3
        let inputRelation3 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "3"
        );

        if (inputRelation3.length) {
          this.inputRelation3 = inputRelation3[0].text;
          this.inputRelation3S = inputRelation3[0].suggesstion;
          let checkFile8 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile8.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationPDF3 = null;
          } else {
            this.inputRelationPDF3 = [1];
          }
        }

        // ข้อ2 ก1
        let inputCompetitionEnvironment1 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "1"
        );
        if (inputCompetitionEnvironment1.length) {
          this.inputCompetitionEnvironment1 =
            inputCompetitionEnvironment1[0].text;
          this.inputCompetitionEnvironment1S =
            inputCompetitionEnvironment1[0].suggesstion;
          let checkFile9 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile9.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentPDF1 = null;
          } else {
            this.inputCompetitionEnvironmentPDF1 = [1];
          }
        }

        // ข้อ2 ก2
        let inputCompetitionEnvironment2 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "2"
        );

        if (inputCompetitionEnvironment2.length) {
          this.inputCompetitionEnvironment2 =
            inputCompetitionEnvironment2[0].text;
          this.inputCompetitionEnvironment2S =
            inputCompetitionEnvironment2[0].suggesstion;
          let checkFile10 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile10.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentPDF2 = null;
          } else {
            this.inputCompetitionEnvironmentPDF2 = [1];
          }
        }

        // ข้อ2 ก3
        let inputCompetitionEnvironment3 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "3"
        );
        if (inputCompetitionEnvironment3.length) {
          this.inputCompetitionEnvironment3 =
            inputCompetitionEnvironment3[0].text;
          this.inputCompetitionEnvironment3S =
            inputCompetitionEnvironment3[0].suggesstion;
          let checkFile11 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile11.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentPDF3 = null;
          } else {
            this.inputCompetitionEnvironmentPDF3 = [1];
          }
        }

        // ข้อ2 ข1
        let inputStategy = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ข." &&
            x.category_q_number == "1"
        );
        if (inputStategy.length) {
          this.inputStategy = inputStategy[0].text;
          this.inputStategyS = inputStategy[0].suggesstion;
          let checkFile12 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ข." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile12.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputStategyPDF1 = null;
          } else {
            this.inputStategyPDF1 = [1];
          }
        }

        // ข้อ2 ค1
        let inputPerformanceSystem = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ค." &&
            x.category_q_number == "1"
        );
        if (inputPerformanceSystem.length) {
          this.inputPerformanceSystem = inputPerformanceSystem[0].text;
          this.inputPerformanceSystemS = inputPerformanceSystem[0].suggesstion;
          let checkFile13 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ค." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile13.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputPerformanceSystemPDF1 = null;
          } else {
            this.inputPerformanceSystemPDF1 = [1];
          }
        }
      }

      let sendData = [
        {
          q_number: 1,

          category: "ก.",
          category_q_number: 1,
          text: this.inputEnvironment1.replace(/\n/g, "<br>"),
          pdf_file: this.inputEnvironmentPDF1,
          suggesstion: this.inputEnvironment1S.replace(/\n/g, "<br>")
        },
        {
          q_number: 1,

          category: "ก.",
          category_q_number: 2,
          text: this.inputEnvironment2.replace(/\n/g, "<br>"),
          pdf_file: this.inputEnvironmentPDF2,
          suggesstion: this.inputEnvironment2S.replace(/\n/g, "<br>")
        },
        {
          q_number: 1,

          category: "ก.",
          category_q_number: 3,
          text: this.inputEnvironment3.replace(/\n/g, "<br>"),
          pdf_file: this.inputEnvironmentPDF3,
          suggesstion: this.inputEnvironment3S.replace(/\n/g, "<br>")
        },
        {
          q_number: 1,

          category: "ก.",
          category_q_number: 4,
          text: this.inputEnvironment4.replace(/\n/g, "<br>"),
          pdf_file: this.inputEnvironmentPDF4,
          suggesstion: this.inputEnvironment4S.replace(/\n/g, "<br>")
        },
        {
          q_number: 1,

          category: "ก.",
          category_q_number: 5,
          text: this.inputEnvironment5.replace(/\n/g, "<br>"),
          pdf_file: this.inputEnvironmentPDF5,
          suggesstion: this.inputEnvironment5S.replace(/\n/g, "<br>")
        },
        // หมวด ข
        {
          q_number: 1,

          category: "ข.",
          category_q_number: 1,
          text: this.inputRelation1.replace(/\n/g, "<br>"),
          pdf_file: this.inputRelationPDF1,
          suggesstion: this.inputRelation1S.replace(/\n/g, "<br>")
        },
        {
          q_number: 1,

          category: "ข.",
          category_q_number: 2,
          text: this.inputRelation2.replace(/\n/g, "<br>"),
          pdf_file: this.inputRelationPDF2,
          suggesstion: this.inputRelation2S.replace(/\n/g, "<br>")
        },
        {
          q_number: 1,

          category: "ข.",
          category_q_number: 3,
          text: this.inputRelation3.replace(/\n/g, "<br>"),
          pdf_file: this.inputRelationPDF3,
          suggesstion: this.inputRelation3S.replace(/\n/g, "<br>")
        },
        // เริ่มข้อ2 หมวด ก.
        {
          q_number: 2,

          category: "ก.",
          category_q_number: 1,
          text: this.inputCompetitionEnvironment1.replace(/\n/g, "<br>"),
          pdf_file: this.inputCompetitionEnvironmentPDF1,
          suggesstion: this.inputCompetitionEnvironment1S.replace(/\n/g, "<br>")
        },
        {
          q_number: 2,

          category: "ก.",
          category_q_number: 2,
          text: this.inputCompetitionEnvironment2.replace(/\n/g, "<br>"),
          pdf_file: this.inputCompetitionEnvironmentPDF2,
          suggesstion: this.inputCompetitionEnvironment2S.replace(/\n/g, "<br>")
        },
        {
          q_number: 2,

          category: "ก.",
          category_q_number: 3,
          text: this.inputCompetitionEnvironment3.replace(/\n/g, "<br>"),
          pdf_file: this.inputCompetitionEnvironmentPDF3,
          suggesstion: this.inputCompetitionEnvironment3S.replace(/\n/g, "<br>")
        },
        // เริ่มข้อ2 หมวด ข.
        {
          q_number: 2,

          category: "ข.",
          category_q_number: 1,
          text: this.inputStategy.replace(/\n/g, "<br>"),
          pdf_file: this.inputStategyPDF1,
          suggesstion: this.inputStategyS.replace(/\n/g, "<br>")
        },
        // เริ่มข้อ2 หมวด ค.
        {
          q_number: 2,

          category: "ค.",
          category_q_number: 1,
          text: this.inputPerformanceSystem.replace(/\n/g, "<br>"),
          pdf_file: this.inputPerformanceSystemPDF1,
          suggesstion: this.inputPerformanceSystemS.replace(/\n/g, "<br>")
        }
      ];

      this.q1A = sendData.filter(x => x.q_number == 1 && x.category == "ก.");
      this.q1B = sendData.filter(x => x.q_number == 1 && x.category == "ข.");
      this.q2A = sendData.filter(x => x.q_number == 2 && x.category == "ก.");
      this.q2B = sendData.filter(x => x.q_number == 2 && x.category == "ข.");
      this.q2C = sendData.filter(x => x.q_number == 2 && x.category == "ค.");

      this.loadingHide();
    },

    async getDate() {
      return new Promise(async (a, b) => {
        let date = await Axios.get(this.apiPath + "/getDate.php");
        a(date.data);
      });
    }
  },
  async created() {
    // this.getAssessmentData();
    let printDate = await this.getDate();
    printDate = printDate[0];
    printDate = `${printDate.date} ${this.showMonth(printDate.month)} ${
      printDate.year
    }`;
    this.printDate = printDate;
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

.brr {
  border-right: 1px solid;
}
.b-color {
  background-color: #f29a1c;
}
.t-color {
  color: #f29a1c;
}
.printDate {
  top: 10px;
  right: 80px;
}
.a4-portrait {
  width: 210mm;
  margin: auto;
  background-color: white;
  padding: 0;
}
.a4-portrait-all {
  width: 210mm;
  margin: auto;
}

.bg {
  background-color: #f1f1f1;
  height: 100%;
}
.border-black {
  border: 1px solid;
}
@page {
  size: A4;
  margin: 0;
}
@media print {
  .printBtn {
    visibility: hidden;
  }
  .printDate {
    right: 50px;
    top: 20px;
  }
  .a4-portrait-all {
    width: 297mm;
    padding: 1.5cm;
  }

  .a4-portrait {
    width: 210mm;
  }

  .bg {
    background-color: white;
  }
  /* ... the rest of the rules ... */
}
</style>
