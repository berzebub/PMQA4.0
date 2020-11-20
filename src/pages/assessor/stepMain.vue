<template>
  <q-page class="row justify-center">
    <div class="col-10 row self-center q-pa-md" style="width: 850px">
      <div class="col">
        <!-- Set Top -->
        <div style="padding: 65px 0px 129px 0px">
          <div
            class="container-border-lock row justify-between relative-position"
          >
            <!-- ลักษณะองค์การ -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/0')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-flag"
                  ></q-icon>
                </q-btn>
              </div>
              <div
                class="absolute-bottom"
                style="bottom: -120px; width: 145px"
                align="center"
              >
                <div class="font-18 ">
                  <div class="row items-center ">
                    <div class="col-12">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: -20px"
                        >ลักษณะสำคัญองค์การ</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- หมวด 1 -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/1')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-street-view"
                  ></q-icon>
                </q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px; width: 120px"
                align="center"
              >
                <div class="font-18">
                  <div class="row items-center">
                    <div
                      class="col q-pa-xs"
                      :class="
                        assessmentLog.a_category1_score != '-1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                    >
                      {{ assessmentLog.category1_score }} /<span
                        v-if="assessmentLog.a_category1_score == '-1'"
                        >-</span
                      ><span v-else class="text-pink-4">
                        {{ assessmentLog.a_category1_score }}
                      </span>
                    </div>
                    <div class="q-pl-sm"></div>
                    <div class="col-12">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: -10px"
                        >หมวด 1</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- หมวด 2  -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/2')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-map-signs"
                  ></q-icon>
                </q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px; width: 120px"
                align="center"
              >
                <div class="font-18">
                  <div class="row items-center">
                    <div
                      class="col q-pa-xs"
                      :class="
                        assessmentLog.a_category2_score != '-1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                    >
                      {{ assessmentLog.category2_score }} /<span
                        v-if="assessmentLog.a_category2_score == '-1'"
                        >-</span
                      ><span v-else class="text-pink-4">
                        {{ assessmentLog.a_category2_score }}
                      </span>
                    </div>
                    <div class="q-pl-sm"></div>
                    <div class="col-12">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: 0px"
                        >หมวด 2</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- หมวด 3 -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/3')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-users"
                  ></q-icon>
                </q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px; width: 120px"
                align="center"
              >
                <div class="font-18">
                  <div class="row items-center">
                    <div
                      class="col q-pa-xs"
                      :class="
                        assessmentLog.a_category3_score != '-1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                    >
                      {{ assessmentLog.category3_score }} /<span
                        v-if="assessmentLog.a_category3_score == '-1'"
                        >-</span
                      ><span v-else class="text-pink-4">
                        {{ assessmentLog.a_category3_score }}
                      </span>
                    </div>
                    <div class="q-pl-sm"></div>
                    <div class="col-12 ">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: 0px"
                        >หมวด 3</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Set Bottom -->
        <div style="padding: 129px 0px 65px 0px">
          <div
            class="container-border-lock row reverse justify-between relative-position"
          >
            <!-- หมวด 4 -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/4')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-chart-line"
                  ></q-icon>
                </q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px; width: 120px"
                align="center"
              >
                <div class="font-18">
                  <div class="row items-center">
                    <div
                      class="col q-pa-xs"
                      :class="
                        assessmentLog.a_category4_score != '-1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                    >
                      {{ assessmentLog.category4_score }} /<span
                        v-if="assessmentLog.a_category4_score == '-1'"
                        >-</span
                      ><span v-else class="text-pink-4">
                        {{ assessmentLog.a_category4_score }}
                      </span>
                    </div>
                    <div class="q-pl-sm"></div>
                    <div class="col-12">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: 0px"
                        >หมวด 4</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- หมวด 5 -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/5')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-users-cog"
                  ></q-icon>
                </q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px; width: 120px"
                align="center"
              >
                <div class="font-18">
                  <div class="row items-center">
                    <div
                      class="col q-pa-xs"
                      :class="
                        assessmentLog.a_category5_score != '-1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                    >
                      {{ assessmentLog.category5_score }} /<span
                        v-if="assessmentLog.a_category5_score == '-1'"
                        >-</span
                      ><span v-else class="text-pink-4">
                        {{ assessmentLog.a_category5_score }}
                      </span>
                    </div>
                    <div class="q-pl-sm"></div>
                    <div class="col-12">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: 0px"
                        >หมวด 5</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- หมวด 6 -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/6')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-project-diagram"
                  ></q-icon>
                </q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px; width: 120px"
                align="center"
              >
                <div class="font-18">
                  <div class="row items-center">
                    <div
                      class="col q-pa-xs"
                      :class="
                        assessmentLog.a_category6_score != '-1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                    >
                      {{ assessmentLog.category6_score }} /<span
                        v-if="assessmentLog.a_category6_score == '-1'"
                        >-</span
                      ><span v-else class="text-pink-4">
                        {{ assessmentLog.a_category6_score }}
                      </span>
                    </div>
                    <div class="q-pl-sm"></div>
                    <div class="col-12">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: 0px"
                        >หมวด 6</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- หมวด 7 -->
            <div class="col-2 relative-position" style="z-index: 5">
              <div class="absolute-center">
                <q-btn
                  round
                  size="45px"
                  push
                  class="bg3"
                  @click="$router.push('/assessor/stepper/7')"
                >
                  <q-icon
                    size="50px"
                    class="color1"
                    name="fas fa-trophy"
                  ></q-icon>
                </q-btn>
              </div>

              <div
                class="absolute-bottom"
                style="bottom: -150px; width: 120px"
                align="center"
              >
                <div class="font-18">
                  <div class="row items-center">
                    <div
                      class="col q-pa-xs"
                      :class="
                        assessmentLog.a_category7_score != '-1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                    >
                      {{ assessmentLog.category7_score }} /<span
                        v-if="assessmentLog.a_category7_score == '-1'"
                        >-</span
                      ><span v-else class="text-pink-4">
                        {{ assessmentLog.a_category7_score }}
                      </span>
                    </div>
                    <div class="q-pl-sm"></div>
                    <div class="col-12">
                      <span
                        class="text-no-wrap"
                        style="position: relative; left: 0px"
                        >หมวด 7</span
                      >
                    </div>
                  </div>
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

      <div class="col-12 q-py-xl" style="margin-top: 100px" align="center">
        <q-btn
          :disable="!checkSteper"
          style="width: 180px; border-radius: 0px"
          push
          class="q-mx-md q-py-sm"
          :class="!checkSteper ? 'bg3' : 'bg-white'"
          @click="printAll()"
        >
          <q-icon
            :class="!checkSteper ? 'color2' : ''"
            name="fas fa-paper-plane"
          ></q-icon>
          <span :class="!checkSteper ? 'color2' : ''" class="font-14 q-ml-sm"
            >เสร็จสิ้นการประเมิน</span
          >
        </q-btn>
        <div class=" absolute-left">
          <div class="absolute-bottom q-pa-lg ">
            <div
              style="border:2px solid teal;border-radius:5px;width:120px;font-size:16px"
            >
              <span class="text-teal">xxx</span>
              /
              <span class="text-pink-4">yyy</span>
            </div>
          </div>
          <div class="absolute-bottom q-pa-lg " align="left" style="left:150px;width:350px">
            <div>คะแนนที่ทางหน่วยงานประเมิน xxx คะแนน </div>
            <div>คะแนนที่ทางคณะกรรมการประเมิน yyy คะแนน</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      assessmentLog: "",
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
      checkSteper: false
    };
  },
  methods: {
    printAll() {
      let route = this.$router.resolve({ name: "printAll" });
      window.open(route.href);
      setTimeout(() => {
        
      }, delayInms);
    },
    printData(step) {
      let route = this.$router.resolve({
        name: "printStep" + step
      });
      window.open(route.href);
    },
    async sendAssessment() {
      const url = this.apiPath + "user/setUserStepperLog.php";
      let postData = {
        category: "category1",
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
        status: 1, // 1 = finish
        send_status: 1
      };
      let data = await Axios.post(url, postData);
      this.$router.push("/waitingAssessment/0");
    },
    async getScore() {
      console.clear();
      const url = this.apiPath + "user/getAllCategory1_6.php";

      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid")
      };

      let getData = await Axios.post(url, postData);
      getData = getData.data;

      const postData1 = {
        year: this.$q.sessionStorage.getItem("y") + 543,
        user_id: this.$q.sessionStorage.getItem("uid")
      };

      let dataList = [
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0]
        },
        {
          score: [0, 0, 0, 0, 0, 0]
        }
      ];

      for (let i = 0; i < dataList.length; i++) {
        let score = getData.filter(x => x.step == i + 1 && x.mode == "basic");
        score = score.sort((a, b) => Number(a.q_number) - Number(b.q_number));
        dataList[i].score = score.map(x => Number(x.score));
      }

      const url1 = this.apiPath + "user/getCategory7.php";
      let getCategory7 = await Axios.post(url1, postData1);

      let cat7 = getCategory7.data.sort(
        (a, b) => Number(a.q_number) - Number(b.q_number)
      );

      let mapCat7 = cat7.map(x => Number(x.avg_score));

      for (let i = 0; i < 6; i++) {
        let checkExist = cat7.filter(x => x.q_number == (i + 1).toString());
        if (checkExist.length) {
          dataList[6].score[i] = parseInt(mapCat7[i]);
        }
      }

      let avgScoreLst = [];
      // let avgTemp2 = []

      for (let i = 0; i < dataList.length; i++) {
        let devine = 4;

        if (i == 6) {
          devine = 6;
        }

        avgScoreLst.push(
          dataList[i].score.map(x => x).reduce((a, b) => a + b, 0) / devine
        );
      }

      let totalAvgScore = avgScoreLst.reduce((a, b) => a + b, 0) / 7;

      let result = {
        score: avgScoreLst,
        totalAvgScore: totalAvgScore
      };

      return result;
    },
    async sendAssessment() {
      let avgScore = await this.getScore();

      const sendAPI = this.apiPath + "user/sendAssessment.php";
      let postSendData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        office_score: avgScore.totalAvgScore,
        year: this.$q.sessionStorage.getItem("y"),
        category1_score: Math.round(avgScore.score[0]),
        category2_score: Math.round(avgScore.score[1]),
        category3_score: Math.round(avgScore.score[2]),
        category4_score: Math.round(avgScore.score[3]),
        category5_score: Math.round(avgScore.score[4]),
        category6_score: Math.round(avgScore.score[5]),
        category7_score: Math.round(avgScore.score[6])
      };

      let send = Axios.post(sendAPI, postSendData);

      const url = this.apiPath + "user/setUserStepperLog.php";
      let postData = {
        category: "category1",
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
        status: 1, // 1 = finish
        send_status: 1
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
      let newData = data.data;
      let checkStatus = [];
      if (newData) {
        checkStatus = [
          newData.category0,
          newData.category1,
          newData.category2,
          newData.category3,
          newData.category4,
          newData.category5,
          newData.category6,
          newData.category7
        ];
      }

      if (checkStatus.every(x => x == "1") && checkStatus.length) {
        this.checkSteper = true;
      } else {
        this.checkSteper = false;
      }
      if (data.data) {
        this.currentStep = data.data;
      }
      let currentDate = await this.getDate();
    },
    async getAssessmentLog() {
      let postData = {
        year: this.$q.sessionStorage.getItem("y")
      };
      const url = this.apiPath + "getAssessmentLog.php";

      let data = await Axios.post(url, postData);

      this.assessmentLog = data.data.filter(
        x => x.user_id == this.$route.params.userId
      )[0];
      this.isShowStepper = true;

      this.loadingHide();
    }
  },
  computed: {},
  created() {
    this.getStepperLog();
    this.getAssessmentLog();
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
.border-teal {
  border: 1px solid teal;
  border-radius: 5px;
  color: teal;
}
.border-grey {
  border: 1px solid rgb(173, 168, 168);
  border-radius: 5px;
  color: rgb(173, 168, 168);
}
</style>
