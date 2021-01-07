<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 2 การวางแผนเชิงยุทธศาสตร์</span>
      </div>
    </div>

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
                      {{ parseInt(item.score) }}
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
            <span style="font-size:24px;">ลบไฟล์</span>
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
          header: `2.1 กระบวนการวางแผนยุทธศาสตร์ที่ตอบสนองความท้าทาย สร้างนวัตกรรมเพื่อสร้างการเปลี่ยนแปลงและมุ่งเน้นประโยชน์สุขของประชาชน`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 2.1 basic
          basic: {
            mode: "basic",
            titleText: `- กระบวนการวางแผนยุทธศาสตร์อย่างเป็นระบบทั้งระยะสั้นและระยะยาว ตอบสนองความต้องการของประชาชนและบรรลุพันธกิจส่วน
ราชการ<br>
- แนวทางการถ่ายทอดยุทธศาสตร์สู่การปฏิบัติ
`,
            checkBox: [
              {
                text: `กระบวนการวางแผนยุทธศาสตร์เป็นระบบและสนับสนุนการ
บรรลุพันธกิจ ส่วนราชการทั้งระยะสั้น ระยะยาว`,
                status: false
              },
              {
                text: `วิเคราะห์สภาพแวดล้อมในการแข่งขัน`,
                status: false
              },
              {
                text: `วางแผนยุทธศาสตร์โดยคำนึงถึง<br>
- ประโยชน์สุขประชาชน<br>
- รองรับการเปลี่ยนแปลงจาก สถาพแวดล้อมภายนอก เช่น<br>
การแข่งขั้นจากภายนอกองค์กร / นอกประเทศ ความต้องการของประชาชนที่เปลี่ยนแปลงไป`,
                status: false
              },
              {
                text: `แนวทาง/ช่องทางการสื่อสาร ถ่ายทอดยุทธศาสตร์สู่ การปฏิบัติ`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.1 advanec
          advance: {
            mode: "advance",
            titleText: `- แผนยุทธศาสตร์ตอบสนองความท้าท้ายของส่วนราชการมีการ คาดการณ์การเปลี่ยนแปลงที่กำลังจะเกิดในอนาคต และแผนรองรับเพื่อ
ตอบสนองต่อการเปลี่ยนแปลง (รวมทั้งการเปลี่ยนแปลงที่เกิดจากการ
นำระบบดิจิทัลมาใช้)
`,
            checkBox: [
              {
                text: `การวิเคราะห์ความท้าทายและคาดการณ์ถึงการเปลี่ยนแปลงใน
อนาคตอันมีผลกระทบต่อการปฏิบัติงานการให้บริการ การรับรู้
การเข้าถึงของภาคส่วนต่างๆ`,
                status: false
              },
              {
                text: `การกำหนดยุทธศาสตร์ แผนงานที่ตอบสนองต่อความท้าทาย และการเปลี่ยนแปลง`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.1 significance
          significance: {
            mode: "significance",
            titleText: `- สร้างขีดความสามารถในการแข่งขัน และสร้างโอกาสเชิงกลยุทธ์ใหม่ๆ ที่นำไปสู่ประโยชน์สุขของประชาชนและการพัฒนาเศรษฐกิจของประเทศทั้งในระยะสั้นและระยะยาว
`,
            checkBox: [
              {
                text: `แผนยุทธศาสตร์ และแผนงานที่สร้างขีดความสามารถทางการ
แข่งขัน และสร้างโอกาสเชิงกลยุทธ์ใหม่ๆ เช่น<br>
- มีแผนนำระบบดิจิทัลมาใช้ปรับเปลี่ยนการทำงานและรองรับ
การเปลี่ยนแปลง<br>
- มีแผนการยกระดับการให้บริการที่รวดเร็ว ฉับไว ต้นทุนต่ำ เข้าถึง
ได้ง่ายและเข้าถึงได้ทุกที่ ทุกเวลา`,
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
            "2.2 การกำหนดเป้าหมายเชิงยุทธศาสตร์ทั้งระยะสั้นและระยะยาวที่สอดคล้องกับพันธกิจของส่วนราชการและเชื่อมโยงกับยุทธศาสตร์ชาติ",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 2.2 basic
          basic: {
            mode: "basic",
            titleText: `- การกำหนดเป้าประสงค์และตัวชี้วัดเชิงยุทธศาสตร์ที่ตอบสนองต่อ พันธกิจของส่วนราชการทั้งระยะสั้นและระยะยาว รวมทั้งการสร้างการ เปลี่ยนแปลง`,
            checkBox: [
              {
                text: `มีแผนที่ยุทธศาสตร์ (Strategy Map) แผนระยะสั้นและแผนระยะยาวที่ส่งผลต่อยุทธศาสตร์ชาติ`,
                status: false
              },
              {
                text: `กำหนดตัวชี้วัดและเป้าประสงค์ที่ตอบสนองพันธกิตของส่วนราชการและการเปลี่ยนแปลง`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัดเชิงยุทธศาสตร์ที่
เกิดกับยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว`,
            checkBox: [
              {
                text: `มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัด ที่มีผลต่อยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว ในมิติต่างๆ เช่นการเพิ่มขีดความสามารถในการแข่งขัน การลดผลกระทบจากข้อบังคับทางกฏหมาย `,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.2 significance
          significance: {
            mode: "significance",
            titleText: `- มีการวิเคราะห์ความเสี่ยงระดับองค์กรและผลกระทบทั้งทางตรง ทางอ้อมที่ส่งผลต่อระบบเศรษฐกิจสังคม สาธารณสุข และสิ่งแวดล้อม ของประเทศ
`,
            checkBox: [
              {
                text: `วิเคราะห์ความเสี่ยงระดับองค์กรที่อาจเกิดขึ้น และส่งผลต่อ แผนงานและเป้าประสงค์ที่วางไว้`,
                status: false
              },
              {
                text: `วิเคราะห์ความเสี่ยงระดับองค์กรที่อาจเกิดขึ้น ที่อาจส่งผล<br>กระทบต่อระบบเศรษฐกิจ สังคม สาธารณสุข และ สิ่งแวดล้อมของประเทศ`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************2.3 *******************************************
        {
          header:
            "2.3 แผนกฏิบัติการที่ขับเคลื่อนยุทธศาสตร์ของส่วนราชการลงไปทุกภาคส่วน โดยผ่านเครือข่ายทั้งภายในและภายนอก",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 2.3 basic
          basic: {
            mode: "basic",
            titleText: `- แผนปฏิบัติการที่ครอบคลุมทุกส่วนงานชัดเจน และสื่อสารสู่การปฏิบัติ ไปยังทุกกลุ่มทั้งภายในและภายนอก`,
            checkBox: [
              {
                text: `รองรับยุทธศาสตร์ทุกด้านครอบคลุมทุกส่วนงาน`,
                status: false
              },
              {
                text: `ถ่ายทอดลงไปถึงเครือข่ายระดับพื้นที่ทั้งภายในและภายนอกองค์กร`,
                status: false
              },
              {
                text: `มีความชัดเจน และสื่อสารสู่การปฏิบัติได้อย่างมีประสิทธิผล`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.3 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- แผนปฏิบัติการที่สนับสนุนความสำเร็จของยุทธศาสตร์ของส่วน ราชการครอบคลุมทุกส่วนงานชัดเจน และเน้นการเกิดประสิทธิภาพ (การทำน้อยได้มาก) และการสร้างคุณค่าแก่ประชาชน (Public value)`,
            checkBox: [
              {
                text: `ประสิทธิภาพควบคู่กับประสิทธิผล (การทำน้อยได้มาก)`,
                status: false
              },
              {
                text: `ใช้เทคโนโลยีดิจิทัลมาช่วยในการสื่อสาร การลดต้นทุน การปรับปรุงการให้บริการที่สร้างความพึงพอใจ รวดเร็ว สร้างคุณค่าแก่ประชาชน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.3 significance
          significance: {
            mode: "significance",
            titleText: `- แผนปฏิบัติการที่สนับสนุนความสำเร็จของยุทธศาสตร์ของส่วน ราชการ บูรณาการกับแผนงานด้านบุคลากรและการใช้ทรัพยากรที่ รองรับการเปลี่ยนแปลงที่จะเกิดขึ้น และสื่อสารสู่การปฏิบัติผ่าน เครือข่ายทั้งภายในและภายนอกและการใช้ข้อมูลร่วมกันเพื่อการประสานงานให้เกิดความสำเร็จ

`,
            checkBox: [
              {
                text: `แผนด้านบุคลากรทั้งการพัฒนาขีดความสามารถและอัตรากำลัง
เพื่อรองรับการเปลี่ยนแปลง`,
                status: false
              },
              {
                text: `แผนการปรับเปลี่ยนเพื่อให้ทันกับความต้องการด้านการ เปลี่ยนแปลงเทคโนโลยี`,
                status: false
              },
              {
                text: `แผนการใช้ทรัพยากรและการใช้ข้อมูลผ่านเครือข่ายทั้งภายในและภายนอก`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 2.4 *****************************
        {
          header: `2.4 การติดตามผลของการบรรลุเป้าหมายเชิงยุทธศาสตร์ การแก้ไขปัญหา  และการรายงานผลอย่างมีประสิทธิผล`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 2.4 basic
          basic: {
            mode: "basic",
            titleText: `- การติดตามรายงานผลการดำเนินการตามแผนและการบรรลุเป้าหมาย
เชิงยุทธศาสตร์ และการรายงานผลสู่สาธารณะ (Open by default)`,
            checkBox: [
              {
                text: `ระบบการติดตามรายงานผลของตัวชี้วัด แผนปฏิบัติการ ยุทธศาสตร์ทั้งระยะสั้นและระยะยาว<br>
- รายงานสถานะการบรรลุเป้าหมายที่ตั้งไว้<br>
- เตรียมการแก้ไขปัญหากรณีไม่เป็นไปตามเป้าหมายที่ตั้งไว้<br>
- การรายงานผลที่เกิดขึ้นต่อสาธารณะ`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.4 advanec
          advance: {
            mode: "advance",
            titleText: `- การคาดการณ์ของผลการดำเนินการตามแผน การแก้ปัญหา และการปรับแผนให้ทันต่อการเปลี่ยนแปลง (Projection)`,
            checkBox: [
              {
                text: `แผนมีความยืดหยุ่นสามารถปรับเปลี่ยนได้<br>
- สามารถปรับแผนปฏิบัติการให้สอดคล้องกับผลที่เกิดทั้งในกรณี
ที่ไม่บรรลุ หรือดีกว่าค่าเป้าหมายที่ตั้งไว้<br>
- สามารถปรับแผนให้ทันต่อการเปลี่ยนแปลงได้
`,
                status: false
              },
              {
                text: `มีการคาดการณ์ผลการดำเนินการที่เกิดขึ้น`,
                status: false
              },
              {
                text: `มีการทบทวนแผนยุทธศาสตร์ทุกปี เพื่อให้ทันต่อการเปลี่ยนแปลง`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.4 significance
          significance: {
            mode: "significance",
            titleText: `- การเตรียมการเชิงรุกเพื่อตอบสนองต่อการเปลี่ยนแปลงที่อาจเกิดขึ้น
จากภายในและภายนอกและการปรับแผนที่ตอบสนองทันเวลา เชิงรุก อย่างมีประสิทธิผล (Proactive and effective)`,
            checkBox: [
              {
                text: `ติดตามสถานการณ์ที่อาจส่งผลต่อการดำเนินการแผนโดย สามารถวิเคราะห์ได้ว่าปัญหาเกิดที่ใดและจะส่งผลต่อการปฏิบัติการ
อย่างไร
`,
                status: false
              },
              {
                text: `มีการเตรียมความพร้อมและมีความคล่องตัวต่อสถานการณ์ที่ กำลังเปลี่ยนแปลง`,
                status: false
              },
              {
                text: `มีแผนการจัดการเชิงรุกเพื่อปรับแผนให้ทันเวลาและเกิดผลลัพธ์ที่ดีเป็นไปตามต้องการ`,
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
          category: "category2",
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
      formData.append("step", 2);

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

this.data.push("")
this.data.pop()
this.data[index].status = 0


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

          // this.data[i - 1].score = getData[0].score;

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

          // this.data[i - 1].score = getData[0].score;

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
        step: 2
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
      )}-2-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

      window.open(
        this.apiPath + "upload/" +
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
