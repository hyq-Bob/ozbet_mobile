<template>
  <van-collapse class="about-panel" @change="panelChange" :value="value" :accordion="accordion">
    <van-collapse-item :name="item.id" v-for="item in dataList" :key="item.id">
      <template #title>
        <slot name="title" :content="item"></slot>
      </template>
      <template #right-icon>
        <slot name="icon" :content="item">
          <i class="iconfont icon-Up collapse-icon"></i>
        </slot>
      </template>
      <slot :content="item"></slot>
    </van-collapse-item>
  </van-collapse>
</template>

<script>
export default {
  name: "AboutScope",
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => ([])
    },
    dataList: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    panelChange(val) {
      this.$emit('input', val)
    },
  }
}
</script>
<style lang="scss" scoped>
.collapse-icon {
  font-size: 26px;
  color: var(--c_a);
}

:deep(.van-collapse-item) {
  background: var(--bg_f7);
  border-radius: 14px;
  &:not(:first-child) {
    margin-top: 30px;
  }
  &.van-collapse-item--border {
    &::after {
      border-top: 0;
    }
  }

  .van-cell {
    border-bottom: 0;
    padding: 0;
    background-color: transparent;

    &::after {
      border-bottom: 0;
    }
  }

  .van-collapse-item__content {
    background-color: transparent;
    padding: 0;
  }
}

.about-panel {
  &::after {
    border-width: 0;
  }

  :deep(.van-collapse-item__title) {
    padding: 22px 20px 23px;
  }
}
</style>