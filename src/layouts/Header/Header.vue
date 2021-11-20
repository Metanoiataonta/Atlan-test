<template>
  <header class="header">
    <title-cmp />
    <control-document-cmp />
  </header>
</template>
<script>
import Title from '@components/Title/Title.vue';
import ControlDocument from '@ui-components/ControlDocument/ControlDocument.vue';

export default {
    name: 'DocumentHeader',
    components: {
        'title-cmp': Title,
        'control-document-cmp': ControlDocument,
    },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 80px;
  border: #aaa 2px dashed;
  padding: 20px;
  border-radius: 10px;
}
</style>
