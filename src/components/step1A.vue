<template>
  <div class="">
    <div class="bg3 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">ลักษณะองค์การ</span>
      </div>
      <div class="q-pa-sm">
        <span class="font-16"
          >ลักษณะสำคัญของอค์การ คือ ภาพรวมของส่วนราชการ
          สิ่งสำคัญที่มีอิทธิผลต่อวิธีการดำเนินงาน
          และความท้าทายสำคัญที่ส่วนราชการเผชิญอยู่
          สำหรับการดำเนินการของส่วนราชการที่ต้องการ ตอบสนอง
          การบริหาจัดการเพื่อนำไปสู่การเป็นระบบราชการ 4.0
          ควรพิจารณาในรายละเอียดดังนี้</span
        >
      </div>
    </div>

    <div class="q-mt-lg font-18">
      <!-- Start BOX 1 -->
      <div>
        <span>
          1. ลักษณะองค์การ: คุณลักษณะสำคัญของส่วนราชการคืออะไร
        </span>
        <div class="q-py-sm q-px-lg">
          <!-- Environment Content -->
          <div>
            <q-expansion-item
              group="boxInputOne"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ก. สภาพแวดล้อมของส่วนราชการ</span>
                <q-space></q-space>
              </template>
              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span>1. พันธกิจหรือหน้าที่ตามกฏหมาย</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputEnvironment1"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model="inputEnvironment1S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 2 -->
                    <div class="q-mt-lg">
                      <span>2. วิสัยทัศน์และค่านิยม</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputEnvironment2"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputEnvironment2S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 3 -->
                    <div class="q-mt-lg">
                      <span>3. ลักษณะโดยรวมของบุคลากร</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputEnvironment3"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputEnvironment3S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 4 -->
                    <div class="q-mt-lg">
                      <span>4. สินทรัพย์</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputEnvironment4"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputEnvironment4S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 5 -->
                    <div class="q-mt-lg">
                      <span>5. กฏหมาย กฏระเบียบและข้อบังคับ</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputEnvironment5"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputEnvironment5S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
          <!-- Environment Content -->

          <!-- Relation Content -->
          <div class="q-mt-xs">
            <q-expansion-item
              group="boxInputOne"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ข. ความสัมพันธ์ระดับองค์การ</span>
                <q-space></q-space>
              </template>

              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span>1. โครงสร้างองค์การ</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputRelation1"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputRelation1S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 2 -->
                    <div class="q-mt-lg">
                      <span>2. ผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputRelation2"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputRelation2S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 3 -->
                    <div class="q-mt-lg">
                      <span
                        >3.
                        ส่วนราชการหรือองค์การที่เกี่ยวข้องกันในการให้บริการหรือส่งมอบงานต่อกัน</span
                      >

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputRelation3"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputRelation3S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
          <!-- Relation Content -->
        </div>
      </div>
      <!-- End BOX 1 -->

      <!-- Start BOX 2 -->
      <div class="q-mt-lg">
        <span>
          2. สภาวการณ์ขององค์การ:
          สภาวการณ์เชิงยุทธศาสตร์ของส่วนราชการเป็นเช่นใด?
        </span>
        <div class="q-py-sm q-px-lg">
          <div class="">
            <q-expansion-item
              group="boxInputTwo"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ก. สภาพแวดล้อมด้านการแข่งขัน</span>
                <q-space></q-space>
              </template>

              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span
                        >1.
                        สภาพแวดล้อมด้านการแข่งขันทั้งภายในและภายนอกประเทศ</span
                      >

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputCompetitionEnvironment1"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputCompetitionEnvironment1S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 2 -->
                    <div class="q-mt-lg">
                      <span>2. การเปลี่ยนแปลงความสามารถในการแข่งขัน</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputCompetitionEnvironment2"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputCompetitionEnvironment2S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- Input Content 3 -->
                    <div class="q-mt-lg">
                      <span>3. แหล่งข้อมูลเชิงเปรียบเทียบ</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputCompetitionEnvironment3"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputCompetitionEnvironment3S"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>

          <div class="q-mt-xs">
            <q-expansion-item
              group="boxInputTwo"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ข. บริบทเชิงยุทธศาสตร์</span>
                <q-space></q-space>
              </template>

              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span
                        >1.
                        ความท้าทายเชิงยุทธศาสตร์และความได้เปรียบเชิงยุทธศาสตร์</span
                      >

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputStategy"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputStategyS"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>

          <div class="q-mt-xs">
            <q-expansion-item
              group="boxInputTwo"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ค. ระบบการปรับปรุงผลการดำเนินการ</span>
                <q-space></q-space>
              </template>
              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span>1. ระบบการปรับปรุงผลการดำเนินการ</span>

                      <div class="q-mt-sm row">
                        <div class="col-8">
                          <textarea
                            readonly
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                            v-model.lazy="inputPerformanceSystem"
                            class="q-pa-sm"
                          />
                        </div>
                        <div style="width:20px"></div>
                        <div class="col">
                          <textarea
                            placeholder="ข้อเสนอแนะ"
                            class="q-pa-sm"
                            v-model.lazy="inputPerformanceSystemS"
                            style="width:100%;border-radius:5px;height:180px;overflow:auto"
                            outlined=""
                            bg-color="white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </div>
      </div>
      <!-- End BOX 2 -->
    </div>

    <div style="padding: 70px 0px 30px 0px;" align="center">
      <q-btn
        class="bg-teal text-white font-18"
        label="บันทึกข้อมูล"
        :disable="isSaveData"
        style="width: 220px; border-radius: 0px;"
        push
        @click="saveData()"
      ></q-btn>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      temp: "",
      // Emit Data Status
      status: "none",
      isDelete: false,

      // Environment
      environmentCount: 0,
      inputEnvironment1: "",
      inputEnvironment1S: "",
      inputEnvironmentPDF1: null,

      inputEnvironment2: "",
      inputEnvironment2S: "",
      inputEnvironmentPDF2: null,

      inputEnvironment3: "",
      inputEnvironment3S: "",
      inputEnvironmentPDF3: null,

      inputEnvironment4: "",
      inputEnvironment4S: "",
      inputEnvironmentPDF4: null,

      inputEnvironment5: "",
      inputEnvironment5S: "",
      inputEnvironmentPDF5: null,

      // Relation
      inputRelation1: "",
      inputRelation1S: "",
      inputRelationPDF1: null,

      inputRelation2: "",
      inputRelation2S: "",
      inputRelationPDF2: null,

      inputRelation3: "",
      inputRelation3S: "",
      inputRelationPDF3: null,

      // Competition Environment
      inputCompetitionEnvironment1: "",
      inputCompetitionEnvironment1S: "",
      inputCompetitionEnvironmentPDF1: null,

      inputCompetitionEnvironment2: "",
      inputCompetitionEnvironment2S: "",
      inputCompetitionEnvironmentPDF2: null,

      inputCompetitionEnvironment3: "",
      inputCompetitionEnvironment3S: "",
      inputCompetitionEnvironmentPDF3: null,

      // Stategy
      inputStategy: "",
      inputStategyS: "",
      inputStategyPDF1: null,

      // Performance improvement system
      inputPerformanceSystem: "",
      inputPerformanceSystemS: "",
      inputPerformanceSystemPDF1: null,

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    async getData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory0.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("aid"),
        year: this.$q.sessionStorage.getItem("y")
      };
      let data = await Axios.post(url, postData);
      let getData = data.data;

      if (getData) {
        // ข้อ 1 ก 1
        let inputEnvironment1 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "1"
        );

        if (inputEnvironment1.length) {
          this.inputEnvironment1 = inputEnvironment1[0].text;
          this.inputEnvironment1S = inputEnvironment1[0].suggesstion;
         
        }

        // ข้อ1 ก2
        let inputEnvironment2 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "2"
        );

        if (inputEnvironment2.length) {
          this.inputEnvironment2 = inputEnvironment2[0].text;
          this.inputEnvironment2S = inputEnvironment2[0].suggesstion;
        
        }

        // ข้อ1 ก3
        let inputEnvironment3 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "3"
        );

        if (inputEnvironment3.length) {
          this.inputEnvironment3 = inputEnvironment3[0].text;
            this.inputEnvironment3S = inputEnvironment3[0].suggesstion;
         
        }

        // ข้อ1 ก4
        let inputEnvironment4 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "4"
        );
        if (inputEnvironment4.length) {
          this.inputEnvironment4 = inputEnvironment4[0].text;
            this.inputEnvironment4S = inputEnvironment4[0].suggesstion;
         
        }

        // ข้อ1 ก5
        let inputEnvironment5 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "5"
        );
        if (inputEnvironment5.length) {
          this.inputEnvironment5 = inputEnvironment5[0].text;

            this.inputEnvironment5S = inputEnvironment5[0].suggesstion;
        
        }

        // ข้อ1 ข1
        let inputRelation1 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "1"
        );
        if (inputRelation1.length) {
          this.inputRelation1 = inputRelation1[0].text;

           this.inputRelation1S = inputRelation1[0].suggesstion;
        
        }

        // ข้อ1 ข2
        let inputRelation2 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "2"
        );

        if (inputRelation2.length) {
          this.inputRelation2 = inputRelation2[0].text;
             this.inputRelation2S = inputRelation2[0].suggesstion;
          
        }

        // ข้อ1 ข3
        let inputRelation3 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "3"
        );

        if (inputRelation3.length) {
          this.inputRelation3 = inputRelation3[0].text;
            this.inputRelation3S = inputRelation3[0].suggesstion;
        
        }

        // ข้อ2 ก1
        let inputCompetitionEnvironment1 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "1"
        );
        if (inputCompetitionEnvironment1.length) {
          this.inputCompetitionEnvironment1 =
            inputCompetitionEnvironment1[0].text;

            this.inputCompetitionEnvironment1S = inputCompetitionEnvironment1[0].suggesstion;
         
        }

        // ข้อ2 ก2
        let inputCompetitionEnvironment2 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "2"
        );

        if (inputCompetitionEnvironment2.length) {
          this.inputCompetitionEnvironment2 =
            inputCompetitionEnvironment2[0].text;

            this.inputCompetitionEnvironment2S = inputCompetitionEnvironment2[0].suggesstion;

         
        }

        // ข้อ2 ก3
        let inputCompetitionEnvironment3 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "3"
        );
        if (inputCompetitionEnvironment3.length) {
          this.inputCompetitionEnvironment3 =
            inputCompetitionEnvironment3[0].text;

              this.inputCompetitionEnvironment3S = inputCompetitionEnvironment3[0].suggesstion;
         
        }

        // ข้อ2 ข1
        let inputStategy = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ข." &&
            x.category_q_number == "1"
        );
        if (inputStategy.length) {
          this.inputStategy = inputStategy[0].text;
              this.inputStategyS = inputStategy[0].suggesstion;
         
        }

        // ข้อ2 ค1
        let inputPerformanceSystem = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ค." &&
            x.category_q_number == "1"
        );
        if (inputPerformanceSystem.length) {
          this.inputPerformanceSystem = inputPerformanceSystem[0].text;
              this.inputPerformanceSystemS = inputPerformanceSystem[0].suggesstion;
         
        }
      }
      this.loadingHide();
    },

    async saveData() {
      let uid = this.$q.sessionStorage.getItem("uid");
      // ข้อ1 หมวด ก ข้อที่1
      let sendData = [
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 1,
          text: this.inputEnvironment1,
          suggesstion: this.inputEnvironment1S
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 2,
          text: this.inputEnvironment2,
          suggesstion: this.inputEnvironment2S
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 3,
          text: this.inputEnvironment3,
          suggesstion: this.inputEnvironment3S
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 4,
          text: this.inputEnvironment4,
          suggesstion: this.inputEnvironment4S
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 5,
          text: this.inputEnvironment5,
          suggesstion: this.inputEnvironment5S
        },
        // หมวด ข
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 1,
          text: this.inputRelation1,
          suggesstion: this.inputRelation1S
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 2,
          text: this.inputRelation2,
          suggesstion: this.inputRelation2S
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 3,
          text: this.inputRelation3,
          suggesstion: this.inputRelation3S
        },
        // เริ่มข้อ2 หมวด ก.
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 1,
          text: this.inputCompetitionEnvironment1,
          suggesstion: this.inputCompetitionEnvironment1S
        },
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 2,
          text: this.inputCompetitionEnvironment2,
          suggesstion: this.inputCompetitionEnvironment2S
        },
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 3,
          text: this.inputCompetitionEnvironment3,
          suggesstion: this.inputCompetitionEnvironment3S
        },
        // เริ่มข้อ2 หมวด ข.
        {
          q_number: 2,
          user_id: uid,
          category: "ข.",
          category_q_number: 1,
          text: this.inputStategy,
          suggesstion: this.inputStategyS
        },
        // เริ่มข้อ2 หมวด ค.
        {
          q_number: 2,
          user_id: uid,
          category: "ค.",
          category_q_number: 1,
          text: this.inputPerformanceSystem,
          suggesstion: this.inputPerformanceSystemS
        }
      ];
      let finalData = {
        postData: sendData,
        mode: 0,
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("aid")
      };

      const url = this.apiPath + "assessorUpdateCategory0.php";
      let post = await Axios.post(url, finalData);
      this.isSaveData = true;

      setTimeout(() => {
        this.isSaveData = false;

        this.$emit("statusForm", true);
      }, 1000);
    },

    openFile(type, q_number, category, category_q_number) {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      if (category == "ก.") {
        category = "a";
      } else if (category == "ข.") {
        category = "b";
      } else {
        category = "c";
      }
      let r = Math.random()
        .toString(36)
        .substring(7);
      let fileName;
      if (type == "pdf") {
        fileName = `${uid}-${q_number}-${category}-${category_q_number}-${year}.pdf?${r}`;
      } else {
        fileName = `${uid}-${q_number}-${category}-${category_q_number}-${year}.jpg?${r}`;
      }
      let link = this.apiPath + "uploadcategory0/" + fileName;
      window.open(link);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped></style>
