<template>
  <fieldset
    name="table"
    class="table"
  >
    <div class="table__end">
      End: {{ endTime }}
    </div>
    <div class="table__grid">
      <div
        v-for="item in columns"
        :key="item"
        class="table__item"
      >
        {{ item }}
        <div class="table__sort">
          <button
            class="table__sort-top"
            @click="sortBy(item, 'inverted')"
          />
          <button
            class="table__sort-button"
            @click="sortBy(item, 'consistent')"
          />
        </div>
      </div>
      <template v-for="(row,index) in sortedTable">
        <table-item-cmp
          v-for="(prop, key) in row"
          :key="key + index"
          :prop="prop"
          :item-key="key"
          :checked="key === 'period' ? row.check: undefined"
        />
      </template>
    </div>
  </fieldset>
</template>
<script>
import {mapState} from 'vuex';
import TableItem from '@components/models/TableItem/TableItem.vue';

export default {
    name: 'TableDocument',
    components: {
        'table-item-cmp': TableItem,
    },
    data() {
        return {
            columns: ['Period', 'Foo', 'Bar', 'Start'],
            sortKey: 'Period',
            sortDirection: 'consistent',
        };
    },
    computed: {
        endTime() {
            let time = new Date((Math.max(...this.table.map((item) => item.start), 0) + 1) * 1000);
            time = new Date(time.setMonth(time.getMonth() + 1)).toDateString();
            return time;
        },
        ...mapState({
            table: (state) => state.doc.doc.table,
        }),
        sortedTable() {
            return this.table;
        },
    },
    methods: {
        sortBy(key, direction) {
            const sorted = this.table;
            const changed = !(key === this.sortKey && direction === this.sortDirection);
            if (changed) {
                this.sortKey = key;
                this.sortDirection = direction;

                switch (key) {
                case 'Period':
                    if (direction === 'consistent') {
                        return sorted.sort((a, b) => a.period - b.period);
                    } else {
                        return sorted.sort((a, b) => b.period - a.period);
                    }
                case 'Foo':
                    if (direction === 'consistent') {
                        return sorted.sort((a, b) => a.foo - b.foo);
                    } else {
                        return sorted.sort((a, b) => b.foo - a.foo);
                    }
                case 'Bar':
                    if (direction === 'consistent') {
                        return sorted.sort((a, b) => a.bar - b.bar);
                    } else {
                        return sorted.sort((a, b) => b.bar - a.bar);
                    }
                }
                this.sortedTable = sorted;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.table {
  &__end {
    margin-bottom: 40px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #fff;
    border: 1px solid #fff;
    grid-gap: 1px;
  }

  &__item {
    background-color: #000;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  &__sort {
    button {
      display: block;
    }

    &-top {
      border-radius: unset;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 7.5px 10px 7.5px;
      border-color: transparent transparent #2974ff transparent;

      padding: 0;
    }
  }
}
</style>
