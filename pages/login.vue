<template>
  <v-container class="pt-9">
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center" style="height: auto">
          <v-card
            class="ma-3 pa-6 animate__animated animate__bounceInRight"
            width="350px"
            :elevation="5"
          >
            <v-form v-model="valid" lazy-validation @submit.prevent="login">
              <div>
                <v-row>
                  <v-col class="ma-3 pa-6">
                    <h5 class="text-h4 text-center grey--text">Login</h5>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
                <div class="pt-6">
                  <v-text-field
                    v-model="email"
                    label="email"
                    prepend-icon="mdi-email"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="password"
                    type="password"
                    prepend-icon="mdi-lock"
                    :rules="passwordRules"
                  ></v-text-field>
                  <v-divider></v-divider>
                  <div class="mt-4 mb-4">
                    <v-row justify="space-around">
                      <v-btn
                        color="primary"
                        block
                        type="submit"
                        :disabled="!valid"
                        >Login</v-btn
                      >
                    </v-row>
                  </div>
                  <v-divider></v-divider>
                  <div class="mt-4">
                    <v-row justify="space-around">
                      <span class="font-italic" style="font-size: 12px"
                        >Don't have an account?</span
                      ><br />
                      <v-btn text color="primary" nuxt to="/signup"
                        >Sign Up</v-btn
                      >
                    </v-row>
                  </div>
                </div>
              </div>
            </v-form>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        :size="70"
        color="indigo darken-2"
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // middleware: 'guest',
  auth: 'guest',
  head() {
    return {
      title: 'login',
    }
  },
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password must be greater than 8 characters',
      ],
      valid: true,
      overlay: false,
    }
  },
  methods: {
    ...mapActions('questions', ['getSnackbar']),
    async login() {
      try {
        this.overlay = true
        const formData = {
          email: this.email,
          password: this.password,
        }
        await this.$auth.loginWith('local', {
          data: formData,
        })
        this.$router.push('/dashboard')
        // this.$store.dispatch('getSnackbar', {
        //   message: `Welcome on board ${this.$auth.user.name}!!!`,
        // })
        this.getSnackbar({
          message: `Login Successfull!!!`,
        })
      } catch (e) {
        this.overlay = false
        this.getSnackbar({
          color: 'red',
          message: e.response.data.message,
        })
        // this.$store.dispatch('getSnackbar', {
        //   color: 'red',
        //   message: e.response.data.message,
        // })
      }
    },
  },
}
</script>
