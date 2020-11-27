<template>
  <q-page class>
    <div class="q-px-xl q-pt-md relative-position">
      <q-btn
        class="absolute font-18"
        @click="addAssessor()"
        style="right:65px;width:180px"
        label="เพิ่มผู้ประเมิน"
        v-show="tab == 'ผู้ประเมิน'"
        outline=""
      ></q-btn>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey-7"
        active-color="black"
        indicator-color="pink"
        align="justify"
        style="width:250px;"
        narrow-indicator
      >
        <q-tab name="ผู้ใช้งาน">
          <template slot="default">
            <span class="font-24 text-black">
              ผู้ใช้งาน
            </span>
          </template>
        </q-tab>
        <q-tab name="ผู้ประเมิน">
          <template slot="default">
            <span class="font-24 text-black">
              ผู้ประเมิน
            </span></template
          >
        </q-tab>
      </q-tabs>
    </div>

    <div class="q-px-xl q-pt-xs">
      <!-- USER LIST -->
      <q-tab-panels v-model="tab" class>
        <q-tab-panel name="ผู้ใช้งาน">
          <table class="table-style">
            <tr class="bg-cblue text-white">
              <td class="q-py-sm q-px-md" align="left">กอง / สำนัก</td>
              <td class="q-py-sm q-px-md" style="width:150px" align="center">
                ชื่อผู้ใช้งาน
              </td>
              <td class="q-py-sm q-px-md" style="width:150px" align="center">
                รหัสผ่าน
              </td>
              <td class="q-py-sm q-px-md" style="width:200px" align="center">
                ผู้ประสานงาน
              </td>
              <td class="q-py-sm q-px-md" style="width:250px" align="center">
                อีเมล
              </td>
              <td class="q-py-sm q-px-md" align="center" style="width:70px">
                แก้ไข
              </td>
            </tr>
            <tr
              v-for="(item, index) in userList"
              :key="index"
              :class="index % 2 != 0 ? 'bg-grey-3' : 'bg-white'"
            >
              <td class="q-py-sm q-px-md">{{ item.office }}</td>
              <td class="q-py-sm q-px-md" align="center">
                {{ item.username }}
              </td>
              <td class="q-py-sm q-px-md" align="center">
                {{ item.password }}
              </td>
              <td class="q-py-sm q-px-md" align="center">
                {{ item.collaborator }}
              </td>
              <td class="q-py-sm q-px-md" align="center">
                {{ item.tel }}
              </td>
              <td class="q-py-sm q-px-md" align="center">
                <q-btn
                  @click="editUser(item)"
                  size="sm"
                  flat
                  icon="fas fa-edit"
                ></q-btn>
              </td>
            </tr>
          </table>
        </q-tab-panel>
        <!-- ASSESSOR LIST -->
        <q-tab-panel name="ผู้ประเมิน">
          <table class="table-style">
            <tr class="bg-cblue text-white">
              <td class="q-py-sm q-px-md" align="left">ชื่อ-นามสกุล</td>
              <td class="q-py-sm q-px-md" style="width:150px" align="center">
                ชื่อผู้ใช้งาน
              </td>
              <td class="q-py-sm q-px-md" style="width:150px" align="center">
                รหัสผ่าน
              </td>
              <td class="q-py-sm q-px-md" style="width:180px" align="center">
                อีเมล
              </td>
              <td class="q-py-sm q-px-md" style="width:120px" align="center">
                สถานะ
              </td>
              <td class="q-py-sm q-px-md" align="center" style="width:70px">
                แก้ไข
              </td>
            </tr>
            <tr
              v-for="(item, index) in assessorList"
              :key="index"
              :class="index % 2 != 0 ? 'bg-grey-3' : 'bg-white'"
            >
              <td class="q-py-sm q-px-md">{{ item.name }}</td>
              <td class="q-py-sm q-px-md" align="center">
                {{ item.username }}
              </td>
              <td class="q-py-sm q-px-md" align="center">
                {{ item.password }}
              </td>
              <td class="q-py-sm q-px-md" align="center">{{ item.tel }}</td>
              <td class="q-py-sm q-px-md" align="center">
                <!-- <q-btn
                  @click="deleteAssessor(item)"
                  size="sm"
                  flat
                  icon="far fa-trash-alt"
                ></q-btn> -->

                <q-btn-toggle
                  v-model="assessorList[index].status"
                  @click="confirmDeleteAssessor(item)"
                  push
                  rounded=""
                  :toggle-color="item.status == '0' ? 'secondary' : 'pink-4'"
                  :options="[
                    { label: 'เปิด', value: '0' },
                    { label: 'ปิด', value: '1' }
                  ]"
                />
              </td>
              <td class="q-py-sm q-px-md" align="center">
                <q-btn
                  @click="editAssessor(item)"
                  size="sm"
                  flat
                  icon="fas fa-edit"
                ></q-btn>
              </td>
            </tr>
          </table>
        </q-tab-panel>
      </q-tab-panels>
    </div>

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
              <q-input
                dense
                outlined
                v-model="activeUserDataTemp.username"
                :rules="[val => val.length > 0]"
                ref="username"
                hide-bottom-space=""
              ></q-input>
            </div>
            <div class="col-3 q-py-sm">รหัสผ่าน</div>
            <div class="col-8 q-py-sm">
              <q-input
                dense
                outlined
                v-model="activeUserDataTemp.password"
                ref="password"
                :rules="[val => val.length > 0]"
                hide-bottom-space=""
              ></q-input>
            </div>
            <div class="col-3 q-pb-sm">ผู้ประสานงาน</div>
            <div class="col-8 q-pb-sm">
              <q-input
                dense
                outlined
                v-model="activeUserDataTemp.collaborator"
              ></q-input>
            </div>
            <div class="col-3">อีเมล</div>
            <div class="col-8">
              <q-input
                dense
                outlined
                v-model="activeUserDataTemp.tel"
              ></q-input>
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

    <q-dialog v-model="isShowAssessorDataDialog">
      <q-card style="width:430px">
        <div class="font-24 q-pt-sm q-pl-lg">
          <span v-if="assessorDialogMode == 'add'">เพิ่มผู้ประเมิน</span>
          <span v-else>แก้ไขผู้ประเมิน</span>
        </div>
        <q-card-section>
          <div class="row items-center" style="width:91%;margin:auto">
            <div class="col-3">ชื่อ-นามสกุล</div>
            <div class="col-8">
              <q-input
                :rules="[val => val.length > 0]"
                dense
                outlined
                hide-bottom-space=""
                v-model="assessorData.name"
                ref="assessorName"
              ></q-input>
            </div>
            <div class="col-3 q-py-sm">ชื่อผู้ใช้งาน</div>
            <div class="col-8 q-py-sm">
              <q-input
                :rules="[val => val.length > 0]"
                dense
                outlined
                hide-bottom-space=""
                v-model="assessorData.username"
                ref="assessorUsername"
              ></q-input>
            </div>
            <div class="col-3 q-pb-sm">รหัสผ่าน</div>
            <div class="col-8 q-pb-sm">
              <q-input
                :rules="[val => val.length > 0]"
                dense
                outlined
                hide-bottom-space=""
                v-model="assessorData.password"
                ref="assessorPassword"
              ></q-input>
            </div>
            <div class="col-3">อีเมล</div>
            <div class="col-8">
              <q-input dense outlined v-model="assessorData.tel"></q-input>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-lg">
          <q-btn
            style="width:150px"
            @click="clearTempForm()"
            v-close-popup
            outline
            label="ยกเลิก"
          ></q-btn>
          <q-btn
            @click="confirmAddEditAssessor()"
            style="width:150px"
            color="secondary"
            label="บันทึก"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <my-footer class="absolute-bottom"></my-footer>
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
      tab: "ผู้ใช้งาน",
      userList: "",
      assessorList: "",
      isShowEditUserDialog: false,
      isShowAssessorDataDialog: false,
      isShowAssessorDeleteDialog: false,
      assessorDialogMode: "add",
      activeUserDataTemp: "",
      assessorData: {
        name: "",
        username: "",
        password: "",
        tel: ""
      }

      //   DIALOG EDIT ADMIN PASSWORD
      //   oldPassword: "",
      //   newPassword: "",
      //   repeatNewPassword: "",
    };
  },
  methods: {
    async confirmDeleteAssessor(item) {
      const url = this.apiPath + "deleteAssessor.php";
      let postData = {
        id: item.id,
        status: item.status
      };

      let data = await Axios.post(url, postData);

      this.loadAssessor();
    },
    deleteAssessor(item) {
      this.isShowAssessorDeleteDialog = true;
      this.assessorData = { ...item };
    },
    confirmAddEditAssessor() {
      //       assessorName
      // assessorUsername
      // assessorPassword
      this.$refs.assessorName.validate();
      this.$refs.assessorUsername.validate();
      this.$refs.assessorPassword.validate();
      if (
        this.$refs.assessorName.hasError ||
        this.$refs.assessorUsername.hasError ||
        this.$refs.assessorPassword.hasError
      ) {
        return;
      } else {
        if (this.assessorDialogMode == "add") {
          this.confirmAddAssessor();
        } else {
          this.confirmEditAssessorData();
        }
      }
    },
    async confirmAddAssessor() {
      const url = this.apiPath + "addAssessor.php";
      let data = await Axios.post(url, this.assessorData);

      if (data.data == 0) {
        //   username is already taken
        this.notify("ชื่อผู้ใช้งานนี้ได้ถูกใช้ไปแล้ว", "red");
      } else {
        this.notify("บันทึกข้อมูลสำเร็จ", "secondary");
        this.isShowAssessorDataDialog = false;
        this.clearTempForm();
        this.loadAssessor();
      }
    },
    addAssessor() {
      this.assessorDialogMode = "add";
      this.assessorData = {
        name: "",
        username: "",
        password: "",
        tel: ""
      };
      this.isShowAssessorDataDialog = true;
    },
    async loadUser() {
      this.loadingShow();
      const url = this.apiPath + "getUser.php";
      let userList = await Axios.get(url);
      if (userList.data) {
        // console.log(userList.data);
        let result = userList.data.sort((a, b) =>
          a.username > b.username ? 1 : -1
        );
        this.userList = userList.data;
      }
      this.loadingHide();
    },
    async loadAssessor() {
      const url = this.apiPath + "getAssessor.php";
      let assessorList = await Axios.get(url);
      if (assessorList.data) {
        let result = assessorList.data.sort((a, b) => a.id - b.id);
        this.assessorList = result;
      }
      this.loadingHide();
    },
    editUser(item) {
      this.isShowEditUserDialog = true;
      this.activeUserDataTemp = { ...item };
    },

    async confirmEditUserData() {
      this.$refs.username.validate();
      this.$refs.password.validate();
      if (this.$refs.username.hasError || this.$refs.password.hasError) {
        return;
      }
      this.loadingShow();
      let postData = this.activeUserDataTemp;
      const url = this.apiPath + "updateUser.php";
      await Axios.post(url, postData);
      this.notify("บันทึกข้อมูลสำเร็จ", "secondary");
      this.clearTempForm();
      this.isShowEditUserDialog = false;
      this.loadingHide();
      this.loadUser();
    },
    clearTempForm() {
      this.oldPassword = "";
      this.newPassword = "";
      this.activeUserDataTemp = "";
      this.assessorData = {
        name: "",
        username: "",
        password: "",
        tel: ""
      };
    },
    editAssessor(item) {
      this.assessorDialogMode = "edit";
      this.isShowAssessorDataDialog = true;
      this.assessorData = { ...item };
      this.assessorData.oldUsername = item.username;
    },
    async confirmEditAssessorData() {
      const url = this.apiPath + "updateAssessor.php";
      let data = await Axios.post(url, this.assessorData);
      if (data.data == 0) {
        this.notify("ชื่อผู้ใช้งานนี้ได้ถูกใช้ไปแล้ว", "red");
      } else {
        this.notify("แก้ไขข้อมูลสำเร็จ", "secondary");
        this.clearTempForm();
        this.isShowAssessorDataDialog = false;
        this.loadAssessor();
      }
    },
    loadInitialData() {
      this.loadUser();
      this.loadAssessor();
    },
    telFormatter(tel) {
      return tel.substr(0, 3) + "-" + tel.substr(4, 3) + "-" + tel.substr(7);
    },
    test() {
      console.log("123");
    }
  },
  created() {
    this.loadInitialData();
  }
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
