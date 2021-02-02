<template>
  <q-page>
    <div class="row items-center" style="max-width:1280px;margin:auto">
      <div class="q-pa-md" style="max-width: 1100px;width:100%; margin: auto;" align="center">
        <div class="row justify-between container-stepper q-my-xl">
          <div class="relative-position" style="width: 55px;">
            <div class="absolute-center">
              <q-btn
                round
                push
                class="q-pa-sm"
                :class="active == 2 ? 'bg1' : 'bg3'"
                @click="(active = 2), route('0')"
              >
                <q-icon
                  name="fas fa-street-view"
                  :class="
                  active == 2
                    ? 'text-white'
                    : step1Status == '0'
                    ? 'text-black'
                    : step1Status == '2'
                    ? 'text-amber-9'
                    : step1Status == '1'
                    ? 'text-teal'
                    : ''
                "
                ></q-icon>
              </q-btn>
            </div>
            <div class="absolute-center" align="center" style="top: 50px;">
              <span class="text-no-wrap">หมวด 1</span>
            </div>
          </div>
          <div class="relative-position" style="width: 55px;">
            <div class="absolute-center">
              <q-btn
                round
                push
                class="q-pa-sm"
                :class="active == 3 ? 'bg1' : 'bg3'"
                @click="(active = 3), route('1')"
              >
                <q-icon
                  name="fas fa-map-signs"
                  :class="
                  active == 3
                    ? 'text-white'
                    : step2Status == '0'
                    ? 'text-black'
                    : step2Status == '2'
                    ? 'text-amber-9'
                    : step2Status == '1'
                    ? 'text-teal'
                    : ''
                "
                ></q-icon>
              </q-btn>
            </div>
            <div class="absolute-center" align="center" style="top: 50px;">
              <span class="text-no-wrap">หมวด 2</span>
            </div>
          </div>
          <div class="relative-position" style="width: 55px;">
            <div class="absolute-center">
              <q-btn
                round
                push
                class="q-pa-sm"
                :class="active == 4 ? 'bg1' : 'bg3'"
                @click="(active = 4), route('2')"
              >
                <q-icon
                  name="fas fa-users"
                  :class="
                  active == 4
                    ? 'text-white'
                    : step3Status == '0'
                    ? 'text-black'
                    : step3Status == '2'
                    ? 'text-amber-9'
                    : step3Status == '1'
                    ? 'text-teal'
                    : ''
                "
                ></q-icon>
              </q-btn>
            </div>
            <div class="absolute-center" align="center" style="top: 50px;">
              <span class="text-no-wrap">หมวด 3</span>
            </div>
          </div>
          <div class="relative-position" style="width: 55px;">
            <div class="absolute-center">
              <q-btn
                round
                push
                class="q-pa-sm"
                :class="active == 5 ? 'bg1' : 'bg3'"
                @click="(active = 5), route('3')"
              >
                <q-icon
                  name="fas fa-chart-line"
                  :class="
                  active == 5
                    ? 'text-white'
                    : step4Status == '0'
                    ? 'text-black'
                    : step4Status == '2'
                    ? 'text-amber-9'
                    : step4Status == '1'
                    ? 'text-teal'
                    : ''
                "
                ></q-icon>
              </q-btn>
            </div>
            <div class="absolute-center" align="center" style="top: 50px;">
              <span class="text-no-wrap">หมวด 4</span>
            </div>
          </div>
          <div class="relative-position" style="width: 55px;">
            <div class="absolute-center">
              <q-btn
                round
                push
                class="q-pa-sm"
                :class="active == 6 ? 'bg1' : 'bg3'"
                @click="(active = 6), route('4')"
              >
                <q-icon
                  name="fas fa-users-cog"
                  :class="
                  active == 6
                    ? 'text-white'
                    : step5Status == '0'
                    ? 'text-black'
                    : step5Status == '2'
                    ? 'text-amber-9'
                    : step5Status == '1'
                    ? 'text-teal'
                    : ''
                "
                ></q-icon>
              </q-btn>
            </div>
            <div class="absolute-center" align="center" style="top: 50px;">
              <span class="text-no-wrap">หมวด 5</span>
            </div>
          </div>
          <div class="relative-position" style="width: 55px;">
            <div class="absolute-center">
              <q-btn
                round
                push
                class="q-pa-sm"
                :class="active == 7 ? 'bg1' : 'bg3'"
                @click="(active = 7), route('5')"
              >
                <q-icon
                  name="fas fa-project-diagram"
                  :class="
                  active == 7
                    ? 'text-white'
                    : step6Status == '0'
                    ? 'text-black'
                    : step6Status == '2'
                    ? 'text-amber-9'
                    : step6Status == '1'
                    ? 'text-teal'
                    : ''
                "
                ></q-icon>
              </q-btn>
            </div>
            <div class="absolute-center" align="center" style="top: 50px;">
              <span class="text-no-wrap">หมวด 6</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col" align="center">
        <div class="relative-position" style="width: 170px;">
          <div class="absolute-center bg-white">
            <q-btn
              style="width:150px"
              dense
              class="font-24"
              :color="OPStatus ? 'teal' : null"
              :outline="!OPStatus"
              :label="OPStatus ? 'ประเมินแล้ว' : 'ยังไม่ประเมิน'"
              @click="finishOP()"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Details -->
    <div class="q-pa-md container-content">
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-show="active == 2">
          <step-two @statusForm="getStep1Status"></step-two>
        </div>
      </transition>

      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-show="active == 3">
          <step-three @statusForm="getStep2Status"></step-three>
        </div>
      </transition>

      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-show="active == 4">
          <step-four @statusForm="getStep3Status"></step-four>
        </div>
      </transition>

      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-show="active == 5">
          <step-five @statusForm="getStep4Status"></step-five>
        </div>
      </transition>

      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-show="active == 6" transition-show="jump-down" transition-hide="jump-up">
          <step-six @statusForm="getStep5Status"></step-six>
        </div>
      </transition>

      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-show="active == 7" transition-show="jump-down" transition-hide="jump-up">
          <step-seven @statusForm="getStep6Status"></step-seven>
        </div>
      </transition>
    </div>

    <step-footer></step-footer>
  </q-page>
</template>

<script>
import stepTwo from "../../components/step2A";
import stepThree from "../../components/step3A";
import stepFour from "../../components/step4A";
import stepFive from "../../components/step5A";
import stepSix from "../../components/step6A";
import stepSeven from "../../components/step7A";
import stepFooter from "../../components/footer";
import Axios from "axios";
export default {
  components: {
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
    stepSix,
    stepSeven,
    stepFooter,
  },
  data() {
    return {
      OPStatus: "",
      aid: this.$q.sessionStorage.getItem("aid"),
      active: Number(this.$route.params.step) + 1,
      statusForm1: "none",
      statusForm2: "none",
      statusForm3: "none",
      statusForm4: "none",
      statusForm5: "none",
      statusForm6: "none",
      statusForm7: "none",
      currentStep: "",
      stepStatus: "",
      step1Status: "",
      step2Status: "",
      step3Status: "",
      step4Status: "",
      step5Status: "",
      step6Status: "",
      step7Status: "",
    };
  },
  methods: {
    async finishOP() {
      const urlUpdateStepper =
        this.apiPath + "user/update_assessment_stepper_log.php";

      if (
        this.step1Status == 1 &&
        this.step2Status == 1 &&
        this.step3Status == 1 &&
        this.step4Status == 1 &&
        this.step5Status == 1 &&
        this.step6Status == 1
      ) {
        this.OPStatus = !this.OPStatus;

        const stepperData = {
          uid: this.$q.sessionStorage.getItem("aid"),
          step: "cat1_6",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: this.OPStatus ? 2 : 1,
        };

        let response = await Axios.post(urlUpdateStepper, stepperData);
      } else {
        this.$q.notify({
          message: "กรุณาประเมินหมวด 1 - 6 ให้ครบก่อน",
          color: "red",
          position: "top",
        });
      }
    },
    route(route) {
      let newRoute = Number(route) + 1;
      newRoute = newRoute.toString();
      this.$router.push("/assessor/stepper/" + newRoute);
    },

    getStep1Status(val) {
      // 0 = ไม่เคยประเมิน
      // 1 = ประเมินเสร็จ
      // 2 = ประเมินบางข้อ
      this.step1Status = val;
    },
    getStep2Status(val) {
      // 0 = ไม่เคยประเมิน
      // 1 = ประเมินเสร็จ
      // 2 = ประเมินบางข้อ
      this.step2Status = val;
    },
    getStep3Status(val) {
      // 0 = ไม่เคยประเมิน
      // 1 = ประเมินเสร็จ
      // 2 = ประเมินบางข้อ
      this.step3Status = val;
    },
    getStep4Status(val) {
      // 0 = ไม่เคยประเมิน
      // 1 = ประเมินเสร็จ
      // 2 = ประเมินบางข้อ
      this.step4Status = val;
    },
    getStep5Status(val) {
      // 0 = ไม่เคยประเมิน
      // 1 = ประเมินเสร็จ
      // 2 = ประเมินบางข้อ
      this.step5Status = val;
    },
    getStep6Status(val) {
      // 0 = ไม่เคยประเมิน
      // 1 = ประเมินเสร็จ
      // 2 = ประเมินบางข้อ
      this.step6Status = val;
    },
    getStep7Status(val) {
      // 0 = ไม่เคยประเมิน
      // 1 = ประเมินเสร็จ
      // 2 = ประเมินบางข้อ
      this.step7Status = val;
    },
    getStepperLog() {},
  },
};
</script>

<style lang="scss" scoped>
.container-stepper {
  max-width: 1000px;
  width: 100%;
  border: 1px solid #e0e0e0;
}
</style>
