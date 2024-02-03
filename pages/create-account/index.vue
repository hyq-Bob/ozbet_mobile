<template>
  <div class="_create-account">
    <div class="flex items-center mb-[100px]">
      <Back class="w-[74px] h-[74px] mr-[60px]"/>
      <Logo />
    </div>
    <p class="title">{{ $t('createAccount') }}</p>
    <CollectInfo :collectList="collectList" :name="$t('register')"/>
    <p class="login mt-[40px]">
      <span>{{ $t('hasAccount') }}</span>
      <span class="text-[#0385F2]" @click="goLogin">{{$t('logIn')  }}</span>
    </p>
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
          title: this.$t('pwd'),
          name: "pwd",
          type:"password",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: this.$t('confirmPwd'),
          name: "confirmPwd",
          type:"password",
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
          title: this.$t('invitationCode'),
          name: "invitationCode",
          value: "",
          rules: [{ required: true, message: "" }],
        },
        {
          title: this.$t("agreementInfo"),
          name: "agreement",
          value: true,
          rules: [{ required: true, message: "" }],
        },

      ],
    };
  },
  methods:{
    goLogin(){
      this.$router.push('login')
    }
  }
};
</script>
<style lang="scss" scoped>
._create-account {
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
.login{
  font-family: PingFang-SC-ExtraLight;
font-size: 28px;
color: var(--gray1);
letter-spacing: 0;
text-align: center;
line-height: 40px;
font-weight: 400;
}
</style>
