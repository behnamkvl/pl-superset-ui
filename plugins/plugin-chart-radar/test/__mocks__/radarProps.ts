const formDataLegendTopPercent = {
  groupby: 'subject',
  metric: {
    label: 'AVG(efficiency)',
  },
  labelType: 'percent',
  showLegend: true,
  legendPosition: 'top',
  showLabels: true,
  labelColors: {},
};
const queryData = {
  data: [
    { subject: '2020', 'AVG(efficiency)': 100, 'fullMark': 150 },
    {
      subject: '2018',
      'AVG(efficiency)': 50,
      'fullMark': 150
    },
    { subject: '2019', 'AVG(efficiency)': 100, 'fullMark': 150 },
    {
      subject: 'Total Subject',
      'AVG(efficiency)': 100,
      'fullMark': 150,
    },
    { subject: '2017', 'AVG(efficiency)': 100, 'fullMark': 150 },
  ],
};

export const legendTopPercentage = {
  formData: formDataLegendTopPercent,
  height: 800,
  queriesData: [queryData],
  width: 400,
  name: 'aaa',
  stroke: '#820a9d',
  fill: '#8a0a9d',
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

