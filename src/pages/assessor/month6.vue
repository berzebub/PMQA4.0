<template>
  <q-page style="padding:30px 75px;max-width:1400px;margin:auto">
    <div align="center" class="font-36 q-pt-md q-pb-sm relative-position">
      <div class="row relative-position">
        <div class="col-10 " align="center">รายงานติดตาม 6 เดือน</div>
        <div class="col">
          <q-btn
            @click="changeStatus()"
            :color="!status ? null : 'secondary'"
            :label="!status ?'ยังไม่ประเมิน' :'เสร็จสิ้น'"
            style="font-size:23px;width:155px"
            :outline="!status ?true : false"
          ></q-btn>
        </div>
      </div>
    </div>

    <div class="row q-pt-md">
      <div class="col-3" align="center">
        <div style="width:200px;border:3px solid #e84c93;border-radius:5px;">
          <div style="width:100%">
            <div class="bg-grey-5 q-pa-xs text-black" align="center">word / pdf</div>
            <div
              class="bg-white q-pa-xs text-black cursor-pointer"
              style="width:100%;text-decoration:underline"
              align="center"
              @click="openFile(1)"
            >
              รายงานติดตาม 6 เดือน
              ประจำปี พ.ศ. {{ $q.sessionStorage.getItem("y") + 543 }}
            </div>
          </div>
        </div>

        <!-- PDF เอกสารแนะนำเพิ่มเติม -->

        <!-- มีไฟล์ -->
        <div
          v-if="filePdf != null"
          style="width:200px;border:3px solid #e84c93;border-radius:5px;"
          class="q-mt-lg"
        >
          <div style="width:100%">
            <div class="bg-grey-5 q-pa-xs text-black" align="center">word / pdf</div>
            <div
              class="bg-white q-pa-xs text-black cursor-pointer"
              style="width:100%;text-decoration:underline"
              align="center"
              @click="openFile(2)"
            >pdf เอกสารเพิ่มเติม</div>
            <div
              class="bg1 text-white font-12 q-py-sm cursor-pointer"
              @click="isShowConfirmDeleteFileDialog = true"
            >ลบไฟล์</div>
          </div>
        </div>

        <!-- ไม่มีไฟล์ -->
        <q-file
          v-model="filePdf"
          dense
          style="width:200px;overflow:hidden;border:3px solid #e84c93;border-radius:5px;"
          borderless
          accept=".pdf"
          class="bg-white q-mt-lg"
          @input="uploadFile()"
          v-else
        >
          <template v-slot:prepend>
            <div class="absolute-center fit" align="center">
              <span class="font-16 text-black">pdf เอกสารเพิ่มเติม</span>
            </div>
          </template>

          <template v-slot:file></template>
        </q-file>
      </div>
      <div class="col-9">
        <textarea
        @focus="isErrorTextarea = false"
          v-model="suggestion"
          placeholder="ข้อเสนอแนะ"
          class="q-pa-md"
          style="height:460px;max-width:100%;width:100%"
          :class="isErrorTextarea ? 'error-textarea' : null"
        ></textarea>
      </div>
    </div>

    <div align="center" class="q-pt-lg">
      <q-btn
        @click="saveData()"
        class="bg-teal text-white font-18"
        label="บันทึกข้อมูล"
        style="width: 220px; border-radius: 0px;"
        push
      ></q-btn>
    </div>

    <q-dialog persistent v-model="isShowConfirmDeleteFileDialog">
      <q-card style="width:450px;">
        <q-card-section>
          <div style="font-size:30px" align="center">ลบไฟล์</div>

          <div class="font-18 q-py-md" align="center">คุณต้องการลบไฟล์ใช่หรือไม่?</div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-md">
          <q-btn style="width:180px" class="font-18" label="ยกเลิก" v-close-popup outline dense></q-btn>
          <q-btn
            color="teal"
            style="width:180px"
            class="font-18"
            label="ตกลง"
            @click="deleteFile6MonthA()"
            v-close-popup
            dense
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      isShowConfirmDeleteFileDialog: false,
      suggestion: "",
      filePdf: null,
      status: false,
      isErrorTextarea: false,
      path1: "",
      path2 : "",
      file6: null,
file6Path:null,
    };
  },
  methods: {
    async saveData() {
      if (this.suggestion) {
        this.loadingShow()
        this.isErrorTextarea = false;
        let url = this.apiPath + "updateMonth6_a.php";

        console.log(url);
        let postData = {
          user_id : this.$route.params.userId,
          year : this.$q.sessionStorage.getItem("y"),
          text : this.suggestion,
          assessor_id : this.$q.sessionStorage.getItem("uid")
        }
        let response = await Axios.post(url,postData)

        this.notify("บันทึกข้อมูลสำเร็จ","secondary")
      } else {
        this.isErrorTextarea = true;
      }
      this.loadingHide()
    },

    async deleteFile6MonthA() {
      let uid = this.$route.params.userId;
      let year = this.$q.sessionStorage.getItem("y");
      const url = this.apiPath + "deleteFile6Month_a.php";
      let postData = {
        user_id: uid,
        year: year,
        plan: 1,
      };
      let data = await Axios.post(url, postData);
      this.filePdf = null;

      this.notify("ลบไฟล์สำเร็จ", "secondary");
    },

    async uploadFile() {
      // Upload pan1y / plan3y
      this.loadingShow()
      let uid = this.$route.params.userId;
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("file", this.filePdf);
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "uploadFile6Month_a.php";
      let data = await Axios.post(url, formData);
      this.loadingHide()
    },

    async changeStatus() {
      // ปุ่มประเมิน
      if (this.suggestion) {
        this.status = !this.status;
        this.isErrorTextarea = false;

        let url = this.apiPath + "user/update_assessment_stepper_log.php"

        let postData = {
          uid : this.$route.params.userId,
          step : "month_6",
          year : this.$q.sessionStorage.getItem("y"),
          stepValue :  this.status ? 2 : 1
        }

        let response = await Axios.post(url,postData)

        


      } else {
        this.isErrorTextarea = true;
      }
    },

   async getFile() {
      let uid = this.$route.params.userId;
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "getFile6Month.php";
      let response = await Axios.post(url, formData);
      if (response.data != "no files") {
        let data = response.data[0];
        this.file6 = !data.path ? [] : null;
        this.file6Path = data.path
      }
    },

        async getMonth6(){
      let url = this.apiPath + "getMonth6_a.php";
      let postData = {
        user_id : this.$route.params.userId,
        year : this.$q.sessionStorage.getItem("y")
      }

      let response = await Axios.post(url,postData)

      if(response.data.length){
        this.suggestion = response.data[0].suggestion
      }

    },

    openFile(file) {
      if (file == 1) {
        // userid-1-year
        let filePath = this.apiPath + this.file6Path;
        window.open(filePath);
      } else {
        let filePath = this.apiPath + this.path2;
        window.open(filePath);
      }
    },
    async getAssessmentStepperLog(){
      const apiCheckStatus =
          this.apiPath + "user/getAssessmentStepperLog.php";
        let postCheckStatusData = {
          user_id: this.$route.params.userId,
          year: this.$q.sessionStorage.getItem("y"),
        };

        let responseCheck = await Axios.post(
          apiCheckStatus,
          postCheckStatusData
        );
        let responseData = responseCheck.data[0];

        if(responseCheck.data.length){
          if(responseData.month_6 == '2'){
            this.status = true
          }
        }

    },
    async getFile6MonthA() {
      let uid = this.$route.params.userId;
      let year = this.$q.sessionStorage.getItem("y");
      let postData = {
        user_id: uid,
        year: year,
      };
      const url = this.apiPath + "getFile6Month_a.php";
      let response = await Axios.post(url, postData);

      if (response.data.length) {
        this.filePdf = []
        this.path2 = response.data[0].path
      }
    },
  },
  created() {
    this.getFile();
    this.getAssessmentStepperLog()
    this.getFile6MonthA()
    this.getMonth6()
  },
};
</script>

<style>
.error-textarea {
  border: 2px solid red;
}
</style>