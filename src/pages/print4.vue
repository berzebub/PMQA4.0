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
        หมวด 4 การวัด การวิเคราะห์ และการจัดการความรู้
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
              >หมวด 4 การวัด การวิเคราะห์ และการจัดการความรู้</b
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
          header: `4.1 การใช้ข้อมูลและสารสนเทศ มากำหนดตัววัดที่สามารถใช้ติดตามงานทั้งในระดับปฏิบัติการและระดับยุทธศาสตร์ได้อย่างมีประสิทธิผล 
       รวมทั้งการสื่อสารสู่ผู้ใช้งานทั้งภายในและภายนอก`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 4.1 basic
          basic: {
            mode: "basic",
            titleText: `- การวางแผนและการรวบรวมข้อมูลและตัววัดทั้งในปฏิบัติการ  
   และยุทธศาสตร์โดยผ่านระบบเทคโนโลยีสารสนเทศอย่างมีประสิทธิภาพ (Efficient Use of Performance Measures)`,
            checkBox: [
              {
                text: `มีการวางแผนและรวบรวมข้อมูลตัววัดในระดับปฏิบัติการและยุทธศาสตร์`,
                status: false
              },
              {
                text: `นำข้อมูลมาใช้ในการติดตามการปฏิบัติงานและใช้สนับสนุน การทำงานให้มีประสิทธิภาพดีขึ้น`,
                status: false
              },
              {
                text: `มีการพัฒนาเทคโนโลยีดิจิทัลมาใช้ในการบูรณาการข้อมูล`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.1 advanec
          advance: {
            mode: "advance",
            titleText: `- ระบบการจัดการข้อมูลและสารสนเทศ มีประสิทธิภาพ ปลอดภัย น่าเชื่อถือ พร้อมใช้และเอื้อให้บุคลากรและผู้ใช้งานที่เกี่ยวข้องสามารถเข้าถึงได้อย่างมีประสิทธิผล (Quality and availabiltiy of data and information)`,
            checkBox: [
              {
                text: `ระบบการจัดการข้อมูลและสารสนเทศที่มีประสิทธิภาพ ปลอดภัยน่าเชื่อถือ และพร้อมใช้`,
                status: false
              },
              {
                text: `คำนึงถึงผู้ใช้งานทั้งภายในและภายนอกที่เกี่ยวข้องสามารถเข้าถึงได้อย่างมีประสิทธิผล`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.1 significance
          significance: {
            mode: "significance",
            titleText: `- การจัดให้ข้อมูลและสารสนเทศที่มีประโยชน์ต่อผู้ใช้งานภายนอก รวมทั้งภาคประชาชนสามารถนำไปใช้ได้ทันทีโดยไม่ต้องร้องขอ (Pubilc data portal)`,
            checkBox: [
              {
                text: `มีการรายงานผลการดำเนินการของส่วนราชการและนำเสนอข้อมูลและสารสนเทศที่มีประโยชน์ต่อสาธารณะโดยไม่ต้องร้องขอ และอยู่ในรูปแบบที่เข้าใจง่าย`,
                status: false
              },
              {
                text: `การดำเนินการอยู่บนพื้นฐานการสำรวจความต้องการและ ข้อเสนอแนะจากภาคประชาชนอย่างสม่ำเสมอ`,
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
            "4.2 การวิเคราะห์ผลจากข้อมูล และตัววัดเพื่อการแก้ปัญหาและตอบสนองได้อย่างมีประสิทธิภาพ ทันเวลา และเชิงรุก",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 4.2 basic
          basic: {
            mode: "basic",
            titleText: `- การวิเคราะห์ผลจากข้อมูลและตัววัดที่รวบรวมจากทุกระดับในส่วนราชการเพื่อการแก้ปัญหาในกระบวนการต่างๆ ของส่วนราชการ`,
            checkBox: [
              {
                text: `มีกลไกในการวิเคราะห์ข้อมูลและตัววัดในทุกระดับเพื่อใช้ในการติดตามและแก้ไขปัญหา`,
                status: false
              },
              {
                text: `มีการวิเคราะห์เปรียบเทียบผลการดำเนินการกับค่าเป้าหมายเพื่อนำไปแก้ไขปรับปรุงกระบวนการทำงาน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- การวิเคราะห์ผลจากข้อมูลและตัววัดในทุกระดับในส่วนราชการเพื่อค้นหาสาเหตุของปัญหา และแก้ไขปัญหาในเชิงนโยบายและการปรับยุทธศาสตร์`,
            checkBox: [
              {
                text: `การนำผลการวิเคราะห์มาค้นหาสาเหตุของปัญหา และคาดการณ์ผลที่จะเกิดขึ้น`,
                status: false
              },
              {
                text: `นำไปแก้ปัญหาในเชิงนโยบายและการปรับปรุงยุทธศาสตร์`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.2 significance
          significance: {
            mode: "significance",
            titleText: `- การวิเคราะห์ผลจากข้อมูลและตัววัดที่รวบรวมเชื่อมโยงในทุกระดับในส่วนราชการ เพื่อค้นหาสาเหตุของปัญหาแก้ปัญหาได้อย่างทันการณ์ และสามารถคาดการณ์ผลลัพธ์ตามที่วางแผนไว้
`,
            checkBox: [
              {
                text: `การวิเคราะห์ผลจากข้อมูลและตัววัดที่รวบรวมในส่วนราชการเพื่อ
เชื่อมโยงค้นหาสาเหตุของปัญหา แก้ปัญหาได้อย่างทันการณ์
`,
                status: false
              },
              {
                text: `การนำเทคโนโลยีมาใช้เพื่อตอบสนองต่อสถานการณ์อย่างทันท่วงทีและสามารถคาดการณ์ผลลัพธ์ตามที่วางแผนไว้ `,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************4.3 *******************************************
        {
          header: `4.3 การจัดการความรู้ และการสร้างองค์ความรู้ของส่วนราชการในการแก้ปัญหา เรียนรู้และมีเหตุผล`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 4.3 basic
          basic: {
            mode: "basic",
            titleText: `- กระบวนการรวบรวมข้อมูลสารสนเทศและองค์ความรู้ที่เกี่ยวข้องกับส่วนราชการอย่างเป็นระบบเพื่อใช้ในการเรียนรู้ พัฒนา <br>และต่อยอดการ พัฒนาของส่วนราชการ

`,
            checkBox: [
              {
                text: `กระบวนการรวบรวมข้อมูลสารสนเทศและองค์ความรู้ที่เกี่ยวข้อง
กับการทำงานอย่างเป็นระบบ
`,
                status: false
              },
              {
                text: `นำข้อมูลมาวิเคราะห์และรวบรวมไว้เพื่อนำไปใช้ประโยชน์และต่อ
ยอดการเรียนรู้ภายในหน่วนงาน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.3 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- มีการวิเคราะห์และเชื่อมโยงกับข้อมูลสารสนเทศ และองค์ความรู้ นอกส่วนราชการเพื่อการแก้ไขปัญหา และสร้างนวัตกรรม`,
            checkBox: [
              {
                text: `กระบวนการรวบรวมและวิเคราะห์ข้อมูล สารสนเทศ และองค์ความรู้เชื่อมโยงกับข้อมูล สารสนเทศ และองค์ความรู้จากภายนอกองค์การ
`,
                status: false
              },
              {
                text: `นำองค์ความรู้มาใช้เพื่อสร้างนวัตกรรม`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.3 significance
          significance: {
            mode: "significance",
            titleText: `- มีการวิเคราะห์และนำไปสู่การแก้ขไขปรับปรุงจนเกิดเป็นกระบวนการที่เป็นเลิศ และผลลัพธ์ที่ดีสู่การบรรลุยุทธศาสตร์และการบริการประขาชนที่ดียิ่งขึ้น`,
            checkBox: [
              {
                text: `การนำองค์ความรู้ไปใช้ในการแก้ไขปัญหาจนเกิดเป็นแนวปฏิบัติที่ดี (Best Practices)`,
                status: false
              },
              {
                text: `การพัฒนาองค์ความรู้จนเกิดการสร้างมาตรฐานใหม่หรือรูปแบบการบริการที่สร้างมูลค่าเพิ่มแก่ประชาชน`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 4.4 *****************************
        {
          header: `4.4 การบริหารจัดการข้อมูล สารสนเทศ และระบบการทำงานที่ปรับเป็นดิจิทัลเต็มรูปแบบ มีประสิทธิภาพ และใช้งานได้`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 4.4 basic
          basic: {
            mode: "basic",
            titleText: `- การวางแผนการปรับเปลี่ยนรูปแบบการทำงานและการรวบรวมข้อมูล มาเป็นดิจิทัลอย่างเป็นระบบและมีตัววัดการบรรลุตามแผนงานอย่างมีประสิทธิภาพ (Planning of digitalization)

`,
            checkBox: [
              {
                text: `การจัดทำแผนการปรับเปลี่ยนรูปแบบการทำงานและการรวบรวมข้อมูลมาเป็นระบบดิจิทัล
`,
                status: false
              },
              {
                text: `มีตัววัดเพื่อใช้ติดตามการบรรลุตามแผนการปรับเปลี่ยนสู่ระบบดิจิทัลอย่างมีประสิทธิภาพ (รวมทั้งการพัฒนาระบบการจัดการข้อมูลเพื่อรองรับการเชื่อมต่อของข้อมูลกับส่วนราชการอื่นตาม ภาระหน้าที่)`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.4 advanec
          advance: {
            mode: "advance",
            titleText: `- มีการวิเคราะห์ความเสี่ยงการป้องกันการโจมตีทางไซเบอร์และการ เตรียมพร้อมต่อภัยพิบัติและภาวะฉุกเฉินที่มีประสิทธิผล (Cybersecurity and BCM)`,
            checkBox: [
              {
                text: `การวิเคราะห์ความเสี่ยงของระบบเทคโนโลยีดิจิทัล
`,
                status: false
              },
              {
                text: `การวางแผนการป้องกันการโจมตีทางไซเบอร์`,
                status: false
              },
              {
                text: `การเตรียมพร้อมต่อภัยพิบัติและภาวะฉุกเฉินที่อาจมีต่อระบบ
ฐานข้อมูลและการปฏิบัติการบนไซเบอร์ พร้อมทั้งแผนรองรับ`,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 4.4 significance
          significance: {
            mode: "significance",
            titleText: `- การใช้เทคโนโลยีดิจิทัลมาเพิ่มประสิทธิภาพของกระบวนการทำงาน ลดต้นทุน และการรายงานผลได้ทันการณ์ และมีประสิทธิผล (Efficiency and effectiveness)`,
            checkBox: [
              {
                text: `การใช้เทคโนโลยีมาเพิ่มประสิทธิภาพของกระบวนการทำงาน
ที่ครอบคลุมพันธกิจหลักของหน่วยงาน
<br>- ลดต้นทุน
<br>- ติดตามงานอย่างรวดเร็ว
<br>- การสร้างนวัตกรรมการให้บริการ
<br>- การเชื่อมโยงเครือข่ายและข้อมูล`,
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
        step: 4
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
