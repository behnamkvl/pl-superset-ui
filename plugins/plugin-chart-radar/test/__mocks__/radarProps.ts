const formDataLegendTopPercent = {
  groupby: 'subject',
  metrics: [
    {
      label: 'first'
    },
    {
      label: 'second'
    }
  ],
  // metric: {
  //   label: 'AVG(efficiency)',
  // },
  labelType: 'percent',
  showLegend: false,
  legendPosition: 'top',
  showLabels: false,
  labelColors: {},
};
const queryData = {
  data: [
    { subject: '2020', 'first': 140, 'second': 90, 'fullMark': 150 },
    {
      subject: '2018',
      'first': 50,
      'second': 100,
      'fullMark': 150
    },
    { subject: '2019', 'first': 100, 'second': 50, 'fullMark': 150 },
    {
      subject: 'Total Subject',
      'first': 100,
      'second': 56,
      'fullMark': 150,
    },
    { subject: '2017', 'first': 100, 'second': 10, 'fullMark': 150 },
  ],
};

export const legendTopPercentage = {
  formData: formDataLegendTopPercent,
  height: 800,
  queriesData: [queryData],
  width: 400,
  // name: 'aaa',
  // stroke: '#820a9d',
  // fill: '#8a0a9d',
};

export const legendLeftWithoutLabels = {
  formData: {
    ...formDataLegendTopPercent,
    legendPosition: 'left',
    showLabels: false,
  },
  height: 800,
  queriesData: [queryData],
  width: 800,
};

