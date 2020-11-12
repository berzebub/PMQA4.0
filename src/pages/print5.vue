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
        หมวด 5 การมุ่งเน้นบุคลากร
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
            <b class="text-h5 q-px-sm">หมวด 5 การมุ่งเน้นบุคลากร</b>
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
          header: `5.1 นโยบายและระบบการจัดการด้านบุคลากรที่มีประสิทธิภาพ ตอบสนองยุทธศาสตร์ และสร้างแรงจูงใจ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 5.1 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.1 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.1 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************************************************************
        {
          header:
            "5.2 ระบบการทำงานที่มีประสิทธิภาพ คล่องตัว และมุ่งเน้นผลสัมฤทธิ์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 5.2 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.2 advance ******************************
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.2 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************5.3 *******************************************
        {
          header: `5.3 การสร้างวัฒนธรรมการทำงานที่ดี มีประสิทธิภาพ และความร่วมมือ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 2.3 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.3 advance ******************************
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.3 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 5.4 *****************************
        {
          header: `5.4 ระบบการพัฒนาบุคลากรให้มีความรู้ ความสามารถ ก้าวทันเทคโนโลยีแก้ไขปัญหาสร้างความรอบรู้ และความมีจริยธรรม`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 4.4 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.4 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 5.4 significance
          significance: {
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
