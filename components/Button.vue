<template>
  <van-button @click="btnClick" v-if="nativeType" :style="styleObj" :class='[className]' round block type="info" native-type="submit">
    <slot>{{ name }}</slot>
  </van-button>
  <van-button @click="btnClick" v-else :plain='plain' :style="styleObj" :class='[className]' :round="round" :block="block" type="info">
    <slot>{{ name }}</slot>
  </van-button>
</template>
<script>
export default {
  name: "Button",
  props: {
    plain:{
      type: Boolean,
      default: false,
    },
    styleObj:{
      type:Object,
      default: ()=> ({})
    },
    className:{
      type:String,
      default:'h-[93px]'
    },
    nativeType: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: true,
    },
    round: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods:{
    btnClick(){
      this.$emit('click')
    }
  }
};
</script>
<style lang="scss" scoped>
:deep(.van-button__text){
  color: currentColor;
}
</style>
