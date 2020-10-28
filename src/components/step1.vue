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
                <span class="q-ml-sm q-mr-md">
                  {{ `เสร็จสิ้น ${checkEnvironment}/5` }}</span
                >
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
                <span class="q-ml-sm q-mr-md">
                  {{ `เสร็จสิ้น ${checkRelation}/3` }}</span
                >
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
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
          <!-- Relation Content -->
        </div>
      </div>
      <!-- End BOX 2 -->

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
                <span class="q-ml-sm q-mr-md">
                  {{ `เสร็จสิ้น ${checkCompetition}/3` }}</span
                >
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
                <span class="q-ml-sm q-mr-md">
                  {{ `เสร็จสิ้น ${checkStategy}/1` }}</span
                >
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
                <span class="q-ml-sm q-mr-md">
                  {{ `เสร็จสิ้น ${checkPerformance}/1` }}</span
                >
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
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      // Emit Data Status
      status: "none",

      // Environment
      environmentCount: 0,
      isEnvironmentDialog1: false,
      inputEnvironment1: "",

      isEnvironmentDialog2: false,
      inputEnvironment2: "",

      isEnvironmentDialog3: false,
      inputEnvironment3: "",

      isEnvironmentDialog4: false,
      inputEnvironment4: "",

      isEnvironmentDialog5: false,
      inputEnvironment5: "",

      // Relation
      isRelationDialog1: false,
      inputRelation1: "",

      isRelationDialog2: false,
      inputRelation2: "",

      isRelationDialog3: false,
      inputRelation3: "",

      // Competition Environment
      isCompetitionEnvironmentDialog1: false,
      inputCompetitionEnvironment1: "",

      isCompetitionEnvironmentDialog2: false,
      inputCompetitionEnvironment2: "",

      isCompetitionEnvironmentDialog3: false,
      inputCompetitionEnvironment3: "",

      // Stategy
      isStategyDialog: false,
      inputStategy: "",

      // Performance improvement system
      isPerformanceSystemDialog: false,
      inputPerformanceSystem: "",

      // Save Data
      isSaveData: false
    };
  },
  methods: {
    async getData() {
      this.loadingShow()
      const url = this.apiPath + "user/getCategory0.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y")
      };
      let data = await Axios.post(url, postData);
      let getData = data.data;

      // ข้อ 1 ก 1
      this.inputEnvironment1 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ก." && x.category_q_number == "1"
      )[0].text;
      // ข้อ1 ก2
      this.inputEnvironment2 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ก." && x.category_q_number == "2"
      )[0].text;
      // ข้อ1 ก3
      this.inputEnvironment3 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ก." && x.category_q_number == "3"
      )[0].text;
      // ข้อ1 ก4
      this.inputEnvironment4 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ก." && x.category_q_number == "4"
      )[0].text;
      // ข้อ1 ก5
      this.inputEnvironment5 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ก." && x.category_q_number == "5"
      )[0].text;
      // ข้อ1 ข1
      this.inputRelation1 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ข." && x.category_q_number == "1"
      )[0].text;
      // ข้อ1 ข2
      this.inputRelation2 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ข." && x.category_q_number == "2"
      )[0].text;
      // ข้อ1 ข3
      this.inputRelation3 = getData.filter(
        x =>
          x.q_number == "1" && x.category == "ข." && x.category_q_number == "3"
      )[0].text;

      // ข้อ2 ก1
      this.inputCompetitionEnvironment1 = getData.filter(
        x =>
          x.q_number == "2" && x.category == "ก." && x.category_q_number == "1"
      )[0].text;
      // ข้อ2 ก2
      this.inputCompetitionEnvironment2 = getData.filter(
        x =>
          x.q_number == "2" && x.category == "ก." && x.category_q_number == "2"
      )[0].text;
      // ข้อ2 ก3
      this.inputCompetitionEnvironment3 = getData.filter(
        x =>
          x.q_number == "2" && x.category == "ก." && x.category_q_number == "3"
      )[0].text;
      // ข้อ2 ข1
      this.inputStategy = getData.filter(
        x =>
          x.q_number == "2" && x.category == "ข." && x.category_q_number == "1"
      )[0].text;
      // ข้อ2 ค1
      this.inputPerformanceSystem = getData.filter(
        x =>
          x.q_number == "2" && x.category == "ค." && x.category_q_number == "1"
      )[0].text;
      this.loadingHide()
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
        console.log('finish all');
        // FINISH ALL
        let postData = {
          category: "category0",
          user_id: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          status: 1 // 1 = finish
        };
        let data = await Axios.post(url, postData);
        console.log(data);
      } else if (
        this.checkEnvironment >= 1 ||
        this.checkRelation >= 1 ||
        this.checkCompetition >= 1 ||
        this.checkStategy >= 1 ||
        this.checkPerformance >= 1
      ) {
        console.log("finish some");
        let postData = {
          category: "category0",
          user_id: this.$q.sessionStorage.getItem("uid"),
          year: this.$q.sessionStorage.getItem("y"),
          status: 2 // 1 = not finish all
        };
        let data = await Axios.post(url, postData);
                console.log(data);
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
          text: this.inputEnvironment1
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 2,
          text: this.inputEnvironment2
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 3,
          text: this.inputEnvironment3
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 4,
          text: this.inputEnvironment4
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ก.",
          category_q_number: 5,
          text: this.inputEnvironment5
        },
        // หมวด ข
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 1,
          text: this.inputRelation1
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 2,
          text: this.inputRelation2
        },
        {
          q_number: 1,
          user_id: uid,
          category: "ข.",
          category_q_number: 3,
          text: this.inputRelation3
        },
        // เริ่มข้อ2 หมวด ก.
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 1,
          text: this.inputCompetitionEnvironment1
        },
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 2,
          text: this.inputCompetitionEnvironment2
        },
        {
          q_number: 2,
          user_id: uid,
          category: "ก.",
          category_q_number: 3,
          text: this.inputCompetitionEnvironment3
        },
        // เริ่มข้อ2 หมวด ข.
        {
          q_number: 2,
          user_id: uid,
          category: "ข.",
          category_q_number: 1,
          text: this.inputStategy
        },
        // เริ่มข้อ2 หมวด ค.
        {
          q_number: 2,
          user_id: uid,
          category: "ค.",
          category_q_number: 1,
          text: this.inputPerformanceSystem
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
      }, 1000);
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
