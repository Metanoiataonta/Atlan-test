<template>
  <div class="document-editor">
    <form

      name="document"
      class="document-editor__wrapper container"
      @submit.prevent
    >
      <header-cmp />

      <tabs-cmp />
      <modal-cmp v-if="showModal" />
    </form>
  </div>
</template>

<script>
import Header from '@layouts/Header/Header.vue';
import Tabs from '@components/Tabs/Tabs.vue';
import ModalComponent from '@ui-components/ModalComponent/ModalComponent.vue';


export default {
    name: 'DocumentEditor',
    components: {
        'header-cmp': Header,
        'tabs-cmp': Tabs,
        'modal-cmp': ModalComponent,
    },

    computed: {
        showModal() {
            return this.$store.state.doc.showModal;
        },
    },
    mounted() {
        document.title = 'Document #' + this.$store.state.doc.doc.id;
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
