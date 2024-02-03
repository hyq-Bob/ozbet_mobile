<template>
  <van-form @submit="collectInfo">
    <div class="info" v-for="item in collectList">
      <label class="title" v-if="item.name != 'agreement' && item.title">
        {{ item.title }}
      </label>
      <template v-if="!['agreement', 'emailCode'].includes(item.name)">
        <Input
          :name="item.name"
          :className="item.className"
          :placeholder="item.placeholder"
          :type="item.type"
          :rows="item.rows"
          :autosize="item.autosize"
          :rules="item.rules"
          v-model="item.value"
        />
      </template>
      <template v-else-if="item.name == 'agreement'">
        <van-field
          name="checkbox"
          class="mt-[20px]"
          :class="[!item.value ? 'error' : '']"
        >
          <template #input>
            <div @click="checkboxChange(item)" class="flex items-center">
              <van-checkbox v-model="item.value" shape="square" />
              <span class="info agreement">{{ item.title }}</span>
            </div>
          </template>
        </van-field>
      </template>
      <template v-else>
        <!-- 邮箱验证码 -->
        <Input
          :name="item.name"
          :placeholder="item.placeholder"
          :type="item.type"
          :rules="item.rules"
          className="p-0 pl-[16px]"
          v-model="item.value"
        >
          <template #btn>
            <CountdownTimer />
          </template>
        </Input>
      </template>
    </div>
    <Button
      className="mt-[50px] h-[93px] btn"
      :name="$t(btnName)"
      :nativeType="true"
    ></Button>
  </van-form>
</template>

<script>
import CountdownTimer from "@/views/CountdownTimer.vue";
export default {
  props: {
    btnName: {
      type: String,
      default: "confirm",
    },
    collectList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CountdownTimer,
  },
  data() {
    return {
      isCheckbox: true,
    };
  },
  methods: {
    // 复选框回调
    checkboxChange(crt) {
      crt.value = !crt.value;
      return;
    },
    // 信息收集
    collectInfo(values) {
      if (values.checkbox) {
        this.$emit("onSubmit", values);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  $red: var(--red);
  :deep(.van-checkbox__icon .van-icon) {
    border-color: $red;
  }
  .info {
    color: $red;
  }
}
.agreement {
  font-family: PingFangSC-Regular;
  margin-left: 20px;
  font-size: 28px;
  color: var(--c9);
  letter-spacing: 0;
  font-weight: 400;
}
.title {
  font-family: PingFangSC-Regular;
  display: block;
  font-size: 30px;
  color: var(--c9);
  letter-spacing: 0;
  font-weight: 400;
  margin: 30px 0 20px;
}

.btn {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: var(--c_fd);
  letter-spacing: 0;
  text-align: right;
  font-weight: 400;
}
:deep(.van-checkbox__icon) {
  height: 30px;
  width: 30px;
  line-height: 30px;
}
:deep(.van-checkbox__icon .van-icon) {
  height: 30px;
  width: 30px;
  line-height: 30px;
  font-size: 1.5em;
}
</style>
