<template>
  <v-radio-group v-model="radioGroup">
    <v-radio
      v-for="(data, key) in occurence"
      :key="key"
      :label="data"
      :value="key"
    ></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  props: {
    // occurence: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      radioGroup: '',
      occurence: {
        once: 'Once',
        few: 'One to three times',
        many: 'More than three times',
      },
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
