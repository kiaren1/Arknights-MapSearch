<template>

    <div class="content">
    <img src="/public/little fox.png" class="headImg">
    
    <div class="choose">
        <van-tabs  background="#4F5C7A" title-active-color="#fff"
                    title-inactive-color="#9c9c9c"  sticky>
    
        <van-tab title="地图" style="border-radius: 20px ;">
            <div class="search-place">
                
                <MapSearch></MapSearch> 
            </div>
        </van-tab> 
    
        <van-tab title="食谱">
            <div class="search-place">
                <FoodSearch ></FoodSearch>
            </div>           
        </van-tab>
    
    </van-tabs>
    </div>
    
    </div>
    </template>
    
    <style lang="less" scoped>
    .content{
        display: flex;
        width: 100%;
        height: 100%;
    flex-direction: column;
    
    
        .headImg{
            width: 100%;
            height: 200px;
            justify-self:center;
            object-fit: contain;
    
            margin: 0;
            top:0;
            left:0;
            right:0;
            border: 1px solid black;
        }
        .choose{
            flex-wrap: nowrap;
            flex-direction: row;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }
    
    .search-place{
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px ;
        background: linear-gradient(to bottom right,hsla(0, 0%, 100%, 0.537),hsla(229, 100%, 50%, 0.351));
    
    
        input [type="text"]{
            width: 100%;
            padding:10px;
            margin: auto;
            left:0;
            right:0;
        }
    }
        
    }
    </style>
    
    <script setup>
    import { ref } from 'vue';
    import { Tab, Tabs } from 'vant';
    import FoodSearch from '../SearchContent/FoodSearch1234.vue';
    import MapSearch from '../SearchContent/MapSearch1234.vue';
    
    
    </script>
    