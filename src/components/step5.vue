<template>
  <div class="">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24"
          >หมวด 4 การวัด การวิเคราะห์ และการจัดการความรู้</span
        >
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-lg font-18">
      <!-- 4.1 -->
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep4"
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
                    >4.1 การใช้ข้อมูลและสารสนเทศ
                    มากำหนดตัววัดที่สามารถใช้ติดตามงานทั้งในระดับปฏิบัติการและระดับยุทธศาสตร์ได้อย่างมีประสิทธิผล
                    รวมทั้งการสื่อสารสู่ผู้ใช้งานทั้งภายในและภาน</span
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
                    <!-- 4.1 Basic -->
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
                                การวางแผนและการรวบรวม้อมูลและตัววัดทั้งในปฏิบัติการ
                                และยุทธศาสตร์โดยผ่านระบบเทคโนโลยีสารสนเทศอย่างมี
                                ประสิทธิภาพ (Efficient Use of Performance
                                Measures)
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
                                    >มีการวางแผนและรวบรวมข้อมูลตัววัดในระดับปฏิบัติการและ
                                    ยุทธศาสตร์
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
                                    >นำข้อมูลมาใช้ในการติดตามการปฏิบัติงานและใช้สนับสนุน
                                    การ ทำงานให้มีประสิทธิภาพดีขึ้น</span
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
                                    v-model="basic_guide_list_1[2]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการพัฒนาเทคโนโลยีดิจิทัลมาใช้ในการบูรณาการข้อมูล</span
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
                                  
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf_1"
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

                    <!-- 4.1 Advance -->
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
                                >- ระบบการจัดการข้อมูลและสารสนเทศ มีประสิทธิภาพ
                                ปลอดภัย น่าเชื่อถือ
                                พร้อมใช้และเอื้อให้บุคลากรและผู้ใช้งานที่เกี่ยวข้องสามารถ
                                เข้าถึงได้อย่างมีประสิทธิผล (Quality and
                                availabiltiy of data and information)
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
                                    >ระบบการจัดการข้อมูลและสารสนเทศที่มีประสิทธิภาพ
                                    ปลอดภัย น่าเชื่อถือ และพร้อมใช้
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
                                    >คำนึงถึงผู้ใช้งานทั้งภายในและภายนอกที่เกี่ยวข้องสามารถเข้า
                                    ถึงได้อย่างมีประสิทธิผล
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
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf_1"
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

                    <!-- 4.1 Significance -->
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
                                การจัดให้ข้อมูลและสารสนเทศที่มีประโยชน์ต่อผู้ใช้งานภายนอก
                                รวมทั้งภาคประชาชนสามารถนำไปใช้ได้ทันทีโดยไม่ต้องร้องขอ
                                (Pubilc data portal)
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
                                    >มีการรายงานผลการดำเนินการของส่วนราชการและนำเสนอ
                                    ข้อมูลและสารสนเทศที่มีประโยชน์ต่อสาธารณะโดยไม่ต้องร้องขอ
                                    และอยู่ในรูปแบบที่เข้าใจง่าย
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
                                    >การดำเนินการอยู่บนพื้นฐานการสำรวจความต้องการและข้อ
                                    เสนอแนะจากภาคประชาชนอย่างสม่ำเสมอ
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
                                  

                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf_1"
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

      <!-- 4.2 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep4"
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
                    >4.2 การวิเคราะห์ผลจากข้อมูล
                    และตัววัดเพื่อการแก้ปัญหาและตอบสนองได้อย่างมีประสิทธิภาพ
                    ทันเวลา และเชิงรุก</span
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
                    <!-- 4.2 Basic -->
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
                                การวิเคราะห์ผลจากข้อมูลและตัววัดที่รวบรวมจากทุกระดับในส่วน
                                ราชการเพื่อการแก้ปัญหาในกระบวนการต่างๆ
                                ของส่วนราชการ
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
                                    v-model="basic_guide_list_2[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีกลไกในการวิเคราะห์ข้อมูลและตัววัดในทุกระดับเพื่อใช้ในการ
                                    ติดตามและแก้ไขปัญหา
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
                                    v-model="basic_guide_list_2[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการวิเคราะห์เปรียบเทียบผลการดำเนินการกับค่าเป้าหมายเพื่อ
                                    นำไปแก้ไขปรับปรุงกระบวนการทำงาน
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
                                  

                                   <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf_2"
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

                    <!-- 4.2 Advance -->
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
                                การวิเคราะห์ผลจากข้อมูลและตัววัดในทุกระดับในส่วนราชการเพื่อ
                                ค้นหาสาเหตุของปัญหา
                                และแก้ไขปัญหาในเชิงนโยบายและการปรับ ยุทธศาสตร์
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
                                    v-model="advance_guide_list_2[0]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การนำผลการวิเคราะห์มาค้นหาสาเหตุของปัญหา
                                    และคาดการณ์ ผลที่จะเกิดขึ้น
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
                                    v-model="advance_guide_list_2[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >นำไปแก้ปัญหาในเชิงนโยบายและการปรับปรุงยุทธศาสตร์
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
                                  

                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf_2"
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

                    <!-- 4.2 Significance -->
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
                                การวิเคราะห์ผลากข้อมูลและตัววัดที่รวบรวมเชื่อมโยงในทุกระดับใน
                                ส่วนราชการ เพื่อค้นหา สาเหตุของปัญหา
                                แก้ปัญหาได้อย่างทันการณ์
                                และสามารถคาดการณ์ผลลัพธ์ตามที่วางแผนไว้
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
                                  <span
                                    >การวิเคราะห์ผลจากข้อมูลและตัววัดที่รวบรวมในส่วนราชการเพื่อ
                                    เชื่อมโยงค้นหาสาเหตุของปัญหา
                                    แก้ปัญหาได้อย่างทันการณ์
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
                                    v-model="signifi_guide_list_2[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การนำเทคโนโลยีมาใช้เพื่อตอบสนองต่อสถานการณ์อย่างทัน
                                    ถ่วงทีและสามารถคาดการณ์ผลลัพธ์ตามที่วางแผนไว้
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
                                 

                                   <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf_2"
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

      <!-- 4.3 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep4"
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
                    >4.3 การจัดการความรู้
                    และการสร้างองค์ความรู้ของส่วนราชการในการแก้ปัญหา
                    เรียนรู้และมีเหตุผล</span
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
                    <!-- 4.3 Basic -->
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
                                >- กระบวนการรวบรวมข้อมูลสารสนเทศ
                                และองค์ความรู้ที่เกี่ยวข้องกับ
                                ส่วนราชการอย่างเป็นระบบเพื่อใช้ในการเรียนรู้
                                พัฒนา และต่อยอดการ พัฒนาของส่วนราชการ
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
                                    >กระบวนการรวบรวมข้อมูลสารสนเทศและองค์ความรู้ที่เกี่ยวข้อง
                                    กับการทำงานอย่างเป็นระบบ
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
                                    >นำข้อมูลมาวิเคราะห์และรวบรวมไว้เพื่อนำไปใช้ประโยชน์และต่อ
                                    ยอดการเรียนรู้ภายในหน่วนงาน</span
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
                                  

                                   <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf_3"
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

                    <!-- 4.3 Advance -->
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
                                >- มีการวิเคราะห์และเชื่อมโยงกับข้อมูลสารสนเทศ
                                และองค์ความรู้ นอกส่วนราชการเพื่อการแก้ไขปัญหา
                                และสร้างนวัตกรรม
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
                                    >กระบวนการรวบรวมและวิเคราะห์ข้อมูล สารสนเทศ
                                    และองค์ความรู้เชื่อมโยงกับข้อมูล สารสนเทศ
                                    และองค์ความรู้จากภายนอกองค์การ</span
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
                                    >นำองค์ความรู้มาใช้เพื่อสร้างนวัตกรรม</span
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

                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf_3"
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

                    <!-- 4.3 Significance -->
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
                                มีการวิเคราะห์และนำไปสู่การแก้ขไขปรับปรุงจนเกิดเป็นกระบวนการที่เป็นเลิศ
                                และผลลัพธ์ที่ดีสู่การบรรลุยยุทธศาสตร์และการบริการประขาชนที
                                ดียิ่งขึ้น
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
                                    >กระบวนการรวบรวมและวิเคราะห์ข้อมูล สารสนเทศ
                                    และองค์ความรู้เชื่อมโยงกับข้อมูล สารสนเทศ
                                    และองค์ความรู้จากภายนอกองค์การ</span
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
                                  <span
                                    >นำองค์ความรู้มาใช้เพื่อสร้างนวัตกรรม</span
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

                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf_3"
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

      <!-- 4.4 -->
      <div class="q-mt-sm q-mb-md">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep4"
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
                    >4.4 การบริหารจัดการข้อมูล สารสนเทศ
                    และระบบการทำงานที่ปรับเป็นดิจิทัลเต็มรูปแบบ มีประสิทธิภาพ
                    และใช้งานได้</span
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
                    <!-- 4.4 Basic -->
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
                                การวางแผนการปรับเปลี่ยนรูปแบบการทำงานและการรวบรวมข้อมูล
                                มาเป็นดิจิทัลอย่างเป็นระบบและมีตัววัดการบรรลุตามแผนงานอย่างมี
                                ประสิทธิภาพ (Planning of digitalization)
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
                                    v-model="basic_guide_list_4[0]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การจัดทำแผนการปรับเปลี่ยนรูปแบบการทำงานและการรวบรวมข้อมูลมาเป็นระบบดิจิทัล</span
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
                                  <span
                                    >มีตัววัดเพื่อใช้ติดตามการบรรลุตามแผนการปรับเปลี่ยนสู่ระบบ
                                    ดิจิทัลอย่างมีประสิทธิภาพ
                                    (รวมทั้งการพัฒนาระบบการจัดการ
                                    ข้อมูลเพื่อรองรับการเชื่อมต่อของข้อมูลกับส่วนราชการอื่นตาม
                                    ภาระหน้าที่)</span
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
                                  
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!basic_file_pdf_4"
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

                    <!-- 4.4 Advance -->
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
                                มีการวิเคราะห์ความเสี่ยงการป้องกันการโจมตีทางไซเบอร์และการ
                                เตรียมพร้อมต่อภัยพิบัติและภาวะฉุกเฉินที่มีประสิทธิผล
                                (Cybersecurity and BCM)
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
                                    >การวิเคราะห์ความเสี่ยงของระบบเทคโนโลยีดิจิทัล
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
                                    >การวางแผนการป้องกันการโจมตีทางไซเบอร์</span
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
                                    v-model="advance_guide_list_4[2]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >การเตรียมพร้อมต่อภัยพิบัติและภาวะฉุกเฉินที่อาจมีต่อระบบ
                                    ฐานข้อมูลและการปฏิบัติการบนไซเบอร์
                                    พร้อมทั้งแผนรองรับ</span
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
                                  
                                   
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!advance_file_pdf_4"
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

                    <!-- 4.4 Significance -->
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
                                การใช้เทคโนโลยีดิจิทัลมาเพิ่มประสิทธิภาพของกระบวนการทำงาน
                                ลดต้นทุน และการรายงานผลได้ทันการณ์
                                และมีประสิทธิผล (Efficiency and effectiveness)
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
                                    >การใช้เทคโนโลยีมาเพิ่มประสิทธิภาพของกระบวนการทำงาน
                                    ที่ครอบคลุมพันธกิจหลักของหน่วยงาน <br />-
                                    ลดต้นทุน

                                    <br />- ติดตามงานอย่างรวดเร็ว <br />-
                                    การสร้างนวัตกรรมการให้บริการ <br />-
                                    การเชื่อมโยงเครือข่ายและข้อมูล
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
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!signifi_file_pdf_4"
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

      basic_guide_list_1: [false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_1: [false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_1: [false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_1: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_1: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_1: true,
      advance_success_form_1: true,
      signifi_success_form_1: true,

      // -----------------------------------------

      // Form 1.2
      tabs2: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_2: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_2: [false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_2: [false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_2: [false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_2: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_2: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_2: true,
      advance_success_form_2: true,
      signifi_success_form_2: true,
      // -----------------------------------------

      // Form 1.3
      tabs3: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_3: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_3: [false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_3: [false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_3: [false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_3: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_3: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_3: true,
      advance_success_form_3: true,
      signifi_success_form_3: true,
      // -----------------------------------------

      // Form 1.4
      tabs4: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      basic_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Basic
      advance_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Advance
      signifi_assessment_4: "", // คำอธิบายผลการประเมิน หน้า Significance

      basic_guide_list_4: [false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_4: [false, false, false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_4: [false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

      basic_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Basic
      advance_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Advance
      signifi_file_pdf_4: null, // อัพโหลดไพล์ PDF หน้า Significance

      basic_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Basic
      advance_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Advance
      signifi_file_image_4: null, // อัพโหลดไพล์ Image JPG or PNG หน้า Significance

      basic_success_form_4: true,
      advance_success_form_4: true,
      signifi_success_form_4: true,
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
