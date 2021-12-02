<template>
  <div class="control-document">
    <button
      class="control-document__button"
      :disabled="disabled"
      @click="saveDocument"
    >
      Save
    </button>
    <button
      class="control-document__button"
      :disabled="disabled"
      @click="deleteDocument"
    >
      Delete
    </button>
  </div>
</template>
<script>
export default {
    name: 'ControlDocument',
    computed: {
        disabled() {
            return !this.$store.state.doc.controlEnabled;
        },
    },
    methods: {
        deleteDocument() {
            this.$store.commit('toggleModal');
        },
        saveDocument() {
            this.$store.commit('toggleControl');
            this.$store.commit('dataComparison');
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
