/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { ChartProps, supersetTheme, ThemeProvider } from '@superset-ui/core';
import RadarChart from '../../plugins/plugin-chart-radar/src/RadarChart';
import { LabelTypes } from '../../plugins/plugin-chart-radar/src/utils';
import transformProps from '../../plugins/plugin-chart-radar/src/plugin/transformProps';
import { legendTopPercentage } from '../../plugins/plugin-chart-radar/test/__mocks__/radarProps';
import { extractTransformProps } from '../utils';

export default {
  title: 'Plugins/Radar Chart 2',
  component: RadarChart,
  parameters: {
    chromatic: { delay: 2000 },
  },
  argTypes: {
    data: { table: { disable: true } },
    dataKey: { table: { disable: true } },
    baseColor: { table: { disable: true } },
    colorScheme: { table: { disable: true } },
    groupBy: { table: { disable: true } },
    onClick: { table: { disable: true } },
    labelType: {
      control: {
        type: 'select',
        options: Object.values(LabelTypes),
      },
    },
  },
};

const DefaultTemplate = args => (
  <ThemeProvider theme={supersetTheme}>
    <RadarChart {...extractTransformProps({ args, props: legendTopPercentage, transformProps })} />
  </ThemeProvider>
);


export const Default = DefaultTemplate.bind({});
Default.args = {
  ...transformProps((legendTopPercentage as unknown) as ChartProps),
  queriesData: legendTopPercentage.queriesData,
};

