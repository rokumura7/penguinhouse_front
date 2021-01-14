import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  labels: [] as string[],
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  labels: (state) => state.labels,
})

export const mutations = mutationTree(state, {
  addLabel(state, label: string): void {
    if (state.labels.findIndex((item) => item === label) === -1) {
      state.labels.push(label)
    }
  },
  removeLabel(state, label: string): void {
    state.labels = state.labels.filter((item) => item !== label)
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    addLabelAction({ commit }, label) {
      commit('addLabel', label)
    },
  }
)
