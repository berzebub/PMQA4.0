<template>
  <q-page class="row justify-center">
    <div class="col-10 row self-center q-pa-md" style="width: 850px;">
      <div class="col">
        <!-- Set Top -->
        <div style="padding: 65px 0px 129px 0px;">
          <div
            class="container-border-lock row justify-between relative-position"
          >
            <!-- ลักษณะองค์กร -->
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step1 = !step1), $router.push('/stepper')"
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
                      :color="step1 ? 'teal' : ''"
                      :class="!step1 ? 'bg2 color2' : ''"
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
                  <span class="text-no-wrap">ลักษณะองค์กร</span>
                </div>
              </div>
            </div>

            <!-- หมวด 1 -->
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step2 = !step2), $router.push('/stepper')"
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
                      :color="step2 ? 'teal' : ''"
                      :class="!step2 ? 'bg2 color2' : ''"
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
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step3 = !step3), $router.push('/stepper')"
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
                      :color="step3 ? 'teal' : ''"
                      :class="!step3 ? 'bg2 color2' : ''"
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
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step4 = !step4), $router.push('/stepper')"
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
                      :color="step4 ? 'teal' : ''"
                      :class="!step4 ? 'bg2 color2' : ''"
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
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step5 = !step5), $router.push('/stepper')"
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
                      :color="step5 ? 'teal' : ''"
                      :class="!step5 ? 'bg2 color2' : ''"
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
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step6 = !step6), $router.push('/stepper')"
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
                      :color="step6 ? 'teal' : ''"
                      :class="!step6 ? 'bg2 color2' : ''"
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
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step7 = !step7), $router.push('/stepper')"
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
                      :color="step7 ? 'teal' : ''"
                      :class="!step7 ? 'bg2 color2' : ''"
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
            <div class="col-2 relative-position">
              <div class="absolute-center z-top">
                <q-btn
                  round=""
                  size="45px"
                  push=""
                  class="bg3"
                  @click="(step8 = !step8), $router.push('/stepper')"
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
                      :color="step8 ? 'teal' : ''"
                      :class="!step8 ? 'bg2 color2' : ''"
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
      step8: false
    };
  },
  computed: {
 
    checkSteper() {
      if (
        this.step1 &&
        this.step2 &&
        this.step3 &&
        this.step4 &&
        this.step5 &&
        this.step6 &&
        this.step7 &&
        this.step8
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
 
  }
};
</script>

<style lang="scss" scoped>
.container-border-lock {
  position: relative;
  right: 0px;
  width: 650px;
  border: 3px solid #e0e0e0;
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
}
</style>
