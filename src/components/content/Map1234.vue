<template>
    <div :class="contentClass" class="content" @click.stop="changeShow" ref="area">
        <div class="background"></div>
        <img :src="src" class="map" />
        
        <div class="linkArea">
            <a :href="`https://search.bilibili.com/all?keyword=${name}`" target="_blank" class="link"
                @click.stop>B站攻略=></a>
        </div>
    </div>
</template>

<style>
.content{
    .map{
        width: 100%;

    }
    .link{
        font-size: 24px;
    }
}
.linkArea{
    width: 100%;
}
</style>

<script setup>
const props=defineProps(['src','name','contentClass'])
</script>