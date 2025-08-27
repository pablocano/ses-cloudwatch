import aws_cdk as cdk
from aws_cdk import aws_ses as ses
from constructs import Construct

# Once the Python packaging is produced (projen package:python) and installed, import like:
# from ses_cloudwatch import SesCloudWatch
# For now we include a placeholder import comment.

try:
    from ses_cloudwatch import SesCloudWatch  # type: ignore
except ImportError:
    SesCloudWatch = None  # Placeholder if package not yet installed locally


class SesExampleStack(cdk.Stack):
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        if SesCloudWatch is None:
            raise RuntimeError(
                "ses_cloudwatch package not installed. Build and install the Python dist first: "
                "npx projen package:python && pip install dist/python/ses-cloudwatch-<version>.tar.gz"
            )

        # Basic usage with defaults
        SesCloudWatch(self, "SesDefaults")

        # Custom usage capturing multiple events
        SesCloudWatch(
            self,
            "SesCustom",
            log_group_name="/aws/ses/python-example",
            configuration_set_name="python-example-config-set",
            events=[
                ses.EmailSendingEvent.SEND,
                ses.EmailSendingEvent.REJECT,
                ses.EmailSendingEvent.DELIVERY,
            ],
        )
