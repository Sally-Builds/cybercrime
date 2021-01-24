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
          Next
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
        phishing: 'I received an email with a misspelt domain name',
        hacking: 'My mouse moves between programs and makes selections',
        identityTheft:
          'Debt collectors call you about debts that aren’t yours.',
        malware: 'I receive lots of pop-ups',
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
      this.$router.push('/reportcrime/question4')
    },
  },
  head() {
    return {
      title: 'Question 3',
    }
  },
}
</script>

<style></style>
