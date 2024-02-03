<template>
  <div class="mt-[79px] px-[60px]">
    <div class="logo flex items-center">
      <Back className="w-[74px] h-[74px]" />
      <Logo class="ml-[60px] h-[45px]" />
    </div>
    <p class="title">{{ $t('logIn') }}</p>
    <van-form @submit="collectInfo">
      <div class="info">
        <label>{{ $t('account') }}</label>
        <Input
          name="account"
          v-model="account"
          :rules="[{ required: true, message: '' }]"
        />
      </div>
      <div class="info">
        <div class="password">
          <label>{{ $t('pwd') }}</label>
          <span class="forget-pwd" @click="forgetPwdClick">{{$t('forgotPwd')}}？</span>
        </div>
        <Input
          name="pwd"
          v-model="pwd"
          type="password"
          :rules="[{ required: true, message: '' }]"
        />
      </div>
      <Button className="mt-[50px] h-[93px] btn" :name="$t('logIn')" :nativeType="true"></Button>
    </van-form>
    <div class="tip">
      <span class="no-account">{{ $t('noAccount') }}</span>
      <span class="create-account" @click="createAccountClick">{{ $t('createAccount') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  asyncData() {
    return {
      account: "",
      pwd: ''
    }
  },
  methods: {
    collectInfo(val) {
      console.log('val: ', val);
      console.log('this: ', this);
      this.$router.push('home')
      this.$sessionStorage.setItem('is-login', 1)
    },
    forgetPwdClick(){
      this.$router.push('forgot-password')
    },
    createAccountClick(){
      this.$router.push('create-account')
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-family: PingFangSC-Medium;
  font-size: 62px;
  color: var(--c2);
  letter-spacing: 0;
  font-weight: 500;
  margin: 100px 0 70px;
}
.info {
  label {
    font-family: PingFangSC-Regular;
    display: block;
    font-size: 30px;
    color: var(--c9);
    letter-spacing: 0;
    font-weight: 400;
    margin-bottom: 20px;
  }
  &:not(:first-child) {
    margin-top: 30px;
  }
  .password {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .forget-pwd {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: var(--blue);
    letter-spacing: 0;
    font-weight: 400;
    margin-bottom: 20px;
  }
}
.btn {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: var(--c_fd);
  letter-spacing: 0;
  text-align: right;
  font-weight: 400;
}
.no-account {
  font-family: PingFang-SC-ExtraLight;
  font-size: 28px;
  color: var(--gray1);
  letter-spacing: 0;
  line-height: 40px;
  font-weight: 400;
}
.create-account {
  font-family: PingFang-SC-ExtraLight;
  font-size: 28px;
  color: var(--blue);
  letter-spacing: 0;
  line-height: 40px;
  font-weight: 400;
}
.tip {
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
