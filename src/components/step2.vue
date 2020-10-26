<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 1 การนำองค์การ</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-lg font-18">
      <!-- 1.1 -->
      <div >
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep1"
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
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form[0] &&
                          !advance_success_form[0] &&
                          !signifi_success_form[0]
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form[0]">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form[0]">
                        Advance
                      </span>
                      <span v-else="basic_success_form[0]">
                        Basic
                      </span>
                    </div>
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
                      <q-tab content-class="q-pa-sm" no-caps="" name="Basic">
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-show="basic_success_form[0]"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="
                          !basic_success_form[0] ||
                            basic_guide_list[0].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form[0]"
                            ></q-icon>
                            <span>Advance </span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="
                          !advance_success_form[0] ||
                            advance_guide_list[0].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form[0]"
                            ></q-icon>
                            <span>Significance</span>
                          </div>
                        </template></q-tab
                      >
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
                                  <q-checkbox
                                    v-model="basic_guide_list[0][0]"
                                    @input="reRenderComponent()"
                                    value
                                  />
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
                                  <q-checkbox
                                    v-model="basic_guide_list[0][1]"
                                    @input="reRenderComponent()"
                                    value
                                  />
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
                                  <q-checkbox
                                    v-model="basic_guide_list[0][2]"
                                    @input="reRenderComponent()"
                                    value
                                  />
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
                              <span class="font-18b">คำอธิบายผลการประเมิน </span>
                            </div>
                            <div class="q-my-md">
                              <q-input
                                v-model="basic_assessment[0]"
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
                                  v-model="basic_file_pdf[0]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf[0]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf[0]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf[0]"
                                  @click="basic_file_pdf[0] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image[0]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image[0]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_image[0]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image[0]"
                                  @click="basic_file_image[0] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(1, 'basic')"
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
                                  <q-checkbox
                                    v-model="advance_guide_list[0][0]"
                                    value=""
                                    @input="reRenderComponent()"
                                  />
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
                                v-model="advance_assessment[0]"
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
                                  v-model="advance_file_pdf[0]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf[0]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf[0]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf[0]"
                                  @click="advance_file_pdf[0] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image[0]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image[0]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_image[0]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image[0]"
                                  @click="advance_file_image[0] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(1, 'advance')"
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
                                  <q-checkbox
                                    v-model="signifi_guide_list[0][0]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="signifi_assessment[0]"
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
                                  v-model="signifi_file_pdf[0]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf[0]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf[0]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf[0]"
                                  @click="signifi_file_pdf[0] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image[0]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image[0]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_image[0]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image[0]"
                                  @click="signifi_file_image[0] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(1, 'significance')"
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
            group="dataFormStep1"
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
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form[1] &&
                          !advance_success_form[1] &&
                          !signifi_success_form[1]
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form[1]">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form[1]">
                        Advance
                      </span>
                      <span v-else="basic_success_form[1]">
                        Basic
                      </span>
                    </div>
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
                      <q-tab content-class="q-pa-sm" no-caps="" name="Basic">
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="basic_success_form[1]"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="
                          !basic_success_form[1] ||
                            basic_guide_list[1].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form[1]"
                            ></q-icon>
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="
                          !advance_success_form[1] ||
                            advance_guide_list[1].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form[1]"
                            ></q-icon>
                            <span>Significance</span>
                          </div>
                        </template></q-tab
                      >
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
                                  <q-checkbox
                                    v-model="basic_guide_list[1][0]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="basic_guide_list[1][1]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="basic_guide_list[1][2]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="basic_assessment[1]"
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
                                  v-model="basic_file_pdf[1]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf[1]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf[1]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf[1]"
                                  @click="basic_file_pdf[1] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image[1]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image[1]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_image[1]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image[1]"
                                  @click="basic_file_image[1] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(2, 'basic')"
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
                                  <q-checkbox
                                    v-model="advance_guide_list[1][0]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="advance_guide_list[1][1]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="advance_guide_list[1][2]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="advance_assessment[1]"
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
                                  v-model="advance_file_pdf[1]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf[1]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf[1]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf[1]"
                                  @click="advance_file_pdf[1] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image[1]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image[1]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_image[1]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image[1]"
                                  @click="advance_file_image[1] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(2, 'advance')"
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
                                  <q-checkbox
                                    v-model="signifi_guide_list[1][0]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="signifi_guide_list[1][1]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="signifi_guide_list[1][2]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="signifi_assessment[1]"
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
                                  v-model="signifi_file_pdf[1]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf[1]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf[1]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf[1]"
                                  @click="signifi_file_pdf[1] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image[1]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image[1]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_image[1]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image[1]"
                                  @click="signifi_file_image[1] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(2, 'significance')"
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
            group="dataFormStep1"
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
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form[2] &&
                          !advance_success_form[2] &&
                          !signifi_success_form[2]
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form[2]">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form[2]">
                        Advance
                      </span>
                      <span v-else="basic_success_form[2]">
                        Basic
                      </span>
                    </div>
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
                      <q-tab content-class="q-pa-sm" no-caps="" name="Basic">
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="basic_success_form[2]"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="
                          !basic_success_form[2] ||
                            basic_guide_list[2].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form[2]"
                            ></q-icon>
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="
                          !advance_success_form[2] ||
                            advance_guide_list[2].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form[2]"
                            ></q-icon>
                            <span>Significance</span>
                          </div>
                        </template></q-tab
                      >
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
                                  <q-checkbox
                                    v-model="basic_guide_list[2][0]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="basic_guide_list[2][1]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="basic_guide_list[2][2]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="basic_assessment[2]"
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
                                  v-model="basic_file_pdf[2]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf[2]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf[2]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf[2]"
                                  @click="basic_file_pdf[2] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image[2]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image[2]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_image[2]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image[2]"
                                  @click="basic_file_image[2] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(3, 'basic')"
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
                                  <q-checkbox
                                    v-model="advance_guide_list[2][0]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="advance_guide_list[2][1]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="advance_assessment[2]"
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
                                  v-model="advance_file_pdf[2]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf[2]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf[2]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf[2]"
                                  @click="advance_file_pdf[2] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image[2]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image[2]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_image[2]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image[2]"
                                  @click="advance_file_image[2] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(3, 'advance')"
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
                                  <q-checkbox
                                    v-model="signifi_guide_list[2][0]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="signifi_assessment[2]"
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
                                  v-model="signifi_file_pdf[2]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf[2]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf[2]"
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
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf[2]"
                                  @click="signifi_file_pdf[2] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image[2]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image[2]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_image[2]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image[2]"
                                  @click="signifi_file_image[2] = null,reRenderComponent()"
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(3, 'significance')"
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
            group="dataFormStep1"
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
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form[3] &&
                          !advance_success_form[3] &&
                          !signifi_success_form[3]
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form[3]">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form[3]">
                        Advance
                      </span>
                      <span v-else="basic_success_form[3]">
                        Basic
                      </span>
                    </div>
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
                      <q-tab content-class="q-pa-sm" no-caps="" name="Basic">
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="basic_success_form[3]"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="
                          !basic_success_form[3] ||
                            basic_guide_list[3].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form[3]"
                            ></q-icon>
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="
                          !advance_success_form[3] ||
                            advance_guide_list[3].includes(false)
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form[3]"
                            ></q-icon>
                            <span>Significance</span>
                          </div>
                        </template></q-tab
                      >
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
                                  <q-checkbox
                                    v-model="basic_guide_list[3][0]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                   @input="reRenderComponent()"
                                    v-model="basic_guide_list[3][1]"
                                    value
                                  />
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
                                  <q-checkbox
                                    v-model="basic_guide_list[3][2]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                   @input="reRenderComponent()"
                                    v-model="basic_guide_list[3][3]"
                                    value
                                  />
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
                                v-model="basic_assessment[3]"
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
                                  v-model="basic_file_pdf[3]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf[3]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf[3]"
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
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf[3]"
                                  @click="basic_file_pdf[3] = null,reRenderComponent()"
                                
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image[3]"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image[3]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_image[3]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image[3]"
                                  @click="basic_file_image[3] = null,reRenderComponent()"
                                
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(4, 'basic')"
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
                                  <q-checkbox
                                    v-model="advance_guide_list[3][0]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                    v-model="advance_guide_list[3][1]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                v-model="advance_assessment[3]"
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
                                  v-model="advance_file_pdf[3]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf[3]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf[3]"
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
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf[3]"
                                  @click="advance_file_pdf[3] = null,reRenderComponent()"
                                
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image[3]"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image[3]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_image[3]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image[3]"
                                  @click="advance_file_image[3] = null,reRenderComponent()"
                                
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(4, 'advance')"
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
                                  <q-checkbox
                                    v-model="signifi_guide_list[3][0]"
                                    value
                                     @input="reRenderComponent()"
                                  />
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
                                  <q-checkbox
                                   @input="reRenderComponent()"
                                    v-model="signifi_guide_list[3][1]"
                                    value
                                  />
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
                                v-model="signifi_assessment[3]"
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
                                  v-model="signifi_file_pdf[3]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf[3]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf[3]"
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
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf[3]"
                                  @click="signifi_file_pdf[3] = null,reRenderComponent()"
                                
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image[3]"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image[3]
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".png,.jpg"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_image[3]"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>

                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                      v-else
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class="font-14 text-black"
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image[3]"
                                  @click="signifi_file_image[3] = null,reRenderComponent()"
                                
                                >
                                  <span class="text-white font-12">
                                    ลบไฟล์
                                  </span>
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
                                  @click="saveData(4, 'significance')"
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
import Axios from "axios";
export default {
  data() {
    return {
      // test
      isLoadAssessmentFinish :false,
      basic_assessment: [],
      basic_success_form: [false,false,false,false],
      basic_guide_list: [[false,false,false], [false,false,false], [false,false,false], [false,false,false,false]],
      basic_file_image: [],
      basic_file_pdf: [],
      advance_assessment: [],
      advance_success_form: [],
      advance_guide_list: [[false], [false,false,false], [false,false], [false,false]],
      advance_file_image: [],
      advance_file_pdf: [],
      signifi_assessment: [],
      signifi_success_form: [],
      signifi_guide_list: [[false], [false,false,false], [false], [false,false]],
      signifi_file_image: [],
      signifi_file_pdf: [],

      // // Form 1.1
      tabs1: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // basic_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Basic
      // advance_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Advance
      // signifi_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Significance

      // basic_guide_list_1: [false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      // advance_guide_list_1: [false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      // signifi_guide_list_1: [false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      // basic_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Basic
      // advance_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Advance
      // signifi_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Significance

      // basic_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      // advance_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      // signifi_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      // basic_success_form_1: false,
      // advance_success_form_1: false,
      // signifi_success_form_1: false,

      // // -----------------------------------------

      // // Form 1.2
      tabs2: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // basic_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Basic
      // advance_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Advance
      // signifi_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Significance

      // basic_guide_list_2: [false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      // advance_guide_list_2: [false, false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      // signifi_guide_list_2: [false, false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      // basic_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Basic
      // advance_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Advance
      // signifi_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Significance

      // basic_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      // advance_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      // signifi_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      // basic_success_form_2: false,
      // advance_success_form_2: false,
      // signifi_success_form_2: false,
      // // -----------------------------------------

      // // Form 1.3
      tabs3: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // basic_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Basic
      // advance_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Advance
      // signifi_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Significance

      // basic_guide_list_3: [false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      // advance_guide_list_3: [false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      // signifi_guide_list_3: [false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      // basic_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Basic
      // advance_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Advance
      // signifi_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Significance

      // basic_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      // advance_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      // signifi_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      // basic_success_form_3: false,
      // advance_success_form_3: false,
      // signifi_success_form_3: false,
      // // -----------------------------------------

      // // Form 1.4
      tabs4: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // basic_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Basic
      // advance_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Advance
      // signifi_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Significance

      // basic_guide_list_4: [false, false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      // advance_guide_list_4: [false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      // signifi_guide_list_4: [false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      // basic_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Basic
      // advance_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Advance
      // signifi_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Significance

      // basic_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      // advance_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      // signifi_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      // basic_success_form_4: false,
      // advance_success_form_4: false,
      // signifi_success_form_4: false,
      // -----------------------------------------

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    async saveData(no, mode) {
      let index = no - 1
      const url = this.apiPath + "user/addUpdateCategory1_6.php";
      const userId = this.$q.sessionStorage.getItem("uid");
      const year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();

      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("mode", mode);
      formData.append("year", year);
      formData.append("step", 1);
      // if (no == 1) {
        // save 1.1 basic
        if (mode == "basic") {
          // 1.1 mode basic
          formData.append("img", this.basic_file_image[index]);
          formData.append("pdf", this.basic_file_pdf[index]);
          let checkBox = this.basic_guide_list[index];
          checkBox = checkBox.map(x => (x == true ? 1 : 0));
          let resCheckBox = checkBox.join();
          formData.append("check_box", resCheckBox);
          formData.append("text", this.basic_assessment[index]);
          let data = await Axios.post(url, formData);

          if (!checkBox.includes(0)) {
            // กรณี check ทุุกหัวข้อ // เปิด Advance
            this.basic_success_form[index] = true;
          } else {
            this.basic_success_form[index] = false;
          }
        } else if (mode == "advance") {
          // 1.1 mode advance
          formData.append("img", this.advance_file_image[index]);
          formData.append("pdf", this.advance_file_pdf[index]);
          let checkBox = this.advance_guide_list[index];
          checkBox = checkBox.map(x => (x == true ? 1 : 0));
          let resCheckBox = checkBox.join();
          formData.append("check_box", resCheckBox);
          formData.append("text", this.advance_assessment[index]);
          let data = await Axios.post(url, formData);
          if (!checkBox.includes(0)) {
            // กรณี check ทุุกหัวข้อ // เปิด Signi
            this.advance_success_form[index] = true;
          } else {
            this.advance_success_form[index] = false;
          }
        } else {
          // 1.1 mode significance
          formData.append("img", this.signifi_file_image[index]);
          formData.append("pdf", this.signifi_file_pdf[index]);
          let checkBox = this.signifi_guide_list[index];
          checkBox = checkBox.map(x => (x == true ? 1 : 0));
          let resCheckBox = checkBox.join();
          formData.append("check_box", checkBox);
          formData.append("text", this.signifi_assessment[index]);
          let data = await Axios.post(url, formData);
        }

        // if(!this.basic_success_form.includes(false)){
        //   // กรณีประเมิน basic ครบทุกช่อง mark ว่า หมวด1 ทำเสร็จ
        //    const url = this.apiPath + "user/setUserStepperLog.php";
        //     let postData = {
        //   category: "category1",
        //   user_id: this.$q.sessionStorage.getItem("uid"),
        //   year: this.$q.sessionStorage.getItem("y"),
        //   status: 1 // 1 = finish
        // };
        //   let data = await Axios.post(url, postData);
        // }

          this.reRenderComponent()
      // } 
      // else if (no == 2) {
      //   // save 1.2
      //   if (mode == "basic") {
      //     // 1.2 basic
      //     formData.append("img", this.basic_file_image_2);
      //     formData.append("pdf", this.basic_file_pdf_2);
      //     let checkBox = this.basic_guide_list_2;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", resCheckBox);
      //     formData.append("text", this.basic_assessment_2);
      //     let data = await Axios.post(url, formData);

      //     if (!checkBox.includes(0)) {
      //       // กรณี check ทุุกหัวข้อ // เปิด Advance
      //       this.basic_success_form_2 = true;
      //     } else {
      //       this.basic_success_form_2 = false;
      //     }
      //   } else if (mode == "advance") {
      //     // 1.2 advance
      //     formData.append("img", this.advance_file_image_2);
      //     formData.append("pdf", this.advance_file_pdf_2);
      //     let checkBox = this.advance_guide_list_2;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", resCheckBox);
      //     formData.append("text", this.advance_assessment_2);
      //     let data = await Axios.post(url, formData);
      //     if (!checkBox.includes(0)) {
      //       // กรณี check ทุุกหัวข้อ // เปิด Signi
      //       this.advance_success_form_2 = true;
      //     } else {
      //       this.advance_success_form_2 = false;
      //     }
      //   } else {
      //     // 1.2 significance
      //     formData.append("img", this.signifi_file_image_2);
      //     formData.append("pdf", this.signifi_file_pdf_2);
      //     let checkBox = this.signifi_guide_list_2;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", checkBox);
      //     formData.append("text", this.signifi_assessment_2);
      //     let data = await Axios.post(url, formData);
      //   }
      // } else if (no == 3) {
      //   // save 1.3
      //   if (mode == "basic") {
      //     // 1.3 basic
      //     formData.append("img", this.basic_file_image_3);
      //     formData.append("pdf", this.basic_file_pdf_3);
      //     let checkBox = this.basic_guide_list_3;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", resCheckBox);
      //     formData.append("text", this.basic_assessment_3);
      //     let data = await Axios.post(url, formData);

      //     if (!checkBox.includes(0)) {
      //       // กรณี check ทุุกหัวข้อ // เปิด Advance
      //       this.basic_success_form_3 = true;
      //     } else {
      //       this.basic_success_form_3 = false;
      //     }
      //   } else if (mode == "advance") {
      //     // 1.3 advance
      //     formData.append("img", this.advance_file_image_3);
      //     formData.append("pdf", this.advance_file_pdf_3);
      //     let checkBox = this.advance_guide_list_3;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", resCheckBox);
      //     formData.append("text", this.advance_assessment_3);
      //     let data = await Axios.post(url, formData);
      //     if (!checkBox.includes(0)) {
      //       // กรณี check ทุุกหัวข้อ // เปิด Signi
      //       this.advance_success_form_3 = true;
      //     } else {
      //       this.advance_success_form_3 = false;
      //     }
      //   } else {
      //     // 1.3 significance
      //     formData.append("img", this.signifi_file_image_3);
      //     formData.append("pdf", this.signifi_file_pdf_3);
      //     let checkBox = this.signifi_guide_list_3;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", checkBox);
      //     formData.append("text", this.signifi_assessment_3);
      //     let data = await Axios.post(url, formData);
      //   }
      // } else if (no == 4) {
      //   if (mode == "basic") {
      //     // 1.4 basic
      //     formData.append("img", this.basic_file_image_4);
      //     formData.append("pdf", this.basic_file_pdf_4);
      //     let checkBox = this.basic_guide_list_4;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", resCheckBox);
      //     formData.append("text", this.basic_assessment_4);
      //     let data = await Axios.post(url, formData);

      //     if (!checkBox.includes(0)) {
      //       // กรณี check ทุุกหัวข้อ // เปิด Advance
      //       this.basic_success_form_4 = true;
      //     } else {
      //       this.basic_success_form_4 = false;
      //     }
      //   } else if (mode == "advance") {
      //     // 1.4 advance
      //     formData.append("img", this.advance_file_image_4);
      //     formData.append("pdf", this.advance_file_pdf_4);
      //     let checkBox = this.advance_guide_list_4;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", resCheckBox);
      //     formData.append("text", this.advance_assessment_4);
      //     let data = await Axios.post(url, formData);
      //     if (!checkBox.includes(0)) {
      //       // กรณี check ทุุกหัวข้อ // เปิด Signi
      //       this.advance_success_form_4 = true;
      //     } else {
      //       this.advance_success_form_4 = false;
      //     }
      //   } else {
      //     // 1.4 significance
      //     formData.append("img", this.signifi_file_image_4);
      //     formData.append("pdf", this.signifi_file_pdf_4);
      //     let checkBox = this.signifi_guide_list_4;
      //     checkBox = checkBox.map(x => (x == true ? 1 : 0));
      //     let resCheckBox = checkBox.join();
      //     formData.append("check_box", checkBox);
      //     formData.append("text", this.signifi_assessment_4);
      //     let data = await Axios.post(url, formData);
      //   }
      // }
      this.isSaveData = true;
      setTimeout(() => {
        this.isSaveData = false;
      }, 1000);
    },
    getBasic(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "basic");
        console.log(getData[0]);
        if(getData.length > 0){
           this.basic_assessment[i - 1] = getData[0].text;
        let checkBox = getData[0].check_box
          .split(",")
          .map(x => (x == 1 ? true : false));
        // console.log(checkBox);
        this.basic_guide_list[i - 1] = [];
          if (!checkBox.includes(false)) {
            this.basic_success_form[i - 1] = true;
           }else{
            this.basic_success_form[i - 1] = false;
           }
          this.basic_guide_list[i - 1] = checkBox;
          this.basic_file_image[i - 1] =
            getData[0].is_img == 0 ? null : [getData[0].is_img];
          this.basic_file_pdf[i - 1] =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
       
        }
       
      }
    },
    getAdvance(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "advance");
        if(getData.length > 0){
             this.advance_assessment[i - 1] = getData[0].text;
        let checkBox = getData[0].check_box
          .split(",")
          .map(x => (x == 1 ? true : false));
        this.advance_guide_list[i - 1] = [];
        if (!checkBox.includes(false)) {
          this.advance_success_form[i - 1] = true;
        }
        this.advance_guide_list[i - 1] = checkBox;
        this.advance_file_image[i - 1] =
          getData[0].is_img == 0 ? null : [getData[0].is_img];
        this.advance_file_pdf[i - 1] =
          getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
     
      }
    },
    getSignificance(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(
          x => x.q_number == i && x.mode == "significance"
        );
        if(getData.length > 0){
        this.signifi_guide_list[i - 1] = [];
        this.signifi_assessment[i - 1] = getData[0].text;
        let checkBox = getData[0].check_box
          .split(",")
          .map(x => (x == 1 ? true : false));

        if (!checkBox.includes(false)) {
          this.signifi_success_form[i - 1] = true;
        }
        this.signifi_guide_list[i - 1] = checkBox;
        this.signifi_file_image[i - 1] =
          getData[0].is_img == 0 ? null : [getData[0].is_img];
        this.signifi_file_pdf[i - 1] =
          getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      
      }
    },

    // getBasic1(data) {
    //   // ข้อ 1.1 Basic
    //   let getData = data.filter(x => x.q_number == 1 && x.mode == "basic");
    //   this.basic_assessment_1 = getData[0].text;
    //   // checkbox ข้อที่ 1.1 basic
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));

    //   if (!checkBox.includes(false)) {
    //     this.basic_success_form_1 = true;
    //   }
    //   this.basic_guide_list_1 = checkBox;
    //   this.basic_file_image_1 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.basic_file_pdf_1 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getAdvance1(data) {
    //   let getData = data.filter(x => x.q_number == 1 && x.mode == "advance");
    //   this.advance_assessment_1 = getData[0].text;
    //   // checkbox ข้อที่ 1.1 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   if (!checkBox.includes(false)) {
    //     this.advance_success_form_1 = true;
    //   }
    //   this.advance_guide_list_1 = checkBox;
    //   this.advance_file_image_1 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.advance_file_pdf_1 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getSignificance1(data) {
    //   let getData = data.filter(
    //     x => x.q_number == 1 && x.mode == "significance"
    //   );
    //   this.signifi_assessment_1 = getData[0].text;
    //   // checkbox ข้อที่ 1.1 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   this.signifi_guide_list_1 = checkBox;
    //   this.signifi_file_image_1 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.signifi_file_pdf_1 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getBasic2(data) {
    //   // ข้อ 1.2 Basic
    //   let getData = data.filter(x => x.q_number == 2 && x.mode == "basic");
    //   this.basic_assessment_2 = getData[0].text;
    //   // checkbox ข้อที่ 1.2 basic
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));

    //   if (!checkBox.includes(false)) {
    //     this.basic_success_form_2 = true;
    //   }
    //   this.basic_guide_list_2 = checkBox;
    //   this.basic_file_image_2 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.basic_file_pdf_2 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getAdvance2(data) {
    //   let getData = data.filter(x => x.q_number == 2 && x.mode == "advance");
    //   this.advance_assessment_2 = getData[0].text;
    //   // checkbox ข้อที่ 1.2 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   if (!checkBox.includes(false)) {
    //     this.advance_success_form_2 = true;
    //   }
    //   this.advance_guide_list_2 = checkBox;
    //   this.advance_file_image_2 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.advance_file_pdf_2 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getSignificance2(data) {
    //   let getData = data.filter(
    //     x => x.q_number == 2 && x.mode == "significance"
    //   );
    //   this.signifi_assessment_2 = getData[0].text;
    //   // checkbox ข้อที่ 1.2 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   this.signifi_guide_list_2 = checkBox;
    //   this.signifi_file_image_2 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.signifi_file_pdf_2 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getBasic3(data) {
    //   // ข้อ 1.3 Basic
    //   let getData = data.filter(x => x.q_number == 3 && x.mode == "basic");
    //   this.basic_assessment_3 = getData[0].text;
    //   // checkbox ข้อที่ 1.3 basic
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));

    //   if (!checkBox.includes(false)) {
    //     this.basic_success_form_3 = true;
    //   }
    //   this.basic_guide_list_3 = checkBox;
    //   this.basic_file_image_3 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.basic_file_pdf_3 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getAdvance3(data) {
    //   let getData = data.filter(x => x.q_number == 3 && x.mode == "advance");
    //   this.advance_assessment_3 = getData[0].text;
    //   // checkbox ข้อที่ 1.3 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   if (!checkBox.includes(false)) {
    //     this.advance_success_form_3 = true;
    //   }
    //   this.advance_guide_list_3 = checkBox;
    //   this.advance_file_image_3 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.advance_file_pdf_3 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getSignificance3(data) {
    //   let getData = data.filter(
    //     x => x.q_number == 3 && x.mode == "significance"
    //   );
    //   this.signifi_assessment_3 = getData[0].text;
    //   // checkbox ข้อที่ 1.3 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   this.signifi_guide_list_3 = checkBox;
    //   this.signifi_file_image_3 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.signifi_file_pdf_3 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getBasic4(data) {
    //   // ข้อ 1.3 Basic
    //   let getData = data.filter(x => x.q_number == 4 && x.mode == "basic");
    //   this.basic_assessment_4 = getData[0].text;
    //   // checkbox ข้อที่ 1.3 basic
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));

    //   if (!checkBox.includes(false)) {
    //     this.basic_success_form_4 = true;
    //   }
    //   this.basic_guide_list_4 = checkBox;
    //   this.basic_file_image_4 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.basic_file_pdf_4 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getAdvance4(data) {
    //   let getData = data.filter(x => x.q_number == 4 && x.mode == "advance");
    //   this.advance_assessment_4 = getData[0].text;
    //   // checkbox ข้อที่ 1.3 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   if (!checkBox.includes(false)) {
    //     this.advance_success_form_4 = true;
    //   }
    //   this.advance_guide_list_4 = checkBox;
    //   this.advance_file_image_4 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.advance_file_pdf_4 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },
    // getSignificance4(data) {
    //   let getData = data.filter(
    //     x => x.q_number == 4 && x.mode == "significance"
    //   );
    //   this.signifi_assessment_4 = getData[0].text;
    //   // checkbox ข้อที่ 1.3 advance
    //   let checkBox = getData[0].check_box
    //     .split(",")
    //     .map(x => (x == 1 ? true : false));
    //   this.signifi_guide_list_4 = checkBox;
    //   this.signifi_file_image_4 =
    //     getData[0].is_img == 0 ? null : [getData[0].is_img];
    //   this.signifi_file_pdf_4 =
    //     getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
    // },

    async getAssessmentData() {
      this.loadingShow()
      const url = this.apiPath + "user/getCategory1_6.php";
      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid"),
        step: 1
      };
      let data = await Axios.post(url, postData);
      // this.getBasic1(data.data);
      // this.getAdvance1(data.data);
      // this.getSignificance1(data.data);
      // this.getBasic2(data.data);
      // this.getAdvance2(data.data);
      // this.getSignificance2(data.data);
      // this.getBasic3(data.data);
      // this.getAdvance3(data.data);
      // this.getSignificance3(data.data);
      // this.getBasic4(data.data);
      // this.getAdvance4(data.data);
      // this.getSignificance4(data.data);
      // test re structure to array
      if(data.data){
      this.getBasic(data.data);
      this.getAdvance(data.data);
      this.getSignificance(data.data);
      this.reRenderComponent()
      }
      
      this.isLoadAssessmentFinish = true      
      this.loadingHide()
  
    },
    reRenderComponent(){
      this.basic_success_form.push("")
      this.basic_success_form.pop()
      this.advance_success_form.push("")
      this.advance_success_form.pop()
      this.signifi_success_form.push("")
      this.signifi_success_form.pop()
    },
  },

  
  created() {
    this.getAssessmentData();
  }
};
</script>

<style lang="scss" scoped></style>
