<template>
  <div class="">
    <!-- page1 -->
    <div class="a4-landscape-flip">
      <div class="absolute-right text-h7 printDate">
        {{ printDate }}
      </div>
      <div align="center" class=" q-py-sm   relative-position">
        <div class="text-h6">
          {{ $q.sessionStorage.getItem("office") }}
        </div>
      </div>
      <div style="height:15px"></div>

      <div align="center" class="bg-grey-5 q-py-sm text-h6">
        หมวด 3 การให้ความสำคัญกับผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
      </div>
      <div class="q-pt-md">
        <p>
          <b>เป้าหมาย : </b>
          เพื่อให้ระบบการนำองค์การของหน่วยงานมุ่งเน้นสัมฤทธิผลและสร้างความยั่งยืนให้กับองค์การโดยหน่วยงานกำหนดวิสัยทัศน์และแผนยุธศาสตร์ที่นำไปสู่การบรรลุพันธกิจและสอดรับกับยุทธศาสตร์ชาติกำหนดนโยบายในการกำกับดูแลที่มีประสิทธิผลในเรื่องการป้องกันทุจริตและการสร้างความโปร่งใสสร้างสภาพแวดล้อมภายในที่มุ่งเน้นการบรรลุผลสัมฤทธิ์ของหน่วยงานและผลกระทบที่เกิดขึ้นทั้งระยะสั้นและระยะยาวอย่างต่อเนื่องและทันเหตุการณ์
          (ด้วยกลไกของเทคโนโลยีดิจิทัล) โดยคำนึงถึง
          ผลกระทบต่อสังคมและมุ่งเน้นให้เกิดผลลัพธ์ที่นำไปสู่การพัฒนาประเทศความทิศทางยุทธศาสตร์
        </p>
      </div>

      <div class="q-pt-sm">
        <div class="border-black">
          <div class="q-py-sm">
            <b class="text-h5 q-px-sm"
              >หมวด 3 การให้ความสำคัญกับผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</b
            >
            <!-- 1.1 -->
            <div class="row q-pt-md q-px-sm ">
              <div style="width:170px" class="q-pr-md">
                1.1 ระบบการนำองค์การ<br />ที่สร้างความยั่งยืน
              </div>
              <div class="col">
                <div class="row">
                  <div class="col-4  q-px-xs" align="center">
                    <div class="border-black bg-grey-5">Basic<br />(A&D)</div>
                  </div>
                  <div class="col-4  q-px-xs" align="center">
                    <div class="border-black bg-grey-5">
                      Advance<br />(Alignment)
                    </div>
                  </div>
                  <div class="col-4  q-px-xs" align="center">
                    <div class="border-black bg-grey-5">
                      Significance<br />(Integration)
                    </div>
                  </div>
                </div>
                <div class="row q-pt-md" style="font-size:13px">
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit  q-px-xs q-py-sm">
                      วิสัยทัศน์/ยุทธศาสตร์<br />ตอบสนองพันธกิจ
                    </div>
                  </div>
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit  q-px-xs q-py-sm">
                      วิสัยทัศน์/ยุทธศาสตร์สอด<br />รับกับยุทธศาสตร์ประเทศ
                    </div>
                  </div>
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit q-px-xs q-py-sm">
                      สร้างนวตกรรม/วัฒนธรรมที่<br />มุ่งประโยชน์สุขประชาชน
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="q-py-md">
              <q-separator></q-separator>
            </div>
            <!-- 1.2 -->
            <div class="row q-px-sm">
              <div style="width:170px" class="q-pr-md">
                1.2 ป้องกันทุจริตและ<br />สร้างความโปร่งใส
              </div>
              <div class="col">
                <div class="row" style="font-size:13px">
                  <div class="col-4  q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      นโยบายการป้องกันทุจริต<br />และระบบกำกับดูแลที่มีประสิทธิภาพ
                    </div>
                  </div>
                  <div class="col-4  q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      การติดตาม ปรับปรุง
                      และรายงานผลต่อสาธารณะและหน่วยงานบังคับบัญชา
                    </div>
                  </div>
                  <div class="col-4  q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      ผลการประเมินในระดับดีโดยหน่วยงานภายนอก
                      เป็นแบบอย่างที่ดีและการสร้างต้นแบบด้านความโปร่งใส
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="q-py-md">
              <q-separator></q-separator>
            </div>
            <!-- 1.3 -->
            <div class="row q-px-sm">
              <div style="width:170px" class="q-pr-md">
                1.3
                การมุ่งเน้นผลสัมฤทธิ์ผ่านการสร้างการมีส่วนร่วมจากเครือข่ายทั้งภายในและภายนอก
              </div>
              <div class="col">
                <div class="row" style="font-size:13px">
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      สร้างสภาพแวดล้อมที่มุ่งเน้นผลสัมฤทธิ์ผ่านการมีส่วนร่วมของบุคลากรภายในและการสร้างเครือข่ายภายนอก
                    </div>
                  </div>
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      การตั้งเป้าหมายท้าทาย
                      และการส่งเสริมให้เกิดนวัตกรรมของกระบวนการและการบริการ
                    </div>
                  </div>
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      สร้างนวัตกรรมเชิงนโยบายที่มีผลกระทบสูงที่สามารถแก้ปัญหาที่ซับซ้อน
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="q-py-md">
              <q-separator></q-separator>
            </div>
            <!-- 1.4 -->
            <div class="row q-px-sm">
              <div style="width:170px" class="q-pr-md">
                1.4 คำนึงถึงผลกระทบต่อสังคมและการมุ่งเน้นให้เกิดผลลัพธ์
              </div>
              <div class="col">
                <div class="row" style="font-size:13px">
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      ติดตามตัวชี้วัดและผลการดำเนินงานอย่างต่อเนื่อง
                    </div>
                  </div>
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      การใช้กลไกการสื่อสารและเทคโนโลยีดิจิทัลเพื่อนำไปสู่การแก้ไขปัญหาอย่างทันกาล
                    </div>
                  </div>
                  <div class="col-4 q-px-xs" align="center">
                    <div class="border-black fit q-px-xs  q-py-sm">
                      ติดตามผลดำเนินการและผลกระทบระยะสั้นและระยะยาวที่มีต่อเศรษฐกิจ
                      สังคม สาธารณสุข และสิ่งแวดล้อม
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div align="center" class="q-mt-lg">ภาพที่ 1 หมวด 1 การนำองค์การ</div>
    </div>
    <!-- end page1 -->

    <!-- start next -->
    <div class="a4-landscape">
      <div v-for="(item, index) in data" :key="index">
        <div :class="index != 0 ? 'q-pt-lg' : 'q-pt-xl'">
          {{ item.header }}

          <div>
            <table>
              <thead>
                <tr style="height:20px;visibility:hidden">
                  <th colspan="3"></th>
                </tr>
                <tr class="bg-grey-5">
                  <th style="width:23%">ระดับ</th>
                  <th style="width:23%">แนวทางดำเนินการ</th>
                  <th>คำอธิบาย</th>
                </tr>
              </thead>
              <tbody>
                <!-- BASIC -->
                <tr>
                  <td
                    class="q-pa-sm relative-position"
                    style="vertical-align:top"
                  >
                    <u>Basic</u><br />
                    <div v-html="item.basic.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div class="border-black " v-if="item.basic.pdf_file">
                        มีเอกสารแนบ
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm " style="vertical-align:top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.basic.checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row">
                        <div class="col-1 " style="width:50px;" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="checkbox.status"
                          />
                        </div>
                        <div class="col  q-py-xs">
                          <span v-html="checkbox.text"> </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm " style="vertical-align:top">
                    <div v-html="item.basic.explain"></div>
                  </td>
                </tr>
                <!-- ADVANCE -->
                <tr>
                  <td
                    class="q-pa-sm relative-position "
                    style="vertical-align:top"
                  >
                    <u>Advance</u><br />
                    <div v-html="item.advance.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div class="border-black " v-if="item.advance.pdf_file">
                        มีเอกสารแนบ
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm " style="vertical-align:top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.advance.checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row">
                        <div class="col-1 " style="width:50px;" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="checkbox.status"
                          />
                        </div>
                        <div class="col  q-py-xs">
                          <span v-html="checkbox.text"> </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align:top">
                    <div v-html="item.advance.explain"></div>
                  </td>
                </tr>

                <!-- SIGNI -->
                <tr>
                  <td
                    class="q-pa-sm relative-position"
                    style="vertical-align:top"
                  >
                    <u>Significance</u><br />
                    <div v-html="item.significance.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div
                        class="border-black "
                        v-if="item.significance.pdf_file"
                      >
                        มีเอกสารแนบ
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm " style="vertical-align:top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.significance
                        .checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row">
                        <div class="col-1 " style="width:50px;" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="checkbox.status"
                          />
                        </div>
                        <div class="col  q-py-xs">
                          <span v-html="checkbox.text"> </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align:top">
                    <div v-html="item.significance.explain"></div>
                  </td>
                </tr>
                <tr v-show="index == 1" style="visibility:hidden">
                  <td colspan="3" style="height:20px">123456</td>
                </tr>
                <tr v-show="index == 2" style="visibility:hidden">
                  <td colspan="3" style="height:350px">123456</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      printDate: "",
      data: [
        {
          header: `3.1 ระบบข้อมูลและสารสนเทศด้านการบริการประชาชนที่ทันสมัย รวดเร็ว และเข้าถึงในทุกระดับ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 3.1 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.1 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.1 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************************************************************
        {
          header:
            "3.2 การประเมินผลความพึงพอใจ ความผูกพันของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย เพื่อนำมาใช้ประโยชน์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 3.2 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- การใช้ผลประเมินความพึงพอใจ และความผูกพัน ของกลุ่มผู้รับบริการ และผู้มีส่วนได้ส่วนเสียหลัก เพื่อนำมาวิเคราะห์ความต้องการ และแก้ปัญหาในเชิงรุก`,
            checkBox: [
              {
                text: `นำผลการประเมินความพึงพอใจ และความผูกพันมาวิเคราะห์เพื่อ
ค้นหาโอกาสในการปรับปรุงและแก้ไขปัญหาเชิงรุก`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.2 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************3.3 *******************************************
        {
          header: `3.3 การสร้างนวัตกรรมการบริการ ที่สร้างความแตกต่างและตอบสนองความต้องการเฉพาะกลุ่มและต่างความต้องการ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 3.3 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.3 advance ******************************
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.3 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 3.4 *****************************
        {
          header: `3.4 กระบวนการแก้ไขข้อเรียกร้องที่รวดเร็ว และสร้างสรรค์เพื่อตอบสนองได้ทันความต้องการ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 3.4 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.4 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 3.4 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        }
      ]
    };
  },
  methods: {
    async getAssessmentData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory1_6.php";
      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid"),
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
      this.loadingHide();
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
          this.data[i - 1].advance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

          let checkBoxBasic = getDataBasic[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

          if (!checkBox.includes(false) && !checkBoxBasic.includes(false)) {
            // ผ่าน advance
            this.data[i - 1].status = 2;
          }

          for (let j = 0; j < checkBox.length; j++) {
            this.data[i - 1].advance.checkBox[j].status = checkBox[j];
          }

          this.data[i - 1].score = getData[0].score;

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
          this.data[i - 1].significance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

          let checkBoxBasic = getDataBasic[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

          let checkBoxAdvance = getDataAdvance[0].check_box
            .split(",")
            .map(x => (x == 1 ? true : false));

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

          this.data[i - 1].score = getData[0].score;

          this.data[i - 1].significance.pdf_file =
            getData[0].is_pdf == 0 ? null : [getData[0].is_pdf];
        }
      }
    },
    async getDate() {
      return new Promise(async (a, b) => {
        let date = await Axios.get(
          "https://api.winner-english.com/pmqa4_0_api/getDate.php"
        );
        a(date.data);
      });
    }
  },
  async created() {
    this.getAssessmentData();
    let printDate = await this.getDate();
    printDate = printDate[0];
    printDate = `${printDate.date} ${this.showMonth(printDate.month)} ${
      printDate.year
    }`;
    this.printDate = printDate;
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
tr,
td,
th {
  border: 1px solid;
}
.printDate {
  top: 10px;
  right: 80px;
}
.a4-portrait {
  width: 210mm;
  height: 297mm;
  margin: auto;
  background-color: white;
  padding: 1cm 2cm;
}

.a4-landscape-flip {
  width: 210mm;
  height: 297mm;
  margin: auto;
  background-color: white;
  padding: 1cm 2cm;
  position: relative;
}
.a4-landscape {
  width: 297mm;
  height: 210mm;
  margin: auto;
  background-color: white;
  padding: 1cm 2cm;
}
.bg {
  background-color: #f1f1f1;
  height: 100%;
}
.border-black {
  border: 1px solid;
}
@page {
  size: A4;
  margin: 0;
}
@media print {
  @page {
    size: landscape;
  }
  .printDate {
    top: -20px;
    right: 80px;
  }
  .a4-portrait {
    width: 210mm;
    height: 297mm;
  }
  .a4-landscape {
    width: 297mm;
    height: 210mm;
  }

  .a4-landscape-flip {
    width: 210nm;
    height: 210mm;
    background-color: white;
    transform: rotate(270deg) translate(-210mm, 0);
    transform-origin: 0 0;
    padding: 0cm 1cm;
    position: relative;
    left: -70px;
  }

  .bg {
    background-color: white;
  }
  /* ... the rest of the rules ... */
}
</style>
