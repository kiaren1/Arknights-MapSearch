<template>
<div class="container">
    <div class="card">
<div class="title">查询</div>
<img src="/public/little fox.png" class="pic">
<button class="start-btn" @click="goToSearch">开始查询</button>
</div>
</div>
</template>

<script setup>
import router from '../../router';
import { useRoute } from 'vue-router';
function goToSearch(){
router.push('/Search')
}
</script>

<style>
.container{
    display: flex;
    height: 100%;
    width: 100%;

    height: 1000px;
    .card{
height: 580px;
width: 450px;
display:flex;
flex-direction: column;
flex-wrap: wrap;
border-radius: 15px;
border: 1px solid gray;
background-color: white;
box-shadow:1px 8px 10px rgba(0, 0, 0, 0.089);
margin-right: auto;
margin-left: auto;
align-self: center;
    justify-self: center;
.title{
    text-align: center;
    color: #3b4348;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
}
.pic{
        width: 300px;
        height: 300px;
        align-self: center;
        margin-bottom: 4rem;
        border-radius: 10px;
    }  
    .start-btn{
        width: 200px;
        align-self:center;
        justify-self:center;
        border-radius: 15px;
        font-size:20px;
        background-image: linear-gradient(to right,  white, #4565e8);
        box-shadow: 3px 3px 3px rgba(100,100,100);
        border: 0px;
        position: relative;
        padding: 8px;
    }
}
}
</style>