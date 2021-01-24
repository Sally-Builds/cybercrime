<template>
  <div>
    <Dougnut :chart-data="maindata" :options="barChartOptions" :height="200" />
  </div>
</template>

<script>
import Dougnut from '@/components/PieChart.js'
export default {
  components: {
    Dougnut,
  },
  props: {
    bar: {
      type: Object,
      default: null,
    },
    head: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    maindata() {
      return this.bar
    },
    barChartOptions() {
      return {
        responsive: true,
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: this.head,
          fontSize: 24,
          fontColor: '#6b7280',
        },
        tooltips: {
          backgroundColor: '#17BF62',
        },
      }
    },
  },
}
</script>
