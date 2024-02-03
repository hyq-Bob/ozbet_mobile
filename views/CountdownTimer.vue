<!-- components/CountdownTimer.vue -->

<template>
    <button class="send-code" :disabled="isCounting" @click="startCountdown">
      {{ isCounting ? `${countdown}s` : $t(name) }}
    </button>
</template>

<script>
export default {
  name:"CountdownTimer",
  props:{
    name:{
      type:String,
      default: ()=>'sendCode'
    }
  },
  data() {
    return {
      isCounting: false,
      countdown: 59, // 初始倒计时秒数
      timer: null,
    };
  },
  methods: {
    startCountdown() {
      if (!this.isCounting) {
        this.isCounting = true;

        this.timer = setInterval(() => {
          if (this.countdown > 1) {
            this.countdown--;
          } else {
            this.stopCountdown();
          }
        }, 1000);
      }
    },
    stopCountdown() {
      clearInterval(this.timer);
      this.isCounting = false;
      this.countdown = 10; // 重置倒计时秒数
    },
  },
  beforeDestroy() {
    // 组件销毁时清除定时器
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.send-code {
  display: flex;
  font-family: PingFangSC-Regular;
  height: 80px;
  padding: 0 25px;
  min-width: 100px;
  background: var(--blue);
  border-radius: 42px;
  font-size: 26px;
  color: var(--c_f);
  letter-spacing: 0;
  font-weight: 400;
  align-items: center;
  justify-content: center;
}
</style>
