import axios from 'axios'
import cyberTips from '../cyberTips.json'

const state = {
  questionData: 'this is a text from the store',
  surveyAnswer: [],
  email: '',
  state: '',
  label: [],
  data: [],
  label2: [],
  data2: [],
  zonalData: [],
  name: '',
  snackbar: { show: false, message: null, color: null },
  cyberTips: cyberTips.cyberFacts,
}

const getters = {
  getStatus(state) {
    return state.snackbar
  },
}

const mutations = {
  setReporterData(state, payload) {
    state.email = payload.email
    state.state = payload.state
    state.name = payload.name
  },
  setAns(state, payload) {
    state.surveyAnswer.push(payload)
  },
  getData(state, payload) {
    payload.crimePercentageByZones.forEach((e) => {
      state.label.push(e.crime)
      state.data.push((Math.round(e.percentage * 100) / 100).toFixed(2))
    })
    payload.crimeTypeSum.forEach((e) => {
      state.label2.push(e._id)
      state.data2.push(e.total)
    })
  },
  getZonalData(state, payload) {
    const mainArr = []
    payload.forEach((e) => {
      const data = {}
      data.crimeName = e.crimeName
      data.label = []
      data.dataSet = []
      e.data.forEach((e) => {
        data.label.push(e._id)
        data.dataSet.push(e.total)
      })
      mainArr.push(data)
    })
    state.zonalData = mainArr
  },
  setSnackbar(state, payload) {
    state.snackbar.show = true
    state.snackbar.message = payload.message
    state.snackbar.color = payload.color || 'green'
  },
}

const actions = {
  async getData({ commit, state, dispatch }) {
    try {
      const data = await axios({
        method: 'GET',
        url: `http://localhost:9000/api/v1/questions`,
        // withCredentials: true,
      })
      const zoneData = await axios({
        method: 'GET',
        url: `http://localhost:9000/api/v1/questions/zonedata`,
        // withCredentials: true,
      })
      commit('getData', data.data.data)
      commit('getZonalData', zoneData.data.data.crimeData)
    } catch (e) {
      dispatch('getSnackbar', {
        color: 'red',
        message: `Something went wrong`,
      })
      this.$router.replace('/')
    }
  },
  setAns({ commit }, payload) {
    if (payload.occurence === 'once') {
      payload.occurence = 1
    } else if (payload.occurence === 'few') {
      payload.occurence = 2
    } else {
      payload.occurence = 3
    }
    commit('setAns', payload)
  },
  sendAns({ state, dispatch }) {
    function duplicate(a) {
      const counts = {}
      for (let i = 0; i < a.length; i++) {
        if (counts[a[i].answer]) {
          // counts[a[i].val] += 1
          counts[a[i].answer] += a[i].occurence
        } else {
          counts[a[i].answer] = a[i].occurence
          // counts[a[i].val] = 1
        }
      }
      return counts
    }
    const calculated = duplicate(state.surveyAnswer)
    const y = Object.keys(calculated).reduce((a, b) =>
      calculated[a] > calculated[b] ? a : b
    )
    const data = {
      type: y,
      occurence: calculated[y],
      state: state.state,
      email: state.email,
      name: state.name,
    }
    dispatch('sendSurveyAnswers', data)
  },
  async sendSurveyAnswers({ dispatch }, payload) {
    try {
      await axios({
        method: 'POST',
        url: `http://localhost:9000/api/v1/questions`,
        // withCredentials: true,
        data: payload,
      })
      dispatch('getSnackbar', {
        message: `Report submited successfully`,
      })
      this.$router.replace('/')
    } catch (e) {
      dispatch('getSnackbar', {
        color: 'red',
        message: `Something went wrong`,
      })
      this.$router.go('/')
    }
  },
  setReporterData({ commit }, payload) {
    commit('setReporterData', payload)
  },
  getSnackbar({ commit }, payload) {
    commit('setSnackbar', payload)
  },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
