<template>
  <fieldset
    name="main"
    class="main-document"
  >
    <div class="main-document__total-price">
      Total price: {{ totalPrice }}
    </div>
    <div class="main-document__list">
      <nested-cmp
        v-for="(item, index) in nested"
        :key="item.id"
        :item="item"
        :item-i-d="index"
      />
    </div>
    <button
      class="main-document__add-new"
      @click="addNewNested"
    >
      Add new
    </button>
  </fieldset>
</template>

<script>
import MainNested from '@components/models/MainNested/MainNested.vue';

export default {
    name: 'MainDocument',
    components: {
        'nested-cmp': MainNested,
    },
    data() {
        return {};
    },
    computed: {
        nested() {
            return this.$store.getters.getDocData('nested');
        },
        totalPrice() {
            const nestedPrice = this.nested.map((item) => parseFloat(item.price));

            return [...nestedPrice, 0].reduce((prev, cur) => prev + cur).toFixed(2);
        },

    },
    methods: {
        addNewNested() {
            this.$store.commit('addNewNested');
        },

    },
};
</script>

<style lang="scss" scoped>
.main-document {
  padding: 20px 50px;
  background-color: rgba(96, 94, 94, 0.68);


  &__total-price {
    padding: 10px 20px
  }

  &__list {
    margin-bottom: 20px;
  }
}
</style>
