const formDataWithTotals = {
  metrics: [
    {
      label: 'AVG(decomp_volume)',
    },
    {
      label: 'AVG(volume_for_roi)',
    },
  ],
  rows: ['group_type', 'period_type'],
  columns: ['period', 'period_type'],
  transpose: false,
  numbersFormat: 'SMART_NUMBER',
  emptyValuePlaceholder: '---',
  showTotal: 'columnsAndRows',
};

const formDataWithTotalsSingleRow = {
  metrics: [
    {
      label: 'AVG(decomp_volume)',
    },
    {
      label: 'AVG(volume_for_roi)',
    },
  ],
  rows: ['group_type'],
  columns: ['period', 'period_type'],
  transpose: false,
  numbersFormat: 'SMART_NUMBER',
  showTotal: 'columnsAndRows',
  compactView: false,
};

export const queryData = {
  data: [
    {
      group_type: 'Summary Group',
      period_type: 'Standard',
      period: 'Total Period',
      'AVG(decomp_volume)': null,
      'AVG(volume_for_roi)': null,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Custom',
      period: 'Total Period',
      'AVG(decomp_volume)': null,
      'AVG(volume_for_roi)': null,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Standard',
      period: '2017',
      'AVG(decomp_volume)': 213718.333333333,
      'AVG(volume_for_roi)': 213915,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Custom',
      period: '2017',
      'AVG(decomp_volume)': 213718.333333333,
      'AVG(volume_for_roi)': 213915,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Standard',
      period: '2018',
      'AVG(decomp_volume)': 158924,
      'AVG(volume_for_roi)': 158733,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Custom',
      period: '2018',
      'AVG(decomp_volume)': 158924,
      'AVG(volume_for_roi)': 158733,
    },
    {
      group_type: 'Variable',
      period_type: 'Custom',
      period: '2018',
      'AVG(decomp_volume)': null,
      'AVG(volume_for_roi)': null,
    },
    {
      group_type: 'Variable',
      period_type: 'Standard',
      period: 'Total Period',
      'AVG(decomp_volume)': 50911.8604651163,
      'AVG(volume_for_roi)': 20054.2325581395,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Standard',
      period: 'Total Period',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Custom',
      period: 'Total Period',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Custom',
      period: 'Total Period',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Standard',
      period: 'Total Period',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Standard',
      period: '2017',
      'AVG(decomp_volume)': 28899.6666666667,
      'AVG(volume_for_roi)': 28866.8333333333,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Standard',
      period: '2017',
      'AVG(decomp_volume)': 28899.6666666667,
      'AVG(volume_for_roi)': 28866.8333333333,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Custom',
      period: '2017',
      'AVG(decomp_volume)': 24882.7142857143,
      'AVG(volume_for_roi)': 24849.4285714286,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Custom',
      period: '2017',
      'AVG(decomp_volume)': 24882.7142857143,
      'AVG(volume_for_roi)': 24849.4285714286,
    },
    {
      group_type: 'Variable',
      period_type: 'Custom',
      period: '2017',
      'AVG(decomp_volume)': 19966.2222222222,
      'AVG(volume_for_roi)': 17059.0740740741,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Standard',
      period: '2018',
      'AVG(decomp_volume)': 18454.1666666667,
      'AVG(volume_for_roi)': 18472.8333333333,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Standard',
      period: '2018',
      'AVG(decomp_volume)': null,
      'AVG(volume_for_roi)': null,
    },
    {
      group_type: 'Variable',
      period_type: 'Standard',
      period: '2017',
      'AVG(decomp_volume)': 17069.5555555556,
      'AVG(volume_for_roi)': 17059.0740740741,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Custom',
      period: '2018',
      'AVG(decomp_volume)': 15817.8571428571,
      'AVG(volume_for_roi)': 15833.8571428571,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Custom',
      period: '2018',
      'AVG(decomp_volume)': 15817.8571428571,
      'AVG(volume_for_roi)': 15833.8571428571,
    },
    {
      group_type: 'Variable',
      period_type: 'Standard',
      period: '2018',
      'AVG(decomp_volume)': 14052.8148148148,
      'AVG(volume_for_roi)': 14063.4814814815,
    },
    {
      group_type: 'Variable',
      period_type: 'Custom',
      period: 'Total Period',
      'AVG(decomp_volume)': 3035.81395348837,
      'AVG(volume_for_roi)': 20054.2325581395,
    },
  ],
};
export const queryDataSingleRow = {
  data: [
    {
      group_type: 'Direct Due To Group',
      period: '2019',
      period_type: 'Custom',
      'AVG(decomp_volume)': 7816567,
      'AVG(volume_for_roi)': 745,
    },
    {
      group_type: 'Summary Group',
      period: '2019',
      period_type: 'Standard',
      'AVG(decomp_volume)': 1183718.33333333,
      'AVG(volume_for_roi)': 213915,
    },
    {
      group_type: 'Summary Group',
      period: '2019',
      period_type: 'Custom',
      'AVG(decomp_volume)': 1182051.66666667,
      'AVG(volume_for_roi)': 213915,
    },
    {
      group_type: 'Summary Group',
      period: 'Total Period',
      period_type: 'Standard',
      'AVG(decomp_volume)': 1076125.66666667,
      'AVG(volume_for_roi)': 372648.333333333,
    },
    {
      group_type: 'Due To Group',
      period: '2020',
      period_type: 'Custom',
      'AVG(decomp_volume)': 345345,
      'AVG(volume_for_roi)': 0,
    },
    {
      group_type: 'Summary Group',
      period: 'Total Period',
      period_type: 'Custom',
      'AVG(decomp_volume)': 293427.333333333,
      'AVG(volume_for_roi)': 372648.333333333,
    },
    {
      group_type: 'Summary Group',
      period: '2017',
      period_type: 'Standard',
      'AVG(decomp_volume)': 213718.333333333,
      'AVG(volume_for_roi)': 213915,
    },
    {
      group_type: 'Summary Group',
      period: '2017',
      period_type: 'Custom',
      'AVG(decomp_volume)': 213718.333333333,
      'AVG(volume_for_roi)': 213915,
    },
    {
      group_type: 'Summary Group',
      period: '2020',
      period_type: 'Custom',
      'AVG(decomp_volume)': 199624,
      'AVG(volume_for_roi)': 158733,
    },
    {
      group_type: 'Summary Group',
      period: '2020',
      period_type: 'Standard',
      'AVG(decomp_volume)': 158924,
      'AVG(volume_for_roi)': 158733,
    },
    {
      group_type: 'Summary Group',
      period: '2018',
      period_type: 'Custom',
      'AVG(decomp_volume)': 158924,
      'AVG(volume_for_roi)': 158733,
    },
    {
      group_type: 'Summary Group',
      period: '2018',
      period_type: 'Standard',
      'AVG(decomp_volume)': 158924,
      'AVG(volume_for_roi)': 158733,
    },
    {
      group_type: 'Variable',
      period: '2020',
      period_type: 'Custom',
      'AVG(decomp_volume)': 59161.09375,
      'AVG(volume_for_roi)': 0,
    },
    {
      group_type: 'Variable',
      period: '2018',
      period_type: 'Custom',
      'AVG(decomp_volume)': 51089.4814814815,
      'AVG(volume_for_roi)': 14063.4814814815,
    },
    {
      group_type: 'Variable',
      period: 'Total Period',
      period_type: 'Standard',
      'AVG(decomp_volume)': 50911.8604651163,
      'AVG(volume_for_roi)': 20054.2325581395,
    },
    {
      group_type: 'Due To Group',
      period: 'Total Period',
      period_type: 'Standard',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Direct Due To Group',
      period: 'Total Period',
      period_type: 'Standard',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Direct Due To Group',
      period: 'Total Period',
      period_type: 'Custom',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Due To Group',
      period: 'Total Period',
      period_type: 'Custom',
      'AVG(decomp_volume)': 46566.6666666667,
      'AVG(volume_for_roi)': 46611.3333333333,
    },
    {
      group_type: 'Direct Due To Group',
      period: '2017',
      period_type: 'Standard',
      'AVG(decomp_volume)': 28899.6666666667,
      'AVG(volume_for_roi)': 28866.8333333333,
    },
    {
      group_type: 'Due To Group',
      period: '2017',
      period_type: 'Standard',
      'AVG(decomp_volume)': 28899.6666666667,
      'AVG(volume_for_roi)': 28866.8333333333,
    },
    {
      group_type: 'Due To Group',
      period: '2017',
      period_type: 'Custom',
      'AVG(decomp_volume)': 24882.7142857143,
      'AVG(volume_for_roi)': 24849.4285714286,
    },
    {
      group_type: 'Direct Due To Group',
      period: '2017',
      period_type: 'Custom',
      'AVG(decomp_volume)': 24882.7142857143,
      'AVG(volume_for_roi)': 24849.4285714286,
    },
    {
      group_type: 'Variable',
      period: '2019',
      period_type: 'Custom',
      'AVG(decomp_volume)': 21228.1333333333,
      'AVG(volume_for_roi)': 1576.13333333333,
    },
    {
      group_type: 'Variable',
      period: '2017',
      period_type: 'Custom',
      'AVG(decomp_volume)': 19966.2222222222,
      'AVG(volume_for_roi)': 17059.0740740741,
    },
    {
      group_type: 'Direct Due To Group',
      period: '2018',
      period_type: 'Standard',
      'AVG(decomp_volume)': 18454.1666666667,
      'AVG(volume_for_roi)': 18472.8333333333,
    },
    {
      group_type: 'Due To Group',
      period: '2018',
      period_type: 'Standard',
      'AVG(decomp_volume)': 18454.1666666667,
      'AVG(volume_for_roi)': 18472.8333333333,
    },
    {
      group_type: 'Variable',
      period: '2017',
      period_type: 'Standard',
      'AVG(decomp_volume)': 17069.5555555556,
      'AVG(volume_for_roi)': 17059.0740740741,
    },
    {
      group_type: 'Due To Group',
      period: '2018',
      period_type: 'Custom',
      'AVG(decomp_volume)': 15817.8571428571,
      'AVG(volume_for_roi)': 15833.8571428571,
    },
    {
      group_type: 'Direct Due To Group',
      period: '2018',
      period_type: 'Custom',
      'AVG(decomp_volume)': 15817.8571428571,
      'AVG(volume_for_roi)': 15833.8571428571,
    },
    {
      group_type: 'Variable',
      period: '2018',
      period_type: 'Standard',
      'AVG(decomp_volume)': 14052.8148148148,
      'AVG(volume_for_roi)': 14063.4814814815,
    },
    {
      group_type: 'Variable',
      period: 'Total Period',
      period_type: 'Custom',
      'AVG(decomp_volume)': 3035.81395348837,
      'AVG(volume_for_roi)': 20054.2325581395,
    },
    {
      group_type: 'Variable',
      period: '2019',
      period_type: 'Standard',
      'AVG(decomp_volume)': 1662.75,
      'AVG(volume_for_roi)': 1645.0625,
    },
    {
      group_type: 'Variable',
      period: '2020',
      period_type: 'Standard',
      'AVG(decomp_volume)': 0,
      'AVG(volume_for_roi)': 0,
    },
    {
      group_type: 'Direct Due To Group',
      period: '2020',
      period_type: 'Custom',
      'AVG(decomp_volume)': -1845345.7,
      'AVG(volume_for_roi)': 0,
    },
    {
      group_type: 'Due To Group',
      period: '2019',
      period_type: 'Custom',
      'AVG(decomp_volume)': -9489781,
      'AVG(volume_for_roi)': 745,
    },
  ],
};

export const withTotals = {
  datasource: {
    verboseMap: {
      group_type: 'Group Type',
    },
  },
  formData: {
    ...formDataWithTotals,
  },
  height: 400,
  queriesData: [queryData],
  width: 800,
};

export const withNoTotals = {
  datasource: {
    verboseMap: {
      group_type: 'Group Type',
    },
  },
  formData: {
    ...formDataWithTotals,
    showTotal: 'noTotal',
  },
  height: 400,
  queriesData: [queryData],
  width: 800,
};

export const singleRowCompact = {
  datasource: {
    verboseMap: {
      group_type: 'Group Type',
    },
  },
  formData: {
    ...formDataWithTotalsSingleRow,
    compactView: true,
  },
  height: 400,
  queriesData: [queryDataSingleRow],
  width: 800,
};

export const singleRowCompactWithNoTotals = {
  datasource: {
    verboseMap: {
      group_type: 'Group Type',
    },
  },
  formData: {
    ...formDataWithTotalsSingleRow,
    compactView: true,
    showTotal: 'noTotal',
  },
  height: 400,
  queriesData: [queryDataSingleRow],
  width: 800,
};
