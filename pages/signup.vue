<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-row align="center" justify="center">
          <v-card
            class="ma-3 pa-6 animate__animated animate__bounceInRight"
            :elevation="5"
            style="max-width: 600px"
          >
            <v-form v-model="valid" @submit.prevent="signup">
              <v-row>
                <v-col class="ma-3 pa-6">
                  <h5 class="text-h4 text-center grey--text">Sign Up</h5>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col :md="6" :cols="12">
                  <v-text-field
                    v-model="name"
                    label="Name"
                    prepend-icon="mdi-account"
                  ></v-text-field>
                </v-col>
                <v-col :md="6" :cols="12">
                  <v-text-field
                    v-model="email"
                    label="email"
                    prepend-icon="mdi-email"
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>
                <v-col :md="6" :cols="12">
                  <v-text-field
                    v-model="occupation"
                    label="Occupation"
                    prepend-icon="mdi-account-tie"
                    :rules="occupationRules"
                  ></v-text-field>
                </v-col>
                <v-col :md="6" :cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-col>
                <v-col :md="6" :cols="12">
                  <v-text-field
                    v-model="confirmPassword"
                    label="Confrim Password"
                    prepend-icon="mdi-lock-check"
                    type="password"
                    :rules="confirmPasswordRules"
                  ></v-text-field>
                </v-col>
                <v-col :md="6" :cols="12" class="pt-8">
                  <v-btn color="primary" block type="submit" :disabled="!valid"
                    >Sign Up</v-btn
                  >
                </v-col>
                <v-col :md="12" class="pt-8 text-center">
                  <span>Already have an account</span>
                  <v-btn color="primary" text nuxt to="/login">Login</v-btn>
                </v-col>
              </v-row>
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
  data() {
    return {
      name: '',
      occupation: '',
      email: '',
      password: '',
      confirmPassword: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      occupationRules: [(v) => !!v || 'Occupation is required'],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password must be greater than 8 characters',
      ],
      confirmPasswordRules: [
        (v) => !!v || 'Confirm Password',
        (v) => v === this.password || 'Password does not match',
      ],
      valid: true,
      overlay: false,
    }
  },
  methods: {
    ...mapActions('questions', ['getSnackbar']),
    async signup() {
      try {
        this.overlay = true
        const data = {
          name: this.name,
          email: this.email,
          occupation: this.occupation,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }
        await this.$axios.post(
          'http://localhost:9000/api/v1/users/signup',
          data
        )
        await this.$auth.loginWith('local', {
          data: {
            email: data.email,
            password: data.password,
          },
        })
        // this.$store.dispatch('getSnackbar', {
        //   message: `Welcome on board ${this.$auth.user.name}!!! Brace yourself for your greatest achievement`,
        // })
        this.getSnackbar({
          message: `Welcome on board ${this.$auth.user.name}!!!`,
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
