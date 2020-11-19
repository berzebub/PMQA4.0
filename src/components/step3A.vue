<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 2 การวางแผนเชิงยุทธศาสตร์</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep3"
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
                        &nbsp;
                        <q-icon
                          size="28px"
                          class="cursor-pointer"
                          color="teal"
                          name="fas fa-question-circle"
                        ></q-icon>
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
                        &nbsp;
                        <q-icon
                          size="28px"
                          class="cursor-pointer"
                          color="teal"
                          name="fas fa-question-circle"
                        ></q-icon>
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
                        &nbsp;
                        <q-icon
                          size="28px"
                          class="cursor-pointer"
                          color="teal"
                          name="fas fa-question-circle"
                        ></q-icon>
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
          header: `2.1 กระบวนการวางแผนยุทธศาสตร์ที่ตอบสนองความท้าทาย สร้างนวัตกรรมเพื่อสร้างการเปลี่ยนแปลงและมุ่งเน้นประโยชน์สุขของประชาชน`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 2.1 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- กระบวนการวางแผนยุทธศาสตร์อย่างเป็นระบบทั้งระยะสั้นและระยะยาว ตอบสนองความต้องการของประชาชนและบรรลุพันธกิจส่วน
ราชการ<br>
- แนวทางการถ่ายทอดยุทธศาสตร์สู่การปฏิบัติ
`,
            checkBox: [
              {
                text: `กระบวนการวางแผนยุทธศาสตร์เป็นระบบและสนับสนุนการ
บรรลุพันธกิจ ส่วนราชการทั้งระยะสั้น ระยะยาว`,
                status: false
              },
              {
                text: `วิเคราะห์สภาพแวดล้อมในการแข่งขัน`,
                status: false
              },
              {
                text: `วางแผนยุทธศาสตร์โดยคำนึงถึง<br>
- ประโยชน์สุขประชาชน<br>
- รองรับการเปลี่ยนแปลงจาก สถาพแวดล้อมภายนอก เช่น<br>
การแข่งขั้นจากภายนอกองค์การ / นอกประเทศ ความต้องการของประชาชนที่เปลี่ยนแปลงไป`,
                status: false
              },
              {
                text: `แนวทาง/ช่องทางการสื่อสาร ถ่ายทอดยุทธศาสตร์สู่ การปฏิบัติ`,
                status: false
              }
            ],
            checkBox_a: [false, false, false,false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.1 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- แผนยุทธศาสตร์ตอบสนองความท้าท้ายของส่วนราชการมีการ คาดการณ์การเปลี่ยนแปลงที่กำลังจะเกิดในอนาคต และแผนรองรับเพื่อ
ตอบสนองต่อการเปลี่ยนแปลง (รวมทั้งการเปลี่ยนแปลงที่เกิดจากการ
นำระบบดิจิทัลมาใช้)
`,
            checkBox: [
              {
                text: `การวิเคราะห์ความท้าทายและคาดการณ์ถึงการเปลี่ยนแปลงใน
อนาคตอันมีผลกระทบต่อการปฏิบัติงานการให้บริการ การรับรู้
การเข้าถึงของภาคส่วนต่างๆ`,
                status: false
              },
              {
                text: `การกำหนดยุทธศาสตร์ แผนงานที่ตอบสนองต่อความท้าทาย และการเปลี่ยนแปลง`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.1 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- สร้างขีดความสามารถในการแข่งขัน และสร้างโอกาสเชิงกลยุทธ์ใหม่ๆ ที่นำไปสู่ประโยชน์สุขของประชาชนและการพัฒนาเศรษฐกิจของประเทศทั้งในระยะสั้นและระยะยาว
`,
            checkBox: [
              {
                text: `แผนยุทธศาสตร์ และแผนงานที่สร้างขีดความสามารถทางการ
แข่งขัน และสร้างโอกาสเชิงกลยุทธ์ใหม่ๆ เช่น<br>
- มีแผนนำระบบดิจิทัลมาใช้ปรับเปลี่ยนการทำงานและรองรับ
การเปลี่ยนแปลง<br>
- มีแผนการยกระดับการให้บริการที่รวดเร็ว ฉับไว ต้นทุนต่ำ เข้าถึง
ได้ง่ายและเข้าถึงได้ทุกที่ ทุกเวลา`,
                status: false
              }
            ],
            checkBox_a: [false],
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
            "2.2 การกำหนดเป้าหมายเชิงยุทธศาสตร์ทั้งระยะสั้นและระยะยาวที่สอดคล้องกับพันธกิจของส่วนราชการและเชื่อมโยงกับยุทธศาสตร์ชาติ",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 2.2 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การกำหนดเป้าประสงค์และตัวชี้วัดเชิงยุทธศาสตร์ที่ตอบสนองต่อ พันธกิจของส่วนราชการทั้งระยะสั้นและระยะยาว รวมทั้งการสร้างการ เปลี่ยนแปลง`,
            checkBox: [
              {
                text: `มีแผนที่ยุทธศาสตร์ (Strategy Map) แผนระยะสั้นและแผนระยะยาวที่ส่งผลต่อยุทธศาสตร์ชาติ`,
                status: false
              },
              {
                text: `กำหนดตัวชี้วัดและเป้าประสงค์ที่ตอบสนองพันธกิตของส่วนราชการและการเปลี่ยนแปลง`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.2 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัดเชิงยุทธศาสตร์ที่
เกิดกับยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว`,
            checkBox: [
              {
                text: `มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัด ที่มีผลต่อยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว ในมิติต่างๆ เช่นการเพิ่มขีดความสามารถในการแข่งขัน การลดผลกระทบจากข้อบังคับทางกฏหมาย `,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.2 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- มีการวิเคราะห์ความเสี่ยงระดับองค์การและผลกระทบทั้งทางตรง ทางอ้อมที่ส่งผลต่อระบบเศรษฐกิจสังคม สาธารณสุข และสิ่งแวดล้อม ของประเทศ
`,
            checkBox: [
              {
                text: `วิเคราะห์ความเสี่ยงระดับองค์การที่อาจเกิดขึ้น และส่งผลต่อ แผนงานและเป้าประสงค์ที่วางไว้`,
                status: false
              },
              {
                text: `วิเคราะห์ความเสี่ยงระดับองค์การที่อาจเกิดขึ้น ที่อาจส่งผล<br>กระทบต่อระบบเศรษฐกิจ สังคม สาธารณสุข และ สิ่งแวดล้อมของประเทศ`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************2.3 *******************************************
        {
          score: 0,
          a_score: -1,
          header:
            "2.3 แผนกฏิบัติการที่ขับเคลื่อนยุทธศาสตร์ของส่วนราชการลงไปทุกภาคส่วน โดยผ่านเครือข่ายทั้งภายในและภายนอก",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 2.3 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- แผนปฏิบัติการที่ครอบคลุมทุกส่วนงานชัดเจน และสื่อสารสู่การปฏิบัติ ไปยังทุกกลุ่มทั้งภายในและภายนอก`,
            checkBox: [
              {
                text: `รองรับยุทธศาสตร์ทุกด้านครอบคลุมทุกส่วนงาน`,
                status: false
              },
              {
                text: `ถ่ายทอดลงไปถึงเครือข่ายระดับพื้นที่ทั้งภายในและภายนอกองค์การ`,
                status: false
              },
              {
                text: `มีความชัดเจน และสื่อสารสู่การปฏิบัติได้อย่างมีประสิทธิผล`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.3 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- แผนปฏิบัติการที่สนับสนุนความสำเร็จของยุทธศาสตร์ของส่วน ราชการครอบคลุมทุกส่วนงานชัดเจน และเน้นการเกิดประสิทธิภาพ (การทำน้อยได้มาก) และการสร้างคุณค่าแก่ประชาชน (Public value)`,
            checkBox: [
              {
                text: `ประสิทธิภาพควบคู่กับประสิทธิผล (การทำน้อยได้มาก)`,
                status: false
              },
              {
                text: `ใช้เทคโนโลยีดิจิทัลมาช่วยในการสื่อสาร การลดต้นทุน การปรับปรุงการให้บริการที่สร้างความพึงพอใจ รวดเร็ว สร้างคุณค่าแก่ประชาชน`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.3 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- แผนปฏิบัติการที่สนับสนุนความสำเร็จของยุทธศาสตร์ของส่วน ราชการ บูรณาการกับแผนงานด้านบุคลากรและการใช้ทรัพยากรที่ รองรับการเปลี่ยนแปลงที่จะเกิดขึ้น และสื่อสารสู่การปฏิบัติผ่าน เครือข่ายทั้งภายในและภายนอกและการใช้ข้อมูลร่วมกันเพื่อการประสานงานให้เกิดความสำเร็จ

`,
            checkBox: [
              {
                text: `แผนด้านบุคลากรทั้งการพัฒนาขีดความสามารถและอัตรากำลัง
เพื่อรองรับการเปลี่ยนแปลง`,
                status: false
              },
              {
                text: `แผนการปรับเปลี่ยนเพื่อให้ทันกับความต้องการด้านการ เปลี่ยนแปลงเทคโนโลยี`,
                status: false
              },
              {
                text: `แผนการใช้ทรัพยากรและการใช้ข้อมูลผ่านเครือข่ายทั้งภายในและภายนอก`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 2.4 *****************************
        {
          score: 0,
          a_score: -1,
          header: `2.4 การติดตามผลของการบรรลุเป้าหมายเชิงยุทธศาสตร์ การแก้ไขปัญหา  และการรายงานผลอย่างมีประสิทธิผล`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 2.4 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การติดตามรายงานผลการดำเนินการตามแผนและการบรรลุเป้าหมาย
เชิงยุทธศาสตร์ และการรายงานผลสู่สาธารณะ (Open by default)`,
            checkBox: [
              {
                text: `ระบบการติดตามรายงานผลของตัวชี้วัด แผนปฏิบัติการ ยุทธศาสตร์ทั้งระยะสั้นและระยะยาว<br>
- รายงานสถานะการบรรลุเป้าหมายที่ตั้งไว้<br>
- เตรียมการแก้ไขปัญหากรณีไม่เป็นไปตามเป้าหมายที่ตั้งไว้<br>
- การรายงานผลที่เกิดขึ้นต่อสาธารณะ`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.4 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การคาดการณ์ของผลการดำเนินการตามแผน การแก้ปัญหา และการปรับแผนให้ทันต่อการเปลี่ยนแปลง (Projection)`,
            checkBox: [
              {
                text: `แผนมีความยืดหยุ่นสามารถปรับเปลี่ยนได้<br>
- สามารถปรับแผนปฏิบัติการให้สอดคล้องกับผลที่เกิดทั้งในกรณี
ที่ไม่บรรลุ หรือดีกว่าค่าเป้าหมายที่ตั้งไว้<br>
- สามารถปรับแผนให้ทันต่อการเปลี่ยนแปลงได้
`,
                status: false
              },
              {
                text: `มีการคาดการณ์ผลการดำเนินการที่เกิดขึ้น`,
                status: false
              },
              {
                text: `มีการทบทวนแผนยุทธศาสตร์ทุกปี เพื่อให้ทันต่อการเปลี่ยนแปลง`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.4 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การเตรียมการเชิงรุกเพื่อตอบสนองต่อการเปลี่ยนแปลงที่อาจเกิดขึ้น
จากภายในและภายนอกและการปรับแผนที่ตอบสนองทันเวลา เชิงรุก อย่างมีประสิทธิผล (Proactive and effective)`,
            checkBox: [
              {
                text: `ติดตามสถานการณ์ที่อาจส่งผลต่อการดำเนินการแผนโดย สามารถวิเคราะห์ได้ว่าปัญหาเกิดที่ใดและจะส่งผลต่อการปฏิบัติการ
อย่างไร
`,
                status: false
              },
              {
                text: `มีการเตรียมความพร้อมและมีความคล่องตัวต่อสถานการณ์ที่ กำลังเปลี่ยนแปลง`,
                status: false
              },
              {
                text: `มีแผนการจัดการเชิงรุกเพื่อปรับแผนให้ทันเวลาและเกิดผลลัพธ์ที่ดีเป็นไปตามต้องการ`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
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
      formData.append("step", 2);
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
      formData.append("category", "a_category2_score");
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
        step: 2
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
      )}-2-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

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
