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
              @click="$router.push('/assessor/main')"
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
              @click="active = 1,route('-1')"
            >
              <q-icon
                name="fas fa-flag"
                :class="
                  active == 1
                    ? 'text-white'
                    : currentStep.category0 == '0'
                    ? 'text-black'
                    : currentStep.category0 == '2'
                    ? 'text-amber-9'
                    : currentStep.category0 == '1'
                    ? 'text-teal'
                    : ''
                "
              ></q-icon>
            </q-btn>
          </div>
          <div class="absolute-center" align="center" style="top: 50px;">
            <span class="text-no-wrap">ลักษณะสำคัญองค์การ</span>
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
                    : currentStep.category1 == '0'
                    ? 'text-black'
                    : currentStep.category1 == '2'
                    ? 'text-amber-9'
                    : currentStep.category1 == '1'
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
                    : currentStep.category2 == '0'
                    ? 'text-black'
                    : currentStep.category2 == '2'
                    ? 'text-amber-9'
                    : currentStep.category2 == '1'
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
                    : currentStep.category3 == '0'
                    ? 'text-black'
                    : currentStep.category3 == '2'
                    ? 'text-amber-9'
                    : currentStep.category3 == '1'
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
                    : currentStep.category4 == '0'
                    ? 'text-black'
                    : currentStep.category4 == '2'
                    ? 'text-amber-9'
                    : currentStep.category4 == '1'
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
                    : currentStep.category5 == '0'
                    ? 'text-black'
                    : currentStep.category5 == '2'
                    ? 'text-amber-9'
                    : currentStep.category5 == '1'
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
                    : currentStep.category6 == '0'
                    ? 'text-black'
                    : currentStep.category6 == '2'
                    ? 'text-amber-9'
                    : currentStep.category6 == '1'
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
                    : currentStep.category7 == '0'
                    ? 'text-black'
                    : currentStep.category7 == '2'
                    ? 'text-amber-9'
                    : currentStep.category7 == '1'
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
          <step-one @statusForm="getStepperLog()"></step-one>
        </div>
      </transition>

  <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 2">
          <step-two @statusForm="getStepperLog()"></step-two>
        </div>
      </transition>

       <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 3">
          <step-three @statusForm="getStepperLog()"></step-three>
        </div>
      </transition>

         <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 4">
          <step-four @statusForm="getStepperLog()"></step-four>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 5">
          <step-five @statusForm="getStepperLog()"></step-five>
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
          <step-six @statusForm="getStepperLog()"></step-six>
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
          <step-seven @statusForm="getStepperLog()"></step-seven>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 8">
          <step-eight @statusForm="getStepperLog()"></step-eight>
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
import stepEight from "../../components/step8";
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
      active: Number(this.$route.params.step) + 1,
      statusForm1: "none",
      statusForm2: "none",
      statusForm3: "none",
      statusForm4: "none",
      statusForm5: "none",
      statusForm6: "none",
      statusForm7: "none",
      statusForm8: "none",
      currentStep: ""
    };
  },
  methods: {
    route(route) {
      let newRoute = Number(route) + 1;
      newRoute = newRoute.toString();
      this.$router.push("/assessor/stepper/" + newRoute);
    },
    async getStepperLog() {
      const url = this.apiPath + "user/getStepperLog.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y")
      };
      let data = await Axios.post(url, postData);
      if (data.data) {
        this.currentStep = data.data;
      }
    }
  },
  created() {
    this.getStepperLog();
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
