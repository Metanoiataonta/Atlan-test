<template>
  <div class="tabs">
    <div class="tabs__selectors">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="tabs__button"
      >
        {{ tab }}
      </button>
    </div>
    <main-document-cmp />
  </div>
</template>
<script>
import MainDocument from '@components/MainDocument/MainDocument.vue';

export default {
    name: 'DocumentTabs',
    components: {
        'main-document-cmp': MainDocument,
    },
    data() {
        return {
            tabs: ['Main', 'Table'],
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
