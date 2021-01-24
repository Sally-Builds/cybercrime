<template>
  <v-container fluid class="pt-0 pb-0">
    <v-hover v-slot="{ hover }">
      <v-row>
        <v-col
          :md="6"
          :cols="12"
          style="background-color: black; height: 90vh"
          class="pa-0"
        >
          <v-card flat color="transparent" style="height: 100%">
            <v-img :aspect-ratio="16 / 9" src="/img/cyberCrime.jpg">
              <!-- <v-img
              :aspect-ratio="16 / 9"
              src="https://files2.abingcdn.com/balkaneu.com/uploads/2018/09/08194009/maxresdefault-2.jpg"
            > -->
            </v-img>
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex align-center transition-fast-in-fast-out v-card--reveal white--text"
                style="height: 100%; background-color: #12232e"
              >
                <div class="pa-4">
                  <h3 class="text-center">The Online Menace</h3>
                  <p class="pt-3 text-body-2">
                    cybercrime is vastly growing in the world of tech today.
                    Criminals of the World Wide Web exploit internet users’
                    personal information for their own gain. They dive deep into
                    the dark web to buy and sell illegal products and services.
                    They even gain access to classified government information.
                  </p>
                  <div class="text-center pt-0">
                    <v-btn outlined color="white" nuxt to="/educateyourself">
                      Educate Yourself
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col
          :md="6"
          :cols="12"
          style="background-color: #eefbfb; height: 90vh"
          class="d-flex align-center pa-0"
        >
          <div class="pa-4">
            <h3 class="text-center">Report Crime</h3>
            <p class="pa-3 text-body-2">
              Welcome to Cyber Crime Management Agency. If you have been a
              victim of cybercrime and looking to report the incident, kindly
              click the link below to report the crime so that we can help
              protect you better. Kindly Create an account to view more
              statistics on crime in the country. Cheers!!!
            </p>
            <div class="text-center pt-0">
              <v-btn outlined color="indigo" nuxt to="/reportcrime">
                report crime
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-hover>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /* opacity: 0.5; */
  position: absolute;
  width: 100%;
}
</style>
