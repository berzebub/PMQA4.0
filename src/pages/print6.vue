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
        หมวด 6 การมุ่งเน้นระบบปฏิบัติการ
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
            <b class="text-h5 q-px-sm">หมวด 6 การมุ่งเน้นระบบปฏิบัติการ</b>
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
          header:
            "6.1 กระบวนการทำงานที่เชื่อมโยงตั้งแต่ต้นจนจบกระบวนการ เพื่อนำไปสู่ผลลัพธ์ที่ต้องการ",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 1.1 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.1 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************************************************************
        {
          header:
            "6.2 การสร้างนวัตกรรมในการ ปรับปรุงผลผลิต กระบวนการ และการบริการ",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 1.2 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.2 advance ******************************
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.2 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************1.3 *******************************************
        {
          header:
            "6.3 การลดต้นทุนและการใช้ทรัพยากรเพื่อสร้างความมีประสิทธิภาพ และความสามารถในการแข่งขัน",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 1.3 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.3 advance ******************************
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.2 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 1.4 *****************************
        {
          header:
            "6.4 การมุ่งเน้นประสิทธิผลทั่วทั้งองค์การ และผลกระทบต่อยุทธศาสตร์ชาติและผลลัพธ์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 6.4 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 6.4 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 1.4 significance
          significance: {
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
