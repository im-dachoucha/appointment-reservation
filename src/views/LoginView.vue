<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <h2
        class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8"
      >
        Login
      </h2>

      <form class="max-w-lg border rounded-lg mx-auto">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label
              for="uuid"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Uuid</label
            >
            <input
              name="uuid"
              id="uuid"
              v-model="uuid"
              placeholder="example: j57A5h3T"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <button @click.prevent="login" class="btn btn-primary">Log in</button>
        </div>

        <div class="flex justify-center items-center bg-gray-100 p-4">
          <p class="text-gray-500 text-sm text-center">
            Don't have an account?
            <router-link :to="{ name: 'register' }" class="link link-primary"
              >Register
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
      uuid: "",
    }
  },
  methods: {
    login() {
      this.$store.dispatch("LoginUser", this.uuid)
    },
  },
}
</script>
