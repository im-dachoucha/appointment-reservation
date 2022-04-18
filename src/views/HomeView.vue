<template>
  <div class="h-full">
    <!-- <h1 class="text-2xl font-semibold">home view</h1> -->
    <div
      class="hero min-h-[60vh]"
      style="
        background-image: url(https://unblast.com/wp-content/uploads/2020/04/Female-Doctor-Vector-Illustration.jpg);
      "
    >
      <div class="hero-overlay bg-opacity-80"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hey there</h1>
          <p class="mb-5">
            Welcome to doc Berrezzouk's appoitments reservation website.
          </p>
          <router-link :to="{ name: 'appointments' }" class="btn btn-primary">
            appointments
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
}
</script>

<style scoped></style>
