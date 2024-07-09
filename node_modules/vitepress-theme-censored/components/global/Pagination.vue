<script setup lang="ts">
const props = defineProps({
  PageNo: Number,    // 当前页码
  pageSize: Number,  // 展示页数
  total: Number,     // 总页数
  continues: Number  // 页数过多时中间展示的连续页码
})

import { ref, computed, defineEmits, watch } from 'vue';

const emit = defineEmits(['update:PageNo']);

// 当前页码
const currentPage = ref(props.PageNo);

// 计算总的分页器的页数
const totalPages = computed(() => {
  return Math.ceil(props.total / props.pageSize)
});

// 切换页码
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    emit('update:PageNo', page)
  } else {
    emit('update:PageNo', currentPage)
  }
};

// 页面个数大于5时，获取输入
const pageInput = ref("")

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    const page = Number(pageInput.value);
    if (!isNaN(page)) {
      goToPage(page);
    }
  }
};

watch(currentPage, (newPage) => {
  pageInput.value = newPage;
});
</script>

<template>
  <div class="pagination">
    <button @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="pre">
      <span/><span/>
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
      v-if="totalPages < continues"
    >
      {{ page }}
    </button>
    <div class="page-selector" v-else>
      <input type="number"
             id="page-input"
             :placeholder="currentPage"
             v-model="pageInput"
             :min="1"
             :max="totalPages"
             @keydown.enter="handleKeyDown"
             style="text-align: center;"
      />
      <p>/ {{ totalPages }}</p>
    </div>
    <button @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="next">
      <span/><span/>
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  margin: 20px;
  gap: 0.5rem;
}

button {
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--censored-nav-color);
  color: var(--censored-text-color);
  border-radius: 2px;
  border: none;
  width: 2rem;
  height: 2rem;


}

button.active {
  font-weight: bold;
}

.pre span {
  display: block;
  width: 35px;
  height: 5px;
  margin-bottom: 5px;
  position: relative;
  border-radius: 1px;

}

.pre span:nth-child(1) {
  border-bottom: 3px solid var(--censored-text-color);
  transform: rotate(135deg);
  translate: 5px 3px;
}

.pre span:nth-child(2) {
  border-bottom: 3px solid var(--censored-text-color);
  transform: rotate(45deg);
  translate: -3px 3px;
}

.next span {
  display: block;
  width: 35px;
  height: 5px;
  margin-bottom: 5px;
  position: relative;
  border-radius: 1px;
}

.next span:nth-child(1) {
  border-top: 3px solid var(--censored-text-color);
  transform: rotate(45deg);
  translate: 3px 3px;
}

.next span:nth-child(2) {
  border-top: 3px solid var(--censored-text-color);
  transform: rotate(135deg);
  translate: -5px 3px;
}

.page-selector {
  margin: 0 2px;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  height: 2rem;
}

.page-selector input {
  margin: 1px;
  background: transparent;
  border-radius: 5px;
  color: var(--censored-text-color);
  border: 2px solid var(--censored-nav-color);
  font-size: 1.2rem;
  width: 1.7rem;
  height: 1.7rem;
}

.page-selector input:focus {
  outline: none;
  border: 2px solid var(--censored-text-color);
  color: var(--censored-text-color);
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield; /* Firefox */
}

.page-selector p {
  color: var(--censored-text-color);
}
</style>

