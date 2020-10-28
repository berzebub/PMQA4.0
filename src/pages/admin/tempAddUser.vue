<template>
  <div>
    <div style="width:400px;margin:auto" class="q-gutter-md">
      <q-input v-model="data.office" label="กอง / สำนัก"></q-input>
      <q-input v-model="data.username" label="รหัสผู้ใช้งาน"></q-input>
      <q-input v-model="data.password" label="รหัสผ่าน"></q-input>
      <q-input v-model="data.collaborator" label="ผู้ประสานงาน"></q-input>
      <q-input v-model="data.tel" label="เบอร์โทรศัพท์"></q-input>
      <div align="center">
        <q-btn
          @click="addUser()"
          icon="fas fa-plus-circle"
          color="teal"
          label="Add"
        ></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      data: {
        office: "",
        username: "",
        password: "",
        collaborator: "",
        tel: ""
      }
    };
  },
  methods: {
    async addUser() {
      const url = this.apiPath + "addUser.php";
      let addUser = await Axios.post(url, this.data);
      this.notify("สำเร็จ", "green");
      this.data = {
        office: "",
        username: "",
        password: "",
        collaborator: "",
        tel: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
