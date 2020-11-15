<template>
  <div class="">
    <div class="float-right q-pa-md">
      <q-btn
        class="printBtn"
        icon="fas fa-print"
        color="pink-4"
        round
        @click="printBtn()"
      ></q-btn>
    </div>
    <!-- page1 -->
    <div class="a4-portrait">
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
        ลักษณะสำคัญองค์การ
      </div>

      <div class="q-pt-md">
        <span class="font-24 q-pl-lg">ลักษณะองค์การ</span>
        <p class="q-pl-lg">
       ลักษณะสำคัญของอค์การ คือ ภาพรวมของส่วนราชการ สิ่งสำคัญที่มีอิทธิผลต่อวิธีการดำเนินงาน และความท้าทายสำคัญที่ส่วนราชการเผชิญอยู่สำหรับการดำเนินการของส่วนราชการ ที่ต้องการ ตอบสนอง การบริหาจัดการเพื่อนำไปสู่การเป็นระบบราชการ 4.0 ควรพิจารณาในรายละเอียดดังนี้
        </p>
      </div>

        <div
        align="left"
        class="text-white q-py-sm q-pl-md"
        style="width: 80%; font-size: 18px;background-color:#757575"
      >
        1. ลักษณะองค์การ: คุณลักษณะสำคัญของส่วนราชการคืออะไร
      </div>


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
      printDate: "",
       temp: "",
      // Emit Data Status
      status: "none",
      isDelete: false,

      // Environment
      environmentCount: 0,
      isEnvironmentDialog1: false,
      inputEnvironment1: "",
      inputEnvironmentPDF1: null,
      inputEnvironmentIMG1: null,

      isEnvironmentDialog2: false,
      inputEnvironment2: "",
      inputEnvironmentPDF2: null,
      inputEnvironmentIMG2: null,

      isEnvironmentDialog3: false,
      inputEnvironment3: "",
      inputEnvironmentPDF3: null,
      inputEnvironmentIMG3: null,

      isEnvironmentDialog4: false,
      inputEnvironment4: "",
      inputEnvironmentPDF4: null,
      inputEnvironmentIMG4: null,

      isEnvironmentDialog5: false,
      inputEnvironment5: "",
      inputEnvironmentPDF5: null,
      inputEnvironmentIMG5: null,

      // Relation
      isRelationDialog1: false,
      inputRelation1: "",
      inputRelationPDF1: null,
      inputRelationIMG1: null,

      isRelationDialog2: false,
      inputRelation2: "",
      inputRelationPDF2: null,
      inputRelationIMG2: null,

      isRelationDialog3: false,
      inputRelation3: "",
      inputRelationPDF3: null,
      inputRelationIMG3: null,

      // Competition Environment
      isCompetitionEnvironmentDialog1: false,
      inputCompetitionEnvironment1: "",
      inputCompetitionEnvironmentPDF1: null,
      inputCompetitionEnvironmentIMG1: null,

      isCompetitionEnvironmentDialog2: false,
      inputCompetitionEnvironment2: "",
      inputCompetitionEnvironmentPDF2: null,
      inputCompetitionEnvironmentIMG2: null,

      isCompetitionEnvironmentDialog3: false,
      inputCompetitionEnvironment3: "",
      inputCompetitionEnvironmentPDF3: null,
      inputCompetitionEnvironmentIMG3: null,

      // Stategy
      isStategyDialog: false,
      inputStategy: "",
      inputStategyPDF1: null,
      inputStategyIMG1: null,

      // Performance improvement system
      isPerformanceSystemDialog: false,
      inputPerformanceSystem: "",
      inputPerformanceSystemPDF1: null,
      inputPerformanceSystemIMG1: null,

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
          let checkFile1 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile1.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG1 = null;
          } else {
            this.inputEnvironmentIMG1 = [1];
          }
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
          let checkFile2 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile2.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG2 = null;
          } else {
            this.inputEnvironmentIMG2 = [1];
          }
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
          let checkFile3 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile3.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG3 = null;
          } else {
            this.inputEnvironmentIMG3 = [1];
          }
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
          let checkFile4 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "4"
          )[0];

          if (checkFile4.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG4 = null;
          } else {
            this.inputEnvironmentIMG4 = [1];
          }
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
          let checkFile5 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "5"
          )[0];

          if (checkFile5.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG5 = null;
          } else {
            this.inputEnvironmentIMG5 = [1];
          }
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
          let checkFile6 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile6.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationIMG1 = null;
          } else {
            this.inputRelationIMG1 = [1];
          }
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
          let checkFile7 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile7.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationIMG2 = null;
          } else {
            this.inputRelationIMG2 = [1];
          }
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
          let checkFile8 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile8.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationIMG3 = null;
          } else {
            this.inputRelationIMG3 = [1];
          }
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
          let checkFile9 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile9.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentIMG1 = null;
          } else {
            this.inputCompetitionEnvironmentIMG1 = [1];
          }
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
          let checkFile10 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile10.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentIMG2 = null;
          } else {
            this.inputCompetitionEnvironmentIMG2 = [1];
          }
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
          let checkFile11 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile11.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentIMG3 = null;
          } else {
            this.inputCompetitionEnvironmentIMG3 = [1];
          }
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
          let checkFile12 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ข." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile12.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputStategyIMG1 = null;
          } else {
            this.inputStategyIMG1 = [1];
          }
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
          let checkFile13 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ค." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile13.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputPerformanceSystemIMG1 = null;
          } else {
            this.inputPerformanceSystemIMG1 = [1];
          }
          if (checkFile13.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputPerformanceSystemPDF1 = null;
          } else {
            this.inputPerformanceSystemPDF1 = [1];
          }
        }
      }

      this.loadingHide();
    },

    async getDate() {
      return new Promise(async (a, b) => {
        let date = await Axios.get(
          "https://api.winner-english.com/pmqa4_0_api/getDate.php"
        );
        a(date.data);
      });
    },
  },
  async created() {
    // this.getAssessmentData();
    let printDate = await this.getDate();
    printDate = printDate[0];
    printDate = `${printDate.date} ${this.showMonth(printDate.month)} ${
      printDate.year
    }`;
    this.printDate = printDate;
    this.getData()
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
tr,
td,
th {
  border: 1px solid;
}

.brr {
  border-right: 1px solid;
}
.b-color {
  background-color: #F29A1C;
}
.t-color {
  color: #F29A1C;
}
.printDate {
  top: 10px;
  right: 80px;
}
.a4-portrait {
  width: 210mm;
  height: 297mm;
  margin: auto;
  background-color: white;
  padding: 0;
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
    top: -20px;
    right: 80px;
  }
  .a4-portrait {
    width: 210mm;
    height: 297mm;
    border:1px solid red
  }

  .bg {
    background-color: white;
  }
  /* ... the rest of the rules ... */
}
</style>
