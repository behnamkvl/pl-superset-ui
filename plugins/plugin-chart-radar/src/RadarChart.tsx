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
import React, { useState, FC, useEffect, memo, useRef, useCallback } from 'react';
import { styled, t, CategoricalColorNamespace } from '@superset-ui/core';
import {
  RadarChart as RechartsRadarChart,
  Radar as RechartsRadar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
  RechartsFunction,
  Legend,
  RadarProps as RechartsRadarProps,
  LegendType,
} from 'recharts';
import { LegendPosition, renderActiveShape, getLegendProps, ActiveShapeProps } from './utils';

export const LABELS_MARGIN = 100;

type EventData = {
  color: string;
  id: string;
  type: LegendType;
  value: string;
};

type RadarStylesProps = {
  height: number;
  width: number;
  legendPosition: LegendPosition;
};

type GroupBy<G extends string> = Record<G, string>;

export type RadarChartData<G extends string, DK extends string> = GroupBy<G> & Record<DK, number>;

export type RadarProps<G extends string = string, DK extends string = string> = {
  name: string,
  stroke: string,
  fill: string,
  height: number;
  width: number;
  data: RadarChartData<G, DK>[];
  dataKey: DK;
  dataKey2: DK;
  onClick?: RechartsFunction;
  colorScheme: string;
  baseColor: string;
  legendPosition: LegendPosition;
  showLegend: boolean;
  showLabels: boolean;
  groupBy: G;
  labelType: string;
};

const Notification = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  border-radius: ${({ theme }) => theme.gridUnit * 2}px;
  color: ${({ theme }) => theme.colors.info.dark1};
  background-color: ${({ theme }) => theme.colors.info.light1};
`;

const Styles = styled.div<RadarStylesProps>`
  border-radius: ${({ theme }) => theme.gridUnit * 2}px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  overflow: auto;

  & .recharts-legend-item {
    cursor: pointer;
    white-space: nowrap;
  }
`;

const RadarChart: FC<RadarProps<string, string>> = memo(props => {
  const {
    name,
    stroke,
    fill,
    dataKey,
    dataKey2,
    data,
    height,
    width,
    colorScheme,
    showLegend,
    showLabels,
    groupBy,
    labelType,
    legendPosition,
  } = props;
  const [notification, setNotification] = useState<string | null>(null);
  const [disabledDataKeys, setDisabledDataKeys] = useState<string[]>([]);
  const [legendWidth, setLegendWidth] = useState<number | null>(0);
  const [updater, setUpdater] = useState<number>(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const isSideLegend =
    showLegend && (legendPosition === LegendPosition.right || legendPosition === LegendPosition.left);

  const currentData = data.filter(item => !disabledDataKeys.includes(item[groupBy]));
  const isExplore = window.location.pathname.includes('/explore');

  useEffect(() => {
    if (isSideLegend && rootRef.current) {
      const legend = rootRef.current.querySelector('.recharts-legend-wrapper');
      const currentWidth = legend?.getBoundingClientRect()?.width || null;
      if (currentWidth !== legendWidth) {
        setLegendWidth(currentWidth ? currentWidth + 20 : currentWidth);
      }
    }
  }, [updater, isSideLegend, legendWidth]);

  useEffect(() => {
    if (isSideLegend) {
      setLegendWidth(0);
    }
  }, [isSideLegend, props]);

  const forceUpdate = useCallback(() => setUpdater(Math.random()), []);

  useEffect(() => {
    forceUpdate();
  }, [forceUpdate, props]);

  const closeNotification = () => setNotification(null);


  const chartMargin = showLabels ? LABELS_MARGIN : 20;

  const handleLegendClick = ({ id }: EventData) => {
    let resultKeys = [];
    if (disabledDataKeys.includes(id)) {
      resultKeys = disabledDataKeys.filter(item => item !== id);
    } else {
      resultKeys = [...disabledDataKeys];
      resultKeys.push(id);
    }
    setDisabledDataKeys(resultKeys);
  };

  const chartHeight = height;
  const outerRadius = (width < chartHeight ? width : chartHeight) / 2 - chartMargin;
  const chartWidth =
    isSideLegend && legendWidth ? Math.max((outerRadius + chartMargin) * 2 + legendWidth, width) : width;

  const radarProps: RechartsRadarProps & { key?: string | number } = {
    // name: 'aaaa',
    // stroke: '#8884d8',
    // fill: '#8884d8',
    name,
    stroke,
    fill,
    key: updater,
    data: currentData,
    dataKey,
    dataKey2,
    label: showLabels
      ? labelProps => renderActiveShape({ ...labelProps, groupBy, labelType } as ActiveShapeProps)
      : false,
  };


  return (
    <Styles height={height} width={width} legendPosition={legendPosition} ref={rootRef}>
      {notification && <Notification onClick={closeNotification}>{notification}</Notification>}
      <RechartsRadarChart key={updater} width={chartWidth} height={height} data={currentData} >
      <PolarGrid />
      <PolarAngleAxis dataKey={groupBy} />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
        {/* {showLegend && (
          <Legend
            onClick={handleLegendClick}
            {...getLegendProps(legendPosition, height, legendWidth)}
            iconType="square"
            iconSize={10}
            payload={data.map(item => ({
              value: item[groupBy],
              id: item[groupBy],
              payload: item,
              type: disabledDataKeys.includes(item[groupBy]) ? 'line' : 'circle',
              color: CategoricalColorNamespace.getScale(colorScheme)(item[groupBy]),
            }))}
          />
        )} */}
        {/* {((isSideLegend && legendWidth) || !isSideLegend) && (
          <RechartsRadar {...radarProps} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}>
          </RechartsRadar>
        )} */}
      <RechartsRadar dataKey={radarProps.dataKey} stroke="#1df5a9" fill="#6ddeb6" fillOpacity={0.1} />
      <RechartsRadar dataKey={radarProps.dataKey2} stroke="#f77e8c" fill="#f7a1ab" fillOpacity={0.1} />
      <Legend />
      </RechartsRadarChart>
    </Styles>
  );
});

export default RadarChart;
