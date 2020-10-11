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
                :class="active == 1 ? 'text-white' : 'text-grey-1'"
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
                :class="active == 2 ? 'text-white' : 'text-grey-1'"
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
                :class="active == 3 ? 'text-white' : 'text-grey-1'"
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
                :class="active == 4 ? 'text-white' : 'text-grey-1'"
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
                :class="active == 5 ? 'text-white' : 'text-grey-1'"
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
                :class="active == 6 ? 'text-white' : 'text-grey-1'"
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
                :class="active == 7 ? 'text-white' : 'text-grey-1'"
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
                :class="active == 8 ? 'text-white' : 'text-grey-1'"
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
      <q-tab-panels
        v-model="active"
        animated
        transition-prev="jump-up"
        transition-next="jump-down"
      >
        <q-tab-panel :name="1">
          <step-one></step-one>
        </q-tab-panel>

        <q-tab-panel :name="2">
          <step-two></step-two>
        </q-tab-panel>

        <q-tab-panel :name="3">
          <step-three></step-three>
        </q-tab-panel>

        <q-tab-panel :name="4">
          <step-four></step-four>
        </q-tab-panel>

        <q-tab-panel :name="5">
          <step-five></step-five>
        </q-tab-panel>

        <q-tab-panel :name="6">
          <step-six></step-six>
        </q-tab-panel>

        <q-tab-panel :name="7">
          <step-seven></step-seven>
        </q-tab-panel>

        <q-tab-panel :name="8">
          <step-eight></step-eight>
        </q-tab-panel>
      </q-tab-panels>
    </div>
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
  },
  data() {
    return {
      active: 1,
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
