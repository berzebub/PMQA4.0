<template>
  <q-page style="padding:30px 75px;max-width:1400px;margin:auto">
    <div align="center" class="font-36 q-pt-md q-pb-sm relative-position">
      <div class="row">
        <div class="col-10" align="center">แผนปฏิบัติการเพื่อยกระดับการพัฒนาสู่ระบบราชการ 4.0</div>
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
    <div align="right">วันที่รับข้อมูล 27/1/2564 เวลา 17:30</div>

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
              แผนปฏิบัติการเพื่อยกระดับ
              <br />การพัฒนาสู่ระบบราชการ 4.0
              <br />
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
            @click="deleteFilePlan()"
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
      path2 : ""
    };
  },
  methods: {
    async getFilePlan() {
      let uid = this.$route.params.userId;
      let year = this.$q.sessionStorage.getItem("y");
      let postData = {
        user_id: uid,
        year: year,
        plan: 1,
      };
      const url = this.apiPath + "getFilePlan.php";
      let response = await Axios.post(url, postData);

      if (response.data.length) {
        this.filePdf = []
        this.path2 = response.data[0].path
      }
    },
    async getPlan1Y(){
      let url = this.apiPath + "getPlan1Y.php";
      let postData = {
        user_id : this.$route.params.userId,
        year : this.$q.sessionStorage.getItem("y")
      }

      let response = await Axios.post(url,postData)

      if(response.data.length){
        this.suggestion = response.data[0].suggestion
      }

    },
    async saveData() {
      if (this.suggestion) {
        this.isErrorTextarea = false;
        let url = this.apiPath + "updatePlan1Y.php";
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
    },

    async deleteFilePlan() {
      let uid = this.$route.params.userId;
      let year = this.$q.sessionStorage.getItem("y");
      const url = this.apiPath + "deleteFilePlan_a.php";
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
      let uid = this.$route.params.userId;
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("file", this.filePdf);
      formData.append("user_id", uid);
      formData.append("year", year);
      formData.append("plan", 1);
      const url = this.apiPath + "uploadFilePlan_a.php";
      let data = await Axios.post(url, formData);
    },

    async changeStatus() {
      // ปุ่มประเมิน
      if (this.suggestion) {
        this.status = !this.status;
        this.isErrorTextarea = false;

        let url = this.apiPath + "user/update_assessment_stepper_log.php"

        let postData = {
          uid : this.$route.params.userId,
          step : "plan_1y",
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
      const url = this.apiPath + "getFileMain.php";
      let response = await Axios.post(url, formData);
      if (response.data != "no files") {
        let data = response.data[0];
        this.path1 = data.path1 != "" ? data.path1 : "";
      }
    },

    openFile(file) {
      if (file == 1) {
        // userid-1-year
        let filePath = this.apiPath + this.path1;
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
          if(responseData.plan_1y == '2'){
            this.status = true
          }
        }

    },
  },
  created() {
    this.getFile();
    this.getFilePlan();
    this.getPlan1Y()
    this.getAssessmentStepperLog()
  },
};
</script>

<style>
.error-textarea {
  border: 2px solid red;
}
</style>