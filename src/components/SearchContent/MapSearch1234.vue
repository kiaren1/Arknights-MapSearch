<template>
  <div class="map-search">
    <div class="search-area">
      <input
        type="text"
        placeholder="搜索地图..."
        v-model="searchKey"
        style="border-radius: 20px"
        @keydown.enter="search"
      />

      <button class="search-button" @click="search">查找</button>
    </div>
    
      <ShowMap v-if="showMap" :mapList="mapList" class="mapList"></ShowMap>
    
    <div class="empty" v-if="!showMap">
      <div class="search-result">{{ hint }}</div>
    </div>
  
  </div>
</template>

<style>
.map-search {
  display: flex;
  flex-direction: column;
  width: 100%;

  .search-area {
    display: flex;
    width: 100%;
    height: auto;
  }
  .search-area input {
    flex-grow: 1;
    margin-right: 3px;
    border-radius: 20px;
    border: 1px solid black;
    padding: 10px;
    height: 30px;
    margin-top: 0;
  }
  .search-button {
    line-height: 30px;
    flex-grow: 1;
    /* padding: 10px; */
    width: 150px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid black;
    cursor: pointer;
    /* 鼠标光标 */
    margin-top: 0px;
  }
}

.empty {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.search-result {
  margin-top: 100px;
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 130px;
}
</style>

<script setup>
import { ref, defineProps } from "vue";
import ShowMap from "../Pages/ShowMap.vue";
import { useStore } from "vuex";

let store = useStore();
let searchKey = ref("");
let showMap = ref(false);
let mapList = ref([]);

let hint = ref("不要输入符号 \n 可以仅输入部分文字");

const searchList = store.state.mapList; //输入框内的字符串要去匹配的字符串

const search = (() => {
  //自执行函数
  let timer = null;

  return function () {
    //函数防抖
    clearTimeout(timer);

    timer = setTimeout(() => {
      let list = searchMap(searchKey.value.trim()); //去空格
      if (list.length != 0) {
        mapList.value = list;
        showMap.value = true;
      } else {
        mapList.value = [];
        showMap.value = false;
        hint.value =
          "搜索失败，看看是不是打错了\n不要输入符号\n可以仅输入部分文字";
      }
    }, 300);
  };
})();

function searchMap(key) {
  const ans = [];
  searchList.forEach((value, index) => {
    if (key !== "" && value.indexOf(key) !== -1) {
      ans.push(store.state.mapList[index]);
    }
  });
  return ans;
}
</script>
