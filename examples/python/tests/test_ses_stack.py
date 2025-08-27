import aws_cdk as cdk
from aws_cdk import aws_ses as ses
from aws_cdk.assertions import Template, Match
import pytest

from ses_cloudwatch_example.ses_stack import SesExampleStack


def test_stack_resources(monkeypatch):
    """Synthesizes the example stack and asserts core SES resources exist with expected properties."""

    # Monkeypatch SesCloudWatch import guard if the package is not installed.
    # If ses_cloudwatch is not installed the stack constructor raises RuntimeError.
    try:
        import ses_cloudwatch  # noqa: F401
    except ImportError:
        pytest.skip("ses_cloudwatch package not installed; build Python dist then rerun test")

    app = cdk.App()
    stack = SesExampleStack(app, "TestStack")
    template = Template.from_stack(stack)

    # Configuration Set (default one and custom one)
    template.resource_count_is("AWS::SES::ConfigurationSet", 2)

    # Ensure custom configuration set name is present
    template.has_resource_properties("AWS::SES::ConfigurationSet", {
        "Name": "python-example-config-set"
    })

    # LogGroups: default + custom named
    template.resource_count_is("AWS::Logs::LogGroup", 2)
    template.has_resource_properties("AWS::Logs::LogGroup", Match.object_like({
        "LogGroupName": "/aws/ses/python-example"
    }))

    # EventBridge Rules: one per SesCloudWatch instance
    template.resource_count_is("AWS::Events::Rule", 2)

    # Event Destination(s) mapping to event bridge (one per config set)
    template.resource_count_is("AWS::SES::ConfigurationSetEventDestination", 2)

    # Check that the custom one includes the three event types
    template.has_resource_properties("AWS::SES::ConfigurationSetEventDestination", Match.object_like({
        "EventDestination": Match.object_like({
            "MatchingEventTypes": ["send", "reject", "delivery"]
        })
    }))
