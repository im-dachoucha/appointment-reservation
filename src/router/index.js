import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import AppointmentsView from "../views/AppointmentsView.vue"
import store from "@/store"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/appointments",
    name: "appointments",
    component: AppointmentsView,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.uuid) {
      if (localStorage.getItem("uuid")) {
        store.commit("setUuid", localStorage.getItem("uuid"))
        // console.log("here")
        next({ name: to.name })
        return
      }
      next("/login")
    } else next()
  } else {
    next()
  }
})

export default router
