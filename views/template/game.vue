<template>
  <div class="_game-template">
    <template v-if="Object.keys(headerInfo).length">
      <div class="title flex items-center justify-between">
        <p :style="{ '--default-color': headerInfo.defaultColor }">
          <i :class='["iconfont", headerInfo.iconName]'></i>
          <span class="name">{{ headerInfo.name }}</span>
        </p>
        <span class="see-all" @click="$emit('lookAll', headerInfo)">查看全部</span>
      </div>
    </template>
    <van-collapse @change="panelChange" :value="value" :accordion="accordion">
      <van-collapse-item :name="item.id" v-for="item in dataList" :key="item.id">
        <template #title>
          <slot name="title" :content="item">
            <div class="collapse-title">
              <p>{{ item.title }}</p>
              <p>{{ item.games }}</p>
            </div>
          </slot>
        </template>
        <template #right-icon>
          <slot name="icon" :content="item">
            <i class="iconfont icon-Up collapse-icon text-[26px]  py-[20px]"></i>
          </slot>
        </template>
        <slot :content="item">

          <div class="collapse-content">
            <div>
              <div class="content_title"></div>
              <div class="content_info">
                <p :class="classFormat(item.gameList, index)" v-for="(childItem, index) in item.gameList">
                  <span>{{ childItem.name }}</span>
                  <span v-if="childItem.games">{{ childItem.games }}</span>
                </p>
              </div>
            </div>
            <div class="child_content">
              <div>
                <p class="content_title">全场让球</p>
                <div class="score-box border-right">
                  <div v-for="(concedeItem, idx) in item.concede" :key="'concede' + idx">
                    <p v-for="(concedeChildItem, childIdx) in concedeItem" :key="'childItem' + idx + '_' + childIdx">{{
                      concedeChildItem }}</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="content_title">全场大小</p>
                <div class="score-box border-right">
                  <div v-for="(sizeItem, idx) in item.size" :key="'size' + idx">
                    <p v-for="(sizeChildItem, childIdx) in sizeItem" :key="'sizeChildItem' + idx + '_' + childIdx">{{
                      sizeChildItem }}</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="content_title"></p>
                <div class="outcome">
                  {{ item.outcome }}
                </div>
              </div>
            </div>
          </div>
        </slot>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  name: "GameTemplate",
  props: {
    dataList: {
      type: Array,
      default: () => ([])
    },
    headerInfo: {
      type: Object,
      default: () => ({})
    },
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: String | Array,
      default: () => ([1, 3])
    }
  },
  methods: {
    panelChange(val) {
      this.$emit('input', val)
    },
    classFormat(dataList, idx) {
      if (idx == 0) return 'game_name-score';
      if (idx + 1 != dataList.length) return 'game_name-score mt-[16px]'
      if (idx + 1 == dataList.length) return 'game_ratio mt-[18px]'
    }
  }
}
</script>
<style lang="scss" scoped>
$border: 4px solid var(--bg_f7);

._game-template {
  .title {
    background: var(--c_f);
    border-radius: 30px 30px 0px 0px;
    padding: 29px 30px 29px 25px;
    border-bottom: 4px solid var(--bg_f7);
  }

  .iconfont {
    font-size: 42px;
    color: var(--default-color);
  }

  .name {
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: var(--c2);
    letter-spacing: 0.22px;
    font-weight: 500;
    margin-left: 15px;
  }

  .see-all {
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: var(--blue);
    letter-spacing: 0.17px;
    text-align: center;
    font-weight: 400;
  }

  :deep(.van-cell) {
    line-height: 1;
    padding: 0;
    border-bottom: 4px solid var(--bg_f7);

    &::after {
      border-bottom: 0;
    }
  }

  :deep(.van-collapse-item__content) {
    padding: 0;
    color: currentColor;
    background-color: var(--c_f);
  }

  :deep(.van-collapse-item--border) {
    &::after {
      border-top: 0;
    }
  }

  :deep(.van-hairline--top-bottom) {
    &::after {
      border-width: 0;
    }
  }

  :deep(.van-collapse-item) {
    &:last-child {
      [aria-expanded="false"].van-cell {
        border-bottom: 0;
      }
    }
  }

  .collapse-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 19px 20px 25px;
    border-right: 1px solid var(--bg_f7);

    >p {
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: var(--blue);
      letter-spacing: 0;
      font-weight: 400;

      &:not(:first-child) {
        font-size: 26px;
        color: var(--c6);
      }
    }
  }

  [aria-expanded="true"] {
    .collapse-icon {
      font-size: 26px;
      color: var(--blue);
      padding: 20px 18px;
      transform: rotate(180deg);
    }
  }

  .collapse-icon {
    font-size: 26px;
    color: var(--c_a);
    padding: 20px 18px;
  }

  .border-right {
    border-right: $border;
  }

  .collapse-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: $border;
    height: 100%;

    .child_content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .content_title {
      display: grid;
      font-family: PingFangSC-Regular;
      height: 80px;
      place-items: center;
      font-size: 24px;
      color: var(--c_a);
      letter-spacing: 0.15px;
      font-weight: 400;
      border-bottom: $border;
    }

    .content_info {
      padding: 20px;
      border-right: $border;
      height: 100%;
    }

    .game_name-score {
      display: flex;
      align-items: center;
      justify-content: space-between;

      >span {
        &:first-child {
          font-family: PingFangSC-Regular;
          font-size: 24px;
          color: var(--c2);
          letter-spacing: 0;
          font-weight: 400;
        }

        &:last-child {
          font-family: PingFangSC-Regular;
          font-size: 26px;
          color: var(--blue);
          letter-spacing: 0;
          font-weight: 400;
        }
      }
    }

    .game_ratio {
      font-family: PingFangSC-Regular;
      font-size: 22px;
      color: var(--c9);
      letter-spacing: 0;
      font-weight: 400;
    }

    .score-box {
      display: grid;
      height: calc(100% - 80px);
      grid-template-rows: repeat(2, 1fr);
      place-items: center;

      >div {
        width: 100%;
        height: 100%;
        padding: 11px 0 7px;

        &:not(:last-child) {
          border-bottom: $border;
        }

        >p {
          &:first-child {
            font-family: PingFangSC-Medium;
            font-size: 24px;
            color: var(--yellow1);
            letter-spacing: 0;
            text-align: center;
            font-weight: 500;
          }

          &:last-child {
            font-family: PingFangSC-Medium;
            font-size: 24px;
            color: var(--c2);
            letter-spacing: 0;
            text-align: center;
            font-weight: 500;
          }
        }
      }
    }

    .outcome {
      display: flex;
      font-family: PingFangSC-Regular;
      height: calc(100% - 80px);
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: var(--blue);
      letter-spacing: 0.15px;
      font-weight: 400;
    }
  }
}</style>
