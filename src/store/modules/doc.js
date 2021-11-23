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
        docBackUp: JSON.parse(JSON.stringify(doc)),

        maxNestedID: undefined,
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


            state.doc.nested[data.id][data.prop] = data.value;
        },
        deleteDocData(state, id) {
            state.doc.nested.splice(id, 1);
        },
        addNewNested(state) {
            if (!state.maxNestedID) {
                state.maxNestedID = Math.max(...state.doc.nested.map((item) => item.id), 0) + 1;
            }
            state.doc.nested.push({id: state.maxNestedID, title: `Nested ${state.maxNestedID}`, price: 0});

            state.maxNestedID++;
        },
        checkBox(state, period) {
            const tableItemIndex = state.doc.table.findIndex((item) => {
                return item.period === period;
            });

            state.doc.table[tableItemIndex].check = !state.doc.table[tableItemIndex].check;
        },
        dataComparison(state) {
            state.changes = undefined;
            const current = state.doc;
            const previous = state.docBackUp;
            const tableDataChanges = (curr, prev) => {
                const data = [];
                curr.sort((a, b) => a.period - b.period);
                prev.sort((a, b) => a.period - b.period);
                for (let i = 0; i < curr.length; i++) {
                    if (curr[i].check !== prev[i].check) {
                        data.push({id: curr[i].id, check: curr[i].check});
                    }
                }
                return data;
            };

            const nestedDataChanges = (curr, prev) => {
                const currentArray = [...curr];
                const prevArray = [...prev];
                const changes = [];
                const commonIndexCurrent = [];

                prevArray.forEach((item, prevIndex) => {
                    const currIndex = currentArray.findIndex((el) => el.id === item.id);
                    if (currIndex !== -1) {
                        // eslint-disable-next-line guard-for-in
                        for (const value in item) {
                            if (item[value] !== currentArray[currIndex][value]) {
                                if (!changes[item.id - 1]) {
                                    changes[item.id - 1] = {};
                                }
                                changes[item.id - 1][value] = currentArray[currIndex][value];
                            }
                        }
                        commonIndexCurrent.push(currIndex);
                    } else {
                        changes[item.id - 1] = {
                            id: item.id,
                            deleted: true,
                        };
                    }
                });
                for (let i = 0; i < currentArray.length; i++) {
                    const isCommon = commonIndexCurrent.includes(i);
                    if (!isCommon) {
                        changes[currentArray[i].id - 1] = currentArray[i];
                    }
                }
                console.log(commonIndexCurrent);
                return changes;
            };

            state.changes = {
                table: tableDataChanges(current.table, previous.table),
                nested: nestedDataChanges(current.nested, previous.nested),
            };
            fetch('https://my-json-server.typicode.com/Metanoiataonta/Atlan-test/doc', {
                method: 'POST',
                body: JSON.stringify(state.changes),
            }).then(() => {
                console.log('complete');
            }).catch(() => console.error('didnt'));
        },
        deleteDocument() {
            fetch('https://my-json-server.typicode.com/Metanoiataonta/Atlan-test/doc', {
                method: 'DELETE',

            }).then(() => {
                console.log('complete');
            }).catch(() => console.error('didnt'));
        },

    },
};
