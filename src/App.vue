<script setup lang="ts">
import PhotoWall from '@/packages/PhotoWall.vue'
// import PhotoWall from '../dist'

const defaultImgList = [
  {
    title: 'image1',
    name: 'bird1',
    img: new URL('@/assets/1.jpg', import.meta.url)
  },
  {
    title: 'image2',
    name: 'bird2',
    img: new URL('@/assets/2.jpg', import.meta.url)
  },
  {
    title: 'image3',
    name: 'bird3',
    img: new URL('@/assets/3.jpg', import.meta.url)
  },
  {
    title: 'image4',
    name: 'bird4',
    img: new URL('@/assets/4.jpg', import.meta.url)
  },
  {
    title: 'image5',
    name: 'bird5',
    img: new URL('@/assets/5.jpg', import.meta.url)
  },
  {
    title: 'image6',
    name: 'bird6',
    img: new URL('@/assets/6.jpg', import.meta.url)
  }
]
</script>

<template>
  <header>
    <PhotoWall :options="defaultImgList" />
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: 1200px;
    height: 800px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
