<template>
  <v-container fluid class="pt-0 pb-0">
    <v-row>
      <v-col :md="12" :cols="12" class="text-center pt-5">
        <h3>Report Crime</h3>
        <p class="pt-5">
          Please fill in the form below before you comence the crime report
        </p>
      </v-col>
      <v-col :md="12" :cols="12">
        <v-form v-model="valid" @submit.prevent="setData()">
          <div>
            <v-col
              :md="4"
              :cols="8"
              offset-sm="1"
              offset-md="5"
              class="text-center"
            >
              <v-text-field
                v-model="name"
                label="Full Name"
                type="text"
                outlined
                :rules="nameRules"
                style="width: 300px"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                :rules="emailRules"
                type="email"
                outlined
                style="width: 300px"
              ></v-text-field>
              <v-select
                v-model="state"
                label="Geo-Political Zone"
                outlined
                item-color="primary"
                :items="states"
                :rules="zoneRules"
                style="width: 300px"
              ></v-select>
            </v-col>
            <v-col :md="12" :cols="12" class="text-center pl-8">
              <v-btn outlined color="indigo" :disabled="!valid" type="submit">
                Continue
              </v-btn>
            </v-col>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      states: [
        'South-East',
        'South-West',
        'South-South',
        'North-Central',
        'North-East',
        'North-West',
      ],
      state: '',
      email: '',
      name: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      nameRules: [(v) => !!v || 'Name is required'],
      zoneRules: [(v) => !!v || 'Geo zone is required'],
      valid: true,
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.email = this.$auth.user.email
      this.name = this.$auth.user.name
    }
  },
  methods: {
    ...mapActions('questions', ['setReporterData']),
    setData() {
      this.setReporterData({
        state: this.state,
        email: this.email,
        name: this.name,
      })
      this.$router.push('/reportcrime/question1')
    },
  },
}
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
