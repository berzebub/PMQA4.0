<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="z-max">
      <div class="relative-position">
        <div class="row bg1 container-header relative-position">
          <div class="col q-pr-lg self-center" align="right">
            <span class="text-white font-24"
              >วันสิ้นสุดการประเมิน : 15 ธันวาคม 2562</span
            >
          </div>
        </div>
        <div class="row bg2 container-header relative-position">
          <div class="col-1" style="width: 280px;"></div>
          <div class="col self-center font-24 text-black" align="center">
            <span>กองควบคุมโรคและภัยสุขภาพในภาวะฉุกเฉิน</span>
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
              class="text-black bg-white font-24 z-top"
              label="เปลี่ยนรหัสผ่าน"
              @click="isShowEditAdminPassword = true"
            ></q-btn>
          </div>
          <div
            class="col-1 self-center q-px-md"
            align="right"
            style="width: 200px;"
          >
            <q-btn
              style="width: 163px;"
              dense
              outline
              padding="0"
              class="text-black bg-white font-24 z-top"
              label="ออกจากระบบ"
            ></q-btn>
          </div>
        </div>
        <div class="absolute-bottom" style="left: 20px; bottom: -10px;">
          <q-img src="../../public/images/logo.png" width="350px"></q-img>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />

      <!-- Edit admin password dialog -->
      <q-dialog v-model="isShowEditAdminPassword">
        <q-card style="width:430px">
          <q-card-section>
            <div class="font-24 q-pl-md">เปลี่ยนรหัสผ่าน</div>

            <div
              class="row items-center q-pt-md font-18"
              style="width:85%;margin:auto"
            >
              <div class="col-6">รหัสผ่านเดิม</div>
              <div class="col-6">
                <q-input
                  v-model="oldPassword"
                  dense
                  outlined
                  :type="isPwd ? 'password' : 'text'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="col-6 q-py-sm">รหัสผ่านใหม่</div>
              <div class="col-6 q-py-sm">
                <q-input
                  v-model="newPassword"
                  dense
                  outlined
                  :type="isPwdNew ? 'password' : 'text'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwdNew ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwdNew = !isPwdNew"
                    />
                  </template>
                </q-input>
              </div>
              <div class="col-6">รหัสผ่านใหม่อีกครั้ง</div>
              <div class="col-6">
                <q-input
                  v-model="repeatNewPassword"
                  dense
                  outlined
                  :type="isPwdNewRepeat ? 'password' : 'text'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwdNewRepeat ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwdNewRepeat = !isPwdNewRepeat"
                    />
                  </template>
                </q-input>
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="center" class="q-pb-lg">
            <q-btn
              style="width:150px"
              v-close-popup
              outline
              label="ยกเลิก"
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
    </q-page-container>
  </q-layout>
</template>

<script>
import Axios from "axios";
export default {
  name: "MainLayout",
  data() {
    return {
      isPwd: true,
      isPwdNew: true,
      isPwdNewRepeat: true,
      leftDrawerOpen: false,
      isShowEditAdminPassword: false,
      // edit admin password
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: ""
    };
  },
  methods: {
    async confirmEditPassword() {
      const url = this.apiPath + "changeAdminPassword.php";
      let data = await Axios.post(url, {
        id: this.$q.sessionStorage.getItem("uid"),
        newPassword: this.newPassword,
        oldPassword: this.oldPassword,
        repeatNewPassword: this.repeatNewPassword
      });

      console.log(data.data);

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
        this.notify("บันทึกสำเร็จ", "green");
        this.isShowEditAdminPassword = false;
        this.oldPassword = "";
        this.newPassword = "";
        this.repeatNewPassword = "";
      }
    }
  }
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
</style>
