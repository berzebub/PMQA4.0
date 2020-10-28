<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 1 การนำองค์การ</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item,index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep1"
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
                  <span
                    >{{ item.header }}</span
                  >
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                   <q-icon
                      color="teal"
                      name="fas fa-check-circle"
                      size="16px"
                      v-if="
                        item.status != -1 && item.status != 0
                      "
                    ></q-icon>
                     <span class="font-18" v-if="item.status == -1">
                      ยังไม่ทำการประเมิน
                    </span>
                    <span v-else-if="item.status == 1">
                      Basic
                    </span>
                    <span v-else-if="item.status == 2">
                      Advance
                    </span>
                    <span v-else-if="item.status == 0">
                      ไม่ผ่านการประเมิน
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
                        :disable="
                          item.status <1
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="
                                item.status > 1 
                              "
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
                          !item.status >1 
                        "
                      >
                        <template v-slot:default>
                          <div>
                            <q-icon
                              class="q-mr-xs"
                              name="fas fa-check-circle"
                              color="teal"
                              size="16px"
                              v-if="
                               item.status == 3
                              "
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
                              v-for="(text,index2) in item.basic.titleText"
                                >
                                -{{ text }}
                                <br>
                                <br>
                                </span
                              >
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm">
                              <div class="row" v-for="(checkbox,index3) in item.basic.checkBox" :class="index3 != 0 ? 'q-mt-md' : null">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="data[index].basic.checkBox[index3].status"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                    >{{checkbox.text}}</span
                                  >
                                </div>
                              </div>
                            
                            </div>
                          </div>
                        </div>
                        <div class="col q-pl-lg q-pr-sm">
                          <div>
                            <div>
                              <span class="font-18b"
                                >คำอธิบายผลการประเมิน
                              </span>
                            </div>
                            <div class="q-my-md">
                              <q-input
                                v-model="data[index].basic.explain"
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
                                >อัพโหลดข้อมูลเพิ่มเติม
                              </span>
                            </div>
                            <div class="row justify-between q-my-sm">
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="data[index].basic.pdf_file"
                                  dense=""
                                  style=""
                                  :style="
                                    !data[index].basic.pdf_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                  v-if="!data[index].basic.pdf_file"
                                  @input="uploadPDFTemp('1', 'basic')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!data[index].basic.pdf_file"
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
                                  v-if="data[index].basic.pdf_file"
                                >
                                  <div
                                    class="full-width q-py-xs"
                                    align="center"
                                    style="border:2px solid #000000;border-radius:0px;"
                                  >
                                    <q-icon
                                      name="fas fa-file-pdf"
                                      class="color1 q-px-xs"
                                      size="20px"
                                    ></q-icon>
                                    <span
                                      class="font-14 text-black"
                                      style="text-decoration:underline"
                                      @click="getPDF('1', 'basic')"
                                    >
                                      pdf เอกสารเพิ่มเติม
                                    </span>
                                  </div>
                                  <div
                                    class="bg1 text-white font-12 q-py-sm"
                                    @click="
                                      (data[index].basic.pdf_file = null)"
                                  >
                                    ลบไฟล์
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-4 q-pa-md self-start"
                                style="width:205px;"
                              >
                                <q-file
                                  v-model="data[index].basic.img_file"
                                  dense=""
                                  style=""
                                  :style="
                                    !data[index].basic.img_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg"
                                  v-if="!data[index].basic.img_file"
                                  @input="uploadIMGTemp('1', 'basic')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!data[index].basic.img_file"
                                    >
                                      <span class="font-16 text-black"
                                        >รูปภาพประกอบ
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
                                        รูปภาพประกอบ
                                      </span>
                                    </div>
                                  </template>
                                  <template v-slot:file> </template>
                                </q-file>
                                <div
                                  class="relative-position cursor-pointer"
                                  align="center"
                                  v-if="data[index].basic.img_file"
                                >
                                  <div
                                    class="full-width q-py-xs"
                                    align="center"
                                    style="border:2px solid #000000;border-radius:0px;"
                                  >
                                    <q-icon
                                      name="fas fa-file-pdf"
                                      class="color1 q-px-xs"
                                      size="20px"
                                    ></q-icon>
                                    <span
                                      class="font-14 text-black"
                                      style="text-decoration:underline"
                                      @click="getIMG('1', 'basic')"
                                    >
                                      รูปภาพประกอบ
                                    </span>
                                  </div>
                                  <div
                                    class="bg1 text-white font-12 q-py-sm"
                                    @click="
                                      (data[index].basic.img_file = null)"
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
                                  @click="saveData(1, 'basic')"
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
                              <span v-for="(text,advanceIndex) in item.advance.titleText"
                                >
                                -{{ text }}
                                <br>
                                <br>
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm" v-for="(checkbox,advanceCheckboxIndex) in item.advance.checkBox" :key="advanceCheckboxIndex">
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                               
                                >
                                  <q-checkbox
                                    v-model="data[index].advance.checkBox[advanceCheckboxIndex].status"
                                    value
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span v-html="checkbox.text"
                                    ></span
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
                                  v-model="data[index].advance.pdf_file"
                                  dense=""
                                  style=""
                                  :style="
                                    !data[index].advance.pdf_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                  @input="uploadPDFTemp('1', 'advance')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!data[index].advance.pdf_file"
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
                                  v-if="data[index].advance.pdf_file"
                                  @click="
                                    (data[index].advance.pdf_file = null)
                                  "
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
                                  v-model="data[index].advance.img_file"
                                  dense=""
                                  style=""
                                  :style="
                                    !data[index].advance.img_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg"
                                  @input="uploadIMGTemp('1', 'advance')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!data[index].advance.img_file"
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
                                  v-if="data[index].advance.img_file"
                                  @click="
                                    (data[index].advance.img_file = null)
                                  "
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
                            <div class="q-mt-md" v-for="(signiText,signiIndex) in item.significance.titleText" :key="signiIndex">
                              <span
                                >
                                - {{ signiText }}
                              </span>
                            </div>
                          </div>

                          <q-separator></q-separator>
                          <div class="q-pa-md font-18">
                            <div>
                              <span class="font-18b">แนวทางดำเนินการ</span>
                            </div>
                            <div class="q-mt-sm" v-for="(checkbox,signiCheckboxIndex) in item.significance.checkBox" :key='signiCheckboxIndex'>
                              <div class="row">
                                <div
                                  class="col-1 "
                                  style="width:50px;"
                                  align="center"
                                >
                                  <q-checkbox
                                    v-model="data[index].significance.checkBox[signiCheckboxIndex].status"
                                    value=""
                                  />
                                </div>
                                <div class="col  q-py-xs">
                                  <span
                                  v-html="checkbox.text"
                                    >
                                    </span
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
                                v-model="data[index].significance.explain"
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
                                  v-model="data[index].significance.pdf_file"
                                  dense=""
                                  style=""
                                  :style="
                                    !data[index].significance.pdf_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".pdf"
                                  @input="uploadPDFTemp('1', 'significance')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!data[index].significance.pdf_file"
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
                                  v-if="data[index].significance.pdf_file"
                                  @click="
                                    (data[index].significance.pdf_file = null)
                                  "
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
                                  v-model="data[index].significance.img_file"
                                  dense=""
                                  style=""
                                  :style="
                                    !data[index].significance.img_file
                                      ? 'border:2px solid #e84c93;border-radius:10px;'
                                      : 'border:2px solid #000000;border-radius:0px;'
                                  "
                                  borderless
                                  accept=".jpg"
                                  @input="uploadIMGTemp('1', 'significance')"
                                >
                                  <template v-slot:prepend>
                                    <div
                                      class="absolute-center fit"
                                      align="center"
                                      v-if="!data[index].significance.img_file"
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
                                  v-if="data[index].significance.img_file"
                                  @click="
                                    (data[index].significance.img_file = null)
                                  "
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
      // restructure
      data: [
        {
          header:
            "1.1 ระบบการนำองค์การของส่วนราชการได้สร้างองค์การที่ยั่งยืน โดยการกำหนดวิสัยทัศน์และแผนยุทธศาสตร์เชื่อมโยง สู่การบรรลุพันธกิจ การมุ่งเน้นประโยชน์สุขประชาชนและการบรรลุผลยุทธศาสตร์ชาติและความสามารถในการแข่งขัน",
          status: 3, //สถานะของข้อ
          no: 1,
          // 1.1 basic
          basic: {
            mode: "basic",
            titleText: [
              " ผู้บริหารของส่วนราชการได้สร้างความยั่งยืนโดยการกำหนดวิสัยทัศน์ และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจ และภาระหน้าที่ของส่วนราชการ (Mission based)",
              " มีการถ่ายถอดผ่านระบบการนำองค์การเพื่อให้เกิดการดำเนินการทั่ว ทั้งส่วนราชการ"
            ],
            checkBox: [
              {
                text:
                  "ผู้บริหารกำหนดวิสัยทัศน์ ยุทธศาสตร์ เป้าหมายและตัวชี้วัด ชัดเจนตอบสนอง ต่อพันธกิจและภาระหน้าที่ของส่วนราชการ",
                status: false
              },
              {
                text:
                  "ผู้บริหารสื่อสารถ่ายทอดวิสัยทัศน์ ยุทธศาสตร์ เป้าหมาย และตัวชี้วัดไปสู่ทุกระดับ ขององค์การอย่างทั่วถึง",
                status: false
              },
              {
                text:
                  "ส่วนราชการมีระบบการสื่อสารภายในองค์การทั่วถึง รวดเร็ว ทันการณ์",
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 advanec
          advance: {
            mode: "advance",
            titleText: [
              "ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน โดยการกำหนดวิสัยทัศน์ และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ และสอดรับกับยุทธศาสตร์ชาติ (Alignment with National Strategles)"
            ],
            checkBox: [
              {
                text: `การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ <br/>
              - สนับสนุนการบรรลุยุทธศาสตร์และสร้างขีดความสามารถใน การแข่งขันของประเทศ<br/>
              - พิจารณาและคำนึงถึงผลกระทบต่อสังคมทั้งเชิงบวกและเชิงลบ ทั้งทางตรงและทางอ้อม`,
                status: false
              },
              
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 significance
          significance: {
            mode: "significance",
            titleText: [
              `ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน โดยการกำหนด ยุทธศาสตร์ ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ สอดรับกับทิศทางการพัฒนาและยุทธศาสตร์พื้นที่สร้างนวัตกรรมและ วัฒนธรรมในการมุ่งประโยชน์สุขประชาชน (Innovation, Citizen-centric)`
            ],
            checkBox: [
              {
                text: `การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ
                <br/>
                        - บูรณาการยุทธศาสตร์ชาติ / ยุทธศาสตร์พื้นที่ (ถ้ามี)<br/>
                        - สร้างการเปลี่ยนแปลงในเกิดวัฒนธรรมที่มุ่งเน้นประชาชน เช่น มี นโยบายการสร้างนวัตกรรมการให้บริการเพื่ออำนวยความสะดวก และตอบสนองความต้องการของประชาชน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
         
      ],

      // test
      assessmentData: "",
      isLoadAssessmentFinish: true,
      // basic_assessment: [],
      // basic_success_form: [false, false, false, false],
      // basic_guide_list: [
      //   [false, false, false],
      //   [false, false, false],
      //   [false, false, false],
      //   [false, false, false, false]
      // ],
      // basic_file_image: [],
      // basic_file_pdf: [],
      // advance_assessment: [],
      // advance_success_form: [],
      // advance_guide_list: [
      //   [false],
      //   [false, false, false],
      //   [false, false],
      //   [false, false]
      // ],
      // advance_file_image: [],
      // advance_file_pdf: [],
      // signifi_assessment: [],
      // signifi_success_form: [],
      // signifi_guide_list: [
      //   [false],
      //   [false, false, false],
      //   [false],
      //   [false, false]
      // ],
      // signifi_file_image: [],
      // signifi_file_pdf: [],
      // // Form 1.1
      // tabs1: "Significance", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // // Form 1.2
      // tabs2: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // // Form 1.3
      // tabs3: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // // Form 1.4
      // tabs4: "Basic", // เลือกหน้าที่จะกรอกข้อมูล Basic, Advance, Significance
      // Save Data
      isSaveData: false,
      // assessmentStatus: [-1, -1, -1, -1],
      tabs : ["Basic","Basic","Basic"]
    };
  },
  methods: {
    test(){
      this.tabs.push("")
      this.tabs.pop()
    },
    async uploadPDFTemp(no, mode) {
      let userId = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();

      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("mode", mode);
      formData.append("year", year);
      formData.append("step", 1);
      if (mode == "basic") {
        formData.append("pdf", this.basic_file_pdf[no - 1]);
      } else if (mode == "advance") {
        formData.append("pdf", this.advance_file_pdf[no - 1]);
      } else {
        formData.append("pdf", this.signifi_file_pdf[no - 1]);
      }
      const url = this.apiPath + "uploadTempFile.php";
      let data = await Axios.post(url, formData);
    },
    async uploadIMGTemp(no, mode) {
      //  let pdfFileName = `${this.$q.sessionStorage.getItem("uid")}-1-${no}-${mode}-${this.$q.sessionStorage.getItem('y')}.pdf`
      let userId = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();

      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("mode", mode);
      formData.append("year", year);
      formData.append("step", 1);
      if (mode == "basic") {
        formData.append("img", this.basic_file_image[no - 1]);
      } else if (mode == "advance") {
        formData.append("img", this.advance_file_image[no - 1]);
      } else {
        formData.append("img", this.signifi_file_image[no - 1]);
      }
      const url = this.apiPath + "uploadTempFile1.php";
      let data = await Axios.post(url, formData);
      console.log(data.data);
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
        if (!checkBox.includes(0)) {
          // กรณี check ทุุกหัวข้อ // เปิด Signi
          this.signifi_success_form[index] = true;
        } else {
          this.signifi_success_form[index] = false;
        }
        let data = await Axios.post(url, formData);
      }

      // console.log(this.checkStatus(no));
      this.assessmentStatus[no - 1] = this.checkStatus(no);
      // this.assessmentStatus.push("")
      // this.assessmentStatus.pop()

      this.reRenderComponent();

      this.isSaveData = true;
      setTimeout(() => {
        this.isSaveData = false;
      }, 1000);
    },
    getBasic(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "basic");
        if (getData.length > 0) {
          if (getData[0].text != "undefined") {
            this.basic_assessment[i - 1] = getData[0].text;
          } else {
            this.basic_assessment[i - 1] = "";
          }
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));
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
    },

    async getAssessmentData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory1_6.php";
      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid"),
        step: 1
      };
      let data = await Axios.post(url, postData);
      this.assessmentData = data.data;
      if (data.data) {
        this.getBasic(data.data);
        this.getAdvance(data.data);
        this.getSignificance(data.data);
        for (let i = 0; i < 4; i++) {
          this.assessmentStatus[i] = this.checkInitialStatus(i + 1);
        }
        this.reRenderComponent();
      }

      this.isLoadAssessmentFinish = true;
      this.loadingHide();
    },
    reRenderComponent() {
      this.basic_success_form.push("");
      this.basic_success_form.pop();
      this.advance_success_form.push("");
      this.advance_success_form.pop();
      this.signifi_success_form.push("");
      this.signifi_success_form.pop();
    },
    getPDF(no, mode) {
      let pdfFileName = `${this.$q.sessionStorage.getItem(
        "uid"
      )}-1-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;
      if (mode == "basic") {
        if (this.basic_file_pdf[no - 1].type == "application/pdf") {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/uploadTemp/" +
              pdfFileName
          );
        } else {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/upload/" + pdfFileName
          );
        }
      } else if (mode == "advance") {
        if (this.advance_file_pdf[no - 1].type == "application/pdf") {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/uploadTemp/" +
              pdfFileName
          );
        } else {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/upload/" + pdfFileName
          );
        }
      } else {
        if (this.signifi_file_pdf[no - 1].type == "application/pdf") {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/uploadTemp/" +
              pdfFileName
          );
        } else {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/upload/" + pdfFileName
          );
        }
      }
    },
    getIMG(no, mode) {
      let imgFileName = `${this.$q.sessionStorage.getItem(
        "uid"
      )}-1-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.jpg`;

      if (mode == "basic") {
        if (this.basic_file_image[no - 1].type == "image/jpeg") {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/uploadTemp/" +
              imgFileName
          );
        } else {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/upload/" + imgFileName
          );
        }
      } else if (mode == "advance") {
        if (this.advance_file_image[no - 1].type == "image/jpeg") {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/uploadTemp/" +
              imgFileName
          );
        } else {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/upload/" + imgFileName
          );
        }
      } else {
        if (this.signifi_file_image[no - 1].type == "image/jpeg") {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/uploadTemp/" +
              imgFileName
          );
        } else {
          window.open(
            "https://api.winner-english.com/pmqa4_0_api/upload/" + imgFileName
          );
        }
      }
    }
  },

  created() {
    // this.getAssessmentData();
  }
};
</script>

<style lang="scss" scoped></style>
