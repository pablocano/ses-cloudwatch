# ses-cloudwatch TypeScript Example

This is a minimal AWS CDK (TypeScript) application showing how to use the `SesCloudWatch` construct from the root project to forward Amazon SES sending events to CloudWatch Logs via EventBridge.

## Prerequisites

- Node.js 18+
- An AWS account & credentials configured (e.g. via `aws configure`)
- CDK bootstrapped in target account/region (`cdk bootstrap`)

## Install dependencies

From this example directory:

```bash
npm install
```

(Ensure the root library is built when you make changes to it: from repo root run `npx projen compile`).

## Synthesize

```bash
npm run synth
```

## Deploy

Set (or rely on) the default AWS account and region environment variables:

```bash
export CDK_DEFAULT_ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
export CDK_DEFAULT_REGION=us-east-1
npm run deploy
```

This will create:
- CloudWatch LogGroup (named `/aws/ses/event-bridge-test` in this example)
- SES Configuration Set `event-bridge-test-config-set`
- EventBridge Rule matching SES events for that configuration set only
- Event destination wiring SEND, REJECT, and DELIVERY events to the default EventBridge bus and then to the LogGroup

## Testing email events

After deployment, send an email using the configuration set header:

```
X-SES-CONFIGURATION-SET: event-bridge-test-config-set
```

Or when using an SES SendEmail API / SDK, specify the configuration set accordingly. Then check the CloudWatch LogGroup for events.

## Destroy

```bash
npm run destroy
```

## Modifying the example

Uncomment the minimal example in `lib/example-ses-stack.ts` to see default naming behavior. Adjust the `events` array to capture only the event types you need. The `eventRuleName` prop controls the internal identifier used when importing the default EventBus (and can assist with logical naming), while the EventBridge rule itself is auto-named unless future versions surface a `ruleName` prop.

## License

Apache-2.0 (example follows the main project license)
