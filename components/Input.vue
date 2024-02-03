
<template>
  <div class="flex items-center bg-[var(--gray)] _search h-[80px] rounded-[42px]" v-if="type == 'search'">
    <slot name="left"></slot>
    <div class="flex flex-1">
      <van-field
      :class='["border-0] bg-transparent active:border-[var(--blue)]", className]'
      :style="styleObj" :value="value" :type="type" :disabled="disabled" :rules="rules" :name="name"
      :placeholder="$t(placeholder)" @input="changeVal">
      <template #button>
        <slot name="btn"></slot>
      </template>
    </van-field>
    </div>
  </div>
  <van-field v-else
    :class='["h-[80px] rounded-[42px] bg-[var(--gray)] border border-solid border-[var(--gray1)] active:border-[var(--blue)]", className]'
    :style="styleObj" :value="value" :type="type" :disabled="disabled" :rules="rules" :name="name"
    :placeholder="$t(placeholder)" @input="changeVal">
    <template #button>
      <slot name="btn"></slot>
    </template>
  </van-field>
</template>

<script>
export default {
  name: "Input",
  props: {
    className: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    rules: {
      type: Array,
      default: () => []
    },
    styleObj: {
      type: Object,
      default: function () { return {} }
    },
    type: {
      type: 'text' | "tel" | "digit" | "number" | "password" | 'search',
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false

    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'placeholderEnter'
    }
  },
  methods: {
    changeVal(value) {
      this.$emit('input', value);
    }
  }
}
</script>
<style lang="scss" scoped>
:deep.van-cell {
  line-height: 58px;
  font-size: 30px;
}

:deep.van-field__control {
  color: var(--c2);
}

:deep.van-field--error {
  border-color: var(--red);
}
</style>