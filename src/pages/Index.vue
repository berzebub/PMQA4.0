<template>
  <div class="flex flex-center">
    <div v-for="(item, index) in data" :key="index">
      {{ item["2561"] }}{{ item["2562"] }}{{ item["2563"] }}
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      data: ""
    };
  },
  methods: {
    async testGetAPI() {
      const url = "http://localhost/pmqa4.0_api/testJSONAPI.php";
      let data = await Axios.get(url);
      console.log(data.data);
      this.data = data.data;
    }
  },
  created() {
    this.testGetAPI();
  }
};
</script>
