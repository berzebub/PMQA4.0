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
    <div class="a4-landscape-flip">
      <div class="absolute-right text-h7 printDate">
        {{ printDate }}
      </div>
      <div align="center" class="q-py-sm relative-position">
        <div class="text-h6">
          {{ $q.sessionStorage.getItem("office") }}
        </div>
      </div>
      <div style="height: 15px"></div>

      <div
        align="left"
        class="b-color q-py-sm text-white q-pl-md"
        style="width: 80%; font-size: 18px"
      >
        หมวด 6 การมุ่งเน้นระบบปฏิบัติการ
      </div>
      <div class="q-pt-md">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b class="t-color">เป้าหมาย : </b>
          เพื่อให้ส่วนราชการมีการบริหารจัดการกระบวนการที่มีประสิทธิภาพ
          เกิดประสิทธิผล เชื่อมโยงตั้งแต่ต้นจนจบ และนำไปสู่ผลลัพธ์ที่ต้องการ
          มีการสร้างนวัตกรรมในการปรับปรุงผลผลิต กระบวนการ และการให้บริการ
          มีการลดต้นทุนและการใช้ทรัพยากรอย่างมีประสิทธิภาพ
          มีการนำเทคโนโลยีมาใช้เพื่อให้มีขีดสมรรถนะสูงขึ้น
          บูรณาการกระบวนการเพื่อสร้างคุณค่าในการให้บริการแก่ประชาชนและเพิ่มขีดความสามารถในการแข่งขัน
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
        <!-- 6.1 -->
        <div class="row" style="background-color: #D9DADC; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            6.1 กระบวนการทำงานเชื่อมโยงตั้งแต่ต้นจนจบ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            ออกแบบกระบวนการที่เชื่อมโยงตั้งแต่ต้นจนจบทั้งงานภายใน
            และงานที่ข้ามส่วนราชการเพื่อให้เกิดประสิทธิภาพสูงสุด
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            ติดตามควบคุมกระบวนการโดยใช้ตัววัดและเทคโนโลยีดิจิทัล
          </div>
          <div align="center" class="col-3 q-pa-md">
            การใช้เทคโนโลยีดิจิทัลในการจัดการกระบวนการและการบูรณการที่มุ่งสูความเป็นเลิศ
          </div>
        </div>
        <!--6.2 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            6.2 การสร้างนวัตกรรมในการปรับปรุงผลผลิตกระบวนการ การให้บริการ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            บริหารจัดการและปรับปรุงอย่างเป็นระบบ
            ทั้งกระบวนการหลักและกระบวนการสนับสนุน
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            สร้างนวัตกรรมการปรับปรุงกระบวนการหลัก สนับสนุนการบริการ
            และการสื่อสาร
          </div>
          <div align="center" class="col-3 q-pa-md">
            สร้างนวัตกรรมของกระบวนการระดับองค์การจนเกิดความเป็นเลิศ
            เพื่อประโยชนฺแก่ประชาชน และภาคธุรกิจ
          </div>
        </div>
        <!-- 6.3 -->
        <div class="row" style="background-color: #D9DADC; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            6.3
            การลดต้นทุนการใช้ทรัพยากรเพื่อเพิ่มประสิทธิภาพและความสามารถในการแข่งขัน
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            วิเคราะห์ต้นทุนและลงทุนในทรัพยากรที่ใช้ในกระบวนการหลักและกระบวนการสนับสนุน
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            กำหนดนโยบายการลดต้นทุน ใช้เทคโนโลยีและใช้ทรัพยากรร่วมกัน
          </div>
          <div align="center" class="col-3 q-pa-md">
            ใช้ข้อมูลเทียบเคียงเพื่อสร้างนวัตกรรม ลดต้นทุน
            เพิ่มขีดความสามารถในการแข่งขัน
          </div>
        </div>
        <div style="height: 35px; background-color: #f2f2f2" class="row">
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3"></div>
        </div>
        <!-- 6.4-->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            6.4 การมุ่งเน้นประสิทธิผล ทั้งองค์กร และผลกระทบต่อยุทธศาสตร์ประเทศ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            ติดตามควบคุมประสิทธิผลกระบวนการหลัก และตัววัดเชิงยุทธศาสตร์
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            การเตรียมการเชิงรุกเพื่อลดผลกระทบจากความเสี่ยงการเตรียมพร้อมเพื่อรับมือกับเหตุการณ์
          </div>
          <div align="center" class="col-3 q-pa-md">
            บูรณาการกระบวนการต่าง ๆ
            ทั้งภายในและภายนอกเพื่อตอบสนองยุทธศาสตร์และส่งผลต่อเศรษฐกิจ สังคม
            สาธารณสุข และสิ่งแวดล้อม
          </div>
        </div>
      </div>

      <div align="center" class="q-mt-lg">หมวด 6 การมุ่งเน้นระบบปฏิบัติการ</div>
    </div>
    <!-- end page1 -->

    <!-- start next -->
    <div class="a4-landscape">
      <div v-for="(item, index) in data" :key="index">
        <div :class="index != 0 ? 'q-pt-lg' : 'q-pt-xl'">
          <div :class="{ 'q-pt-md': $route.name == 'printAll' }">
            {{ item.header }}
          </div>

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
                    <div v-html="item.basic.explain"></div>
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
                    <div v-html="item.advance.explain"></div>
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
                    <div v-html="item.significance.explain"></div>
                  </td>
                </tr>
                <tr v-show="index == 1" style="visibility: hidden">
                  <td colspan="3" style="height: 200px">123456</td>
                </tr>
                <tr
                  v-show="index == 1 && $route.name == 'printAll'"
                  style="visibility: hidden"
                >
                  <td colspan="3" style="height: 100px">123456</td>
                </tr>
                <tr
                  v-show="index == 2 && $route.name != 'printAll'"
                  style="visibility: hidden"
                >
                  <td colspan="3" style="height: 470px">123456</td>
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
                status: false,
              },
              {
                text: `การประสานงานในกระบวนการที่ต้องผ่านหลายส่วนราชการ เพื่อให้เกิดประสิทธิผล`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.1 advanec
          advance: {
            mode: "advance",
            titleText: `- มีการติดตามควบคุมกระบวนการโดยใช้ตัวชี้วัดและใช้ประโยชน์จากเทคโนโลยีดิจิทัลที่ทันสมัยและข้อมูลร่วมกับเครือข่ายภายนอกเพื่อการ ทำงานที่เกิดประสิทธิผล`,
            checkBox: [
              {
                text: `การติดตามควมคุมกระบวนการโดยใช้ตัวชี้วัดและใช้ประโยชน์จากเทคโนโลยีที่ทันสมัย`,
                status: false,
              },
              {
                text: `การติดตามควบคุมกระบวนการโดยการใช้ข้อมูลร่วมกับเครือข่าย จากภายนอก`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.1 significance
          significance: {
            mode: "significance",
            titleText: `- การใช้เทคโนโลยีดิจิทัลในการจัดการกระบวนการและการติดตามรายงานผลอย่างรวดเร็ว ฉับไว และตอบสนองการบูรณาการที่มุ่งสู่ความเป็นเลิศ (Operational excellence)`,
            checkBox: [
              {
                text: `การใช้เทคโนโลยีดิจิทัลในการจัดการกระบวนการและการติดตาม รายงานผลอย่างรวดเร็ว`,
                status: false,
              },
              {
                text: `การวิเคราะห์อุปสรรคปัญหาที่เกิดขึ้น หรือการใช้ข้อมูลเทียบเคียง(Benchmarks) ผลการดำเนินงานเพื่อออกแบบกระบวนการทำงานให้ตอบสนองการบูรณาการที่มุ่งสู่ความเป็นเลิศ`,
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
                status: false,
              },
              {
                text: `กำหนดตัวชี้วัดที่ใช้ในการติดตามควบคุมการดำเนินการ`,
                status: false,
              },
              {
                text: `มีแนวทางและเครื่องมือในการปรับปรุงผลผลิต กระบวนการ และการบริการให้ดีขึ้น`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 6.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `การสร้างนวัตกรรมในการปรับปรุงกระบวนการ<br>- กระบวนการหลัก <br>- กระบวนการสนับสนุน <br>- การบริการประชาชน <br>- ความสะดวกและการสื่อสาร`,
            checkBox: [
              {
                text: `กระบวนหลัก`,
                status: false,
              },
              {
                text: `กระบวนการสนับสนุน`,
                status: false,
              },
              {
                text: `การบริการประชาชน`,
                status: false,
              },
              {
                text: `ความสะดวกในการรับข้อมูลข่าวสาร`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.2 significance
          significance: {
            mode: "significance",
            titleText: `- การสร้างนวัตกรรมในการปรับปรุงผลผลิต และการแก้ไขปัญหาในเชิงกระบวนการระดับองค์การจนเกิดความเป็นเลิศ นำไป สู่ผลลัพธ์ที่เป็นประโยชน์กับประชาชนและภาคธุรกิจ(Public value)`,
            checkBox: [
              {
                text: `การสร้างความร่วมมือกับทุกภาคส่วนในการแก้ปัญหาเชิง บูรณาการ`,
                status: false,
              },
              {
                text: `การสร้างนวัตกรรมการปรับปรุงที่มีผลกระทบสูงจากการมีส่วนร่วมของผู้ที่เกี่ยวข้อง อาจดำเนินการผ่าน Government Innovation Lab โดยอาศัยกระบวนการคิดเชิงออกแบบ (Design Thinking)`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
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
                status: false,
              },
              {
                text: `การวางแผนการลดต้นทุนทั้งระยะสั้นและระยะยาว`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 6.3 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- นำผลการวิเคราะห์ไปใช้ในการลดต้นทุนและเพิ่มประสิทธิภาพในการ ทำงานจาก <br>- นโยบายการลดต้นทุน <br>- การใช้เทคโนโลยีที่ทันสมัย <br>- แบ่งปันทรัพยากรในการทำงานร่วมกัน`,
            checkBox: [
              {
                text: `การลดต้นทุนและเพิ่มประสิทธิภาพในการทำงานจากการใช้เทคโนโลยีและการแบ่งปันทรัพยากรในการทำงานร่วมกัน`,
                status: false,
              },
              {
                text: `การติดตามผลการลดต้นทุนและเพิ่มประสิทธิภาพ`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 6.2 significance
          significance: {
            mode: "significance",
            titleText: `- การใช้เทคโนโลยีดิจิทัลเพื่อนวัตกรรมในการลดต้นทุนเพื่อเพิ่มขีดความสามารถในการแข่งขันโดยใช้ข้อมูลเทียบเคียงทั้งในระดับประเทศ และระดับนานาชาติ`,
            checkBox: [
              {
                text: `การใช้เทคโนโลยีดิจิทัลเพื่อสร้างนวัตกรรมในการลดต้นทุน`,
                status: false,
              },
              {
                text: `การใช้ข้อมูลเทียลเคียง (Benchmarks) ทั้งในระดับประเทศและ นานาชาติ เพื่อการลดต้นทุนและเพิ่มขีดความสามารถในการ แข่งขัน`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
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
                status: false,
              },
              {
                text: `มีการติดตามควบคุมกระบวนการสนับสนุนโดยใช้ข้อมูล และตัวชี้วัดของกระบวนการสนับสนุน ในมิติต่างๆ เพื่อให้เกิด ประสิทธิภาพและประสิทธิผลของกระบวนการ`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 6.4 advanec
          advance: {
            mode: "advance",
            titleText: `การเตรียมการเชิงรุกเพื่อลดผลกระทบที่อาจเกิดต่อประสิทธิผลของ องค์การโดย<br>- การจัดการความเสี่ยง <br>- การติดตามควบคุมกระบวนการหลักและกระบวนการสนับสนุนโดยใช้ตัวชี้วัดและข้อมูลทั้งในเชิงป้องกันและเชิงรุก<br>- การเตรียมพร้อมเพื่อรับมือกับเหตุการณ์ภัยพิบัติและภาวะฉุกเฉินซึ่งอาจส่งผลต่อประสิทธิผลของกระบวนการและนำมาแก้ปัญหาได้อย่างทันท่วงที`,
            checkBox: [
              {
                text: `การติดตามควบคุมตัวชี้วัดนำ (Leading Indicators) ทั้งเชิงป้องกันและเชิงรุก ซึ่งจะส่งผลต่อประสิทธิผลของกระบวนการ และนำมาแก้ปัญหาได้อย่างทันท่วงที`,
                status: false,
              },
              {
                text: `การจัดการความเสี่ยงอย่างมีประสิทธิภาพ`,
                status: false,
              },
              {
                text: `การเตรียมพร้อมเพื่อรับมือกับภัยพิบัติและภาวะฉุกเฉิน ตลอดจนการเตรียมตัวล่วงหน้าเพื่อลดความเสียหาย`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.4 significance
          significance: {
            mode: "significance",
            titleText: `- การประสานงานและบูรณาการของกระบวนการต่างๆ ทั้งภายในและภาย นอกเพื่อการสร้างมูลค่าเพิ่มตอบสนองยุทธศาสตร์และส่งผลต่อเศรษฐกิจ สังคม สาธารณสุข และสิ่งแวดล้อม`,
            checkBox: [
              {
                text: `มีการวิเคราะห์ผลกระทบที่เกิดขึ้นทั้งกระบวนการหลักและกระบวนการสนับสนุนที่อาจส่งผลกระทบต่อการบรรลุยุทธศาสตร์`,
                status: false,
              },
              {
                text: `การประสานงานและบูรณาการทั้งภายในและภายนอกเพื่อการบรรลุยุทธศาสตร์และผลกระทบต่อเศรษฐกิจ สังคม สาธารณสุข และสิ่งแวดล้อม`,
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
        step: 6,
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
          this.data[i - 1].advance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));

          let checkBoxBasic = getDataBasic[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));

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
          this.data[i - 1].significance.explain = getData[0].text;
          let checkBox = getData[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));

          let checkBoxBasic = getDataBasic[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));

          let checkBoxAdvance = getDataAdvance[0].check_box
            .split(",")
            .map((x) => (x == 1 ? true : false));

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
  background-color: #797a7c;
}
.t-color {
  color: #797a7c;
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
