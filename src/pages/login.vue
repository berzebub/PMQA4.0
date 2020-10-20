<template>
  <div>
    <div class="relative-position">
      <div class="row bg1 container-bg">
        <div class="col q-pr-lg self-center" align="right">
          <span class="text-white" style="font-size: 18px;"
            >วันสิ้นสุดการประเมิน : {{ endDate }}</span
          >
        </div>
      </div>
      <div class="bg2 container-bg"></div>
      <div class="absolute-top" style="left: 20px;">
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
              style="font-size: 80px; width: 100%;"
              class="absolute-center font-roboto-b"
              >PMQA 4.0</span
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
                label="ผู้ใช้ในแต่ละหน่วยงาน"
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

    <div class="bg1 container-bg"></div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      department: "ผู้ดูแลระบบ",
      departmentOptions: ["ผู้ใช้แต่ละหน่วยงาน", "ผู้ประเมิน", "ผู้ดูแลระบบ"],
      isShowPassword: false,
      endDate: ""
    };
  },
  methods: {
    checkLogin() {
      return new Promise(async (a, b) => {
        let postData = {
          username: this.username,
          password: this.password,
          type: this.department
        };
        const url = "http://localhost/pmqa4.0_api/login.php";
        let checkAdminLogin = await Axios.post(url, postData);
        let result = checkAdminLogin.data == 1 ? true : false;
        a(result);
      });
    },
    async login() {
      this.$q.loading.show({
        delay: 400
      });
      let isPass = await this.checkLogin();
      this.$q.loading.hide();
      if (isPass) {
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
      if (this.department == "ผู้ใช้แต่ละหน่วยงาน") {
        this.$router.push("/main");
      } else if (this.department == "ผู้ประเมิน") {
      } else {
        // ADMIN
        this.$router.push("/admin/main");
      }
    },
    async getAssessmentDate() {
      const url = this.apiPath + "getAssessmentDate.php";
      let assessmentDate = await Axios.get(url);
      let endDate = assessmentDate.data.end_date;

      endDate = endDate.split("-");
      endDate =
        endDate[2] +
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
