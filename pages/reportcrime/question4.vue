<template>
  <v-container>
    <v-row>
      <v-col :md="12" :cols="12" class="text-center">
        <h3>Report Crime</h3>
      </v-col>
      <question :question="question" @val="questionAnswer($event)" />
      <v-col :md="6" class="text-right">
        <p class="text-left">How many times have this issue occured?</p>
        <Occurence @val="occurenceAnswer($event)" />
        <v-btn
          outlined
          :disabled="
            questionAns == '' || occurenceAns == '' || surveyAnswer.length != 3
          "
          color="indigo"
          nuxt
          @click="next"
        >
          Submit
        </v-btn>
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
import Question from '@/components/question'
import Occurence from '@/components/occurence'
import { mapActions, mapState } from 'vuex'
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
        phishing: 'I received an email with a poorly written message content',
        hacking: 'I was notified by an unknown person that I have been hacked',
        identityTheft:
          'I was unable to file some documents because someone has already filed them in your name.',
        malware: 'My computer inexplicably freezes or crashes',
      },
      overlay: false,
    }
  },
  computed: {
    ...mapState('questions', ['surveyAnswer']),
  },
  methods: {
    ...mapActions('questions', ['setAns', 'sendAns']),
    questionAnswer(name) {
      this.questionAns = name
    },
    occurenceAnswer(ans) {
      this.occurenceAns = ans
    },
    next() {
      this.overlay = true
      this.setAns({ answer: this.questionAns, occurence: this.occurenceAns })
      this.sendAns()
      // this.$router.push('/')
    },
  },
}
</script>

<style></style>
