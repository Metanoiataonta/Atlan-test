<template>
  <fieldset
    name="table"
    class="table"
  >
    <div class="table__end">
      End: {{ endTime }}
    </div>

    <table class="table__main">
      <tr>
        <th
          v-for="(item, index) in columns"
          :key="item"
        >
          <div class="table__item">
            {{ item }}
            <div class="table__sort">
              <button
                :ref="'desc'+index"
                class="table__sort-top"
                :class="sortKey === item && sortDirection === 'desc' ? 'table__button_active' : ''"
                @click="sortBy($event,item, 'desc')"
              />
              <button
                :ref="'asc'+index"
                class="table__sort-bottom"
                :class="sortKey === item && sortDirection === 'asc' ? 'table__button_active' : ''"
                @click="sortBy($event,item, 'asc')"
              />
            </div>
          </div>
        </th>
      </tr>
      <tr
        v-for="(row,index) in sortedTable"
        :key="row + index"
      >
        <table-item
          v-for="(prop, key) in row"
          :key="key + index"
          :prop="prop"
          :item-key="key"
          :checked="key === 'period' ? row.check: undefined"
        />
      </tr>
    </table>
  </fieldset>
</template>
<script>
import {mapState} from 'vuex';
import TableItem from '@components/models/TableItem/TableItem.vue';


export default {
    name: 'TableDocument',
    components: {
        TableItem,
    },
    data() {
        return {
            columns: ['Period', 'Foo', 'Bar', 'Start'],
            sortKey: 'Period',
            sortDirection: 'asc',
            sortedTable: this.$store.state.doc.doc.table,

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

    },
    mounted() {

    },
    methods: {
        sortBy($event, key, direction) {
            const changed = !(key === this.sortKey && direction === this.sortDirection);
            this.lastTarget = $event.target;
            if (changed) {
                this.sortKey = key;
                this.sortDirection = direction;
                let mapped = this.table.map((item, i) => {
                    return {
                        i,
                        value: item[key.toLowerCase()],
                    };
                });
                mapped = mapped.sort((a, b) => {
                    if (a.value > b.value) {
                        return 1;
                    }
                    if (a.value < b.value) {
                        return -1;
                    }
                    return 0;
                });
                if (direction === 'desc') {
                    mapped.reverse();
                }
                this.sortedTable = mapped.map((v) => this.table[v.i]);
            }
        },
    },
};
</script>

<style lang="scss" scoped>


.table {
  background-color: rgba(96, 94, 94, 0.68);

  &__end {
    margin-bottom: 40px;
  }

  &__main {

    border: 1px solid #fff;
    width: 100%;
     border-collapse: collapse
  }
  tr, th, td {
    border: 1px solid #fff;
  }

  &__item {
    background-color: rgba(96, 94, 94, 0.68);
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  &__sort {
    button {
      display: block;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      padding: 0;
      border-radius: unset;
      box-shadow: unset;
      background-color: transparent;
      margin-right: 0;

    }

    &-top {
      border-bottom: 6px solid #fff;
      border-top: none;
      margin-bottom: 5px;

      &.table__button_active {
        border-bottom: 6px solid #2974ff;


      }
    }

    &-bottom {
      border-top: 6px solid #fff;
      border-bottom: none;

      &.table__button_active {
        border-top: 6px solid #2974ff;

      }
    }

  }
}
</style>
