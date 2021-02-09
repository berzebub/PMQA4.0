<template>
  <div class>
    <div class="float-right q-pa-md" v-show="$route.name != 'printAll'">
      <q-btn class="printBtn" icon="fas fa-print" color="pink-4" round @click="printBtn()"></q-btn>
    </div>
    <!-- page1 -->
    <div class="a4-landscape-flip">
      <div
        class="absolute-right text-h7 printDate"
        v-show="$route.name != 'printAll'"
      >{{ printDate }}</div>
      <div align="center" class="q-py-sm relative-position" v-show="$route.name != 'printAll'">
        <div class="text-h6">{{ $q.sessionStorage.getItem("office") }}</div>
      </div>
      <div style="height: 15px"></div>

      <div
        align="left"
        class="b-color q-py-sm text-white q-pl-md"
        style="width: 80%; font-size: 18px"
      >หมวด 3 การให้ความสำคัญกับผู้รับบริการและผู้มีส่วนได้ส่วนเสีย</div>
      <div class="q-pt-md">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b class="t-color">เป้าหมาย :</b>
          เพื่อให้ส่วนราชการพัฒนาระบบข้อมูลและสารสนเทศด้านการบริการประชาชนที่ทันสมัยรวดเร็วและเข้าถึงในทุกระดับ
          เพื่อนำมาใช้ประโยชน์ในการสร้างนวัตกรรมการบริการที่สร้างความแตกต่างและตอบสนองความต้องการเฉพาะกลุ่ม
          และความต้องการเฉพาะบุคคลซึ่งสามารถออกแบบได้ (Personalized Service)
          วางแผนเชิงรุกในการตอบสนองความต้องการและความคาดหวังของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสียทั้งปัจจุบันและอนาคต
          มีกระบวนการแก้ไขข้อร้องเรียนที่รวดเร็ว และสร้างสรรค์
          โดยปฏิบัติงานบนพื้นฐานของข้อมูลความต้องการของประชาชน
          ส่งผลต่อความพึงพอใจ
          สร้างความร่วมมือของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสีย
        </p>
      </div>

      <div class="q-pt-sm">
        <div class="row" style="background-color: #F2F2F2">
          <div class="col-3 q-pa-md brr"></div>
          <div class="col-3 q-pa-md brr" align="center">
            <div>
              Basic
              <br />(A&D)
            </div>
          </div>
          <div class="col-3 q-pa-md brr" align="center">
            Advance
            <br />(Alignment)
          </div>
          <div class="col-3 q-pa-md" align="center">
            Significance
            <br />(Integration)
          </div>
        </div>
        <!-- 3.1 -->
        <div class="row" style="background-color: #FCEDD6; color: #4D4C4E">
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >3.1 ระบบข้อมูลและสารสนเทศที่ทันสมัยเพื่อการบริการและการเข้าถึง</div>
          <div align="center" class="col-3 q-pa-md brr">ใช้ข้อมูลเพื่อตอบสนองความต้องการที่แตกต่าง</div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >วิเคราะห์เพื่อค้นหาความต้องการและความคาดหวังใหม่</div>
          <div
            align="center"
            class="col-3 q-pa-md"
          >ใช้ข้อมูลทั้งภายในและภายนอกเพื่อวางนโยบายเชิงรุกทั้งปัจจุบันและอนาคต</div>
        </div>
        <!-- 3.2 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">3.2 การประเมินความพึงพอใจและความผูกพัน</div>
          <div align="center" class="col-3 q-pa-md brr">
            การประเมินความพึงพอใจ และความผูกพัน ของกลุ่มผู้รับบริการ
            และผู้มีส่วนได้ส่วนเสียหลัก
          </div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >วิเคราะห์ผลเพื่อตอบสนองความต้องการ และแก้ปัญหาเชิงรุก</div>
          <div align="center" class="col-3 q-pa-md">
            บูรณาการกับฐานข้อมูลแหล่งอื่น
            เพื่อการวางแผนและการสร้างนวัตกรรมในการให้บริการ
          </div>
        </div>
        <!-- 3.3 -->
        <div class="row" style="background-color: #FCEDD6; color: #4D4C4E">
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >3.3 การสร้างนวัตกรรมการบริการและตอบสนองความต้องการเฉพาะกลุ่ม</div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >การปรับปรุงบริการที่ตอบสนองความต้องการและความคาดหวังของกลุ่มผู้รับบริการและผู้มีส่วนได้ส่วนเสียหลัก</div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >ปรับปรุงกระบวนการและสร้างนวัตกรรมที่ตอบสนองความต้องการในภาพรวมและเฉพาะกลุ่ม</div>
          <div
            align="center"
            class="col-3 q-pa-md"
          >สร้างนวัตกรรมที่สามารถออกแบบการให้บริการเฉพาะบุคคล</div>
        </div>
        <div style="height: 35px; background-color: #f2f2f2" class="row">
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3"></div>
        </div>
        <!-- 3.4 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >3.4 กระบวนการแก้ไขข้อร้องเรียนที่รวดเร็วและสร้างสรรค์</div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >กระบวนการรับข้อร้องเรียนอย่างเป็นระบบ และมีมาตรฐาน</div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >กระบวนการจัดการข้อร้องเรียนเป็นระบบ ตอบสนองรวดเร็ว ทันการณ์</div>
          <div align="center" class="col-3 q-pa-md">ใช้เทคโนโลยีเพื่อตอบสนองและสร้างความพึงพอใจ</div>
        </div>
      </div>
    </div>
    <!-- end page1 -->

    <!-- start next -->
    <div class="a4-landscape">
      <div v-for="(item, index) in data" :key="index">
        <div class="q-pt-md">
          {{ item.header }}
          <div>
            <table>
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
                  <td class="q-pa-sm relative-position" style="vertical-align: top">
                    <u>Basic</u>
                    <br />
                    <div v-html="item.basic.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div class="border-black" v-if="item.basic.pdf_file">มีเอกสารแนบ</div>
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
                          <q-checkbox color="pink-4" keep-color read-only :value="checkbox.status" />
                        </div>
                        <div class="col q-py-xs">
                          <span v-html="checkbox.text"></span>
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
                  <td class="q-pa-sm relative-position" style="vertical-align: top">
                    <u>Advance</u>
                    <br />
                    <div v-html="item.advance.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div class="border-black" v-if="item.advance.pdf_file">มีเอกสารแนบ</div>
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
                          <q-checkbox color="pink-4" keep-color read-only :value="checkbox.status" />
                        </div>
                        <div class="col q-py-xs">
                          <span v-html="checkbox.text"></span>
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
                  <td class="q-pa-sm relative-position" style="vertical-align: top">
                    <u>Significance</u>
                    <br />
                    <div v-html="item.significance.titleText"></div>
                    <div class="absolute-bottom q-pa-md" align="center">
                      <div class="border-black" v-if="item.significance.pdf_file">มีเอกสารแนบ</div>
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
                          <q-checkbox color="pink-4" keep-color read-only :value="checkbox.status" />
                        </div>
                        <div class="col q-py-xs">
                          <span v-html="checkbox.text"></span>
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
คิดเห็นการประชุมรวบรวมความคิดเห็นจากภายในองค์กร / ภายนอกองค์กร / เครือข่าย เป็นต้น<br>- ฐานข้อมูลของส่วนราชการ`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
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
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
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
                text: `ใช้เทคโนโลนียีดิจิทัล และสารสนเทศจากภายในและภายนอก องค์กรเพื่อ<br>
- วิเคราะห์และเข้าใจความต้องการและความคาดหวังของผู้รับ บริการ และผู้มีส่วนได้ส่วนเสีย<br>
- วิเคราะห์แนวโน้มการเปลี่ยนแปลงที่กำลังจะเกิดขึ้น<br>
- กำหนดนโยบายเชิงรุกในการตอบสนองความต้องการและความคาดหวังของผู้รับบริการและผู้มีส่วนได้ส่วนเสียทั้งปัจจุบันและ อนาคต
`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
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
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 3.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- การใช้ผลประเมินความพึงพอใจ และความผูกพัน ของกลุ่มผู้รับบริการ และผู้มีส่วนได้ส่วนเสียหลัก เพื่อนำมาวิเคราะห์ความต้องการ และแก้ปัญหาในเชิงรุก`,
            checkBox: [
              {
                text: `นำผลการประเมินความพึงพอใจ และความผูกพันมาวิเคราะห์เพื่อ
ค้นหาโอกาสในการปรับปรุงและแก้ไขปัญหาเชิงรุก`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
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
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
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
                status: false,
              },
              {
                text: `มีช่องทางการสื่อสารที่สามารถเข้าถึงผู้รับบริการ และผู้มีส่วนได้ส่วนเสียหลัก`,
                status: false,
              },
              {
                text: `มีการถ่ายทอดไปยังหน่วยงานที่เกี่ยวข้องในทุกพื้นที่เพื่อให้เกิด การปฏิบัติอย่างจริงจัง`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
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
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
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
                status: false,
              },
              {
                text: `การเชื่อมโยงข้อมูลเพื่อความสะดวกในการเข้าถึงบริการ`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
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
                status: false,
              },
              {
                text: `มีกระบวนการรับข้อร้องเรียนที่ให้ความสะดวกในการร้องเรียน
ของผู้รับบริการและผู้มีส่วนได้ส่วนเสีย`,
                status: false,
              },
              {
                text: `มีมาตรฐานการจัดการข้อร้องเรียน และการตอบสนองกลับต่อ
ข้อร้องเรียน (Response)`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 3.4 advanec
          advance: {
            mode: "advance",
            titleText: `- กระบวนการจัดการข้อร้องเรียนอย่างเป็นระบบ รวดเร็ว ทันการณ์ และตอบสนองอย่างมีประสิทธิผล`,
            checkBox: [
              {
                text: `มีการตอบสนองกลับต่อข้อร้องเรียนอย่างรวดเร็ว`,
                status: false,
              },
              {
                text: `ใช้เทคโนโลยีดิจิทัลมาช่วยในการทำงานและการแก้ปัญหาในเชิงรุก
(Response and React)`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
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
                status: false,
              },
              {
                text: `ใช้เทคโนโลยีดิจิทัล และพัฒนาระบบการสื่อสารเพื่อสร้างความ
เชื่อมั่นและความพึงพอใจในการจัดการข้อร้องเรียน`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
        },
      ],
    };
  },
  methods: {
    async getAssessmentData() {
      this.loadingShow();
      const url = this.apiPath + "user/getCategory1_6.php";
      const postData = {
        year: this.$q.sessionStorage.getItem("y"),
        user_id: this.$q.sessionStorage.getItem("uid"),
        step: 3,
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
        let getData = data.filter((x) => x.q_number == i && x.mode == "basic");
        if (getData.length > 0) {
          if (getData[0].text != "undefined") {
            this.data[i - 1].basic.explain = getData[0].text;
          } else {
            this.data[i - 1].basic.explain = "";
          }
          let checkBox = getData[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));
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
        let getData = data.filter(
          (x) => x.q_number == i && x.mode == "advance"
        );
        let getDataBasic = data.filter(
          (x) => x.q_number == i && x.mode == "basic"
        );
        if (getData.length > 0) {
          this.data[i - 1].status = 0;
          this.data[i - 1].advance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));
          let checkBoxBasic = this.data[i - 1].basic.checkBox.map(
            (x) => x.status
          );

          if (getDataBasic.length) {
            checkBoxBasic = getDataBasic[0].check_box
              .split(",")
              .map((x) => (x == 1 ? true : false));
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
          (x) => x.q_number == i && x.mode == "significance"
        );
        let getDataBasic = data.filter(
          (x) => x.q_number == i && x.mode == "basic"
        );
        let getDataAdvance = data.filter(
          (x) => x.q_number == i && x.mode == "advance"
        );

        if (getData.length > 0) {
          this.data[i - 1].status = 0;
          this.data[i - 1].significance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));

          let checkBoxBasic = this.data[i - 1].basic.checkBox.map(
            (x) => x.status
          );
          if (getDataBasic.length) {
            checkBoxBasic = getDataBasic[0].check_box
              .split(",")
              .map((x) => (x == 1 ? true : false));
          }
          let checkBoxAdvance = this.data[i - 1].advance.checkBox.map(
            (x) => x.status
          );
          if (getDataAdvance.length) {
            checkBoxAdvance = getDataAdvance[0].check_box
              .split(",")
              .map((x) => (x == 1 ? true : false));
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
        let date = await Axios.get(this.apiPath + "/getDate.php");
        a(date.data);
      });
    },
  },
  async created() {
    this.getAssessmentData();
    let printDate = await this.getDate();
    printDate = printDate[0];
    printDate = `${printDate.date} ${this.showMonth(printDate.month)} ${
      printDate.year
    }`;
    this.printDate = printDate;
  },
};
</script>

<style lang="scss" scoped>
.brr {
  border-right: 1px solid;
}
.b-color {
  background-color: #f9980f;
}
.t-color {
  color: #f9980f;
}
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
    -webkit-print-color-adjust: exact;
  }
  .a4-landscape {
    width: 297mm;
    padding: 1cm 1cm;
    -webkit-print-color-adjust: exact;
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
    -webkit-print-color-adjust: exact;
  }

  .bg {
    background-color: white;
    -webkit-print-color-adjust: exact;
  }
  /* ... the rest of the rules ... */
}
</style>
