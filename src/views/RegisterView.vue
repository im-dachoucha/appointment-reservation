<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <h2
        class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8"
      >
        Register
      </h2>

      <form class="max-w-lg border rounded-lg mx-auto">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label
              for="firstname"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Firstname</label
            >
            <input
              name="firstname"
              v-model="firstname"
              id="firstname"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div>
            <label
              for="lastname"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Lastname</label
            >
            <input
              v-model="lastname"
              name="lastname"
              id="lastname"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div>
            <label
              for="birthdate"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Birthdate</label
            >
            <input
              :max="maxBirthdate()"
              v-model="birthdate"
              name="birthdate"
              id="birthdate"
              type="date"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <button @click.prevent="register" class="btn btn-primary">
            Register
          </button>
        </div>

        <div class="flex justify-center items-center bg-gray-100 p-4">
          <p class="text-gray-500 text-sm text-center">
            Already have an account?
            <router-link :to="{ name: 'login' }" class="link link-primary"
              >Log in
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      birthdate: "",
    }
  },
  methods: {
    register() {
      this.$store.dispatch("registerUser", {
        firstname: this.firstname,
        lastname: this.lastname,
        birthdate: this.birthdate,
      })
    },
    maxBirthdate() {
      let today = new Date()
      let d = String(today.getDate()).padStart(2, "0")
      let m = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
      let y = today.getFullYear()
      return `${y - 18}-${m}-${d}`
    },
  },
}
</script>
