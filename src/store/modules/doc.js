const doc = {
    id: 100,
    status: 'Ok',

    nested: [
        {id: 1, title: 'Nested 1', price: 100.11, foo: 10},
        // eslint-disable-next-line max-len
        {id: 2, title: 'Nested 2', price: 200.22, foo: 100, bar: 200, baz: 300},
        {id: 3, title: 'Nested 3', price: 0},
    ],
    table: [
        {
            id: 91,
            period: 1,
            foo: 19.01,
            bar: 'A',
            start: 1631000000,
            check: false,
        },
        {
            id: 12,
            period: 2,
            foo: 18.02,
            bar: 'H',
            start: 1632000000,
            check: true,
        },
        {
            id: 83,
            period: 3,
            foo: 17.03,
            bar: 'C',
            start: 1633000000,
            check: false,
        },
        {
            id: 24,
            period: 4,
            foo: 16.04,
            bar: 'F',
            start: 1634000000,
            check: true,
        },
        {
            id: 75,
            period: 5,
            foo: 15.05,
            bar: 'E',
            start: 1635000000,
            check: false,
        },
        {
            id: 36,
            period: 6,
            foo: 14.06,
            bar: 'D',
            start: 1636000000,
            check: false,
        },
        {
            id: 67,
            period: 7,
            foo: 13.07,
            bar: 'G',
            start: 1637000000,
            check: false,
        },
        {
            id: 48,
            period: 8,
            foo: 12.08,
            bar: 'B',
            start: 1638000000,
            check: false,
        },
        {
            id: 59,
            period: 9,
            foo: 11.09,
            bar: 'I',
            start: 1639000000,
            check: false,
        },
    ],
};
export default {
    state: {
        doc,
        docBackUp: doc,
    },
    getters: {
        getDocStatus(state) {
            return {id: state.doc.id, status: state.doc.status};
        },
        getDocData: (state) => (data) => {
            return state.doc[data];
        },
        //     (state, data) {
        //     return state.doc[data];
        // },
    },
    mutations: {
        setDocData(state, data) {
            state.doc.nested[data.id][data.prop] = data.value;
        },
        deleteDocData(state, id) {
            state.doc.nested.splice(id, 1);
        },
        addNewNested(state) {
            let maxID = 0;
            maxID = Math.max(...state.doc.nested.map((item) => item.id), 0) + 1;
            state.doc.nested.push({id: maxID, title: `Nested ${maxID}`, price: 0});
        },
        checkBox(state, period) {
            const tableItemIndex = state.doc.table.findIndex((item) => {
                return item.period === period;
            });

            state.doc.table[tableItemIndex].check = !state.doc.table[tableItemIndex].check;
        },
        dataComparison(state) {
            const current = state.doc;
            const previous = state.docBackUp;

            const dataChanges = (curr, prev) => {
                const data = [];
                // eslint-disable-next-line guard-for-in
                for (const i in curr) {
                    for (const k in prev) {
                        if (!i.isArray) {
                            console.log('not object and array');
                            if (curr[i] === prev[k]) {
                                console.log('compared');
                            } else {
                                console.log('not compared');
                            }
                            ;
                        }
                    }
                    data.push(i);
                }
                return [data, prev];
            };

            console.log(dataChanges(current, previous));
        },

    },
};
