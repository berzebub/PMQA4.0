<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 5 การมุ่งเน้นบุคลากร</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep2"
            header-class="bg-white "
            dense-toggle=""
            dense=""
            expand-icon-class="text-grey-10"
            :default-opened="index == 0"
            header-style="height:70px;"
          >
            <template v-slot:header>
              <div class="row full-width q-pa-sm">
                <div class="col self-center">
                  <span>{{ item.header }}</span>
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                    
                    <span class="font-18" v-if="item.status == -1">
                      ยังไม่ทำการประเมิน
                    </span>
                    <span v-else>
                      {{ Math.round(item.score) }}
                    </span>
                    </span>
                    <span v-else> Significance </span>
                  </div>
                </div>
              </div>
            </template>

            <q-card>
              <q-separator class="bg-grey-7" style="height: 1px;"></q-separator>

              <div>
                <div class="bg4 row">
                  <div class="col-6" style="width:530px;">
                    <q-tabs
                      v-model="tabs[index]"
                      dense
                      align="justify"
                      class="text-black"
                      active-color="black"
                      indicator-color="pink-5"
                      narrow-indicator
                    >
                      <q-tab content-class="q-pa-sm" no-caps="" name="Basic">
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-show="item.status >= 1"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="item.status >= 2"
                            ></q-icon>
                            <span>Advance </span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="item.status == 3"
                            ></q-icon>
                            <span>Significance</span>
                          </div>
                        </template></q-tab
                      >
                    </q-tabs>
                  </div>
                </div>
                <div class=" q-pa-md">
                  <q-tab-panels v-model="tabs[index]" animated>
                    <!-- Basic -->
                    <q-tab-panel name="Basic" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-sm">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span v-html="item.basic.titleText"></span>
                            </div>
                          </div>

                          <q-separator></q-separator>

                          <!-- Check Box Basic -->
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div
                                class="row"
                                v-for="(checkbox, index3) in item.basic
                                  .checkBox"
                                :class="index3 != 0 ? 'q-mt-md' : null"
                              >
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox color="pink-4" keep-color="" v-model="checkbox.status" value />
                                </div>
                                <div
                                  class="col  q-py-xs"
                                  v-html="checkbox.text"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col q-pl-lg q-pr-sm ">
                          <!-- Explain Basic -->
                          <div>
                            <div>
                              <span class="font-18b"
                                >คำอธิบายผลการประเมิน
                              </span>
                            </div>
                            <div class="q-my-md">
                              <q-input
                                v-model="item.basic.explain"
                                outlined=""
                                placeholder="คำอธิบายผลการประเมิน"
                                type="textarea"
                                rows="17"
                              />
                            </div>
                          </div>

                          <!-- Upload File Basic -->
                          <div class="q-px-md ">
                            <div class="q-mt-lg">
                              <span class="font-18b"
                                >อัพโหลดข้อมูลเพิ่มเติม
                              </span>
                            </div>
                            <div class="row  q-my-sm">
                              <div
                                class="col-4  q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="item.basic.pdf_file"
                                  dense=""
                                  style="overflow:hidden;"
                                  :style="
                                    !item.basic.pdf_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                  v-if="!item.basic.pdf_file"
                                  @input="saveData(item.no, 'basic')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!item.basic.pdf_file"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม
                                      </span>
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                      >
                                        pdf เอกสารเพิ่มเติม
                                      </span>
                                    </div>
                                  </template>
                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  class="relative-position cursor-pointer"
                                  align="center"
                                  v-if="item.basic.pdf_file"
                                >
                                  <div
                                    class="full-width q-py-xs"
                                    align="center"
                                    style="border:2px solid #000000;border-radius:0px;"
                                    @click="getPDF(item.no, 'basic')"
                                  >
                                    <q-icon
                                      name="fas fa-file-pdf"
                                      class="color1 q-px-xs"
                                      size="20px"
                                    ></q-icon>
                                    <span
                                      class="font-14 text-black"
                                      style="text-decoration:underline"
                                    >
                                      pdf เอกสารเพิ่มเติม
                                    </span>
                                  </div>
                                  <div
                                    class="bg1 text-white font-12 q-py-sm"
                                    @click="
                                      (typeFile = 'PDF'),
                                        (typeNo = item.no),
                                        (typeMode = 'basic'),
                                        (isDelete = true)
                                    "
                                  >
                                    ลบไฟล์
                                  </div>
                                </div>
                              </div>
                            
                              <div class="col  q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData(item.no, 'basic')"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- ADVANCE -->
                    <q-tab-panel name="Advance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span v-html="item.advance.titleText"></span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div
                              class="q-mt-sm"
                              v-for="(checkbox, advanceCheckboxIndex) in item
                                .advance.checkBox"
                              :key="advanceCheckboxIndex"
                            >
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox color="pink-4" keep-color="" v-model="checkbox.status" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span v-html="checkbox.text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col q-pl-lg q-pr-sm">
                          <div>
                            <div>
                              <span class="font-18b">คำอธิบายผลการประเมิน</span>
                            </div>
                            <div class="q-my-md">
                              <q-input
                                v-model="item.advance.explain"
                                outlined=""
                                placeholder="คำอธิบายผลการประเมิน"
                                type="textarea"
                                rows="17"
                              />
                            </div>
                          </div>

                          <div>
                            <div class="q-mt-lg">
                              <span class="font-18b"
                                >อัพโหลดข้อมูลเพิ่มเติม</span
                              >
                            </div>
                            <div class="row justify-between q-my-sm">
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="item.advance.pdf_file"
                                  dense=""
                                  style="overflow:hidden;"
                                  :style="
                                    !item.advance.pdf_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                  @input="saveData(item.no, 'advance')"
                                  v-if="!item.advance.pdf_file"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!item.advance.pdf_file"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  class=" relative-position cursor-pointer"
                                  align="center"
                                  v-if="item.advance.pdf_file"
                                >
                                  <div
                                    class="full-width q-py-xs"
                                    align="center"
                                    style="border:2px solid #000000;border-radius:0px"
                                    @click="getPDF(item.no, 'advance')"
                                  >
                                    <q-icon
                                      name="fas fa-file-pdf"
                                      class="color1 q-px-xs"
                                    ></q-icon>
                                    <span
                                      class="font-14 text-black"
                                      style="text-decoration:underline"
                                      >pdf เอกสารเพิ่มเติม</span
                                    >
                                  </div>
                                  <div
                                    @click="
                                      (typeFile = 'PDF'),
                                        (typeNo = item.no),
                                        (typeMode = 'advance'),
                                        (isDelete = true)
                                    "
                                    class="text-white font-12 bg1 q-py-sm"
                                  >
                                    ลบไฟล์
                                  </div>
                                </div>
                              </div>
                         
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData(item.no, 'advance')"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- SIGNIFICANCE -->
                    <q-tab-panel name="Significance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span v-html="item.significance.titleText">
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div
                              class="q-mt-sm"
                              v-for="(checkbox, signiCheckboxIndex) in item
                                .significance.checkBox"
                              :key="signiCheckboxIndex"
                            >
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox color="pink-4" keep-color=""
                                    v-model="
                                      data[index].significance.checkBox[
                                        signiCheckboxIndex
                                      ].status
                                    "
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span v-html="checkbox.text"> </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col q-pl-lg q-pr-sm">
                          <div>
                            <div>
                              <span class="font-18b">คำอธิบายผลการประเมิน</span>
                            </div>
                            <div class="q-my-md">
                              <q-input
                                v-model="item.significance.explain"
                                outlined=""
                                placeholder="คำอธิบายผลการประเมิน"
                                type="textarea"
                                rows="17"
                              />
                            </div>
                          </div>

                          <div>
                            <div class="q-mt-lg">
                              <span class="font-18b"
                                >อัพโหลดข้อมูลเพิ่มเติม</span
                              >
                            </div>
                            <div class="row justify-between q-my-sm">
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="item.significance.pdf_file"
                                  v-if="!item.significance.pdf_file"
                                  dense=""
                                  style="overflow:hidden;"
                                  :style="
                                    !item.significance.pdf_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                  @input="saveData(item.no, 'significance')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!item.significance.pdf_file"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        @click="getPDF(item.no, 'significance')"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>

                                <div
                                  class=" relative-position cursor-pointer"
                                  align="center"
                                  v-if="item.significance.pdf_file"
                                >
                                  <div
                                    class="full-width q-py-xs"
                                    align="center"
                                    style="border:2px solid #000000;border-radius:0px"
                                    @click="getPDF(item.no, 'significance')"
                                  >
                                    <q-icon
                                      name="fas fa-file-pdf"
                                      class="color1 q-px-xs"
                                    ></q-icon>
                                    <span
                                      class="font-14 text-black"
                                      style="text-decoration:underline"
                                      >pdf เอกสารเพิ่มเติม</span
                                    >
                                  </div>
                                  <div
                                    @click="
                                      (typeFile = 'PDF'),
                                        (typeNo = item.no),
                                        (typeMode = 'significance'),
                                        (isDelete = true)
                                    "
                                    class="text-white font-12 bg1 q-py-sm"
                                  >
                                    ลบไฟล์
                                  </div>
                                </div>
                              </div>
                          
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData(item.no, 'significance')"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>
                  </q-tab-panels>
                </div>
              </div>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>


    <q-dialog v-model="isDelete" persistent="">
      <q-card style="max-width:400px;width:100%;">
        <q-card-section align="center">
          <div class="q-pb-md">
            <span style="font-size:24px;">ลบไพล์</span>
          </div>
          <div class="q-pa-md font-18">
            <span>คุณต้องการลบไฟล์ {{ typeFile }} หรือไม่</span>
          </div>
        </q-card-section>
        <q-card-section>
          <div align="center">
            <q-btn
              class="font-14 q-mx-xs"
              dense=""
              outline=""
              style="width:130px;border-radius:0px;"
              label="ยกเลิก"
              v-close-popup
            ></q-btn>
            <q-btn
              class="bg-teal text-white font-14 q-mx-xs"
              push
              dense=""
              style="width:130px;border-radius:0px;"
              label="ตกลง"
              :disable="isSaveData"
              @click="deleteFile(typeNo, typeMode)"
            ></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      // restructure
      data: [
        {
          header: `5.1 นโยบายและระบบการจัดการด้านบุคลากรที่มีประสิทธิภาพ ตอบสนองยุทธศาสตร์ และสร้างแรงจูงใจ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 5.1 basic
          basic: {
            mode: "basic",
            titleText: `- ระบบการสรรหา ว่าจ้างบรรจุ และการจัดวางคนไปยังตำแหน่งงานที่ตรงกับความถนัดและความต้องการเพื่อประโยชน์สูงสุดของระบบงาน ของราชการ โดยคำนึงถึงความต้องการที่หลากหลายของประชาชน`,
            checkBox: [
              {
                text: `ระบบการสรรหา ว่าจ้าง บรรจุมีประสิทธิภาพ โปร่งใสและเหมาะสม`,
                status: false
              },
              {
                text: `การจัดโครงสร้างการทำงานและการจัดวางบุคลากรไปอยู่ตำแหน่ง
ที่เหมาะสมกับการใช้ความรู้และประสบการณ์ อย่างเต็มความสามารถก่อให้เกิดประโยชน์สูงที่สุดต่อองค์กรและตอบโจทย์ ความต้องการของประชาชน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.1 advanec
          advance: {
            mode: "advance",
            titleText: `- การประเมินประสิทธิผลการทำงานและเส้นทางความก้าวหน้าของ บุคลากรทุกกลุ่มสามารถสร้างแรงจูงใจให้บุคลากรทุ่มเท และทำงานให้มีประสิทธิภาพสูงตอบสนองยุทธศาสตร์และมุ่งเน้นประโยชน์สุขแก่ ประชาชน (High Performance)`,
            checkBox: [
              {
                text: `ระบบการประเมินประสิทธิผลการทำงานของบุคลากรทุกกลุ่ม มีความชัดเจน โปร่งใส
`,
                status: false
              },
              {
                text: `เปิดโอกาสให้บุคลากรทุกคนสามารถวางแผนเส้นทางความก้าวหน้าของตนเองและพัฒนาความสามารถของตนในระยะยาว`,
                status: false
              },
              {
                text: `กลไกในการกระตุ้นให้บุคลากรเกิดแรงจูงใจ และมีการทำงานที่มีประสิทธิภาพสูง`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.1 significance
          significance: {
            mode: "significance",
            titleText: `- นโยบายการจัดการด้านบุคลากรสนับสนุนการทำงานที่มีความคล่องตัวและปรับเปลี่ยนให้ทันต่อการเปลี่ยนแปลงของสภาพแวดล้อมการทำงาน`,
            checkBox: [
              {
                text: `การบูรณาการงานบริหารบุคลากรกับการปรับปรุงการทำงานของทุกๆกระบวนงาน ให้เกิดการทำงานที่มีประสิทธิภาพสูง`,
                status: false
              },
              {
                text: `นโยบายด้านการส่งเสริมให้เกิดการสร้างนวัตกรรมและการทำงานเป็นทีม`,
                status: false
              },
              {
                text: `การจัดการด้านบุคลากรเพื่อให้เกิดความคล่องตัวในการประสานงานในแนวระนาบกับหน่วยอื่นๆ`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************************************************************
        {
          header:
            "5.2 ระบบการทำงานที่มีประสิทธิภาพ คล่องตัว และมุ่งเน้นผลสัมฤทธิ์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 5.2 basic
          basic: {
            mode: "basic",
            titleText: `สภาพแวดล้อมในการทำงานที่
  <br>- ปลอดภัย
  <br>- สนับสนุนการทำงานที่มีประสิทธิภาพ
  <br>- คล่องตัว
 <br>- ร่วมกันทำงานให้เกิดประสิทธิผล
`,
            checkBox: [
              {
                text: `ปลอดภัย`,
                status: false
              },
              {
                text: `มีประสิทธิภาพ`,
                status: false
              },
              {
                text: `เป็นไปตามกรอบของกฏหมาย`,
                status: false
              },
              {
                text: `คล่องตัวและร่วมกันทำงานให้เกิดประสิทธิผล`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- สภาพแวดล้อมที่เอื้อให้บุคลากรมีความรับผิดชอบ (Empower) กล้า ตัดสินใจเข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหาเพื่อบรรลุแผนงานหลักขององค์กร`,
            checkBox: [
              {
                text: `มีความรับผิดชอบ`,
                status: false
              },
              {
                text: `กล้าตัดสินใจ`,
                status: false
              },
              {
                text: `เข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหา`,
                status: false
              },
              {
                text: `มีการพัฒนาระบบฐานข้อมูลให้พร้อมสนับสนุนการทำงานอย่างมีประสิทธิภาพ`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.2 significance
          significance: {
            mode: "significance",
            titleText: `- การทำงานที่เป็นทีมที่มีสมรรถะสูง มีความคล่องตัวและสามารถทำงานร่วมกับเครือข่ายภายนอก เพื่อนำไปสู่แก้ไขปัญหาที่ซับซ้อนอย่างมีประสิทธิผล`,
            checkBox: [
              {
                text: `มีการทำงานเป็นทีมภายในองค์กร`,
                status: false
              },
              {
                text: `มีกระบวนการสร้างความร่วมือกับเครือข่ายภาคประชาชนและเอกชนภานนอกในลักษณะของทีมสหสาขา (Trans-disciplinary) เพื่อร่วมกันแก้ปัญหา`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************5.3 *******************************************
        {
          header: `5.3 การสร้างวัฒนธรรมการทำงานที่ดี มีประสิทธิภาพ และความร่วมมือ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 2.3 basic
          basic: {
            mode: "basic",
            titleText: `- การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ เปิดโอกาสในการนำเสนอความริเริ่มและสนับสนุนความคิดสร้างสรรค์`,
            checkBox: [
              {
                text: `การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ คือ มีความรอบรู้ เชี่ยวชาญ และถูกต้องตามมาตรฐาน`,
                status: false
              },
              {
                text: `เปิดโอกาสในการนำเสนอความคิดริเริ่มและสนับสนุนความคิดสร้างสรรค์`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.3 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- การค้นหาปัจจัยที่ทำให้บุคลากรมีความผูกพัน ทุ่มเทมีผลการปฏิบัติงานที่ดีและสร้างวัฒนธรรมการทำงานที่นำไปสู่ผลลัพธ์ขององค์กร
`,
            checkBox: [
              {
                text: `การค้นหาปัจจัยที่ส่งผลต่อความผูกพัน การทุ่มเท และผลการปฏิบัติงานที่ดีของบุคลากร`,
                status: false
              },
              {
                text: `มีการวิเคราะห์ความสัมพันธ์ระหว่างปัจจัยที่สร้างความผูกพันกับผลลัพธ์ขององค์กร`,
                status: false
              },
              {
                text: `นำปัจจัยดังกล่าวมาใช้ในการสร้างให้บุคลากรเกิดแรงจูงใจ เพื่อให้เกิดผลการปฏิบัติงานที่ดี`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.3 significance
          significance: {
            mode: "significance",
            titleText: `- การสร้างวัฒนธรรมการทำงานที่มีประสิทธิภาพสูง สร้างความภูมิใจ และความเป็นเจ้าของ ให้แก่บุคลากร (Public Entrepreneurship) และร่วมมือเพื่อนำพาองค์กรไปสู่ความสำเร็จ และประโยชน์ที่เกิด กับสังคมและประชาชน`,
            checkBox: [
              {
                text: `สร้างวัฒนธรรมการทำงานที่มุ่งเน้นความคล่องตัวและการมีประสิทธิภาพสูง`,
                status: false
              },
              {
                text: `ส่งเสริมการแก้ปัญหาเชิงรุก`,
                status: false
              },
              {
                text: `สร้างแนวคิดของการเป็นผู้ประกอบการภาครัฐ โดยมุ่งเน้น ประโยชน์ของส่วนรวม ผู้รับบริการหรือผุ้มีส่วนได้ส่วนเสีย เป็นหลัก`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 5.4 *****************************
        {
          header: `5.4 ระบบการพัฒนาบุคลากรให้มีความรู้ ความสามารถ ก้าวทันเทคโนโลยีแก้ไขปัญหาสร้างความรอบรู้ และความมีจริยธรรม`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 4.4 basic
          basic: {
            mode: "basic",
            titleText: `ระบบการพัฒนาบุคลากรที่สร้างคนให้มี
  <br>- คุณธรรม จริยธรรม
  <br>- มีความรู้และทักษะในการแก้ปัญหา
  <br>- ทักษะด้านดิจิทัล และความรอบรู้ให้ทันต่อการเปลี่ยนแปลง
`,
            checkBox: [
              {
                text: `ความรู้ความสามารถในการทำงานและการแก้ปัญหา`,
                status: false
              },
              {
                text: `คุณธรรม และจริยธรรม`,
                status: false
              },
              {
                text: `ความรู้และทักษะด้านดิจิทัล`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.4 advanec
          advance: {
            mode: "advance",
            titleText: `- ระบบการพัฒนาบุคลากรเพื่อเพิ่มพูน สั่งสมทักษะความรู้ความ เชี่ยวชาญในด้านต่างๆที่มีความสำคัญต่อสมรรถะหลักและการบรรลุเป้าหมายยุทธศาสตร์ของส่วนราชการ`,
            checkBox: [
              {
                text: `แผนพัฒนาบุคลากรที่ตอบสนองยุทธศาสตร์
`,
                status: false
              },
              {
                text: `แผนพัฒนาบุคลากรที่ตอบสนองการสร้างสมรรถนะหลักขององค์กรทั้งทักษะความรู้ และความเชี่ยวชาญเฉพาะด้าน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.4 significance
          significance: {
            mode: "significance",
            titleText: `- ระบบการพัฒนาบุคลากรและผู้นำให้มีทักษะที่สามารถปฏิบัติงานได้ หลากหลายมีความรอบรู้ สามารถตัดสินใจและมีความคิดในเชิงวิกฤติ พร้อมรับปัญหาที่มีความซับซ้อนมากยิ่งขึ้น (Fluid Intelligence / Complex Problem Solving)`,
            checkBox: [
              {
                text: `การพัฒนาบุคลากรให้มีทักษะและสามารถปฏิบัติงานได้หลากหลาย`,
                status: false
              },
              {
                text: `การพัฒนาบุคลากรและผู้นำให้มีความรอบรู้ เป็นนักคิด มีความสามารถในการตัดสินใจ มีความคิดเชิงวิกฤต (Critical Thinking) ที่จะพร้อมรับกับปัญหาที่มีความซับซ้อน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        }
      ],

      typeFile: "",
      typeNo: "",
      typeMode: "",
      isDelete: false,
      assessmentData: "",
      isLoadAssessmentFinish: true,
      // Save Data
      isSaveData: false,
      tabs: ["Basic", "Basic", "Basic", "Basic"]
    };
  },
  methods: {
   
    deleteFile(no, mode) {
      if (this.typeFile == "PDF") {
        this.data[this.typeNo - 1][this.typeMode].pdf_file = null;
      } else {
        this.data[this.typeNo - 1][this.typeMode].img_file = null;
      }
      this.saveData(no, mode);
    },
    checkStatus(no) {
      let res = -1;
      if (this.basic_guide_list[no - 1].includes(false)) {
        // ทำ basic แล้วแต่ไม่ครบ
        res = 0; //ไม่ได้คะแนน
      } else {
        //   // ทำ basic ครบ เช็ค advance ต่อ
        res = 1;
        if (this.advance_guide_list[no - 1].includes(false)) {
          // ทำ advance แล้วแต่ไม่ครบ
          res = 1; //basic
        } else {
          // advanceครบ
          res = 2;
          if (this.signifi_guide_list[no - 1].includes(false)) {
            // ทำ signi แต่ไม่ครบ
            res = 2;
          } else {
            res = 3;
          }
        }
      }
      return res;
    },

    checkInitialStatus(no) {
      let checkStatus = this.assessmentData.filter(
        x => x.q_number == no.toString()
      );
      if (checkStatus.length == 0) {
        return -1;
      } else {
        return this.checkStatus(no);
      }
    },

    

    async checkPassStatus(){
      let status = 0
      let mapStatus = this.data.map(x =>x.status)
      if(!mapStatus.includes(-1)){
        // ประเมินครบแล้วทุกข้อ
        status = 1
      }else if (mapStatus.every(x => x == -1)){
        // ยังไม่เคยทำสักข้อ
        status = 0
      }else{
        // ทำแล้วบางข้อ
        status = 2
      }

     const url = this.apiPath + "user/setUserStepperLog.php";
     let postData = {
          category: "category5",
          user_id: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          status: status // 1 = finish
        };
        let data = await Axios.post(url, postData);
        this.$emit("statusForm")
    },

    async saveData(no, mode) {
      console.clear()

     
      // this.isSaveData = true;

      let index = no - 1;
      let score = 0
      const url = this.apiPath + "user/addUpdateCategory1_6.php";
      const userId = this.$q.sessionStorage.getItem("uid");
      const year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();

      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("mode", mode);
      formData.append("year", year);
      formData.append("step", 5);

      let basicCheckbox = this.data[index].basic.checkBox.map(x => x.status == true ? 1 : 0)
      let advanceCheckbox  = this.data[index].advance.checkBox.map(x => x.status == true ? 1 : 0)
      let signiCheckbox  = this.data[index].significance.checkBox.map(x => x.status == true ? 1 : 0)

      // console.log("--")
      // console.log(advanceCheckbox)
      // console.log("--")
      // console.log(signiCheckbox)

// Basic
let scorePerCheckboxBasic = 300 / basicCheckbox.length
let scoreBasic = basicCheckbox.filter(x => x == 1)
scoreBasic = scorePerCheckboxBasic * scoreBasic.length
// advance
let scorePerCheckboxAdvance = 100 / advanceCheckbox.length
let scoreAdvance = advanceCheckbox.filter(x => x == 1)
scoreAdvance = scorePerCheckboxAdvance * scoreAdvance.length
// signi
let scorePerCheckboxSigni = 100 / signiCheckbox.length;
let scoreSigni = signiCheckbox.filter(x => x == 1)
scoreSigni = scorePerCheckboxSigni * scoreSigni.length

score += scoreBasic
if(basicCheckbox.every(x => x == 1)){
  score+= scoreAdvance
}
 if (advanceCheckbox.every(x => x == 1) && basicCheckbox.every(x => x == 1)){
  score += scoreSigni
}

this.data[index].score = score
this.data[index].status = 0
this.data.push("")
this.data.pop()

   formData.append("score", score);
     let checkBox = this.data[index].basic.checkBox;

        checkBox = checkBox.map(x => (x.status == true ? 1 : 0));
     let checkBoxAdvance = this.data[index].advance.checkBox;

          checkBoxAdvance = checkBoxAdvance.map(x =>
            x.status == true ? 1 : 0
          );
   let checkBoxSigni = this.data[index].significance.checkBox;

            checkBoxSigni = checkBoxSigni.map(x => (x.status == true ? 1 : 0));

            // Check Status

            let isCheckBasicAll = !checkBox.includes(0)
            let isCheckAdvanceAll = !checkBoxAdvance.includes(0)
            let isCheckSigniAll = !checkBoxSigni.includes(0)

            if(isCheckBasicAll){
              this.data[index].status = 1
            }

            if(isCheckBasicAll && isCheckAdvanceAll){
              this.data[index].status = 2
            }

            if(isCheckBasicAll && isCheckAdvanceAll && isCheckSigniAll){
              this.data[index].status = 3
            }



      // if (no == 1) {
      // save 1.1 basic
      if (mode == "basic") {
        // mode basic
        formData.append("pdf", this.data[index].basic.pdf_file);
      
        let resCheckBox = checkBox.join();

        formData.append("check_box", resCheckBox);
        formData.append("text", this.data[index].basic.explain);
        let data = await Axios.post(url, formData);

       
      } else if (mode == "advance") {
        //  mode advance
        formData.append("img", this.data[index].advance.img_file);
        formData.append("pdf", this.data[index].advance.pdf_file);
        let checkBox = this.data[index].advance.checkBox;

        checkBox = checkBox.map(x => (x.status == true ? 1 : 0));

        let resCheckBox = checkBox.join();

        formData.append("check_box", resCheckBox);
        formData.append("text", this.data[index].advance.explain);
        let data = await Axios.post(url, formData);
      
      } else {
        // mode significance
        formData.append("img", this.data[index].significance.img_file);
        formData.append("pdf", this.data[index].significance.pdf_file);
        let checkBox = this.data[index].significance.checkBox;

        checkBox = checkBox.map(x => (x.status == true ? 1 : 0));

        let resCheckBox = checkBox.join();

        formData.append("check_box", resCheckBox);
        formData.append("text", this.data[index].significance.explain);
        let data = await Axios.post(url, formData);
     
      }

      this.isSaveData = false;

      this.isDelete = false;
           this.checkPassStatus()
    },
   getBasic(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "basic");
        if (getData.length > 0) {
          if (getData[0].text != "undefined") {
            this.data[i - 1].basic.explain = getData[0].text;
          } else {
            this.data[i - 1].basic.explain = "";
          }
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

          this.data[i - 1].status = 0;
          if (!checkBox.includes(false)) {
            this.data[i - 1].status = 1;
          }

          for (let j = 0; j < checkBox.length; j++) {
            this.data[i - 1].basic.checkBox[j].status = checkBox[j];
          }

          this.data[i - 1].score = getData[0].score;

          this.data[i - 1].basic.pdf_file =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      }
    },
    getAdvance(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "advance");
        let getDataBasic = data.filter(
          x => x.q_number == i && x.mode == "basic"
        );
        if (getData.length > 0) {
          this.data[i - 1].advance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));
          let checkBoxBasic = this.data[i - 1].basic.checkBox.map(
            x => x.status
          );

          if (getDataBasic.length) {
            if (!checkBoxBasic.includes(false) && !checkBox.includes(false)) {
              this.data[i - 1].status = 2;
            }
            checkBoxBasic = getDataBasic[0].check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }

          if (!checkBox.includes(false) && !checkBoxBasic.includes(false)) {
            // ผ่าน advance
            this.data[i - 1].status = 2;
          }

          for (let j = 0; j < checkBox.length; j++) {
            this.data[i - 1].advance.checkBox[j].status = checkBox[j];
          }

          this.data[i - 1].score = getData[0].score;

          this.data[i - 1].advance.pdf_file =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      }
    },
    getSignificance(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(
          x => x.q_number == i && x.mode == "significance"
        );
        let getDataBasic = data.filter(
          x => x.q_number == i && x.mode == "basic"
        );
        let getDataAdvance = data.filter(
          x => x.q_number == i && x.mode == "advance"
        );

        if (getData.length > 0) {
          this.data[i - 1].significance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

          let checkBoxBasic = this.data[i - 1].basic.checkBox.map(
            x => x.status
          );
          if (getDataBasic.length) {
            checkBoxBasic = getDataBasic[0].check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }
          let checkBoxAdvance = this.data[i - 1].advance.checkBox.map(
            x => x.status
          );
          if (getDataAdvance.length) {
            checkBoxAdvance = getDataAdvance[0].check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }

          if (
            !checkBoxBasic.includes(false) &&
            !checkBoxAdvance.includes(false) &&
            !checkBox.includes(false)
          ) {
            this.data[i - 1].status = 3;
          }

          if (
            !checkBox.includes(false) &&
            !checkBoxBasic.includes(false) &&
            !checkBoxAdvance.includes(false)
          ) {
            this.data[i - 1].status = 3;
          }

          for (let j = 0; j < checkBox.length; j++) {
            this.data[i - 1].significance.checkBox[j].status = checkBox[j];
          }

          this.data[i - 1].score = getData[0].score;

          this.data[i - 1].significance.pdf_file =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      }
    },

    async getAssessmentData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory1_6.php";
      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid"),
        step: 5
      };
      let data = await Axios.post(url, postData);
      this.assessmentData = data.data;
      if (data.data) {
        this.getBasic(data.data);
        this.getAdvance(data.data);
        this.getSignificance(data.data);
      }

      this.isLoadAssessmentFinish = true;
      this.loadingHide();
    },
   
    getPDF(no, mode) {
      let random = Math.random()
        .toString(36)
        .substring(7);
      let pdfFileName = `${this.$q.sessionStorage.getItem(
        "uid"
      )}-5-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

      window.open(
        "https://api.winner-english.com/pmqa4_0_api/upload/" +
          pdfFileName +
          "?" +
          random
      );
    },
 
  },

  created() {
    this.getAssessmentData();
  }
};
</script>

<style lang="scss" scoped></style>
