<template>
  <div class="_home">
    <Header @open="openMenu"></Header>
    <div class="jackpot">
      <p class="title flex justify-center items-end mt-[13px]">
        <span class="name">Oz Prize Pool</span>
        <span class="pool">奖池</span>
      </p>
      <p class="info">
        <span class="money">88,888,883,00</span>
        <span class="unit">ozc</span>
        <span class="state">待兑换</span>
      </p>
    </div>
    <div class="notice-box">
      <i class="iconfont icon-horn"></i>
      <Marquee className="flex-1" :list="noticeList" @click="itemClick" />
    </div>
    <div class="search mt-[30px] mx-[15px]">
      <Input type="search" placeholder="search">
      <template #left>
        <i class="iconfont icon-search"></i>
      </template>
      </Input>
    </div>
    <TabsScope :tabsList="tabsList" @click="navItemsClick">
      <template #default="{ content }">
        <component :is="navContent" :content="content"/>
      </template>
    </TabsScope>
  </div>
</template>

<script>
import Marquee from "@/views/marquee.vue";
import TabsScope from "@/views/tabs.vue";
export default {
  name: "Home",
  data() {
    return {
      navContent: "",
      tabsList: [
        {
          icon: 'icon-star',
          id: 1,
          name: "收藏",
          componentName: "collect",
          defaultColor: "#0385f3"
        },
        {
          icon: 'icon-football',
          id: 2,
          name: "足球",
          componentName: "football",
          defaultColor: "#ae2525"
        },
        {
          icon: 'icon-basketball',
          id: 3,
          name: "篮球",
          componentName: "basketball",
          defaultColor: "#9c6a37"
        },
        {
          icon: 'icon-hero',
          id: 4,
          name: "英雄联盟",
          componentName: "hero",
          defaultColor: "#b11963"
        },
        {
          icon: 'icon-baseball',
          id: 5,
          name: "曲棍球",
          componentName: "baseball",
          defaultColor: "#145d8f"
        },
        {
          icon: 'icon-tennis',
          id: 6,
          componentName: "tennis",
          name: "网球",
          defaultColor: "#9c6a37"
        },
      ],
      noticeList: [
        {
          id: 1,
          text: '1文字轮播区 【银行维护】中国邮政储蓄银行于北京时北京时间北京时间间'
        },
        {
          id: 2,
          text: '2文字轮播区 【银行维护】中国邮政储蓄银行于北京时间北京时间'
        },
        {
          id: 3,
          text: '3文字轮播区 【银行维护】中国邮政储蓄银行于北京时间北京时间'
        },
        {
          id: 4,
          text: '4文字轮播区 【银行维护】中国邮政储蓄银行于北京时间北京时间'
        }
      ],
      swiperOptions: {
        direction: 'vertical',
        loop: true,
      },
    }
  },
  components: { Marquee, TabsScope },
  created(){
    //初始子组件内容
    this.navItemsClick({componentName:"collect"})
  },
  methods: {
    // nav
    async navItemsClick(crt) {
      let { default: componentAst } = await import(`@/views/${crt.componentName}.vue`)
      this.navContent = componentAst
    },
    // 公告
    itemClick(crt) {
      console.log('crt: ', crt);

    },
    openMenu() {
      this.$router.push('navigation')
    }
  }
}
</script>

<style lang="scss" scoped>
._home {
  .icon-search {
    font-size: 28px;
    color: var(--c9);
    margin-left: 40px;
  }

  .jackpot {
    position: relative;
    background: url(../../static/images/jackpot.svg) no-repeat;
    background-size: 100%, 196px;
    aspect-ratio: 710 / 196;
    margin: 20px 25px 0 15px;

    .name {
      font-family: DIN-BlackItalic;
      font-size: 34px;
      color: var(--white);
      letter-spacing: 0;
      font-weight: 400;
    }

    .pool {
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: var(--white);
      letter-spacing: 0;
      font-weight: 500;
    }

    .info {
      position: absolute;
      color: var(--c_black);
      bottom: 34.97px;
      white-space: nowrap;
      left: 50%;
      transform: translateX(-50%);

      .money {
        font-family: DIN-BlackItalic;
        font-size: 50px;

        letter-spacing: 0;
        line-height: 61px;
        font-weight: 400;
      }

      .unit {
        font-family: DIN-BlackItalic;
        font-size: 26px;
        color: var(--c_black);
        letter-spacing: 0;
        line-height: 61px;
        font-weight: 400;
      }

      .state {
        font-family: PingFang-SC-Medium;
        font-size: 26px;
        color: var(--c_black);
        letter-spacing: 0;
        line-height: 61px;
        font-weight: 500;
      }
    }
  }

  .notice-box {
    display: flex;
    align-items: center;
    column-gap: 20px;
    height: 33px;
    background: var(--bg_f2);
    padding: 13px 64px 14px 30px;
    box-sizing: content-box;
    margin-top: 30px;

    .icon-horn {
      color: var(--blue);
      font-size: 28px;
    }
  }
}
</style>