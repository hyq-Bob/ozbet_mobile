<template>
  <div class="_forgot-pwd">
    <div class="flex items-center mb-[100px]">
      <Back class="w-[74px] h-[74px] mr-[60px]"/>
      <Logo />
    </div>
    <p class="title">{{ $t('forgotPwd') }}</p>
    <CollectInfo :collectList="collectList" />
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
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
          title: this.$t('email'),
          name: "email",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: this.$t('emailCode'),
          name: "emailCode",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: this.$t('newPwd'),
          name: "pwd",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: this.$t('confirmPwd'),
          name: "confirmPwd",
          value: "",
          rules: [{ required: true, message: "" }],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
._forgot-pwd {
  margin: 65px 60px;
}
.title {
  font-family: PingFangSC-Medium;
  font-size: 62px;
  color: var(--c2);
  letter-spacing: 0;
  font-weight: 500;
  margin-bottom: 70px;
}
</style>
