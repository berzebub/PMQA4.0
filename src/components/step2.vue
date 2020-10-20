<template>
  <div class="">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 1 การนำองค์การ</span>
      </div>
    </div>

    <div class="q-mt-lg font-18">
      <!-- Start BOX 1 -->
      <div>
        <q-list bordered>
          <q-expansion-item
            group="boxInputOne"
            header-class="bg-white q-py-sm"
            dense-toggle=""
            dense=""
            expand-icon-class="text-grey-10"
          >
            <template v-slot:header>
              <div class="row">
                <div class="col">
                  <span
                    >1.1 ระบบการนำองค์การของส่วนราชการได้สร้างองค์การที่ยั่งยืน
                    โดยการกำหนดวิสัยทัศน์และแผนยุทธศาสตร์เชื่อมโยง
                    สู่การบรรลุพันธกิจ
                    การมุ่งเน้นประโยชน์สุขประชาชนและการบรรลุผลยุทธศาสตร์ชาติและความสามารถในการแข่งขัน</span
                  >
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                    <span class="font-18">ยังไม่ทำการประเมิน</span>
                  </div>
                </div>
              </div>
            </template>

            <q-card>
              <q-separator class="bg-grey-7" style="height: 1px;"></q-separator>

              <div>
                <div class="bg4 row">
                  <div class="col-6">
                    <q-tabs
                      v-model="tabs"
                      dense
                      align="justify"
                      class="text-black"
                      active-color="black"
                      indicator-color="pink-5"
                      narrow-indicator
                    >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Basic"
                        label="Basic"
                      />
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        label="Advance"
                      />
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        label="Significance"
                      />
                    </q-tabs>
                  </div>
                </div>
                <div class=" q-pa-md">
                  <q-tab-panels v-model="tabs" animated>
                    <q-tab-panel name="Basic" class="no-padding">
                      <div class="row ">
                        <div class="col  ">
                          <div class="q-pa-md">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span
                                >-
                                ผู้บริหารของส่วนราชการได้สร้างความยั่งยืนโดยการกำหนดวิสัยทัศน์
                                และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจ
                                และภาระหน้าที่ของส่วนราชการ (Mission
                                based)</span
                              >
                            </div>
                            <div class="q-mt-md">
                              <span
                                >-
                                มีการถ่ายถอดผ่านระบบการนำองค์การเพื่อให้เกิดการดำเนินการทั่ว
                                ทั้งส่วนราชการ</span
                              >
                            </div>
                          </div>

                          <q-separator></q-separator>
                        </div>
                        <div class="col brx q-pl-lg">
                          <div>
                            <span class="font-18b">คำอธิบายผลการประเมิน</span>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <q-tab-panel name="Advance">
                      <div class="text-h6">Alarms</div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </q-tab-panel>

                    <q-tab-panel name="Significance">
                      <div class="text-h6">Movies</div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </q-tab-panel>
                  </q-tab-panels>
                </div>
              </div>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>

    <!-- <div style="padding: 70px 0px 30px 0px;" class="brx" align="center">
      <q-btn
        class="bg-teal text-white font-18"
        label="บันทึกข้อมูล"
        :disable="isSaveData"
        style="width: 220px; border-radius: 0px;"
        push
        @click="saveData()"
      ></q-btn>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: "Basic",

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    saveData() {
      this.isSaveData = true;
      setTimeout(() => {
        this.isSaveData = false;
      }, 1000);
    }
  },
  computed: {
    checkEnvironment() {
      let environmentCount = 0;

      if (this.inputEnvironment1) {
        environmentCount++;
      }

      if (this.inputEnvironment2) {
        environmentCount++;
      }

      if (this.inputEnvironment3) {
        environmentCount++;
      }

      if (this.inputEnvironment4) {
        environmentCount++;
      }

      if (this.inputEnvironment5) {
        environmentCount++;
      }

      if (environmentCount > 0 && environmentCount < 5) {
        this.status = "doing";
      } else if (environmentCount == 5) {
        this.status = "success";
      }

      this.$emit("statusForm", this.status);

      return environmentCount;
    },

    checkRelation() {
      let relationCount = 0;

      if (this.inputRelation1) {
        relationCount++;
      }

      if (this.inputRelation2) {
        relationCount++;
      }

      if (this.inputRelation3) {
        relationCount++;
      }

      if (relationCount > 0 && relationCount < 5) {
        this.status = "doing";
      } else if (relationCount == 5) {
        this.status = "success";
      }

      this.$emit("statusForm", this.status);

      return relationCount;
    },

    checkCompetition() {
      let competitionCount = 0;

      if (this.inputCompetitionEnvironment1) {
        competitionCount++;
      }

      if (this.inputCompetitionEnvironment2) {
        competitionCount++;
      }

      if (this.inputCompetitionEnvironment3) {
        competitionCount++;
      }

      if (competitionCount > 0 && competitionCount < 5) {
        this.status = "doing";
      } else if (competitionCount == 5) {
        this.status = "success";
      }

      this.$emit("statusForm", this.status);

      return competitionCount;
    },

    checkStategy() {
      let stategyCount = 0;

      if (this.inputStategy) {
        stategyCount++;
      }

      if (stategyCount > 0 && stategyCount < 5) {
        this.status = "doing";
      } else if (stategyCount == 5) {
        this.status = "success";
      }

      this.$emit("statusForm", this.status);

      return stategyCount;
    },

    checkPerformance() {
      let performanceCount = 0;

      if (this.inputPerformanceSystem) {
        performanceCount++;
      }

      if (performanceCount > 0 && performanceCount < 5) {
        this.status = "doing";
      } else if (performanceCount == 5) {
        this.status = "success";
      }

      this.$emit("statusForm", this.status);

      return performanceCount;
    }
  }
};
</script>

<style lang="scss" scoped></style>
