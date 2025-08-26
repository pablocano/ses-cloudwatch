#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { ExampleSesStack } from '../lib/example-ses-stack';

const app = new App();
new ExampleSesStack(app, 'SesCloudWatchExampleStack', {
  // You can set env here if you want to target a specific account / region
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
