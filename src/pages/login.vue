<template>
  <div>
   <q-resize-observer @resize="onResize" />

  <div v-if="isShowLogin">
    <div class="relative-position">
      <div class="row bg1 container-bg">
        <div class="col q-pr-lg self-center" align="right">
          <span class="text-white font-24" v-show="assessmentStatus == '1'"
            >วันสิ้นสุดการประเมิน : {{ endDate }}</span
          >
        </div>
      </div>
      <div class="bg2 container-bg"></div>
      <div class="absolute-top" style="left: 20px;top:8px">
        <q-img class src="../../public/images/logo.png" width="250px"></q-img>
      </div>
    </div>

    <div
      class="q-pa-md row justify-center"
      style="min-height: calc(100vh - 150px); max-height: fit-content;"
    >
      <div class="self-center">
        <div style="width: 430px;" class="container-login q-py-lg">
          <div
            align="center"
            class="bg2 relative-position"
            style="height: 58px;"
          >
            <span
              style="font-size: 55px; width: 100%;"
              class="absolute-center font-roboto-b"
              >DDC-PMQA 4.0</span
            >
          </div>
          <div class="q-py-lg q-px-xl" align="center">
            <span style="font-size: 20px;">
              การประเมินสถานะของหน่วยงานภาครัฐ
              <br />ในการเป็นระบบราชการ 4.0
            </span>
          </div>
          <div class="q-pb-sm q-px-lg">
            <div>
              <q-input outlined placeholder="รหัสผู้ใช้งาน" v-model="username">
                <template v-slot:prepend>
                  <q-icon name="fas fa-user" size="30px" />
                </template>
              </q-input>
            </div>
            <div class="q-mt-sm">
              <q-input
                outlined
                placeholder="รหัสผ่าน"
                :type="isShowPassword ? '' : 'password'"
                v-model="password"
                @keyup.enter="login()"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-key" size="30px" />
                </template>
                <template v-slot:append>
                  <q-icon
                    name="fas fa-eye"
                    size="30px"
                    class="cursor-pointer"
                    v-if="isShowPassword"
                    @click="isShowPassword = !isShowPassword"
                  />
                  <q-icon
                    name="fas fa-eye-slash"
                    size="30px"
                    class="cursor-pointer"
                    v-if="!isShowPassword"
                    @click="isShowPassword = !isShowPassword"
                  />
                </template>
              </q-input>
            </div>
            <div class="q-mt-sm">
              <q-select
                outlined
                v-model="department"
                :options="departmentOptions"
              >
                <template v-slot:prepend>
                  <q-icon name="fas fa-user-edit" size="30px" />
                </template>
              </q-select>
            </div>
          </div>
          <div align="center" class="q-py-md q-mt-sm">
            <q-btn
              style="width: 150px;"
              class="bg-teal text-white"
              label="เข้าสู่ระบบ"
              @click="login()"
            ></q-btn>
          </div>

        
        </div>
      </div>
    </div>

    <div class="bg1 container-bg row items-center">
      <div align="right" style="width:100%" class="font-18 text-white q-pr-lg">
        สงวนลิขสิทธิ์ 2563 : กรมควบคุมโรค
      </div align="right">
    </div>
  </div>

 <div class="relative-position bg-pink-4" style="height:100vh" v-if="!isShowLogin">
        <div
          class="absolute-center bg-grey-5 text-black q-pa-md"
          style="width:80%;max-width:500px;margin:auto;border-radius:10px;height:400px"
        >
          <div align="center">
            <q-img style="width:100%" src="../../public/error-logo.png"></q-img>
          </div>
          <div align="center" class="font-18 q-py-xl ">ความละเอียดของหน้าจอน้อยเกินไป</div>

          <div align="center" class="font-16">
           คุณจำเป็นต้องใช้จอคอมพิวเตอร์ที่มีความละเอียดสูงกว่านี้ในการทำงานกับโปรแกรม DDC-PMQA 4.0
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
      username: "",
      password: "",
      department: "ผู้ใช้แต่ละหน่วยงาน",
      departmentOptions: ["ผู้ใช้แต่ละหน่วยงาน", "ผู้ประเมิน", "ผู้ดูแลระบบ"],
      isShowPassword: false,
      endDate: "",
      assessmentStatus : 0,
      isShowLogin : "",
    };
  },
  methods: {
     onResize(size) {
      // this.report = size
      if (size.width < 1000) {
        this.isShowLogin = false;
      } else {
        this.isShowLogin = true;
      }
    },
    checkLogin() {
      return new Promise(async (a, b) => {
        let postData = {
          username: this.username,
          password: this.password,
          type: this.department
        };
        const url = this.apiPath + "login.php";
        let checkAdminLogin = await Axios.post(url, postData);
        let result = checkAdminLogin.data;
        a(result);
      });
    },
    async login() {
      this.$q.loading.show({
        delay: 400
      });
      let getData = await this.checkLogin();

console.log(getData);
      // return
      this.$q.sessionStorage.set("assessor_id",getData.assessor_id)
      this.$q.sessionStorage.set("uid", getData.id);
      this.$q.loading.hide();
      if (getData) {
        // LOGIN SUCCESS
        this.checkRouteAccess();
      } else {
        // LOGIN FAILED
        this.$q.notify({
          message: "ไม่พบรหัสผู้ใช้งาน กรุณาตรวจสอบใหม่อีกครั้ง",
          color: "red",
          position: "bottom"
        });
      }
    },
    checkRouteAccess() {
      // p == permission
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      let monthArr = [
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
        "ธันวาคม"
      ];
      month = monthArr[month];

      if (this.department == "ผู้ใช้แต่ละหน่วยงาน") {
        this.$q.sessionStorage.set("p", "0");
        this.$router.push("/main");
      } else if (this.department == "ผู้ประเมิน") {
        this.$q.sessionStorage.set("p", "1");
         this.$router.push("/assessor/main");
      } else {
        this.$q.sessionStorage.set("p", "2");
        // ADMIN
        this.$router.push("/admin/main");
      }
    },
    async getAssessmentDate() {
      const url = this.apiPath + "getAssessmentDate.php";
      let assessmentDate = await Axios.get(url);
      this.assessmentStatus = assessmentDate.data.status
      let endDate = assessmentDate.data.end_date;
      endDate = endDate.split("-");
      
     this.$q.sessionStorage.set("y", Number(assessmentDate.data.year) - 543);

      endDate =
        Number(endDate[2]) +
        " " +
        this.convertMonth(Number(endDate[1])) +
        " " +
        (Number(endDate[0]) + 543);
      this.endDate = endDate;
    }
  },
  created() {
    this.getAssessmentDate();
  }
};
</script>

<style lang="scss" scoped>
.container-bg {
  height: 50px;
}

.container-login {
  border: 3px solid #000;
  border-radius: 10px;
}
</style>
