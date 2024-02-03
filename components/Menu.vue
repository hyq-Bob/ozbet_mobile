<template>
  <ul>
    <li :class="['list-items', className]" v-for="item in menuList" :key="item.id" @click="itemClick(item)">
      <div :class="['flex items-center flex-1 py-[20px] px-[10px]', active == item.id && 'active']">
        <i :class="['iconfont', item.icon]"></i>
        <template v-if="item.num">
          <div class="flex flex-1 items-center justify-between">
            <span class="nav-title">{{ item.label }}</span>
            <span class="nav-title">{{ item.num }}</span>
          </div>
        </template>
        <template v-else>
          <span class="nav-title">{{ item.label }}</span>
        </template>
       
      </div>
      <template v-if="item.children?.['_compiled']">
        <component :is="item.children" />
      </template>
      <template v-else>
        <div v-if="item.children" v-html="item.children"></div>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuScope",
  props: {
    className: {
      type: String,
      default: ""
    },
    active: {
      type: String | Number,
      default: ""
    },
    menuList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    itemClick(crt) {
      this.$emit('click', crt.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.list-items {
  color: var(--c2);

  .active {
    background: var(--blue);
    color: var(--c_f);
    border-radius: 8px;
  }
}

.iconfont {
  font-size: 32px;
  margin-right: 20px;
  color: currentColor;
}

.nav-title {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: currentColor;
  letter-spacing: 0;
  font-weight: 400;
}
</style>