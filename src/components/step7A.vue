<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 6 การมุ่งเน้นระบบปฏิบัติการ</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep7"
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
          header:
            "6.1 กระบวนการทำงานที่เชื่อมโยงตั้งแต่ต้นจนจบกระบวนการ เพื่อนำไปสู่ผลลัพธ์ที่ต้องการ",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 1.1 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การออกแบบกระบวนการทำงานให้มีการเชื่อมโยงตั้งแต่ต้นจนจบ (End-to-end process design) เพื่อส่งมอบผลลัพธ์ที่มีคุณค่าแก่ ประชาชนรวมถึงประสานการทำงานที่ข้ามส่วนราชการ (Cross-boundary process) เพื่อให้เกิดประสิทธิผลสูงสุด`,
            checkBox: [
              {
                text: `แนวคิดการออกแบบกระบวนการทำงานที่เชื่อมโยงตั้งแต่ต้นจน (End-to-end process design)เพื่อให้เกิดผลลัพธ์ที่มีคุณค่าแก่ประชาชน และไม่เกิดผลกระทบเชิงลบต่อสิ่งแวดล้อม`,
                status: false
              },
              {
                text: `การประสานงานในกระบวนการที่ต้องผ่านหลายส่วนราชการ เพื่อให้เกิดประสิทธิผล`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- มีการติดตามควบคุมกระบวนการโดยใช้ตัวชี้วัดและใช้ประโยชน์จากเทคโนโลยีดิจิทัลที่ทันสมัยและข้อมูลร่วมกับเครือข่ายภายนอกเพื่อการ ทำงานที่เกิดประสิทธิผล`,
            checkBox: [
              {
                text: `การติดตามควมคุมกระบวนการโดยใช้ตัวชี้วัดและใช้ประโยชน์จากเทคโนโลยีที่ทันสมัย`,
                status: false
              },
              {
                text: `การติดตามควบคุมกระบวนการโดยการใช้ข้อมูลร่วมกับเครือข่าย จากภายนอก`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การใช้เทคโนโลยีดิจิทัลในการจัดการกระบวนการและการติดตามรายงานผลอย่างรวดเร็ว ฉับไว และตอบสนองการบูรณาการที่มุ่งสู่ความเป็นเลิศ (Operational excellence)`,
            checkBox: [
              {
                text: `การใช้เทคโนโลยีดิจิทัลในการจัดการกระบวนการและการติดตาม รายงานผลอย่างรวดเร็ว`,
                status: false
              },
              {
                text: `การวิเคราะห์อุปสรรคปัญหาที่เกิดขึ้น หรือการใช้ข้อมูลเทียบเคียง(Benchmarks) ผลการดำเนินงานเพื่อออกแบบกระบวนการทำงานให้ตอบสนองการบูรณาการที่มุ่งสู่ความเป็นเลิศ`,
                status: false
              }
            ],
            checkBox_a: [false, false],
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
            "6.2 การสร้างนวัตกรรมในการ ปรับปรุงผลผลิต กระบวนการ และการบริการ",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 1.2 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การบริหารจัดการกระบวนการอย่างเป็นระบบทั้งกระบวนการหลักและกระบวนการสนับสนุนมีการติดตาม และปรับปรุงเพื่อให้เกิดประสิทธิผล โดยมุ่งเน้นคุณค่าแก่ประชาชน`,
            checkBox: [
              {
                text: `มีการบริหารจัดการกระบวนหลักและกระบวนการสนับสนุนอย่างเป็นระบบ`,
                status: false
              },
              {
                text: `กำหนดตัวชี้วัดที่ใช้ในการติดตามควบคุมการดำเนินการ`,
                status: false
              },
              {
                text: `มีแนวทางและเครื่องมือในการปรับปรุงผลผลิต กระบวนการ และการบริการให้ดีขึ้น`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.2 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `การสร้างนวัตกรรมในการปรับปรุงกระบวนการ<br>- กระบวนการหลัก <br>- กระบวนการสนับสนุน <br>- การบริการประชาชน <br>- ความสะดวกและการสื่อสาร`,
            checkBox: [
              {
                text: `กระบวนหลัก`,
                status: false
              },
              {
                text: `กระบวนการสนับสนุน`,
                status: false
              },
              {
                text: `การบริการประชาชน`,
                status: false
              },
              {
                text: `ความสะดวกในการรับข้อมูลข่าวสาร`,
                status: false
              }
            ],
            checkBox_a: [false, false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.2 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การสร้างนวัตกรรมในการปรับปรุงผลผลิต และการแก้ไขปัญหาในเชิงกระบวนการระดับองค์การจนเกิดความเป็นเลิศ นำไป สู่ผลลัพธ์ที่เป็นประโยชน์กับประชาชนและภาคธุรกิจ(Public value)`,
            checkBox: [
              {
                text: `การสร้างความร่วมมือกับทุกภาคส่วนในการแก้ปัญหาเชิง บูรณาการ`,
                status: false
              },
              {
                text: `การสร้างนวัตกรรมการปรับปรุงที่มีผลกระทบสูงจากการมีส่วนร่วมของผู้ที่เกี่ยวข้อง อาจดำเนินการผ่าน Government Innovation Lab โดยอาศัยกระบวนการคิดเชิงออกแบบ (Design Thinking)`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************1.3 *******************************************
        {
          score: 0,
          a_score: -1,
          header:
            "6.3 การลดต้นทุนและการใช้ทรัพยากรเพื่อสร้างความมีประสิทธิภาพ และความสามารถในการแข่งขัน",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 1.3 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- มีการวิเคราะห์ต้นทุนและการลงทุนในทรัพยากรต่างๆ ที่ใช้ในกระบวนการหลักและกระบวนการสนับสนุนเพื่อการควบคุมต้นทุนโดยรวม`,
            checkBox: [
              {
                text: `การวิเคราะห์ต้นทุน และการลงทุนในทรัพยากรต่างๆที่ใช้ในกระบวนการหลักและกระบวนการสนับสนุน เช่น การวิเคราะห์ต้นทุนรวม ต้นทุนโครงการ ต้นทุนด้านการบริหารจัดการทั้งทางตรงทางอ้อม ค่าใช้สอย และค่าวัสดุ จำแนกเป็นสัดส่วนเพื่อนำไปใช้ในการติดตามควบคุม`,
                status: false
              },
              {
                text: `การวางแผนการลดต้นทุนทั้งระยะสั้นและระยะยาว`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.3 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- นำผลการวิเคราะห์ไปใช้ในการลดต้นทุนและเพิ่มประสิทธิภาพในการ ทำงานจาก <br>- นโยบายการลดต้นทุน <br>- การใช้เทคโนโลยีที่ทันสมัย <br>- แบ่งปันทรัพยากรในการทำงานร่วมกัน`,
            checkBox: [
              {
                text: `การลดต้นทุนและเพิ่มประสิทธิภาพในการทำงานจากการใช้เทคโนโลยีและการแบ่งปันทรัพยากรในการทำงานร่วมกัน`,
                status: false
              },
              {
                text: `การติดตามผลการลดต้นทุนและเพิ่มประสิทธิภาพ`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.2 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การใช้เทคโนโลยีดิจิทัลเพื่อนวัตกรรมในการลดต้นทุนเพื่อเพิ่มขีดความสามารถในการแข่งขันโดยใช้ข้อมูลเทียบเคียงทั้งในระดับประเทศ และระดับนานาชาติ`,
            checkBox: [
              {
                text: `การใช้เทคโนโลยีดิจิทัลเพื่อสร้างนวัตกรรมในการลดต้นทุน`,
                status: false
              },
              {
                text: `การใช้ข้อมูลเทียลเคียง (Benchmarks) ทั้งในระดับประเทศและ นานาชาติ เพื่อการลดต้นทุนและเพิ่มขีดความสามารถในการ แข่งขัน`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 1.4 *****************************
        {
          score: 0,
          a_score: -1,
          header:
            "6.4 การมุ่งเน้นประสิทธิผลทั่วทั้งองค์การ และผลกระทบต่อยุทธศาสตร์ชาติและผลลัพธ์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 6.4 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การติดตามควบคุมประสิทธิภาพของกระบวนการหลัก และตัวชี้วัดเชิงยุทธศาสตร์ทั้งในด้านคุณภาพ ความปลอดภัย ต้นทุน เพื่อการส่งมอบคุณค่าต่อประชาชนและผู้มีส่วนได้ส่วนเสีย <br>- การติดตามควบคุมกระบวนการสนับสนุนต่างๆ ภายในของส่วนราชการ เพื่อให้เกิดประสิทธิผลทั้งในด้านคุณภาพความปลอดภัยต้นทุน เพื่อการส่งมอบคุณค่าต่อประชาชนและผู้มีส่วนได้ส่วนเสีย`,
            checkBox: [
              {
                text: `การติดตามควบคุมกระบวนการหลักโดยใช้ข้อมูลและตัวชี้วัดของกระบวนการหลักในมิติต่างๆ เช่น ตัวชี้วัดด้านคุณภาพ ต้นทุน ความปลอดภัย สิ่งแวดล้อม เศรษฐกิจ สังคม การดูแลสาธารณสุข และ สาธารณภัย เป็นต้น`,
                status: false
              },
              {
                text: `มีการติดตามควบคุมกระบวนการสนับสนุนโดยใช้ข้อมูล และตัวชี้วัดของกระบวนการสนับสนุน ในมิติต่างๆ เพื่อให้เกิด ประสิทธิภาพและประสิทธิผลของกระบวนการ`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.4 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `การเตรียมการเชิงรุกเพื่อลดผลกระทบที่อาจเกิดต่อประสิทธิผลของ องค์การโดย<br>- การจัดการความเสี่ยง <br>- การติดตามควบคุมกระบวนการหลักและกระบวนการสนับสนุนโดยใช้ตัวชี้วัดและข้อมูลทั้งในเชิงป้องกันและเชิงรุก<br>- การเตรียมพร้อมเพื่อรับมือกับเหตุการณ์ภัยพิบัติและภาวะฉุกเฉินซึ่งอาจส่งผลต่อประสิทธิผลของกระบวนการและนำมาแก้ปัญหาได้อย่างทันท่วงที`,
            checkBox: [
              {
                text: `การติดตามควบคุมตัวชี้วัดนำ (Leading Indicators) ทั้งเชิงป้องกันและเชิงรุก ซึ่งจะส่งผลต่อประสิทธิผลของกระบวนการ และนำมาแก้ปัญหาได้อย่างทันท่วงที`,
                status: false
              },
              {
                text: `การจัดการความเสี่ยงอย่างมีประสิทธิภาพ`,
                status: false
              },
              {
                text: `การเตรียมพร้อมเพื่อรับมือกับภัยพิบัติและภาวะฉุกเฉิน ตลอดจนการเตรียมตัวล่วงหน้าเพื่อลดความเสียหาย`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.4 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การประสานงานและบูรณาการของกระบวนการต่างๆ ทั้งภายในและภาย นอกเพื่อการสร้างมูลค่าเพิ่มตอบสนองยุทธศาสตร์และส่งผลต่อเศรษฐกิจ สังคม สาธารณสุข และสิ่งแวดล้อม`,
            checkBox: [
              {
                text: `มีการวิเคราะห์ผลกระทบที่เกิดขึ้นทั้งกระบวนการหลักและกระบวนการสนับสนุนที่อาจส่งผลกระทบต่อการบรรลุยุทธศาสตร์`,
                status: false
              },
              {
                text: `การประสานงานและบูรณาการทั้งภายในและภายนอกเพื่อการบรรลุยุทธศาสตร์และผลกระทบต่อเศรษฐกิจ สังคม สาธารณสุข และสิ่งแวดล้อม`,
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
      formData.append("step", 6);
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
      formData.append("category", "a_category6_score");
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
        step: 6
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
      )}-6-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

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
