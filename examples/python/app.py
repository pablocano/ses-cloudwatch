#!/usr/bin/env python3
import os
import aws_cdk as cdk
from ses_cloudwatch_example.ses_stack import SesExampleStack

app = cdk.App()

SesExampleStack(app, "SesCloudWatchPythonExampleStack",
    # env=cdk.Environment(account=os.getenv('CDK_DEFAULT_ACCOUNT'), region=os.getenv('CDK_DEFAULT_REGION'))
)

app.synth()
