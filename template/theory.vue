<template lang="html">
  <div class="theory">
    <ul>
        <li :class="softer" v-for="item in arr">
            <img :src="item.black" alt="厚黑学">
            <div class="dir dir_change">
                <div class="heart heart_change">{{item.heart}}</div>
                <div v-show="flag" class="heavy">{{item.heavy}}</div>
                <div class="heavy heavy_change">{{item.writer}}</div>
                <div class="money">
                    <div class="cash">￥<span class="copper">{{item.copper}}</span>{{item.money}}</div>
                    <div class="ticket">{{item.ticket}}</div>
                </div>
                <div class="self">
                    <div class="support">{{item.support}}</div>
                    <span>{{item.appraise}}</span>
                    <span>{{item.evaluate}}</span>
                </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
        softer:String,
    },
    data(){

        return{
            arr:[
                {
                    black:"./img/h1.png",
                    heart:"厚黑学",
                    heavy:"图书音像勋章日！50万种图书",
                    writer:"李宗吾",
                    copper:"48",
                    money:".60",
                    ticket:"满100减30",
                    arch:"领券200减16",
                    support:"自营",
                    appraise:"21653条评价",
                    evaluate:"98%好评",
                },
                {
                    black:"./img/h2.png",
                    heart:"厚黑学全集(足本典藏版)",
                    heavy:"图书音像勋章日！50万种图书",
                    writer:"李宗吾",
                    copper:"21",
                    money:".30",
                    ticket:"满100减30",
                    arch:"领券200减16",
                    support:"自营",
                    appraise:"21655条评价",
                    evaluate:"98%好评",
                },
                {
                    black:"./img/h3.png",
                    heart:"厚黑学",
                    heavy:"“影响中国20世纪的20大奇才怪杰”",
                    writer:"李宗吾",
                    copper:"11",
                    money:".60",
                    ticket:"满100减30",
                    arch:"领券200减16",
                    support:"自营",
                    appraise:"17160条评价",
                    evaluate:"95%好评",
                },
                {
                    black:"./img/h4.png",
                    heart:"墨菲定律 人性的弱点全集",
                    heavy:"你每天都需要一点技巧训练",
                    writer:"李宗吾",
                    copper:"32",
                    money:".60",
                    ticket:"满100减30",
                    arch:"领券200减16",
                    support:"京东配送",
                    appraise:"478条评价",
                    evaluate:"博雅世图专营",
                }
                ]
        }
    }
}
</script>

<style lang="css" scoped>
    .make{
        list-style: none;
        height: 140px;
    }
    .make>img{
        width: 120px;
        height: 130px;
        padding: 5px;
        vertical-align: middle;
    }
    .make>.dir{
        display: inline-block;
        width: 250px;
        height: 140px;
        vertical-align: middle;
        border-bottom:1px solid #ccc;
    }
    .heart{
        font-size: 18px;
        font-weight:bold;
        margin: 15px 0 5px 0;
    }
    .heavy{
        color: #999;
    }
    .money{
        color: red;
    }
    .cash{
        display:inline-block;
    }
    .copper{
        font-size: 19px;
    }
    .ticket{
        display: inline-block;
        width: 60px;
        height: 15px;
        background: red;
        color: #fff;
        font-size: 12px;
    }
    .self{
        color: #999;
    }
    .support{
        display: inline-block;
        border:1px solid red;
        border-radius: 5px;
        color: red;
    }

    .make_change{
        list-style: none;
        width: 50%;
        height: 320px;
        float: left;
        border: 2px solid #eee;
    }
    .make_change img{
        width: 80%;
        height: 180px;
        margin: 5px;
    }
    .make_change>.dir_change{
        padding-left: 5px;
        width: 100%;
    }
    .heart_change{
        font-size: 14px;
    }
    .heavy_change{
        font-size: 12px;
    }
</style>
