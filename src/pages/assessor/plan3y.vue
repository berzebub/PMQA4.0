<template>
  <q-page style="padding:30px 75px">
    <div align="center" class="font-36 q-pt-md q-pb-sm relative-position">
   แผนยกระดับการพัฒนาสู่ระบบราชการ 4.0 ระยะ 3 ปี
      <div class="absolute-right" style="top:10px;">
        <q-btn @click="changeStatus()" :color="!status ? null : 'secondary'" :label="!status ?'ยังไม่ประเมิน' :'เสร็จสิ้น'" style="font-size:23px;width:155px" :outline="!status ?true : false"></q-btn>
      </div>
    </div>
    <div align="right">วันที่รับข้อมูล 27/1/2564 เวลา 17:30</div>

    <div class="row q-pt-md">
      <div class="col-2" align="center">
        <div style="width:200px;border:3px solid #e84c93;border-radius:5px;">
          <div style="width:100%">
            <div class="bg-grey-5 q-pa-xs text-black" align="center">word / pdf</div>
            <div
              class="bg-white q-pa-xs text-black cursor-pointer"
              style="width:100%;text-decoration:underline"
              align="center"
            >
              แผนยกระดับการพัฒนา
              <br />สู่ระบบราชการ 4.0 ระยะ 3 ปี
             
            </div>
          </div>
        </div>

        <!-- PDF เอกสารแนะนำเพิ่มเติม -->

        <!-- มีไฟล์ -->
        <div
          v-if="filePdf != null"
          style="width:200px;border:3px solid #e84c93;border-radius:5px;"
          class="q-mt-lg"
        >
          <div style="width:100%">
            <div class="bg-grey-5 q-pa-xs text-black" align="center">word / pdf</div>
            <div
              class="bg-white q-pa-xs text-black cursor-pointer"
              style="width:100%;text-decoration:underline"
              align="center"
              @click="openFile()"
            >pdf เอกสารเพิ่มเติม</div>
            <div
              class="bg1 text-white font-12 q-py-sm curqsor-pointer"
              @click="deleteFile()"
            >ลบไฟล์</div>
          </div>
        </div>

        <!-- ไม่มีไฟล์ -->
        <q-file
          v-model="filePdf"
          dense
          style="width:200px;overflow:hidden;border:3px solid #e84c93;border-radius:5px;"
          borderless
          accept=".pdf"
          class="bg-white q-mt-lg"
          v-else
        >
          <template v-slot:prepend>
            <div class="absolute-center fit" align="center">
              <span class="font-16 text-black">pdf เอกสารเพิ่มเติม</span>
            </div>
          </template>

          <template v-slot:file></template>
        </q-file>
      </div>
      <div class="col-10">
        <textarea
        v-model="suggestion"
          placeholder="ข้อเสนอแนะ"
          class="q-pa-md"
          style="height:460px;max-width:100%;width:100%"
          :class="isErrorTextarea ? 'error-textarea' : null"
        ></textarea>
      </div>
    </div>

    <div align="center" class="q-pt-lg">
      <q-btn
      @click="saveData()"
        class="bg-teal text-white font-18"
        label="บันทึกข้อมูล"
        style="width: 220px; border-radius: 0px;"
        push
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      suggestion: "",
      filePdf: null,
      status : false,
      isErrorTextarea : false
    };
  },
  methods: {
    saveData(){
         if(this.suggestion){
        this.isErrorTextarea = false
      }else{
this.isErrorTextarea = true
      }
    },

    changeStatus(){
      // ปุ่มประเมิน
      if(this.suggestion){
        this.status = !this.status
        this.isErrorTextarea = false
      }else{
this.isErrorTextarea = true
      }

    },
    openFile(){
      console.log("open")
    },
    deleteFile(){
      this.filePdf = null
    },
  },
};
</script>

<style>
.error-textarea{
  border:2px solid red
}
</style>