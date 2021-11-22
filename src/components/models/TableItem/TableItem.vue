<template>
  <div
    v-if="itemKey !== 'id' && itemKey !== 'check'"

    class="table__item"
  >
    {{ itemKey === 'start' ? new Date(prop * 1000).toDateString() : prop }}
    <input
      v-if="itemKey === 'period'"
      :checked="checked"
      type="checkbox"
      :name="itemKey"
      @change="checkChange"
    >
  </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'TableItem',
    props: {
        prop: {
            type: [String, Number, Boolean],
            default: undefined,
        },
        itemKey: {
            type: String,
            default: undefined,
        },
        checked: {
            type: Boolean,
            default: false,
        },
    },
    computed: {},
    mounted() {

    },
    methods: {
        checkChange(event) {
            (event.target.checked);
            this.$store.commit('checkBox', this.prop);
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
