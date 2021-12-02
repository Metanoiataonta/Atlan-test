/* eslint-disable require-jsdoc */
import _ from 'lodash';
import Vue from 'vue';

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
        docBackUp: _.cloneDeep(doc),
        controlEnabled: true,
        showModal: false,
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
        toggleControl(state) {
            state.controlEnabled = !state.controlEnabled;
        },
        toggleModal(state) {
            if (state.controlEnabled) {
                state.showModal = !state.showModal;
            }
        },
        setNested(state, data) {
            state.doc.nested[data.id][data.prop] = data.value;
        },
        deleteNested(state, id) {
            const item = state.doc.nested[id];
            const itemID = item.id;
            _.forOwn(item, (value, key)=>{
                Vue.delete(item, key);
            });
            state.doc.nested[id] = {
                id: itemID,
                deleted: true,
            };
        },
        addNewNested(state) {
            if (!state.maxNestedID) {
                state.maxNestedID = Math.max(...state.doc.nested.map((item) => item.id), 0) + 1;
            }
            state.doc.nested.push({title: `Nested ${state.maxNestedID}`, price: 0});

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

            function difference(object, base) {
                function changes(object, base) {
                    return _.transform(object, function(result, value, key) {
                        if ( key !== 'status') {
                            if (!_.isEqual(value, base[key])) {
                                result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
                                if (value.id) {
                                    result[key].id = value.id;
                                }
                            }
                        }
                    });
                }
                return changes(object, base);
            }


            state.changes = difference(current, previous);
            _.forOwn(state.changes, (value, key)=>{
                state.changes[key] = value.filter((elem)=>elem !== null);
            });

            fetch('https://my-json-server.typicode.com/Metanoiataonta/Atlan-test/doc', {
                method: 'POST',
                body: JSON.stringify(state.changes),
            }).then(
                (response) => {
                    state.doc.status = response.status;
                    state.controlEnabled = !state.controlEnabled;
                    return response.json();
                })
                .catch(() => {
                    console.error('didnt');
                    state.controlEnabled = !state.controlEnabled;
                })
                .then((resp) => console.log(resp));
        },
        deleteDocument(state) {
            fetch(`https://my-json-server.typicode.com/Metanoiataonta/Atlan-test/doc/${state.doc.id}`, {
                method: 'DELETE',

            }).then(
                (response) => {
                    state.doc.status = response.status;
                    state.controlEnabled = !state.controlEnabled;
                    return response.json();
                },
            )
                .then((resp) => console.log(resp))
                .catch(() => {
                    console.error('didnt');
                    state.controlEnabled = !state.controlEnabled;
                });
        },

    },
};
