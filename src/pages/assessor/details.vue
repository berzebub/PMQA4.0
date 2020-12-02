<template>
  <q-page>
    <div style="padding:30px 76px">
      <!-- header -->
      <div class="row items-center">
        <div style="font-size:36px">ผลคะแนนประเมิน</div>
        <div class="font-18 col">
          <div class="row items-center justify-end">
            รูปแบบคะแนน
            <div class="q-pl-sm">
              <q-select
                style="width:190px"
                dense
                outlined
                :options="['หน่วยงานประเมิน', 'คณะกรรมการประเมิน']"
                v-model="scoreTypeSelected"
              ></q-select>
            </div>
          </div>
        </div>
        <div class="font-18" style="width:270px">
          <div class="row items-center justify-end">
            ข้อมูลปี
            <div class="q-pl-sm">
              <q-select
                style="width:190px"
                dense
                outlined
                :options="yearOptions"
                v-model="yearSelected"
                @input="getAssessmentData()"
              ></q-select>
            </div>
          </div>
        </div>
      </div>

      <div class="q-py-md">
        <table>
          <tr class="tr-color">
            <td align="left" class="q-pa-sm">
              <span class="q-pl-lg">กอง / สำนัก</span>
            </td>
            <td align="center" class="q-pa-sm">
              หมวด1
              <q-icon
                class="cursor-pointer"
                @click="sort('cat1')"
                name="fas fa-sort"
              ></q-icon>
            </td>
            <td align="center" class="q-pa-sm">
              หมวด2
              <q-icon
                class="cursor-pointer"
                @click="sort('cat2')"
                name="fas fa-sort"
              ></q-icon>
            </td>
            <td align="center" class="q-pa-sm">
              หมวด3
              <q-icon
                class="cursor-pointer"
                @click="sort('cat3')"
                name="fas fa-sort"
              ></q-icon>
            </td>
            <td align="center" class="q-pa-sm">
              หมวด4
              <q-icon
                class="cursor-pointer"
                @click="sort('cat4')"
                name="fas fa-sort"
              ></q-icon>
            </td>
            <td align="center" class="q-pa-sm">
              หมวด5
              <q-icon
                class="cursor-pointer"
                @click="sort('cat5')"
                name="fas fa-sort"
              ></q-icon>
            </td>
            <td align="center" class="q-pa-sm">
              หมวด6
              <q-icon
                class="cursor-pointer"
                @click="sort('cat6')"
                name="fas fa-sort"
              ></q-icon>
            </td>
            <td align="center" class="q-pa-sm">
              หมวด7
              <q-icon
                class="cursor-pointer"
                @click="sort('cat7')"
                name="fas fa-sort"
              ></q-icon>
            </td>
            <td align="center" class="q-pa-sm">
              รวม
              <q-icon
                class="cursor-pointer"
                @click="sort('all')"
                name="fas fa-sort"
              ></q-icon>
            </td>
          </tr>
          <tr v-for="(item, index) in officeData" :key="index">
            <td align="left" class="q-pa-sm">
              <span class="q-pl-lg">{{ item.office }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.cat1
              }}</span>
              <span v-else>{{ item.cat1A }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.cat2
              }}</span>
              <span v-else>{{ item.cat2A }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.cat3
              }}</span>
              <span v-else>{{ item.cat3A }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.cat4
              }}</span>
              <span v-else>{{ item.cat4A }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.cat5
              }}</span>
              <span v-else>{{ item.cat5A }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.cat6
              }}</span>
              <span v-else>{{ item.cat6A }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.cat7
              }}</span>
              <span v-else>{{ item.cat7A }}</span>
            </td>
            <td align="center" class="q-pa-sm">
              <span v-if="scoreTypeSelected == 'หน่วยงานประเมิน'">{{
                item.officeScore
              }}</span>
              <span v-else>{{ item.assessorScore }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <my-footer></my-footer>
  </q-page>
</template>

<script>
import Axios from "axios";
import myFooter from "../../components/footer";
export default {
  components: {
    myFooter
  },
  data() {
    return {
      scoreTypeSelected: "หน่วยงานประเมิน",
      yearSelected: "",
      yearOptions: [],
      officeData: "",
      sortTType: true
    };
  },
  methods: {
    sort(cat) {
      let _this = this;

      if (cat != "all") {
        if (this.scoreTypeSelected == "คณะกรรมการประเมิน") {
          cat = cat + "A";
        }

        this.officeData = this.officeData.sort((a, b) => {
          let aNew = a[cat] == "-" ? 0 : Number(a[cat]);
          let bNew = b[cat] == "-" ? 0 : Number(b[cat]);

          if (_this.sortTType) {
            return aNew - bNew;
          } else {
            return bNew - aNew;
          }
        });
      } else {
        if (this.scoreTypeSelected == "คณะกรรมการประเมิน") {
          cat = "assessorScore";
        } else {
          cat = "officeScore";
        }

        this.officeData = this.officeData.sort((a, b) => {
          let aNew = a[cat] == "-" ? 0 : Number(a[cat]);
          let bNew = b[cat] == "-" ? 0 : Number(b[cat]);

          if (_this.sortTType) {
            return aNew - bNew;
          } else {
            return bNew - aNew;
          }
        });
      }

      _this.sortTType = !_this.sortTType;
    },
    async getAssessmentData() {
      const url = this.apiPath + "user/getAllUser.php";
      let data = await Axios.get(url);
      data = data.data.sort((a, b) => (a.username > b.username ? 1 : -1));

      const getAssessmentAPI = this.apiPath + "getAssessmentLog.php";
      let postAssessmentData = {
        year: this.yearSelected - 543
      };
      let assessmentLog = await Axios.post(
        getAssessmentAPI,
        postAssessmentData
      );

      assessmentLog = assessmentLog.data;

      let temp = [];
      data.forEach((element, index) => {
        let filterData = assessmentLog.filter(x => x.user_id == element.id)[0];

        let cat1 = "-";
        let cat2 = "-";
        let cat3 = "-";
        let cat4 = "-";
        let cat5 = "-";
        let cat6 = "-";
        let cat7 = "-";
        let cat1A = "-";
        let cat2A = "-";
        let cat3A = "-";
        let cat4A = "-";
        let cat5A = "-";
        let cat6A = "-";
        let cat7A = "-";
        let officeAvgScore = "-";
        let assessorAvgScore = "-";
        if (filterData) {
          cat1 = filterData.category1_score;
          cat2 = filterData.category2_score;
          cat3 = filterData.category3_score;
          cat4 = filterData.category4_score;
          cat5 = filterData.category5_score;
          cat6 = filterData.category6_score;
          cat7 = filterData.category7_score;

          cat1A = filterData.a_category1_score;
          cat2A = filterData.a_category2_score;
          cat3A = filterData.a_category3_score;
          cat4A = filterData.a_category4_score;
          cat5A = filterData.a_category5_score;
          cat6A = filterData.a_category6_score;
          cat7A = filterData.a_category7_score;
          officeAvgScore = filterData.office_score;
          assessorAvgScore = filterData.assessor_score;
        }
        temp.push({
          office: element.office,
          cat1: cat1 == "-1" ? "-" : cat1,
          cat2: cat2 == "-1" ? "-" : cat2,
          cat3: cat3 == "-1" ? "-" : cat3,
          cat4: cat4 == "-1" ? "-" : cat4,
          cat5: cat5 == "-1" ? "-" : cat5,
          cat6: cat6 == "-1" ? "-" : cat6,
          cat7: cat7 == "-1" ? "-" : cat7,
          cat1A: cat1A == "-1" ? "-" : cat1A,
          cat2A: cat2A == "-1" ? "-" : cat2A,
          cat3A: cat3A == "-1" ? "-" : cat3A,
          cat4A: cat4A == "-1" ? "-" : cat4A,
          cat5A: cat5A == "-1" ? "-" : cat5A,
          cat6A: cat6A == "-1" ? "-" : cat6A,
          cat7A: cat7A == "-1" ? "-" : cat7A,
          officeScore: officeAvgScore,
          assessorScore: assessorAvgScore == "-1" ? "-" : assessorAvgScore
        });
      });
      this.officeData = temp;
    }
  },
  created() {
    let assessmentYear = this.$q.sessionStorage.getItem("y") + 543;
    this.yearSelected = assessmentYear;
    let tempYear = [];
    for (let i = -2; i < 3; i++) {
      tempYear.push(assessmentYear + i);
    }
    this.yearOptions = tempYear;
    this.getAssessmentData();
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
.tr-color {
  background-color: #020b3b;
  color: white;
}
</style>
