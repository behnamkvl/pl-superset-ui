## @pl-superset-ui/plugin-chart-composed

[![Version](https://img.shields.io/npm/v/@pl-superset-ui/plugin-chart-composed.svg?style=flat-square)](https://img.shields.io/npm/v/@pl-superset-ui/plugin-chart-composed.svg?style=flat-square)

This plugin provides Composed for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import ComposedChartPlugin from '@pl-superset-ui/plugin-chart-composed';

new ComposedChartPlugin()
  .configure({ key: 'behnamkvl-composed' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-composed) for more details.

```js
<SuperChart
  chartType="behnamkvl-composed"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```
