<template>
  <div>
    <div class="bg4 q-pa-md q-px-lg" style="border-radius: 10px;">
      <div>
        <span class="font-24">หมวด 7 ผลลัพธ์การดำเนินการ</span>
      </div>
    </div>

    <div class="q-mt-sm font-18" v-for="(item, index) in data" :key="index">
      <q-list bordered>
        <q-expansion-item
          group="dataFormStep4"
          header-class="bg-white "
          dense-toggle=""
          dense=""
          expand-icon-class="text-grey-10"
          :default-opened="index == 0"
          header-style="height:70px;"
        >
          <template v-slot:header>
            <div class="row full-width q-pa-sm">
              <div class="col self-center">
                <span>{{ item.title }}</span>
              </div>
              <q-space></q-space>
              <div
                class="col-3 self-center q-px-xl "
                style="width:250px;"
              ></div>
            </div>
          </template>

          <div>
            <q-separator class="bg-grey-7" style="height: 1px;"></q-separator>
            <div class="bg-4 row q-py-sm ">
              <div class="col" style="padding-left:37px">
                <span v-html="item.headerTextUpper"> </span> &nbsp;<q-icon
                  class="cursor-pointer relative-position"
                  v-ripple
                  color="teal"
                  name="help"
                  size="md"
                ></q-icon>
                <br />{{ item.headerTextLower }}
              </div>
              <q-space></q-space>
              <div class="col-1 q-pr-lg  self-center" align="right">
                <q-icon
                  name="add_circle"
                  class="cursor-pointer relative-position"
                  v-ripple
                  color="teal"
                  size="lg"
                ></q-icon>
              </div>
            </div>
            <!-- ROW HEADER -->
            <div
              v-for="(result, indexResult) in item.numberOfIndicators"
              :key="indexResult"
            >
              <div class="row">
                <div class="q-pa-md border col-5" align="center">ตัวชี้วัด</div>
                <div class="q-pa-md border col" align="center">ผลดำเนินการ</div>
                <div class="q-pa-md border " style="width:150px" align="center">
                  %ความสำเร็จ
                </div>
                <div class="q-pa-md border " style="width:150px" align="center">
                  คะแนน
                </div>
              </div>
              <div class="row">
                <div class="q-pa-sm border col-5" align="center">
                  <q-input
                    v-model="data[index].indicators[indexResult]"
                    type="textarea"
                    outlined=""
                    rows="5"
                  ></q-input>
                </div>
                <!-- ผลการดำเนินการ -->
                <div class="q-pa-md border col" align="center">
                  <div class="row items-center">
                    <div class="col">ค่าเป้าหมาย<br />ปีล่าสุด(ตัวเลข)</div>
                    <div class="col q-px-md">
                      <q-input
                        v-model.number="
                          data[index].goalCurrentYear[indexResult]
                        "
                        type="number"
                        outlined=""
                        dense=""
                      ></q-input>
                    </div>
                    <div class="col">
                      <q-input
                        v-model="data[index].unit[indexResult]"
                        outlined=""
                        dense=""
                        label="หน่วย"
                      ></q-input>
                    </div>
                  </div>
                  <div class="q-py-md">
                    <q-separator
                      class="bg-grey-7"
                      style="height: 1px;"
                    ></q-separator>
                  </div>
                  <div class="row ">
                    <div style="width:130px">ผลการดำเนินงาน</div>
                    <div
                      style="width:250px;top:-14px"
                      class="row relative-position"
                    >
                      <div class="row q-pt-sm " v-for="i in 3">
                        <div
                          style="width:130px;left:-10px"
                          class="self-center relative-position"
                        >
                          ปี {{ currentYear - i + 1 }}
                        </div>
                        <div
                          style="width:120px;left:12px"
                          class="relative-position"
                        >
                          <q-input
                            v-model="
                              data[index].result[indexResult][
                                currentYear - i + 1
                              ]
                            "
                            type="number"
                            dense=""
                            outlined=""
                          ></q-input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div style="width:140px" align="left">การคำนวนคะแนน</div>
                    <div style="width:252px">
                      <q-select
                        v-model="data[index].scoreStandard[indexResult]"
                        dense=""
                        outlined=""
                        :options="scoreStandardOptions"
                      ></q-select>
                    </div>
                  </div>
                </div>
                <div
                  class="q-pa-md border "
                  style="width:150px"
                  align="center"
                ></div>
                <div
                  class="q-pa-md border "
                  style="width:150px"
                  align="center"
                ></div>
              </div>
            </div>
          </div>
        </q-expansion-item>
      </q-list>

      <q-btn label="testUpload" color="teal" @click="uploadStep7(0)"> </q-btn>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      currentYear: this.$q.sessionStorage.getItem("y") + 543,
      score: "ยิ่งมากยิ่งดี",
      scoreStandardOptions: ["ยิ่งมากยิ่งดี", "ยิ่งน้อยยิ่งดี"],
      data: [
        {
          title: "7.1 การบรรลุผลลัพธ์ตามตัวชี้วัดตามพันธกิจ",
          no: 1,
          headerTextUpper: "1. ตัววัดตามภารกิจหลัก <b>(จำเป็น)</b>",
          headerTextLower:
            "ตัวชี้วัดของการบรรลุผลลัพธ์ตามพันธกิจหรือภารกิจของส่วนราชการ (Function base, Area base)",
          numberOfIndicators: 2,
          indicators: [],
          goalCurrentYear: [100],
          unit: [],
          result: [
            {
              [this.$q.sessionStorage.getItem("y") + 543]: null,
              [this.$q.sessionStorage.getItem("y") + 542]: null,
              [this.$q.sessionStorage.getItem("y") + 541]: null
            },
            {
              [this.$q.sessionStorage.getItem("y") + 543]: null,
              [this.$q.sessionStorage.getItem("y") + 542]: null,
              [this.$q.sessionStorage.getItem("y") + 541]: null
            },
            {
              [this.$q.sessionStorage.getItem("y") + 543]: null,
              [this.$q.sessionStorage.getItem("y") + 542]: null,
              [this.$q.sessionStorage.getItem("y") + 541]: null
            },
            {
              [this.$q.sessionStorage.getItem("y") + 543]: null,
              [this.$q.sessionStorage.getItem("y") + 542]: null,
              [this.$q.sessionStorage.getItem("y") + 541]: null
            },
            {
              [this.$q.sessionStorage.getItem("y") + 543]: null,
              [this.$q.sessionStorage.getItem("y") + 542]: null,
              [this.$q.sessionStorage.getItem("y") + 541]: null
            }
          ],
          successRate: [],
          score: [],
          scoreStandard: ["ยิ่งมากยิ่งดี"],
          status: -1 //-1 ยังไม่ประเมิน
        }
      ]
    };
  },
  methods: {
    async uploadStep7(index) {
      const url = this.apiPath + "user/addUpdateCategory7.php";

      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        q_number: this.data[index].no,
        status: this.data[index].status,
        indicators: JSON.stringify(this.data[index].indicators),
        goal: JSON.stringify(this.data[index].goalCurrentYear),
        success_rate: JSON.stringify(this.data[index].successRate),
        score: JSON.stringify(this.data[index].score),
        score_standard: JSON.stringify(this.data[index].scoreStandard),
        unit: JSON.stringify(this.data[index].unit),
        result: JSON.stringify(this.data[index].result),
        year: this.currentYear
      };

      //  "user_id" => $user_id,
      //   "q_number" => $q_number,
      //   "status" => $status,
      //   "indicators" => $indicators,
      //   "goal" => $goal,
      //   "success_rate" => $success_rate,
      //   "score" => $score,
      //   "unit" => $unit,
      //    "score_standard" => $score_standard,
      //    "year" => $year

      let data = await Axios.post(url, postData);
      console.log(data.data);
    }
  }
};
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #5a5959;
}
</style>
