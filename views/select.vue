<template>
  <div :class='["_select",className]'>
    <div class="select-info" @click="popupToggleClick">
      <span class="name">{{activeName}}</span>
      <i class="iconfont icon-xiala"></i>
    </div>
    <van-popup v-model="popupToggle" :overlay="true" :round="true" position="bottom">
      <ul class="popup-list_box">
        <li v-for="item in options" :class="[value == item.code?'active':'']" @click="itemClick(item)">
          {{ item.name }}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "SelectScope",
  props: {
    className:{
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  computed:{
    activeName(){
      return this.options.find(item => item.code == this.value)?.name ?? this.value
    }
  },
  data(){
    return {
      popupToggle:false
    }
  },
  methods:{
    itemClick(crt){
      this.$emit('input', crt.code)
      this.popupToggleClick()
      this.$emit('change',crt.code)
    },
    popupToggleClick(){
      this.popupToggle = !this.popupToggle
    }
  }
}
</script>

<style lang="scss" scoped>
._select {
  height: 85px;
  width: 100%;
  background: var(--bg_f7);
  border-radius: 42.5px;
  padding: 0 30px;
  .select-info {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .name {
    font-family: PingFangSC-Regular;
    font-size: 30px;
    color: var(--c9);
    letter-spacing: 0.19px;
    font-weight: 400;
  }
  .iconfont {
    color: var(--c_a);
  }
}
.popup-list_box {
  padding: 20px;
  li {
    font-family: PingFangSC-Regular;
    font-size: 30px;
    color: var(--c9);
    letter-spacing: 0.19px;
    font-weight: 400;
    padding: 10px;
    text-align: center;
    &:not(:last-child) {
      border-bottom: 1px solid var(--c9);
    }
    &.active {
      color: var(--blue);
    }
  }
}
</style>