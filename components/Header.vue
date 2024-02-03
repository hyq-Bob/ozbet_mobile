<template>
  <div class="_header mt-[30px]" ref="headerRefs">
    <div class="menu" >
      <Open v-show="!value" @open="toggleOpenIcon(!value)"/>
      <Close v-show="value" @close="toggleCloseIcon(!value)"/>
    </div>
    <div class="info">
      <!-- 已登录 -->
      <template v-if="isLogin != 1">
        <div class="logged-in">
          <div class="name-amount">
            <p class="name">Bob.he</p>
            <p class="amount">0.000 CNY</p>
          </div>
          <div class="circle">
            <i class="iconfont icon-head"></i>
            <i class="iconfont icon-vip absolute left-0 bottom-0"></i>
          </div>
          <div class="circle">
            <img class="customer-service" src="../static/images/kefu.svg" alt="">
          </div>
          <div class="circle">
            <i class="iconfont icon-notice"></i>
          </div>
          <div class="circle recharge">
            {{ $t('recharge') }}
          </div>
        </div>
      </template>
      <template v-else>
        <!-- 未登录 -->
        <div class="no-logged flex items-center gap-[20px]">
          <p class="register btn" @click="goRegister">{{ $t('register') }}</p>
          <p class="login btn" @click="goLogin">{{ $t('logIn') }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderScope",
  props:{
    value:{
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      isLogin: this.$sessionStorage.getItem('is-login'),
    }
  },
  methods: {
    goRegister() {
      this.$router.push({ path: 'create-account' })
    },
    goLogin() {
      this.$router.push('login')
    },
    toggleOpenIcon(val){
      this.$emit('input', val)
      this.$emit('open', val)
    },
    toggleCloseIcon(val) {
      this.$emit('input', val)
      this.$emit('close', val)
    }
  }
}
</script>
<style lang="scss" scoped>
._header {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

.btn {
  height: 80px;
  padding: 18px 36px;
  border-radius: 40.5px;
}

.register {
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: var(--c3);
  letter-spacing: 0;
  font-weight: 400;
  background: var(--bg_f7);
}

.login {
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: var(--c_f);
  letter-spacing: 0;
  font-weight: 400;
  background: var(--blue);
}

.logged-in {
  display: flex;
  align-items: center;
  column-gap: 15px;

  .name-amount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 5px;

    .name {
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: var(--gray2);
      letter-spacing: 0.15px;
      line-height: 12px;
      font-weight: 400;
    }

    .amount {
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: var(--c2);
      letter-spacing: 0;
      font-weight: 400;
    }
  }

  .icon-head,
  .icon-notice {
    font-size: 40px;
    color: var(--gray2);
  }

  .icon-vip {
    font-size: 30px;
    color: var(--yellow);
  }

  .customer-service {
    width: 40px;
    height: 38.45px;
    object-fit: contain;
  }

  div.recharge {
    font-family: PingFangSC-Regular;
    background: var(--blue);
    font-size: 24px;
    color: var(--c_f);
    letter-spacing: 0.15px;
    font-weight: 400;
    overflow: hidden;
  }

  .circle {
    display: grid;
    position: relative;
    width: 77px;
    height: 77px;
    aspect-ratio: 1 / 1;
    background: var(--bg_f7);
    border-radius: 40.5px;
    place-content: center;
  }
}
</style>
