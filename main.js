import Vue from "vue";
import jingdong from "./template/jingdong.vue";
import "./jingdong.css"

let config = {
    render:h=>h(jingdong)
};
const vm = new Vue(config);
vm.$mount("#app");