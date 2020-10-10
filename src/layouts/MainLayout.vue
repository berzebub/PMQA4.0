<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
      <div class="relative-position">
      <div class="row bg1 container-bg relative-position" >
        <div class="col q-pr-lg self-center" align="right">
          <span class="text-white" style="font-size:18px;">
          วันสิ้นสุดการประเมิน : 15 ธันวาคม 2562
        </span>
        </div>
      </div>
      <div class="row bg2 container-bg relative-position">
        <div class="col-1 " style="width:280px;"></div>
        <div class="col self-center font-24 text-black" align='center'>
          <span>กองควบคุมโรคและภัยสุขภาพในภาวะฉุกเฉิน</span>
        </div>
        <div class="col-1 self-center  q-px-md" align="right" style="width:200px;">
          <q-btn style="width:150px;" dense class="text-black bg-white font-14 z-top"   label="ออกจากระบบ"></q-btn>
        </div>
      </div>
      <div class="absolute-top" style="left:20px;">
          <q-img class="" src="../../public/images/logo.png" width="250px"></q-img>
      </div>
    </div>
    </q-header>

    <q-footer>
      <div class="bg1 row container-bg" align="right">
        <div class="col self-center q-pr-lg">
          <span class="font-18">
          สงวนลิขสิทธิ์ 2563 : กรมควบคุมโรค
        </span>
        </div>
    </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>

<style lang="scss" scoped>

.container-bg{
height:50px;
};

.container-login{
  border:3px solid #000;
  border-radius: 10px;
}

</style>