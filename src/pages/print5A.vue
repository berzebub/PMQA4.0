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
      >หมวด 5 การมุ่งเน้นบุคลากร</div>
      <div class="q-pt-md">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b class="t-color">เป้าหมาย :</b>
          เพื่อให้ส่วนราชการมีนโยบายและระบบการบริหารจัดการด้านบุคลากรที่มีประสิทธิภาพ
          ตอบสนองยุทธศาสตร์ และสร้างแรงจูงใจ มีความคล่องตัวและมุ่งเน้นผลสัมฤทธิ์
          มีการสร้างนวัตกรรมการทำงานที่ดี ก่อเกิดความร่วมมือ
          มีระบบการพัฒนาบุคลากรทันสมัย
          พัฒนาบุคลากรในส่วนราชการให้ก้าวทันเทคโนโลยี มีทักษะในการแก้ไขปัญหา
          สร้างความรอบรู้ และความมีจริยธรรมมีความคิดริเริ่มที่นำไปสู่นวัตกรรม
          มีความเป็นผู้ประกอบการสาธารณะ ปฏิบัติงานโดยเน้นให้ประชาชนเป็นศูนย์กลาง
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
        <!-- 5.1 -->
        <div class="row" style="background-color: #E8E2F0; color: #4D4C4E">
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >5.1 ระบบการจัดการบุคลากรตอบสนองยุทธศาสตร์และสร้างแรงจูงใจ</div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >การวางแผนกำลังคนให้ตรงกับความต้องการและเพื่อประโยชน์สูงสุดของระบบงานของราชการ</div>
          <div align="center" class="col-3 q-pa-md brr">
            ระบบการประเมินผลงาน และความก้าวหน้า สร้างแรงจูงใจแก่บุคลากร
            และบรรลุยุทธศาสตร์
          </div>
          <div align="center" class="col-3 q-pa-md">
            นโยบายการจัดการบุคลากร สนับสนุนการทำงานให้มีความคล่องตัว
            รองรับการเปลี่ยนแปลง
          </div>
        </div>
        <!--5.2 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >5.2 ระบบการทำงานที่มีประสิทธิภาพ คล่องตัว และมุ่งเน้นผลสัมฤทธิ์</div>
          <div align="center" class="col-3 q-pa-md brr">
            สภาพแวดล้อมการทำงานปลอดภัย คล่องตัว สนับสนุนการทำงาน
            สร้างความร่วมมือ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            สภาพแวดล้อมที่สร้างแรงจูงใจให้บุคลากรมีความรับผิดชอบกล้าตัดสินใจ
            เข้าถึงข้อมูลเพื่อใช้ทำงาน
          </div>
          <div align="center" class="col-3 q-pa-md">
            เป็นทีมที่มีสมรรถนะสูง คล่องตัว ทำงานร่วมกับเครือข่ายภายนอก
            แก้ปัญหาที่ซับซ้อน
          </div>
        </div>
        <!-- 5.3 -->
        <div class="row" style="background-color: #E8E2F0; color: #4D4C4E">
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >5.3 การสร้างวัฒนธรรมการทำงานที่ดี และความร่วมมือ</div>
          <div align="center" class="col-3 q-pa-md brr">
            สร้างวัฒนธรรมที่เป็นมืออาชีพ เปิดโอกาสให้คิดริเริ่ม
            และสร้างสรรค์สู่การสร้างนวัตกรรม
          </div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >ค้นหาปัจจัยที่สร้างความผูกพัน ทุ่มเท มีผลการดำเนินงานที่ดี</div>
          <div
            align="center"
            class="col-3 q-pa-md"
          >มีประสิทธิภาพสูง สร้างความภูมิใจ และความเป็นเข้าของให้แก่บุคลากร</div>
        </div>
        <div style="height: 35px; background-color: #f2f2f2" class="row">
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3"></div>
        </div>
        <!-- 5.4 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">5.4 ระบบการพัฒนาบุคลากร</div>
          <div
            align="center"
            class="col-3 q-pa-md brr"
          >พัฒนาคุณธรรม จริยธรรม ทักษะ ความรู้ ในการทำงานและด้านดิจิทัล</div>
          <div align="center" class="col-3 q-pa-md brr">
            เพิ่มพูน สั่งสมทักษะ ความรู้
            ความเชี่ยวชาญที่สำคัญต่อสมรรถนะหลักขององค์กร
          </div>
          <div align="center" class="col-3 q-pa-md">
            พัฒนาบุคลากรและผู้นำให้มีความรอบรู้
            สามารถตัดสินใจพร้อมรับปัญหาที่ซับซ้อน
          </div>
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
                  <th style="width: 20%">ข้อเสนอแนะ</th>
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
                  <td class="q-pa-xs" style="vertical-align: top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.basic.checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row">
                        <div class="col-1" style="width: 30px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color
                            read-only
                            :value="item.basic.checkBox_a[indexCheckbox]"
                          />
                        </div>

                        <div class="col-1" style="width: 45px" align="center">
                          <q-checkbox color="teal" keep-color read-only :value="checkbox.status" />
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
                  <td class="q-pa-sm" style="vertical-align: top">
                    <span v-html="item.basic.suggesstion"></span>
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
                        <div class="col-1" style="width: 30px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color
                            read-only
                            :value="item.advance.checkBox_a[indexCheckbox]"
                          />
                        </div>
                        <div class="col-1" style="width: 45px" align="center">
                          <q-checkbox color="teal" keep-color read-only :value="checkbox.status" />
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
                  <td class="q-pa-sm" style="vertical-align: top">
                    <span v-html="item.advance.suggesstion"></span>
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
                        <div class="col-1" style="width: 30px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color
                            read-only
                            :value="item.significance.checkBox_a[indexCheckbox]"
                          />
                        </div>
                        <div class="col-1" style="width: 45px" align="center">
                          <q-checkbox color="teal" keep-color read-only :value="checkbox.status" />
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
                  <td class="q-pa-sm" style="vertical-align: top">
                    <span v-html="item.significance.suggesstion"></span>
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
          score: 0,
          a_score: -1,
          header: `5.1 นโยบายและระบบการจัดการด้านบุคลากรที่มีประสิทธิภาพ ตอบสนองยุทธศาสตร์ และสร้างแรงจูงใจ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 5.1 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- ระบบการสรรหา ว่าจ้างบรรจุ และการจัดวางคนไปยังตำแหน่งงานที่ตรงกับความถนัดและความต้องการเพื่อประโยชน์สูงสุดของระบบงาน ของราชการ โดยคำนึงถึงความต้องการที่หลากหลายของประชาชน`,
            checkBox: [
              {
                text: `ระบบการสรรหา ว่าจ้าง บรรจุมีประสิทธิภาพ โปร่งใสและเหมาะสม`,
                status: false,
              },
              {
                text: `การจัดโครงสร้างการทำงานและการจัดวางบุคลากรไปอยู่ตำแหน่ง
ที่เหมาะสมกับการใช้ความรู้และประสบการณ์ อย่างเต็มความสามารถก่อให้เกิดประโยชน์สูงที่สุดต่อองค์กรและตอบโจทย์ ความต้องการของประชาชน`,
                status: false,
              },
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.1 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การประเมินประสิทธิผลการทำงานและเส้นทางความก้าวหน้าของ บุคลากรทุกกลุ่มสามารถสร้างแรงจูงใจให้บุคลากรทุ่มเท และทำงานให้มีประสิทธิภาพสูงตอบสนองยุทธศาสตร์และมุ่งเน้นประโยชน์สุขแก่ ประชาชน (High Performance)`,
            checkBox: [
              {
                text: `ระบบการประเมินประสิทธิผลการทำงานของบุคลากรทุกกลุ่ม มีความชัดเจน โปร่งใส
`,
                status: false,
              },
              {
                text: `เปิดโอกาสให้บุคลากรทุกคนสามารถวางแผนเส้นทางความก้าวหน้าของตนเองและพัฒนาความสามารถของตนในระยะยาว`,
                status: false,
              },
              {
                text: `กลไกในการกระตุ้นให้บุคลากรเกิดแรงจูงใจ และมีการทำงานที่มีประสิทธิภาพสูง`,
                status: false,
              },
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.1 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- นโยบายการจัดการด้านบุคลากรสนับสนุนการทำงานที่มีความคล่องตัวและปรับเปลี่ยนให้ทันต่อการเปลี่ยนแปลงของสภาพแวดล้อมการทำงาน`,
            checkBox: [
              {
                text: `การบูรณาการงานบริหารบุคลากรกับการปรับปรุงการทำงานของทุกๆกระบวนงาน ให้เกิดการทำงานที่มีประสิทธิภาพสูง`,
                status: false,
              },
              {
                text: `นโยบายด้านการส่งเสริมให้เกิดการสร้างนวัตกรรมและการทำงานเป็นทีม`,
                status: false,
              },
              {
                text: `การจัดการด้านบุคลากรเพื่อให้เกิดความคล่องตัวในการประสานงานในแนวระนาบกับหน่วยอื่นๆ`,
                status: false,
              },
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
        },
        // ******************************************************************************************
        {
          score: 0,
          a_score: -1,
          header:
            "5.2 ระบบการทำงานที่มีประสิทธิภาพ คล่องตัว และมุ่งเน้นผลสัมฤทธิ์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          // 5.2 basic
          basic: {
            suggesstion: "",
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
                status: false,
              },
              {
                text: `มีประสิทธิภาพ`,
                status: false,
              },
              {
                text: `เป็นไปตามกรอบของกฏหมาย`,
                status: false,
              },
              {
                text: `คล่องตัวและร่วมกันทำงานให้เกิดประสิทธิผล`,
                status: false,
              },
            ],
            checkBox_a: [false, false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.2 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- สภาพแวดล้อมที่เอื้อให้บุคลากรมีความรับผิดชอบ (Empower) กล้า ตัดสินใจเข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหาเพื่อบรรลุแผนงานหลักขององค์กร`,
            checkBox: [
              {
                text: `มีความรับผิดชอบ`,
                status: false,
              },
              {
                text: `กล้าตัดสินใจ`,
                status: false,
              },
              {
                text: `เข้าถึงข้อมูลเพื่อใช้สนับสนุนการทำงานและการแก้ปัญหา`,
                status: false,
              },
              {
                text: `มีการพัฒนาระบบฐานข้อมูลให้พร้อมสนับสนุนการทำงานอย่างมีประสิทธิภาพ`,
                status: false,
              },
            ],
            checkBox_a: [false, false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.2 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การทำงานที่เป็นทีมที่มีสมรรถะสูง มีความคล่องตัวและสามารถทำงานร่วมกับเครือข่ายภายนอก เพื่อนำไปสู่แก้ไขปัญหาที่ซับซ้อนอย่างมีประสิทธิผล`,
            checkBox: [
              {
                text: `มีการทำงานเป็นทีมภายในองค์กร`,
                status: false,
              },
              {
                text: `มีกระบวนการสร้างความร่วมือกับเครือข่ายภาคประชาชนและเอกชนภานนอกในลักษณะของทีมสหสาขา (Trans-disciplinary) เพื่อร่วมกันแก้ปัญหา`,
                status: false,
              },
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
        },
        // ***************************************5.3 *******************************************
        {
          score: 0,
          a_score: -1,
          header: `5.3 การสร้างวัฒนธรรมการทำงานที่ดี มีประสิทธิภาพ และความร่วมมือ`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 2.3 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `- การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ เปิดโอกาสในการนำเสนอความริเริ่มและสนับสนุนความคิดสร้างสรรค์`,
            checkBox: [
              {
                text: `การสร้างวัฒนธรรมในการทำงานที่เป็นมืออาชีพ คือ มีความรอบรู้ เชี่ยวชาญ และถูกต้องตามมาตรฐาน`,
                status: false,
              },
              {
                text: `เปิดโอกาสในการนำเสนอความคิดริเริ่มและสนับสนุนความคิดสร้างสรรค์`,
                status: false,
              },
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.3 advance ******************************
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- การค้นหาปัจจัยที่ทำให้บุคลากรมีความผูกพัน ทุ่มเทมีผลการปฏิบัติงานที่ดีและสร้างวัฒนธรรมการทำงานที่นำไปสู่ผลลัพธ์ขององค์กร
`,
            checkBox: [
              {
                text: `การค้นหาปัจจัยที่ส่งผลต่อความผูกพัน การทุ่มเท และผลการปฏิบัติงานที่ดีของบุคลากร`,
                status: false,
              },
              {
                text: `มีการวิเคราะห์ความสัมพันธ์ระหว่างปัจจัยที่สร้างความผูกพันกับผลลัพธ์ขององค์กร`,
                status: false,
              },
              {
                text: `นำปัจจัยดังกล่าวมาใช้ในการสร้างให้บุคลากรเกิดแรงจูงใจ เพื่อให้เกิดผลการปฏิบัติงานที่ดี`,
                status: false,
              },
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.3 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- การสร้างวัฒนธรรมการทำงานที่มีประสิทธิภาพสูง สร้างความภูมิใจ และความเป็นเจ้าของ ให้แก่บุคลากร (Public Entrepreneurship) และร่วมมือเพื่อนำพาองค์กรไปสู่ความสำเร็จ และประโยชน์ที่เกิด กับสังคมและประชาชน`,
            checkBox: [
              {
                text: `สร้างวัฒนธรรมการทำงานที่มุ่งเน้นความคล่องตัวและการมีประสิทธิภาพสูง`,
                status: false,
              },
              {
                text: `ส่งเสริมการแก้ปัญหาเชิงรุก`,
                status: false,
              },
              {
                text: `สร้างแนวคิดของการเป็นผู้ประกอบการภาครัฐ โดยมุ่งเน้น ประโยชน์ของส่วนรวม ผู้รับบริการหรือผุ้มีส่วนได้ส่วนเสีย เป็นหลัก`,
                status: false,
              },
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
        },
        // ******************************************** 5.4 *****************************
        {
          score: 0,
          a_score: -1,
          header: `5.4 ระบบการพัฒนาบุคลากรให้มีความรู้ ความสามารถ ก้าวทันเทคโนโลยีแก้ไขปัญหาสร้างความรอบรู้ และความมีจริยธรรม`,
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 4.4 basic
          basic: {
            suggesstion: "",
            mode: "basic",
            titleText: `ระบบการพัฒนาบุคลากรที่สร้างคนให้มี
  <br>- คุณธรรม จริยธรรม
  <br>- มีความรู้และทักษะในการแก้ปัญหา
  <br>- ทักษะด้านดิจิทัล และความรอบรู้ให้ทันต่อการเปลี่ยนแปลง
`,
            checkBox: [
              {
                text: `ความรู้ความสามารถในการทำงานและการแก้ปัญหา`,
                status: false,
              },
              {
                text: `คุณธรรม และจริยธรรม`,
                status: false,
              },
              {
                text: `ความรู้และทักษะด้านดิจิทัล`,
                status: false,
              },
            ],
            checkBox_a: [false, false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.4 advanec
          advance: {
            suggesstion: "",
            mode: "advance",
            titleText: `- ระบบการพัฒนาบุคลากรเพื่อเพิ่มพูน สั่งสมทักษะความรู้ความ เชี่ยวชาญในด้านต่างๆที่มีความสำคัญต่อสมรรถะหลักและการบรรลุเป้าหมายยุทธศาสตร์ของส่วนราชการ`,
            checkBox: [
              {
                text: `แผนพัฒนาบุคลากรที่ตอบสนองยุทธศาสตร์
`,
                status: false,
              },
              {
                text: `แผนพัฒนาบุคลากรที่ตอบสนองการสร้างสมรรถนะหลักขององค์กรทั้งทักษะความรู้ และความเชี่ยวชาญเฉพาะด้าน`,
                status: false,
              },
            ],
            checkBox_a: [false, false],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 5.4 significance
          significance: {
            suggesstion: "",
            mode: "significance",
            titleText: `- ระบบการพัฒนาบุคลากรและผู้นำให้มีทักษะที่สามารถปฏิบัติงานได้ หลากหลายมีความรอบรู้ สามารถตัดสินใจและมีความคิดในเชิงวิกฤติ พร้อมรับปัญหาที่มีความซับซ้อนมากยิ่งขึ้น (Fluid Intelligence / Complex Problem Solving)`,
            checkBox: [
              {
                text: `การพัฒนาบุคลากรให้มีทักษะและสามารถปฏิบัติงานได้หลากหลาย`,
                status: false,
              },
              {
                text: `การพัฒนาบุคลากรและผู้นำให้มีความรอบรู้ เป็นนักคิด มีความสามารถในการตัดสินใจ มีความคิดเชิงวิกฤต (Critical Thinking) ที่จะพร้อมรับกับปัญหาที่มีความซับซ้อน`,
                status: false,
              },
            ],
            checkBox_a: [false, false],
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
        step: 5,
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
          this.data[i - 1].a_score = getData[0].a_score;

          if (getData[0].a_check_box) {
            this.data[i - 1].basic.checkBox_a = getData[0].a_check_box
              .split(",")
              .map((x) => (x == 1 ? true : false));
          }

          this.data[i - 1].basic.suggesstion = getData[0].suggesstion;

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

          if (getData[0].a_check_box) {
            this.data[i - 1].advance.checkBox_a = getData[0].a_check_box
              .split(",")
              .map((x) => (x == 1 ? true : false));
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

          if (getData[0].a_check_box) {
            this.data[
              i - 1
            ].significance.checkBox_a = getData[0].a_check_box
              .split(",")
              .map((x) => (x == 1 ? true : false));
          }

          this.data[i - 1].significance.suggesstion = getData[0].suggesstion;

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
  background-color: #652d90;
}
.t-color {
  color: #652d90;
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
