<template>
  <header class="flex justify-between items-center py-4 md:py-8">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li>
              <router-link :to="{ name: 'appointments' }">
                Appointments
              </router-link>
            </li>
            <li>
              <span @click="copy">{{ $store.state.uuid }}</span>
            </li>
          </ul>
        </div>
        <router-link
          :to="{ name: 'home' }"
          class="btn btn-ghost normal-case text-xl hidden sm:inline-flex"
          >Doc H.Berezzouk</router-link
        >
      </div>
      <div v-if="$store.state.uuid" class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>
            <router-link :to="{ name: 'appointments' }">
              Appointments
            </router-link>
          </li>
          <li>
            <span @click="copy">{{ $store.state.uuid }}</span>
          </li>
        </ul>
      </div>
      <div v-if="!$store.state.uuid" class="navbar-end gap-3">
        <router-link
          :to="{ name: 'login' }"
          class="btn btn-md btn-outline btn-primary"
        >
          Log in
        </router-link>
        <router-link :to="{ name: 'register' }" class="btn btn-md btn-primary">
          Register
        </router-link>
      </div>
      <div v-else class="navbar-end gap-3">
        <a
          @click="this.$store.dispatch('logout')"
          class="btn btn-md btn-outline btn-primary"
        >
          Logout
        </a>
      </div>
    </div>

    <!-- <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
      aria-label="logo"
    >
      <svg
        width="95"
        height="94"
        viewBox="0 0 95 94"
        class="w-6 h-auto text-indigo-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
      </svg>

      Doc Bourezzouk
    </router-link>

    <nav v-if="$store.state.uuid" class="hidden lg:flex gap-12 items-center">
      <router-link
        :to="{ name: 'home' }"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >Home
      </router-link>
      <router-link
        :to="{ name: 'appointments' }"
        class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
        >Appointments
      </router-link>
      <router-link
        :to="{ name: 'login' }"
        class="text-white hover:bg-indigo-600 active:text-indigo-700 text-lg font-semibold transition duration-100 bg-indigo-500 rounded-lg py-2 px-3"
        >Logout
      </router-link>

      <span class="cursor-pointer font-semibold py-2" @click="copy">{{
        $store.state.uuid
      }}</span>
    </nav>

    <div
      v-else
      class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8"
    >
      <router-link
        :to="{ name: 'login' }"
        class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
        >Log in
      </router-link>

      <router-link
        :to="{ name: 'register' }"
        class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-5 py-3"
        >Register</router-link
      >
    </div> -->
  </header>
</template>

<script>
export default {
  name: "HeaderCom",
  methods: {
    copy() {
      navigator.clipboard.writeText(this.$store.state.uuid)
      //   navigator.clipboard.writeText(e.target.innerText)
    },
  },
}
</script>
