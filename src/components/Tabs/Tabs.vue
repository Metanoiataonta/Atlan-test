<template>
  <div class="tabs">
    <div class="tabs__selectors">
      <button
        v-for="tab in tabs"
        :key="tab"
        :ref="tab"
        class="tabs__button"
        @click="openTab($event,tab)"
      >
        {{ tab }}
      </button>
    </div>
    <main-document-cmp v-show="currentTab === 'Main'" />
    <table-document-cmp v-show="currentTab === 'Table'" />
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
            currentTab: 'Main',
        };
    },
    mounted() {
        this.$refs.Main[0].classList.toggle('tabs_active');
    },
    methods: {
        openTab($event, tab) {
            this.currentTab = tab;
            const targetClassList = $event.target.classList;
            !targetClassList.contains('tabs_active') ? targetClassList.toggle('tabs_active') : '';
            this.tabs.forEach((item) => {
                if (item !== tab) {
                    const itemClassList = this.$refs[item][0].classList;
                    (this.$refs, item, this.$refs[item]);
                    itemClassList.contains('tabs_active') ? itemClassList.toggle('tabs_active') : '';
                }
            });
        },
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

  &_active {
    position: relative;
    top: 2px;
    left: 3px;
    box-shadow: none;
    background-color: rgb(96, 94, 94);
  }
}
</style>
