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
    <main-document-cmp v-show="false" />
    <table-document-cmp />
  </div>
</template>
<script>
import MainDocument from '@components/MainDocument/MainDocument.vue';
import TableDocument from '@components/TableDocument/TableDocument.vue';

export default {
    name: 'DocumentTabs',
    components: {
        'main-document-cmp': MainDocument,
        'table-document-cmp': TableDocument,
    },
    data() {
        return {
            tabs: ['Main', 'Table'],
        };
    },
};
</script>

<style lang="scss" scoped>
.tabs {
  &__selectors {
    display: flex;
    padding: 10px;
    align-items: center;
  }
}
</style>
