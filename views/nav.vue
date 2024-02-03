<template>
    <div class="_nav">
      <Menu :menuList="menuList" :active="active" @click="itemClick"></Menu>
      <hr />
      <Menu :menuList="menuList1" :active="active" @click="itemClick"></Menu>
      <hr />
      <div class="theme-box">
        <span class="tip text-[var(--c_black)]">{{ $t('lightColor') }}</span>
        <van-switch class="switch" @change="switchChange" v-model="themeChange" active-color="var(--red)"
          inactive-color="var(--c_gray)" />
        <span class="tip text-[var(--c_a)]">{{ $t('drakColor') }}</span>
      </div>
      <selectComp className="mt-[30px]" @change="valChange" :options="langList" v-model="activeLang" />
      <selectComp className="mt-[30px]" :options="areaList" v-model="activeArea" />
    </div>
</template>

<script>
import clubComp from "@/views/club.vue";
import selectComp from "@/views/select.vue";
export default {
  components: {
    selectComp
  },
  data() {
    return {
      active: "1",
      activeLang: this.$cookies.get("i18n_redirected") || 'zh',
      themeChange: 'false',
      activeArea: "europe",
      areaList: [{
        code: 'europe',
        name: "欧洲盘"
      }],
      menuList: [
        {
          id: 1,
          label: "世界杯",
          icon: 'icon-zuqiubeifen'
        },
        {
          id: 2,
          label: "体育赛事",
          icon: 'icon-tiyu'
        },
        {
          id: 3,
          label: "电子竞技",
          icon: 'icon-jinji'
        },
        {
          id: 4,
          label: "滚球中",
          icon: 'icon-gunqiu'
        },
        {
          id: 5,
          label: "即将开赛",
          icon: 'icon-kaisai'
        },
      ],
      menuList1: [
        {
          id: 11,
          label: "Oz俱乐部",
          icon: 'icon-julebu',
          children: clubComp,
        },
        {
          id: 22,
          label: "合营中心",
          icon: 'icon-heying'
        },
        {
          id: 33,
          label: "个人中心",
          icon: 'icon-geren'
        },
        {
          id: 44,
          label: "资讯公告",
          icon: 'icon-zixun'
        },
        {
          id: 55,
          label: "优惠活动",
          icon: 'icon-youhui'
        },
        {
          id: 66,
          label: "帮助中心",
          icon: 'icon-help'
        },
        {
          id: 77,
          label: "在线客服",
          icon: 'icon-inline',
          num: 5
        },
      ]
    }
  },

  computed: {
    langList() {
      return this.$i18n.locales
    },
  },
  methods: {
    // 语言改变
    valChange(lang) {
      this.$store.commit("i18nModule/SET_LOCALE", lang)
    },
    // 主题切换
    switchChange(val) {
      this.$store.commit('themeModule/TOGGLE_THEME', val ? 'drak' : 'light')
    },
    // 导航点击
    itemClick(val) {
      this.active = val
    }
  }
}
</script>

<style lang="scss" scoped>
._nav {
  margin-top: 17px;
  padding: 0 40px;

  hr {
    display: block;
    height: 1px;
    background-image: linear-gradient(to right, var(--bg_e6), var(--c_f));
    margin: 20px 0;
  }

  .theme-box {
    display: flex;
    column-gap: 20px;
    margin-top: 35px;
    align-items: center;
    justify-content: center;

    .tip {
      font-family: PingFangSC-Regular;
      font-size: 22px;
      letter-spacing: 0.14px;
      font-weight: 400;
    }

    .switch {
      font-size: 60px !important;
      background-color: var(--bg_f7) !important;
      border-radius: 30px;

      :global(.van-switch__node) {
        // left: 10px;
        box-shadow: none;
      }
    }
  }
}
</style>
