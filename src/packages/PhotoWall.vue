<template>
  <div class="wrap">
    <ul :class="{ init: !IsShowImgRef, activeWrap: activeKeyRef }">
      <li
        v-for="(item, index) in imgListRef"
        :key="`${index}-${item.title}`"
        @click="handlerListClick(item)"
        :class="{ active: activeKeyRef === item }"
      >
        <div class="inner">
          <div class="bg" :style="{ backgroundImage: `url(${item.img})` }"></div>
          <h2>{{ item.title }}</h2>
          <div class="direction">
            <div class="header">{{ item.name }}</div>
            <div class="close" @click="handlerCloseClick"></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ImgListItemType, PhotoWallProps } from './type'

const { options } = defineProps<PhotoWallProps>()
const imgListRef = ref<ImgListItemType[]>(options || [])
const IsShowImgRef = ref(false)
const activeKeyRef = ref()

const handlerListClick = (item: ImgListItemType) => {
  activeKeyRef.value = item
}

const handlerCloseClick = (ev: Event) => {
  ev.stopPropagation()
  activeKeyRef.value = null
}

onMounted(() => {
  setTimeout(function () {
    IsShowImgRef.value = true
  }, 200)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}

.wrap {
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center; /* 水平方向上的对齐方式  */
  align-items: center; /* 垂直方向上的对齐方式 */
  overflow-y: auto;
}

.wrap ul {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5%;
}
.wrap li {
  width: 16%;
  height: 100%;
  background: #333;
  border-radius: 20px;
  overflow: hidden;
  transition:
    width 0.5s linear,
    height 0.5s linear 0.5s;
}
.wrap .inner {
  width: 100%;
  height: 100%;
  position: relative;

  transition: 0.5s linear;
}
.wrap .init li .inner {
  transform: translateY(100%);
}

.wrap .inner .bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  transition: 0.2s linear;
}

.wrap li:nth-child(1) .inner {
  transition-delay: 0.1s;
}
.wrap li:nth-child(2) .inner {
  transition-delay: 0.2s;
}
.wrap li:nth-child(3) .inner {
  transition-delay: 0.3s;
}
.wrap li:nth-child(4) .inner {
  transition-delay: 0.4s;
}
.wrap li:nth-child(5) .inner {
  transition-delay: 0.5s;
}
.wrap li:nth-child(6) .inner {
  transition-delay: 0.6s;
}

.wrap li:hover .inner .bg {
  opacity: 1;
}

.wrap h2 {
  font-size: 16px;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s linear 1s;
}
.wrap li:hover h2 {
  font-size: 24px;
}

.activeWrap li h2 {
  opacity: 0;
  transition: 0.2s linear;
}

.activeWrap li:not(.active) {
  /* 选中非点击的那些li */
  width: 0;
  height: 0;
}
.activeWrap li.active {
  width: 100%;
}
.activeWrap li {
  transition:
    height 0.5s linear,
    width 0.5s linear 0.5s;
}

.wrap li .direction {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;

  position: absolute;
  top: 50px;
  opacity: 0;
}
.wrap li .direction .header {
  color: #fff;
  font-size: 24px;
}
.wrap li .direction .close {
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: relative;
}
.wrap li .direction .close:before,
.wrap li .direction .close:after {
  content: '';
  width: 30px;
  height: 4px;
  position: absolute;
  top: 50%;
  margin-top: -2px;
  background: #fff;
}
.wrap li .direction .close:before {
  transform: rotate(45deg);
}
.wrap li .direction .close:after {
  transform: rotate(-45deg);
}
.activeWrap li .direction {
  opacity: 1;
  transition: 0.5s linear 1s;
}
.activeWrap li .close {
  transition: 0.5s linear 1s;
  transform: rotate(360deg);
}
</style>
