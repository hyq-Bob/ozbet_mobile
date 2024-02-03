<template>
  <div>
    <Header v-model="isShowNav" @close="closeClick"></Header>
    <nav-comp></nav-comp>
  </div>
</template>

<script>
import NavComp from "@/views/nav.vue";
export default {
  components: {
    NavComp
  },
  data(){
    return {
      isShowNav: true
    }
  },
  methods:{
    closeClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style></style>