import router from "@/router"
import { createStore } from "vuex"

const url = `http://localhost/appointment-reservation-api`

export default createStore({
  state: {
    uuid: null,
  },
  getters: {},
  mutations: {
    setUuid(state, uuid) {
      // if (uuid) {
      state.uuid = uuid
      localStorage.setItem("uuid", uuid)
      router.push({ name: "home" })
      // }
    },
  },
  actions: {
    // * logout
    logout(context) {
      context.commit("setUuid", null)
      localStorage.removeItem("uuid")
      router.push({ name: "login" })
    },
    //* register user
    registerUser({ commit }, { firstname, lastname, birthdate }) {
      fetch(`${url}/user/create`, {
        method: "POST",
        body: JSON.stringify({ firstname, lastname, birthdate }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((data) => {
          // console.log(data)
          commit("setUuid", data.data.uuid)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    //* login user
    LoginUser({ commit }, uuid) {
      fetch(`${url}/user/${uuid}`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((data) => {
          commit("setUuid", data.data.uuid)
        })
        .catch((error) => {
          alert("Invalid UUID", error)
        })
    },
    reserve({ state }, { timeslot, appdate }) {
      fetch(`${url}/appointment/reserve`, {
        method: "POST",
        body: JSON.stringify({ uuid: state.uuid, timeslot, appdate }),
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  modules: {},
})
