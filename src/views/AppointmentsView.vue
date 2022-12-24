<template>
  <div>
    <div class="h-full">
      <!-- <h1 class="text-2xl font-semibold">home view</h1> -->
      <div class="hero min-h-[60vh] bg-primary">
        <div class="hero-overlay bg-opacity-80"></div>
        <div class="text-center text-neutral-content w-full">
          <div class="w-full">
            <h1 class="mb-5 text-3xl font-bold">Reserve an appointment</h1>
            <div class="form-control w-full mx-auto max-w-xs">
              <label class="label" for="date">
                <span class="label-text text-lg text-primary"
                  >Pick a date :</span
                >
              </label>
              <input
                :min="minDate()"
                v-model="date"
                type="date"
                class="input input-bordered w-full max-w-xs text-secondary"
                id="date"
              />
            </div>
            <button
              @click.prevent="getAppointments"
              class="btn btn-primary mt-3"
            >
              Look up for appointments
            </button>
            <div
              v-if="showAppointments"
              class="mt-3 flex justify-around flex-wrap"
            >
              <div
                v-for="appointment in availableAppointments"
                class="card w-48 md-base-100 shadow-xl"
                :key="appointment.id"
              >
                <div class="card-body">
                  <h2 class="card-title">{{ appointment }}</h2>
                  <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
                  <div class="card-actions justify-end">
                    <button
                      @click.prevent="reserve(appointment)"
                      class="btn btn-sm btn-primary"
                    >
                      Reserve Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h1 class="text-3xl">reserved appointments</h1>
        <div class="mt-3 flex justify-center gap-3">
          <div
            v-for="appointment in reservedAppointments"
            class="card w-48 md-base-100 shadow-xl"
            :key="appointment.appid"
          >
            <div class="card-body">
              <h2 class="card-title">{{ appointment.appdate }}</h2>
              <h2 class="card-title">{{ appointment.timeslot }}</h2>
              <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
              <div class="card-actions justify-end">
                <!-- <button
                  class="btn btn-sm btn-primary"
                >
                  Cancel
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const slots = [
  "9h - 10h",
  "10h - 11h",
  "11h - 12h",
  "14h - 15h",
  "15h - 16h",
  "16h - 17h",
]
export default {
  name: "AppointmentsView",
  data() {
    return {
      date: "",
      appointments: [],
      reservedAppointments: [],
      showAppointments: false,
    }
  },
  methods: {
    getAppointments() {
      fetch(`http://localhost/appointment-reservation-api/appointment`, {
        method: "POST",
        body: JSON.stringify({
          date: this.date,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.appointments = data.data
          this.showAppointments = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    minDate() {
      let today = new Date()
      let d = String(today.getDate()).padStart(2, "0")
      let m = String(today.getMonth() + 1).padStart(2, "0")
      let y = today.getFullYear()
      return `${y}-${m}-${d}`
    },
    reserve(slot) {
      this.$store
        .dispatch("reserve", {
          timeslot: slot,
          appdate: this.date,
        })
        .then(() => {
          this.showAppointments = false
          this.getReservedAppointments()
        })
    },
    getReservedAppointments() {
      fetch(
        `http://localhost/appointment-reservation-api/appointment/reserved/${this.$store.state.uuid}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.reservedAppointments = data.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  computed: {
    availableAppointments() {
      // console.log("test", this.appointments)
      if (this.appointments.length) {
        return slots.filter((slot) => {
          return !this.appointments.includes(slot)
        })
      } else {
        return [...slots]
      }
    },
  },
  created() {
    this.getReservedAppointments()
  },
}
</script>
