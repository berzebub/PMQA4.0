<template>
  <q-layout view="lHh Lpr lFf" class>
    <q-header v-if="isShowRouterView">
      <div class="relative-position">
        <div class="row bg1 container-header">
          <div class="col q-pr-lg self-center" align="right">
            <span
              @click="setAssessmentDate()"
              class="text-white font-24"
              :class="{
                'underline-text relative-position z-top cursor-pointer ':
                  $q.sessionStorage.getItem('p') == 2
              }"
            >
              <span v-if="assessmentStatus == '0'">
                <span v-show="$q.sessionStorage.getItem('p') == 2">ปิดการประเมิน</span>
              </span>
              <span v-else>วันสิ้นสุดการประเมิน : {{ endDate }}</span>
            </span>
          </div>
        </div>
        <div class="row bg2 container-header relative-position">
          <div class="col-1" style="width: 350px;"></div>
          <div class="col self-center font-18 text-black" align="center">
            <span v-if="$q.sessionStorage.getItem('p') == '0'">
              {{
              userData.office
              }}
            </span>
          </div>
          <div
            v-if="$q.sessionStorage.getItem('p') == '2'"
            class="col-1 self-center q-px-md"
            align="right"
            style="width: 200px;"
          >
            <q-btn
              style="width: 163px;"
              dense
              outline
              padding="0"
              class="text-black bg-white relative-position z-top font-18"
              label="เปลี่ยนรหัสผ่าน"
              @click="isShowEditAdminPassword = true"
            ></q-btn>
          </div>
          <div
            v-if="$route.name == 'assessment' || $route.name == 'assessmentComplete'"
            class="self-center q-pl-md"
            style="width:fit-content"
            align="right"
          >
            <q-btn
              dense
              flat
              padding="0"
              class="text-black relative-position z-top font-18"
              @click="$router.push('/main')"
              icon="fas fa-home"
            ></q-btn>
          </div>
          <div
            class="col-1 self-center"
            v-if="$q.sessionStorage.getItem('p') != '2'"
            align="right"
            style="width: 170px;"
          >
            <q-btn
              style="width: 163px;border:1px solid black"
              dense
              padding="0"
              class="relative-position z-top font-18"
              :class="$route.name == 'assessmentComplete' ? 'bg-secondary text-white' : 'bg-white text-black'"
              @click="$router.push('/assessmentComplete')"
            >ผลการประเมิน</q-btn>
          </div>
          <div class="col-1 self-center q-pr-md" align="right" style="width: 190px;">
            <q-btn
              style="width: 163px;"
              dense
              outline
              padding="0"
              class="text-black bg-white relative-position z-top font-18"
              @click="isShowLogoutDialog = true"
            >ออกจากระบบ</q-btn>
          </div>
        </div>
        <div class="absolute-bottom" style="left: 20px; bottom: -10px;">
          <q-img src="../../public/images/logo.png" width="350px"></q-img>
        </div>
      </div>
    </q-header>

    <q-page-container class>
      <q-resize-observer @resize="onResize" />
      <router-view v-if="isShowRouterView" />
      <div class="relative-position bg-pink-4" style="height:100vh" v-else>
        <div
          class="absolute-center bg-grey-5 text-black q-pa-md"
          style="width:80%;max-width:500px;margin:auto;border-radius:10px;height:400px"
        >
          <div align="center">
            <q-img style="width:100%" src="../../public/error-logo.png"></q-img>
          </div>
          <div align="center" class="font-18 q-py-xl">ความละเอียดของหน้าจอน้อยเกินไป</div>

          <div
            align="center"
            class="font-16"
          >คุณจำเป็นต้องใช้จอคอมพิวเตอร์ที่มีความละเอียดสูงกว่านี้ในการทำงานกับโปรแกรม DDC-PMQA 4.0</div>
        </div>
      </div>

      <!-- Edit admin password dialog -->
      <q-dialog v-model="isShowEditAdminPassword">
        <q-card style="width:430px">
          <q-card-section>
            <div class="font-24 q-pl-md">เปลี่ยนรหัสผ่าน</div>

            <div class="row items-center q-pt-md font-18" style="width:85%;margin:auto">
              <div class="col-6">รหัสผ่านเดิม</div>
              <div class="col-6">
                <q-input v-model="oldPassword" dense outlined type="password"></q-input>
              </div>
              <div class="col-6 q-py-sm">รหัสผ่านใหม่</div>
              <div class="col-6 q-py-sm">
                <q-input v-model="newPassword" dense outlined type="password"></q-input>
              </div>
              <div class="col-6">รหัสผ่านใหม่อีกครั้ง</div>
              <div class="col-6">
                <q-input v-model="repeatNewPassword" dense outlined type="password"></q-input>
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="center" class="q-pb-lg">
            <q-btn
              style="width:150px"
              v-close-popup
              outline
              label="ยกเลิก"
              @click="cancelEditPassword()"
            ></q-btn>
            <q-btn
              @click="confirmEditPassword()"
              style="width:150px"
              color="secondary"
              label="บันทึก"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- logout -->
      <q-dialog v-model="isShowLogoutDialog">
        <q-card class="q-pa-sm" style="width:450px">
          <q-card-section class="font-24" align="center">ออกจากระบบ</q-card-section>
          <q-card-section class="font-18" align="center">คุณต้องการออกจากระบบใช่หรือไหม?</q-card-section>
          <q-card-actions align="center" class="q-mt-md q-mb-md">
            <q-btn
              label="ยกเลิก"
              style="width:150px;border-radius:0px;border:1px solid"
              v-close-popup
            ></q-btn>
            <q-btn
              label="ออกจากระบบ"
              @click="confirmLogOut()"
              color="secondary"
              style="width:150px;border-radius:0px"
              push
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- set assessment date -->
      <q-dialog v-model="isShowAssessmentDate" persistent class="z-top">
        <q-card style="width:650px">
          <div class="font-24" style="padding-left:40px;padding-top:20px">สถานะ</div>
          <q-card-section style="padding-left:50px">
            <div>
              <q-radio color="pink" label="ปิดการประเมิน" val="0" v-model="assessmentStatusTemp"></q-radio>
            </div>
            <div class="row">
              <q-radio color="pink" label="เปิดการประเมิน" val="1" v-model="assessmentStatusTemp"></q-radio>

              <div class="col q-pl-sm">
                <q-select
                  outlined
                  dense
                  v-model="assessmentModSelected"
                  :options="assessmentOptions"
                ></q-select>
              </div>
            </div>
          </q-card-section>
          <div class="q-px-lg">
            <hr />
          </div>
          <div class="font-18" style="padding-left:40px;padding-top:20px">
            <div class="row items-center">
              ประจำปี
              <div class="q-pl-md">
                <q-select
                  :disable="assessmentStatusTemp == '0'"
                  outlined
                  :options="endYearOptions"
                  dense
                  style="width:90px"
                  class="font-18"
                  v-model="yearSelected"
                ></q-select>
              </div>
            </div>
          </div>

          <div class="font-18" style="padding-left:40px;padding-top:20px">
            วันสิ้นสุดการประเมิน
            <div class="row q-pt-sm">
              <div>
                <q-select
                  :disable="assessmentStatusTemp == '0'"
                  style="width:100px"
                  outlined
                  dense
                  v-model="endDateSelected"
                  label="วันที่"
                  :options="endDateOptions"
                ></q-select>
              </div>
              <div class="q-px-md">
                <q-select
                  :disable="assessmentStatusTemp == '0'"
                  style="width:130px"
                  outlined
                  dense
                  :options="endMonthOptions"
                  v-model="endMonthSelected"
                  label="เดือน"
                  @input="changeMonth()"
                ></q-select>
              </div>
              <div>
                <q-select
                  :disable="assessmentStatusTemp == '0'"
                  style="width:100px"
                  outlined
                  dense
                  v-model="endYearSelected"
                  :options="endYearOptions"
                  label="ปี"
                ></q-select>
              </div>
            </div>
          </div>
          <q-card-actions align="center" class="q-py-lg">
            <q-btn style="width:150px" v-close-popup outline label="ยกเลิก"></q-btn>
            <q-btn
              @click="confirmSetAssessmentDate()"
              style="width:150px"
              color="secondary"
              label="บันทึก"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import Axios from "axios";
export default {
  name: "MainLayout",
  data() {
    return {
      assessmentOptions: [
        {
          label: "ลักษณะสำคัญองค์กร + หมวด 1-6",
          value: 1,
        },
        {
          label: "หมวด 7 (GAP) + แผน 1/3 ปี",
          value: 2,
        },
        {
          label: "รายงานติดตามรอบ  6 เดือน",
          value: 3,
        },
        {
          label: "หมวด 7 + รายงานติดตาม 12 เดือน + รายงานสรุป 12 เดือน",
          value: 4,
        },
      ],
      assessmentModSelected: "กรุณาเลือก",
      userData: "",
      yearOptions: [],
      endDateSelected: "1",
      endMonthSelected: "",
      endYearSelected: "",
      yearSelected: "2563",
      assessmentStatus: "0",
      assessmentStatusTemp: "0",
      isShowAssessmentDate: false,
      isShowLogoutDialog: false,
      isPwd: true,
      isPwdNew: true,
      isPwdNewRepeat: true,
      leftDrawerOpen: false,
      isShowEditAdminPassword: false,
      // edit admin password
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
      endDate: "",
      endDateOptions: [],
      endMonthOptions: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ],
      endYearOptions: [],
      isShowRouterView: true,
    };
  },
  methods: {
    onResize(size) {
      // this.report = size
      if (size.width < 1000) {
        this.isShowRouterView = false;
      } else {
        this.isShowRouterView = true;
      }
    },
    cancelEditPassword() {
      this.oldPassword = "";
      this.newPassword = "";
      this.repeatNewPassword = "";
    },
    async confirmSetAssessmentDate() {
      const url = this.apiPath + "updateAssessmentDate.php";
      let endDate =
        this.endYearSelected -
        543 +
        "-" +
        Number(this.endMonthOptions.indexOf(this.endMonthSelected) + 1) +
        "-" +
        this.endDateSelected;

      let postData = {
        year: this.yearSelected,
        end_date: endDate,
        status: this.assessmentStatusTemp,
        mode: this.assessmentModSelected.value,
      };
      let data = await Axios.post(url, postData);

      this.isShowAssessmentDate = false;
      this.getAssessmentDate();
      this.notify("บันทึกสำเร็จ", "secondary");
    },
    setAssessmentDate() {
      this.getAssessmentDate();
      if (this.$q.sessionStorage.getItem("p") == "2") {
        this.isShowAssessmentDate = true;
      }
    },
    async getAssessmentDate() {
      const url = this.apiPath + "getAssessmentDate.php";
      let assessmentDate = await Axios.get(url);
      this.assessmentStatus = assessmentDate.data.status;
      this.assessmentStatusTemp = assessmentDate.data.status;
      this.yearSelected = assessmentDate.data.year;
      let endDate = assessmentDate.data.end_date;

      endDate = endDate.split("-");

      this.$q.sessionStorage.set("y", Number(assessmentDate.data.year) - 543);

      this.endDateSelected = endDate[2];
      this.endMonthSelected = this.endMonthOptions[endDate[1] - 1];

      this.endYearSelected = Number(endDate[0]) + 543;

      endDate =
        Number(endDate[2]) +
        " " +
        this.convertMonth(Number(endDate[1])) +
        " " +
        (Number(endDate[0]) + 543);

      this.assessmentModSelected = this.assessmentOptions.filter(
        (x) => x.value == assessmentDate.data.mode
      )[0];

      this.endDate = endDate;
    },
    confirmLogOut() {
      this.$q.sessionStorage.clear();
      this.$router.push("/");
    },
    async confirmEditPassword() {
      const url = this.apiPath + "changeAdminPassword.php";
      let data = await Axios.post(url, {
        id: this.$q.sessionStorage.getItem("uid"),
        newPassword: this.newPassword,
        oldPassword: this.oldPassword,
        repeatNewPassword: this.repeatNewPassword,
      });

      if (data.data == "error old password") {
        //
        this.notify("กรุณาตรวจสอบรหัสปัจจุบันผ่านอีกครั้ง", "red");
      } else if (data.data == "error repeat password") {
        this.notify(
          "รหัสผ่านใหม่ และ รหัสผ่านใหม่อีกครั้ง ต้องเหมือนกัน",
          "red"
        );
      } else if (data.data == "error password length") {
        this.notify("รหัสผ่านอย่างน้อย 4 ตัวอักษร", "red");
      } else {
        this.notify("บันทึกสำเร็จ", "secondary");
        this.isShowEditAdminPassword = false;
        this.oldPassword = "";
        this.newPassword = "";
        this.repeatNewPassword = "";
      }
    },
    getDaysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    changeMonth() {
      let year = this.endYearSelected;
      let month = this.endMonthOptions.indexOf(this.endMonthSelected);
      let days = this.getDaysInMonth(month + 1, year);
      this.endDateOptions = [];
      for (let i = 1; i <= days; i++) {
        this.endDateOptions.push(i);
      }
      if (this.endDateSelected > days) {
        this.endDateSelected = 1;
      }
    },
    async getUserData() {
      const url = this.apiPath + "user/getUserData.php";
      let postData = {
        id: this.$q.sessionStorage.getItem("uid"),
      };
      let data = await Axios.post(url, postData);
      this.userData = data.data;

      this.$q.sessionStorage.set("office", data.data.office);
    },
  },
  created() {
    if (!this.$q.sessionStorage.has("uid")) {
      this.$router.push("/");
    }
    this.getAssessmentDate();
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    this.endYearOptions = [
      year + 541,
      year + 542,
      year + 543,
      year + 544,
      year + 545,
    ];
    let days = this.getDaysInMonth(month + 1, year);
    for (let i = 1; i <= days; i++) {
      this.endDateOptions.push(i);
    }

    if (this.$q.sessionStorage.getItem("p") == "0") {
      this.getUserData();
    }
  },
};
</script>

<style lang="scss" scoped>
.container-header {
  height: 70px;
}

.container-login {
  border: 3px solid #000;
  border-radius: 10px;
}
.underline-text {
  text-decoration: underline;
}
</style>
