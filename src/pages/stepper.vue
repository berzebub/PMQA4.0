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
              @click="$router.push('/main')"
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
              @click="active = 1"
            >
              <q-icon
                name="fas fa-flag"
                :class="
                  active == 1
                    ? 'text-white'
                    : statusForm1 == 'none'
                    ? 'text-grey-1'
                    : statusForm1 == 'doing'
                    ? 'text-amber-9'
                    : statusForm1 == 'success'
                    ? 'text-teal'
                    : ''
                "
              ></q-icon>
            </q-btn>
          </div>
          <div class="absolute-center" align="center" style="top: 50px;">
            <span class="text-no-wrap">ลักษณะองค์กร</span>
          </div>
        </div>
        <div class="relative-position" style="width: 55px;">
          <div class="absolute-center">
            <q-btn
              round
              push
              class="q-pa-sm"
              :class="active == 2 ? 'bg1' : 'bg3'"
              @click="active = 2"
            >
              <q-icon
                name="fas fa-street-view"
                :class="
                  active == 2
                    ? 'text-white'
                    : statusForm2 == 'none'
                    ? 'text-grey-1'
                    : statusForm2 == 'doing'
                    ? 'text-amber-9'
                    : statusForm2 == 'success'
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
              @click="active = 3"
            >
              <q-icon
                name="fas fa-map-signs"
                :class="
                  active == 3
                    ? 'text-white'
                    : statusForm3 == 'none'
                    ? 'text-grey-1'
                    : statusForm3 == 'doing'
                    ? 'text-amber-9'
                    : statusForm3 == 'success'
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
              @click="active = 4"
            >
              <q-icon
                name="fas fa-users"
                :class="
                  active == 4
                    ? 'text-white'
                    : statusForm4 == 'none'
                    ? 'text-grey-1'
                    : statusForm4 == 'doing'
                    ? 'text-amber-9'
                    : statusForm4 == 'success'
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
              @click="active = 5"
            >
              <q-icon
                name="fas fa-chart-line"
                :class="
                  active == 5
                    ? 'text-white'
                    : statusForm5 == 'none'
                    ? 'text-grey-1'
                    : statusForm5 == 'doing'
                    ? 'text-amber-9'
                    : statusForm5 == 'success'
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
              @click="active = 6"
            >
              <q-icon
                name="fas fa-users-cog"
                :class="
                  active == 6
                    ? 'text-white'
                    : statusForm6 == 'none'
                    ? 'text-grey-1'
                    : statusForm6 == 'doing'
                    ? 'text-amber-9'
                    : statusForm6 == 'success'
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
              @click="active = 7"
            >
              <q-icon
                name="fas fa-project-diagram"
                :class="
                  active == 7
                    ? 'text-white'
                    : statusForm7 == 'none'
                    ? 'text-grey-1'
                    : statusForm7 == 'doing'
                    ? 'text-amber-9'
                    : statusForm7 == 'success'
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
              @click="active = 8"
            >
              <q-icon
                name="fas fa-trophy"
                :class="
                  active == 8
                    ? 'text-white'
                    : statusForm8 == 'none'
                    ? 'text-grey-1'
                    : statusForm8 == 'doing'
                    ? 'text-amber-9'
                    : statusForm8 == 'success'
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
          <step-one @statusForm="(val) => (statusForm1 = val)"></step-one>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 2">
          <step-two></step-two>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 3">
          <step-three></step-three>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 4">
          <step-four></step-four>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 5">
          <step-five></step-five>
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
          <step-six></step-six>
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
          <step-seven></step-seven>
        </div>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div v-show="active == 8">
          <step-eight></step-eight>
        </div>
      </transition>
    </div>

    <step-footer></step-footer>
  </q-page>
</template>

<script>
import stepOne from "../components/step1";
import stepTwo from "../components/step2";
import stepThree from "../components/step3";
import stepFour from "../components/step4";
import stepFive from "../components/step5";
import stepSix from "../components/step6";
import stepSeven from "../components/step7";
import stepEight from "../components/step8";
import stepFooter from "../components/footer";
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
    stepFooter,
  },
  data() {
    return {
      active: 1,
      statusForm1: "none",
      statusForm2: "none",
      statusForm3: "none",
      statusForm4: "none",
      statusForm5: "none",
      statusForm6: "none",
      statusForm7: "none",
      statusForm8: "none",
    };
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
