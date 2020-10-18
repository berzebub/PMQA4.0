<template>
  <q-page class>
    <div class="q-px-xl q-pt-md relative-position">
      <q-btn class="absolute" @click="addAssessor()" style="right:65px" label="เพิ่มผู้ประเมิน"></q-btn>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey-7"
        active-color="black"
        indicator-color="pink"
        align="justify"
        style="width:180px;"
        narrow-indicator
      >
        <q-tab name="ผู้ใช้งาน" label="ผู้ใช้งาน" />
        <q-tab name="ผู้ประเมิน" label="ผู้ประเมิน" />
      </q-tabs>
    </div>

    <div class="q-px-xl q-pt-sm">
      <!-- USER LIST -->
      <q-tab-panels v-model="tab" class>
        <q-tab-panel name="ผู้ใช้งาน">
          <table class="table-style">
            <tr class="bg-cblue text-white">
              <td class="q-pa-sm" align="left">กอง / สำนัก</td>
              <td class="q-pa-sm" style="width:150px" align="center">ชื่อผู้ใช้งาน</td>
              <td class="q-pa-sm" style="width:150px" align="center">รหัสผ่าน</td>
              <td class="q-pa-sm" style="width:200px" align="center">ผู้ประสานงาน</td>
              <td class="q-pa-sm" style="width:120px" align="center">เบอร์โทร</td>
              <td class="q-pa-sm" align="center" style="width:70px">แก้ไข</td>
            </tr>
            <tr
              v-for="(item,index) in userList"
              :key="index"
              :class="index%2 != 0 ? 'bg-grey-3' : 'bg-white'"
            >
              <td class="q-pa-sm">{{ item.office }}</td>
              <td class="q-pa-sm" align="center">{{ item.username }}</td>
              <td class="q-pa-sm" align="center">{{ item.password }}</td>
              <td class="q-pa-sm" align="center">{{ item.collaborator }}</td>
              <td class="q-pa-sm" align="center">{{ item.tel }}</td>
              <td class="q-pa-sm" align="center">
                <q-btn @click="editUser(item)" size="sm" flat icon="fas fa-edit"></q-btn>
              </td>
            </tr>
          </table>
        </q-tab-panel>
        <!-- ASSESSOR LIST -->
        <q-tab-panel name="ผู้ประเมิน">
          <table class="table-style">
            <tr class="bg-cblue text-white">
              <td class="q-pa-sm" align="left">ชื่อ-นามสกุล</td>
              <td class="q-pa-sm" style="width:150px" align="center">ชื่อผู้ใช้งาน</td>
              <td class="q-pa-sm" style="width:150px" align="center">รหัสผ่าน</td>
              <td class="q-pa-sm" style="width:200px" align="center">เบอร์โทร</td>
              <td class="q-pa-sm" style="width:120px" align="center">ลบ</td>
              <td class="q-pa-sm" align="center" style="width:70px">แก้ไข</td>
            </tr>
            <tr
              v-for="(item,index) in assessorList"
              :key="index"
              :class="index%2 != 0 ? 'bg-grey-3' : 'bg-white'"
            >
              <td class="q-pa-sm">{{ item.name }}</td>
              <td class="q-pa-sm" align="center">{{ item.username }}</td>
              <td class="q-pa-sm" align="center">{{ item.password }}</td>
              <td class="q-pa-sm" align="center">{{ item.tel }}</td>
              <td class="q-pa-sm" align="center">
                <q-btn size="sm" flat icon="far fa-trash-alt"></q-btn>
              </td>
              <td class="q-pa-sm" align="center">
                <q-btn @click="editAssessor(item)" size="sm" flat icon="fas fa-edit"></q-btn>
              </td>
            </tr>
          </table>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <!-- Edit admin password dialog -->
    <!-- <q-dialog v-model="isShowEditAdminPassword">
      <q-card style="width:430px">
        <q-card-section>
          <div class="font-24 q-pl-md">เปลี่ยนรหัสผ่าน</div>

          <div class="row items-center q-pt-md font-18" style="width:85%;margin:auto">
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
          <q-btn style="width:150px" v-close-popup outline label="ยกเลิก"></q-btn>
          <q-btn
            @click="confirmEditUserData()"
            style="width:150px"
            color="secondary"
            label="บันทึก"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>-->

    <!-- EDIT USER DATA DIALOG -->
    <q-dialog v-model="isShowEditUserDialog">
      <q-card style="width:430px">
        <div class="font-24 q-pt-sm q-pl-lg">แก้ไขผู้ใช้งาน</div>

        <q-card-section>
          <div class="row items-center" style="width:91%;margin:auto">
            <div class="col-3">กอง / สำนัก</div>
            <div class="col-8">{{ activeUserDataTemp.office }}</div>
            <div class="col-3 q-pt-sm">ชื่อผู้ใช้งาน</div>
            <div class="col-8 q-pt-sm">
              <q-input dense outlined v-model="activeUserDataTemp.username"></q-input>
            </div>
            <div class="col-3 q-py-sm">รหัสผ่าน</div>
            <div class="col-8 q-py-sm">
              <q-input dense outlined v-model="activeUserDataTemp.password"></q-input>
            </div>
            <div class="col-3 q-pb-sm">ผู้ประสานงาน</div>
            <div class="col-8 q-pb-sm">
              <q-input dense outlined v-model="activeUserDataTemp.collaborator"></q-input>
            </div>
            <div class="col-3">เบอร์โทร</div>
            <div class="col-8">
              <q-input dense outlined v-model="activeUserDataTemp.tel"></q-input>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-lg">
          <q-btn
            style="width:150px"
            @click="clearUserDataForm()"
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

    <q-dialog v-model="isShowEditAssessorDialog">
      <q-card style="width:430px">
        <div class="font-24 q-pt-sm q-pl-lg">แก้ไขผู้ประเมิน</div>
        <q-card-section>
          <div class="row items-center" style="width:91%;margin:auto">
            <div class="col-3">ชื่อ-นามสกุล</div>
            <div class="col-8">
              <q-input dense outlined v-model="activeAssessorDataTemp.name"></q-input>
            </div>
            <div class="col-3 q-py-sm">ชื่อผู้ใช้งาน</div>
            <div class="col-8 q-py-sm">
              <q-input dense outlined v-model="activeAssessorDataTemp.username"></q-input>
            </div>
            <div class="col-3 q-pb-sm">รหัสผ่าน</div>
            <div class="col-8 q-pb-sm">
              <q-input dense outlined v-model="activeAssessorDataTemp.password"></q-input>
            </div>
            <div class="col-3">เบอร์โทร</div>
            <div class="col-8">
              <q-input dense outlined v-model="activeAssessorDataTemp.tel"></q-input>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-lg">
          <q-btn
            style="width:150px"
            @click="clearUserDataForm()"
            v-close-popup
            outline
            label="ยกเลิก"
          ></q-btn>
          <q-btn
            @click="confirmEditAssessorData()"
            style="width:150px"
            color="secondary"
            label="บันทึก"
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
      tab: "ผู้ประเมิน",
      userList: "",
      assessorList: "",
      isShowEditUserDialog: false,
      isShowEditAssessorDialog: false,
      isShowAddAssessorDialog: false,
      activeUserDataTemp: "",
      activeAssessorDataTemp: "",

      //   DIALOG EDIT ADMIN PASSWORD
      //   oldPassword: "",
      //   newPassword: "",
      //   repeatNewPassword: "",
    };
  },
  methods: {
    addAssessor() {
      this.isShowAddAssessorDialog = true;
    },
    async loadUser() {
      const url = this.apiPath + "getUser.php";
      let userList = await Axios.get(url);
      let result = userList.data.sort((a, b) => a.id - b.id);
      this.userList = userList.data;
    },
    async loadAssessor() {
      const url = this.apiPath + "getAssessor.php";
      let assessorList = await Axios.get(url);
      let result = assessorList.data.sort((a, b) => a.id - b.id);
      this.assessorList = result;
    },
    editUser(item) {
      this.isShowEditUserDialog = true;
      this.activeUserDataTemp = { ...item };
    },
    // validatePassword() {
    //   if (
    //     this.oldPassword != this.activeUserDataTemp.password ||
    //     this.newPassword != this.repeatNewPassword ||
    //     this.newPassword == "" ||
    //     this.repeatNewPassword == "" ||
    //     this.newPassword.length < 4
    //   ) {
    //     // match old password
    //     if (this.oldPassword != this.activeUserDataTemp.password) {
    //       this.notify("กรุณาตรวจสอบรหัสผ่านเดิมอีกครั้ง", "red");
    //     }
    //     if (
    //       this.newPassword != this.repeatNewPassword ||
    //       this.newPassword == "" ||
    //       this.repeatNewPassword == ""
    //     ) {
    //       this.notify("รหัสผ่านใหม่ต้องเหมือนกันทั้งสองช่อง", "red");
    //     }
    //     if (this.newPassword.length < 4) {
    //       this.notify("กรุณาตั้งรหัสผ่านอย่างน้อย 4 หลัก", "red");
    //     }
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
    async confirmEditUserData() {
      this.loadingShow();
      //   let checkValidatePassword = this.validatePassword();
      //   if (checkValidatePassword) {
      let postData = this.activeUserDataTemp;
      const url = this.apiPath + "updateUser.php";
      await Axios.post(url, postData);
      this.notify("บันทึกข้อมูลสำเร็จ", "secondary");
      this.clearUserDataForm();
      this.isShowEditUserDialog = false;
      this.loadingHide();
      this.loadUser();
      //   }
    },
    clearUserDataForm() {
      this.oldPassword = "";
      this.newPassword = "";
      this.activeUserDataTemp = "";
      this.activeAssessorDataTemp = "";
    },
    editAssessor(item) {
      this.isShowEditAssessorDialog = true;
      this.activeAssessorDataTemp = { ...item };
    },
    async confirmEditAssessorData() {
      const url = this.apiPath + "updateAssessor.php";
      let data = await Axios.post(url, this.activeAssessorDataTemp);
      if (data.data == 0) {
        this.notify("ชื่อผู้ใช้งานนี้ได้ถูกใช้ไปแล้ว", "red");
      } else {
        this.notify("บันทึกข้อมูลสำเร็จ", "secondary");
        this.clearUserDataForm();
        this.isShowEditAssessorDialog = false;
        this.loadAssessor();
      }
    },
    loadInitialData() {
      this.loadUser();
      this.loadAssessor();
    },
  },
  created() {
    this.loadInitialData();
  },
};
</script>

<style lang="scss" scoped>
.table-style {
  width: 100%;
  border-collapse: collapse;
}
.bg-cblue {
  background-color: #020b3b;
}
// td {
//   border: 1px solid red;
// }
</style>