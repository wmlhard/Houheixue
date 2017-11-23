<template lang="html">
   <div id="jingdong">
       <top>
           <img @click="change" class="touch col-xs-2" :src="touch" alt="按钮">
       </top>
       <topNav></topNav>
       <topSubnav></topSubnav>
       <theory :softer="soft" ref="theory"></theory>
   </div>
</template>
<script>
    import top from "./top.vue";
    import topNav from "./topNav.vue";
    import topSubnav from "./topSubnav.vue";
    import theory from "./theory.vue";
    export default {
        data(){
            return{
                soft:"make_change",
                touch:"./img/btn_one.jpg",
                touch_sed:"./img/btn_two.png"
            }
        },
        components:{
            top,
            topNav,
            topSubnav,
            theory
        },
        methods:{
            change:function(){
                this.$refs.theory.flag = !this.$refs.theory.flag;
                if(this.soft=="make"){
                    this.soft="make_change"
                }
                else {
                    this.soft="make"
                }
            }
        }
    }
</script>
<style lang="css">
    #jingdong{
        width:100vw;
        height:100vh;
        background:#fff;
    }

</style>