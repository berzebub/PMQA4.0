<template>
  <q-page style="max-width:1280px;margin:auto">
    <div class="q-px-lg q-pt-md" align="right">
      <div class>
        <q-select
          outlined
          label="ปีงบประมาณ"
          :options="yearOptions"
          dense
          style="width:170px"
          v-model="yearSelected"
        ></q-select>
      </div>
    </div>

    <div class="q-pa-md ">
      <div class="row justify-center">
        <div style="width:11%" class="q-pa-xs" v-for="(item,index) in categoryGroup" :key="index">
          <div
            @click="toPage()"
            class="row relative-position cursor-pointer"
            v-ripple
            style="border:1px solid"
          >
            <div align="center" class="col-12 q-py-sm">{{ item.name }}</div>

            <div
              class="col-12 text-white"
              align="center"
              :class="item.status == 'ยังไม่ประเมิน' ?'my-red' : item.status == 'ประเมินแล้ว' ? 'my-green' : 'my-yellow'"
            >{{ item.status }}</div>
          </div>
        </div>
      </div>
    </div>


<!-- Graph Row -->
    <div class='row'>

      <div class="col-6">
        <!-- SPIDER GRAPH -->
        <div id="container"></div>
      </div>

      <div class="col-6">
        
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      yearSelected: "",
      yearOptions: [],
      year: "",
      categoryGroup: [
        { name: "OP", status: "ประเมินแล้ว" },
        { name: "หมวด 1-6", status: "รอประเมิน" },
        { name: "หมวด 7 GAP", status: "รอประเมิน" },
        { name: "แผน 1 ปี", status: "ยังไม่ประเมิน" },
        { name: "แผน 3 ปี", status: "ยังไม่ประเมิน" },
        { name: "ติดตาม 6 เดือน", status: "ยังไม่ประเมิน" },
        { name: "หมวด7", status: "ยังไม่ประเมิน" },
        { name: "ติดตาม 12 เดือน", status: "ยังไม่ประเมิน" },
        { name: "สรุป 12 เดือน", status: "ยังไม่ประเมิน" },
      ],
    };
  },
  methods: {
    name() {},
  },
  created() {
    let date = new Date();
    let year = date.getFullYear();
    this.yearOptions = [year + 541, year + 542, year + 543];
    this.yearSelected = year + 543;
  },
};
</script>

<style lang="scss" scoped>
.my-red {
  background-color: #c92a07;
}
.my-yellow {
  background-color: #bb950d;
}
.my-green {
  background-color: #138c6f;
}
</style>