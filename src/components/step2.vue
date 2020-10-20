<template>
  <div class="">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 1 การนำองค์การ</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-lg font-18">
      <!-- 1.1 -->
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataForm"
            header-class="bg-white "
            dense-toggle=""
            dense=""
            expand-icon-class="text-grey-10"
            default-opened=""
            header-style="height:70px;"
          >
            <template v-slot:header>
              <div class="row full-width q-pa-sm">
                <div class="col self-center">
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
                  <div class="col-6" style="width:530px;">
                    <q-tabs
                      v-model="tabs1"
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
                  <q-tab-panels v-model="tabs1" animated>
                    <!-- 1.1 Basic -->
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
                              <span
                                >-
                                ผู้บริหารของส่วนราชการได้สร้างความยั่งยืนโดยการกำหนดวิสัยทัศน์
                                และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจ
                                และภาระหน้าที่ของส่วนราชการ (Mission based)
                                <br />
                                <br />
                                -
                                มีการถ่ายถอดผ่านระบบการนำองค์การเพื่อให้เกิดการดำเนินการทั่ว
                                ทั้งส่วนราชการ</span
                              >
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_1[0]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ผู้บริหารกำหนดวิสัยทัศน์ ยุทธศาสตร์
                                    เป้าหมายและตัวชี้วัด ชัดเจนตอบสนอง
                                    ต่อพันธกิจและภาระหน้าที่ของส่วนราชการ</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_1[1]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ผู้บริหารสื่อสารถ่ายทอดวิสัยทัศน์
                                    ยุทธศาสตร์ เป้าหมาย
                                    และตัวชี้วัดไปสู่ทุกระดับ
                                    ขององค์การอย่างทั่วถึง</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_1[2]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ส่วนราชการมีระบบการสื่อสารภายในองค์การทั่วถึง
                                    รวดเร็ว ทันการณ์</span
                                  >
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
                                v-model="basic_assessment_1"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_1"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_1"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.1 Advance -->
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
                              <span
                                >- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน
                                โดยการกำหนดวิสัยทัศน์
                                และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ
                                และสอดรับกับยุทธศาสตร์ชาติ (Alignment with
                                National Strategles)
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_1[0]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ
                                    <br />
                                    -
                                    สนับสนุนการบรรลุยุทธศาสตร์และสร้างขีดความสามารถใน
                                    การแข่งขันของประเทศ
                                    <br />
                                    -
                                    พิจารณาและคำนึงถึงผลกระทบต่อสังคมทั้งเชิงบวกและเชิงลบ
                                    ทั้งทางตรงและทางอ้อม</span
                                  >
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
                                v-model="advance_assessment_1"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_1"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_1"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.1 Significance -->
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
                              <span
                                >- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน
                                โดยการกำหนด ยุทธศาสตร์
                                ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ
                                สอดรับกับทิศทางการพัฒนาและยุทธศาสตร์พื้นที่สร้างนวัตกรรมและ
                                วัฒนธรรมในการมุ่งประโยชน์สุขประชาชน (Innovation,
                                Citizen-centric)
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="signifi_guide_list_1[0]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ
                                    <br />- บูรณาการยุทธศาสตร์ชาติ /
                                    ยุทธศาสตร์พื้นที่ (ถ้ามี) <br />-
                                    สร้างการเปลี่ยนแปลงในเกิดวัฒนธรรมที่มุ่งเน้นประชาชน
                                    เช่น มี
                                    นโยบายการสร้างนวัตกรรมการให้บริการเพื่ออำนวยความสะดวก
                                    และตอบสนองความต้องการของประชาชน</span
                                  >
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
                                v-model="signifi_assessment_1"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_1"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_1"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
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

      <!-- 1.2 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataForm"
            header-class="bg-white "
            dense-toggle=""
            dense=""
            expand-icon-class="text-grey-10"
            header-style="height:70px;"
          >
            <template v-slot:header>
              <div class="row full-width q-pa-sm">
                <div class="col self-center">
                  <span>1.2 การป้องกันทุจริตและสร้างความโปร่งใส</span>
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
                   <div class="col-6" style="width:530px;">
                    <q-tabs
                      v-model="tabs2"
                      dense
                      align="justify"
                      class="text-black"
                      active-color="black"
                      indicator-color="pink-5"
                      narrow-indicator
                    >
                      <q-tab
                        content-class="q-pa-sm "
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
                  <q-tab-panels v-model="tabs2" animated>
                    <!-- 1.2 Basic -->
                    <q-tab-panel name="Basic" class="no-padding">
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
                              <span
                                >-
                                นโยบายและระบบการกำกับผู้ดูแลที่เสริมสร้างความโปร่งใสและการ
                                ป้องกันทุจริต
                                รวมทั้งระบบการตรวจสอบที่มีประสิทธิภาพ -
                                มีมาตรการที่ถ่ายทอดสู่การปฏิบัติและการติดตามรายงานผลอย่าง
                                ชัดเจน</span
                              >
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_2[0]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >แนวทางและระบบการตรวจสอบกำกับผู้ดูแลที่เสริมสร้างความ
                                    โปร่งใสและป้องกันทุจริต</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_2[1]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มาตรการที่ถ่ายทอดสู่การปฏิบัติและติดตามรายงานผล
                                    อย่างชัดเจน</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_2[2]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>การบริหารงานตามหลักธรรมภิบาล</span>
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
                                v-model="basic_assessment_2"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_2"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_2"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.2 Advance -->
                    <q-tab-panel name="Advance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl ">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span
                                >-
                                การประเมินประสิทธิผลและตัววัดการป้องกันทุจริตและการสร้างความ
                                โปร่งใสภายในส่วนราชการ
                                และมีการปรับปรุงอย่างสม่ำเสมอ <br />-
                                การรายงานผลการดำเนินการของส่วนราชการต่อสาธารณะ
                                และหน่วยงานบังคับบัญชา
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_2[0]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีตัววัดในการตรวจติดตามป้องกันทุจริต
                                    และมีการปรับปรุง สม่ำเสมอ</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_2[1]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีมาตรการป้องกันการทุจริตในเชิงรุก
                                    (Pro-active) เช่น
                                    พัฒนากระบวนการทำงานให้โปร่งใส่มีระบบร้องเรียน/ร้องทุกข์
                                    สร้างกระบวนการติดตามตรวจสอบการทุจริต
                                    และการปกป้อง ผู้ร้องเรียน</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_2[2]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>เปิดเผยผลการดำเนินงานสู่สาธารณะ</span>
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
                                v-model="advance_assessment_2"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_2"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_2"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.2 Significance -->
                    <q-tab-panel name="Significance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl ">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span
                                >-
                                ผลการประเมินความโปร่งใสในระดับองค์การโดยองค์การอิสระ
                                ระดับชาติหรือนานาชาติ <br />-
                                เป็นแบบอย่างที่ดีและการสร้างต้นแบบด้านความโปร่งใส
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="signifi_guide_list_2[0]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีดัชนีความโปร่งใสจากการประเมินโดยองค์การอิสระและมี
                                    ผลลัพธ์ที่ดี</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="signifi_guide_list_2[1]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการส่งเสริมการเป็นองค์การด้านความโปร่งใส
                                    เช่น มีการ ค้นหาความเป็นเลิศ (Best
                                    Practice:BP) ด้านความโปร่งใส
                                    มีการสร้างต้นแบบ (Role Model)
                                    ด้านความโปร่งใส</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="signifi_guide_list_2[2]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ได้รับรางวัลด้านความโปร่งใสจากองค์การภายนอก</span
                                  >
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
                                v-model="signifi_assessment_2"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_2"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_2"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
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

      <!-- 1.3 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataForm"
            header-class="bg-white "
            dense-toggle=""
            dense=""
            expand-icon-class="text-grey-10"
            header-style="height:70px;"
          >
            <template v-slot:header>
              <div class="row full-width q-pa-sm">
                <div class="col self-center">
                  <span
                    >1.3
                    การมุ่งเน้นการบรรลุผลสัมฤทธิ์ของส่วนราชการผ่านการสร้างการมีส่วนร่วมของบุคลากรภายในและภายนอก</span
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
                   <div class="col-6" style="width:530px;">
                    <q-tabs
                      v-model="tabs3"
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
                  <q-tab-panels v-model="tabs3" animated>
                    <!-- 1.3 Basic -->
                    <q-tab-panel name="Basic" class="no-padding">
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
                              <span
                                >-
                                การสื่อสารและการสร้างสภาพแวดล้อมภายในเพื่อให้มุ่งเน้นผลสัมฤทธิ์
                                <br />-
                                การสร้างกลไกที่เอื้อให้ประชาชนและเครือข่ายภายนอกเข้ามามีส่วนร่วม
                                ในการทำงาน</span
                              >
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_3[0]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ส่วนราชการมีแนวทางสื่อสารและสร้างสภาพแวดล้อมภายใน
                                    องค์การให้มุ่งผลสัมฤทธิ์ในการทำงาน</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_3[1]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ปรับปรุงกฏระเบียบที่เอื้อให้ประชาชนเข้ามามีส่วนร่วม</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_3[2]" value="" />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีแนวทางในการสร้างเครือข่ายให้ ภาคประชาชน
                                    ภาคเอกชน
                                    และท้องถิ่นจากองค์การภายนอกเข้ามามีส่วนร่วมกันในการทำงาน</span
                                  >
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
                                v-model="basic_assessment_3"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_3"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_3"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.3 Advance -->
                    <q-tab-panel name="Advance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl ">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span
                                >- การตั้งเป้าหมาย ท้าทาย
                                และการส่งเสริมให้เกิดนวัตกรรมของกระบวน
                                การและการบริการผ่านเครือข่ายภาคประชาชน ภาคเอกชน
                                และท้องถิ่น
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_3[0]"  value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการตั้งเป้าหมายที่ท้าทายรองรับการเปลี่ยนแปลง</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_3[1]"  value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีแนวทางการส่งเสริมให้เกิดนวัตกรรมของกระบวนการทำงานและการให้บริการผ่านเครือข่ายภาคประชาชน
                                    ภาคเอกชน และท้องถิ่น</span
                                  >
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
                                v-model="advance_assessment_3"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_3"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_3"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.3 Significance -->
                    <q-tab-panel name="Significance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl ">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span
                                >-
                                การสร้างนวัตกรรมที่มีผลกระทบสูงและเชิงนโยบายที่นำไปสู่การแก้
                                ปัญหาที่มีความซับซ้อน
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="signifi_guide_list_3[0]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ผู้บริหารส่งเสริมการสร้างนวัตกรรมเชิงนโยบายที่ส่งผลในระดับ
                                    ประเทศและนำไปสู่การแก้ปัญหาที่มีความซับซ้อน
                                    เช่น การสร้าง ความร่วมมือจากหลายหน่วยงาน
                                    หรือการใช้กลไกห้องปฏิบัติการ นวัตกรรมภาครัฐ
                                    (Government Innovation Lab) โดยการนำ
                                    กระบวนการคิดเชิงออกแบบ (Design Thinking)
                                    ในลักษณะที่ให้
                                    ประชาชน/ผู้มีส่วนได้ส่วนเสียเข้ามามีส่วนร่วมในทุกกระบวนการ</span
                                  >
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
                                v-model="signifi_assessment_3"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_3"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_3"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
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

      <!-- 1.4 -->
      <div class="q-mt-sm q-mb-md">
        <q-list bordered>
          <q-expansion-item
            group="dataForm"
            header-class="bg-white "
            dense-toggle=""
            dense=""
            expand-icon-class="text-grey-10"
            header-style="height:70px;"
          >
            <template v-slot:header>
              <div class="row full-width q-pa-sm">
                <div class="col self-center">
                  <span
                    >1.4
                    การคำนึงถึงผลกระทบต่อสังคมและการมุ่งเน้นให้เกิดผลลัพธ์ที่นำไปสู่การพัฒนาประเทศตามทิศทางยุทธศาสตร์</span
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
                   <div class="col-6 font-18" style="width:530px;">
                    <q-tabs
                      v-model="tabs4"
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
                  <q-tab-panels v-model="tabs4" animated>
                    <!-- 1.4 Basic -->
                    <q-tab-panel name="Basic" class="no-padding">
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
                              <span
                                >- การประเมินและติดตามโครงการ กระบวนการ
                                และยุทธศาสตร์ที่อาจ มีผลกระทบเชิงลบต่อสังคม
                                <br />-
                                การติดตามตัวชี้วัดและผลการดำเนินการขององค์การอย่างต่อเนื่อง
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_4[0]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ประเมินความเสี่ยงโครงการ กระบวนการ
                                    และยุทธศาสตร์ที่อาจมี
                                    ผลกระทบเชิงลบต่อสังคมอย่างต่อเนื่อง</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_4[1]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >เตรียมมาตรการป้องกันและแก้ไขปัญหาต่ต่างๆ
                                    เช่น การทำประชาพิจารณ์
                                    เพื่อรับฟังความคิดเห็นทั้งก่อน / ระหว่าง /
                                    หลังดำเนินโครงการ</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_4[2]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >กำหนดตัวชี้วัดและติดตามผลการดำเนินการอย่างต่อเนื่อง</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="basic_guide_list_4[3]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >รวบรวมข้อมูล / สถิติ /
                                    ผลการดำเนินการที่เกี่ยวข้อง
                                    ให้พร้อมต่อการถูกติดตาม /
                                    ตรวจสอบจากทุกภาคส่วน</span
                                  >
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
                                v-model="basic_assessment_4"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_4"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_4"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.4 Advance -->
                    <q-tab-panel name="Advance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl ">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span
                                >- การติดตามรายงานผลกระทบ
                                โดยผ่านกลไกการสื่อสารและเทคโนโลยี
                                ดิจิทัลเพื่อนำไปสู่การแก้ไขปัญหาอย่างทันการณ์ประชาชน
                                ภาคเอกชน และท้องถิ่น
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_4[0]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ใช้เทคโนโลยีการสื่อสารและดิจิทับที่ทันสมัยเพื่อติดตามชี้วัดและ
                                    ผลการดำเนินการเพื่อรายงานผลได้อย่างรวดเร็วและทัน
                                    เหตุการณ์</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="advance_guide_list_4[1]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >สร้างเครือข่ายเฝ้าระวังเพื่อการแก้ไขปัญหาได้อย่างรวดเร็วและทันเหตุการณ์</span
                                  >
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
                                v-model="advance_assessment_4"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_4"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_4"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 1.4 Significance -->
                    <q-tab-panel name="Significance" class="no-padding">
                      <div class="row">
                        <div
                          class="col-5"
                          style="width:530px;border-right:1px solid #e0e0e0"
                        >
                          <div class="q-pa-md font-18 q-mb-xl ">
                            <div>
                              <span class="font-18b">ระดับดำเนินการ</span>
                            </div>
                            <div class="q-mt-md">
                              <span
                                >-
                                การติดตามผลการดำเนินการและผลกระทบที่เกิดขึ้นทั้งในระยะสั้นและ
                                ระยะยาวและผลกระทบที่มีต่อเศรษฐกิจ สังคม
                                สาธารณสุข และสิ่งแวดล้อม
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="signifi_guide_list_4[0]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ส่วนราชการมีการกำหนดตัววัดที่บรรลุผลลัพธ์ในเชิง
                                    - ยุทธศาสตร์ของส่วนราชการ -
                                    ยุทธศาสตร์พื้นที่ (ถ้ามี) - ยุทธศาสตร์ชาติ -
                                    ผลกระทบต่อเศรษฐกิจ สังคม สาธารณสุข
                                    สิ่งแวดล้อม</span
                                  >
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox v-model="signifi_guide_list_4[1]" value />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ส่วนราชการมีการติดตามตัววัด
                                    โดยมีการวิเคราะห์เพื่อรู้เท่าทัน
                                    สถานการณ์และกำหนดมาตรการ /
                                    แนวทางเพื่อป้องกัน /
                                    ส่งเสริมการดำเนินการเพื่อผลลัพธ์
                                    ที่ดีต่อเศรษฐกิจ สังคม สาธารณสุข
                                    สิ่งแวดล้อม</span
                                  >
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
                                v-model="signifi_assessment_4"
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
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_4"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div
                                class="col-4 q-pa-md self-center"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_4"
                                  dense=""
                                  style="border:2px solid #e84c93;border-radius:10px;"
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                              </div>
                              <div class="col q-py-md " align="right">
                                <q-btn
                                  class="bg-teal text-white font-18"
                                  label="บันทึกข้อมูล"
                                  :disable="isSaveData"
                                  :loading="isSaveData"
                                  style="width: 220px; border-radius: 0px;"
                                  push
                                  @click="saveData()"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Form 1.1
      tabs1: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_1:[false,false,false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_1:[false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_1:[false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_1:null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_1:null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_1:null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_1:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_1:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_1:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance
      // -----------------------------------------

      // Form 1.2
      tabs2: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_2:[false,false,false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_2:[false,false,false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_2:[false,false,false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_2:null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_2:null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_2:null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_2:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_2:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_2:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance
      // -----------------------------------------

      // Form 1.3
      tabs3: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_3:[false,false,false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_3:[false,false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_3:[false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_3:null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_3:null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_3:null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_3:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_3:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_3:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance
      // -----------------------------------------

      // Form 1.4
      tabs4: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_4:[false,false,false,false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_4:[false,false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_4:[false,false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_4:null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_4:null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_4:null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_4:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_4:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_4:null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance
      // -----------------------------------------

      // Save Data
      isSaveData: false,
    };
  },
  methods: {
    saveData() {
      this.isSaveData = true;
      setTimeout(() => {
        this.isSaveData = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
