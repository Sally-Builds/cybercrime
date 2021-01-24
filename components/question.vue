<template>
  <v-col :md="12" :cols="12" class="text-center">
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="(data, key) in question"
        :key="key"
        :label="data"
        :value="key"
      ></v-radio>
    </v-radio-group>
  </v-col>
</template>

<script>
export default {
  props: {
    // radioGroup: {
    //   type: String,
    //   default: '',
    // },
    question: {
      type: Object,
      // default: {},
    },
  },
  data() {
    return {
      radioGroup: '',
    }
  },
  watch: {
    radioGroup() {
      this.$emit('val', this.radioGroup)
    },
  },
}
</script>

<style></style>
