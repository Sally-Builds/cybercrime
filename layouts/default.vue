<template>
  <client-only>
    <v-app app>
      <v-app-bar
        dense
        class="white--text"
        app
        flat
        style="background-color: #04233d"
      >
        <v-toolbar-title>CCMRA </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn nuxt exact text class="white--text" to="/"> Home </v-btn>
        <v-btn
          v-if="$auth.loggedIn"
          nuxt
          exact
          text
          class="white--text"
          to="/dashboard"
          >Dashboard</v-btn
        >
        <v-btn
          v-if="!$auth.loggedIn"
          nuxt
          exact
          text
          class="white--text"
          to="/login"
          >Login</v-btn
        >
        <v-btn
          v-if="!$auth.loggedIn"
          nuxt
          exact
          text
          class="white--text"
          to="/signup"
          >Signup</v-btn
        >
        <v-btn
          v-if="$store.state.auth.loggedIn"
          nuxt
          exact
          text
          class="white--text"
          @click="logout"
          >Logout</v-btn
        >
      </v-app-bar>
      <v-main class="pb-9">
        <!-- <v-container> -->
        <nuxt />
        <!-- </v-container> -->
      </v-main>
      <v-snackbar
        v-model="getStatus.show"
        top
        :color="getStatus.color"
        dark
        :timeout="5000"
        class="animate__animated animate__bounceInDown"
      >
        {{ getStatus.message }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="getStatus.show = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-footer style="background-color: #04233d" absolute padless>
        <v-col class="text-center white--text text-caption">
          {{ new Date().getFullYear() }} -
          <span class="text-caption">Cyber Crime Management Report Agency</span>
        </v-col>
      </v-footer>
      <v-overlay :value="overlay">
        <v-progress-circular
          indeterminate
          :size="70"
          color="indigo darken-2"
        ></v-progress-circular>
      </v-overlay>
    </v-app>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // auth: false,
  data() {
    return {
      overlay: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  computed: {
    // snackbar() {
    //   return this.$store.getters.getStatus;
    // },
    ...mapGetters('questions', ['getStatus']),
  },
  methods: {
    logout() {
      this.overlay = true
      this.$auth.logout()
      this.$router.push('/')
      this.overlay = false
    },
  },
}
</script>

<style>
:root {
  --animate-duration: 2500ms;
  --animate-delay: 1.5s;
}
</style>
