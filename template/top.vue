<template lang="html">
    <div class="top">
        <i class="topMark col-xs-2" :class="topMark"></i>
        <input type="text" class="search col-xs-8" :placeholder="search">
        <i class="searchMark" :class="searchMark"></i>
        <img class="robit" :src="robit" alt="search"/>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data(){
           return{
               topMark:"glyphicon glyphicon-menu-left",
               search:"厚黑学",
               searchMark:"glyphicon glyphicon-search",
               robit:"./img/robot.png",
           }
        }

    }
</script>
<style lang="css">
    .top{
        width: 100%;
        height: 45px;
        border-bottom:1px solid #ccc;
    }
    .topMark{
        margin-top:15px;
    }
    .search{
        height: 35px;
        border-radius: 20px;
        border:none;
        outline: none;
        background: #eee;
        padding-left: 30px;
        margin-top: 5px;
        position: relative;
    }
    .searchMark{
        position: absolute;
        left: 72px;
        top:16px;
    }
    .robit{
        height: 26px;
        position: absolute;
        left: 280px;
        top: 10px;
    }

</style>