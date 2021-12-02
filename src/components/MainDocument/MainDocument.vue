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
        :key="'Nested_' + index"
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
import {mapGetters} from 'vuex';

export default {
    name: 'MainDocument',
    components: {
        'nested-cmp': MainNested,
    },
    data() {
        return {};
    },
    computed: {...mapGetters(
        [`getDocData`],
    ),
    nested() {
        return this.getDocData('nested');
    },

    totalPrice() {
        const existingNested = this.nested.filter((elem)=>!elem.deleted);
        const nestedPrice = existingNested.map((item) => parseFloat(item.price));

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
