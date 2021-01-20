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

      <!-- Content -->
      <div class="q-py-md">
        <div
          style="background-color:#020b3b;border-radius:5px 5px 0px 00px"
          class="text-white q-pa-sm text-body1"
        >กอง / สำนัก</div>

        <div
          class="q-pa-md"
          v-for="(office,indexOffice) in officeData"
          :key="indexOffice"
          :class="{'bg-grey-4' : indexOffice%2 == 0}"
        >
          <div>{{ office.office }}</div>
          <div class="row justify-center">
            <div
              style="width:11%"
              class="q-pa-xs"
              v-for="(item,index) in office.categoryGroup"
              :key="index"
            >
              <div
                @click="toPage(office,index)"
                class="row relative-position cursor-pointer"
                v-ripple
                style="border:1px solid"
              >
                <div align="center" class="col-12 q-py-sm">{{ item.name }} </div>
                <div
                  class="col-12 text-white"
                  align="center"
                  :class="item.status == 'ยังไม่ประเมิน' ?'my-red' : item.status == 'ประเมินแล้ว' ? 'my-green' : 'my-yellow'"
                >{{ item.status }}</div>
              </div>
            </div>
          </div>

          <div class="row" style="padding-left:6px">
            <div style="width:22%" align="center" class="q-pa-xs">
              <div class="relative-position">
                <div class="row">
                  <div class="col self-center relative-position">
                    <div
                      class="absolute"
                      style="width:5px;height:5px;background-color:black;top:-2px"
                    ></div>
                    <div style="width:100%;height:1px" class="bg-black">&nbsp;</div>
                  </div>
                  <div style="width:100px" @click="resetAssessment(office,1)">
                    <span
                      style="border:1px solid;text-decoration:underline"
                      class="q-px-sm cursor-pointer"
                    >ยกเลิกการส่ง</span>
                  </div>
                  <div class="col self-center relative-position">
                    <div
                      class="absolute-right"
                      style="width:5px;height:5px;background-color:black;top:-2px"
                    ></div>
                    <div style="width:100%;height:1px" class="bg-black">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="width:33%" align="center" class="q-pa-xs">
              <div class="relative-position">
                <div class="row">
                  <div class="col self-center relative-position">
                    <div
                      class="absolute"
                      style="width:5px;height:5px;background-color:black;top:-2px"
                    ></div>
                    <div style="width:100%;height:1px" class="bg-black">&nbsp;</div>
                  </div>
                  <div style="width:100px" @click="resetAssessment(office,2)">
                    <span
                      style="border:1px solid;text-decoration:underline"
                      class="q-px-sm cursor-pointer"
                    >ยกเลิกการส่ง</span>
                  </div>
                  <div class="col self-center relative-position">
                    <div
                      class="absolute-right"
                      style="width:5px;height:5px;background-color:black;top:-2px"
                    ></div>
                    <div style="width:100%;height:1px" class="bg-black">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="width:11%" align="center" class="q-pa-xs relative-position">
              <div style="width:100px;margin-left:5px" @click="resetAssessment(office,3)">
                <span
                  style="border:1px solid;text-decoration:underline"
                  class="q-px-sm cursor-pointer"
                >ยกเลิกการส่ง</span>
              </div>
            </div>
            <div style="width:33%;margin-left:4px" align="center" class="q-pa-xs relative-position">
              <div class="relative-position">
                <div class="row">
                  <div class="col self-center relative-position">
                    <div
                      class="absolute"
                      style="width:5px;height:5px;background-color:black;top:-2px"
                    ></div>
                    <div style="width:100%;height:1px" class="bg-black">&nbsp;</div>
                  </div>
                  <div style="width:100px;" @click="resetAssessment(office,4)">
                    <span
                      style="border:1px solid;text-decoration:underline"
                      class="q-px-sm cursor-pointer"
                    >ยกเลิกการส่ง</span>
                  </div>
                  <div class="col self-center relative-position">
                    <div
                      class="absolute-right"
                      style="width:5px;height:5px;background-color:black;top:-2px"
                    ></div>
                    <div style="width:100%;height:1px" class="bg-black">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <table>
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
            <td align="center" class="q-pa-sm">{{ item.send_assessment_date }}</td>
            <td align="center" class="q-pa-sm" v-html="item.office_score"></td>
            <td align="center" class="q-pa-sm" v-html="item.assessor_score"></td>
            <td align="center" class="q-pa-sm">
              <u class="cursor-pointer" @click="resetAssessment(item)">ยกเลิกการส่ง</u>
            </td>
            <td align="center" class="q-pa-sm">
              <u @click="routeToDetails(item)" class="cursor-pointer">รายละเอียด</u>
            </td>
          </tr>
        </table>-->
      </div>
    </div>
    <q-dialog v-model="isShowDialogConfirmReset">
      <q-card>
        <q-card-section align="center">
          <span style="font-size:30px">ยกเลิกการส่ง</span>

          <div class="font-18 q-py-md">
            คุณต้องการยกเลิกการส่งของ
            <span
              class="text-black text-weight-bolder"
            >{{ officeNameTemp }}</span>ใช่หรือไม่?
          </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-md">
          <q-btn style="width:150px" v-close-popup label="ยกเลิก"></q-btn>
          <q-btn style="width:150px" color="teal" label="ตกลง" @click="cancelAssessment()"></q-btn>
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
    myFooter,
  },
  data() {
    return {
      yearOptions: [],
      yearSelected: "",
      officeData: "",
      isShowDialogConfirmReset: false,
      officeNameTemp: "",
      activeUserId: "",
      tempDeleteMode: "",
    };
  },
  methods: {
    async cancelAssessment() {
      let postData = {
        userId: this.activeUserId,
        year: this.$q.sessionStorage.getItem("y"),
        mode: this.tempDeleteMode,
      };
      let url = this.apiPath + "resetAssessmentStepper.php";
      let response = await Axios.post(url, postData);

      this.$q.notify({
        message: "ยกเลิกการส่งสำเร็จ",
        position: "bottom",
        color: "secondary",
      });
      this.isShowDialogConfirmReset = false;
      this.getAssessmentData();
    },
    toPage(officeData, mode) {



 

      if(officeData.categoryGroup[mode].status == "ยังไม่ประเมิน")
      {
        this.notify("ยังไม่มีการประเมิน","red")
return
      }
      



      this.$q.sessionStorage.set("aid", officeData.userId);
      if (mode == 0) {
        // OP
      } else if (mode == 1) {
        // หมวด1-6
      } else if (mode == 2) {
        // หมวด7 GAP

        // this.$router.push("/assessor/plan1y/" + officeData.userId);

        this.$router.push("/assessor/category7GAP/" + officeData.userId);
      } else if (mode == 3) {
        // แผน 1 ปี
        this.$router.push("/assessor/plan1y/" + officeData.userId);
      } else if (mode == 4) {
        // แผน 3 ปี
        this.$router.push("/assessor/plan3y/" + officeData.userId);
      } else if (mode == 6) {
        // ติดตาม 6 เดือน
      } else if (mode == 7) {
        // หมวด 7
      } else if (mode == 8) {
        // ติดตาม 12 เดือน
      } else if (mode == 9) {
        // สรุป 12 เดือน
      }
    },
    routeToDetails(item) {
      if (item.send_assessment_date == "-") {
        this.$q.notify({
          message: "ยังไม่มีการส่งแบบประเมินเข้ามาในระบบ",
          color: "red",
        });
      } else {
        this.$q.sessionStorage.set("aid", item.userId);
        this.$q.sessionStorage.set("off", item.office);
        this.$router.push("/assessor/stepMain/" + item.userId);
      }
    },
    toDetails(userId) {
      this.$router.push("/assessor/score/" + userId);
    },
    async confirmReset() {
      let postData = {
        user_id: this.activeUserId,
        year: this.$q.sessionStorage.getItem("y"),
      };
      const url = this.apiPath + "/resetAssessment.php";
      let data = await Axios.post(url, postData);

      this.$q.notify({
        message: "ยกเลิกการส่งสำเร็จ",
        position: "bottom",
        color: "secondary",
      });
      this.isShowDialogConfirmReset = false;
      this.getAssessmentData();
    },
    resetAssessment(item, mode) {
      if (item.send_assessment_date == "-") {
        this.$q.notify({
          message: "ยังไม่มีการส่งแบบประเมินเข้ามาในระบบ",
          color: "red",
        });
      } else {
        this.isShowDialogConfirmReset = true;
        this.officeNameTemp = item.office;
        this.tempDeleteMode = mode;
        this.activeUserId = item.userId;
      }
    },

    async getAssessmentData() {
      this.loadingShow();
      const url = this.apiPath + "user/getAllUser.php";
      let data = await Axios.get(url);

      const getAssessmentAPI = this.apiPath + "getAssessmentLog.php";
      let postAssessmentData = {
        year: this.yearSelected - 543,
      };
      let assessmentLog = await Axios.post(
        getAssessmentAPI,
        postAssessmentData
      );

      assessmentLog = assessmentLog.data;

      data = data.data;

      let temp = [];
      let counter = 0;
      data.forEach(async (element, index) => {
        const apiCheckStatus =
          this.apiPath + "user/getAssessmentStepperLog.php";
        let postCheckStatusData = {
          user_id: element.id,
          year: this.yearSelected - 543,
        };
        let responseCheck = await Axios.post(
          apiCheckStatus,
          postCheckStatusData
        );
        let responseData = responseCheck.data[0];
        counter++;

        const convertStatusToText = (status) => {
          let result;
          if (status == "0") {
            result = "ยังไม่ประเมิน";
          } else if (status == "1") {
            result = "รอผลประเมิน";
          } else if (status == "2") {
            result = "ประเมินแล้ว";
          }
          return result;
        };

        console.log(responseData)

        let categoryGroup = [
          { name: "ลักษณะองค์กร", status: "ยังไม่ประเมิน" },
          { name: "หมวด 1-6", status: "ยังไม่ประเมิน" },
          { name: "หมวด 7 GAP", status: "ยังไม่ประเมิน" },
          { name: "แผน 1 ปี", status: "ยังไม่ประเมิน" },
          { name: "แผน 3 ปี", status: "ยังไม่ประเมิน" },
          { name: "ติดตาม 6 เดือน", status: "ยังไม่ประเมิน" },
          { name: "หมวด7", status: "ยังไม่ประเมิน" },
          { name: "ติดตาม 12 เดือน", status: "ยังไม่ประเมิน" },
          { name: "สรุป 12 เดือน", status: "ยังไม่ประเมิน" },
        ];

        if (responseData) {
          categoryGroup = [
            {
              name: "ลักษณะองค์กร",
              status: convertStatusToText(responseData.op),
            },
            {
              name: "หมวด 1-6",
              status: convertStatusToText(responseData.cat1_6),
            },
            {
              name: "หมวด 7 GAP",
              status: convertStatusToText(responseData.cat7_gap),
            },
            {
              name: "แผน 1 ปี",
              status: convertStatusToText(responseData.plan_1y),
            },
            {
              name: "แผน 3 ปี",
              status: convertStatusToText(responseData.plan_3y),
            },
            {
              name: "ติดตาม 6 เดือน",
              status: convertStatusToText(responseData.month_6),
            },
            { name: "หมวด7", status: convertStatusToText(responseData.cat7) },
            {
              name: "ติดตาม 12 เดือน",
              status: convertStatusToText(responseData.month_12),
            },
            {
              name: "สรุป 12 เดือน",
              status: convertStatusToText(responseData.sum_month_12),
            },
          ];
        }

        let filterData = assessmentLog.filter(
          (x) => x.user_id == element.id
        )[0];

        let officeScore = "<span style='color:#E84C93'>ยังไม่ได้ประเมิน</span>";
        let assessorScore =
          "<span style='color:#E84C93'>ยังไม่ได้ประเมิน</span>";
        let assessmentDate = "-";
        if (filterData) {
          officeScore =
            filterData.office_score == "-1"
              ? "<span style='color:#E84C93'>ยังไม่ได้ประเมิน</span>"
              : filterData.office_score;
          assessorScore =
            filterData.assessor_score == "-1"
              ? "<span style='color:#E84C93'>ยังไม่ได้ประเมิน</span>"
              : filterData.assessor_score;
          let getAssessmentDate = filterData.send_assessment_date.split(" ");
          getAssessmentDate = getAssessmentDate[0].split("-");
          assessmentDate =
            getAssessmentDate[2] +
            "/" +
            getAssessmentDate[1] +
            "/" +
            getAssessmentDate[0];

          if (filterData.office_score == "-1") {
            assessmentDate = "-";
          }
        }

        temp.push({
          userId: element.id,
          office: element.office,
          send_assessment_date: assessmentDate,
          office_score: officeScore,
          assessor_score: assessorScore,
          categoryGroup: categoryGroup,
          username: element.username,
        });

        if (counter == data.length) {
          temp.sort((a, b) => (a.username > b.username ? 1 : -1));
          this.officeData = temp;
          this.loadingHide();
        }
      });
    },
  },
  created() {
    this.$q.sessionStorage.remove("off");
    let assessmentYear = this.$q.sessionStorage.getItem("y") + 543;
    this.yearSelected = assessmentYear;
    let tempYear = [];
    for (let i = -2; i < 3; i++) {
      tempYear.push(assessmentYear + i);
    }
    this.yearOptions = tempYear;
    this.getAssessmentData();
  },
};
</script>

<style lang="scss" scoped>
.loop-grey {
  background-color: #eeeeee;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.tr-color {
  background-color: #020b3b;
  color: white;
}
.my-red {
  background-color: #c92a07;
}
.my-yellow {
  background-color: #bb950d;
}
.my-green {
  background-color: #138c6f;
}
</style>
