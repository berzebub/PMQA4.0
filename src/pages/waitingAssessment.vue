<template>
  <q-page class="flex flex-center q-pa-md">
    <!-- กรณีส่งแบบประเมินไปแล้ว และยังไม่ปิดการประเมิน แต่คณะกรรมการยังพิจารณาอยู่ && ส่งการประเมินในปีล่าสุดไปแล้ว -->
    <div style="max-width:800px;" align="center">
      <div v-if="activeShow == 0">
        <span style="font-size:48px;">
          ขณะนี้แบบประเมินของท่าน อยู่ในขั้นตอน การพิจารณาของคณะกรรมการ
        </span>
      </div>
      <div v-if="activeShow == 2">
        <span style="font-size:48px;">
          หมดเวลาการส่งการประเมิน <br />
          กรุณาติดต่อผู้ดูแลระบบ
        </span>
      </div>
      <div v-if="activeShow == 1">
        <span style="font-size:48px;">
          ขณะนี้แบบประเมินของท่าน ทางคณะกรรมการพิจารณาเรียบร้อยแล้ว
        </span>
      </div>
      <div class="q-pt-xl" v-if="activeShow != 2">
        <q-btn
          class="font-18 q-mx-xs shadow-2"
          outline=""
          style="width:200px;border-radius:0px;"
          label="ผลการประเมิน"
          v-close-popup
          @click="$router.push('/assessment')"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      activeShow: 1
    };
  }
};
</script>

<style lang="scss" scoped></style>
