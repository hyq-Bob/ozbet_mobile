<template>
  <div class="_collect">
    <Caper />
    <div class="content">
      <p class="title">{{ content.name }}</p>
      <Footerball />
      <Basketball class="mt-[20px]"/>
    </div>
    <AboutOzbet/>
  </div>
</template>

<script>
import Caper from './caper.vue'
import Footerball from './football.vue'
import Basketball from './basketball.vue'
import AboutOzbet from "./about-ozbet.vue";
export default {
  name: "CollectScope",
  components: { Caper, Footerball, Basketball,AboutOzbet },
  props: {
    content: {
      type: Object | String,
      default: () => ({})
    }
  },
}
</script>
<style lang="scss" scoped>
._collect {
  margin-top: 30px;

  .content {
    $opacity: 0.2;
    background: rgba(var(--bg_d8), $alpha: $opacity);
    border-radius: 30px 30px 0px 0px;
    padding: 0 15px 20px;
  }

  .title {
    font-family: PingFangSC-Medium;
    font-size: 46px;
    color: var(--c2);
    letter-spacing: 0.29px;
    font-weight: 500;
    padding: 30px 40px;
  }
}
</style>