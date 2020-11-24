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
        หมวด 1 การนำองค์การ
      </div>

      <div class="q-pt-md">
        <p>
          <b class="t-color">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เป้าหมาย :
          </b>
          เพื่อให้ระบบการนำองค์การของส่วนราชการมุ่งเน้นสัมฤทธิผลและสร้างความยั่งยืนให้กับองค์การ
          โดยส่วนราชการกำหนดวิสัยทัศน์และแผนยุทธศาสตร์ที่นำไปสู่การบรรลุพันธกิจและสอดรับกับยุทธศาสตร์ชาติ
          กำหนดนโยบายในการกำกับดูแลที่มีประสิทธิผลในเรื่องการป้องกันทุจริตและการสร้างความโปร่งใส
          สร้างสภาพแวดล้อมภายในที่มุ่งเน้นการบรรลุผลสัมฤทธิ์ของส่วนราชการ
          ส่งเสริมให้เกิดนวัตกรรมและการแก้ไขปัญหาร่วมกับเครือข่าย
          ติดตามประเมินผลการดำเนินการของส่วนราชการ และผลกระทบที่เกิดขึ้น
          ทั้งระยะสั้นและระยะยาวต่อเนื่องและทันการณ์
          (ด้วยกลไกของเทคโนโลยีดิจิทัล)
          โดยคำนึงถึงผลกระทบต่อสังคมและมุ่งเน้นให้เกิดผลลัพธ์ที่นำไปสู่การพัฒนาประเทศตามทิศทางยุทธศาสตร์
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
        <div class="row bg-green-1" style="color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            1.1 ระบบการนำองค์การที่สร้างความยั่งยืน
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            วิสัยทัศน์/ยุทธศาสตร์ตอบสนองพันธกิจ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            วิสัยทัศน์/ยุทธศาสตร์สอดรับกับยุทธศาสตร์ประเทศ
          </div>
          <div align="center" class="col-3 q-pa-md">
            สร้างนวตกรรม/วัฒนธรรมที่มุ่งประโยชน์สุขประชาชน
          </div>
        </div>
        <!-- 2.2 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            1.2 ป้องกันทุจริตและ สร้างความโปร่งใส
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            นโยบายการป้องกันทุจริต และระบบกำกับดูแลที่มีประสิทธิภาพ
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            การติดตาม ปรับปรุง และรายงานผลต่อสาธารณะและหน่วยงานบังคับบัญชา
          </div>
          <div align="center" class="col-3 q-pa-md">
            ผลการประเมินในระดับดีโดยหน่วยงานภายนอก
            เป็นแบบอย่างที่ดีและการสร้างต้นแบบด้านความโปร่งใส
          </div>
        </div>
        <!-- 2.3 -->
        <div class="row bg-green-1" style="color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            1.3
            การมุ่งเน้นผลสัมฤทธิ์ผ่านการสร้างการมีส่วนร่วมจากเครือข่ายทั้งภายในและภายนอก
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            สร้างสภาพแวดล้อมที่มุ่งเน้นผลสัมฤทธิ์ผ่านการมีส่วนร่วมของบุคลากรภายในและการสร้างเครือข่ายภายนอก
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            การตั้งเป้าหมายท้าทาย
            และการส่งเสริมให้เกิดนวัตกรรมของกระบวนการและการบริการ
          </div>
          <div align="center" class="col-3 q-pa-md">
            สร้างนวัตกรรมเชิงนโยบายที่มีผลกระทบสูงที่สามารถแก้ปัญหาที่ซับซ้อน
          </div>
        </div>
        <!-- 2.4 -->
        <!-- <div
          class="row"
          style="background-color:#F2F2F2;color:#4D4C4E;visibility:hidden;height:20px"
        ></div> -->
        <div style="height: 35px; background-color: #f2f2f2" class="row">
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3 brr"></div>
          <div class="col-3"></div>
        </div>
        <!-- 2.4 -->
        <div class="row" style="background-color: #F2F2F2; color: #4D4C4E">
          <div align="center" class="col-3 q-pa-md brr">
            1.4 คำนึงถึงผลกระทบต่อสังคมและการมุ่งเน้นให้เกิดผลลัพธ์
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            ติดตามตัวชี้วัดและผลการดำเนินงานอย่างต่อเนื่อง
          </div>
          <div align="center" class="col-3 q-pa-md brr">
            การใช้กลไกการสื่อสารและเทคโนโลยีดิจิทัลเพื่อนำไปสู่การแก้ไขปัญหาอย่างทันกาล
          </div>
          <div align="center" class="col-3 q-pa-md">
            ติดตามผลดำเนินการและผลกระทบระยะสั้น และระยะยาวที่มีต่อเศรษฐกิจ สังคม
            สาธารณสุข และสิ่งแวดล้อม
          </div>
        </div>
      </div>

      <div align="center" class="q-mt-lg">หมวด 1 การนำองค์การ</div>
    </div>
    <!-- end page1 -->

    <!-- start next -->
    <div class="a4-landscape  ">
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
                  <th style="width: 20%">คำอธิบาย</th>
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
                  <td class="q-pa-xs" style="vertical-align: top">
                    <div
                      class="q-mt-sm"
                      v-for="(checkbox, indexCheckbox) in item.basic.checkBox"
                      :key="indexCheckbox"
                    >
                      <div class="row ">
                        <div class="col-1" style="width: 30px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="item.basic.checkBox_a[indexCheckbox]"
                          />
                        </div>

                        <div class="col-1 " style="width: 45px" align="center">
                          <q-checkbox
                            color="teal"
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
                  <td class="q-pa-sm" style="vertical-align: top">
                    <span v-html="item.basic.suggesstion"></span>
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
                        <div class="col-1" style="width: 30px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="item.advance.checkBox_a[indexCheckbox]"
                          />
                        </div>
                        <div class="col-1 " style="width: 45px" align="center">
                          <q-checkbox
                            color="teal"
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
                  <td class="q-pa-sm" style="vertical-align: top">
                    <span v-html="item.advance.suggesstion"></span>
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
                        <div class="col-1" style="width: 30px" align="center">
                          <q-checkbox
                            color="pink-4"
                            keep-color=""
                            read-only
                            :value="item.significance.checkBox_a[indexCheckbox]"
                          />
                        </div>
                        <div class="col-1 " style="width: 45px" align="center">
                          <q-checkbox
                            color="teal"
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

.brr {
  border-right: 1px solid;
}
.b-color {
  background-color: green;
}
.t-color {
  color: green;
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
  min-height: 210mm;
  max-height: fit-content;
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
