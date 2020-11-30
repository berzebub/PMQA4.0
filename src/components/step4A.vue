<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24"
          >หมวด 3 การให้ความสำคัญกับผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</span
        >
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep4"
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
                    {{ parseInt(item.score) }} /
                    <span class="text-pink-4" v-if="item.a_score != '-1'"
                      >{{ parseInt(item.a_score) }}
                    </span>
                    <span class="text-pink-4" v-else>-</span>
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
                        v-html="replaceN(item.basic.explain)"
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
                        v-html="replaceN(item.advance.explain)"
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
                        v-html="replaceN(item.significance.explain)"
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
          header: `3.1 ระบบข้อมูลและสารสนเทศด้านการบริการประชาชนที่ทันสมัย รวดเร็ว และเข้าถึงในทุกระดับ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 3.1 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การใช้ข้อมูลและสารสนเทศของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
ที่มีอยู่ในปัจจุบันเพื่อตอบสนองความต้องการที่แตกต่าง (Customer centric)`,
            checkBox: [
              {
                text: `นำข้อมูลและสารสนเทศที่เกี่ยวข้องกับกลุ่มผู้รับบริการและผู้มี
ส่วนได้ส่วนเสียมาวิเคราะห์และตอบสนองความต้องการที่แตกต่าง
กันโดยรวบรวมข้อมูลจาก<br>
- ช่องทางต่างๆ เช่น ผลสำรวจความพึงพอใจ แบบสอบถามความ
คิดเห็นการประชุมรวบรวมความคิดเห็นจากภายในองค์การ / ภายนอกองค์การ / เครือข่าย เป็นต้น<br>- ฐานข้อมูลของส่วนราชการ`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.1 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การใช้ข้อมูลและเทคโนโลยีสารสนเทศ (รวมทั้งเทคโนโลยีดิจิทัล) เพื่อค้นหาความต้องการและความคาดหวังของกลุ่มผู้รับบริการและผู้มี
ส่วนได้ส่วนเสีย เพื่อตอบสนองความต้องการที่แตกต่างได้อย่างมี ประสิทธิผล (Digital technology, Customer centric)`,
            checkBox: [
              {
                text: `ใช้ข้อมูลและเทคโนโลยีสารสนเทศ / ดิจิทัลและช่องทางการสื่อสารรูปแบบใหม่ ๆ (เช่น Mobile Application หรือ facebook ที่มีการรับส่งข้อมูลได้อย่างรวดเร็ว ทันการณ์) เพื่อ<br>
- รวบรวมข้อมูลและสารสนเทศจากกลุ่มผู้รับบริการและผู้มีส่วนได้
ส่วนเสียในรูปแบบต่างๆ เช่น รูปแบบ Big Data เสียง ภาพ และ ข้อความ<br>
- ค้นหาความต้องการ ความคาดหวังของกลุ่มผู้รับบริการ<br> ผู้มีส่วนได้ส่วนเสียนำไปสู่การตอบสนองที่ดียิ่งขึ้น
`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.1 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การใช้ข้อมูลและเทคโนโลยีสารสนเทศ ทั้งภายใน และภายนอก (รวมทั้ง
การเปลี่ยนแปลงของสภาพแวดล้อม) เพื่อวางนโยบายเชิงรุกในการตอบ
สนองความต้องการและความคาดหวังของกลุ่มผู้รับบริการและผู้มีส่วน
ได้ส่วนเสียทั้งปัจจุบันและอนาคต (Actionable policy solution)`,
            checkBox: [
              {
                text: `ใช้เทคโนโลนียีดิจิทัล และสารสนเทศจากภายในและภายนอก องค์การเพื่อ<br>
- วิเคราะห์และเข้าใจความต้องการและความคาดหวังของผู้รับ บริการ และผู้มีส่วนได้ส่วนเสีย<br>
- วิเคราะห์แนวโน้มการเปลี่ยนแปลงที่กำลังจะเกิดขึ้น<br>
- กำหนดนโยบายเชิงรุกในการตอบสนองความต้องการและความคาดหวังของผู้รับบริการและผู้มีส่วนได้ส่วนเสียทั้งปัจจุบันและ อนาคต
`,
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
            "3.2 การประเมินผลความพึงพอใจ ความผูกพันของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย เพื่อนำมาใช้ประโยชน์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 3.2 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การประเมินความพึงพอใจและความผูกพันของกลุ่มผู้รับบริการและผู้มี
ส่วนได้ส่วนเสียหลักเพื่อนำมาวิเคราะห์และปรับปรุงกระบวนการทำงาน`,
            checkBox: [
              {
                text: `ประเมินความพึงพอใจและความผูกพันในรูปแบบที่เหมาะสมเพื่อ
ให้ได้ข้อมูลที่สามารถนำมาใช้ประโยชน์ในการวิเคราะห์และปรับปรุงกระบวนการทำงาน เช่น การให้บริการทันการณ์การสำรวจ พฤติกรรมที่ตอบสนองต่อนโยบายบริการต่างๆ เป็นต้น`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.2 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การใช้ผลประเมินความพึงพอใจ และความผูกพัน ของกลุ่มผู้รับบริการ และผู้มีส่วนได้ส่วนเสียหลัก เพื่อนำมาวิเคราะห์ความต้องการ และแก้ปัญหาในเชิงรุก`,
            checkBox: [
              {
                text: `นำผลการประเมินความพึงพอใจ และความผูกพันมาวิเคราะห์เพื่อ
ค้นหาโอกาสในการปรับปรุงและแก้ไขปัญหาเชิงรุก`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.2 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การบูรณาการข้อมูลการประเมินความพึงพอใจ และความผูกพัน กับฐานข้อมูลของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย จากแหล่งอื่นๆ เพื่อการวางแผนยุทธศาสตร์และการสร้างนวัตกรรมในการให้บริการ`,
            checkBox: [
              {
                text: `บูรณาการข้อมูลจากผลการสำรวจกับฐานข้อมูลกลุ่มผู้รับบริการ
และผู้มีส่วนได้ส่วนเสียจากแหล่งอื่นๆ เพื่อ <br>
- แก้ปัญหาความไม่พึงพอใจในการให้บริการที่ดีขึ้น<br>
- เป็นแนวทางในการวางแผนยุทธศาสตร์และการสร้างนวัตกรรม`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************3.3 *******************************************
        {
          score: 0,
          a_score: -1,
          header: `3.3 การสร้างนวัตกรรมการบริการ ที่สร้างความแตกต่างและตอบสนองความต้องการเฉพาะกลุ่มและต่างความต้องการ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 3.3 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การบริการที่ตอบสนองความต้องการและความคาดหวังของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสียหลักและการถ่ายทอดสู่การปฏิบัติในทุกหน่วยงานที่เกี่ยวข้อง`,
            checkBox: [
              {
                text: `มีกระบวนการในการทบทวนและการปรับปรุงการบริการอย่างต่อเนื่อง`,
                status: false
              },
              {
                text: `มีช่องทางการสื่อสารที่สามารถเข้าถึงผู้รับบริการ และผู้มีส่วนได้ส่วนเสียหลัก`,
                status: false
              },
              {
                text: `มีการถ่ายทอดไปยังหน่วยงานที่เกี่ยวข้องในทุกพื้นที่เพื่อให้เกิด การปฏิบัติอย่างจริงจัง`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.3 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การสร้างนวัตกรรมการบริการที่ตอบสนองความต้องการทั้งภาพรวม
และเฉพาะกลุ่มได้อย่างมีประสิทธิผล (Customer groups and segments)`,
            checkBox: [
              {
                text: `สร้างนวัตกรรมการให้บริการใหม่ๆ ที่ตอบสนอง<br>
- ความต้องการภาพรวม<br>
- ความต้องการเฉพาะกลุ่ม เช่น กลุ่มที่มีความต้องการเฉพาะให้
สามารถเข้าถึงการบริการได้`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.3 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การสร้างนวัตกรรมการบริการที่สามารถให้บริการเฉพาะบุคคลที่ สามารถออกแบบได้ (Personalized / Customized service)`,
            checkBox: [
              {
                text: `การสร้างนวัตกรรมการให้บริการที่<br>
- มีความคล่องตัวในการให้บริการตามความแตกต่างของผู้รับ บริการ<br>
- เอื้อให้ผู้รับบริการสามารถออกแบบตามความต้องการเฉพาะ บุคคล (Customized Service)`,
                status: false
              },
              {
                text: `การเชื่อมโยงข้อมูลเพื่อความสะดวกในการเข้าถึงบริการ`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 3.4 *****************************
        {
          score: 0,
          a_score: -1,
          header: `3.4 กระบวนการแก้ไขข้อเรียกร้องที่รวดเร็ว และสร้างสรรค์เพื่อตอบสนองได้ทันความต้องการ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 3.4 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- กระบวนการรับข้อร้องเรียนอย่างเป็นระบบ และมีมาตรฐานการจัดการ ข้อร้องเรียบนได้อย่างมีประสิทธิผล`,
            checkBox: [
              {
                text: `มีช่องทางการรับเรื่องร้องเรียนที่สามารถเข้าถึงได้`,
                status: false
              },
              {
                text: `มีกระบวนการรับข้อร้องเรียนที่ให้ความสะดวกในการร้องเรียน
ของผู้รับบริการและผู้มีส่วนได้ส่วนเสีย`,
                status: false
              },
              {
                text: `มีมาตรฐานการจัดการข้อร้องเรียน และการตอบสนองกลับต่อ
ข้อร้องเรียน (Response)`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.4 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- กระบวนการจัดการข้อร้องเรียนอย่างเป็นระบบ รวดเร็ว ทันการณ์ และตอบสนองอย่างมีประสิทธิผล`,
            checkBox: [
              {
                text: `มีการตอบสนองกลับต่อข้อร้องเรียนอย่างรวดเร็ว`,
                status: false
              },
              {
                text: `ใช้เทคโนโลยีดิจิทัลมาช่วยในการทำงานและการแก้ปัญหาในเชิงรุก
(Response and React)`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.4 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- กระบวนการจัดการข้อร้องเรียนอย่างเป็นระบบและการใช้เทคโนโลยี การสื่อสารมาเพื่อการตอบสนองอย่างมีประสิทธิผล และสร้าง ความพึงพอใจในการจัดการข้อร้องเรียน`,
            checkBox: [
              {
                text: `มีการตอบสนองกลับต่อข้อร้องเรียนอย่างรวดเร็ว แก้ปัญหาได้
อย่างทันการณ์
`,
                status: false
              },
              {
                text: `ใช้เทคโนโลยีดิจิทัล และพัฒนาระบบการสื่อสารเพื่อสร้างความ
เชื่อมั่นและความพึงพอใจในการจัดการข้อร้องเรียน`,
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
      this.loadingShow();
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
      this.data[index].a_score = score;
      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("year", year);
      formData.append("step", 3);
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

      let filtera_score = this.data.filter(x => x.a_score != -1);

      let sum_filtera_score = filtera_score
        .map(x => x.a_score)
        .reduce((a, b) => Number(a) + Number(b), 0);
      sum_filtera_score = sum_filtera_score / 4;

      formData.append("category", "a_category3_score");

      formData.append("a_avg_score", sum_filtera_score);

      let data = await Axios.post(url, formData);
      this.emitStatus();

      setTimeout(() => {
        this.loadingHide();
      }, 1000);
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
        step: 3
      };
      let data = await Axios.post(url, postData);
      this.assessmentData = data.data;
      if (data.data) {
        this.getBasic(data.data);
        this.getAdvance(data.data);
        this.getSignificance(data.data);
      }

      this.isLoadAssessmentFinish = true;
      this.emitStatus();
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
      )}-3-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

      window.open(
        "https://api.winner-english.com/pmqa4_0_api/upload/" +
          pdfFileName +
          "?" +
          random
      );
    },
    emitStatus() {
      let checkStatus = this.data.map(x => x.a_score);

      if (checkStatus.every(x => x == "-1")) {
        //  กรณียังไม่เคยประเมิน
        this.$emit("statusForm", 0);
      } else if (checkStatus.every(x => x != "-1")) {
        // ประเมินครบทุกข้
        this.$emit("statusForm", 1);
      } else if (checkStatus.some(x => x != "-1")) {
        // กรณีเคยประเมินบางข้
        this.$emit("statusForm", 2);
      }
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
