import { App, Stack } from "aws-cdk-lib";
import { Template, Match } from "aws-cdk-lib/assertions";
import { SesCloudWatch } from "../src";

// Helper to get synthesized template
function synth(stack: Stack) {
  return Template.fromStack(stack);
}

describe("SesCloudWatch", () => {
  test("defaults - auto names when not provided", () => {
    const app = new App();
    const stack = new Stack(app, "TestStack");

    new SesCloudWatch(stack, "Subject");

    const template = synth(stack);

    // Configuration Set should have derived name
    template.hasResourceProperties("AWS::SES::ConfigurationSet", {
      Name: "TestStack-ses-config-set",
    });

    // LogGroup exists (name not specified => not asserting name)
    template.resourceCountIs("AWS::Logs::LogGroup", 1);

    // EventBridge rule with correct pattern
    template.hasResourceProperties("AWS::Events::Rule", {
      EventPattern: Match.objectLike({ source: ["aws.ses"] }),
    });
  });

  test("custom names respected", () => {
    const app = new App();
    const stack = new Stack(app, "AnotherStack");

    new SesCloudWatch(stack, "Subject", {
      logGroupName: "custom-loggroup-name",
      configurationSetName: "custom-config-set",
    });

    const template = synth(stack);

    template.hasResourceProperties("AWS::SES::ConfigurationSet", {
      Name: "custom-config-set",
    });

    template.hasResourceProperties("AWS::Logs::LogGroup", {
      LogGroupName: "custom-loggroup-name",
    });
  });
});
