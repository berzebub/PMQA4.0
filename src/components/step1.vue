<template>
  <div class="">
    <div class="bg3 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">ลักษณะองค์การ</span>
      </div>
      <div class="q-pa-sm">
        <span class="font-16"
          >ลักษณะสำคัญของอค์การ คือ ภาพรวมของส่วนราชการ
          สิ่งสำคัญที่มีอิทธิผลต่อวิธีการดำเนินงาน
          และความท้าทายสำคัญที่ส่วนราชการเผชิญอยู่
          สำหรับการดำเนินการของส่วนราชการที่ต้องการ ตอบสนอง
          การบริหาจัดการเพื่อนำไปสู่การเป็นระบบราชการ 4.0
          ควรพิจารณาในรายละเอียดดังนี้</span
        >
      </div>
    </div>

    <div class="q-mt-lg font-18">
      <!-- Start BOX 1 -->
      <div>
        <span>
          1. ลักษณะองค์การ: คุณลักษณะสำคัญของส่วนราชการคืออะไร
        </span>
        <div class="q-py-sm q-px-lg">
          <!-- Environment Content -->
          <div>
            <q-expansion-item
              group="boxInputOne"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ก. สภาพแวดล้อมของส่วนราชการ</span>
                <q-space></q-space>
                <q-icon
                  name="fas fa-exclamation-circle"
                  size="22px"
                  color="negative"
                  v-if="checkEnvironment != 5"
                ></q-icon>
                <q-icon
                  v-else
                  name="fas fa-check-circle"
                  size="22px"
                  color="secondary"
                ></q-icon>
                <div style="width:125px;" align="right">
                  <span class="q-ml-sm q-mr-md">
                    {{ `เสร็จสิ้น ${checkEnvironment}/5` }}</span
                  >
                </div>
              </template>
              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span>1. พันธกิจหรือหน้าที่ตามกฏหมาย</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isEnvironmentDialog1 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isEnvironmentDialog1">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              1. พันธกิจหรือหน้าที่ตามกฏหมาย
                              <div class="q-pl-lg">
                                -
                                พันธกิจหรือหน้าที่หลักตามกฏหมายของส่วนราชการคืออะไรบ้าง?
                                <br />
                                -
                                ความสำคัญเชิงเปรียบเทียบของพันธกิจหรือหน้าที่ต่อความสำเร็จของส่วนราชการและ

                                <span class="text-red"
                                  >การเพิ่มขีดความสามารถในการแข่งขันของประเทศคืออะไร?</span
                                >
                                <br />-
                                กลไกที่ส่วนราชการใช้ในการส่งมอบผลผลิตและบริการตามพันธกิจคืออะไร
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>
                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputEnvironment1"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputEnvironmentPDF1"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputEnvironmentPDF1
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            class="bg-white"
                            @input="val => uploadFile(val, 'pdf', 1, 'ก.', 1)"
                            v-if="!inputEnvironmentPDF1"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputEnvironmentPDF1"
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
                            class="relative-position cursor-pointer"
                            align="center"
                            v-if="inputEnvironmentPDF1"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ก.', 1)"
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
                              @click="deleteFile('pdf', 1, 'ก.', 1)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                     
                      </div>
                    </div>

                    <!-- Input Content 2 -->
                    <div class="q-mt-lg">
                      <span>2. วิสัยทัศน์และค่านิยม</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isEnvironmentDialog2 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isEnvironmentDialog2">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              2. วิสัยทัศน์และค่านิยม
                              <div class="q-pl-lg">
                                - เป้าประสงค์ วิสัยทัศน์ และค่านิยม
                                ของส่วนราชการที่ได้ประกาศไว้คืออะไร?
                                <br />
                                - สมรรถนะหลักของส่วนราชการคืออะไร
                                และมีความเกี่ยวข้องอย่างไรกับพันธกิจของส่วน
                                ราชการ?

                                <span class="text-red"
                                  >ความสำคัญของสมรรถะหลักของส่วนราชการที่มีต่อการพัฒนาเศรษฐกิจ
                                  สังคม สาธารณสุข และสิ่งแวดล้อมของประเทศคืออะไร
                                  ทั้งทางตรงและทางอ้อม</span
                                >
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputEnvironment2"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputEnvironmentPDF2"
                            v-if="!inputEnvironmentPDF2"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputEnvironmentPDF2
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 1, 'ก.', 2)"
                            class="bg-white"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputEnvironmentPDF2"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputEnvironmentPDF2"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ก.', 2)"
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
                              @click="deleteFile('pdf', 1, 'ก.', 2)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                      
                      </div>
                    </div>

                    <!-- Input Content 3 -->
                    <div class="q-mt-lg">
                      <span>3. ลักษณะโดยรวมของบุคลากร</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isEnvironmentDialog3 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isEnvironmentDialog3">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              3. ลักษณะโดยรวมของบุคลากร
                              <div class="q-pl-lg">
                                - ลักษณะโดยรวมของบุคลากรในส่วนราชการเป็นอย่างไร?
                                <br />
                                -
                                มีการจำแนกบุคลากรหรือพนักงานออกเป็นกลุ่มและประเภทอะไรบ้าง?
                                <br />
                                -
                                อะไรคือข้อกำหนดพื้นฐานด้านการศึกษาสำหรับกลุ่มบุคลากรและพนักงานประเภทต่างๆ?
                                <br />
                                -
                                องค์ประกอบสำคัญที่ทำให้บุคลากรเหล่านี้มีส่วนรวมในการทำงานเพื่อบรรลุพันธกิจและ
                                วิสัยทัศน์ของส่วนราชการคืออะไร?
                                <br />
                                - ในการทำงานจำเป็นต้องมีข้อกำหนดด้านสุขภาพ
                                ความปลอดภัยและความเสี่ยงภัยของ ส่วนราชการ
                                อะไรบ้าง
                                <br />
                                -<span class="text-red">
                                  ประเด็นการเปลี่ยนแปลงด้านบุคลากรที่สำคัญคืออะไร?
                                  พื้นฐานของบุคลากรที่มีผลต่อ
                                  การวางแผนพัฒนาและการสร้างขีดความสามารถในการเป็นองค์การสมรรถนะสูงมี
                                  อะไรบ้าง</span
                                >
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputEnvironment3"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputEnvironmentPDF3"
                            v-if="!inputEnvironmentPDF3"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputEnvironmentPDF3
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 1, 'ก.', 3)"
                            class="bg-white"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputEnvironmentPDF3"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputEnvironmentPDF3"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ก.', 3)"
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
                              @click="deleteFile('pdf', 1, 'ก.', 3)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>

                    <!-- Input Content 4 -->
                    <div class="q-mt-lg">
                      <span>4. สินทรัพย์</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isEnvironmentDialog4 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isEnvironmentDialog4">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              4. สินทรัพย์
                              <div class="q-pl-lg">
                                - ส่วนราชการมีอาคารสถานที่ เทคโนโลยี และอุปกรณ์
                                ที่สำคัญอะไรบ้าง
                                <span class="text-red">
                                  รวมทั้งเทคโนโลยี
                                  การสื่อสารและการให้บริการ?</span
                                >
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputEnvironment4"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputEnvironmentPDF4"
                            v-if="!inputEnvironmentPDF4"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputEnvironmentPDF4
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 1, 'ก.', 4)"
                            class="bg-white"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputEnvironmentPDF4"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputEnvironmentPDF4"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ก.', 4)"
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
                              @click="deleteFile('pdf', 1, 'ก.', 4)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                     
                      </div>
                    </div>

                    <!-- Input Content 5 -->
                    <div class="q-mt-lg">
                      <span>5. กฏหมาย กฏระเบียบและข้อบังคับ</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isEnvironmentDialog5 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isEnvironmentDialog5">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              5. กฏหมาย กฏระเบียบ
                              <div class="q-pl-lg">
                                - ส่วนราชการมีอาคารสถานที่ เทคโนโลยี และอุปกรณ์
                                ที่สำคัญอะไรบ้าง
                                <span class="text-red">
                                  รวมทั้งเทคโนโลยี
                                  การสื่อสารและการให้บริการ?</span
                                >
                              </div>
                            </div>
                             <div class="font-16 font-prompt-r">
                              <div class="q-pl-lg">
                                - กฏหมายและกฏระเบียบอะไรที่มีอยู่และเอื้อให้ส่วนราชการทำงานอย่างมีความคล่องตัวและตอบสนองการเปลี่ยนแปลงอย่างมีประสิทธิภาพ
                               
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputEnvironment5"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputEnvironmentPDF5"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputEnvironmentPDF5
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 1, 'ก.', 5)"
                            class="bg-white"
                            v-if="!inputEnvironmentPDF5"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputEnvironmentPDF5"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputEnvironmentPDF5"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ก.', 5)"
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
                              @click="deleteFile('pdf', 1, 'ก.', 5)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                      
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
          <!-- Environment Content -->

          <!-- Relation Content -->
          <div class="q-mt-xs">
            <q-expansion-item
              group="boxInputOne"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ข. ความสัมพันธ์ระดับองค์การ</span>
                <q-space></q-space>
                <q-icon
                  name="fas fa-exclamation-circle"
                  size="22px"
                  color="negative"
                  v-if="checkRelation != 3"
                ></q-icon>
                <q-icon
                  v-else
                  name="fas fa-check-circle"
                  size="22px"
                  color="secondary"
                ></q-icon>
                <div style="width:125px;" align="right">
                  <span class="q-ml-sm q-mr-md">
                    {{ `เสร็จสิ้น ${checkRelation}/3` }}</span
                  >
                </div>
              </template>

              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span>1. โครงสร้างองค์การ</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isRelationDialog1 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isRelationDialog1">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              1. โครงสร้างองค์การ
                              <div class="q-pl-lg">
                                -
                                โครงสร้างและระบบการกำกับดูแลของส่วนราชการมีลักษณะอย่างไร?
                                <br />
                                -
                                ระบบการรายงานระหว่างคณะกรรมการกำกับดูแลส่วนราชการ
                                ผู้บริหารส่วนราชการ
                                และส่วนราชการที่กำกับมีลักษณะเช่นใด?
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputRelation1"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputRelationPDF1"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputRelationPDF1
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 1, 'ข.', 1)"
                            class="bg-white"
                            v-if="!inputRelationPDF1"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputRelationPDF1"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputRelationPDF1"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ข.', 1)"
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
                              @click="deleteFile('pdf', 1, 'ข.', 1)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>

                    <!-- Input Content 2 -->
                    <div class="q-mt-lg">
                      <span>2. ผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isRelationDialog2 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isRelationDialog2">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              2. ผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
                              <div class="q-pl-lg">
                                - ระดับของกลุ่มเป้าหมาย กลุ่มผู้รับบริหาร
                                และกลุ่มผู้มีส่วนได้ส่วนเสียที่สำคัญของส่วนราชการมีอะไรบ้าง?
                                <br />
                                -
                                กลุ่มตัวอย่างมีความต้องการและความคาดหวังที่สำคัญต่อผลผลิต
                                ต่อการบริหารที่มีให้
                                และต่อการปฏิบัติการของส่วนราชการอย่างไร?
                                <br />
                                -
                                ความต้องการและความคาดหวังของแต่ละกลุ่มมีความแตกต่างกันอย่างไร?
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputRelation2"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputRelationPDF2"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputRelationPDF2
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 1, 'ข.', 2)"
                            class="bg-white"
                            v-if="!inputRelationPDF2"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputRelationPDF2"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputRelationPDF2"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ข.', 2)"
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
                              @click="deleteFile('pdf', 1, 'ข.', 2)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>

                    <!-- Input Content 3 -->
                    <div class="q-mt-lg">
                      <span
                        >3.
                        ส่วนราชการหรือองค์การที่เกี่ยวข้องกันในการให้บริการหรือส่งมอบงานต่อกัน</span
                      >
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isRelationDialog3 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isRelationDialog3">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              3.
                              ส่วนราชการหรือองค์การที่เกี่ยวข้องกันในการให้บริการหรือส่งมอบงานต่อกัน
                              <div class="q-pl-lg">
                                -
                                ส่วนราชการหรือองค์การที่เกี่ยวข้องกันในการในการให้บริการหรือส่งมอบงานต่อกัน
                                ที่สำคัญมีหน่วยงานใดบ้าง? และมีบทบาทอย่างไร
                                ในระบบงานของส่วนราชการ
                                โดยเฉพาะอย่างยิ่งในการปฏิบัติตามภาระหน้าที่ของ
                                ส่วนราชการ และยกระดับความสามารถในการแข่งขัน
                                ของประเทศ?
                                <br>
                                - กลุ่มเหล่านี้มีส่วนร่วมอะไรในการสร้างนวัตกรรมให้แก่ส่วนราชการ?
                                <br>
                                - กลไกที่สำคัญในการสื่อสาร และข้อกำหนดสำคัญในการปฏิบัติงานร่วมกันมีอะไรบ้าง?
                              </div>
                              
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputRelation3"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputRelationPDF3"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputRelationPDF3
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 1, 'ข.', 3)"
                            class="bg-white"
                            v-if="!inputRelationPDF3"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputRelationPDF3"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputRelationPDF3"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 1, 'ข.', 3)"
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
                              @click="deleteFile('pdf', 1, 'ข.', 3)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
          <!-- Relation Content -->
        </div>
      </div>
      <!-- End BOX 1 -->

      <!-- Start BOX 2 -->
      <div class="q-mt-lg">
        <span>
          2. สภาวการณ์ขององค์การ:
          สภาวการณ์เชิงยุทธศาสตร์ของส่วนราชการเป็นเช่นใด?
        </span>
        <div class="q-py-sm q-px-lg">
          <div class="">
            <q-expansion-item
              group="boxInputTwo"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ก. สภาพแวดล้อมด้านการแข่งขัน</span>
                <q-space></q-space>
                <q-icon
                  name="fas fa-exclamation-circle"
                  size="22px"
                  color="negative"
                  v-if="checkCompetition != 3"
                ></q-icon>
                <q-icon
                  v-else
                  name="fas fa-check-circle"
                  size="22px"
                  color="secondary"
                ></q-icon>
                <div style="width:125px;" align="right">
                  <span class="q-ml-sm q-mr-md">
                    {{ `เสร็จสิ้น ${checkCompetition}/3` }}</span
                  >
                </div>
              </template>

              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span
                        >1.
                        สภาพแวดล้อมด้านการแข่งขันทั้งภายในและภายนอกประเทศ</span
                      >
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isCompetitionEnvironmentDialog1 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isCompetitionEnvironmentDialog1">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              1.
                              สภาพแวดล้อมด้านการแข่งขันทั้งภายในและภายนอกประเทศ
                              <div class="q-pl-lg">
                                -
                                สภาพแวดล้อมด้านการแข่งขันทั้งภายในและภายนอกประเทศของส่วนราชการเป็นเช่นใด?
                                ประเด็นการแข่งขันคืออะไร<span class="text-red"
                                  >และผลต่อ การดำเนินการของส่วนราชการ?</span
                                >
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputCompetitionEnvironment1"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputCompetitionEnvironmentPDF1"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputCompetitionEnvironmentPDF1
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 2, 'ก.', 1)"
                            class="bg-white"
                            v-if="!inputCompetitionEnvironmentPDF1"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputCompetitionEnvironmentPDF1"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputCompetitionEnvironmentPDF1"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 2, 'ก.', 1)"
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
                              @click="deleteFile('pdf', 2, 'ก.', 1)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>

                    <!-- Input Content 2 -->
                    <div class="q-mt-lg">
                      <span>2. การเปลี่ยนแปลงความสามารถในการแข่งขัน</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isCompetitionEnvironmentDialog2 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isCompetitionEnvironmentDialog2">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              2. การเปลี่ยนแปลงความสามารถในการแข่งขัน
                              <div class="q-pl-lg">
                                - การเปลี่ยนแปลงที่สำคัญ (ถ้ามี)
                                ซึ่งมีผลต่อสถานะการแข่งขันของส่วนราชการ
                                <span class="text-red">และของประเทศ</span>
                                รวมถึงการเปลี่ยนแปลงที่สร้างโอกาส
                                สำหรับการสร้างนวัตกรรมและความร่วมมือคืออะไร?
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputCompetitionEnvironment2"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputCompetitionEnvironmentPDF2"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputCompetitionEnvironmentPDF2
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 2, 'ก.', 2)"
                            class="bg-white"
                            v-if="!inputCompetitionEnvironmentPDF2"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputCompetitionEnvironmentPDF2"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputCompetitionEnvironmentPDF2"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 2, 'ก.', 2)"
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
                              @click="deleteFile('pdf', 2, 'ก.', 2)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>

                    <!-- Input Content 3 -->
                    <div class="q-mt-lg">
                      <span>3. แหล่งข้อมูลเชิงเปรียบเทียบ</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isCompetitionEnvironmentDialog3 = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isCompetitionEnvironmentDialog3">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              3. แหล่งข้อมูลเชิงเปรียบเทียบ
                              <div class="q-pl-lg">
                                - แหล่งข้อมูลสำคัญสำหรับข้อมูลเชิงเปรียบเทียบ
                                และเชิงแข่งขันในภารกิจที่คล้ายคลึงกันมีอะไรบ้าง?
                                <br />
                                -
                                แหล่งข้อมูลสำคัญสำหรับข้อมูลเชิงเปรียบเทียบจากหน่วยงานอื่นๆ
                                ทั้งในส่วนราชการ นอกส่วนราชการ
                                และจากต่างประเภทกันมีอะไรบ้าง?
                                <br />
                                - มีข้อจำกัดอะไร (ถ้ามี)
                                ในการได้มาซึ่งข้อมูลเหล่านี้?
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputCompetitionEnvironment3"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputCompetitionEnvironmentPDF3"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputCompetitionEnvironmentPDF3
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            class="bg-white"
                            @input="val => uploadFile(val, 'pdf', 2, 'ก.', 3)"
                            v-if="!inputCompetitionEnvironmentPDF3"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputCompetitionEnvironmentPDF3"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputCompetitionEnvironmentPDF3"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 2, 'ก.', 3)"
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
                              @click="deleteFile('pdf', 2, 'ก.', 3)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>

          <div class="q-mt-xs">
            <q-expansion-item
              group="boxInputTwo"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ข. บริบทเชิงยุทธศาสตร์</span>
                <q-space></q-space>
                <q-icon
                  name="fas fa-exclamation-circle"
                  size="22px"
                  color="negative"
                  v-if="checkStategy != 1"
                ></q-icon>
                <q-icon
                  v-else
                  name="fas fa-check-circle"
                  size="22px"
                  color="secondary"
                ></q-icon>
                <div style="width:125px;" align="right">
                  <span class="q-ml-sm q-mr-md ">
                    {{ `เสร็จสิ้น ${checkStategy}/1` }}</span
                  >
                </div>
              </template>

              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span
                        >1.
                        ความท้าทายเชิงยุทธศาสตร์และความได้เปรียบเชิงยุทธศาสตร์</span
                      >
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isStategyDialog = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isStategyDialog">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              1.
                              ความท้าทายเชิงยุทธศาสตร์และความได้เปรียนเเชิงยุทธศาสตร์
                              <div class="q-pl-lg">
                                -
                                ความท้าทายเชิงยุทธศาสตร์และความได้เปรียบเชิงยุทธศาสตร์ของส่วนราชการในด้านพันธภิจ
                                ด้านการปฏิบัติการด้านความรับผิดชอบต่อสังคม
                                และด้านบุคลากร คืออะไร?
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputStategy"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputStategyPDF1"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputStategyPDF1
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            @input="val => uploadFile(val, 'pdf', 2, 'ข.', 1)"
                            class="bg-white"
                            v-if="!inputStategyPDF1"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputStategyPDF1"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputStategyPDF1"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 2, 'ข.', 1)"
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
                              @click="deleteFile('pdf', 2, 'ข.', 1)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>

          <div class="q-mt-xs">
            <q-expansion-item
              group="boxInputTwo"
              header-class="bg3 text-black q-py-sm"
              dense-toggle=""
              dense=""
              expand-icon-class="text-grey-10"
            >
              <template v-slot:header>
                <span>ค. ระบบการปรับปรุงผลการดำเนินการ</span>
                <q-space></q-space>
                <q-icon
                  name="fas fa-exclamation-circle"
                  size="22px"
                  color="negative"
                  v-if="checkPerformance != 1"
                ></q-icon>
                <q-icon
                  v-else
                  name="fas fa-check-circle"
                  size="22px"
                  color="secondary"
                ></q-icon>
                <div style="width:125px;" align="right">
                  <span class="q-ml-sm q-mr-md">
                    {{ `เสร็จสิ้น ${checkPerformance}/1` }}</span
                  >
                </div>
              </template>
              <q-card class="bg3">
                <q-separator
                  class="bg-grey-7"
                  style="height: 2px;"
                ></q-separator>
                <q-card-section>
                  <div class="q-px-lg font-16">
                    <!-- Input Content 1 -->
                    <div>
                      <span>1. ระบบการปรับปรุงผลการดำเนินการ</span>
                      <q-btn
                        class="q-mx-md bg-teal text-white"
                        dense=""
                        flat
                        round
                        @click="isPerformanceSystemDialog = true"
                        ><q-icon name="fas fa-question" size="16px"></q-icon>
                      </q-btn>

                      <q-dialog v-model="isPerformanceSystemDialog">
                        <q-card
                          class="q-pl-lg q-py-sm"
                          style="max-width: 700px; width: 100%;"
                        >
                          <q-card-section>
                            <div class="font-16 font-prompt-r">
                              1. ระบบการปรับปรุงผลการดำเนินการ
                              <div class="q-pl-lg">
                                -
                                องค์ประกอบสำคัญของระบบการปรับปรุงผลการดำเนินการ
                                รวมทั้งกระบวนการประเมิน
                                การปรับปรุงโครงการและกระบวนการที่สำคัญของส่วน
                                ราชการมีอะไรบ้าง?
                              </div>
                            </div>
                          </q-card-section>
                        </q-card>
                      </q-dialog>

                      <div class="q-mt-sm">
                        <textarea
                          style="width:100%;border-radius:5px"
                          rows="5"
                          outlined=""
                          bg-color="white"
                          v-model.lazy="inputPerformanceSystem"
                        />
                      </div>

                      <div class=" row ">
                        <div></div>
                        <q-space></q-space>
                        <div class="q-ml-lg">
                          <q-file
                            v-model="inputPerformanceSystemPDF1"
                            dense=""
                            style="width:160px;overflow:hidden;"
                            :style="
                              !inputPerformanceSystemPDF1
                                ? 'border:2px solid #e84c93;border-radius:10px;'
                                : 'border:2px solid #000000;border-radius:0px;'
                            "
                            borderless
                            accept=".pdf"
                            class="bg-white"
                            v-if="!inputPerformanceSystemPDF1"
                            @input="val => uploadFile(val, 'pdf', 2, 'ค.', 1)"
                          >
                            <template v-slot:prepend>
                              <div
                                class="absolute-center fit"
                                align="center"
                                v-if="!inputPerformanceSystemPDF1"
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
                            class="relative-position cursor-pointer"
                            style="width:160px"
                            align="center"
                            v-if="inputPerformanceSystemPDF1"
                          >
                            <div
                              class="full-width q-py-sm bg-white"
                              align="center"
                              style="border:2px solid #000000;border-radius:0px;"
                              @click="openFile('pdf', 2, 'ค.', 1)"
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
                              @click="deleteFile('pdf', 2, 'ค.', 1)"
                            >
                              ลบไฟล์
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </div>
      </div>
      <!-- End BOX 2 -->
    </div>

    <div style="padding: 70px 0px 30px 0px;" align="center">
      <q-btn
        class="bg-teal text-white font-18"
        label="บันทึกข้อมูล"
        :disable="isSaveData"
        style="width: 220px; border-radius: 0px;"
        push
        @click="saveData()"
      ></q-btn>
    </div>

    <q-dialog v-model="isDelete" persistent="">
      <q-card style="max-width:400px;width:100%;">
        <q-card-section align="center">
          <div class="q-pb-md">
            <span style="font-size:24px;">ลบไพล์</span>
          </div>
          <div class="q-pa-md font-18">
            <span>คุณต้องการลบไฟล์ หรือไม่</span>
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
              @click="confirmDeleteFile()"
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
      temp: "",
      // Emit Data Status
      status: "none",
      isDelete: false,

      // Environment
      environmentCount: 0,
      isEnvironmentDialog1: false,
      inputEnvironment1: "",
      inputEnvironmentPDF1: null,
      inputEnvironmentIMG1: null,

      isEnvironmentDialog2: false,
      inputEnvironment2: "",
      inputEnvironmentPDF2: null,
      inputEnvironmentIMG2: null,

      isEnvironmentDialog3: false,
      inputEnvironment3: "",
      inputEnvironmentPDF3: null,
      inputEnvironmentIMG3: null,

      isEnvironmentDialog4: false,
      inputEnvironment4: "",
      inputEnvironmentPDF4: null,
      inputEnvironmentIMG4: null,

      isEnvironmentDialog5: false,
      inputEnvironment5: "",
      inputEnvironmentPDF5: null,
      inputEnvironmentIMG5: null,

      // Relation
      isRelationDialog1: false,
      inputRelation1: "",
      inputRelationPDF1: null,
      inputRelationIMG1: null,

      isRelationDialog2: false,
      inputRelation2: "",
      inputRelationPDF2: null,
      inputRelationIMG2: null,

      isRelationDialog3: false,
      inputRelation3: "",
      inputRelationPDF3: null,
      inputRelationIMG3: null,

      // Competition Environment
      isCompetitionEnvironmentDialog1: false,
      inputCompetitionEnvironment1: "",
      inputCompetitionEnvironmentPDF1: null,
      inputCompetitionEnvironmentIMG1: null,

      isCompetitionEnvironmentDialog2: false,
      inputCompetitionEnvironment2: "",
      inputCompetitionEnvironmentPDF2: null,
      inputCompetitionEnvironmentIMG2: null,

      isCompetitionEnvironmentDialog3: false,
      inputCompetitionEnvironment3: "",
      inputCompetitionEnvironmentPDF3: null,
      inputCompetitionEnvironmentIMG3: null,

      // Stategy
      isStategyDialog: false,
      inputStategy: "",
      inputStategyPDF1: null,
      inputStategyIMG1: null,

      // Performance improvement system
      isPerformanceSystemDialog: false,
      inputPerformanceSystem: "",
      inputPerformanceSystemPDF1: null,
      inputPerformanceSystemIMG1: null,

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    async confirmDeleteFile() {
      let data = this.temp;
      if (data.q_number == 1) {
        if (data.category == "ก.") {
          if (data.type == "pdf") {
            if (data.category_q_number == 1) {
              this.inputEnvironmentPDF1 = null;
            } else if (data.category_q_number == 2) {
              this.inputEnvironmentPDF2 = null;
            } else if (data.category_q_number == 3) {
              this.inputEnvironmentPDF3 = null;
            } else if (data.category_q_number == 4) {
              this.inputEnvironmentPDF4 = null;
            } else if (data.category_q_number == 5) {
              this.inputEnvironmentPDF5 = null;
            }
          } else {
            if (data.category_q_number == 1) {
              this.inputEnvironmentIMG1 = null;
            } else if (data.category_q_number == 2) {
              this.inputEnvironmentIMG2 = null;
            } else if (data.category_q_number == 3) {
              this.inputEnvironmentIMG3 = null;
            } else if (data.category_q_number == 4) {
              this.inputEnvironmentIMG4 = null;
            } else if (data.category_q_number == 5) {
              this.inputEnvironmentIMG5 = null;
            }
          }
        } else {
          if (data.type == "pdf") {
            if (data.category_q_number == 1) {
              this.inputRelationPDF1 = null;
            } else if (data.category_q_number == 2) {
              this.inputRelationPDF2 = null;
            } else if (data.category_q_number == 3) {
              this.inputRelationPDF3 = null;
            }
          } else {
            if (data.category_q_number == 1) {
              this.inputRelationIMG1 = null;
            } else if (data.category_q_number == 2) {
              this.inputRelationIMG2 = null;
            } else if (data.category_q_number == 3) {
              this.inputRelationIMG3 = null;
            }
          }
        }
      } else {
        if (data.category == "ก.") {
          if (data.type == "pdf") {
            if (data.category_q_number == 1) {
              this.inputCompetitionEnvironmentPDF1 = null;
            } else if (data.category_q_number == 2) {
              this.inputCompetitionEnvironmentPDF2 = null;
            } else if (data.category_q_number == 3) {
              this.inputCompetitionEnvironmentPDF3 = null;
            }
          } else {
            if (data.category_q_number == 1) {
              this.inputCompetitionEnvironmentIMG1 = null;
            } else if (data.category_q_number == 2) {
              this.inputCompetitionEnvironmentIMG2 = null;
            } else if (data.category_q_number == 3) {
              this.inputCompetitionEnvironmentIMG3 = null;
            }
          }
        } else if (data.category == "ข.") {
          if (data.type == "pdf") {
            this.inputStategyPDF1 = null;
          } else {
            this.inputStategyIMG1 = null;
          }
        } else {
          if (data.type == "pdf") {
            this.inputPerformanceSystemPDF1 = null;
          } else {
            this.inputPerformanceSystemIMG1 = null;
          }
        }
      }

      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        q_number: data.q_number,
        category: data.category,
        category_q_number: data.category_q_number,
        year: this.$q.sessionStorage.getItem("y"),
        type: data.type
      };

      const url = this.apiPath + "user/deleteFileCategory0.php";
      let dataAx = await Axios.post(url, postData);

      this.isDelete = false;
    },
    async getData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory0.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y")
      };
      let data = await Axios.post(url, postData);
      let getData = data.data;

      if (getData) {
        // ข้อ 1 ก 1
        let inputEnvironment1 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "1"
        );

        if (inputEnvironment1.length) {
          this.inputEnvironment1 = inputEnvironment1[0].text;
          let checkFile1 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile1.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG1 = null;
          } else {
            this.inputEnvironmentIMG1 = [1];
          }
          if (checkFile1.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF1 = null;
          } else {
            this.inputEnvironmentPDF1 = [1];
          }
        }

        // ข้อ1 ก2
        let inputEnvironment2 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "2"
        );

        if (inputEnvironment2.length) {
          this.inputEnvironment2 = inputEnvironment2[0].text;
          let checkFile2 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile2.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG2 = null;
          } else {
            this.inputEnvironmentIMG2 = [1];
          }
          if (checkFile2.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF2 = null;
          } else {
            this.inputEnvironmentPDF2 = [1];
          }
        }

        // ข้อ1 ก3
        let inputEnvironment3 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "3"
        );

        if (inputEnvironment3.length) {
          this.inputEnvironment3 = inputEnvironment3[0].text;
          let checkFile3 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile3.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG3 = null;
          } else {
            this.inputEnvironmentIMG3 = [1];
          }
          if (checkFile3.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF3 = null;
          } else {
            this.inputEnvironmentPDF3 = [1];
          }
        }

        // ข้อ1 ก4
        let inputEnvironment4 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "4"
        );
        if (inputEnvironment4.length) {
          this.inputEnvironment4 = inputEnvironment4[0].text;
          let checkFile4 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "4"
          )[0];

          if (checkFile4.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG4 = null;
          } else {
            this.inputEnvironmentIMG4 = [1];
          }
          if (checkFile4.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF4 = null;
          } else {
            this.inputEnvironmentPDF4 = [1];
          }
        }

        // ข้อ1 ก5
        let inputEnvironment5 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ก." &&
            x.category_q_number == "5"
        );
        if (inputEnvironment5.length) {
          this.inputEnvironment5 = inputEnvironment5[0].text;
          let checkFile5 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ก." &&
              x.category_q_number == "5"
          )[0];

          if (checkFile5.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentIMG5 = null;
          } else {
            this.inputEnvironmentIMG5 = [1];
          }
          if (checkFile5.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputEnvironmentPDF5 = null;
          } else {
            this.inputEnvironmentPDF5 = [1];
          }
        }

        // ข้อ1 ข1
        let inputRelation1 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "1"
        );
        if (inputRelation1.length) {
          this.inputRelation1 = inputRelation1[0].text;
          let checkFile6 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile6.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationIMG1 = null;
          } else {
            this.inputRelationIMG1 = [1];
          }
          if (checkFile6.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationPDF1 = null;
          } else {
            this.inputRelationPDF1 = [1];
          }
        }

        // ข้อ1 ข2
        let inputRelation2 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "2"
        );

        if (inputRelation2.length) {
          this.inputRelation2 = inputRelation2[0].text;
          let checkFile7 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile7.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationIMG2 = null;
          } else {
            this.inputRelationIMG2 = [1];
          }
          if (checkFile7.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationPDF2 = null;
          } else {
            this.inputRelationPDF2 = [1];
          }
        }

        // ข้อ1 ข3
        let inputRelation3 = getData.filter(
          x =>
            x.q_number == "1" &&
            x.category == "ข." &&
            x.category_q_number == "3"
        );

        if (inputRelation3.length) {
          this.inputRelation3 = inputRelation3[0].text;
          let checkFile8 = getData.filter(
            x =>
              x.q_number == "1" &&
              x.category == "ข." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile8.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationIMG3 = null;
          } else {
            this.inputRelationIMG3 = [1];
          }
          if (checkFile8.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputRelationPDF3 = null;
          } else {
            this.inputRelationPDF3 = [1];
          }
        }

        // ข้อ2 ก1
        let inputCompetitionEnvironment1 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "1"
        );
        if (inputCompetitionEnvironment1.length) {
          this.inputCompetitionEnvironment1 =
            inputCompetitionEnvironment1[0].text;
          let checkFile9 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile9.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentIMG1 = null;
          } else {
            this.inputCompetitionEnvironmentIMG1 = [1];
          }
          if (checkFile9.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentPDF1 = null;
          } else {
            this.inputCompetitionEnvironmentPDF1 = [1];
          }
        }

        // ข้อ2 ก2
        let inputCompetitionEnvironment2 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "2"
        );

        if (inputCompetitionEnvironment2.length) {
          this.inputCompetitionEnvironment2 =
            inputCompetitionEnvironment2[0].text;
          let checkFile10 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "2"
          )[0];

          if (checkFile10.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentIMG2 = null;
          } else {
            this.inputCompetitionEnvironmentIMG2 = [1];
          }
          if (checkFile10.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentPDF2 = null;
          } else {
            this.inputCompetitionEnvironmentPDF2 = [1];
          }
        }

        // ข้อ2 ก3
        let inputCompetitionEnvironment3 = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ก." &&
            x.category_q_number == "3"
        );
        if (inputCompetitionEnvironment3.length) {
          this.inputCompetitionEnvironment3 =
            inputCompetitionEnvironment3[0].text;
          let checkFile11 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ก." &&
              x.category_q_number == "3"
          )[0];

          if (checkFile11.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentIMG3 = null;
          } else {
            this.inputCompetitionEnvironmentIMG3 = [1];
          }
          if (checkFile11.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputCompetitionEnvironmentPDF3 = null;
          } else {
            this.inputCompetitionEnvironmentPDF3 = [1];
          }
        }

        // ข้อ2 ข1
        let inputStategy = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ข." &&
            x.category_q_number == "1"
        );
        if (inputStategy.length) {
          this.inputStategy = inputStategy[0].text;
          let checkFile12 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ข." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile12.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputStategyIMG1 = null;
          } else {
            this.inputStategyIMG1 = [1];
          }
          if (checkFile12.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputStategyPDF1 = null;
          } else {
            this.inputStategyPDF1 = [1];
          }
        }

        // ข้อ2 ค1
        let inputPerformanceSystem = getData.filter(
          x =>
            x.q_number == "2" &&
            x.category == "ค." &&
            x.category_q_number == "1"
        );
        if (inputPerformanceSystem.length) {
          this.inputPerformanceSystem = inputPerformanceSystem[0].text;
          let checkFile13 = getData.filter(
            x =>
              x.q_number == "2" &&
              x.category == "ค." &&
              x.category_q_number == "1"
          )[0];

          if (checkFile13.is_img == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputPerformanceSystemIMG1 = null;
          } else {
            this.inputPerformanceSystemIMG1 = [1];
          }
          if (checkFile13.is_pdf == 0) {
            // กรณีไม่มีรูปภาพ
            this.inputPerformanceSystemPDF1 = null;
          } else {
            this.inputPerformanceSystemPDF1 = [1];
          }
        }
      }

      this.loadingHide();
    },
    async checkFinishStatus() {
      // console.log(this.checkEnvironment);
      const url = this.apiPath + "user/setUserStepperLog.php";
      if (
        this.checkEnvironment == 5 &&
        this.checkRelation == 3 &&
        this.checkCompetition == 3 &&
        this.checkStategy == 1 &&
        this.checkPerformance == 1
      ) {
        // FINISH ALL
        let postData = {
          category: "category0",
          user_id: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          status: 1 // 1 = finish
        };
        let data = await Axios.post(url, postData);
        // console.log(data);
      } else if (
        this.checkEnvironment >= 1 ||
        this.checkRelation >= 1 ||
        this.checkCompetition >= 1 ||
        this.checkStategy >= 1 ||
        this.checkPerformance >= 1
      ) {
        let postData = {
          category: "category0",
          user_id: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          status: 2 // 1 = not finish all
        };
        let data = await Axios.post(url, postData);
        // console.log(data);
      } else {
        let postData = {
          category: "category0",
          user_id: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          status: 0 // 1 = not finish all
        };
        let data = await Axios.post(url, postData);
        // console.log(data);
      }
    },

    async saveData() {
      this.checkFinishStatus();
      let uid = this.$q.sessionStorage.getItem("uid");
      // ข้อ1 หมวด ก ข้อที่1
      let sendData = [
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 1,
          text: this.inputEnvironment1,
          pdf_file: this.inputEnvironmentPDF1,
          img_file: this.inputEnvironmentIMG1
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 2,
          text: this.inputEnvironment2,
          pdf_file: this.inputEnvironmentPDF2,
          img_file: this.inputEnvironmentIMG2
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 3,
          text: this.inputEnvironment3,
          pdf_file: this.inputEnvironmentPDF3,
          img_file: this.inputEnvironmentIMG3
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 4,
          text: this.inputEnvironment4,
          pdf_file: this.inputEnvironmentPDF4,
          img_file: this.inputEnvironmentIMG4
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 5,
          text: this.inputEnvironment5,
          pdf_file: this.inputEnvironmentPDF5,
          img_file: this.inputEnvironmentIMG5
        },
        // หมวด ข
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 1,
          text: this.inputRelation1,
          pdf_file: this.inputRelationPDF1,
          img_file: this.inputRelationIMG1
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 2,
          text: this.inputRelation2,
          pdf_file: this.inputRelationPDF2,
          img_file: this.inputRelationIMG2
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 3,
          text: this.inputRelation3,
          pdf_file: this.inputRelationPDF3,
          img_file: this.inputRelationIMG3
        },
        // เริ่มข้อ2 หมวด ก.
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 1,
          text: this.inputCompetitionEnvironment1,
          pdf_file: this.inputCompetitionEnvironmentPDF1,
          img_file: this.inputCompetitionEnvironmentIMG1
        },
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 2,
          text: this.inputCompetitionEnvironment2,
          pdf_file: this.inputCompetitionEnvironmentPDF2,
          img_file: this.inputCompetitionEnvironmentIMG2
        },
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 3,
          text: this.inputCompetitionEnvironment3,
          pdf_file: this.inputCompetitionEnvironmentPDF3,
          img_file: this.inputCompetitionEnvironmentIMG3
        },
        // เริ่มข้อ2 หมวด ข.
        {
          q_number: 2,
          user_id: uid,
          category: "ข.",
          category_q_number: 1,
          text: this.inputStategy,
          pdf_file: this.inputStategyPDF1,
          img_file: this.inputStategyIMG1
        },
        // เริ่มข้อ2 หมวด ค.
        {
          q_number: 2,
          user_id: uid,
          category: "ค.",
          category_q_number: 1,
          text: this.inputPerformanceSystem,
          pdf_file: this.inputPerformanceSystemPDF1,
          img_file: this.inputPerformanceSystemIMG1
        }
      ];
      let finalData = {
        postData: sendData,
        mode: 0,
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid")
      };
      const url = this.apiPath + "user/addUpdateCategory0.php";
      let post = await Axios.post(url, finalData);
      this.isSaveData = true;

      setTimeout(() => {
        this.isSaveData = false;

        this.$emit("statusForm", true);
      }, 1000);
    },
    async uploadFile(file, type, q_number, category, category_q_number) {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("file", file);
      formData.append("q_number", q_number);
      formData.append("category", category);
      formData.append("category_q_number", category_q_number);
      formData.append("user_id", uid);
      formData.append("year", year);
      formData.append("type", type);
      const url = this.apiPath + "user/uploadFileCategory0.php";
      let data = await Axios.post(url, formData);
    },
    deleteFile(type, q_number, category, category_q_number) {
      let postData = {
        type: type,
        q_number: q_number,
        category: category,
        category_q_number: category_q_number
      };
      this.temp = postData;
      this.isDelete = true;

      // this.confirmDeleteFile(postData);
    },
    openFile(type, q_number, category, category_q_number) {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      if (category == "ก.") {
        category = "a";
      } else if (category == "ข.") {
        category = "b";
      } else {
        category = "c";
      }
      let r = Math.random()
        .toString(36)
        .substring(7);
      let fileName;
      if (type == "pdf") {
        fileName = `${uid}-${q_number}-${category}-${category_q_number}-${year}.pdf?${r}`;
      } else {
        fileName = `${uid}-${q_number}-${category}-${category_q_number}-${year}.jpg?${r}`;
      }
      let link = this.apiPath + "uploadcategory0/" + fileName;
      window.open(link);
    }
  },
  computed: {
    checkEnvironment() {
      let environmentCount = 0;

      if (this.inputEnvironment1) {
        environmentCount++;
      }

      if (this.inputEnvironment2) {
        environmentCount++;
      }

      if (this.inputEnvironment3) {
        environmentCount++;
      }

      if (this.inputEnvironment4) {
        environmentCount++;
      }

      if (this.inputEnvironment5) {
        environmentCount++;
      }

      if (environmentCount > 0 && environmentCount < 5) {
        this.status = "doing";
      } else if (environmentCount == 5) {
        this.status = "success";
      }

      // this.$emit("statusForm", this.status);

      return environmentCount;
    },

    checkRelation() {
      let relationCount = 0;

      if (this.inputRelation1) {
        relationCount++;
      }

      if (this.inputRelation2) {
        relationCount++;
      }

      if (this.inputRelation3) {
        relationCount++;
      }

      if (relationCount > 0 && relationCount < 5) {
        this.status = "doing";
      } else if (relationCount == 5) {
        this.status = "success";
      }

      // this.$emit("statusForm", this.status);

      return relationCount;
    },

    checkCompetition() {
      let competitionCount = 0;

      if (this.inputCompetitionEnvironment1) {
        competitionCount++;
      }

      if (this.inputCompetitionEnvironment2) {
        competitionCount++;
      }

      if (this.inputCompetitionEnvironment3) {
        competitionCount++;
      }

      if (competitionCount > 0 && competitionCount < 5) {
        this.status = "doing";
      } else if (competitionCount == 5) {
        this.status = "success";
      }

      // this.$emit("statusForm", this.status);

      return competitionCount;
    },

    checkStategy() {
      let stategyCount = 0;

      if (this.inputStategy) {
        stategyCount++;
      }

      if (stategyCount > 0 && stategyCount < 5) {
        this.status = "doing";
      } else if (stategyCount == 5) {
        this.status = "success";
      }

      // this.$emit("statusForm", this.status);

      return stategyCount;
    },

    checkPerformance() {
      let performanceCount = 0;

      if (this.inputPerformanceSystem) {
        performanceCount++;
      }

      if (performanceCount > 0 && performanceCount < 5) {
        this.status = "doing";
      } else if (performanceCount == 5) {
        this.status = "success";
      }
      return performanceCount;
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped></style>
