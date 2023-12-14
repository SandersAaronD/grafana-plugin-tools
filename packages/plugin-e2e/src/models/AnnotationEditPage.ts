import { Expect } from '@playwright/test';
import { DataSourcePicker } from './DataSourcePicker';

import { PluginTestCtx, RequestOptions } from '../types';
import { GrafanaPage } from './GrafanaPage';

export class AnnotationEditPage extends GrafanaPage {
  datasource: DataSourcePicker;
  constructor(ctx: PluginTestCtx, expect: Expect<any>) {
    super(ctx, expect);
    this.datasource = new DataSourcePicker(ctx, expect);
  }

  /**
   * Executes the annotation query defined in the annotation page and returns the response promise
   * @param options - Optional. RequestOptions to pass to waitForResponse
   */
  async runQuery(options?: RequestOptions) {
    const responsePromise = this.ctx.page.waitForResponse((resp) => resp.url().includes('/query'), options);
    //TODO: add new selector and use it in grafana/ui
    await this.ctx.page.getByRole('button', { name: 'TEST' }).click();
    return responsePromise;
  }
}