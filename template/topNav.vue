<template lang="html">
    <div class="topNav">
        <ul class="nav_ul clearfix">
            <li class="nav_li col-xs-3" v-for="item in arr">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                arr:["综合","销量","价格","筛选"]

            }
        }
    }
</script>
<style lang="css">
    .topNav{
        height: 45px;
    }
    .nav_ul{
        margin-bottom: 0;
    }
    .nav_li{
        height: 45px;
        line-height:45px;
        list-style: none;
        text-align: center;
        font-size:16px;
        border-bottom:1px solid #ccc;
    }
    .clearfix{
        content: "";
        display: block;
        clear: both;
    }
</style>