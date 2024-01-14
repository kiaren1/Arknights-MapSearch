<template>
<div class="content-map">
    <Map v-bind:src="`/maps/${name}.jpg`" :name="name" class="map" v-for="(name,index) in mapList" :key="name"></Map>
</div>
</template>

<style>
.content-map{
    .map{
        width: 100%;
    }
    .src{
        margin: 0px;
    }
}
</style>
<script setup>
import Map from '../content/Map1234.vue'
import{defineProps,onMounted } from 'vue'

const {mapList}=defineProps(['mapList'])
</script>