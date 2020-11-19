<template>
  <div class="" v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 1 การนำองค์การ</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep2"
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
          header:
            "1.1 ระบบการนำองค์การของส่วนราชการได้สร้างองค์การที่ยั่งยืน โดยการกำหนดวิสัยทัศน์และแผนยุทธศาสตร์เชื่อมโยง สู่การบรรลุพันธกิจ การมุ่งเน้นประโยชน์สุขประชาชนและการบรรลุผลยุทธศาสตร์ชาติและความสามารถในการแข่งขัน",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 1.1 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืนโดยการกำหนดวิสัยทัศน์  และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจ และภาระหน้าที่ของส่วนราชการ (Mission based) 
            
            <br>- มีการถ่ายถอดผ่านระบบการนำองค์การเพื่อให้เกิดการดำเนินการทั่ว ทั้งส่วนราชการ `,
            checkBox: [
              {
                text: `ผู้บริหารกำหนดวิสัยทัศน์ ยุทธศาสตร์ เป้าหมายและตัวชี้วัด ชัดเจนตอบสนอง ต่อพันธกิจและภาระหน้าที่ของส่วนราชการ`,
                status: false
              },
              {
                text: `ผู้บริหารสื่อสารถ่ายทอดวิสัยทัศน์ ยุทธศาสตร์ เป้าหมาย และตัวชี้วัดไปสู่ทุกระดับ ขององค์การอย่างทั่วถึง`,
                status: false
              },
              {
                text: `ส่วนราชการมีระบบการสื่อสารภายในองค์การทั่วถึง รวดเร็ว ทันการณ์`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 advanec
          advance: {
            mode: "advance",
            suggesstion: "",
            titleText: `- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน โดยการกำหนดวิสัยทัศน์ และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ และสอดรับกับยุทธศาสตร์ชาติ (Alignment with National Strategies)`,
            checkBox: [
              {
                text: `การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ <br>- สนับสนุนการบรรลุยุทธศาสตร์และสร้างขีดความสามารถใน การแข่งขันของประเทศ <br>- พิจารณาและคำนึงถึงผลกระทบต่อสังคมทั้งเชิงบวกและเชิงลบ ทั้งทางตรงและทางอ้อม`,
                status: false
              }
            ],
            checkBox_a: [false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 significance
          significance: {
            mode: "significance",
            suggesstion: "",
            titleText: `- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน โดยการกำหนด ยุทธศาสตร์ ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ สอดรับกับทิศทางการพัฒนาและยุทธศาสตร์พื้นที่สร้างนวัตกรรมและ วัฒนธรรมในการมุ่งประโยชน์สุขประชาชน (Innovation, Citizen-centric)`,
            checkBox: [
              {
                text: `การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ
            <br>- บูรณาการยุทธศาสตร์ชาติ / ยุทธศาสตร์พื้นที่ (ถ้ามี)
            <br>- สร้างการเปลี่ยนแปลงในเกิดวัฒนธรรมที่มุ่งเน้นประชาชน เช่น มีนโยบายการสร้างนวัตกรรมการให้บริการเพื่ออำนวยความสะดวก
              และตอบสนองความต้องการของประชาชน`,
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
          header: "1.2 การป้องกันทุจริตและสร้างความโปร่งใส",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          score: 0,
          a_score: -1,
          // 1.2 basic
          basic: {
            mode: "basic",
            suggesstion: "",
            titleText: `- นโยบายและระบบการกำกับดูแลที่เสริมสร้างความโปร่งใสและการ
            ป้องกันทุจริต รวมทั้งระบบการตรวจสอบที่มีประสิทธิภาพ<br>
          - มีมาตรการที่ถ่ายทอดสู่การปฏิบัติและการติดตามรายงานผลอย่าง   
            ชัดเจน`,
            checkBox: [
              {
                text: `แนวทางและระบบการตรวจสอบกำกับดูแลที่เสริมสร้างความ
              โปร่งใสและป้องกันทุจริต`,
                status: false
              },
              {
                text: `มาตรการที่ถ่ายทอดสู่การปฏิบัติและติดตามรายงานผล อย่างชัดเจน`,
                status: false
              },
              {
                text: `การบริหารงานตามหลักธรรมภิบาล`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.2 advance ******************************
          advance: {
            mode: "advance",
            suggesstion: "",
            titleText: `- การประเมินประสิทธิผลและตัววัดการป้องกันทุจริตและการสร้างความโปร่งใสภายในส่วนราชการ และมีการปรับปรุงอย่างสม่ำเสมอ<br>
                      - การรายงานผลการดำเนินการของส่วนราชการต่อสาธารณะ   
                        และหน่วยงานบังคับบัญชา`,
            checkBox: [
              {
                text: `มีตัววัดในการตรวจติดตามป้องกันทุจริต และมีการปรับปรุง
            สม่ำเสมอ`,
                status: false
              },
              {
                text: `มีมาตรการป้องกันการทุจริตในเชิงรุก (Pro-active) เช่น พัฒนากระบวนการทำงานให้โปร่งใส มีระบบร้องเรียน/ร้องทุกข์ สร้างกระบวนการติดตามตรวจสอบการทุจริต และการปกป้องผู้ร้องเรียน`,
                status: false
              },
              {
                text: `เปิดเผยผลการดำเนินงานสู่สาธารณะ`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.2 significance
          significance: {
            mode: "significance",
            suggesstion: "",
            titleText: `-ผลการประเมินความโปร่งใสในระดับองค์การโดยองค์การอิสระ<br>ระดับชาติหรือนานาชาติ<br>
            -เป็นแบบอย่างที่ดีและการสร้างต้นแบบด้านความโปร่งใส`,
            checkBox: [
              {
                text: `มีดัชนีความโปร่งใสจากการประเมินโดยองค์การอิสระและมี ผลลัพธ์ที่ดี`,
                status: false
              },
              {
                text: `มีการส่งเสริมการเป็นองค์การด้านความโปร่งใส เช่น มีการ ค้นหาความเป็นเลิศ (Best Practice:BP) ด้านความโปร่งใส มีการสร้างต้นแบบ (Role Model) ด้านความโปร่งใส`,
                status: false
              },
              {
                text: `ได้รับรางวัลด้านความโปร่งใสจากองค์การภายนอก`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
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
            "1.3 การมุ่งเน้นการบรรลุผลสัมฤทธิ์ของส่วนราชการผ่านการสร้างการมีส่วนร่วมของบุคลากรภายในและภายนอก",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 1.3 basic
          basic: {
            mode: "basic",
            suggesstion: "",
            titleText: `- การสื่อสารและการสร้างสภาพแวดล้อมภายในเพื่อให้มุ่งเน้นผลสัมฤทธิ์<br>
            - การสร้างกลไกที่เอื้อให้ประชาชนและเครือข่ายภายนอกเข้ามามีส่วนร่วม
              ในการทำงาน`,
            checkBox: [
              {
                text: `ส่วนราชการมีแนวทางสื่อสารและสร้างสภาพแวดล้อมภายใน
              องค์การให้มุ่งผลสัมฤทธิ์ในการทำงาน`,
                status: false
              },
              {
                text: `ปรับปรุงกฏระเบียบที่เอื้อให้ประชาชนเข้ามามีส่วนร่วม`,
                status: false
              },
              {
                text: `มีแนวทางในการสร้างเครือข่ายให้ ภาคประชาชน ภาคเอกชน และท้องถิ่นจากองค์การภายนอกเข้ามามีส่วนร่วมกันในการทำงาน`,
                status: false
              }
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.3 advance ******************************
          advance: {
            mode: "advance",
            suggesstion: "",
            titleText: `- การตั้งเป้าหมาย ท้าทาย และการส่งเสริมให้เกิดนวัตกรรมของกระบวนการและการบริการผ่านเครือข่ายภาคประชาชน ภาคเอกชน และท้องถิ่น`,
            checkBox: [
              {
                text: `มีการตั้งเป้าหมายที่ท้าทายรองรับการเปลี่ยนแปลง`,
                status: false
              },
              {
                text: `มีแนวทางการส่งเสริมให้เกิดนวัตกรรมของกระบวนการทำงานและการให้บริการผ่านเครือข่ายภาคประชาชน ภาคเอกชน และท้องถิ่น`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.3 significance
          significance: {
            mode: "significance",
            suggesstion: "",
            titleText: `- การสร้างนวัตกรรมที่มีผลกระทบสูงและเชิงนโยบายที่นำไปสู่การแก้
            ปัญหาที่มีความซับซ้อน`,
            checkBox: [
              {
                text: `ผู้บริหารส่งเสริมการสร้างนวัตกรรมเชิงนโยบายที่ส่งผลในระดับ
                ประเทศและนำไปสู่การแก้ปัญหาที่มีความซับซ้อน เช่น การสร้าง
                ความร่วมมือจากหลายหน่วยงาน หรือการใช้กลไกห้องปฏิบัติการ นวัตกรรมภาครัฐ (Government Innovation Lab) โดยการนำ กระบวนการคิดเชิงออกแบบ (Design Thinking) ในลักษณะที่ให้
                ประชาชน/ผู้มีส่วนได้ส่วนเสียเข้ามามีส่วนร่วมในทุกกระบวนการ`,
                status: false
              }
            ],
            checkBox_a: [false],
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
            "1.4 การคำนึงถึงผลกระทบต่อสังคมและการมุ่งเน้นให้เกิดผลลัพธ์ที่นำไปสู่การพัฒนาประเทศตามทิศทางยุทธศาสตร์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 1.4 basic
          basic: {
            mode: "basic",
            suggesstion: "",
            titleText: `- การประเมินและติดตามโครงการ กระบวนการ และยุทธศาสตร์ที่อาจมีผลกระทบเชิงลบต่อสังคม<br>
            - การติดตามตัวชี้วัดและผลการดำเนินการขององค์การอย่างต่อเนื่อง
            `,
            checkBox: [
              {
                text: `ประเมินความเสี่ยงโครงการ กระบวนการ และยุทธศาสตร์ที่อาจมีผลกระทบเชิงลบต่อสังคมอย่างต่อเนื่อง`,
                status: false
              },
              {
                text: `เตรียมมาตรการป้องกันและแก้ไขปัญหาต่างๆ เช่น การทำประชาพิจารณ์ เพื่อรับฟังความคิดเห็นทั้งก่อน / ระหว่าง / หลังดำเนินโครงการ`,
                status: false
              },
              {
                text: `กำหนดตัวชี้วัดและติดตามผลการดำเนินการอย่างต่อเนื่อง`,
                status: false
              },
              {
                text: `รวบรวมข้อมูล / สถิติ / ผลการดำเนินการที่เกี่ยวข้อง ให้พร้อมต่อการถูกติดตาม / ตรวจสอบจากทุกภาคส่วน`,
                status: false
              }
            ],
            checkBox_a: [false, false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.4 advanec
          advance: {
            mode: "advance",
            suggesstion: "",
            titleText: `- การติดตามรายงานผลกระทบ โดยผ่านกลไกการสื่อสารและเทคโนโลยี  
            ดิจิทัลเพื่อนำไปสู่การแก้ไขปัญหาอย่างทันการณ์ประชาชน ภาคเอกชน  
            และท้องถิ่น`,
            checkBox: [
              {
                text: `ใช้เทคโนโลยีการสื่อสารและดิจิทับที่ทันสมัยเพื่อติดตามชี้วัดและ ผลการดำเนินการเพื่อรายงานผลได้อย่างรวดเร็วและทัน เหตุการณ์`,
                status: false
              },
              {
                text: `สร้างเครือข่ายเฝ้าระวังเพื่อการแก้ไขปัญหาได้อย่างรวดเร็วและทันเหตุการณ์`,
                status: false
              }
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.4 significance
          significance: {
            mode: "significance",
            suggesstion: "",
            titleText: `- การติดตามผลการดำเนินการและผลกระทบที่เกิดขึ้นทั้งในระยะสั้นและ 
            ระยะยาวและผลกระทบที่มีต่อเศรษฐกิจ สังคม สาธารณสุข  
            และสิ่งแวดล้อม`,
            checkBox: [
              {
                text: `ส่วนราชการมีการกำหนดตัววัดที่บรรลุผลลัพธ์ในเชิง<br>
              - ยุทธศาสตร์ของส่วนราชการ<br>
              - ยุทธศาสตร์พื้นที่ (ถ้ามี)<br>
              - ยุทธศาสตร์ชาติ<br>
              - ผลกระทบต่อเศรษฐกิจ สังคม สาธารณสุข สิ่งแวดล้อม`,
                status: false
              },
              {
                text: `ส่วนราชการมีการติดตามตัววัด โดยมีการวิเคราะห์เพื่อรู้เท่าทัน สถานการณ์และกำหนดมาตรการ / แนวทางเพื่อป้องกัน / ส่งเสริมการดำเนินการเพื่อผลลัพธ์ ที่ดีต่อเศรษฐกิจ สังคม สาธารณสุข สิ่งแวดล้อม`,
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
      formData.append("step", 1);
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
      formData.append("category","a_category1_score")
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
        step: 1
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
      )}-1-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

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
