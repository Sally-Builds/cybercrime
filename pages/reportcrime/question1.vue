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
          color="indigo"
          nuxt
          :disabled="questionAns == '' || occurenceAns == ''"
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
          'I received an email containing a suspicious attachment and link',
        hacking: 'My online is suddenly no longer working',
        identityTheft:
          'My friend received social media invitations from me that i never sent',
        malware: 'My computer suddenly runs extremely slow',
      },
      occurence: {
        once: 'Once',
        few: 'One to three times',
        many: 'More than three times',
      },
    }
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
      this.setAns({ answer: this.questionAns, occurence: this.occurenceAns })
      // this.sendAns()
      this.$router.push('/reportcrime/question2')
    },
  },
  head() {
    return {
      title: 'Question 1',
    }
  },
}
</script>

<style></style>
