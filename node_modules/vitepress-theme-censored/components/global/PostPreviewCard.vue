<script setup lang="ts">

defineProps<{
  post: CensoredTheme.PostData
}>()

import defaultImageUrl from '../../assets/DefaultCover.jpg'; // 替换为你的默认图片 URL

const handleImageError = (event: any) => {
  event.target.src = defaultImageUrl;
};


</script>

<template>
  <div class="post-card scroll-animation">
    <a class="card-content" :href="post.url">
      <img v-if="post.cover?.default"
        :src="post.cover?.default"
        alt="cover"
        @error="handleImageError"
      />

      <img v-else src='../../assets/DefaultCover.jpg'  alt="cover"/>
      <div class="summary">
<!--        <div class="summary-gradient"></div>-->
        <h1>{{ post.title }}</h1>
        {{ post.excerpt }}
      </div>
    </a>
  </div>
</template>

<style scoped>
.post-card {
  width: 100%;
  height: 400px;
  border-radius: 10px;
}

.card-content {
  width: 100%;
  height: 100%;
  max-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card-content {
  text-decoration: none;
}

img {
  height: 90%;
  width: 40%;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  object-fit: cover;
}

.summary {
  height: 100%;
  width: 70%;
  padding: 0 20px;
  z-index: 3;
  background: var(--censored-nav-color);

  border-radius: 10px;


}


</style>