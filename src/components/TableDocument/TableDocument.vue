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
            @click="sortBy($event,item, 'inverted')"
          />
          <button
            class="table__sort-bottom"
            @click="sortBy($event,item, 'consistent')"
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
            sortedTable: this.$store.state.doc.doc.table,
            lastTarget: undefined,
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
        this.lastTarget = document.querySelector('.table__sort-bottom');
        this.lastTarget.classList.toggle('table__button_active');
    },
    methods: {
        sortBy($event, key, direction) {
            if (this.lastTarget) {
                this.lastTarget.classList.toggle(`table__button_active`);
            }

            $event.target.classList.toggle(`table__button_active`);
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
                if (direction === 'inverted') {
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #fff;
    border: 1px solid #fff;
    grid-gap: 1px;
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
