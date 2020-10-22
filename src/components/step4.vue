<template>
  <div class="">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24"
          >หมวด 3 การให้ความสำคัญกับผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</span
        >
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-lg font-18">
      <!-- 2.1 -->
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep3"
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
                    >3.1
                    ระบบข้อมูลและสารสนเทศที่ทันสมัยเพื่อการบริการประชาชนที่ทันสมัย
                    รวดเร็ว และเข้าถึงในทุกระดับ</span
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
                                การใช้ข้อมูลและสารสนเทศของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
                                ที่มีอยู่ในปัจจุบันเพื่อตอบสนองความต้องการที่แตกต่าง
                                (Customer centric)
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
                                    >นำข้อมูลและสารสนเทศที่เกี่ยวข้องกับกลุ่มผู้รับบริการและผู้มี
                                    ส่วนได้ส่วนเสียมาวิเคราะห์และตอบสนองความต้องการที่แตกต่าง
                                    กันโดยรวบรวมข้อมูลจาก <br />- ช่องทางต่างๆ
                                    เช่น ผลสำรวจความพึงพอใจ แบบสอบถามความ
                                    คิดเห็นการประชุมรวบรวมความคิดเห็นจากภายในองค์การ
                                    / ภายนอกองค์การ / เครือข่าย เป็นต้น
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
                                  <span>ฐานข้อมูลของส่วนราชการ</span>
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
                                >- การใช้ข้อมูลและเทคโนโลยีสารสนเทศ
                                (รวมทั้งเทคโนโลยีดิจิทัล)
                                เพื่อค้นหาความต้องการและความคาดหวังของกลุ่มผู้รับบริการและผู้มี
                                ส่วนได้ส่วนเสีย
                                เพื่อตอบสนองความต้องการที่แตกต่างได้อย่างมี
                                ประสิทธิผล (Digital technology, Customer
                                centric)
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
                                    >ใช้ข้อมูลและเทคโนโลยีสารสนเทศ /
                                    ดิจิทัลและช่องทางการสื่อสาร รูปแบบใหม่ ๆ
                                    (เช่น Mobile Application หรือ facebook ที่มี
                                    การรับส่งข้อมูลได้อย่างรวดเร็ว ทันการณ์)
                                    เพื่อ <br />-
                                    รวบรวมข้อมูลและสารสนเทศจากกลุ่มผู้รับบริการและผู้มีส่วนได้
                                    ส่วนเสียในรูปแบบต่างๆ เช่น รูปแบบ Big Data
                                    เสียง ภาพ และ ข้อความ <br />-
                                    ค้นหาความต้องการ
                                    ความคาดหวังของกลุ่มผู้รับบริการ ผู้มีส่วน
                                    ได้ส่วนเสียนำไปสู่การตอบสนองที่ดียิ่งขึ้น
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
                                >- การใช้ข้อมูลและเทคโนโลยีสารสนเทศ ทั้งภายใน
                                และภายนอก (รวมทั้ง การเปลี่ยนแปลงของสภาพแวดล้อม)
                                เพื่อวางนโยบายเชิงรุกในการตอบ
                                สนองความต้องการและความคาดหวังของกลุ่มผู้รับบริการและผู้มีส่วน
                                ได้ส่วนเสียทั้งปัจจุบันและอนาคต (Actionable
                                policy solution)
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
                                    >ใช้เทคโนโลนียีดิจิทัล
                                    และสารสนเทศจากภายในและภายนอก องค์การเพื่อ
                                    <br />-
                                    วิเคราะห์และเข้าใจความต้องการและความคาดหวังของผู้รับ
                                    บริการ และผู้มีส่วนได้ส่วนเสีย <br />-
                                    วิเคราะห์แนวโน้มการเปลี่ยนแปลงที่กำลังจะเกิดขึ้น
                                    <br />-
                                    กำหนดนโยบายเชิงรุกในการตอบสนองความต้องการและความ
                                    คาดหวังของผู้รับบริการและผู้มีส่วนได้ส่วนเสียทั้งปัจจุบันและ
                                    อนาคต
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

      <!-- 3.2 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep3"
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
                    >3.2 การประเมินผลความพึงพอใจ
                    ความผูกพันของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
                    เพื่อนำมาใช้ประโยชน์</span
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
                                การประเมินความพึงพอใจและความผูกพันของกลุ่มผู้รับบริการและผู้มี
                                ส่วนได้ส่วนเสียหลักเพื่อนำมาวิเคราะห์และปรับปรุงกระบวนการทำงาน
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
                                    >ประเมินความพึงพอใจและความผู้กพันในรูปแบบที่เหมาะสมเพื่อ
                                    ให้ได้ข้อมูลที่สามารถนำมาใช้ประโยชน์ในการวิเคราะห์และปรับปรุงกระบวนการทำงาน
                                    เช่น การให้บริการทันการณ์การสำรวจ
                                    พฤติกรรมที่ตอบสนองต่อนโยบายบริการต่างๆ
                                    เป็นต้น</span
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
                                >- การใช้ผลประเมินความพึงพอใจ และความผูกพัน
                                ของกลุ่มผู้รับบริการ และผู้มีส่วนได้ส่วนเสียหลัก
                                เพื่อนำมาวิเคราะห์ความต้องการ
                                และแก้ปัญหาในเชิงรุก
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
                                    >นำผลการประเมินความพึงพอใจ
                                    และความผูกพันมาวิเคราะห์เพื่อ
                                    ค้นหาโอกาสในการปรับปรุงและแก้ไขปัญหาเชิงรุก
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
                                >- การบูรณาการข้อมูลการประเมินความพึงพอใจ
                                และความผูกพัน
                                กับฐานข้อมูลของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
                                จากแหล่งอื่นๆ
                                เพื่อการวางแผนยุทธศาสตร์และการสร้างนวัตกรรมในการให้บริการ
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
                                    >บูรณาการข้อมูลจากผลการสำรวจกับฐานข้อมูลกลุ่มผู้รับบริการ
                                    และผู้มีส่วนได้ส่วนเสียจากแหล่งอื่นๆ เพื่อ
                                    <br />-
                                    แก้ปัญหาความไม่พึงพอใจในการให้บริการที่ดีขึ้น

                                    <br />-
                                    เป็นแนวทางในการวางแผนยุทธศาสตร์และการสร้างนวัตกรรม</span
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

      <!-- 3.3 -->
      <div class="q-mt-sm">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep3"
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
                    >3.3 การสร้างนวัตกรรมการบริการ
                    ที่สร้างความแตกต่างและตอบสนองความต้องการเฉพาะกลุ่มและต่างความต้องการ</span
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
                    <!-- 3.3 Basic -->
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
                                การบริการที่ตอบสนองความต้องการและความคาดหวังของกลุ่มผู้รับ
                                บริการและผู้มีส่วนได้ส่วนเสียหลักและการถ่ายทอดสู่การปฏิบัติในทุก
                                หน่วยงานที่เกี่ยวข้อง
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
                                    >มีกระบวนการในการทบทวนและการปรับปรุงการบริการอย่าง
                                    ต่อเนื่อง</span
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
                                    v-model="basic_guide_list_3[1]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีช่องทางการสื่อสารที่สามารถเข้าถึงผู้รับบริการ
                                    และผู้มีส่วนได้ ส่วนเสียหลัก</span
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
                                    v-model="basic_guide_list_3[2]"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีการถ่ายทอดไปยังหน่วยงานที่เกี่ยวข้องในทุกพื้นที่เพื่อให้เกิด
                                    การปฏิบัติอย่างจริงจัง</span
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

                    <!-- 3.3 Advance -->
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
                                การสร้างนวัตกรรมการบริการที่ตอบสนองความต้องการทั้งภาพรวม
                                และเฉพาะกลุ่มได้อย่างมีประสิทธิผล (Customer
                                groups and segments)
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
                                    >สร้างนวัตกรรมการให้บริการใหม่ๆ ที่ตอบสนอง
                                    <br />- ความต้องการภาพรวม <br />-
                                    ความต้องการเฉพาะกลุ่ม เช่น
                                    กลุ่มที่มีความต้องการเฉพาะให้
                                    สามารถเข้าถึงการบริการได้</span
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

                    <!-- 3.3 Significance -->
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
                                การสร้างนวัตกรรมการบริการที่สามารถให้บริการเฉพาะบุคคลที่
                                สามารถออกแบบได้ (Personalized / Customized
                                service)
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
                                    >การสร้างนวัตกรรมการให้บริการที่ <br />-
                                    มีความคล่องตัวในการให้บริการตามความแตกต่างของผู้รับ
                                    บริการ <br />-
                                    เอื้อให้ผู้รับบริการสามารถออกแบบตามความต้องการเฉพาะ
                                    บุคคล (Customized Service)</span
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
                                    >การเชื่อมโยงข้อมูลเพื่อความสะดวกในการเข้าถึงบริการ</span
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

      <!-- 3.4 -->
      <div class="q-mt-sm q-mb-md">
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep3"
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
                    >3.4 กระบวนการแก้ไขข้อเรียกร้องที่รวดเร็ว
                    และสร้างสรรค์เพื่อตอบสนองได้ทันความต้องการ</span
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
                    <!-- 3.4 Basic -->
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
                                >- กระบวนการรับข้อร้องเรียนอย่างเป็นระบบ
                                และมีมาตรฐานการจัดการ
                                ข้อร้องเรียบนได้อย่างมีประสิทธิผล
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
                                    >มีช่องทางการรับเรื่องร้องเรียนที่สามารถเข้าถึงได้</span
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
                                    >มีกระบวนการรับข้อร้องเรียนที่ให้ความสะดวกในการร้องเรียน
                                    ของผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</span
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
                                    v-model="basic_guide_list_4[2]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >มีมาตรฐานการจัดการข้อร้องเรียน
                                    และการตอบสนองกลับต่อ ข้อร้องเรียน
                                    (Response)</span
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

                    <!-- 3.4 Advance -->
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
                                >- กระบวนการจัดการข้อร้องเรียนอย่างเป็นระบบ
                                รวดเร็ว ทันการณ์ และตอบสนองอย่างมีประสิทธิผล
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
                                    >มีการตอบสนองกลับต่อข้อร้องเรียนอย่างรวดเร็ว
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
                                    >ใช้เทคโนโลยีดิจิทัลมาช่วยในการทำงานและการแก้ปัญหาในเชิงรุก
                                    (Response and React)</span
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

                    <!-- 3.4 Significance -->
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
                                กระบวนการจัดการข้อร้องเรียนอย่างเป็นระบบและการใช้เทคโนโลยี
                                การสื่อสารมาเพื่อการตอบสนองอย่างมีประสิทธิผล
                                และสร้าง ความพึงพอใจในการจัดการข้อร้องเรียน
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
                                    >มีการตอบสนองกลับต่อข้อร้องเรียนอย่างรวดเร็ว
                                    แก้ปัญหาได้ อย่างทันการณ์
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
                                    v-model="signifi_guide_list_4[1]"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >ใช้เทคโนโลยีดิจิทับ
                                    และพัฒนาระบบการสื่อสารเพื่อสร้างความ
                                    เชื่อมั่นและความพึงพอใจในการจัดการข้อร้องเรียน</span
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
      advance_guide_list_1: [false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_1: [false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

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

      basic_guide_list_2: [false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_2: [false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_2: [false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

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

      basic_guide_list_3: [false, false, false], // แนวทางการดำเนินการ หน้า Basic เก็บข้อมูลเป็น Array
      advance_guide_list_3: [false], // แนวทางการดำเนินการ หน้า Advance เก็บข้อมูลเป็น Array
      signifi_guide_list_3: [false, false], // แนวทางการดำเนินการ หน้า Significance เก็บข้อมูลเป็น Array

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
