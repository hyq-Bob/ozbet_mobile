<!--
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2024-02-03 18:47:11
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2024-02-03 21:58:05
 * @summary:  合营模式申请
 * @FilePath: /ozbet_mobile/pages/application-joint-venture-mode/index.vue
-->

<template>
  <div class="_application-joint-venture-mode">
    <div class="header">
      <i class="iconfont icon-left text-[var(--black)]" @click="goBack"></i>
      <p class="flex-1 text-center title">合营模式申请</p>
    </div>
    <CollectInfo class="pt-[10px] px-[30px]" :collectList="collectList" btnName="申请加入"/>
  </div>
</template>

<script>
export default {
  name: 'ApplicationJointVentureModeScope',
  components: {},
  created() {
  },
  data() {
    return {
      collectList: [
        {
          title: this.$t('account'),
          name: "account",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: '邮箱',
          name: " email",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: '手机号码',
          name: "phone",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: 'Skype',
          name: "skype",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: 'Telegram',
          name: "telegram",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: '推广优势',
          name: "textarea",
          type:'textarea',
          className:"rounded-[16px] h-[auto] p-0",
          rows:'3',
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: '已阅读并同意《合营协议》',
          name:'agreement',
          value: true,
          rules: [{ required: true, message: "" }],
        },
      ]
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped lang="scss">
._application-joint-venture-mode{
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
}
</style>
