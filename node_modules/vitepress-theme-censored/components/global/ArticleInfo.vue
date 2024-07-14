<script setup lang="ts">
defineProps<{
  title: string,
  author?: string,
  word?: number,
  cover?: string,
  tags?: string[]
}>()
import {useData} from "vitepress";
import { CensoredThemeConfig } from "types"
const { theme, page } = useData<CensoredThemeConfig>()

</script>

<template>
<div class="info-container">
  <div class="info-content">
<!--    <h2>文章信息</h2>-->
    <h2 style="border-bottom: solid 2px var(--censored-text-color)">{{ title }}</h2>
<!--    <h3>作者：{{ author || theme.user?.name }}</h3>-->
    <h3>字数： {{ word }}</h3>
    <h3>阅读时间：{{ Math.ceil(word/200) || 0 }} min(s)</h3>
<!--    <h3>阅读量：</h3>-->
    <div class="tags-info">
      <div class="tags">
      <img src="../icons/tag.svg" alt="tags" class="tag-icon"/>
        <div class="tag" v-for="tag in tags">{{ tag }}</div>
      </div>
    </div>

  </div>
  <div class="info-cover">
    <img v-if="cover"
      :src="cover"
      alt="cover"
     class="post-cover"
    />
    <img v-else src='../../assets/DefaultCover.jpg'  alt="cover" class="post-cover"/>

  </div>

</div>
</template>

<style scoped>
.info-container {


  display: flex;

  /*align-items: center;*/

  width: 70rem;
  margin: 20px 20px 10px 20px;
  padding: 20px;
  /*max-width: 300px;*/
  min-height: 300px;
  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  filter: drop-shadow(0 0 2px var(--censored-shadow-color));
  border-radius: 10px;

}

.info-content {
  padding: 20px;
  max-width: 40%;

}

.info-cover {
  width: 70%;
  display: flex;
  flex-direction: row-reverse;

}

.post-cover {
  border-radius: 10px;
  min-width: 60%;
  min-height: 300px;
  max-height: 500px;
  max-width: 100%;

  object-fit: cover;
}

.tag-icon {
  width: 2em;
  height: 2em;
}


.tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--censore-tag-color);
  margin: 5px 10px;
  padding: 10px;
}


@media only screen and (max-width: 1100px) {
  .info-container {
    width: 100%;
    max-width: 85vw;
    flex-direction: column;
  }
  .info-content {
    padding: 20px;
    width: 90%;
  }
}



@media only screen and (max-width: 600px) {
  .info-content h2 {
    font-size: 1.3rem;
  }

  .info-content h3 {
    font-size: 1rem;
  }

  .info-cover {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  .post-cover {
    border-radius: 10px;
    width: 100%;

    object-fit: cover;
  }

  .tag-icon {
    width: 1.5em;
  }

  .tag {
    padding: 5px;
    font-size: 0.8rem;
  }
}


@media only screen and (max-width: 1400px) {
  .info-container {
    width: 100%;
    max-width: 85vw;
  }

}

@media only screen and (max-width: 1600px) {
  .info-container {
    max-width: 70vw;
  }
}

</style>