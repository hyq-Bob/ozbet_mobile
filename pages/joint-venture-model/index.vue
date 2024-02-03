<template>
  <div class="_joint-venture-model">
    <div class="header">
      <i class="iconfont icon-left text-[var(--black)]" @click="goBack"></i>
      <p class="flex-1 text-center title">合营模式</p>
    </div>
    <ul class="px-[30px]">
      <li v-for="item in infoList" :key="item.id" class="mt-[40px]">
        <p class="name">{{ item.name }}</p>
        <span class="summary"> {{ item.summary }}</span>
      </li>
    </ul>
    <Button name="合营模式申请" class="btn" :plain="true"></Button>
  </div>
</template>

<script>
export default {
  name: "JointVentureModelScope",
  components: {},
  data() {
    return {
      infoList: [
        {
          id: "1",
          name: "关于Ozbet品牌",
          summary:
            "Ozbet网站创办于2015年12月，定位全球专业的体育电竞竞猜网站。Ozbet体育电竞包含且不限于DOTA2/LOL(英雄联盟)/CSGO/炉石传说/风暴英雄/守望先锋/星际争霸2等电子竞技运动项目，同时也包含了各类传统体育赛事。",
        },
        {
          id: "2",
          name: "专注全球电子竞技",
          summary:
            "一直以来，Ozbet为玩家提供的体育电竞赛事，是业内最多的，每天推出包含足球/蓝球/排球/网球、Dota2/LOL/CSGO/星际争霸2/等热门电竞赛事及新闻。",
        },
        {
          id: "3",
          name: "首创体育电竞加密货币盘口",
          summary:
            "提供有包含USDT、BCH、ETH、LTC等加密货币充值，另外可直冲Ozcoin，TOTO代币充值服务，到账速度快，更大限度保护用户的资产及隐私安全。",
        },
        {
          id: "4",
          name: "丰富的体育赛事滚球盘口",
          summary:
            "提供有包含USDT、BCH、ETH、LTC等加密货币充值，另外可直冲Ozcoin，TOTO代币充值服务，到账速度快，更大限度保护用户的资产及隐私安全。",
        },
        {
          id: "5",
          name: "最有竞争力的佣金计划",
          summary:
            "推广5位及以上用户注册并充值即可申请成为平台合营伙伴，Ozbet为合营伙伴提供市面上最好并且最有竞争力的佣金计划，最高可达60%。",
        },
      ],
    };
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="scss">
._joint-venture-model {
  .header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--gray1);
    padding: 26px 30px 27px;
    .title {
      font-family: PingFangSC-Medium;
      font-size: 32px;
      color: var(--c2);
      letter-spacing: 0;
      font-weight: 500;
    }
    .icon-left {
      font-size: 44px;
    }
  }
  .name {
    display: flex;
    font-family: PingFangSC-Regular;
    align-items: center;
    font-size: 30px;
    color: var(--c3);
    letter-spacing: 0;
    text-align: justify;
    font-weight: 400;
    margin-bottom: 20px;
    &:before {
      display: inline-block;
      content: "";
      width: 15px;
      height: 15px;
      margin-right: 20px;
      border-radius: 50%;
      background: var(--blue);
    }
  }
  .summary {
    font-family: PingFangSC-Regular;
    font-size: 26px;
    color: var(--c3);
    letter-spacing: 0;
    text-align: justify;
    line-height: 38px;
    font-weight: 400;
  }
  .btn {
    font-family: PingFangSC-Regular;
    font-size: 30px;
    color: var(--blue);
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
    border-color: var(--blue);
    margin-top:40px
  }
}
</style>
