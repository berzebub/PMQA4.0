<template>
  <div class v-show="isLoadAssessmentFinish">
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 1 การนำองค์กร</span>
      </div>
    </div>

    <!-- Start BOX 1 -->
    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <div>
        <q-list bordered>
          <q-expansion-item
            group="dataFormStep2"
            header-class="bg-white "
            dense-toggle
            dense
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
                <div class="col-3 self-center q-px-xl" style="width:250px;">
                  <div style="width:180px;border:1px solid" align="center">
                    <span class="font-18" v-if="item.status == -1">ยังไม่ทำการประเมิน</span>
                    <span v-else>
                      <!-- {{ parseInt(item.score) }} -->

                   {{ checkModeStatus(item.basic.checkBox,item.advance.checkBox,item.significance.checkBox) }}
                      </span>
                    <span v-else>Significance</span>
                  </div>
                </div>
              </div>
            </template>

            <q-card>
              <q-separator class="bg-grey-7" style="height: 1px;"></q-separator>
              <div>
                <div class>
                  <!-- Basic -->
                  <div class="row bg-grey-4 q-py-sm">
                    <div style="width:370px" align="center">
                      <span class="font-18b">ระดับดำเนินการ</span>
                    </div>
                    <div class="col" align="center">
                      <span class="font-18b">แนวทางดำเนินการ</span>
                    </div>
                    <div class="col" align="center">
                      <span class="font-18b">คำอธิบายผลการประเมิน</span>
                    </div>
                  </div>
                  <div class="row q-px-md">
                    <div class="col-5" style="width:370px;border-right:1px solid #e0e0e0">
                      <div class="q-pa-md font-18 q-mb-sm">
                        <div
                          align="center"
                          style="border:1px solid black;border-radius:5px;width:100px;font-size:18px"
                        >Basic</div>
                        <div class="q-mt-md">
                          <span v-html="item.basic.titleText"></span>
                        </div>
                      </div>
                    </div>

                    <div class="col" style="border-right:1px solid #e0e0e0">
                      <!-- Check Box Basic -->
                      <div class="q-pa-md font-18">
                        <div class="q-mt-sm">
                          <div
                            class="row"
                            v-for="(checkbox, index3) in item.basic
                                  .checkBox"
                            :class="index3 != 0 ? 'q-mt-md' : null"
                          >
                            <div class="col-1" style="width:50px;" align="center">
                              <q-checkbox
                                color="pink-4"
                                keep-color
                                v-model="checkbox.status"
                                value
                              />
                            </div>
                            <div class="col q-py-xs" v-html="checkbox.text"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col q-pl-lg q-pt-md q-pr-sm">
                      <!-- Explain Basic -->
                      <div class>
                        <!-- <div>
                          <span class="font-18b">คำอธิบายผลการประเมิน</span>
                        </div>-->
                        <div class="q-my-md">
                          <q-input
                            v-model="item.basic.explain"
                            outlined
                            placeholder="คำอธิบายผลการประเมิน"
                            type="textarea"
                            rows="17"
                          />
                        </div>
                      </div>

                      <!-- Upload File Basic -->
                      <div class="q-pb-sm">
                        <div class="row">
                          <div class="col-12 q-py-md self-start">
                            <q-file
                              v-model="item.basic.pdf_file"
                              dense
                              style="overflow:hidden;"
                              borderless
                              accept=".pdf"
                              v-if="!item.basic.pdf_file"
                              @input="saveData(item.no, 'basic')"
                            >
                              <template v-slot:prepend>
                                <div
                                  class="absolute-center fit"
                                  align="center"
                                  v-if="!item.basic.pdf_file"
                                >
                                  <span class="font-16 text-black">
                                    <u>อัพโหลด pdf เอกสารเพิ่มเติม</u>
                                  </span>
                                </div>

                                <div class="absolute-center full-width" align="center" v-else>
                                  <q-icon name="fas fa-file-pdf" class="color1 q-px-xs" size="25px"></q-icon>
                                  <span
                                    class="font-14 text-black"
                                    style="text-decoration:underline"
                                  >pdf เอกสารเพิ่มเติม</span>
                                </div>
                              </template>
                              <template v-slot:file></template>
                            </q-file>
                            <div
                              class="relative-position justify-center row"
                              align="center"
                              v-if="item.basic.pdf_file"
                            >
                              <div style="width:190px">
                                <q-btn style="width:180px" color="teal">
                                  <div class="row items-center fit">
                                    <div style>
                                      <q-icon name="fas fa-file-pdf"></q-icon>
                                    </div>
                                    <div class="col font-18">PDF</div>
                                  </div>
                                </q-btn>
                              </div>
                              <div style="width:50px">
                                <q-btn
                                  @click="
                                      (typeFile = 'PDF'),
                                        (typeNo = item.no),
                                        (typeMode = 'basic'),
                                        (isDelete = true)
                                    "
                                  icon="fas fa-trash-alt"
                                  flat
                                ></q-btn>
                              </div>
                            </div>
                            <p
                              style="font-size:14px;color:#757575"
                              class="q-pt-sm"
                            >model หรือ workflow เฉพาะไฟล์ pdf ไม่เกิน 2 หน้า เพียง 1 ไฟล์</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- </q-tab-panel> -->

                  <!-- ADVANCE -->

                  <div>
                    <div class="row bg-grey-4 q-py-sm">
                      <div style="width:370px" align="center">
                        <span class="font-18b">ระดับดำเนินการ</span>
                      </div>
                      <div class="col" align="center">
                        <span class="font-18b">แนวทางดำเนินการ</span>
                      </div>
                      <div class="col" align="center">
                        <span class="font-18b">คำอธิบายผลการประเมิน</span>
                      </div>
                    </div>

                    <div class="row q-px-md">
                      <div class="col-5" style="width:370px;border-right:1px solid #e0e0e0">
                        <div class="q-pa-md font-18 q-mb-sm">
                          <div
                            align="center"
                            style="border:1px solid black;border-radius:5px;width:100px;font-size:18px"
                          >Advance</div>
                          <div class="q-mt-md">
                            <span v-html="item.advance.titleText"></span>
                          </div>
                        </div>
                      </div>
                      <div class="col" style="border-right:1px solid #e0e0e0">
                        <div class="q-pa-md font-18">
                          <div
                            class="q-mt-sm"
                            v-for="(checkbox, advanceCheckboxIndex) in item
                                .advance.checkBox"
                            :key="advanceCheckboxIndex"
                          >
                            <div class="row">
                              <div class="col-1" style="width:50px;" align="center">
                                <q-checkbox
                                  color="pink-4"
                                  keep-color
                                  v-model="checkbox.status"
                                  value
                                />
                              </div>
                              <div class="col q-py-xs">
                                <span v-html="checkbox.text"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col q-pl-lg q-pr-sm">
                        <div>
                          <div class="q-my-md">
                            <q-input
                              v-model="item.advance.explain"
                              outlined
                              placeholder="คำอธิบายผลการประเมิน"
                              type="textarea"
                              rows="17"
                            />
                          </div>
                        </div>
                        <div class="q-pb-sm">
                          <div class="row">
                            <div class="col-12 q-py-md self-start">
                              <q-file
                                v-model="item.advance.pdf_file"
                                dense
                                style="overflow:hidden;"
                                borderless
                                accept=".pdf"
                                v-if="!item.advance.pdf_file"
                                @input="saveData(item.no, 'advance')"
                              >
                                <template v-slot:prepend>
                                  <div
                                    class="absolute-center fit"
                                    align="center"
                                    v-if="!item.advance.pdf_file"
                                  >
                                    <span class="font-16 text-black">
                                      <u>อัพโหลด pdf เอกสารเพิ่มเติม</u>
                                    </span>
                                  </div>

                                  <div class="absolute-center full-width" align="center" v-else>
                                    <q-icon
                                      name="fas fa-file-pdf"
                                      class="color1 q-px-xs"
                                      size="25px"
                                    ></q-icon>
                                    <span
                                      class="font-14 text-black"
                                      style="text-decoration:underline"
                                    >pdf เอกสารเพิ่มเติม</span>
                                  </div>
                                </template>
                                <template v-slot:file></template>
                              </q-file>
                              <div
                                class="relative-position justify-center row"
                                align="center"
                                v-if="item.advance.pdf_file"
                              >
                                <div style="width:190px">
                                  <q-btn style="width:180px" color="teal">
                                    <div class="row items-center fit">
                                      <div style>
                                        <q-icon name="fas fa-file-pdf"></q-icon>
                                      </div>
                                      <div class="col font-18">PDF</div>
                                    </div>
                                  </q-btn>
                                </div>
                                <div style="width:50px">
                                  <q-btn
                                    @click="
                                      (typeFile = 'PDF'),
                                        (typeNo = item.no),
                                        (typeMode = 'advance'),
                                        (isDelete = true)
                                    "
                                    icon="fas fa-trash-alt"
                                    flat
                                  ></q-btn>
                                </div>
                              </div>
                              <p
                                style="font-size:14px;color:#757575"
                                class="q-pt-sm"
                              >model หรือ workflow เฉพาะไฟล์ pdf ไม่เกิน 2 หน้า เพียง 1 ไฟล์</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- </q-tab-panel> -->

                  

                    <div>
                    <div class="row bg-grey-4 q-py-sm">
                      <div style="width:370px" align="center">
                        <span class="font-18b">ระดับดำเนินการ</span>
                      </div>
                      <div class="col" align="center">
                        <span class="font-18b">แนวทางดำเนินการ</span>
                      </div>
                      <div class="col" align="center">
                        <span class="font-18b">คำอธิบายผลการประเมิน</span>
                      </div>
                    </div>

                    <div class="row q-px-md">
                      <div class="col-5" style="width:370px;border-right:1px solid #e0e0e0">
                        <div class="q-pa-md font-18 q-mb-sm">
                          <div
                            align="center"
                            style="border:1px solid black;border-radius:5px;width:130px;font-size:18px"
                          >Significance</div>
                          <div class="q-mt-md">
                            <span v-html="item.significance.titleText"></span>
                          </div>
                        </div>
                      </div>
                      <div class="col" style="border-right:1px solid #e0e0e0">
                        <div class="q-pa-md font-18">
                          <div
                            class="q-mt-sm"
                            v-for="(checkbox, significanceCheckboxIndex) in item
                                .significance.checkBox"
                            :key="significanceCheckboxIndex"
                          >
                            <div class="row">
                              <div class="col-1" style="width:50px;" align="center">
                                <q-checkbox
                                  color="pink-4"
                                  keep-color
                                  v-model="checkbox.status"
                                  value
                                />
                              </div>
                              <div class="col q-py-xs">
                                <span v-html="checkbox.text"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col q-pl-lg q-pr-sm">
                        <div>
                          <div class="q-my-md">
                            <q-input
                              v-model="item.significance.explain"
                              outlined
                              placeholder="คำอธิบายผลการประเมิน"
                              type="textarea"
                              rows="17"
                            />
                          </div>
                        </div>
                        <div class="q-pb-sm">
                          <div class="row">
                            <div class="col-12 q-py-md self-start">
                              <q-file
                                v-model="item.significance.pdf_file"
                                dense
                                style="overflow:hidden;"
                                borderless
                                accept=".pdf"
                                v-if="!item.significance.pdf_file"
                                @input="saveData(item.no, 'significance')"
                              >
                                <template v-slot:prepend>
                                  <div
                                    class="absolute-center fit"
                                    align="center"
                                    v-if="!item.significance.pdf_file"
                                  >
                                    <span class="font-16 text-black">
                                      <u>อัพโหลด pdf เอกสารเพิ่มเติม</u>
                                    </span>
                                  </div>

                                  <div class="absolute-center full-width" align="center" v-else>
                                    <q-icon
                                      name="fas fa-file-pdf"
                                      class="color1 q-px-xs"
                                      size="25px"
                                    ></q-icon>
                                    <span
                                      class="font-14 text-black"
                                      style="text-decoration:underline"
                                    >pdf เอกสารเพิ่มเติม</span>
                                  </div>
                                </template>
                                <template v-slot:file></template>
                              </q-file>
                              <div
                                class="relative-position justify-center row"
                                align="center"
                                v-if="item.significance.pdf_file"
                              >
                                <div style="width:190px">
                                  <q-btn style="width:180px" color="teal">
                                    <div class="row items-center fit">
                                      <div style>
                                        <q-icon name="fas fa-file-pdf"></q-icon>
                                      </div>
                                      <div class="col font-18">PDF</div>
                                    </div>
                                  </q-btn>
                                </div>
                                <div style="width:50px">
                                  <q-btn
                                    @click="
                                      (typeFile = 'PDF'),
                                        (typeNo = item.no),
                                        (typeMode = 'significance'),
                                        (isDelete = true)
                                    "
                                    icon="fas fa-trash-alt"
                                    flat
                                  ></q-btn>
                                </div>
                              </div>
                              <p
                                style="font-size:14px;color:#757575"
                                class="q-pt-sm"
                              >model หรือ workflow เฉพาะไฟล์ pdf ไม่เกิน 2 หน้า เพียง 1 ไฟล์</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- </q-tab-panel> -->
                  <!-- </q-tab-panels> -->
                </div>
              </div>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>


    <div align="center" class='q-pt-lg'>
      <q-btn @click='sendData()' label="บันทึกข้อมูล" style='width:220px' color="teal"></q-btn>
    </div>

    <q-dialog v-model="isDelete" persistent>
      <q-card style="max-width:400px;width:100%;">
        <q-card-section align="center">
          <div class="q-pb-md">
            <span style="font-size:24px;">ลบไพล์</span>
          </div>
          <div class="q-pa-md font-18">
            <span>คุณต้องการลบไฟล์ {{ typeFile }} หรือไม่</span>
          </div>
        </q-card-section>
        <q-card-section>
          <div align="center">
            <q-btn
              class="font-14 q-mx-xs"
              dense
              outline
              style="width:130px;border-radius:0px;"
              label="ยกเลิก"
              v-close-popup
            ></q-btn>
            <q-btn
              class="bg-teal text-white font-14 q-mx-xs"
              push
              dense
              style="width:130px;border-radius:0px;"
              label="ตกลง"
              :disable="isSaveData"
              @click="deleteFile(typeNo, typeMode)"
            ></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
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
          header:
            "1.1 ระบบการนำองค์กรของส่วนราชการได้สร้างองค์กรที่ยั่งยืน โดยการกำหนดวิสัยทัศน์และแผนยุทธศาสตร์เชื่อมโยง สู่การบรรลุพันธกิจ การมุ่งเน้นประโยชน์สุขประชาชนและการบรรลุผลยุทธศาสตร์ชาติและความสามารถในการแข่งขัน",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 1,
          // 1.1 basic
          basic: {
            mode: "basic",
            titleText: `- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืนโดยการกำหนดวิสัยทัศน์  และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจ และภาระหน้าที่ของส่วนราชการ (Mission based) 
            
            <br>- มีการถ่ายทอดผ่านระบบการนำองค์กรเพื่อให้เกิดการดำเนินการทั่ว ทั้งส่วนราชการ `,
            checkBox: [
              {
                text: `ผู้บริหารกำหนดวิสัยทัศน์ ยุทธศาสตร์ เป้าหมายและตัวชี้วัด ชัดเจนตอบสนอง ต่อพันธกิจและภาระหน้าที่ของส่วนราชการ`,
                status: false,
              },
              {
                text: `ผู้บริหารสื่อสารถ่ายทอดวิสัยทัศน์ ยุทธศาสตร์ เป้าหมาย และตัวชี้วัดไปสู่ทุกระดับ ขององค์กรอย่างทั่วถึง`,
                status: false,
              },
              {
                text: `ส่วนราชการมีระบบการสื่อสารภายในองค์กรทั่วถึง รวดเร็ว ทันการณ์`,
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
            titleText: `- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน โดยการกำหนดวิสัยทัศน์ และยุทธศาสตร์ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ และสอดรับกับยุทธศาสตร์ชาติ (Alignment with National Strategies)`,
            checkBox: [
              {
                text: `การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ <br>- สนับสนุนการบรรลุยุทธศาสตร์และสร้างขีดความสามารถใน การแข่งขันของประเทศ <br>- พิจารณาและคำนึงถึงผลกระทบต่อสังคมทั้งเชิงบวกและเชิงลบ ทั้งทางตรงและทางอ้อม`,
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
            titleText: `- ผู้บริหารของส่วนราชการได้สร้างความยั่งยืน โดยการกำหนด ยุทธศาสตร์ ที่ตอบสนองต่อพันธกิจและภาระหน้าที่ของส่วนราชการ สอดรับกับทิศทางการพัฒนาและยุทธศาสตร์พื้นที่สร้างนวัตกรรมและ วัฒนธรรมในการมุ่งประโยชน์สุขประชาชน (Innovation, Citizen-centric)`,
            checkBox: [
              {
                text: `การกำหนดวิสัยทัศน์และยุทธศาสตร์ของส่วนราชการ
            <br>- บูรณาการยุทธศาสตร์ชาติ / ยุทธศาสตร์พื้นที่ (ถ้ามี)
            <br>- สร้างการเปลี่ยนแปลงในเกิดวัฒนธรรมที่มุ่งเน้นประชาชน เช่น มีนโยบายการสร้างนวัตกรรมการให้บริการเพื่ออำนวยความสะดวก
              และตอบสนองความต้องการของประชาชน`,
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
          header: "1.2 การป้องกันทุจริตและสร้างความโปร่งใส",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 2,
          score: 0,
          // 1.2 basic
          basic: {
            mode: "basic",
            titleText: `- นโยบายและระบบการกำกับดูแลที่เสริมสร้างความโปร่งใสและการ
            ป้องกันทุจริต รวมทั้งระบบการตรวจสอบที่มีประสิทธิภาพ<br>
          - มีมาตรการที่ถ่ายทอดสู่การปฏิบัติและการติดตามรายงานผลอย่าง   
            ชัดเจน`,
            checkBox: [
              {
                text: `แนวทางและระบบการตรวจสอบกำกับดูแลที่เสริมสร้างความ
              โปร่งใสและป้องกันทุจริต`,
                status: false,
              },
              {
                text: `มาตรการที่ถ่ายทอดสู่การปฏิบัติและติดตามรายงานผล อย่างชัดเจน`,
                status: false,
              },
              {
                text: `การบริหารงานตามหลักธรรมภิบาล`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.2 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- การประเมินประสิทธิผลและตัววัดการป้องกันทุจริตและการสร้างความโปร่งใสภายในส่วนราชการ และมีการปรับปรุงอย่างสม่ำเสมอ<br>
                      - การรายงานผลการดำเนินการของส่วนราชการต่อสาธารณะ   
                        และหน่วยงานบังคับบัญชา`,
            checkBox: [
              {
                text: `มีตัววัดในการตรวจติดตามป้องกันทุจริต และมีการปรับปรุง
            สม่ำเสมอ`,
                status: false,
              },
              {
                text: `มีมาตรการป้องกันการทุจริตในเชิงรุก (Pro-active) เช่น พัฒนากระบวนการทำงานให้โปร่งใส มีระบบร้องเรียน/ร้องทุกข์ สร้างกระบวนการติดตามตรวจสอบการทุจริต และการปกป้องผู้ร้องเรียน`,
                status: false,
              },
              {
                text: `เปิดเผยผลการดำเนินงานสู่สาธารณะ`,
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
            titleText: `-ผลการประเมินความโปร่งใสในระดับองค์กรโดยองค์กรอิสระ<br>ระดับชาติหรือนานาชาติ<br>
            -เป็นแบบอย่างที่ดีและการสร้างต้นแบบด้านความโปร่งใส`,
            checkBox: [
              {
                text: `มีดัชนีความโปร่งใสจากการประเมินโดยองค์กรอิสระและมี ผลลัพธ์ที่ดี`,
                status: false,
              },
              {
                text: `มีการส่งเสริมการเป็นองค์กรด้านความโปร่งใส เช่น มีการ ค้นหาความเป็นเลิศ (Best Practice:BP) ด้านความโปร่งใส มีการสร้างต้นแบบ (Role Model) ด้านความโปร่งใส`,
                status: false,
              },
              {
                text: `ได้รับรางวัลความโปร่งใสจากองค์กรภายนอก หรือ ได้รับรางวัลคุณธรรมและความโปร่งใสในระดับหน่วยงาน`,
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
          score: 0,
          header:
            "1.3 การมุ่งเน้นการบรรลุผลสัมฤทธิ์ของส่วนราชการผ่านการสร้างการมีส่วนร่วมของบุคลากรภายในและภายนอก",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 3,
          // 1.3 basic
          basic: {
            mode: "basic",
            titleText: `- การสื่อสารและการสร้างสภาพแวดล้อมภายในเพื่อให้มุ่งเน้นผลสัมฤทธิ์<br>
            - การสร้างกลไกที่เอื้อให้ประชาชนและเครือข่ายภายนอกเข้ามามีส่วนร่วม
              ในการทำงาน`,
            checkBox: [
              {
                text: `ส่วนราชการมีแนวทางสื่อสารและสร้างสภาพแวดล้อมภายใน
              องค์กรให้มุ่งผลสัมฤทธิ์ในการทำงาน`,
                status: false,
              },
              {
                text: `ปรับปรุงกฏระเบียบที่เอื้อให้ประชาชนเข้ามามีส่วนร่วม`,
                status: false,
              },
              {
                text: `มีแนวทางในการสร้างเครือข่ายให้ ภาคประชาชน ภาคเอกชน และท้องถิ่นจากองค์กรภายนอกเข้ามามีส่วนร่วมกันในการทำงาน`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.3 advance ******************************
          advance: {
            mode: "advance",
            titleText: `- การตั้งเป้าหมาย ท้าทาย และการส่งเสริมให้เกิดนวัตกรรมของกระบวนการและการบริการผ่านเครือข่ายภาคประชาชน ภาคเอกชน และท้องถิ่น`,
            checkBox: [
              {
                text: `มีการตั้งเป้าหมายที่ท้าทายรองรับการเปลี่ยนแปลง`,
                status: false,
              },
              {
                text: `มีแนวทางการส่งเสริมให้เกิดนวัตกรรมของกระบวนการทำงานและการให้บริการผ่านเครือข่ายภาคประชาชน ภาคเอกชน และท้องถิ่น`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.3 significance
          significance: {
            mode: "significance",
            titleText: `- การสร้างนวัตกรรมที่มีผลกระทบสูงและเชิงนโยบายที่นำไปสู่การแก้
            ปัญหาที่มีความซับซ้อน`,
            checkBox: [
              {
                text: `ผู้บริหารส่งเสริมการสร้างนวัตกรรมเชิงนโยบายที่ส่งผลในระดับ
                ประเทศและนำไปสู่การแก้ปัญหาที่มีความซับซ้อน เช่น การสร้าง
                ความร่วมมือจากหลายหน่วยงาน หรือการใช้กลไกห้องปฏิบัติการ นวัตกรรมภาครัฐ (Government Innovation Lab) โดยการนำ กระบวนการคิดเชิงออกแบบ (Design Thinking) ในลักษณะที่ให้
                ประชาชน/ผู้มีส่วนได้ส่วนเสียเข้ามามีส่วนร่วมในทุกกระบวนการ`,
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
          score: 0,
          header:
            "1.4 การคำนึงถึงผลกระทบต่อสังคมและการมุ่งเน้นให้เกิดผลลัพธ์ที่นำไปสู่การพัฒนาประเทศตามทิศทางยุทธศาสตร์",
          status: -1, //สถานะของข้อ 0 = ยังไม่ผ่าน, 1 = ผ่าน Basic, 2 = ผ่าน Advance, 3 = ผ่าน Signi
          no: 4,
          // 1.4 basic
          basic: {
            mode: "basic",
            titleText: `- การประเมินและติดตามโครงการ กระบวนการ และยุทธศาสตร์ที่อาจมีผลกระทบเชิงลบต่อสังคม<br>
            - การติดตามตัวชี้วัดและผลการดำเนินการขององค์กรอย่างต่อเนื่อง
            `,
            checkBox: [
              {
                text: `ประเมินความเสี่ยงโครงการ กระบวนการ และยุทธศาสตร์ที่อาจมีผลกระทบเชิงลบต่อสังคมอย่างต่อเนื่อง`,
                status: false,
              },
              {
                text: `เตรียมมาตรการป้องกันและแก้ไขปัญหาต่างๆ เช่น การทำประชาพิจารณ์ เพื่อรับฟังความคิดเห็นทั้งก่อน / ระหว่าง / หลังดำเนินโครงการ`,
                status: false,
              },
              {
                text: `กำหนดตัวชี้วัดและติดตามผลการดำเนินการอย่างต่อเนื่อง`,
                status: false,
              },
              {
                text: `รวบรวมข้อมูล / สถิติ / ผลการดำเนินการที่เกี่ยวข้อง ให้พร้อมต่อการถูกติดตาม / ตรวจสอบจากทุกภาคส่วน`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
          // 1.4 advanec
          advance: {
            mode: "advance",
            titleText: `- การติดตามรายงานผลกระทบ โดยผ่านกลไกการสื่อสารและเทคโนโลยี  
            ดิจิทัลเพื่อนำไปสู่การแก้ไขปัญหาอย่างทันการณ์ประชาชน ภาคเอกชน  
            และท้องถิ่น`,
            checkBox: [
              {
                text: `ใช้เทคโนโลยีการสื่อสารและดิจิทับที่ทันสมัยเพื่อติดตามชี้วัดและ ผลการดำเนินการเพื่อรายงานผลได้อย่างรวดเร็วและทัน เหตุการณ์`,
                status: false,
              },
              {
                text: `สร้างเครือข่ายเฝ้าระวังเพื่อการแก้ไขปัญหาได้อย่างรวดเร็วและทันเหตุการณ์`,
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
                status: false,
              },
              {
                text: `ส่วนราชการมีการติดตามตัววัด โดยมีการวิเคราะห์เพื่อรู้เท่าทัน สถานการณ์และกำหนดมาตรการ / แนวทางเพื่อป้องกัน / ส่งเสริมการดำเนินการเพื่อผลลัพธ์ ที่ดีต่อเศรษฐกิจ สังคม สาธารณสุข สิ่งแวดล้อม`,
                status: false,
              },
            ],
            explain: "",
            pdf_file: null,
            img_file: null,
          },
        },
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
    };
  },
  methods: {
    checkModeStatus(basic,advance,significance){

      let checkBasic = !basic.map(x => x.status).includes(false)
      let checkAdvance = !advance.map(x => x.status).includes(false)
      let checkSigni = !significance.map(x => x.status).includes(false)

      if(checkSigni && checkAdvance && checkBasic){
        return "Significance"
      }else if (checkBasic && checkAdvance){
        return "Advance"
      }else if(checkBasic) {
        return "Basic"
      }else{
        return "ไม่ผ่านการประเมิน"
      }


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
        (x) => x.q_number == no.toString()
      );
      if (checkStatus.length == 0) {
        return -1;
      } else {
        return this.checkStatus(no);
      }
    },

    async checkPassStatus() {
      let status = 0;
      let mapStatus = this.data.map((x) => x.status);
      if (!mapStatus.includes(-1)) {
        // ประเมินครบแล้วทุกข้อ
        status = 1;
      } else if (mapStatus.every((x) => x == -1)) {
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
        status: status, // 1 = finish
      };
      let data = await Axios.post(url, postData);
      this.$emit("statusForm");
    },

    async sendData(){
      this.loadingShow()
      await this.saveData(1,'basic')
      await this.saveData(1,'advance')
      await this.saveData(1,'significance')

      await this.saveData(2,'basic')
      await this.saveData(2,'advance')
      await this.saveData(2,'significance')

      await this.saveData(3,'basic')
      await this.saveData(3,'advance')
      await this.saveData(3,'significance')

      await this.saveData(4,'basic')
      await this.saveData(4,'advance')
      await this.saveData(4,'significance')
      this.loadingHide()
    },

    async saveData(no, mode) {
      console.clear();

      // this.isSaveData = true;

      let index = no - 1;
      let score = 0;
      const url = this.apiPath + "user/addUpdateCategory1_6.php";
      const userId = this.$q.sessionStorage.getItem("uid");
      const year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();

      formData.append("user_id", userId);
      formData.append("q_number", no);
      formData.append("mode", mode);
      formData.append("year", year);
      formData.append("step", 1);

      let basicCheckbox = this.data[index].basic.checkBox.map((x) =>
        x.status == true ? 1 : 0
      );
      let advanceCheckbox = this.data[index].advance.checkBox.map((x) =>
        x.status == true ? 1 : 0
      );
      let signiCheckbox = this.data[index].significance.checkBox.map((x) =>
        x.status == true ? 1 : 0
      );

      // console.log("--")
      // console.log(advanceCheckbox)
      // console.log("--")
      // console.log(signiCheckbox)

      // Basic
      let scorePerCheckboxBasic = 300 / basicCheckbox.length;
      let scoreBasic = basicCheckbox.filter((x) => x == 1);
      scoreBasic = scorePerCheckboxBasic * scoreBasic.length;
      // advance
      let scorePerCheckboxAdvance = 100 / advanceCheckbox.length;
      let scoreAdvance = advanceCheckbox.filter((x) => x == 1);
      scoreAdvance = scorePerCheckboxAdvance * scoreAdvance.length;
      // signi
      let scorePerCheckboxSigni = 100 / signiCheckbox.length;
      let scoreSigni = signiCheckbox.filter((x) => x == 1);
      scoreSigni = scorePerCheckboxSigni * scoreSigni.length;

      score += scoreBasic;
      if (basicCheckbox.every((x) => x == 1)) {
        score += scoreAdvance;
      }
      if (
        advanceCheckbox.every((x) => x == 1) &&
        basicCheckbox.every((x) => x == 1)
      ) {
        score += scoreSigni;
      }

      this.data[index].score = score;
      this.data[index].status = 0;
      this.data.push("");
      this.data.pop();

      formData.append("score", score);
      let checkBox = this.data[index].basic.checkBox;

      checkBox = checkBox.map((x) => (x.status == true ? 1 : 0));
      let checkBoxAdvance = this.data[index].advance.checkBox;

      checkBoxAdvance = checkBoxAdvance.map((x) => (x.status == true ? 1 : 0));
      let checkBoxSigni = this.data[index].significance.checkBox;

      checkBoxSigni = checkBoxSigni.map((x) => (x.status == true ? 1 : 0));

      // Check Status

      let isCheckBasicAll = !checkBox.includes(0);
      let isCheckAdvanceAll = !checkBoxAdvance.includes(0);
      let isCheckSigniAll = !checkBoxSigni.includes(0);

      if (isCheckBasicAll) {
        this.data[index].status = 1;
      }

      if (isCheckBasicAll && isCheckAdvanceAll) {
        this.data[index].status = 2;
      }

      if (isCheckBasicAll && isCheckAdvanceAll && isCheckSigniAll) {
        this.data[index].status = 3;
      }

      // if (no == 1) {
      // save 1.1 basic
      if (mode == "basic") {
        // mode basic
        formData.append("pdf", this.data[index].basic.pdf_file);

        let resCheckBox = checkBox.join();

        formData.append("check_box", resCheckBox);
        formData.append("text", this.data[index].basic.explain);
        let data = await Axios.post(url, formData);
      } else if (mode == "advance") {
        //  mode advance
        formData.append("img", this.data[index].advance.img_file);
        formData.append("pdf", this.data[index].advance.pdf_file);
        let checkBox = this.data[index].advance.checkBox;

        checkBox = checkBox.map((x) => (x.status == true ? 1 : 0));

        let resCheckBox = checkBox.join();

        formData.append("check_box", resCheckBox);
        formData.append("text", this.data[index].advance.explain);
        let data = await Axios.post(url, formData);
      } else {
        // mode significance
        formData.append("img", this.data[index].significance.img_file);
        formData.append("pdf", this.data[index].significance.pdf_file);
        let checkBox = this.data[index].significance.checkBox;

        checkBox = checkBox.map((x) => (x.status == true ? 1 : 0));

        let resCheckBox = checkBox.join();

        formData.append("check_box", resCheckBox);
        formData.append("text", this.data[index].significance.explain);
        let data = await Axios.post(url, formData);
      }

      this.isSaveData = false;

      this.isDelete = false;
      // this.uSendAssessment()
      this.checkPassStatus();
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
          let checkBoxBasic = this.data[i - 1].basic.checkBox.map(
            (x) => x.status
          );

          if (getDataBasic.length) {
            if (!checkBoxBasic.includes(false) && !checkBox.includes(false)) {
              this.data[i - 1].status = 2;
            }
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

          // this.data[i - 1].score = getData[0].score;

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
            !checkBoxBasic.includes(false) &&
            !checkBoxAdvance.includes(false) &&
            !checkBox.includes(false)
          ) {
            this.data[i - 1].status = 3;
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

          // this.data[i - 1].score = getData[0].score;

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
        user_id: this.$q.sessionStorage.getItem("uid"),
        step: 1,
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

    getPDF(no, mode) {
      let random = Math.random().toString(36).substring(7);
      let pdfFileName = `${this.$q.sessionStorage.getItem(
        "uid"
      )}-1-${no}-${mode}-${this.$q.sessionStorage.getItem("y")}.pdf`;

      window.open(this.apiPath + "upload/" + pdfFileName + "?" + random);
    },
  },

  created() {
    this.getAssessmentData();
  },
};
</script>

<style lang="scss" scoped></style>
