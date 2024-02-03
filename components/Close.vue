<template>
    <div class="-close_icon"  @click="$emit('close')">
        <svg width="100%" height="100%" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>菜单</title>
            <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="1首页_未登录_左侧导航" transform="translate(-30, -138)">
                    <g id="菜单" transform="translate(30, 138)">
                        <rect id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="44" height="44"></rect>
                        <g id="编组-14" transform="translate(9, 9)" stroke="#121A23" stroke-linecap="round" stroke-width="5">
                            <line x1="0.19820134" y1="0" x2="25.8537175" y2="26.0519188" id="路径-2"></line>
                            <line x1="26.0519188" y1="0.19820134" x2="0" y2="25.8537175" id="路径-2"></line>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: "Close",
}
</script>
<style lang="scss" scoped>
.-close_icon {
  width: 44px;
  height: 44px;
}
</style>