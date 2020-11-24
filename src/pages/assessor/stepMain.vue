<template>
  <q-page class="row justify-center">
          <div class=' col-12' align="center">
            <div style='height:20px'></div>
            <div style='width:fit-content;border:1px solid' class='q-pa-md font-24'>
              ผู้ประเมิน : {{ assessorName }}
            </div>
          </div>
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
          style="width: 180px; border-radius: 0px"
          push
          class="q-mx-md q-py-sm "
          :class="{ bg2: !isShowSendBtn, 'bg-teal': isShowSendBtn }"
          @click="sendAssessment()"
          :disable="!isShowSendBtn"
        >
          <q-icon class="text-white" name="fas fa-paper-plane"></q-icon>
          <span class="font-14 q-ml-sm text-white">เสร็จสิ้นการประเมิน</span>
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
          <div
            class="absolute-bottom q-pa-lg "
            align="left"
            style="left:150px;width:350px"
          >
            <div>คะแนนที่ทางหน่วยงานประเมิน xxx คะแนน</div>
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
      isShowStepper: false,
      isShowSendBtn: false,
      assessorName : ""
    };
  },
  methods: {
    printAll() {
      let route = this.$router.resolve({ name: "printAll" });
      window.open(route.href);
      setTimeout(() => {}, delayInms);
    },
    printData(step) {
      let route = this.$router.resolve({
        name: "printStep" + step
      });
      window.open(route.href);
    },
    async sendAssessment() {
      let avg_a_score =
        Number(this.assessmentLog.a_category1_score) +
        Number(this.assessmentLog.a_category2_score) +
        Number(this.assessmentLog.a_category3_score) +
        Number(this.assessmentLog.a_category4_score) +
        Number(this.assessmentLog.a_category5_score) +
        Number(this.assessmentLog.a_category6_score) +
        Number(this.assessmentLog.a_category7_score);

        avg_a_score = parseInt(avg_a_score / 7)

      const url = this.apiPath + "updateAssessorScore.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("aid"),
        year: this.$q.sessionStorage.getItem("y"),
        avg_score: avg_a_score,
        assessor_id : this.$q.sessionStorage.getItem("uid")
      };
      let data = await Axios.post(url, postData);


      const url1 = this.apiPath + "updateSendStatus.php"
      let postData1 = {
        user_id :this.$q.sessionStorage.getItem("aid"),
         year: this.$q.sessionStorage.getItem("y"),
      }

      let data1 = await Axios.post(url1,postData1)
      this.$q.notify(
        {
          color : "secondary",
          message : "บันทึกผลการประเมินสำเร็จ"
        }
      )
    },
    async getAssessmentLog() {
      let postData = {
        year: this.$q.sessionStorage.getItem("y")
      };
      const url = this.apiPath + "getAssessmentLog.php";

      let data = await Axios.post(url, postData);
      let dataFilter = data.data.filter(
        x => x.user_id == this.$route.params.userId
      );

      let isOpenSendBtn = false;

      if (dataFilter.length) {
        this.assessmentLog = dataFilter[0];
        let assessorScore = [-1, -1, -1, -1, -1, -1, -1];
        assessorScore = dataFilter.map(x => {
          return [
            Number(x.a_category1_score),
            Number(x.a_category2_score),
            Number(x.a_category3_score),
            Number(x.a_category4_score),
            Number(x.a_category5_score),
            Number(x.a_category6_score),
            Number(x.a_category7_score)
          ];
        });

        assessorScore = assessorScore[0];

        if (assessorScore.every(x => x != -1)) {
          this.isShowSendBtn = true;
        } else {
          this.isShowSendBtn = false;
        }
      }
      this.isShowStepper = true;

      this.loadingHide();
    },
    async getAssessorInfo(){

      let postData = {
        user_id : this.$q.sessionStorage.getItem("uid")
      }


      const url = this.apiPath + "getAssessorInfo.php"


      let data = await Axios.post(url,postData)

      this.assessorName = data.data[0].name
    },
  },
  created() {
 this.getAssessorInfo()
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
