export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Espresso',
      align: 'start',
      sortable: false,
      value: 'Espresso',
    },
    { text: 'Cappuccino', value: 'Cappuccino' },
    { text: 'Mocca', value: 'Mocca' },
    { text: 'Latte', value: 'Latte' },
    { text: 'Doppio', value: 'Doppio' },
    { text: 'Americano', value: 'Americano' },
  ],
})
export const mutations = {
  input(state, { Espresso, Cappuccino, Mocca, Latte, Doppio, Americano }) {
    state.data.push({
      Espresso,
      Cappuccino,
      Mocca,
      Latte,
      Doppio,
      Americano,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
