<template>
  <div class="control-document">
    <button
      class="control-document__button"
      :disabled="disabled"
    >
      Save
    </button>
    <button
      class="control-document__button"
      :disabled="disabled"
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
            return this.$store.state.controlEnabled;
        },
    },
};
</script>

<style lang="scss" scoped>
.control-document {


}
</style>
