import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const pageLoadingKey = ref(0);
  const themeLoadingKey = ref(0);
  const pageLoadingTime = ref(0);

  function startLoading() {
    pageLoadingKey.value += 1;
  }

  return {
    pageLoadingKey,
    themeLoadingKey,
    startLoading,
  };
});
