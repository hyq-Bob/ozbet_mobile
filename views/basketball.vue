<template>
  <GameTemplate :dataList="dataList" :headerInfo="headerInfo" v-model="activeId" />
</template>

<script>
import GameTemplate from "./template/game.vue";
export default {
  name:"BasketballScope",
  components:{GameTemplate},
  data(){
    return {
      activeId:[1,3],
      headerInfo:{
        iconName:"icon-basketball",
        defaultColor:"#9c6a37",
        name:"篮球"
      },
      dataList:[
        {
          id:1,
          title:"哥伦比亚/甲级联赛，开放赛",
          games:10,
          gameList:[
            {name:'帕纳辛奈克斯', games:2, id:'1-1' },
            {name:'ASVEL里昂维伦班', games:3, id:'1-2' },
            {name:'下半场  92 : 21', id:'1-3' },
          ],
          concede:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          size:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          outcome: '+6'
        },
        {
          id:2,
          title:"西班牙/皇家马德里足球联赛",
          games:1,
          gameList:[
            {name:'帕纳辛奈克斯', games:2 },
            {name:'ASVEL里昂维伦班', games:3 },
            {name:'下半场  92 : 21' },
          ],
          concede:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          size:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          outcome: '+9'
        },
        {
          id:3,
          title:"西班牙/皇家马德里足球联赛",
          games:1,
          gameList:[
            {name:'帕纳辛奈克斯', games:2 },
            {name:'ASVEL里昂维伦班', games:3 },
            {name:'下半场  92 : 21' },
          ],
          concede:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          size:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          outcome: '+16'
        },
        {
          id:4,
          title:"西班牙/皇家马德里足球联赛",
          games:1,
          gameList:[
            {name:'帕纳辛奈克斯', games:2 },
            {name:'ASVEL里昂维伦班', games:3 },
            {name:'下半场  92 : 21' },
          ],
          concede:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          size:[
            [4.5, 1.93],
            [4.5, 1.93]
          ],
          outcome: '+6'
        },
      ]
    }
  },
}
</script>
