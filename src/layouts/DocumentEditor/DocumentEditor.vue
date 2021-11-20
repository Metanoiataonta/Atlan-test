<template>
  <div class="document-editor">
    <form
      name="document"
      class="document-editor__wrapper container"
      @submit.prevent
    >
      <header-cmp />

      <tabs-cmp />
    </form>
  </div>
</template>

<script>
import Header from '@layouts/Header/Header.vue';
import Tabs from '@components/Tabs/Tabs.vue';


export default {
    name: 'DocumentEditor',
    components: {
        'header-cmp': Header,

        'tabs-cmp': Tabs,
    },
    data() {
        return {};
    },

};
</script>

<style lang="scss" scoped>
.document-editor {
  background-color: #000;
  color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: 100vh;

  &__wrapper {
    background-color: rgba(#ddd, 0.2);
    padding: 20px 50px;
    border-radius: 20px;

  }
}
</style>
