<template>
  <van-tabs :swipeable="true" class="_van-tabs">
    <van-tab v-for="item in tabsList" :key="item.id">
      <template #title>
        <slot name="title" :content="item">
          <div class="tab-box" @click="$emit('click', item)" :style="{ '--current-color': item.defaultColor }">
          <i :class="['iconfont', item.icon]"></i>
        </div>
        <p class="tabs_name">{{ item.name }}</p>
        </slot>
      </template>
      <slot :content="item"></slot>
    </van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: "TabsScope",
  props: {
    tabsList: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss" scoped>
._van-tabs {
  margin-top: 30px;

  :deep(.van-tabs__wrap) {
    height: auto;
    padding: 0 12px 0 15px;
  }

  :deep(.van-tabs__nav--complete) {
    padding: 0;
    column-gap: 15px;
  }

  :deep(.van-tab) {
    padding: 0;
  }

  :deep(.van-tabs__line) {
    bottom: auto;
    background-color: var(--blue);
  }
}

:deep(.van-tab--active) {
  .tabs_name {
    color: var(--blue);
  }
}

.tabs_name {
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: var(--c6);
  letter-spacing: 0;
  text-align: center;
  font-weight: 400;
  margin-top: 15px;
}

.tab-box {
  display: grid;
  background: var(--bg_f7);
  border-radius: 28px;
  width: 108px;
  height: 108px;
  place-content: center;

  > .iconfont {
    font-size: 60px;
    color: var(--current-color);
  }
}
</style>