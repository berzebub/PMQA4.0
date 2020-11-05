<template>
  <q-page class="row justify-center">
    <div
      class="col-10 row self-center q-pa-md"
      v-if="isShowStepper"
      style="width: 850px;"
    >
      <div class="col">
        <!-- Set Top -->
        <div style="padding: 65px 0px 129px 0px;">
          <div
            class="container-border-lock row justify-between relative-position"
          >
            <!-- ลักษณะองค์การ -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/0')"
                >
                  <q-icon size="50px" class="color1" name="fas fa-flag">
                  </q-icon
                ></q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category0 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  <span class="text-no-wrap">ลักษณะองค์การ</span>
                </div>
              </div>
            </div>

            <!-- หมวด 1 -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/1')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-street-view"
                  ></q-icon
                ></q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category1 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  หมวด 1
                </div>
              </div>
            </div>

            <!-- หมวด 2  -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/2')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-map-signs"
                  ></q-icon
                ></q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category2 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  หมวด 2
                </div>
              </div>
            </div>

            <!-- หมวด 3 -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/3')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-users"
                  ></q-icon
                ></q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category3 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  หมวด 3
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Set Bottom -->
        <div style="padding: 129px 0px 65px 0px;">
          <div
            class="container-border-lock row reverse justify-between relative-position"
          >
            <!-- หมวด 4 -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/4')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-chart-line"
                  ></q-icon
                ></q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category4 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  หมวด 4
                </div>
              </div>
            </div>

            <!-- หมวด 5 -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/5')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-users-cog"
                  ></q-icon
                ></q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category5 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  หมวด 5
                </div>
              </div>
            </div>

            <!-- หมวด 6 -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/6')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-project-diagram"
                  ></q-icon
                ></q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category6 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  หมวด 6
                </div>
              </div>
            </div>

            <!-- หมวด 7 -->
            <div class="col-2 relative-position" style="z-index:5;">
              <div class="absolute-center ">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="$router.push('/stepper/7')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-trophy"
                  ></q-icon
                ></q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -150px;"
                align="center"
              >
                <div class="font-18">
                  <div>
                    <q-chip
                      outline
                      square
                      :color="currentStep.category7 == '1' ? 'teal' : ''"
                      class="bg2 color2"
                      size="20px"
                      dense=""
                    >
                      <q-icon
                        name="fas fa-check-circle"
                        class="q-mr-xs"
                        size="22px"
                      ></q-icon>
                      <span class="font-16">เสร็จสิ้น</span>
                    </q-chip>
                  </div>
                  หมวด 7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-2 self-center">
        <div class="q-py-xl">
          <div class="container-border-right"></div>
        </div>
      </div>

      <div class="col-12 q-py-xl" style="margin-top: 100px;" align="center">
        <q-btn
          :disable="!checkSteper"
          style="width: 180px; border-radius: 0px;"
          push
          class="q-mx-md q-py-sm"
          :class="!checkSteper ? 'bg3' : 'bg-white'"
            to="/assessment"
        >
          <q-icon
            :class="!checkSteper ? 'color2' : ''"
            name="fas fa-print"
          
          ></q-icon>
          <span :class="!checkSteper ? 'color2' : ''" class="font-14 q-ml-sm"
            >พิมพ์ผลการประเมิน
          </span>
        </q-btn>
        <q-btn
          :disable="!checkSteper"
          style="width: 180px; border-radius: 0px;"
          push
          class="q-mx-md q-py-sm"
          :class="!checkSteper ? 'bg3' : 'bg-teal text-white'"
          @click='sendAssessment()'
        >
          <q-icon
            :class="!checkSteper ? 'color2' : ''"
            name="far fa-paper-plane"
          ></q-icon>
          <span :class="!checkSteper ? 'color2' : ''" class="font-14 q-ml-sm"
            >ส่งแบบประเมิน</span
          >
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      currentStep: "",
      isShowStepper: false,
      endDate: "",
      assessmentStatus: "",
      endAssessmentDate: "",
      checkSteper : false
    };
  },
  methods: {
   async sendAssessment(){
     const url = this.apiPath + "user/setUserStepperLog.php";
     let postData = {
          category: "category1",
          user_id: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          status: 1, // 1 = finish
          send_status : 1
        };
        let data = await Axios.post(url, postData);
       this.$router.push("/waitingAssessment/0");
    },
    async getStepperLog() {
      this.loadingShow();
      const url = this.apiPath + "user/getStepperLog.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y")
      };
      let data = await Axios.post(url, postData);
let newData = data.data
let checkStatus = false
if(newData){
   checkStatus = [newData.category0,newData.category1,newData.category2,newData.category3,newData.category4,newData.category5,newData.category6,newData.category7]  
   if(checkStatus.every(x => x == '1')){
      this.checkSteper = true
    }else{
      this.checkSteper = false
    }
}
 
  
      if (data.data) {
        this.currentStep = data.data;
      }
      let currentDate = await this.getDate();
      this.checkAssessmentStatus();
    },
    async getAssessmentDate() {
      this.loadingShow();
      let currentDate = await this.getDate();
      const url = this.apiPath + "getAssessmentDate.php";
      let assessmentDate = await Axios.get(url);
      this.assessmentStatus = assessmentDate.data.status;
      let endDate = assessmentDate.data.end_date;
      this.endAssessmentDate = endDate;

      endDate = endDate.split("-");

      this.$q.sessionStorage.set("y", Number(endDate[0]));

      endDate =
        Number(endDate[2]) +
        " " +
        this.convertMonth(Number(endDate[1])) +
        " " +
        (Number(endDate[0]) + 543);

      this.endDate = endDate;
      this.getStepperLog();
    },
    async checkAssessmentStatus() {
      let currentDate = await this.getDate();
      let endDate = this.endAssessmentDate;
      let timeStampEndDate = new Date(endDate).getTime();
      let timeStampCurrentDate = new Date(
        currentDate[0].year - 543,
        Number(currentDate[0].month) - 1,
        currentDate[0].date
      ).getTime();


      if (
        timeStampCurrentDate > timeStampEndDate ||
        this.assessmentStatus == "0"
      ) {
        // หมดเวลา หรือ ปิดประเมินแล้วก่อนเวลา
        if (this.currentStep.send_status == "1") {
          // console.log("หมดเวลา แต่ส่งประเมินแล้ว");
          this.$router.push("/waitingAssessment/2");
        } else {
          // console.log("หมดเวลา ยังไม่ส่งแบบประเมิน");
          this.$router.push("/waitingAssessment/1");
        }
      } else {
        if (this.currentStep.send_status == "1") {
          // ส่งแบบประเมินแล้ว
          // console.log("ส่งแบบประเมินแล้ว ยังไม่หมดเวลา");
          this.$router.push("/waitingAssessment/0");
        } else if (this.currentStep.send_status == "0") {
          if (this.assessmentStatus == "0") {
            // console.log("ยังไม่หมดเวลา ยังไม่ส่ง ปิดประเมิน");
            this.$router.push("/waitingAssessment/1");
          } else {
            // console.log("ยังไม่หมดเวลา ยังไม่ส่ง เปิดประเมิน");
            this.isShowStepper = true;
          }
        }else{
           this.isShowStepper = true;
        }
      }
      this.loadingHide();
    }
  },
  computed: {
  
  },
  created() {
    this.getAssessmentDate();
  }
};
</script>

<style lang="scss" scoped>
.container-border-lock {
  position: relative;
  right: 0px;
  width: 650px;
  border: 3px solid #e0e0e0;
  z-index: 2;
}

.container-border-right {
  position: relative;
  left: -130px;
  border: 6px solid #e0e0e0;
  border-radius: 0%;
  padding: 130px;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: transparent;
  z-index: 1;
}
</style>
