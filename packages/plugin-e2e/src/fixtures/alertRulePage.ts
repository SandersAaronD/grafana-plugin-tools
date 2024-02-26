import { TestFixture } from '@playwright/test';
import { PluginFixture, PluginOptions } from '../api';
import { AnnotationEditPage, AnnotationPage } from '../models';
import { PlaywrightCombinedArgs } from './types';
import { AlertRulePage } from '../models/AlertRulePage';

type AlertRulePageFixture = TestFixture<AlertRulePage, PluginFixture & PluginOptions & PlaywrightCombinedArgs>;

const annotationEditPage: AlertRulePageFixture = async ({ page, selectors, grafanaVersion, request }, use) => {
  const alertRulePage = new AlertRulePage({ page, selectors, grafanaVersion, request });
  await alertRulePage.goto();
  await use(alertRulePage);
};

export default annotationEditPage;
