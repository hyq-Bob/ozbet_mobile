<template>
  <div :class="className" :style="styleObj" @click="goBack">
    <svg width="100%" height="100%" viewBox="0 0 74 74" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="0忘记密码" transform="translate(-60, -155)">
              <g id="编组-3" transform="translate(60, 155)">
                  <circle id="椭圆形" fill="#FAFAFA" cx="37" cy="37" r="37"></circle>
                  <path d="M31.3761384,21.6955504 C32.2723133,20.7681499 33.6912568,20.7681499 34.5874317,21.6955504 C35.4836066,22.6229508 35.4836066,24.0913349 34.5874317,25.0187354 L24.8041894,35.1428571 L55.7222222,35.1428571 C56.9918033,35.1428571 58,36.1861827 58,37.5 C58,38.8138173 56.9918033,39.8571429 55.7222222,39.8571429 L24.7668488,39.8571429 L34.5500911,49.9812646 C35.4462659,50.9086651 35.4462659,52.3770492 34.5500911,53.3044496 C34.1020036,53.7681499 33.5418944,54 32.9444444,54 C32.3843352,54 31.7868852,53.7681499 31.3387978,53.3044496 L17.6721311,39.1615925 C16.7759563,38.234192 16.7759563,36.765808 17.6721311,35.8384075 Z" id="形状" fill="#C5CAD0" fill-rule="nonzero"></path>
              </g>
          </g>
      </g>
  </svg>
  </div>
</template>
<script>
export default {
    props:{
        styleObj:{
            type:Object,
            default: ()=>({})
        },
        className:{
            type:String,
            default: ''
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
