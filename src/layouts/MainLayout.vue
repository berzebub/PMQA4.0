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
                <q-input dense outlined v-model="oldPassword"></q-input>
              </div>
              <div class="col-6 q-py-sm">รหัสผ่านใหม่</div>
              <div class="col-6 q-py-sm">
                <q-input dense outlined v-model="newPassword"></q-input>
              </div>
              <div class="col-6">รหัสผ่านใหม่อีกครั้ง</div>
              <div class="col-6">
                <q-input dense outlined v-model="repeatNewPassword"></q-input>
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
              @click="confirmEditUserData()"
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
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      isShowEditAdminPassword: false,
      // edit admin password
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: ""
    };
  },
  methods: {
    confirmEditUserData() {
      //   let validatePassword = this.validatePassword();
    },
    validatePassword() {
      if (
        this.oldPassword != this.activeUserDataTemp.password ||
        this.newPassword != this.repeatNewPassword ||
        this.newPassword == "" ||
        this.repeatNewPassword == "" ||
        this.newPassword.length < 4
      ) {
        // match old password
        if (this.oldPassword != this.activeUserDataTemp.password) {
          this.notify("กรุณาตรวจสอบรหัสผ่านเดิมอีกครั้ง", "red");
        }
        if (
          this.newPassword != this.repeatNewPassword ||
          this.newPassword == "" ||
          this.repeatNewPassword == ""
        ) {
          this.notify("รหัสผ่านใหม่ต้องเหมือนกันทั้งสองช่อง", "red");
        }
        if (this.newPassword.length < 4) {
          this.notify("กรุณาตั้งรหัสผ่านอย่างน้อย 4 หลัก", "red");
        }
        return false;
      } else {
        return true;
      }
    },
    getOldPassword() {}
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
