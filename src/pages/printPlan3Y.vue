<template>
  <div>
    <div class="float-right q-pa-md">
      <div class="bg-red"></div>

      <q-btn class="printBtn" icon="fas fa-print" color="pink-4" round @click="printBtn()"></q-btn>
    </div>

    <div class="a4-portrait">
      <div align="center" class="q-py-sm relative-position">
        <div class="text-h6">{{ $q.sessionStorage.getItem("office") }}</div>
      </div>

      <div
        align="left"
        class="b-color text-white q-py-sm q-pl-md"
        style="width: 80%; font-size: 18px"
      >
      แผนยกระดับการพัฒนาสู่ระบบราชการ 4.0 ระยะ 3 ปี</div>

      <div class="q-pa-lg">
             <a :href="apiPath + path1" style="text-decoration:none;color:black">
        <u>แผนยกระดับการพัฒนาสู่ระบบราชการ 4.0 ระยะ 3 ปี</u>
</a>
        <div class="q-pt-md">ข้อเสนอแนะ</div>
        <div class="q-pt-md">{{ suggestion }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      suggestion: "",
      path1 : "",
    };
  },
  methods: {
     async getFile() {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "getFileMain.php";
      let response = await Axios.post(url, formData);


      if (response.data != "no files") {
        let data = response.data[0];
        this.path1 = data.path2 != "" ? data.path2 : "";
      }
    },

    async getPlan3Y() {
      let url = this.apiPath + "getPlan3Y.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y"),
      };

      let response = await Axios.post(url, postData);

      if (response.data.length) {
        this.suggestion = response.data[0].suggestion;
      }
    },
  },
  created() {
    this.getPlan3Y();
    this.getFile()
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

.brr {
  border-right: 1px solid;
}
.b-color {
  background-color: #f29a1c;
}
.t-color {
  color: #f29a1c;
}
.printDate {
  top: 10px;
  right: 80px;
}
.a4-portrait {
  width: 210mm;
  margin: auto;
  background-color: white;
  padding: 0;
}
.a4-portrait-all {
  width: 210mm;
  margin: auto;
}

.bg {
  background-color: #f1f1f1;
  height: 100%;
}
.border-black {
  border: 1px solid;
}
@page {
  size: A4;
  margin: 0;
}
@media print {
  .printBtn {
    visibility: hidden;
  }
  .printDate {
    right: 50px;
    top: 20px;
  }
  .a4-portrait-all {
    width: 297mm;
    padding: 1.5cm;
  }

  .a4-portrait {
    width: 210mm;
  }

  .bg {
    background-color: white;
  }
  /* ... the rest of the rules ... */
}
</style>