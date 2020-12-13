<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class v-if="isShowRouterView">
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
                <span v-show="$q.sessionStorage.getItem('p') == 2"
                  >ปิดการประเมิน</span
                >
              </span>
              <span v-else>วันสิ้นสุดการประเมิน : {{ endDate }}</span>
            </span>
          </div>
        </div>
        <div class="row bg2 justify-end container-header relative-position">
          <div
            class="col offset-3 self-center  font-24 text-black "
            align="center"
          >
            {{ $q.sessionStorage.getItem("off") }}
          </div>
          <div class="col-1 self-center " align="right">
            <q-btn
              dense
              outline
              padding="0"
              flat
              class="text-black relative-position z-top font-18"
              @click="
                $router.push('/assessor/main'), $q.sessionStorage.remove('off')
              "
            >
              <q-icon size="30px" name="fas fa-home"></q-icon>
            </q-btn>
          </div>
          <div
            class="col-1 self-center q-pl-md"
            align="right"
            style="width: 170px;"
          >
            <q-btn
              style="width: 163px;"
              dense
              :outline="$route.name == 'assessorMain'"
              padding="0"
              class="relative-position z-top font-18"
              :class="
                $route.name == 'assessorDetails'
                  ? ' bg-pink text-white border-black'
                  : ' bg-white text-black'
              "
              @click="$router.push('/assessor/details')"
            >
              <q-icon size="20px" name="fas fa-sort-amount-down-alt"></q-icon>
              <span class="q-pl-sm">ผลคะแนน</span>
            </q-btn>
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
              class="text-black bg-white relative-position z-top font-18"
              @click="isShowLogoutDialog = true"
            >
              <q-icon name="fas fa-sign-out-alt" size="sm"></q-icon
              >&nbsp;ออกจากระบบ
            </q-btn>
          </div>
        </div>
        <div class="absolute-bottom" style="left: 20px; bottom: -10px;">
          <q-img src="../../public/images/logo.png" width="350px"></q-img>
        </div>
      </div>
    </q-header>

    <q-page-container>
        <q-resize-observer @resize="onResize" />
      <router-view v-if="isShowRouterView" />

       <div class="relative-position bg-pink-4" style="height:100vh" v-else>
        <div
          class="absolute-center bg-grey-5 text-black q-pa-md"
          style="width:70%;max-width:500px;margin:auto;border-radius:10px"
        >
          <div align="center">
            <q-img style="width:300px" src="../../public/error-logo.png"></q-img>
          </div>
          <div align="center" class="font-24 q-py-xl">ความละเอียดของหน้าจอน้อยเกินไป</div>

          <div align="center" class="font-18 q-pa-md">
            เราเสียใจที่จะต้องบอกคุณว่า คุณจำเป็นต้องใช้จอคอมพิวเตอร์ที่มี
            ความละเอียดสูงกว่านี้ ในการทำงานกับโปรแกรม pmqa เนื่องจากโปรแกรม pmqa มีข้อมูล ในแต่ละหน้าค่อนข้างเยอะ จึงทำให้ไม่สามารถใช้กับจอภาพที่มีความละเอียดต่ำได้
          </div>
        </div>
      </div>
      <q-dialog v-model="isShowLogoutDialog">
        <q-card class="q-pa-sm" style="width:450px">
          <q-card-section class="font-24" align="center"
            >ออกจากระบบ</q-card-section
          >
          <q-card-section class="font-18" align="center"
            >คุณต้องการออกจากระบบใช่หรือไหม?</q-card-section
          >
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
    </q-page-container>
  </q-layout>
</template>

<script>
import Axios from "axios";
export default {
  name: "MainLayout",
  data() {
    return {
      userData: "",
      isShowAssessmentDate: false,
      isShowLogoutDialog: false,
      leftDrawerOpen: false,
      endDate: "",
      assessmentStatus: false,
       isShowRouterView: true,
    };
  },
  methods: {
   onResize(size) {
      
      if (size.width < 1000) {
        this.isShowRouterView = false;
      } else {
        this.isShowRouterView = true;
      }
    },
    async getAssessmentDate() {
      const url = this.apiPath + "getAssessmentDate.php";
      let assessmentDate = await Axios.get(url);
      this.assessmentStatus = assessmentDate.data.status;


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
    },
    confirmLogOut() {
      this.$q.sessionStorage.clear();
      this.$router.push("/");
    }
  },
  created() {
    if(!this.$q.sessionStorage.has("uid")){
      this.$router.push("/")
    }
    this.getAssessmentDate();
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
.underline-text {
  text-decoration: underline;
}
.border-black {
  border: 1px solid black;
}
</style>
