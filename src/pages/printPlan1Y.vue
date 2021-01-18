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
      >แผนปฏิบัติการเพื่อยกระดับการพัฒนาสู่ระบบราชการ 4.0 ประจำปี พ.ศ. {{ $q.sessionStorage.getItem("y") +543 }}</div>

      <div class="q-pa-lg">
        <u>แผนปฏิบัติการเพื่อยกระดับการพัฒนาสู่ระบบราชการ 4.0 ประจำปี พ.ศ. {{ $q.sessionStorage.getItem("y") +543 }}</u>

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
    };
  },
  methods: {
    async getPlan1Y() {
      let url = this.apiPath + "getPlan1Y.php";
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
    this.getPlan1Y();
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