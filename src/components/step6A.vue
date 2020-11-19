<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 5 การมุ่งเน้นบุคลากร</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep6"
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
                  <span>{{ item.header }}</span>
                </div>
                <q-space></q-space>
                <div class="col-3 self-center q-px-xl " style="width:250px;">
                  <div
                    style="width:180px;"
                    :class="{
                      'border-green': item.a_score != '-1',
                      'border-grey': item.a_score == '-1'
                    }"
                    align="center"
                  >
                    {{ item.score }} /
                    <span v-if="item.a_score != '-1'">{{ item.a_score }} </span>
                    <span v-else>-</span>
                  </div>
                </div>
              </div>
            </template>

            <q-card>
              <q-separator class="bg-grey-7" style="height: 1px;"></q-separator>

              <div class="basic">
                <!-- Basic -->
                <div class="row q-pa-sm" style="background-color:#E5E5E5">
                  <div class="col-3" align="center">
                    ระดับดำเนินการ
                  </div>
                  <div class="col-6" align="center">
                    แนวทางดำเนินการ
                  </div>
                  <div class="col-3" align="center">
                    ผลการประเมิน
                  </div>
                </div>
                <div class="row">
                  <!-- ระดับดำเนินการ -->
                  <div
                    class="col-3 relative-position"
                    style="border-right:1px solid #e0e0e0"
                  >
                    <div class="q-pa-md font-18 q-mb-sm">
                      <div class="row items-center">
                        <div
                          style="border:1px solid black;border-radius:5px;width:130px"
                          align="center"
                          class="text-teal "
                        >
                          Basic
                        </div>
                      </div>

                      <div class="q-mt-md">
                        <span v-html="item.basic.titleText"></span>
                      </div>
                    </div>

                    <div
                      class="absolute-bottom"
                      v-if="item.basic.pdf_file != null"
                      style="bottom:10px"
                      align="center"
                    >
                      <q-btn
                        style="width:250px"
                        color="teal"
                        icon="fas fa-file-pdf"
                        label="PDF"
                        @click="getPDF(item.no, 'basic')"
                      ></q-btn>
                    </div>
                  </div>
                  <!-- checkbox -->
                  <div class="col-6" style="border-right:1px solid #e0e0e0">
                    <div class="q-pa-sm font-18 row fit">
                      <div class="q-mt-sm row col-12">
                        <div
                          class="row"
                          v-for="(checkbox, index3) in item.basic.checkBox"
                          :class="index3 != 0 ? 'q-mt-md' : null"
                        >
                          <div
                            class="col-1 relative-position "
                            style="width:50px;"
                            align="center"
                          >
                            <q-checkbox
                              color="teal"
                              keep-color=""
                              v-model="checkbox.status"
                              value
                              disable=""
                              class="absolute"
                              style="left:15px"
                            />
                            <q-checkbox
                              color="pink-4"
                              keep-color=""
                              v-model="data[index].basic.checkBox_a[index3]"
                              value
                              class="absolute"
                              style="left:-15px"
                            />
                          </div>
                          <div
                            class="col  q-py-xs"
                            v-html="checkbox.text"
                          ></div>
                        </div>
                      </div>
                      <div
                        class="q-pa-md col self-end"
                        style="border:1px solid #9E9E9E;border-radius:5px;margin-top:20px;font-size:14px;max-height:150px;min-height:100px;overflow:auto"
                        v-html="item.basic.explain"
                      ></div>
                    </div>
                  </div>
                  <!-- ข้อเสนอแนะ -->
                  <div class="col-3 q-px-md ">
                    <div class="q-my-md q-pt-sm ">
                      <q-input
                        v-model="item.basic.suggesstion"
                        outlined=""
                        placeholder="ข้อเสนอแนะ"
                        type="textarea"
                        input-style="height:300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <q-separator></q-separator>
              <div class="advance">
                <!-- Advance -->

                <div class="row">
                  <!-- ระดับดำเนินการ -->
                  <div
                    class="col-3 relative-position"
                    style="border-right:1px solid #e0e0e0"
                  >
                    <div class="q-pa-md font-18 q-mb-sm">
                      <div class="row items-center">
                        <div
                          style="border:1px solid black;border-radius:5px;width:130px"
                          align="center"
                          class="text-teal "
                        >
                          Advance
                        </div>
                      </div>

                      <div class="q-mt-md">
                        <span v-html="item.advance.titleText"></span>
                      </div>
                    </div>

                    <div
                      class="absolute-bottom"
                      v-if="item.advance.pdf_file != null"
                      style="bottom:10px"
                      align="center"
                    >
                      <q-btn
                        style="width:250px"
                        color="teal"
                        icon="fas fa-file-pdf"
                        label="PDF"
                        @click="getPDF(item.no, 'advance')"
                      ></q-btn>
                    </div>
                  </div>
                  <!-- checkbox -->
                  <div class="col-6" style="border-right:1px solid #e0e0e0">
                    <div class="q-pa-sm font-18 row  fit">
                      <div class="q-mt-sm col-12">
                        <div
                          class="row"
                          v-for="(checkbox, index3) in item.advance.checkBox"
                          :class="index3 != 0 ? 'q-mt-md' : null"
                        >
                          <div
                            class="col-1 relative-position "
                            style="width:50px;"
                            align="center"
                          >
                            <q-checkbox
                              color="teal"
                              keep-color=""
                              v-model="checkbox.status"
                              value
                              disable=""
                              class="absolute"
                              style="left:15px"
                            />
                            <q-checkbox
                              color="pink-4"
                              keep-color=""
                              v-model="data[index].advance.checkBox_a[index3]"
                              value
                              class="absolute"
                              style="left:-15px"
                            />
                          </div>
                          <div
                            class="col  q-py-xs"
                            v-html="checkbox.text"
                          ></div>
                        </div>
                      </div>
                      <div
                        class="q-pa-md col self-end"
                        style="border:1px solid #9E9E9E;border-radius:5px;margin-top:20px;font-size:14px;max-height:150px;min-height:100px;overflow:auto"
                        v-html="item.advance.explain"
                      ></div>
                    </div>
                  </div>
                  <!-- ข้อเสนอแนะ -->
                  <div class="col-3 q-px-md">
                    <div class="q-my-md ">
                      <q-input
                        v-model="item.advance.suggesstion"
                        outlined=""
                        placeholder="ข้อเสนอแนะ"
                        type="textarea"
                        input-style="height:300px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <q-separator></q-separator>
              <div class="Significance">
                <!-- Significance -->

                <div class="row">
                  <!-- ระดับดำเนินการ -->
                  <div
                    class="col-3 relative-position"
                    style="border-right:1px solid #e0e0e0"
                  >
                    <div class="q-pa-md font-18 q-mb-sm ">
                      <div class="row items-center ">
                        <div
                          style="border:1px solid black;border-radius:5px;width:130px"
                          align="center"
                          class="text-teal "
                        >
                          Significance
                        </div>
                      </div>

                      <div class="q-mt-md">
                        <span v-html="item.significance.titleText"></span>
                      </div>
                    </div>

                    <div
                      class="absolute-bottom"
                      v-if="item.significance.pdf_file != null"
                      style="bottom:10px"
                      align="center"
                    >
                      <q-btn
                        style="width:250px"
                        color="teal"
                        icon="fas fa-file-pdf"
                        label="PDF"
                        @click="getPDF(item.no, 'significance')"
                      ></q-btn>
                    </div>
                  </div>
                  <!-- checkbox -->
                  <div class="col-6" style="border-right:1px solid #e0e0e0">
                    <div class="q-pa-sm font-18 row fit">
                      <div class="q-mt-sm col-12">
                        <div
                          class="row"
                          v-for="(checkbox, index3) in item.significance
                            .checkBox"
                          :class="index3 != 0 ? 'q-mt-md' : null"
                        >
                          <div
                            class="col-1 relative-position "
                            style="width:50px;"
                            align="center"
                          >
                            <q-checkbox
                              color="teal"
                              keep-color=""
                              v-model="checkbox.status"
                              value
                              disable=""
                              class="absolute"
                              style="left:15px"
                            />
                            <q-checkbox
                              color="pink-4"
                              keep-color=""
                              v-model="
                                data[index].significance.checkBox_a[index3]
                              "
                              value
                              class="absolute"
                              style="left:-15px"
                            />
                          </div>
                          <div
                            class="col  q-py-xs"
                            v-html="checkbox.text"
                          ></div>
                        </div>
                      </div>
                      <div
                        class="q-pa-md col self-end"
                        style="border:1px solid #9E9E9E;border-radius:5px;margin-top:20px;font-size:14px;max-height:150px;min-height:100px;overflow:auto"
                        v-html="item.significance.explain"
                      ></div>
                    </div>
                  </div>
                  <!-- ข้อเสนอแนะ -->
                  <div class="col-3 q-px-md ">
                    <div class="q-my-md">
                      <q-input
                        v-model="item.significance.suggesstion"
                        outlined=""
                        placeholder="ข้อเสนอแนะ"
                        type="textarea"
                        input-style="height:300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <q-separator></q-separator>
              <q-card-actions align="center">
                <q-btn
                  @click="saveData(item.no)"
                  color="teal"
                  style="width:180px"
                  class="font-18"
                  label="บันทึก"
                ></q-btn>
              </q-card-actions>
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
      // restructure
      data: [
        {
          score: 0,
          a_score: -1,
          header: `5.1 นโยบายและระบบการจัดการด้านบุคลากรที่มีประสิทธิภาพ ตอบสนองยุทธศาสตร์ และสร้างแรงจูงใจ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 5.1 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- ระบบการสรรหา ว่าจ้างบรรจุ และการจัดวางคนไปยังตำแหน่งงานที่ตรงกับความถนัดและความต้องการเพื่อประโยชน์สูงสุดของระบบงาน ของราชการ โดยคำนึงถึงความต้องการที่หลากหลายของประชาชน`,
            checkBox: [
              {
                text: `ระบบการสรรหา ว่าจ้าง บรรจุมีประสิทธิภาพ โปร่งใสและเหมาะสม`,
                status: false
              },
              {
                text: `การจัดโครงสร้างการทำงานและการจัดวางบุคลากรไปอยู่ตำแหน่ง
ที่เหมาะสมกับการใช้ความรู้และประสบการณ์ อย่างเต็มความสามารถก่อให้เกิดประโยชน์สูงที่สุดต่อองค์การและตอบโจทย์ ความต้องการของประชาชน`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.1 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การประเมินประสิทธิผลการทำงานและเส้นทางความก้าวหน้าของ บุคลากรทุกกลุ่มสามารถสร้างแรงจูงใจให้บุคลากรทุ่มเท และทำงานให้มีประสิทธิภาพสูงตอบสนองยุทธศาสตร์และมุ่งเน้นประโยชน์สุขแก่ ประชาชน (High Performance)`,
            checkBox: [
              {
                text: `ระบบการประเมินประสิทธิผลการทำงานของบุคลากรทุกกลุ่ม มีความชัดเจน โปร่งใส
`,
                status: false
              },
              {
                text: `เปิดโอกาสให้บุคลากรทุกคนสามารถวางแผนเส้นทางความก้าวหน้าของตนเองและพัฒนาความสามารถของตนในระยะยาว`,
                status: false
              },
              {
                text: `กลไกในการกระตุ้นให้บุคลากรเกิดแรงจูงใจ และมีการทำงานที่มีประสิทธิภาพสูง`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.1 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- นโยบายการจัดการด้านบุคลากรสนับสนุนการทำงานที่มีความคล่องตัวและปรับเปลี่ยนให้ทันต่อการเปลี่ยนแปลงของสภาพแวดล้อมการทำงาน`,
            checkBox: [
              {
                text: `การบูรณาการงานบริหารบุคลากรกับการปรับปรุงการทำงานของทุกๆกระบวนงาน ให้เกิดการทำงานที่มีประสิทธิภาพสูง`,
                status: false
              },
              {
                text: `นโยบายด้านการส่งเสริมให้เกิดการสร้างนวัตกรรมและการทำงานเป็นทีม`,
                status: false
              },
              {
                text: `การจัดการด้านบุคลากรเพื่อให้เกิดความคล่องตัวในการประสานงานในแนวระนาบกับหน่วยอื่นๆ`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************************************************************
        {
          score: 0,
          a_score: -1,
          header:
            "5.2 ระบบการทำงานที่มีประสิทธิภาพ คล่องตัว และมุ่งเน้นผลสัมฤทธิ์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 5.2 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `สภาพแวดล้อมในการทำงานที่
  <br>- ปลอดภัย
  <br>- สนับสนุนการทำงานที่มีประสิทธิภาพ
  <br>- คล่องตัว
 <br>- ร่วมกันทำงานให้เกิดประสิทธิผล
`,
            checkBox: [
              {
                text: `ปลอดภัย`,
                status: false
              },
              {
                text: `มีประสิทธิภาพ`,
                status: false
              },
              {
                text: `เป็นไปตามกรอบของกฏหมาย`,
                status: false
              },
              {
                text: `คล่องตัวและร่วมกันทำงานให้เกิดประสิทธิผล`,
                status: false
              }
            ],
            checkBox_a: [false, false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.2 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- สภาพแวดล้อมที่เอื้อให้บุคลากรมีความรับผิดชอบ (Empower) กล้า ตัดสินใจเข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหาเพื่อบรรลุแผนงานหลักขององค์การ`,
            checkBox: [
              {
                text: `มีความรับผิดชอบ`,
                status: false
              },
              {
                text: `กล้าตัดสินใจ`,
                status: false
              },
              {
                text: `เข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหา`,
                status: false
              },
              {
                text: `มีการพัฒนาระบบฐานข้อมูลให้พร้อมสนับสนุนการทำงานอย่างมีประสิทธิภาพ`,
                status: false
              }
            ],
            checkBox_a: [false, false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.2 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การทำงานที่เป็นทีมที่มีสมรรถะสูง มีความคล่องตัวและสามารถทำงานร่วมกับเครือข่ายภายนอก เพื่อนำไปสู่แก้ไขปัญหาที่ซับซ้อนอย่างมีประสิทธิผล`,
            checkBox: [
              {
                text: `มีการทำงานเป็นทีมภายในองค์การ`,
                status: false
              },
              {
                text: `มีกระบวนการสร้างความร่วมือกับเครือข่ายภาคประชาชนและเอกชนภานนอกในลักษณะของทีมสหสาขา (Trans-disciplinary) เพื่อร่วมกันแก้ปัญหา`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************5.3 *******************************************
        {
          score: 0,
          a_score: -1,
          header: `5.3 การสร้างวัฒนธรรมการทำงานที่ดี มีประสิทธิภาพ และความร่วมมือ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 2.3 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ เปิดโอกาสในการนำเสนอความริเริ่มและสนับสนุนความคิดสร้างสรรค์`,
            checkBox: [
              {
                text: `การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ คือ มีความรอบรู้ เชี่ยวชาญ และถูกต้องตามมาตรฐาน`,
                status: false
              },
              {
                text: `เปิดโอกาสในการนำเสนอความคิดริเริ่มและสนับสนุนความคิดสร้างสรรค์`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.3 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การค้นหาปัจจัยที่ทำให้บุคลากรมีความผูกพัน ทุ่มเทมีผลการปฏิบัติงานที่ดีและสร้างวัฒนธรรมการทำงานที่นำไปสู่ผลลัพธ์ขององค์การ
`,
            checkBox: [
              {
                text: `การค้นหาปัจจัยที่ส่งผลต่อความผูกพัน การทุ่มเท และผลการปฏิบัติงานที่ดีของบุคลากร`,
                status: false
              },
              {
                text: `มีการวิเคราะห์ความสัมพันธ์ระหว่างปัจจัยที่สร้างความผูกพันกับผลลัพธ์ขององค์การ`,
                status: false
              },
              {
                text: `นำปัจจัยดังกล่าวมาใช้ในการสร้างให้บุคลากรเกิดแรงจูงใจ เพื่อให้เกิดผลการปฏิบัติงานที่ดี`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.3 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การสร้างวัฒนธรรมการทำงานที่มีประสิทธิภาพสูง สร้างความภูมิใจ และความเป็นเจ้าของ ให้แก่บุคลากร (Public Entrepreneurship) และร่วมมือเพื่อนำพาองค์การไปสู่ความสำเร็จ และประโยชน์ที่เกิด กับสังคมและประชาชน`,
            checkBox: [
              {
                text: `สร้างวัฒนธรรมการทำงานที่มุ่งเน้นความคล่องตัวและการมีประสิทธิภาพสูง`,
                status: false
              },
              {
                text: `ส่งเสริมการแก้ปัญหาเชิงรุก`,
                status: false
              },
              {
                text: `สร้างแนวคิดของการเป็นผู้ประกอบการภาครัฐ โดยมุ่งเน้น ประโยชน์ของส่วนรวม ผู้รับบริการหรือผุ้มีส่วนได้ส่วนเสีย เป็นหลัก`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 5.4 *****************************
        {
          score: 0,
          a_score: -1,
          header: `5.4 ระบบการพัฒนาบุคลากรให้มีความรู้ ความสามารถ ก้าวทันเทคโนโลยีแก้ไขปัญหาสร้างความรอบรู้ และความมีจริยธรรม`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 4.4 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `ระบบการพัฒนาบุคลากรที่สร้างคนให้มี
  <br>- คุณธรรม จริยธรรม
  <br>- มีความรู้และทักษะในการแก้ปัญหา
  <br>- ทักษะด้านดิจิทัล และความรอบรู้ให้ทันต่อการเปลี่ยนแปลง
`,
            checkBox: [
              {
                text: `ความรู้ความสามารถในการทำงานและการแก้ปัญหา`,
                status: false
              },
              {
                text: `คุณธรรม และจริยธรรม`,
                status: false
              },
              {
                text: `ความรู้และทักษะด้านดิจิทัล`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.4 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- ระบบการพัฒนาบุคลากรเพื่อเพิ่มพูน สั่งสมทักษะความรู้ความ เชี่ยวชาญในด้านต่างๆที่มีความสำคัญต่อสมรรถะหลักและการบรรลุเป้าหมายยุทธศาสตร์ของส่วนราชการ`,
            checkBox: [
              {
                text: `แผนพัฒนาบุคลากรที่ตอบสนองยุทธศาสตร์
`,
                status: false
              },
              {
                text: `แผนพัฒนาบุคลากรที่ตอบสนองการสร้างสมรรถนะหลักขององค์การทั้งทักษะความรู้ และความเชี่ยวชาญเฉพาะด้าน`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.4 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- ระบบการพัฒนาบุคลากรและผู้นำให้มีทักษะที่สามารถปฏิบัติงานได้ หลากหลายมีความรอบรู้ สามารถตัดสินใจและมีความคิดในเชิงวิกฤติ พร้อมรับปัญหาที่มีความซับซ้อนมากยิ่งขึ้น (Fluid Intelligence / Complex Problem Solving)`,
            checkBox: [
              {
                text: `การพัฒนาบุคลากรให้มีทักษะและสามารถปฏิบัติงานได้หลากหลาย`,
                status: false
              },
              {
                text: `การพัฒนาบุคลากรและผู้นำให้มีความรอบรู้ เป็นนักคิด มีความสามารถในการตัดสินใจ มีความคิดเชิงวิกฤต (Critical Thinking) ที่จะพร้อมรับกับปัญหาที่มีความซับซ้อน`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        }
      ],

      typeFile: "",
      typeNo: "",
      typeMode: "",
      isDelete: false,
      assessmentData: "",
      isLoadAssessmentFinish: true,
      // Save Data
      isSaveData: false,
      tabs: ["Basic", "Basic", "Basic", "Basic"],
      assessmentLog: ""
    };
  },
  methods: {
    saveAssessment(no) {
      console.log(no);
    },
    deleteFile(no, mode) {
      if (this.typeFile == "PDF") {
        this.data[this.typeNo - 1][this.typeMode].pdf_file = null;
      } else {
        this.data[this.typeNo - 1][this.typeMode].img_file = null;
      }
      this.saveData(no, mode);
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

    async checkPassStatus() {
      let status = 0;
      let mapStatus = this.data.map(x => x.status);
      if (!mapStatus.includes(-1)) {
        // ประเมินครบแล้วทุกข้อ
        status = 1;
      } else if (mapStatus.every(x => x == -1)) {
        // ยังไม่เคยทำสักข้อ
        status = 0;
      } else {
        // ทำแล้วบางข้อ
        status = 2;
      }

      const url = this.apiPath + "user/setUserStepperLog.php";
      let postData = {
        category: "category1",
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
        status: status // 1 = finish
      };
      let data = await Axios.post(url, postData);
      this.$emit("statusForm");
    },

    async saveData(no) {
      console.clear();

      let index = no - 1;
      let score = 0;
      const url = this.apiPath + "updateScoreAssessment.php";
      const userId = this.$q.sessionStorage.getItem("aid");
      const year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();

      let basicCheckbox = this.data[index].basic.checkBox_a.map(x =>
        x == true ? 1 : 0
      );

      let advanceCheckbox = this.data[index].advance.checkBox_a.map(x =>
        x == true ? 1 : 0
      );
      let signiCheckbox = this.data[index].significance.checkBox_a.map(x =>
        x == true ? 1 : 0
      );

      // Basic
      let scorePerCheckboxBasic = 300 / basicCheckbox.length;
      let scoreBasic = basicCheckbox.filter(x => x == 1);
      scoreBasic = scorePerCheckboxBasic * scoreBasic.length;

      // advance
      let scorePerCheckboxAdvance = 100 / advanceCheckbox.length;
      let scoreAdvance = advanceCheckbox.filter(x => x == 1);
      scoreAdvance = scorePerCheckboxAdvance * scoreAdvance.length;
      // signi
      let scorePerCheckboxSigni = 100 / signiCheckbox.length;
      let scoreSigni = signiCheckbox.filter(x => x == 1);
      scoreSigni = scorePerCheckboxSigni * scoreSigni.length;

      score += scoreBasic;

      if (basicCheckbox.every(x => x == 1)) {
        score += scoreAdvance;
      }
      if (
        advanceCheckbox.every(x => x == 1) &&
        basicCheckbox.every(x => x == 1)
      ) {
        score += scoreSigni;
      }
      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("year", year);
      formData.append("step", 5);
      formData.append("a_score", score);
      formData.append("suggesstion_basic", this.data[index].basic.suggesstion);
      formData.append(
        "suggesstion_advance",
        this.data[index].advance.suggesstion
      );
      formData.append(
        "suggesstion_significance",
        this.data[index].significance.suggesstion
      );
      formData.append("basic_checkbox", basicCheckbox.join());
      formData.append("advance_checkbox", advanceCheckbox.join());
      formData.append("significance_checkbox", signiCheckbox.join());
      formData.append("category", "a_category5_score");
      let data = await Axios.post(url, formData);
      this.data[index].a_score = score;
    },
    getBasic(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "basic");
        if (getData.length > 0) {
          if (getData[0].text != "undefined") {
            this.data[i - 1].basic.explain = getData[0].text;
          } else {
            this.data[i - 1].basic.explain = "";
          }
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));
          this.data[i - 1].status = 0;
          if (!checkBox.includes(false)) {
            this.data[i - 1].status = 1;
          }

          for (let j = 0; j < checkBox.length; j++) {
            this.data[i - 1].basic.checkBox[j].status = checkBox[j];
          }

          this.data[i - 1].score = getData[0].score;
          this.data[i - 1].a_score = getData[0].a_score;

          if (getData[0].a_check_box) {
            this.data[i - 1].basic.checkBox_a = getData[0].a_check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }

          this.data[i - 1].basic.suggesstion = getData[0].suggesstion;

          this.data[i - 1].basic.pdf_file =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      }
    },
    getAdvance(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(x => x.q_number == i && x.mode == "advance");
        let getDataBasic = data.filter(
          x => x.q_number == i && x.mode == "basic"
        );

        if (getData.length > 0) {
          this.data[i - 1].status = 0;
          this.data[i - 1].advance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));
          let checkBoxBasic = this.data[i - 1].basic.checkBox.map(
            x => x.status
          );

          if (getDataBasic.length) {
            checkBoxBasic = getDataBasic[0].check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }

          if (!checkBox.includes(false) && !checkBoxBasic.includes(false)) {
            // ผ่าน advance
            this.data[i - 1].status = 2;
          }

          for (let j = 0; j < checkBox.length; j++) {
            this.data[i - 1].advance.checkBox[j].status = checkBox[j];
          }

          if (getData[0].a_check_box) {
            this.data[i - 1].advance.checkBox_a = getData[0].a_check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }

          this.data[i - 1].advance.suggesstion = getData[0].suggesstion;

          this.data[i - 1].advance.pdf_file =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      }
    },
    getSignificance(data) {
      for (let i = 1; i <= 4; i++) {
        let getData = data.filter(
          x => x.q_number == i && x.mode == "significance"
        );
        let getDataBasic = data.filter(
          x => x.q_number == i && x.mode == "basic"
        );
        let getDataAdvance = data.filter(
          x => x.q_number == i && x.mode == "advance"
        );

        if (getData.length > 0) {
          this.data[i - 1].status = 0;
          this.data[i - 1].significance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

          let checkBoxBasic = this.data[i - 1].basic.checkBox.map(
            x => x.status
          );
          if (getDataBasic.length) {
            checkBoxBasic = getDataBasic[0].check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }
          let checkBoxAdvance = this.data[i - 1].advance.checkBox.map(
            x => x.status
          );
          if (getDataAdvance.length) {
            checkBoxAdvance = getDataAdvance[0].check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }

          if (
            !checkBox.includes(false) &&
            !checkBoxBasic.includes(false) &&
            !checkBoxAdvance.includes(false)
          ) {
            this.data[i - 1].status = 3;
          }

          for (let j = 0; j < checkBox.length; j++) {
            this.data[i - 1].significance.checkBox[j].status = checkBox[j];
          }

          if (getData[0].a_check_box) {
            this.data[
              i - 1
            ].significance.checkBox_a = getData[0].a_check_box
              .split(",")
              .map(x => (x == 1 ? true : false));
          }

          this.data[i - 1].significance.suggesstion = getData[0].suggesstion;

          this.data[i - 1].significance.pdf_file =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      }
    },

    async getAssessmentData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory1_6.php";
      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("aid"),
        step: 5
      };
      let data = await Axios.post(url, postData);
      this.assessmentData = data.data;
      if (data.data) {
        this.getBasic(data.data);
        this.getAdvance(data.data);
        this.getSignificance(data.data);
      }

      this.isLoadAssessmentFinish = true;
      this.loadingHide();
    },
    async getAssessmentLog() {
      let postData = {
        year: this.$q.sessionStorage.getItem("y")
      };
      const url = this.apiPath + "getAssessmentLog.php";

      let data = await Axios.post(url, postData);

      this.assessmentLog = data.data.filter(
        x => x.user_id == this.$q.sessionStorage.getItem("aid")
      )[0];

      this.loadingHide();
    },

    getPDF(no, mode) {
      let random = Math.random()
        .toString(36)
        .substring(7);
      let pdfFileName = `${this.$q.sessionStorage.getItem(
        "aid"
      )}-5-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

      window.open(
        "https://api.winner-english.com/pmqa4_0_api/upload/" +
          pdfFileName +
          "?" +
          random
      );
    }
  },

  created() {
    this.getAssessmentData();
    this.getAssessmentLog();
  }
};
</script>

<style lang="scss" scoped>
.border-green {
  border: 2px solid teal;
}
.border-grey {
  border: 2px solid #e5e5e5;
}
</style>
