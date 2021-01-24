<template>
  <div>
    <v-container>
      <v-row>
        <v-col :md="6">
          <Bar :bar="mainData" :head="title" />
        </v-col>
        <v-col :md="6">
          <Pie :bar="pieData" :head="title2" />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(val, i) in zonalData" :key="i" :md="4">
          <Dou
            :label="val.label"
            :data-set="val.dataSet"
            :head="val.crimeName"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Bar from '@/components/Bar'
import Pie from '@/components/Pie'
import Dou from '@/components/Dou'
export default {
  // layout: 'admin',
  middleware: 'auth',
  components: {
    Bar,
    Pie,
    Dou,
  },
  head() {
    return {
      title: 'Dashboard',
    }
  },
  data() {
    return {
      title: 'Crime Zone Rating',
      title2: 'National Crime Occurence Rate',
    }
  },
  computed: {
    ...mapState('questions', ['label', 'data', 'label2', 'data2', 'zonalData']),
    mainData() {
      return {
        labels: this.label,
        datasets: [
          {
            label: 'zones',
            data: this.data,
            backgroundColor: [
              '#caf270',
              '#45c490',
              '#008d93',
              '#000080',
              '#d3d3d3',
              '#add8e6',
            ],
          },
        ],
      }
    },
    pieData() {
      return {
        labels: this.label2,
        datasets: [
          {
            label: 'crime',
            data: this.data2,
            backgroundColor: ['#665191', '#41B883', '#E46651'],
          },
        ],
      }
    },
  },
  mounted() {
    if (this.label.length > 0) {
    } else {
      this.getData()
    }
  },
  methods: {
    ...mapActions('questions', ['getData']),
  },
}
</script>
