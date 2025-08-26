import { Stack, StackProps, aws_ses as ses } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SesCloudWatch } from 'ses-cloudwatch';

export class ExampleSesStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Minimum usage (defaults)
    // new SesCloudWatch(this, 'SesDefaults');

    // Custom usage capturing several events
    new SesCloudWatch(this, 'SesCustom', {
      logGroupName: '/aws/ses/event-bridge-test',
      configurationSetName: 'event-bridge-test-config-set',
      eventRuleName: 'ses-event-rule',
      events: [
        ses.EmailSendingEvent.SEND,
        ses.EmailSendingEvent.REJECT,
        ses.EmailSendingEvent.DELIVERY,
      ],
    });
  }
}
