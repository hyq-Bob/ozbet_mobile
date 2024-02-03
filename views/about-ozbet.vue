<template>
  <div class="about-ozbet">
    <p class="title">关于Ozbet</p>
    <span
      class="summary">Ozbet.one是一个致力于让全球用户的加密资产更安全，投注更公平、服务更完善的全新的Web3.0链上博彩应用。用户可以使用多种加密货币在Ozbet上进行无限额投注，从体育赛事、电子竞技、博彩游戏中获得极致的娱乐体验。</span>
    <AboutTemplate :dataList="panelList" v-model="activeId">
      <template #title="{ content }">
        <p class="panel-title">{{ content.title }}</p>
      </template>
      <template #default="{content}">
        <div v-if="content.children?.length" :class="formatClass(content)">
          <a :href="hrefFormat(item)" :class="content.imgClass" v-for="item in content.children" :key="item.id">
            <template v-if="item.title">
              {{ item.title }}
            </template>
            <template v-else-if="item.url.startsWith('icon-')">
                <i :class='["iconfont", item.url]'></i>              
            </template>
            <template v-else>
              <img class="iconfont" :src="item.url" alt=""/>
            </template>
          </a>
        </div>
      </template>
    </AboutTemplate>
  </div>
</template>

<script>
import AboutTemplate from "./template/about.vue";
export default {
  name: "AboutOzbetScope",
  components: { AboutTemplate },
  data() {
    return {
      activeId: [1],
      panelList: [
        {
          id: 1,
          title: "在线客服",
          children: []
        },
        {
          id: 2,
          title: "关于",
          dir: 'vertical', // vertical horizontal
          children: [
            {
              id: "2-1",
              title: "合营模式",
            },
            {
              id: "2-2",
              title: "理性游戏",
            },
            {
              id: "2-3",
              title: "联系我们",
            },
            {
              id: "2-4",
              title: "服务条款",
            },
            {
              id: "2-5",
              title: "新手指导",
            },
            {
              id: "2-6",
              title: "隐私政策",
            },
          ]
        },
        {
          id: 3,
          title: "付款方式",
          dir: 'horizontal',
          imgClass:'w-[80px] h-[80px]',
          children: [
            {
              id: "3-1",
              title: "",
              url:require('@/static/images/pay_1.svg'),
            },
            {
              id: "3-2",
              title: "",
              url:require('@/static/images/pay_2.svg'),
            },
            {
              id: "3-3",
              title: "",
              url:require('@/static/images/pay_3.svg'),
            },
            {
              id: "3-4",
              title: "",
              url:require('@/static/images/pay_4.svg'),
            },
            {
              id: "3-5",
              title: "",
              url:require('@/static/images/pay_5.svg'),
            },
            {
              id: "3-6",
              title: "",
              url:require('@/static/images/pay_6.svg'),
            },
            {
              id: "3-7",
              title: "",
              url:require('@/static/images/pay_7.svg'),
            },
            {
              id: "3-8",
              title: "",
              url:require('@/static/images/pay_8.svg'),
            },
          ]
        },
        {
          id: 4,
          title: "关注我们",
          dir: 'horizontal',
          imgClass:'w-[80px] h-[80px]',
          children: [
            {
              id:'4-1',
              url:require('@/static/images/care_1.svg'),
            },
            {
              id:'4-2',
              url:require('@/static/images/care_2.svg'),
            },
            {
              id:'4-3',
              url:require('@/static/images/care_3.svg'),
            },
            {
              id:'4-4',
              url:require('@/static/images/care_4.svg'),
            },
            {
              id:'4-5',
              url:require('@/static/images/care_5.svg'),
            },
            {
              id:'4-6',
              url:require('@/static/images/care_6.svg'),
            },
          ]
        },
        {
          id: 5,
          title: "支付保障",
          dir: 'horizontal',
          imgClass:'w-[130px] h-[55.71px]',
          children: [
            {
              id:'5-1',
              url:require('@/static/images/pay_safe.svg')
            }
          ]
        },
      ]
    }
  },
  methods:{
    hrefFormat(crt){
        if(crt.href)return crt.href;
        return 'javascrip:void 0;'
    },
    formatClass(crt){
      let classStr='flex';
      if(crt.children.length){
        if(crt.dir == 'horizontal'){
          // 水平
          classStr += ' items-center horizontal'
        }else{
          // 垂直 
          classStr += ' flex-col vertical'
        }
      }
      return classStr
    }
  }
}
</script>

<style lang="scss" scoped>
.about-ozbet {
  padding: 40px 30px;

  .panel-title {
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: var(--c2);
    letter-spacing: 0;
    font-weight: 400;
  }

  .title {
    font-family: PingFangSC-Medium;
    font-size: 26px;
    color: var(--blue);
    letter-spacing: 0;
    font-weight: 500;
    margin-bottom: 17px;
  }

  .summary {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: var(--c6);
    letter-spacing: 0;
    text-align: justify;
    line-height: 36px;
    font-weight: 400;
  }
  .horizontal{
    padding: 0 20px 30px;
    column-gap: 30px;
    row-gap: 23px;
    flex-wrap: wrap;
    > a{
        white-space: nowrap;
        margin-top: 7px;
        > img{
          width:100%;
          height: 100%;
          object-fit: contain;
        }
    }
  }
  .vertical {
    padding-bottom: 30px;
    > a {
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #666666;
      letter-spacing: 0;
      text-align: justify;
      line-height: 24px;
      font-weight: 400;
      margin-top: 30px;
      margin-left: 20px;
      &:first-child{
        margin-top: 7px;
      }
    }
  }
}
</style>