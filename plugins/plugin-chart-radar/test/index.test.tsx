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
import { render } from '@testing-library/react';
import * as recharts from 'recharts';
import { supersetTheme, ThemeProvider } from '@superset-ui/core';
import RadarChartPlugin from '../src';
import transformProps from '../src/plugin/transformProps';
import { categoryPercentageDonutNoLegend, legendLeftWithoutLabels, legendTopPercentage } from './__mocks__/radarProps';
import RadarChart from '../src/RadarChart';

jest.mock('recharts');

describe('plugin-chart-piw', () => {
  const RechartsRadarChart = jest.fn(props => <div {...props} />);
  const Legend = jest.fn(() => <div />);
  const Radar = jest.fn(() => <div />);
  beforeEach(() => {
    // Recharts still have some UNSAFE react functions that failing test
    jest.spyOn(console, 'warn').mockImplementation(() => null);

    jest.clearAllMocks();

    // @ts-ignore
    recharts.RadarChart = RechartsRadarChart;
    // @ts-ignore
    recharts.Radar = Radar;
    // @ts-ignore
    recharts.Legend = Legend;
  });

  const getWrapper = (props: object) =>
    render(
      <ThemeProvider theme={supersetTheme}>
        {/*
       // @ts-ignore (no need emulate all props) */}
        <RadarChart {...transformProps(props)} />
      </ThemeProvider>,
    );

  it('exists', () => {
    expect(RadarChartPlugin).toBeDefined();
  });

  it('Chart with legend top / percentage labels ', () => {
    getWrapper(legendTopPercentage);
    expect({
      RadarChartProps: RechartsRadarChart.mock.calls[1],
      RadarProps: Radar.mock.calls[1],
      LegendProps: Legend.mock.calls[1],
    }).toMatchSnapshot();
  });

  it('Chart with legend left / without labels', () => {
    getWrapper(legendLeftWithoutLabels);
    expect({
      RadarChartProps: RechartsRadarChart.mock.calls[1],
      RadarProps: Radar.mock.calls[1],
      LegendProps: Legend.mock.calls[1],
    }).toMatchSnapshot();
  });

  it('Chart Donut with category and percentage labels / without legend', () => {
    getWrapper(categoryPercentageDonutNoLegend);
    expect({
      RadarChartProps: RechartsRadarChart.mock.calls[1],
      RadarProps: Radar.mock.calls[1],
    }).toMatchSnapshot();
    expect(Legend).not.toBeCalled();
  });
});
