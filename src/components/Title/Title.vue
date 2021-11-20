<template>
  <div class="title">
    <h1 class="title__heading">
      Document #{{ document.id }}
    </h1>
    <p class="title__status">
      Status: {{ document.status }}
    </p>
  </div>
</template>

<script>
export default {
    name: 'TitleDoc',
    data() {
        return {};
    },

    computed: {
        document() {
            return this.$store.getters.getDocStatus;
        },
    },

};
</script>

<style lang="scss" scoped>
.title {


  &__heading {
    margin-bottom: 20px;
  }

}
</style>
