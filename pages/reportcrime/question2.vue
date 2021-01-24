<template>
  <v-container>
    <v-row>
      <v-col :md="12" class="text-center">
        <h3>Report Crime</h3>
      </v-col>
      <question :question="question" @val="questionAnswer($event)" />
      <v-col :md="6" class="text-right">
        <p class="text-left">How many times have this issue occured?</p>
        <Occurence @val="occurenceAnswer($event)" />
        <v-btn
          outlined
          :disabled="questionAns == '' || occurenceAns == ''"
          color="indigo"
          nuxt
          @click="next"
        >
          submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Question from '@/components/question'
import Occurence from '@/components/occurence'
import { mapActions } from 'vuex'
export default {
  components: {
    Question,
    Occurence,
  },
  data() {
    return {
      questionAns: '',
      occurenceAns: '',
      question: {
        phishing:
          'I received an email which created an unnecessary sense of urgency',
        hacking: 'My computer installs software unexpectedly',
        identityTheft:
          'I receive debit alerts from my bank that i cannot explain',
        malware:
          'My antivirus and firewall protection is unexpectedly disablled',
      },
    }
  },
  methods: {
    ...mapActions('questions', ['setAns']),
    questionAnswer(name) {
      this.questionAns = name
    },
    occurenceAnswer(ans) {
      this.occurenceAns = ans
    },
    next() {
      this.setAns({ answer: this.questionAns, occurence: this.occurenceAns })
      this.$router.push('/reportcrime/question3')
    },
  },
}
</script>

<style></style>
