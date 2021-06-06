<template>
  <div>
    <div class="float-right q-pa-md">
      <div class="bg-red"></div>

      <q-btn
        class="printBtn"
        icon="fas fa-print"
        color="pink-4"
        round
        @click="printBtn()"
      ></q-btn>
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
        รายงานติดตามรอบ 6 เดือน
      </div>

      <div class="q-pa-lg">
        <a :href="apiPath + file6Path" style="text-decoration:none;color:black">
          <u>รายงานติดตามรอบ 6 เดือน</u>
        </a>

        <div v-if="path2" class="q-pt-md">
          <a
            target="_blank"
            :href="apiPath + path2"
            style="text-decoration:none;color:black"
          >
            <u> เอกสารแนบเพิ่มเติม</u>
          </a>
        </div>

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
      file6: "",
      file6Path: "",
      path2 : "",
    };
  },
  methods: {
    async getFile() {
      let uid = this.$q.sessionStorage.getItem("uid");
      let year = this.$q.sessionStorage.getItem("y");
      let formData = new FormData();
      formData.append("user_id", uid);
      formData.append("year", year);
      const url = this.apiPath + "getFile6Month.php";
      let response = await Axios.post(url, formData);
      if (response.data != "no files") {
        let data = response.data[0];
        this.file6 = !data.path ? [] : null;
        this.file6Path = data.path;
      }
    },

    async getMonth6() {
      let url = this.apiPath + "getMonth6_a.php";
      let postData = {
        user_id: this.$q.sessionStorage.getItem("uid"),
        year: this.$q.sessionStorage.getItem("y")
      };

      let response = await Axios.post(url, postData);

      if (response.data.length) {
        this.suggestion = response.data[0].suggestion;
      }
    },

      async getFile6MonthA() {
      let uid = this.$q.sessionStorage.getItem("uid")
      let year = this.$q.sessionStorage.getItem("y");
      let postData = {
        user_id: uid,
        year: year,
      };
      const url = this.apiPath + "getFile6Month_a.php";
      let response = await Axios.post(url, postData);
      if (response.data.length) {
        this.path2 = response.data[0].path
      }
    },



    openFile(file) {
      if (file == 1) {
        // userid-1-year
        let filePath = this.apiPath + this.file6Path;
        window.open(filePath);
      } else {
        let filePath = this.apiPath + this.path2;
        window.open(filePath);
      }
    }
  },
  created() {
    this.getFile();
    this.getMonth6();
    this.getFile6MonthA()
  }
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
