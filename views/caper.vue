<template>
  <div class="caper">
    <div class="summary">
      <p>全站虚拟币投注无限额</p>
      <p>海量奖池等你来拿</p>
    </div>
    
    <Button name="查看活动详情" :block="false" className="h-[80px] btn"></Button>
  </div>
</template>

<script>
export default {
name:"CaperScope"
}
</script>

<style lang="scss" scoped>
.caper {
  display: flex;
  height: 215px;
  background: url("@/static/images/collect_bg.svg") no-repeat;
  background-size: 100%, 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin: 0 15px;
  .btn {
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: var(--c_f);
    letter-spacing: 0.16px;
    text-align: center;
    font-weight: 400;
    width: 245px;
  }
  .summary {
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: var(--c_f);
    line-height: 42px;
    font-weight: 500;
  }
}
</style>