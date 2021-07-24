## @pl-superset-ui/plugin-chart-waterfall

[![Version](https://img.shields.io/npm/v/@pl-superset-ui/plugin-chart-waterfall.svg?style=flat-square)](https://img.shields.io/npm/v/@pl-superset-ui/plugin-chart-waterfall.svg?style=flat-square)

This plugin provides Waterfall for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import WaterfallChartPlugin from '@pl-superset-ui/plugin-chart-waterfall';

new WaterfallChartPlugin()
  .configure({ key: 'behnamkvl-waterfall' })
  .register();
```

```js
<SuperChart
  chartType="behnamkvl-waterfall"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```