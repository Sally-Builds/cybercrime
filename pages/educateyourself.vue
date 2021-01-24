<template>
  <div>
    <div style="height: 100vh">
      <div class="view" style="height: 100vh"></div>
    </div>
    <v-container>
      <v-row>
        <v-col :md="12" :cols="12">
          <h4 class="text-center text-h4">Cyber Crime</h4>
          <p class="text-body-2 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, delectu saepe quidem voluptatem ea error hic eius
            facere provident tenetur tempore voluptatum commodi, laudantium
            mollitia, aperiam aut eaque.
          </p>
        </v-col>
        <v-col :md="12" :cols="12">
          <h4 class="text-center text-h4">Types Of Cyber Crime</h4>
          <div v-for="(tip, name, i) in cyberTips" :key="i" class="pt-6 pb-6">
            <h5 class="text-h5">{{ i + 1 }}): {{ name }}</h5>
            <div>
              <p>
                Definition:
                <span class="text-body-2">{{ tip.Definition }}</span>
              </p>
              <h5 class="text-h6 text-center">Types</h5>
              <div v-for="(types, index) in tip.Types" :key="index">
                <p>
                  <span class="text-subtitle-2">{{ index }}</span
                  >: <span class="text-body-2">{{ types }}</span>
                </p>
              </div>
              <div class="pt-3 pb-3">
                <h5 class="text-h6 text-center">Examples</h5>
                <ul>
                  <li
                    v-for="(examples, index) in tip.Types"
                    :key="index"
                    class="pt-2 pb-2 text-body-2"
                  >
                    {{ examples }}
                  </li>
                </ul>
              </div>
              <v-divider></v-divider>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('questions', ['cyberTips']),
  },
  head() {
    return {
      title: 'What is Cyber Crime?',
    }
  },
}
</script>

<style>
/* .view {
  background: url('https://www.sogeti.com/link/be059f17ea064684946f469b9a936474.aspx')
    no-repeat center center;
  background-size: cover;
  height: 100%;
} */
.view {
  background: url('/img/educate.png') no-repeat center center;
  background-size: cover;
  height: 100%;
}
</style>
