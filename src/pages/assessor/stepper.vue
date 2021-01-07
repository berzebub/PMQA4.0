<template>
  <q-page>
    <div class="q-pa-md" style="width: 1000px; margin: auto;" align="center">
      <div class="row justify-between container-stepper q-my-xl">
        <div class="relative-position" style="width: 55px;">
          <div class="absolute-center">
            <q-btn
              round
              push
              class="q-pa-sm bg3"
              @click="$router.push('/assessor/stepMain/' + aid)"
            >
              <q-icon name="fas fa-home" color="teal"></q-icon>
            </q-btn>
          </div>
          <div class="absolute-center" align="center" style="top: 50px;">
            <span class="text-no-wrap">หน้าหลัก</span>
          </div>
        </div>
        <div class="relative-position" style="width: 55px;">
          <div class="absolute-center">
            <q-btn
              round
              push
              class="q-pa-sm"
              :class="active == 1 ? 'bg1' : 'bg3'"
              @click="(active = 1), route('-1')"
            >
              <q-icon
                name="fas fa-flag"
                :class="
                  active == 1
                    ? 'text-white'
                    : step0Status == '0'
                    ? 'text-black'
                    : step0Status == '2'
                    ? 'text-amber-9'
                    : step0Status == '1'
                    ? 'text-teal'
                    : ''
                "
              ></q-icon>
            </q-btn>
          </div>
          <div class="absolute-center" align="center" style="top: 50px;">
            <span class="text-no-wrap">ลักษณะสำคัญขององค์กร</span>
          </div>
        </div>
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
        <div class="relative-position" style="width: 55px;">
          <div class="absolute-center">
            <q-btn
              round
              push
              class="q-pa-sm"
              :class="active == 8 ? 'bg1' : 'bg3'"
              @click="(active = 8), route('6')"
            >
              <q-icon
                name="fas fa-trophy"
                :class="
                  active == 8
                    ? 'text-white'
                    : step7Status == '0'
                    ? 'text-black'
                    : step7Status == '2'
                    ? 'text-amber-9'
                    : step7Status == '1'
                    ? 'text-teal'
                    : ''
                "
              ></q-icon>
            </q-btn>
          </div>
          <div class="absolute-center" align="center" style="top: 50px;">
            <span class="text-no-wrap">หมวด 7</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Details -->
    <div class="q-pa-md container-content">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 1">
          <step-one @statusForm="getStep0Status"></step-one>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 2">
          <step-two @statusForm="getStep1Status"></step-two>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 3">
          <step-three @statusForm="getStep2Status"></step-three>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 4">
          <step-four @statusForm="getStep3Status"></step-four>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 5">
          <step-five @statusForm="getStep4Status"></step-five>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div
          v-show="active == 6"
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <step-six @statusForm="getStep5Status"></step-six>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div
          v-show="active == 7"
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <step-seven @statusForm="getStep6Status"></step-seven>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 8">
          <step-eight @statusForm="getStep7Status"></step-eight>
        </div>
      </transition>
    </div>

    <step-footer></step-footer>
  </q-page>
</template>

<script>
import stepOne from "../../components/step1A";
import stepTwo from "../../components/step2A";
import stepThree from "../../components/step3A";
import stepFour from "../../components/step4A";
import stepFive from "../../components/step5A";
import stepSix from "../../components/step6A";
import stepSeven from "../../components/step7A";
import stepEight from "../../components/step8A";
import stepFooter from "../../components/footer";
import Axios from "axios";
export default {
  components: {
    stepOne,
    stepTwo,
    stepThree,
    stepFour,
    stepFive,
    stepSix,
    stepSeven,
    stepEight,
    stepFooter
  },
  data() {
    return {
      aid: this.$q.sessionStorage.getItem("aid"),
      active: Number(this.$route.params.step) + 1,
      statusForm1: "none",
      statusForm2: "none",
      statusForm3: "none",
      statusForm4: "none",
      statusForm5: "none",
      statusForm6: "none",
      statusForm7: "none",
      statusForm8: "none",
      currentStep: "",

      stepStatus: "",
      step0Status: "",
      step1Status: "",
      step2Status: "",
      step3Status: "",
      step4Status: "",
      step5Status: "",
      step6Status: "",
      step7Status: ""
    };
  },
  methods: {
    route(route) {
      let newRoute = Number(route) + 1;
      newRoute = newRoute.toString();
      this.$router.push("/assessor/stepper/" + newRoute);
    },
    getStep0Status(val) {
      this.step0Status = val;
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
    getStepperLog() {}
  }
};
</script>

<style lang="scss" scoped>
.container-stepper {
  max-width: 1000px;
  width: 100%;
  border: 1px solid #e0e0e0;
}
</style>
