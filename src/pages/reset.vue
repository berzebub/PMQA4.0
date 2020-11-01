<template>
  <div>
    <div class="relative-position">
      <div class="row bg1 container-bg">
        <div class="col q-pr-lg self-center" align="right"></div>
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
          <div align="center" class="bg2 relative-position" style="height: 58px;">
            <span
              style="font-size: 80px; width: 100%;"
              class="absolute-center font-roboto-b"
            >PMQA 4.0</span>
          </div>
          <div class="q-py-lg q-px-xl" align="center">
            <span style="font-size: 20px;">รีเซตข้อมูล</span>
          </div>
          <div class="q-pb-sm q-px-lg">
            <div>
              <q-select label="ปีที่ทำการประเมิน" outlined v-model="year" :options="yearOptions"></q-select>
            </div>
            <div class="q-mt-sm">
              <q-select label="กอง/สำนัก" outlined v-model="user" :options="userOptions"></q-select>
            </div>
            <div class="q-mt-sm">
              <q-input outlined v-model="password" placeholder="รหัสผ่าน admin"></q-input>
            </div>
          </div>
          <div align="center" class="q-py-md q-mt-sm">
            <q-btn
              style="width: 150px;"
              class="bg-teal text-white"
              label="รีเซตข้อมูล"
              @click="reset()"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="bg1 container-bg row items-center">
      <div
        align="right"
        style="width:100%"
        class="font-18 text-white q-pr-lg"
      >สงวนลิขสิทธิ์ 2563 : กรมควบคุมโรค</div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      year: "",
      yearOptions: [],
      password: "",
      user: "",
      userOptions: [],
    };
  },
  methods: {
    async checkAdminPassword() {

        return new Promise(async (a, b) => {
        let postData = {
          username: 'admin',
          password: this.password,
          type: 'ผู้ดูแลระบบ'
        };
        const url = this.apiPath + "login.php";
        let checkAdminLogin = await Axios.post(url, postData);
        let result = checkAdminLogin.data;
        a(result);
      });

 
    },
    async reset() {
      const url = this.apiPath + "user/resetData.php";
let checkPassword = await this.checkAdminPassword()
      if (checkPassword == 1) {
        let postData = {
          user_id: this.user.value,
          year: this.year -543,
        };
        let data = await Axios.post(url, postData);
        console.log(data.data);
      }else{
          this.$q.notify(
              {
                  message : "รหัสผ่านผิดพลาด",
                  color : "red",
                  position : 'bottom'
              }
          )
      }
    },
    async getUser() {
      const url = this.apiPath + "user/getAllUser.php";
      let data = await Axios.get(url);
      data = data.data.sort((a, b) => (a.username > b.username ? 1 : -1));
      let temp = [];
      data.forEach((element, index) => {
        temp.push({ label: element.office, value: element.id });
      });
      this.userOptions = temp;

      let date = new Date();
      let year = date.getFullYear();
      for (let i = 0; i < 2; i++) {
        this.yearOptions.push(year - i + 543);
      }
    },
  },
  created() {
    this.getUser();
  },
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
