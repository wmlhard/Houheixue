<template lang="html">
    <div class="topSubnav">
        <ul class="topSubnav_ul">
            <li class="topSubnav_li" v-for="list in lic">{{list}}</li>
        </ul>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                lic:["京东配送","品牌","类型","市场营销"]

            }
        }
    }
</script>
<style lang="css">
    .topSubnav{
        height: 45px;
        border-bottom:1px solid #ccc;
    }
    .topSubnav_li{
        float: left;
        height: 32px;
        margin: 0px 10px;
        padding:7px 15px;
        list-style: none;
        background: #eee;
        border-radius: 5px;
    }

</style>