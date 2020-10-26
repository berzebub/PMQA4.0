<template>
  <div class="">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 2 การวางแผนเชิงยุทธศาสตร์</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-lg font-18">
      <!-- 2.1 -->
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep2"
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
                    >2.1 กระบวนการวางแผนยุทธศาสตร์ที่ตอบสนองความท้าทาย
                    สร้างนวัตกรรมเพื่อสร้างการเปลี่ยนแปลงและมุ่งเน้นประโยชน์สุขของ
                    ประชาชน</span
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
                              v-if="basic_success_form[0]"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="!basic_success_form[0]"
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
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="!advance_success_form[0]"
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
                                กระบวนการวางแผนยุทธศาสตร์อย่างเป็นระบบทั้งระยะสั้นและระยะ
                                ยาว
                                ตอบสนองความต้องการของประชาชนและบรรลุพันธกิจส่วน
                                ราชการ <br />-
                                แนวทางการถ่ายทอดยุทธศาสตร์สู่การปฏิบัติ
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
                                    v-model="basic_guide_list[0][0]"
                                    value
                                    @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >กระบวนการวางแผนยุทธศาสตร์เป็นระบบและสนับสนุนการ
                                    บรรลุพันธกิจ ส่วนราชการทั้งระยะสั้น
                                    ระยะยาว</span
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
                                    value
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>วิเคราะห์สภาพแวดล้อมในการแข่งขัน</span>
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
                                    value
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >วางแผนยุทธศาสตร์โดยคำนึงถึง <br />-
                                    ประโยชน์สุขประชาชน <br />-
                                    รองรับการเปลี่ยนแปลงจาก สถาพแวดล้อมภายนอก
                                    เช่น การแข่งขั้นจากภายนอกองค์การ / นอกประเทศ
                                    ความต้องการของประชาชนที่เปลี่ยนแปลงไป</span
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
                                    v-model="basic_guide_list[0][3]"
                                    value
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >แนวทาง/ช่องทางการสื่อสาร
                                    ถ่ายทอดยุทธศาสตร์สู่ การปฏิบัติ</span
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
                                  v-ripple
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
                                  v-ripple
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
                                >-
                                แผนยุทธศาสตร์ตอบสนองความท้าท้ายของส่วนราชการมีการ
                                คาดการณ์การเปลี่ยนแปลงที่กำลังจะเกิดในอนาคต
                                และแผนรองรับเพื่อ ตอบสนองต่อการเปลี่ยนแปลง
                                (รวมทั้งการเปลี่ยนแปลงที่เกิดจากการ
                                นำระบบดิจิทัลมาใช้)
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
                                    >การวิเคราะห์ความท้าทายและคาดการณ์ถึงการเปลี่ยนแปลงใน
                                    อนาคตอันมีผลกระทบต่อการปฏิบัติงานการให้บริการ
                                    การรับรู้ การเข้าถึงของภาคส่วนต่างๆ</span
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
                                    v-model="advance_guide_list[0][1]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การกำหนดยุทธศาสตร์ แผนงานที่ตอบสนองต่อความ
                                    ท้าทาย และการเปลี่ยนแปลง</span
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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
                                >- สร้างขีดความสามารถในการแข่งขัน
                                และสร้างโอกาสเชิงกลยุทธ์ใหม่ๆ
                                ที่นำไปสู่ประโยชน์สุขของประชาชนและการพัฒนาเศรษฐกิจของประเทศทั้งในระยะสั้นและระยะยาว
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
                                    >แผนยุทธศาสตร์
                                    และแผนงานที่สร้างขีดความสามารถทางการ แข่งขัน
                                    และสร้างโอกาสเชิงกลยุทธ์ใหม่ๆ เช่น <br />-
                                    มีแผนนำระบบดิจิทัลมาใช้ปรับเปลี่ยนการทำงานและรองรับ
                                    การเปลี่ยนแปลง <br />-
                                    มีแผนการยกระดับการให้บริการที่รวดเร็ว ฉับไว
                                    ต้นทุนต่ำ เข้าถึง ได้ง่ายและเข้าถึงได้ทุกที่
                                    ทุกเวลา</span
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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

      <!-- 2.2 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep2"
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
                    >2.2
                    การกำหนดเป้าหมายเชิงยุทธศาสตร์ทั้งระยะสั้นและระยะยาวที่สอดคล้องกับพันธกิจของส่วนราชการและเชื่อมโยงกับยุทธศาสตร์ชาติ</span
                  >
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
                        :disable="!basic_success_form[1]"
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
                        :disable="!advance_success_form[1]"
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
                    <!-- 2.2 Basic -->
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
                                การกำหนดเป้าประสงค์และตัวชี้วัดเชิงยุทธศาสตร์ที่ตอบสนองต่อ
                                พันธกิจของส่วนราชการทั้งระยะสั้นและระยะยาว
                                รวมทั้งการสร้างการ เปลี่ยนแปลง
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
                                    v-model="basic_guide_list[1][0]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีแผนที่ยุทธศาสตร์ (Strategy Map)
                                    แผนระยะสั้นและแผนระยะ
                                    ยาวที่ส่งผลต่อยุทธศาสตร์ชาติ</span
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
                                    >กำหนดตัวชี้วัดและเป้าประสงค์ที่ตอบสนองพันธกิตของส่วนราชการและการเปลี่ยนแปลง</span
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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

                    <!-- 2.2 Advance -->
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
                                มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัดเชิงยุทธศาสตร์ที่
                                เกิดกับยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว
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
                                    >มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัด
                                    ที่มีผลต่อ
                                    ยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว
                                    ในมิติต่างๆ เช่นการเพิ่ม
                                    ขีดความสามารถในการแข่งขัน
                                    การลดผลกระทบจากข้อบังคับทาง กฏหมาย
                                  </span>
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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
                                มีการวิเคราะห์ความเสี่ยงระดับองค์การและผลกระทบทั้งทางตรง
                                ทางอ้อมที่ส่งผลต่อระบบเศรษฐกิจสังคม สาธารณสุข
                                และสิ่งแวดล้อม ของประเทศ
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
                                    >วิเคราะห์ความเสี่ยงระดับองค์การที่อาจเกิดขึ้น
                                    และส่งผลต่อ แผนงานและเป้าหมายที่วางไว้</span
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
                                    >วิเคราะห์ความเสี่ยงระดับองค์การที่อาจเกิดขึ้น
                                    ที่อาจส่งผลกระทบ ต่อระบบเศรษฐกิจ สังคม
                                    สาธารณสุข และ สิ่งแวดล้อมของ ประเทศ</span
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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

      <!-- 2.3 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep2"
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
                    >2.3
                    แผนกฏิบัติการที่ขับเคลื่อนยุทธศาสตร์ของส่วนราชการลงไปทุกภาคส่วน
                    โดยผ่านเครือข่ายทั้งภายในและภายนอก</span
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
                        :disable="!basic_success_form[2]"
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
                        :disable="!advance_success_form[2]"
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
                    <!-- 2.3 Basic -->
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
                                >- แผนปฏิบัติการที่ครอบคลุมทุกส่วนงานชัดเจน
                                และสื่อสารสู่การปฏิบัติ
                                ไปยังทุกกลุ่มทั้งภายในและภายนอก
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
                                    v-model="basic_guide_list[2][0]"
                                    value=""
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >รองรับยุทธศาสตร์ทุกด้านครอบคลุมทุกส่วนงาน</span
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
                                    >ถ่ายทอดลงไปถึงเครือข่ายระดับพื้นที่ทั้งภายในและภายนอก
                                    องค์การ</span
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
                                    >มีความชัดเจน
                                    และสื่อสารสู่การปฏิบัติได้อย่างมีประสิทธิผล</span
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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

                    <!-- 2.3 Advance -->
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
                                แผนปฏิบัติการที่สนับสนุนความสำเร็จของยุทธศาสตร์ของส่วน
                                ราชการครอบคลุมทุกส่วนงานชัดเจน
                                และเน้นการเกิดประสิทธิภาพ (การทำน้อยได้มาก)
                                การสร้างคุณค่าแก่ประชาชน (Public value)
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
                                    >ประสิทธิภาพควบคู่กับประสิทธิผล
                                    (การทำน้องได้มาก)</span
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
                                    >ใช้เทคโนโลยีดิจิทัลมาช่วยในการสื่อสาร
                                    การลดต้นทุน
                                    การปรับปรุงการให้บริการที่สร้างความพึงพอใจ
                                    รวดเร็ว สร้างคุณค่าแก่ประชาชน</span
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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
                                แผนปฏิบัติการที่สนับสนุนความสำเร็จของยุทธศาสตร์ของส่วน
                                ราชการ
                                บูรณาการกับแผนงานด้านบุคลากรและการใช้ทรัพยากรที่
                                รองรับการเปลี่ยนแปลงที่จะเกิดขึ้น
                                และสื่อสารสู่การปฏิบัติผ่าน
                                เครือข่ายทั้งภายในและภายนอกและการใช้ข้อมูลร่วมกันเพื่อการประสาน
                                งานให้เกิดความสำเร็จ
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
                                    >แผนด้านบุคลากรทั้งการพัฒนาขีดความสามารถและอัตรากำลัง
                                    เพื่อรองรับการเปลี่ยนแปลง</span
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
                                    v-model="signifi_guide_list[2][1]"
                                    value
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >แผนการปรับเปลี่ยนเพื่อให้ทันกับความต้องการด้านการ
                                    เปลี่ยนแปลงเทคโนโลยี</span
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
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  v-ripple
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

      <!-- 2.4 -->
      <div class="q-mt-sm q-mb-md">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep2"
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
                    >2.4 กาคติดตามผลของการบรรลุเป้าหมายเชิงยุทธศาสตร์
                    การแก้ไขปัญหา และการรายงานผลอย่างมีประสิทธิผล</span
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
                        :disable="!basic_success_form[3]"
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
                        :disable="!advance_success_form[3]"
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
                    <!-- 2.4 Basic -->
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
                                การติดตามรายงานผลการดำเนินการตามแผนและการบรรลุเป้าหมาย
                                เชิงยุทธศาสตร์ และการรายงานผลสู่สาธารณะ (Open by
                                default)
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
                                    >ระบบการติดตามรายงานผลของตัวชี้วัด
                                    แผนปฏิบัติการ
                                    ยุทธศาสตร์ทั้งระยะสั้นและระยะยาว <br />-
                                    รายงานสถานะการบรรลุเป้าหมายที่ตั้งไว้
                                    <br />-
                                    เตรียมการแก้ไขปัญหากรณีไม่เป็นไปตามเป้าหมายที่ตั้งไว้

                                    <br />-
                                    การรายงานผลที่เกิดขึ้นต่อสาธารณะ</span
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
                                  @click="basic_file_pdf[3] = null"
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  @click="basic_file_image[3] = null"
                                  v-ripple
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

                    <!-- 2.4 Advance -->
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
                                >- การคาดการณ์ของผลการดำเนินการตามแผน
                                การแก้ปัญหา และการปรับแผนให้ทันต่อการเปลี่ยนแปลง
                                (Projection)
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
                                    >แผนมีความยืดหยุ่นสามารถปรับเปลี่ยนได้
                                    <br />-
                                    สามารถปรับแผนปฏิบัติการให้สอดคล้องกับผลที่เกิดทั้งในกรณี
                                    ที่ไม่บรรลุ หรือดีกว่าค่าเป้าหมายที่ตั้งไว้

                                    <br />-
                                    สามารถปรับแผนให้ทันต่อการเปลี่ยนแปลงได้
                                  </span>
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
                                    >มีการคาดการณ์ผลการดำเนินการที่เกิดขึ้น</span
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
                                    v-model="advance_guide_list[3][2]"
                                    value
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการทบทวนแผนยุทธศาสตร์ทุกปี
                                    เพื่อให้ทันต่อการเปลี่ยนแปลง</span
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
                                  @click="advance_file_pdf[3] = null"
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  @click="advance_file_image[3] = null"
                                  v-ripple
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
                                การเตรียมการเชิงรุกเพื่อตอบสนองต่อการเปลี่ยนแปลงที่อาจเกิดขึ้น
                                จากภายในและภายนอกและการปรับแผนที่ตอบสนองทันเวลา
                                เชิงรุก อย่างมีประสิทธิผล (Proactive and
                                effective)
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
                                    >ติดตามสถานการณ์ที่อาจส่งผลต่อการดำเนินการแผนโดย
                                    สามารถวิเคราะห์ได้ว่าปัญหาเกิดที่ใดและจะส่งผลต่อการปฏิบัติการ
                                    อย่างไร
                                  </span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="signifi_guide_list[3][1]"
                                    value
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการเตรียมความพร้อมและมีความคล่องตัวต่อสถานการณ์ที่
                                    กำลังเปลี่ยนแปลง</span
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
                                    v-model="signifi_guide_list[3][2]"
                                    value
                                     @input="reRenderComponent()"
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีแผนการจัดการเชิงรุกเพื่อปรับแผนให้ทันเวลาและเกิดผลลัพธ์ที่ดีเป็นไปตามต้องการ</span
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
                                  @click="signifi_file_pdf[3] = null"
                                  v-ripple
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
                                  accept=".jpg,.png"
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
                                  @click="signifi_file_image[3] = null"
                                  v-ripple
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
      isLoadAssessmentFinish: false,
      basic_assessment: [],
      basic_success_form: [false, false, false, false],
      basic_guide_list: [
        [false, false, false, false],
        [false, false],
        [false, false, false],
        [false]
      ],
      basic_file_image: [],
      basic_file_pdf: [],
      advance_assessment: [],
      advance_success_form: [],
      advance_guide_list: [
        [false, false],
        [false],
        [false, false],
        [false, false, false]
      ],
      advance_file_image: [],
      advance_file_pdf: [],
      signifi_assessment: [],
      signifi_success_form: [],
      signifi_guide_list: [
        [false],
        [false, false],
        [false, false],
        [false, false, false]
      ],
      signifi_file_image: [],
      signifi_file_pdf: [],

      // Form 1.1
      tabs1: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance


      // Form 1.2
      tabs2: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance


      // Form 1.3
      tabs3: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance


      // Form 1.4
      tabs4: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
 

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    reRenderComponent() {
      this.basic_success_form.push("");
      this.basic_success_form.pop();
      this.advance_success_form.push("");
      this.advance_success_form.pop();
      this.signifi_success_form.push("");
      this.signifi_success_form.pop();
    },
    async saveData(no, mode) {
      let index = no - 1;
      const url = this.apiPath + "user/addUpdateCategory1_6.php";
      const userId = this.$q.sessionStorage.getItem("uid");
      const year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();

      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("mode", mode);
      formData.append("year", year);
      formData.append("step", 2);
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

      this.reRenderComponent();

      this.isSaveData = true;
      setTimeout(() => {
        this.isSaveData = false;
      }, 1000);
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
      if (data.data) {
        this.getBasic(data.data);
        this.getAdvance(data.data);
        this.getSignificance(data.data);
        this.reRenderComponent();
      }

      this.isLoadAssessmentFinish = true;
      this.loadingHide();
    },
    getBasic(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "basic");
        if (getData.length > 0) {
          this.basic_assessment[i - 1] = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));
          // console.log(checkBox);
          this.basic_guide_list[i - 1] = [];
          if (!checkBox.includes(false)) {
            this.basic_success_form[i - 1] = true;
          } else {
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
        if (getData.length > 0) {
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
        if (getData.length > 0) {
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
    }
  },
  created() {
    this.getAssessmentData();
  }
};
</script>

<style lang="scss" scoped></style>
