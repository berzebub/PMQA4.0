<template>
  <q-page>
    <!-- v-if="isShowStepper" -->

    <div style="max-width:1280px;margin:auto">
      <div
        class="row self-center q-pa-md"
        v-if="assessmentMode == '1'"
        style="width: 825px;overflow:hidden;margin:auto;padding-top:80px"
      >
        <div class="col">
          <!-- Set Top -->
          <div style="padding: 65px 0px 129px 0px">
            <div class="container-border-lock row justify-between relative-position">
              <!-- ลักษณะองค์กร -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/0')">
                    <q-icon size="50px" class="color1" name="fas fa-flag"></q-icon>
                  </q-btn>
                </div>
                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div
                        class="col q-pa-xs"
                        :class="
                        currentStep.category0 == '1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                      >
                        <q-icon
                          :color="currentStep.category0 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          :disable="currentStep.category0 != '1'"
                          size="12px"
                          icon="fas fa-print"
                          round
                          :color="currentStep.category0 == '1' ? 'teal' : 'grey'"
                          @click="printData(0)"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span
                          class="text-no-wrap"
                          style="position: relative; left: -20px"
                        >ลักษณะสำคัญขององค์กร</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- หมวด 1 -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/1')">
                    <q-icon size="50px" class="color1" name="fas fa-street-view"></q-icon>
                  </q-btn>
                </div>

                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div
                        class="col q-pa-xs"
                        :class="
                        currentStep.category1 == '1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                      >
                        <q-icon
                          :color="currentStep.category1 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          :disable="currentStep.category1 != '1'"
                          size="12px"
                          icon="fas fa-print"
                          @click="printData(1)"
                          round
                          :color="currentStep.category1 == '1' ? 'teal' : 'grey'"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span class="text-no-wrap" style="position: relative; left: -20px">หมวด 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- หมวด 2  -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/2')">
                    <q-icon size="50px" class="color1" name="fas fa-map-signs"></q-icon>
                  </q-btn>
                </div>

                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div
                        class="col q-pa-xs"
                        :class="
                        currentStep.category2 == '1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                      >
                        <q-icon
                          :color="currentStep.category2 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          :disable="currentStep.category2 != '1'"
                          size="12px"
                          icon="fas fa-print"
                          @click="printData(2)"
                          round
                          :color="currentStep.category2 == '1' ? 'teal' : 'grey'"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span class="text-no-wrap" style="position: relative; left: -20px">หมวด 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- หมวด 3 -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/3')">
                    <q-icon size="50px" class="color1" name="fas fa-users"></q-icon>
                  </q-btn>
                </div>

                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div
                        class="col q-pa-xs"
                        :class="
                        currentStep.category3 == '1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                      >
                        <q-icon
                          :color="currentStep.category3 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          :disable="currentStep.category3 != '1'"
                          size="12px"
                          icon="fas fa-print"
                          @click="printData(3)"
                          round
                          :color="currentStep.category3 == '1' ? 'teal' : 'grey'"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span class="text-no-wrap" style="position: relative; left: -20px">หมวด 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Set Bottom -->
          <div style="padding: 129px 0px 65px 0px">
            <div class="container-border-lock row reverse justify-between relative-position">
              <!-- หมวด 4 -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/4')">
                    <q-icon size="50px" class="color1" name="fas fa-chart-line"></q-icon>
                  </q-btn>
                </div>

                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div
                        class="col q-pa-xs"
                        :class="
                        currentStep.category4 == '1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                      >
                        <q-icon
                          :color="currentStep.category4 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          :disable="currentStep.category4 != '1'"
                          size="12px"
                          icon="fas fa-print"
                          @click="printData(4)"
                          round
                          :color="currentStep.category4 == '1' ? 'teal' : 'grey'"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span class="text-no-wrap" style="position: relative; left: -20px">หมวด 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- หมวด 5 -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/5')">
                    <q-icon size="50px" class="color1" name="fas fa-users-cog"></q-icon>
                  </q-btn>
                </div>

                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div
                        class="col q-pa-xs"
                        :class="
                        currentStep.category5 == '1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                      >
                        <q-icon
                          :color="currentStep.category5 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          :disable="currentStep.category5 != '1'"
                          size="12px"
                          icon="fas fa-print"
                          @click="printData(5)"
                          round
                          :color="currentStep.category5 == '1' ? 'teal' : 'grey'"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span class="text-no-wrap" style="position: relative; left: -20px">หมวด 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- หมวด 6 -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/6')">
                    <q-icon size="50px" class="color1" name="fas fa-project-diagram"></q-icon>
                  </q-btn>
                </div>

                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div
                        class="col q-pa-xs"
                        :class="
                        currentStep.category6 == '1'
                          ? 'border-teal'
                          : 'border-grey'
                      "
                      >
                        <q-icon
                          :color="currentStep.category6 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          :disable="currentStep.category6 != '1'"
                          size="12px"
                          icon="fas fa-print"
                          @click="printData(6)"
                          round
                          :color="currentStep.category6 == '1' ? 'teal' : 'grey'"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span class="text-no-wrap" style="position: relative; left: -20px">หมวด 6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- หมวด 7 -->
              <div class="col-2 relative-position" style="z-index: 5">
                <div class="absolute-center">
                  <q-btn round size="45px" push class="bg3" @click="$router.push('/stepper/7')">
                    <q-icon size="50px" class="color1" name="fas fa-trophy"></q-icon>
                  </q-btn>
                </div>

                <div class="absolute-bottom" style="bottom: -150px; width: 145px" align="center">
                  <div class="font-18">
                    <div class="row items-center">
                      <div class="col q-pa-xs border-teal">
                        <q-icon
                          :color="currentStep.category7 == '1' ? 'teal' : ''"
                          name="fas fa-check-circle"
                          class="q-mr-xs"
                          size="18px"
                        ></q-icon>เสร็จสิ้น
                      </div>
                      <div class="q-pl-sm">
                        <q-btn
                          size="12px"
                          icon="fas fa-print"
                          @click="printData(7)"
                          round
                          color="teal"
                        ></q-btn>
                      </div>
                      <div class="col-12">
                        <span class="text-no-wrap" style="position: relative; left: -20px">หมวด 7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-2 self-center relative-position">
          <div class="q-py-xl">
            <div class="container-border-right"></div>
          </div>
        </div>

        <div class="col-12 q-py-xl" style="margin-top: 100px" align="center">
          <q-btn
            :disable="!checkSteper"
            style="width: 180px; border-radius: 0px"
            push
            class="q-mx-md q-py-sm"
            :class="
            !checkSteper ? 'bg3' : 'bg-white'
          "
            @click="printAll()"
          >
            <q-icon
              :class="
              !checkSteper ? 'color2' : ''
            "
              name="fas fa-print"
            ></q-icon>
            <span
              :class="
              !checkSteper ? 'color2' : ''
            "
              class="font-14 q-ml-sm"
            >พิมพ์การประเมิน</span>
          </q-btn>
          <q-btn
            :disable="!checkSteper"
            style="width: 180px; border-radius: 0px"
            push
            class="q-mx-md q-py-sm"
            :class="
            !checkSteper ? 'bg3' : 'bg-white'
          "
            to="/assessment"
          >
            <q-icon
              :class="
              !checkSteper ? 'color2' : ''
            "
              name="fas fa-print"
            ></q-icon>
            <span
              :class="
              !checkSteper ? 'color2' : ''
            "
              class="font-14 q-ml-sm"
            >พิมพ์ผลการประเมิน</span>
          </q-btn>
          <q-btn
            :disable="!checkSteper"
            style="width: 180px; border-radius: 0px"
            push
            class="q-mx-md q-py-sm"
            :class="
            !checkSteper
              ? 'bg3'
              : 'bg-teal text-white'
          "
            @click="sendStatus(1)"
          >
            <q-icon
              :class="
              !checkSteper ? 'color2' : ''
            "
              name="far fa-paper-plane"
            ></q-icon>
            <span
              :class="
              !checkSteper ? 'color2' : ''
            "
              class="font-14 q-ml-sm"
            >ส่งแบบประเมิน</span>
          </q-btn>
        </div>
      </div>

      <div v-else-if="assessmentMode == '2'">
        <!-- หมวด 7 (GAP) + แผน 1/3 ปี -->

        <div
          class="row justify-center items-center"
          style="max-width:800px;margin:auto;padding-top:100px"
        >
          <div class="relative-position col">
            <div align="center">
              <q-btn round size="45px" push class="bg3" @click="$router.push('/cat7')">
                <q-icon size="50px" class="color1" name="fas fa-trophy"></q-icon>
              </q-btn>
            </div>
            <div class="row justify-center relative-position q-pt-md font-18">
              <div
                class="q-pa-xs"
                style="width:100px"
                align="center"
                :class="
                        isCategory7GAP
                          ? 'border-teal'
                          : 'border-grey'
                      "
              >
                <q-icon
                  :color="isCategory7GAP ? 'teal' : ''"
                  name="fas fa-check-circle"
                  class="q-mr-xs"
                  size="18px"
                ></q-icon>เสร็จสิ้น
              </div>
              <!-- print btn -->
              <div class="q-pl-md">
                <q-btn
                  :disable="!isCategory7GAP"
                  :color="isCategory7GAP ? 'teal' : 'grey'"
                  size="12px"
                  icon="fas fa-print"
                  @click="printData(7)"
                  round
                ></q-btn>
              </div>

              <div align="center" class="font-18 col-12 absolute" style="top:60px">หมวด7</div>
            </div>
          </div>

          <div class="col">
            <!-- มีไฟล์ -->
            <div
              v-if="filePdf1 != null"
              style="width:200px;border:3px solid #e84c93;border-radius:5px;"
            >
              <div style="width:100%">
                <div
                  class="bg-white q-pa-xs text-black cursor-pointer"
                  style="width:100%;text-decoration:underline"
                  align="center"
                  @click="openFile(1)"
                >
                  แผนปฏิบัติการเพื่อยกระดับ
                  <br />การพัฒนาสู่ระบบราชการ 4.0
                  <br />
                  ประจำปี พ.ศ. {{ $q.sessionStorage.getItem("y") + 543 }}
                </div>
                <div
                  @click="showDeleteDialog(1)"
                  class="bg1 text-white font-12 q-py-sm cursor-pointer"
                  align="center"
                >ลบไฟล์</div>
              </div>
            </div>

            <!-- ไม่มีไฟล์ -->
            <q-file
              v-if="!filePdf1"
              v-model="filePdf1"
              class="bg-grey-5"
              style="width:200px;border:4px solid #e84c93;border-radius:5px"
              accept=".doc, .pdf, .docx"
              @input="val => uploadFile(val, '1')"
            >
              <template v-slot:default>
                <div style="width:100%">
                  <div class="bg-grey-5 q-pa-xs text-black" align="center">word / pdf</div>
                  <div class="bg-white q-pa-xs text-black" style="width:192px" align="center">
                    แผนปฏิบัติการเพื่อยกระดับ
                    <br />การพัฒนาสู่ระบบราชการ 4.0
                    <br />
                    ประจำปี พ.ศ. {{ $q.sessionStorage.getItem("y") + 543 }}
                  </div>
                </div>
              </template>
            </q-file>
          </div>

          <div class="col">
            <!-- มีไฟล์ -->
            <div
              v-if="filePdf2 != null"
              style="width:200px;border:3px solid #e84c93;border-radius:5px;"
            >
              <div style="width:100%">
                <div
                  class="bg-white q-pa-xs text-black cursor-pointer row items-center"
                  style="width:100%;text-decoration:underline;height:70px"
                  align="center"
                  @click="openFile(2)"
                >
                  แผนยกระดับการพัฒนา
                  สู่ระบบราชการ 4.0 ระยะ 3 ปี
                </div>
                <div
                  @click="showDeleteDialog(2)"
                  class="bg1 text-white font-12 q-py-sm cursor-pointer"
                  align="center"
                >ลบไฟล์</div>
              </div>
            </div>

            <!-- ไม่มีไฟล์ -->
            <q-file
              v-if="!filePdf2"
              v-model="filePdf2"
              class="bg-grey-5"
              style="width:200px;border:4px solid #e84c93;border-radius:5px;"
              accept=".doc, .pdf, .docx"
              @input="val => uploadFile(val, '2')"
            >
              <template v-slot:default>
                <div style="width:100%">
                  <div class="bg-grey-5 q-pa-xs text-black" align="center">word / pdf</div>
                  <div
                    class="bg-white q-pa-xs text-black row items-center"
                    style="width:192px;height:70px"
                    align="center"
                  >
                    แผนยกระดับการพัฒนา
                    สู่ระบบราชการ 4.0 ระยะ 3 ปี
                  </div>
                </div>
              </template>
            </q-file>
          </div>
        </div>
        <div align="center">
          <q-btn
            :disable="!isEnableSendMode2"
            style="width: 180px; border-radius: 0px;margin-top:50px"
            push
            class="q-mx-md q-py-sm"
            :class="
            !isEnableSendMode2
              ? 'bg3'
              : 'bg-teal text-white'
          "
            @click="sendStatus(2)"
          >
            <q-icon
              :class="
              !isEnableSendMode2 ? 'color2' : ''
            "
              name="far fa-paper-plane"
            ></q-icon>
            <span
              :class="
              !isEnableSendMode2 ? 'color2' : ''
            "
              class="font-14 q-ml-sm"
            >ส่งแบบประเมิน</span>
          </q-btn>
        </div>
      </div>

      <div v-else-if="assessmentMode == '3'">

        <div
          class="row justify-center items-center"
          style="max-width:800px;margin:auto;padding-top:100px"
        >
          <div class="col self-center" align="center">
            <!-- มีไฟล์ -->
            <div
              v-if="file6Path"
              style="width:270px;border:3px solid #e84c93;border-radius:5px;"
            >
              <div style="width:100%">
                <div
                  class="bg-white q-pa-xs text-black cursor-pointer row items-center"
                  style="width:100%;text-decoration:underline;height:70px"
                  align="center"
                  @click="openFile6()"
                >
                <div style="width:100%">
                  สรุปการติดตามผลการดำเนินงาน <br>รอบ 6เดือน (แบบฟอร์ม3)
                  พร้อมทั้งแนบเอกสารตัวชี้วัดตามแผน
                  
                  </div>
                </div>
                <div
                  @click="showDeleteDialog(6)"
                  class="bg1 text-white font-12 q-py-sm cursor-pointer"
                  align="center"
                >ลบไฟล์</div>
              </div>
            </div>

            <!-- ไม่มีไฟล์ -->
            <q-file
              v-if="!file6Path"
              v-model="file6"
              class="bg-grey-5"
              style="width:270px;border:4px solid #e84c93;border-radius:5px;"
              accept=".doc, .pdf, .docx,.zip,.rar"
              @input="val => uploadFile6(val)"
            >
              <template v-slot:default>
                <div style="width:100%">
                  <div class="bg-grey-5 q-pa-xs text-black" align="center">word / pdf</div>
                  <div
                    class="bg-white q-pa-xs text-black row items-center"
                    style="width:262px;height:70px"
                    align="center"
                  >
                  <div style="width:100%;">
                  สรุปการติดตามผลการดำเนินงาน <br>รอบ 6เดือน (แบบฟอร์ม3)
                  พร้อมทั้งแนบเอกสารตัวชี้วัดตามแผน
                  
                    </div>
                  </div>
                </div>
              </template>
            </q-file>
          </div>
          </div>

           <div align="center">
          <q-btn
            :disable="!file6Path"
            style="width: 180px; border-radius: 0px;margin-top:50px"
            push
            class="q-mx-md q-py-sm"
            :class="
            !file6Path
              ? 'bg3'
              : 'bg-teal text-white'
          "
            @click="sendStatus(3)"
          >
            <q-icon
              :class="
              !file6Path ? 'color2' : ''
            "
              name="far fa-paper-plane"
            ></q-icon>
            <span
              :class="
              !file6Path ? 'color2' : ''
            "
              class="font-14 q-ml-sm"
            >ส่งแบบประเมิน</span>
          </q-btn>
        </div>
      </div>

      <div v-else-if="assessmentMode == '4'">หมวด 7 + รายงานติดตาม 12 เดือน + รายงานสรุป 12 เดือน</div>

      <q-dialog persistent v-model="isShowConfirmDeleteFileDialog">
        <q-card style="width:450px;">
          <q-card-section>
            <div style="font-size:30px" align="center">ลบไฟล์</div>

            <div class="font-18 q-py-md" align="center">คุณต้องการลบไฟล์ใช่หรือไม่?</div>
          </q-card-section>
          <q-card-actions align="center" class="q-pb-md">
            <q-btn style="width:180px" class="font-18" label="ยกเลิก" v-close-popup outline dense></q-btn>
            <q-btn
              color="teal"
              style="width:180px"
              class="font-18"
              label="ตกลง"
              @click="deleteFile()"
              dense
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <my-footer class="absolute-bottom"></my-footer>
  </q-page>
</template>

<script>
import myFooter from "../components/footer";
import Axios from "axios";
export default {
  components: {
    myFooter,
  },
  data() {
    return {
      // new
      filePdf1: null,
      filePdf2: null,
      file6 : null, //รายงานติดตาม 6 เดือน
      isShowConfirmDeleteFileDialog: false,
      isCategory7GAP: false,
      isEnableSendMode2: false,
      isEnableSendMode3 : false,
      // end new
      file1: null,
      file2: null,
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false,
      step8: false,
      currentStep: "",
      isShowStepper: false,
      endDate: "",
      assessmentStatus: "",
      endAssessmentDate: "",
      checkSteper: false,
      path1: "",
      path2: "",
      assessmentMode: "",
      deleteType: "",
      file6Path : ""
    };
  },
  methods: {
    async sendStatus(mode) {
      // ส่งแบบประเมิน mode2 หมวด7 GAP + plan1y + plan3y
      if (mode == 1) {
        const urlUpdateStepper =
          this.apiPath + "user/update_assessment_stepper_log.php";

        const stepperData1 = {
          uid: this.$q.sessionStorage.getItem("uid"),
          step: "cat1_6",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: 1,
        };
        const stepperData2 = {
          uid: this.$q.sessionStorage.getItem("uid"),
          step: "op",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: 1,
        };

        let response = await Axios.post(urlUpdateStepper, stepperData1);
        response = await Axios.post(urlUpdateStepper, stepperData2);

        const url = this.apiPath + "user/updateModeStatus.php";
        let postData = {
          uid: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          mode: 1,
        };

        response = await Axios.post(url, postData);
        this.$router.push("/waitingAssessment/0");

        this.uSendAssessment();
      } else if (mode == 2) {
        // update สถานะการทำ cat7_gap
        const urlUpdateStepper =
          this.apiPath + "user/update_assessment_stepper_log.php";

        const stepperData1 = {
          uid: this.$q.sessionStorage.getItem("uid"),
          step: "cat7_gap",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: 1,
        };
        const stepperData2 = {
          uid: this.$q.sessionStorage.getItem("uid"),
          step: "plan_1y",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: 1,
        };
        const stepperData3 = {
          uid: this.$q.sessionStorage.getItem("uid"),
          step: "plan_3y",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: 1,
        };

        let response = await Axios.post(urlUpdateStepper, stepperData1);
        response = await Axios.post(urlUpdateStepper, stepperData2);
        response = await Axios.post(urlUpdateStepper, stepperData3);

        const url = this.apiPath + "user/updateModeStatus.php";
        let postData = {
          uid: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          mode: 2,
        };

        response = await Axios.post(url, postData);

        this.notify("ส่งแบบประเมินสำเร็จ", "secondary");
        this.$router.push("/waitingAssessment/0");
      }else if (mode == 3){
         const urlUpdateStepper =
          this.apiPath + "user/update_assessment_stepper_log.php";

            const stepperData1 = {
          uid: this.$q.sessionStorage.getItem("uid"),
          step: "month_6",
          year: this.$q.sessionStorage.getItem("y"),
          stepValue: 1,
        };
         let response = await Axios.post(urlUpdateStepper, stepperData1);

          const url = this.apiPath + "user/updateModeStatus.php";
        let postData = {
          uid: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          mode: 3,
        };

        response = await Axios.post(url, postData);
                this.notify("ส่งแบบประเมินสำเร็จ", "secondary");
        this.$router.push("/waitingAssessment/0");

      }
    },
    async uploadFile(file, type) {
      // Upload pan1y / plan3y
      this.loadingShow();
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("file", file);
      formData.append("user_id", uid);
      formData.append("year", year);
      formData.append("type", type);

      const url = this.apiPath + "uploadFileMain.php";
      let data = await Axios.post(url, formData);

      this.checkMode2SendStatus();
      this.getFile();

      this.loadingHide();
    },

    async uploadFile6(file) {
      // Upload pan1y / plan3y
      this.loadingShow();
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("file", file);
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "uploadFile6Month.php";
      let data = await Axios.post(url, formData);

      console.log(data);


      this.checkMode3SendStatus();
      this.getFile6();


      this.loadingHide();
    },
    checkMode3SendStatus(){},
    async getFile6() {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "getFile6Month.php";
      let response = await Axios.post(url, formData);
      if (response.data != "no files") {
        let data = response.data[0];
        this.file6 = !data.path ? [] : null;
        this.file6Path = data.path
      }
    },
    openFile6(){
       let random = Math.random().toString(36).substring(7);
        let link = this.apiPath + this.file6Path + "?" + random;
          window.open(link);
    },

    openFile(type) {
      let random = Math.random().toString(36).substring(7);
      let link;

      if (type == 1) {
        link = this.apiPath + this.path1 + "?" + random;
      } else {
        link = this.apiPath + this.path2 + "?" + random;
      }
      window.open(link);
    },
    async deleteFile() {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("user_id", uid);
      formData.append("year", year);
      formData.append("type", this.deleteType);

      if(this.deleteType == 6){
        // delete file  ติดตาม 6 เดือน
  const url = this.apiPath + "deleteFile6Month.php";
      let data = await Axios.post(url, formData);
      this.file6 = null
      this.file6Path = ""
      }else{
        const url = this.apiPath + "deleteFileMain.php";
      let data = await Axios.post(url, formData);
      if (this.deleteType == 1) {
        this.filePdf1 = null;
      }
       else {
        this.filePdf2 = null;
      }
      this.checkMode2SendStatus();
      }
      
      this.isShowConfirmDeleteFileDialog = false;
    },
    showDeleteDialog(type) {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      this.deleteType = type;
      this.isShowConfirmDeleteFileDialog = true;

    },
    printAll() {
      let route = this.$router.resolve({ name: "printAll" });
      window.open(route.href);
    },
    printData(step) {
      let route = this.$router.resolve({
        name: "printStep" + step,
      });
      window.open(route.href);
    },

    async getStepperLog() {
      this.loadingShow();
      const url = this.apiPath + "user/getStepperLog.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
      };
      let data = await Axios.post(url, postData);
      let newData = data.data;
      let checkStatus = [];
      if (newData) {
        checkStatus = [
          newData.category0,
          newData.category1,
          newData.category2,
          newData.category3,
          newData.category4,
          newData.category5,
          newData.category6,
          // newData.category7,
        ];
      }

      if (checkStatus.every((x) => x == "1") && checkStatus.length) {
        this.checkSteper = true;
      } else {
        this.checkSteper = false;
      }
      if (data.data) {
        this.currentStep = data.data;
      }

      // if (
      //   this.currentStep.send_status == "1" ||
      //   this.currentStep.send_status == "2"
      // ) {
      //   // ป้องกันการเข้า หน้า stepper
      //   this.$q.sessionStorage.set("nstpr", false);
      // } else {
      //   this.$q.sessionStorage.set("nstpr", true);
      // }
      let currentDate = await this.getDate();
      this.checkAssessmentStatus();
    },

    async getCategory7GAP() {
      const url = this.apiPath + "user/getCategory7.php";
      let getData;
      let data;
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y") + 543,
      };
      data = await Axios.post(url, postData);
      getData = data.data;

      if (!getData.length) {
        // กรณียังไม่เคยมีการเข้าไปประเมิน หมวด7 GAP
        return false;
      } else {
        // กรณีเคยมีการบันทึกหมวด7 GAP แล้ว
        return true;
      }
    },
    async getAssessmentDate() {
      this.loadingShow();
      let currentDate = await this.getDate();
      const url = this.apiPath + "getAssessmentDate.php";
      let assessmentDate = await Axios.get(url);
      this.assessmentStatus = assessmentDate.data.status;
      let endDate = assessmentDate.data.end_date;
      this.endAssessmentDate = endDate;
      this.assessmentMode = assessmentDate.data.mode;

      if (assessmentDate.data.mode == "2") {
        let checkCate7GAP = await this.getCategory7GAP();
        this.isCategory7GAP = checkCate7GAP;
      }

      endDate = endDate.split("-");

      this.$q.sessionStorage.set("y", Number(assessmentDate.data.year) - 543);

      endDate =
        Number(endDate[2]) +
        " " +
        this.convertMonth(Number(endDate[1])) +
        " " +
        (Number(endDate[0]) + 543);

      this.endDate = endDate;
      this.getStepperLog();
    },
    checkMode2SendStatus() {
      if (
        this.filePdf1 != null &&
        this.filePdf2 != null &&
        this.isCategory7GAP
      ) {
        this.isEnableSendMode2 = true;
      } else {
        this.isEnableSendMode2 = false;
      }
    },
    async checkAssessmentStatus() {
      let currentDate = await this.getDate();
      let endDate = this.endAssessmentDate;
      let timeStampEndDate = new Date(endDate).getTime();
      let timeStampCurrentDate = new Date(
        currentDate[0].year - 543,
        Number(currentDate[0].month) - 1,
        currentDate[0].date
      ).getTime();

      // if (this.assessmentMode == "2") {
      // Mode 2
      // หมวด7 GAP + plan1y + plan3Y

      const apiCheckStatus = this.apiPath + "user/getAssessmentStepperLog.php";
      let postCheckStatusData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
      };

      let responseCheck = await Axios.post(apiCheckStatus, postCheckStatusData);
      let responseData = responseCheck.data[0];

      // เช็คหากกดส่งแบบประเมิน mode2ไปแล้ว ไปหน้ารอ
      if (responseData) {
        if (this.assessmentMode == "2") {
          if (responseData.mode2_status == "1") {
            this.$router.push("/waitingAssessment/0");
          }
          this.checkMode2SendStatus();
        } else if (this.assessmentMode == "1") {
          if (responseData.mode1_status == "1") {
            this.$router.push("/waitingAssessment/0");
          }
        }else if (this.assessmentMode == "3"){
          if(responseData.mode3_status == "1"){
            this.$router.push("/waitingAssessment/0");
          }else{
            this.getFile6()
          }
        }

        if (responseData.mode1_status == "1") {
          // ป้องกันการเข้า หน้า stepper
          this.$q.sessionStorage.set("nstpr", false);
        } else {
          this.$q.sessionStorage.set("nstpr", true);
        }

        if (
          timeStampCurrentDate > timeStampEndDate ||
          this.assessmentStatus == "0"
        ) {
          // // หมดเวลา หรือ ปิดประเมินแล้วก่อนเวลาf
          // if (this.currentStep.send_status == "1") {
          //   // console.log("หมดเวลา แต่ส่งประเมินแล้ว");
          //   this.$router.push("/waitingAssessment/2");
          // } else {
          //   // console.log("หมดเวลา ยังไม่ส่งแบบประเมิน");
          //   this.$router.push("/waitingAssessment/1");
          // }
          this.$router.push("/waitingAssessment/0");
        }
      }

      this.loadingHide();
    },
    async getFile() {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "getFileMain.php";
      let response = await Axios.post(url, formData);

      if (response.data != "no files") {
        let data = response.data[0];
        this.filePdf1 = data.file1 != 0 ? [] : null;
        this.filePdf2 = data.file2 != 0 ? [] : null;
        this.path1 = data.path1 != "" ? data.path1 : "";
        this.path2 = data.path2 != "" ? data.path2 : "";
      }
    },
     
  },
  created() {
    this.getFile();
    this.getAssessmentDate();
  },
};
</script>

<style lang="scss" scoped>
.container-border-lock {
  position: relative;
  right: 0px;
  width: 650px;
  border: 3px solid #e0e0e0;
  z-index: 2;
}

.container-border-right {
  position: relative;
  left: -180px;
  border: 6px solid #e0e0e0;
  border-radius: 0%;
  padding: 130px;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 0%;
  border-left-color: transparent;
  z-index: 1;
}
.border-teal {
  border: 1px solid teal;
  border-radius: 5px;
  color: teal;
}
.border-grey {
  border: 1px solid rgb(173, 168, 168);
  border-radius: 5px;
  color: rgb(173, 168, 168);
}
</style>
