<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="z-max">
      <div class="relative-position">
        <div class="row bg1 container-header relative-position">
          <div class="col q-pr-lg self-center" align="right">
            <span class="text-white font-24">วันสิ้นสุดการประเมิน : 15 ธันวาคม 2562</span>
          </div>
        </div>
        <div class="row bg2 container-header relative-position">
          <div class="col-1" style="width: 280px;"></div>
          <div class="col self-center font-24 text-black" align="center">
            <span>กองควบคุมโรคและภัยสุขภาพในภาวะฉุกเฉิน</span>
          </div>
          <div class="col-1 self-center q-px-md" align="right" style="width: 200px;">
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
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
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
