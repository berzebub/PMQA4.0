<template>
  <div class="">
    <div class="float-right q-pa-md" v-show="$route.name != 'printAll'">
      <q-btn
        class="printBtn"
        icon="fas fa-print"
        color="pink-4"
        round
        @click="printBtn()"
      ></q-btn>
    </div>
    <!-- page1 -->
    <div class="a4-landscape-flip ">
      <div
        class="absolute-right text-h7 printDate"
        v-show="$route.name != 'printAll'"
      >
        {{ printDate }}
      </div>
      <div
        align="center"
        class="q-py-sm relative-position"
        v-show="$route.name != 'printAll'"
      >
        <div class="text-h6">
          {{ $q.sessionStorage.getItem("office") }}
        </div>
      </div>
      <div style="height: 15px"></div>

      <div
        align="left"
        class="b-color text-white q-py-sm q-pl-md"
        style="width: 80%; font-size: 18px"
      >
        หมวด 2 การวางแผนเชิงยุทธศาสตร์
      </div>
      <div class="q-pt-md">
        <p>
          <b class="t-color">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เป้าหมาย :
          </b>
          เพื่อให้ส่วนราชการมีกระบวนการวางแผนยุทธศาสตร์ที่มีประสิทธิผล
          รองรับการเปลี่ยนแปลงและสร้างขีดความสามารถในการแข่งขัน
          กำหนดเป้าหมายเชิงยุทธศาสตร์ทั้งระยะสั้นและระยะยาว
          ที่สอดคล้องกับพันธกิจของส่วนราชการและเชื่อมโยงกับยุทธศาสตร์ชาติ
          มีแผนงานที่ขับเคลื่อนลงไปทุกภาคส่วนมีการติดตามผลของการบรรลุเป้าหมายเชิงยุทธศาสตร์
          และการรายงานผลอย่างมีประสิทธิภาพ เพื่อการแก้ไขปัญหาได้ทันท่วงที
        </p>
      </div>

      <div class="q-pt-sm">
        <div class="row" style="background-color: #F2F2F2">
          <div class="col-3 q-pa-md brr"></div>
          <div class="col-3 q-pa-md brr" align="center">
            <div>Basic<br />(A&D)</div>
          </div>
          <div class="col-3 q-pa-md brr" align="center">
            Advance<br />(Alignment)
          </div>
          <div class="col-3 q-pa-md" align="center">
            Significance<br />(Integration)
          </div>
        </div>
        <!-- 2.1 -->
        <div class="row" style="background-color: #F8E6DC; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            2.1
            แผนยุทธสาสตร์ที่ตอบสนองความท้าทายและสร้างนวัตกรรมเพื่อการเปลี่ยนแปลง
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            กระบวนการวางแผนยุทธศาสตร์ที่เป็นระบบตอบสนองความต้องการของประชาชนและบรรลุพันธกิจองค์การ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            แผนยุทธศาสตร์ตอบสนองความท้าท้ายของส่วนราชการมีการคาดการณ์การเปลี่ยนแปลงที่กำลังจะเกิดในอนาคต
          </div>
          <div align="center" class="col-3 q-pa-md">
            แผนยุทธศาสตร์เพิ่มขีดความสามารถในการแข่งขันสร้างโอกาส
            และส่งเสริมการพัฒนาประเทศ
          </div>
        </div>
        <!-- 2.2 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            2.2 เป้าหมายยุทธศาสตร์ทั้งระยะสั้นและระระยาว
            สอดคล้องพันธกิจและยุทธศาสตร์ชาติ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            กำหนดเป้าประสงค์และตัวชี้วัดที่ตอบสนองพันธกิจในระยะสั้น ระยะยาว
            และสร้างการเปลี่ยนแปลง
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            วิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัดทั้งระยะสั้นและระยะยาวต่อยุทธศาสตร์ประเทศ
          </div>
          <div align="center" class="col-3 q-pa-md">
            วิเคราะห์ผลกระทบต่อเศรษฐกิจ สังคม สาธารณสุข สิ่งแวดล้อม
            ทั้งทางตรงและทางอ้อม
          </div>
        </div>
        <!-- 2.3 -->
        <div class="row" style="background-color: #F8E6DC; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            2.3 แผนงานขับเคลื่อนลงไปทุกภาคส่วน
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            แผนครอบคลุมทุกส่วน ชัดเจน มีการสื่อสารสู่การปฎิบัติ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            แผนเน้นประสิทธิภาพ ทำน้อยได้มาก และสร้างคุณค่าแก่ประชาชน
          </div>
          <div align="center" class="col-3 q-pa-md">
            บูรณาการกับแผนงานด้านบุคลากร การใช้ทรัพยากร การใช้ข้อมูลร่วมกัน
          </div>
        </div>
        <!-- 2.4 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            2.4 การติดตามผล การแก้ไขปัญหา และการรายงานผล
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            การติดตามรายงานผลและการบรรลุเป้าหมายเชิงยุทธศาสตร์
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            การคาดการณ์ การแก้ปัญหา และการปรับแผนให้ทันต่อการเปลี่ยนแปลง
          </div>
          <div align="center" class="col-3 q-pa-md">
            ปรับแผนตอบสนองได้ทันเวลา เชิงรุก มีประสิทธิผล
          </div>
        </div>
      </div>
    </div>
    <!-- end page1 -->

    <!-- start next -->
    <div class="a4-landscape ">
      <div v-for="(item, index) in data" :key="index">
        <div class="q-pt-md">
          {{ item.header }}

          <div>
            <table class="m-table">
              <thead>
                <tr style="height: 20px; visibility: hidden">
                  <th colspan="3"></th>
                </tr>
                <tr class="bg-grey-5">
                  <th style="width: 23%">ระดับ</th>
                  <th style="width: 23%">แนวทางดำเนินการ</th>
                  <th>คำอธิบาย</th>
                </tr>
              </thead>
              <tbody>
                <!-- BASIC -->
                <tr>
                  <td
                    class="q-pa-sm relative-position"
                    style="vertical-align: top"
                  >
                    <u>Basic</u><br />
                    <div v-html="item.basic.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div class="border-black" v-if="item.basic.pdf_file">
                        มีเอกสารแนบ
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align: top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.basic.checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row">
                        <div class="col-1" style="width: 50px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="checkbox.status"
                          />
                        </div>
                        <div class="col q-py-xs">
                          <span v-html="checkbox.text"> </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align: top">
                    <div v-html="replaceN(item.basic.explain)"></div>
                  </td>
                </tr>
                <!-- ADVANCE -->
                <tr>
                  <td
                    class="q-pa-sm relative-position"
                    style="vertical-align: top"
                  >
                    <u>Advance</u><br />
                    <div v-html="item.advance.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div class="border-black" v-if="item.advance.pdf_file">
                        มีเอกสารแนบ
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align: top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.advance.checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row">
                        <div class="col-1" style="width: 50px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="checkbox.status"
                          />
                        </div>
                        <div class="col q-py-xs">
                          <span v-html="checkbox.text"> </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align: top">
                    <div v-html="replaceN(item.advance.explain)"></div>
                  </td>
                </tr>

                <!-- SIGNI -->
                <tr>
                  <td
                    class="q-pa-sm relative-position"
                    style="vertical-align: top"
                  >
                    <u>Significance</u><br />
                    <div v-html="item.significance.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div
                        class="border-black"
                        v-if="item.significance.pdf_file"
                      >
                        มีเอกสารแนบ
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align: top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.significance
                        .checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row">
                        <div class="col-1" style="width: 50px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="checkbox.status"
                          />
                        </div>
                        <div class="col q-py-xs">
                          <span v-html="checkbox.text"> </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="q-pa-sm" style="vertical-align: top">
                    <div v-html="replaceN(item.significance.explain)"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="break"></div>
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
          header: `2.1 กระบวนการวางแผนยุทธศาสตร์ที่ตอบสนองความท้าทาย สร้างนวัตกรรมเพื่อสร้างการเปลี่ยนแปลงและมุ่งเน้นประโยชน์สุขของประชาชน`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 2.1 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.1 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.1 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************************************************************
        {
          header:
            "2.2 การกำหนดเป้าหมายเชิงยุทธศาสตร์ทั้งระยะสั้นและระยะยาวที่สอดคล้องกับพันธกิจของส่วนราชการและเชื่อมโยงกับยุทธศาสตร์ชาติ",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 2.2 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัดเชิงยุทธศาสตร์ที่
เกิดกับยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว`,
            checkBox: [
              {
                text: `มีการวิเคราะห์ผลกระทบของเป้าประสงค์และตัวชี้วัด ที่มีผลต่อยุทธศาสตร์ชาติทั้งระยะสั้นและระยะยาว ในมิติต่างๆ เช่นการเพิ่มขีดความสามารถในการแข่งขัน การลดผลกระทบจากข้อบังคับทางกฏหมาย `,
                status: false
              }
            ],
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.2 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ***************************************2.3 *******************************************
        {
          header:
            "2.3 แผนกฏิบัติการที่ขับเคลื่อนยุทธศาสตร์ของส่วนราชการลงไปทุกภาคส่วน โดยผ่านเครือข่ายทั้งภายในและภายนอก",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 2.3 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.3 advance ******************************
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.3 significance
          significance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          }
        },
        // ******************************************** 2.4 *****************************
        {
          header: `2.4 การติดตามผลของการบรรลุเป้าหมายเชิงยุทธศาสตร์ การแก้ไขปัญหา  และการรายงานผลอย่างมีประสิทธิผล`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 2.4 basic
          basic: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.4 advanec
          advance: {
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
            explain: "",
            pdf_file: null,
            img_file: null
          },
          // 2.4 significance
          significance: {
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
.brr {
  border-right: 1px solid;
}
.b-color {
  background-color: #d1242a;
}
.t-color {
  color: #d1242a;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table,
tr,
th,
td {
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
  margin: auto;
  background-color: white;
  padding: 1cm 2cm;
  min-height: 210mm;
  max-height: fit-content;
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
  .printBtn {
    visibility: hidden;
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
  }

  .a4-landscape-flip {
    width: 210mm;
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
