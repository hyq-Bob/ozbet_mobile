<!-- components/SeamlessScroll.vue -->

<template>
  <div :class="['scroll-container', className]">
    <div class="scroll" ref="scroll" :style="{ transform: `translateY(${position}px)` }">
      <p  @click="$emit('click', line)"  v-for="(line, index) in list" :key="index">{{ line.text }}</p>
      <p  @click="$emit('click', line)"  v-for="(line, index) in list" :key="`duplicate_${index + list.length}`">{{ line.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className:{
      type:String,
      default:""
    },
    list: {
      type: Array,
      default: function () { return [] }
    }
  },
  data() {
    return {
      position: 0,
      scrollSpeed: 1,
    };
  },
  mounted() {
    this.startScrolling();
  },
  methods: {
    startScrolling() {
      setInterval(() => {
        this.position -= this.scrollSpeed;
        if (this.position <= -this.$refs.scroll.clientHeight / 2) {
          this.position = 0;
        }
      }, 50);
    },
  },
};
</script>

<style scoped>
.scroll-container {
  height: inherit;
  overflow: hidden;
}

.scroll {
  display: flex;
  flex-direction: column;
  >p {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: var(--c2);
    letter-spacing: 0;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
