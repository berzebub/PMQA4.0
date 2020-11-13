<template>
  <div>
    <print1 class="print1"> </print1>
    <print2 class="print2"> </print2>

    <print3 class="print3"></print3>
    <print4 class="print4"></print4>
    <print5 class="print5"></print5>
    <print6></print6>
  </div>
</template>

<script>
import print0 from "./print0";
import print1 from "./print1";
import print2 from "./print2";
import print3 from "./print3";
import print4 from "./print4";
import print5 from "./print5";
import print6 from "./print6";
export default {
  components: {
    print1,
    print2,
    print3,
    print4,
    print5,
    print6,
  },
};
</script>

<style lang="scss" scoped>
@media print {
  .print1 {
    height: 7000px;
  }
  .print2 {
    height: 6040px;
  }
  .print3 {
    height: 6000px;
  }
  .print4 {
    height: 5200px;
  }
  .print5 {
    height: 5200px;
  }
}
</style>