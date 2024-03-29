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
import { ChartProps } from '@superset-ui/core';
import { RadarChartData, RadarProps } from '../RadarChart';
import { LegendPosition } from '../utils';

type MetricObject<DK extends string> = {
  label: DK;
  column: {
    verbose_name: DK;
  };
};

type FormData<G extends string, DK extends string> = {
  colorScheme: string;
  groupby: G;
  // metric: {
  //   label: DK;
  // };
  colorPicker: string;
  showLegend: boolean;
  labelType: string;
  showLabels: boolean;
  legendPosition: LegendPosition;
  metric: MetricObject<DK>[];
};

export default function transformProps<G extends string, DK extends string>(chartProps: ChartProps): RadarProps<G, DK> {
  const { name, stroke, fill, width, height, formData, queriesData } = chartProps;
  const metric = formData.metric.map(({ label }) => label).sort();
  const {
    colorScheme,
    groupby,
    colorPicker,
    showLegend,
    labelType,
    showLabels,
    legendPosition,
  } = formData as FormData<G, DK>;
  const data = queriesData[0].data as RadarChartData<G, DK>[];

  return {
    name,
    stroke,
    fill,
    dataKey: metric[0],
    dataKey2: metric[1],
    width,
    legendPosition,
    height,
    data: data.filter(item => item[metric[0]] !== null).filter(item => item[groupby] !== null),
    baseColor: colorPicker,
    colorScheme,
    showLegend,
    showLabels: showLabels,
    groupBy: groupby,
    labelType,
  };
}
