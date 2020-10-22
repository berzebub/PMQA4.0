<template>
  <div class="">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 5 การมุ่งเน้นบุคลากร</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-lg font-18">
      <!-- 5.1 -->
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep5"
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
                    >5.1 นโยบายและระบบการจัดการด้านบุคลากรที่มีประสิทธิภาพ
                    ตอบสนองยุทธศาสตร์ และสร้างแรงจูงใจ</span
                  >
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form_1 &&
                          !advance_success_form_1 &&
                          !signifi_success_form_1
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form_1">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form_1">
                        Advance
                      </span>
                      <span v-else="basic_success_form_1">
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
                              v-if="basic_success_form_1"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="!basic_success_form_1"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form_1"
                            ></q-icon>
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="!advance_success_form_1"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form_1"
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
                    <!-- 5.1 Basic -->
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
                                >- ระบบการสรรหา ว่าจ้างบรรจุ
                                และการจัดวางคนไปยังตำแหน่งงานที่
                                ตรงกับความถนัดและความต้องการเพื่อประโยชน์สูงสุดของระบบงาน
                                ของราชการ
                                โดยคำนึงถึงความต้องการที่หลากหลายของประชาชน
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
                                    v-model="basic_guide_list_1[0]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ระบบการสรรหา ว่าจ้าง บรรจุมีประสิทธิภาพ
                                    โปร่งใสและเหมาะสม
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
                                    v-model="basic_guide_list_1[1]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การจัดโครงสร้างการทำงานและการจัดวางบุคลากรไปอยู่ตำแหน่งที่เหมาะสมกับการใช้ความรู้และประสบการณ์
                                    อย่างเต็มความสามารถก่อให้เกิดประโยชน์สูงที่สุดต่อองค์การและตอบโจทย์
                                    ความต้องการของประชาชน</span
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_1"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf_1
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_pdf_1"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf_1"
                                  @click="basic_file_pdf_1 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_1"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image_1
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_image_1"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image_1"
                                  @click="basic_file_image_1 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData(1)"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.1 Advance -->
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
                                การประเมินประสิทธิผลการทำงานและเส้นทางความก้าวหน้าของ
                                บุคลากรทุกกลุ่มสามารถสร้างแรงจูงใจให้บุคลากรทุ่มเท
                                และทำงานให้มีประสิทธิภาพสูงตอบสนองยุทธศาสตร์และมุ่งเน้นประโยชน์สุขแก่
                                ประชาชน (High Performance)
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
                                    v-model="advance_guide_list_1[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ระบบการประเมินประสิทธิผลการทำงานของบุคลากรทุกกลุ่ม
                                    มีความชัดเจน โปร่งใส
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
                                    v-model="advance_guide_list_1[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >เปิดโอกาสให้บุคลากรทุกคนสามารถวางแผนเส้นทางความ
                                    ก้าวหน้าของตนเองและพัฒนาความสามารถของตนในระยะยาว
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
                                    v-model="advance_guide_list_1[2]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >กลไกในการกระตุ้นให้บุคลากรเกิดแรงจูงใจ
                                    และมีการทำงานที่มีประสิทธิภาพสูง
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_1"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf_1
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_pdf_1"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf_1"
                                  @click="advance_file_pdf_1 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_1"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image_1
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_image_1"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image_1"
                                  @click="advance_file_image_1 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.1 Significance -->
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
                                >-
                                นโยบายการจัดการด้านบุคลากรสนับสนุนการทำงานที่มีความคล่องตัว
                                และปรับเปลี่ยนให้ทันต่อการเปลี่ยนแปลงของสภาพแวดล้อมการทำงาน
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
                                    v-model="signifi_guide_list_1[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การบูรณาการงานบริหารบุคลากรกับการปรับปรุงการทำงานของ
                                    ทุกๆ กระบวนงาน
                                    ให้เกิดการทำงานที่มีประสิทธิภาพสูง
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
                                    v-model="signifi_guide_list_1[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >นโยบายด้านการส่งเสริมให้เกิดการสร้างนวัตกรรมและการทำงาน
                                    เป็นทีม
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
                                    v-model="signifi_guide_list_1[2]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การจัดการด้านบุคลากรเพื่อให้เกิดความคล่องตัวในการประสาน
                                    งานในแนวระนาบกับหน่วยอื่นๆ
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_1"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf_1
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_pdf_1"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf_1"
                                  @click="signifi_file_pdf_1 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_1"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image_1
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_image_1"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image_1"
                                  @click="signifi_file_image_1 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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

      <!-- 5.2 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep5"
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
                    >5.2 ระบบการทำงานที่มีประสิทธิภาพ คล่องตัว
                    และมุ่งเน้นผลสัมฤทธิ์</span
                  >
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form_2 &&
                          !advance_success_form_2 &&
                          !signifi_success_form_2
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form_2">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form_2">
                        Advance
                      </span>
                      <span v-else="basic_success_form_2">
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
                              v-if="basic_success_form_2"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="!basic_success_form_2"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form_2"
                            ></q-icon>
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="!advance_success_form_2"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form_2"
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
                    <!-- 5.2 Basic -->
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
                                >- สภาพแวดล้อมในการทำงานที่ <br />- ปลอดภัย
                                <br />- สนับสนุนการทำงานที่มีประสิทธิภาพ <br />-
                                คล่องตัว <br />- ร่วมกันทำงานให้เกิดประสิทธิผล
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-md q-ml-md">
                              <span
                                >การสร้างบรรยากาศและสภาพแวดล้อมในการทำงานที่</span
                              >
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="basic_guide_list_2[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>ปลอดภัย </span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="basic_guide_list_2[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>มีประสิทธิภาพ </span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="basic_guide_list_2[2]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>เป็นไปตามกรอบของกฏหมาย </span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="basic_guide_list_2[3]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >คล่องตัวและร่วมกันทำงานให้เกิดประสิทธิผล
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_2"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf_2
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_pdf_2"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf_2"
                                  @click="basic_file_pdf_2 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_2"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image_2
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_image_2"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image_2"
                                  @click="basic_file_image_2 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.2 Advance -->
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
                                >- สภาพแวดล้อมที่เอื้อให้บุคลากรมีความรับผิดชอบ
                                (Empower) กล้า
                                ตัดสินใจเข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหาเพื่อ
                                บรรลุแผนงานหลักขององค์การ
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-md q-ml-md">
                              <span
                                >ส่วนราชการควรสร้างสภาพแวดล้อมที่เอื้อให้บุคลากร</span
                              >
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="advance_guide_list_2[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>มีความรับผิดชอบ </span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="advance_guide_list_2[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>กล้าตัดสินใจ </span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="advance_guide_list_2[2]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >เข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหา
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
                                    v-model="advance_guide_list_2[3]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการพัฒนาระบบฐานข้อมูลให้พร้อมสนับสนุนการทำงานอย่าง
                                    มีประสิทธิภาพ
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_2"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf_2
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_pdf_2"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf_2"
                                  @click="advance_file_pdf_2 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_2"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image_2
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_image_2"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image_2"
                                  @click="advance_file_image_2 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.2 Significance -->
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
                                >- การทำงานที่เป็นทีมที่มีสมรรถะสูง
                                มีความคล่องตัวและสามารถทำงาน
                                ร่วมกับเครือข่ายภายนอกเพื่อนำไปสู่แก้ไขปัญหาที่ซับซ้อนอย่างมี
                                ประสิทธิผล
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
                                    v-model="signifi_guide_list_2[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>มีการทำงานเป็นทีมภายในองค์การ </span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="signifi_guide_list_2[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีกระบวนการสร้างความร่วมือกับเครือข่ายภาคประชาชนและ
                                    เอกชนภานนอกในลักษณะของทีมสหสาขา
                                    (Trans-disciplinary) เพื่อร่วมกันแก้ปัญหา
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_2"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf_2
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_pdf_2"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf_2"
                                  @click="signifi_file_pdf_2 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_2"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image_2
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_image_2"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image_2"
                                  @click="signifi_file_image_2 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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

      <!-- 5.3 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep5"
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
                    >5.3 การสร้างวัฒนธรรมการทำงานที่ดี มีประสิทธิภาพ
                    และความร่วมมือ</span
                  >
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form_3 &&
                          !advance_success_form_3 &&
                          !signifi_success_form_3
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form_3">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form_3">
                        Advance
                      </span>
                      <span v-else="basic_success_form_3">
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
                              v-if="basic_success_form_3"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="!basic_success_form_3"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form_3"
                            ></q-icon>
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="!advance_success_form_3"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form_3"
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
                    <!-- 5.3 Basic -->
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
                                >- การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ
                                เปิดโอกาสในการนำ
                                เสนอความริเริ่มและสนับสนุนความคิดสร้างสรรค์
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
                                    v-model="basic_guide_list_3[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ
                                    คือ มีความรอบรู้ เชี่ยวชาญ
                                    และถูกต้องตามมาตรฐาน
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
                                    v-model="basic_guide_list_3[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >เปิดโอกาสในการนำเสนอความคิดริเริ่มและสนับสนุนความคิด
                                    สร้างสรรค์</span
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_3"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf_3
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_pdf_3"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf_3"
                                  @click="basic_file_pdf_3 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_3"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image_3
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_image_3"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image_3"
                                  @click="basic_file_image_3 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.3 Advance -->
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
                                >- การค้นหาปัจจัยที่ทำให้บุคลากรมีความผูกพัน
                                ทุ่มเทมีผลการปฏิบัติ
                                งานที่ดีและสร้างวัฒนธรรมการทำงานที่นำไปสู่ผลลัพธ์ขององค์การ
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
                                    v-model="advance_guide_list_3[0]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การค้นหาปัจจัยที่ส่งผลต่อความผูกพัน
                                    การทุ่มเท และผลการ
                                    ปฏิบัติงานที่ดีของบุคลากร</span
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
                                    v-model="advance_guide_list_3[1]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการวิเคราะห์ความสัมพันธ์ระหว่างปัจจัยที่สร้างความผูกพันกับ
                                    ผลลัพธ์ขององค์การ</span
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
                                    v-model="advance_guide_list_3[2]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >นำปัจจัยดังกล่าวมาใช้ในการสร้างให้บุคลากรเกิดแรงจูงใจ
                                    เพื่อให้ เกิดผลการปฏิบัติงานที่ดี</span
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_3"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf_3
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_pdf_3"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf_3"
                                  @click="advance_file_pdf_3 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_3"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image_3
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_image_3"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image_3"
                                  @click="advance_file_image_3 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.3 Significance -->
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
                                >- การสร้างวัฒนธรรมการทำงานที่มีประสิทธิภาพสูง
                                สร้างความภูมิใจ และความเป็นเจ้าของ ให้แก่บุคลากร
                                (Public Entrepreneurship)
                                และความร่วมมือเพื่อนำพาองค์การไปสู่ความสำเร็จ
                                และประโยชน์ที่เกิด กับสังคมและประชาชน
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
                                    v-model="signifi_guide_list_3[0]"
                                    value
                                  />
                                </div>
                                <div class="col q-py-xs">
                                  <span
                                    >สร้างวัฒนธรรมการทำงานที่มุ่งเน้นความคล่องตัวและการมี
                                    ประสิทธิภาพสูง</span
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
                                    v-model="signifi_guide_list_3[1]"
                                    value
                                  />
                                </div>
                                <div class="col q-py-xs">
                                  <span>ส่งเสริมการแก้ปัญหาเชิงรุก</span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="signifi_guide_list_3[2]"
                                    value
                                  />
                                </div>
                                <div class="col q-py-xs">
                                  <span
                                    >สร้างแนวคิดของการเป็นผู้ประกอบการภาครัฐ
                                    โดยมุ่งเน้น ประโยชน์ของส่วนรวม
                                    ผู้รับบริการหรือผุ้มีส่วนได้ส่วนเสีย
                                    เป็นหลัก</span
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_3"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf_3
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_pdf_3"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf_3"
                                  @click="signifi_file_pdf_3 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_3"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image_3
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_image_3"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  v-ripple
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image_3"
                                  @click="signifi_file_image_3 = null"
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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

      <!-- 5.4 -->
      <div class="q-mt-sm q-mb-md">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep5"
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
                    >5.4 ระบบการพัฒนาบุคลากรให้มีความรู้ ความสามารถ
                    ก้าวทันเทคโนโลยี แก้ไขปัญหาสร้างความรอบรู้
                    และความมีจริยธรรม</span
                  >
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                    <span
                      class="font-18"
                      v-if="
                        !basic_success_form_4 &&
                          !advance_success_form_4 &&
                          !signifi_success_form_4
                      "
                      >ยังไม่ทำการประเมิน</span
                    >
                    <div class=" font-18" v-else>
                      <q-icon
                        color="teal"
                        name="fas fa-check-circle"
                        size="16px"
                      ></q-icon>
                      <span v-if="signifi_success_form_4">
                        Significance
                      </span>
                      <span v-else-if="advance_success_form_4">
                        Advance
                      </span>
                      <span v-else="basic_success_form_4">
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
                              v-if="basic_success_form_4"
                            ></q-icon>
                            <span>Basic</span>
                          </div>
                        </template>
                      </q-tab>
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Advance"
                        :disable="!basic_success_form_4"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="advance_success_form_4"
                            ></q-icon>
                            <span>Advance</span>
                          </div>
                        </template></q-tab
                      >
                      <q-tab
                        content-class="q-pa-sm"
                        no-caps=""
                        name="Significance"
                        :disable="!advance_success_form_4"
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="signifi_success_form_4"
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
                    <!-- 5.4 Basic -->
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
                                >- ระบบการพัฒนาบุคลากรที่สร้างคนให้มี <br />-
                                คุณธรรม จริยธรรม <br />-
                                มีความรู้และทักษะในการแก้ปัญหา <br />-
                                ทักษะด้านดิจิทัล
                                และความรอบรู้ให้ทันต่อการเปลี่ยนแปลง
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-md q-ml-md">
                              <span
                                >การพัฒนาบุคลากรในด้านต่างๆ
                                ที่ครอบคลุมเรื่อง</span
                              >
                            </div>
                            <div class="q-mt-sm">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="basic_guide_list_4[0]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ความรู้ความสามารถในการทำงานและการแก้ปัญหา</span
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
                                    v-model="basic_guide_list_4[1]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>คุณธรรม และจริยธรรม</span>
                                </div>
                              </div>

                              <div class="row q-mt-md">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="basic_guide_list_4[2]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span>ความรู้และทักษะด้านดิจิทัล</span>
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_pdf_4"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_pdf_4
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_pdf_4"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_pdf_4"
                                  @click="basic_file_pdf_4 = null"
                                  v-ripple
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="basic_file_image_4"
                                  dense=""
                                  style=""
                                  :style="
                                    !basic_file_image_4
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!basic_file_image_4"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="basic_file_image_4"
                                  @click="basic_file_image_4 = null"
                                  v-ripple
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.4 Advance -->
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
                                >- ระบบการพัฒนาบุคลากรเพื่อเพิ่มพูน
                                สั่งสมทักษะความรู้ความ เชี่ยวชาญในด้านต่างๆ
                                ที่มีความสำคัญต่อสมรรถะหลักและการบรรลุ
                                เป้าหมายยุทธศาสตร์ของส่วนราชการ
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
                                    v-model="advance_guide_list_4[0]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >แผนพัฒนาบุคลากรที่ตอบสนองยุทธศาสตร์
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
                                    v-model="advance_guide_list_4[1]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >แผนพัฒนาบุคลากรที่ตอบสนองการสร้างสมรรถนะหลักของ
                                    องค์การทั้งทักษะความรู้
                                    และความเชี่ยวชาญเฉพาะด้าน</span
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_pdf_4"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_pdf_4
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_pdf_4"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_pdf_4"
                                  @click="advance_file_pdf_4 = null"
                                  v-ripple
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="advance_file_image_4"
                                  dense=""
                                  style=""
                                  :style="
                                    !advance_file_image_4
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!advance_file_image_4"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="advance_file_image_4"
                                  @click="advance_file_image_4 = null"
                                  v-ripple
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
                                  @click="saveData()"
                                ></q-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-tab-panel>

                    <!-- 5.4 Significance -->
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
                                ระบบการพัฒนาบุคลากรและผู้นำให้มีทักษะที่สามารถปฏิบัติงานได้
                                หลากหลายมีความรอบรู้
                                สามารถตัดสินใจและมีความคิดในเชิงวิกฤติ
                                พร้อมรับปัญหาที่มีความซับซ้อนมากยิ่งขึ้น (Fluid
                                Intelligence / Complex Problem Solving)
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
                                    v-model="signifi_guide_list_4[0]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การพัฒนาบุคลากรให้มีทักษะและสามารถปฏิบัติงานได้หลากหลาย
                                  </span>
                                </div>
                              </div>

                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="signifi_guide_list_4[1]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การพัฒนาบุคลากรและผู้นำให้มีความรอบรู้
                                    เป็นนักคิด มีความ สามารถในการตัดสินใจ
                                    มีความคิดเชิงวิกฤต (Critical Thinking)
                                    ที่จะพร้อมรับกับปัญหาที่มีความซับซ้อน
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
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_pdf_4"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_pdf_4
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_pdf_4"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-pdf"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >pdf เอกสารเพิ่มเติม</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_pdf_4"
                                  @click="signifi_file_pdf_4 = null"
                                  v-ripple
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
                                  </span>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="signifi_file_image_4"
                                  dense=""
                                  style=""
                                  :style="
                                    !signifi_file_image_4
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg,.png"
                                >
                                  <template
                                    v-slot:prepend
                                    v-if="!signifi_file_image_4"
                                  >
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>

                                  <template v-slot:file="{ index, file }">
                                    <div
                                      class="absolute-center full-width"
                                      align="center"
                                    >
                                      <q-icon
                                        name="fas fa-file-image"
                                        class="color1 q-px-xs"
                                        size="25px"
                                      ></q-icon>
                                      <span
                                        class=""
                                        style="text-decoration:underline"
                                        >รูปภาพประกอบ</span
                                      >
                                    </div>
                                  </template>
                                </q-file>
                                <div
                                  class="bg1 relative-position cursor-pointer"
                                  align="center"
                                  v-if="signifi_file_image_4"
                                  @click="signifi_file_image_4 = null"
                                  v-ripple
                                >
                                  <span class="text-white font-12">
                                    ลบไพล์
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
import Axios from "axios";
export default {
  data() {
    return {
      // Form 1.1
      tabs1: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_1: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_1: [false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_1: [false, false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_1: [false, false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_1: false,
      advance_success_form_1: false,
      signifi_success_form_1: false,

      // -----------------------------------------

      // Form 1.2
      tabs2: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_2: [false, false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_2: [false, false, false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_2: [false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_2: false,
      advance_success_form_2: false,
      signifi_success_form_2: false,
      // -----------------------------------------

      // Form 1.3
      tabs3: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_3: [false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_3: [false, false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_3: [false, false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_3: false,
      advance_success_form_3: false,
      signifi_success_form_3: false,
      // -----------------------------------------

      // Form 1.4
      tabs4: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_4: [false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_4: [false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_4: [false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_4: false,
      advance_success_form_4: false,
      signifi_success_form_4: false,
      // -----------------------------------------

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    async saveData(no) {
      const url = (this.apiPath = "addUpdateCategory1_6.php");
      const userId = this.$q.sessionStorage.getItem("uid");
      const year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      if (no == 1) {
        formData.append("img", this.basic_file_image_1);
        formData.append("pdf", this.basic_file_pdf_1);
        let checkBox = this.basic_guide_list_1;
        checkBox = checkBox.map(x => (x == true ? 1 : 0));
        checkBox = checkBox.join();
        let postData = {
          user_id: userId,
          q_number: "",
          mode: "basic",
          text: this.basic_assessment_1,
          check_box: checkBox,
          pdf_path: "",
          img_path: "",
          status: "",
          year: year
        };
        // save 1.1 basic
        // let data = await Axios.post()
      }
      this.isSaveData = true;
      setTimeout(() => {
        this.isSaveData = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped></style>
