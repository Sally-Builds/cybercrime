<template>
  <div>
    <bar-chart
      :chart-data="maindata"
      :options="barChartOptions"
      :height="200"
    />
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.js'
export default {
  components: {
    BarChart,
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
          display: false,
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
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }
    },
  },
}
</script>
