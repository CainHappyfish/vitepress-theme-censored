<script setup lang="ts">
const props = defineProps({
  content: String,
  style: String
})
</script>

<template>
<div class="divider divider-x">
  <h3 style="margin: 0 20px">{{ content }}</h3>
</div>
</template>

<style scoped>
.divider {
  margin: 40px 0;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.4;
  color: var(--censored-text-color);

  display: flex;
  justify-content: center;
  position: relative;
}

.divider::before,
.divider::after {
    content: "";
}


.divider-x::before,
.divider-x::after {
    position: relative;
    top: 12px;
    border-top: 1px solid var(--censored-text-color);
    display: inline-block;
    vertical-align: middle;
    width: 200px;
    overflow: hidden;
}


.divider-y {

}
</style>