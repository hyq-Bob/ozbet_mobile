<template>
  <div class="_club">
    <p class="flex items-center justify-between mb-[25px]">
      <i class="iconfont icon-vip"></i>
      <span class="next-reward">{{ $t('nextReward') }}</span>
    </p>
    <van-progress color="#0385F2" :show-pivot="false" :percentage="50"/>
    <p class="proportion">
      <span>5000</span>
      <span>/25000</span>
    </p>
  </div>
</template>

<script>
export default {
  name:"ClubScope"
}
</script>

<style lang="scss" scoped>
._club {
  background: var(--bg_01);
  padding: 36px 30px 31px;
  .iconfont {
    font-size: 44px;
    color: var(--yellow);
  }
  .next-reward {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: var(--c_black);
    letter-spacing: 0.15px;
    text-align: center;
    font-weight: 400;
  }
  :deep(.van-progress) {
    height: 10px;
    background: var(--bg-gray_01);
    // .van-progress__pivot {
    //   display: none;
    // }
  }
  .proportion {
    font-family: PingFang-SC-ExtraLight;
    letter-spacing: 0;
    text-align: center;
    line-height: 45px;
    font-weight: 400;
    margin-top: 20px;
    span {
      font-size: 24px;
      color: var(--gray2);

      &:first-child {
        font-size: 32px;
        color: var(--c_black);
      }
    }
  }
}
</style>