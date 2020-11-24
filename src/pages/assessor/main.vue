<template>
  <q-page>
    <div style="padding:30px 76px">
      <!-- header -->
      <div class="row items-center justify-between">
        <div style="font-size:36px">ข้อมูลสำหรับการประเมิน</div>
        <div class="font-18">
          <div class="row items-center">
            ข้อมูลปี
            <div class="q-pl-sm">
              <q-select
                style="width:150px"
                dense
                outlined
                :options="yearOptions"
                v-model="yearSelected"
                @input="getAssessmentData()"
              ></q-select>
            </div>
          </div>
        </div>
      </div>

      <div class="q-py-md">
        <table>
          <tr class="tr-color">
            <td align="left" class="q-pa-sm">
              <div class="q-pl-lg">กอง / สำนัก</div>
            </td>
            <td align="center" class="q-pa-sm">วันที่ส่งการประเมิน</td>
            <td align="center" class="q-pa-sm">คะแนนจากหน่วยงาน</td>
            <td align="center" class="q-pa-sm">คะแนนจากคณะกรรมการ</td>
            <td align="center" class="q-pa-sm">ยกเลิกการส่ง</td>
            <td align="center" class="q-pa-sm">รายละเอียด</td>
          </tr>
          <tr v-for="(item, index) in officeData" :key="index">
            <td align="left" class="q-pa-sm">
              <div class="q-pl-lg">{{ item.office }}</div>
            </td>
            <td align="center" class="q-pa-sm">
              {{ item.send_assessment_date }}
            </td>
            <td align="center" class="q-pa-sm" v-html="item.office_score"></td>
            <td
              align="center"
              class="q-pa-sm"
              v-html="item.assessor_score"
            ></td>
            <td align="center" class="q-pa-sm">
              <u class="cursor-pointer" @click="resetAssessment(item)"
                >ยกเลิกการส่ง</u
              >
            </td>
            <td align="center" class="q-pa-sm">
              <u @click="routeToDetails(item)" class="cursor-pointer"
                >รายละเอียด</u
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
    <q-dialog v-model="isShowDialogConfirmReset">
      <q-card>
        <q-card-section align="center">
          <span style="font-size:30px">ยกเลิกการส่ง</span>

          <div class="font-18 q-py-md">
            คุณต้องการยกเลิกการส่งของ {{ officeNameTemp }} ใช่หรือไม่?
          </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-md">
          <q-btn style="width:150px" v-close-popup label="ยกเลิก"></q-btn>
          <q-btn
            style="width:150px"
            color="teal"
            label="ตกลง"
            @click="confirmReset()"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <my-footer></my-footer>
  </q-page>
</template>

<script>
import Axios from "axios";
import myFooter from "../../components/footer";
export default {
  components: {
    myFooter
  },
  data() {
    return {
      yearOptions: [],
      yearSelected: "",
      officeData: "",
      isShowDialogConfirmReset: false,
      officeNameTemp: "",
      activeUserId: ""
    };
  },
  methods: {
    routeToDetails(item) {
      console.log(item)
      if (item.send_assessment_date == "-") {
        this.$q.notify({
          message: "ยังไม่มีการส่งแบบประเมินเข้ามาในระบบ",
          color: "red"
        });
      } else {
        this.$q.sessionStorage.set("aid", item.userId);
        this.$q.sessionStorage.set('off',item.office)
        this.$router.push("/assessor/stepMain/" + item.userId);
      }
    },
    toDetails(userId) {
      this.$router.push("/assessor/score/" + userId);
    },
    async confirmReset() {
      let postData = {
        user_id: this.activeUserId,
        year: this.$q.sessionStorage.getItem("y")
      };
      const url = this.apiPath + "/resetAssessment.php";
      let data = await Axios.post(url, postData);

      this.$q.notify({
        message: "ยกเลิกการส่งสำเร็จ",
        position: "bottom",
        color: "secondary"
      });
      this.isShowDialogConfirmReset = false;
    },
    resetAssessment(item) {
      this.isShowDialogConfirmReset = true;
      this.officeNameTemp = item.office;
      this.activeUserId = item.userId;
    },

    async getAssessmentData() {
      this.loadingShow();
      const url = this.apiPath + "user/getAllUser.php";
      let data = await Axios.get(url);
      data = data.data.sort((a, b) => (a.username > b.username ? 1 : -1));

      const getAssessmentAPI = this.apiPath + "getAssessmentLog.php";
      let postAssessmentData = {
        year: this.yearSelected - 543
      };
      let assessmentLog = await Axios.post(
        getAssessmentAPI,
        postAssessmentData
      );

      assessmentLog = assessmentLog.data;

      let temp = [];
      data.forEach((element, index) => {
        let filterData = assessmentLog.filter(x => x.user_id == element.id)[0];

        let officeScore = "<span style='color:#E84C93'>ยังไม่ได้ประเมิน</span>";
        let assessorScore =
          "<span style='color:#E84C93'>ยังไม่ได้ประเมิน</span>";
        let assessmentDate = "-";
        if (filterData) {
          officeScore = filterData.office_score;
          assessorScore = filterData.assessor_score;
          let getAssessmentDate = filterData.send_assessment_date.split(" ");
          getAssessmentDate = getAssessmentDate[0].split("-");
          assessmentDate =
            getAssessmentDate[2] +
            "/" +
            getAssessmentDate[1] +
            "/" +
            getAssessmentDate[0];
          if (assessorScore == "-1") {
            assessorScore =
              "<span style='color:#E84C93'>ยังไม่ได้ประเมิน</span>";
          }
        }
        temp.push({
          userId: element.id,
          office: element.office,
          send_assessment_date: assessmentDate,
          office_score: officeScore,
          assessor_score: assessorScore
        });
      });
      this.officeData = temp;
      this.loadingHide();
    }
  },
  created() {
       this.$q.sessionStorage.remove("off")
    let assessmentYear = this.$q.sessionStorage.getItem("y") + 543;
    this.yearSelected = assessmentYear;
    let tempYear = [];
    for (let i = -2; i < 3; i++) {
      tempYear.push(assessmentYear + i);
    }
    this.yearOptions = tempYear;
    this.getAssessmentData();
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
.tr-color {
  background-color: #020b3b;
  color: white;
}
</style>
