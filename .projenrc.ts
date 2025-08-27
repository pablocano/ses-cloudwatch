import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  name: "ses-cloudwatch",
  packageName: "ses-cloudwatch",
  author: "Pablo Cano",
  authorAddress: "pablo.cano@merapar.com",
  majorVersion: 1,
  cdkVersion: "2.212.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.8.0",
  jest: true,
  projenrcTs: true,
  repositoryUrl: "https://github.com/pablocano/ses-cloudwatch.git",
  keywords: [
    "aws",
    "aws-cdk",
    "cdk",
    "ses",
    "simple-email-service",
    "cloudwatch",
    "logs",
    "eventbridge",
    "email",
    "monitoring",
    "observability",
  ],

  gitignore: [".vscode"],

  releaseToNpm: true,
  prettier: true,

  publishToPypi: {
    distName: "ses-cloudwatch", // PyPI package name
    module: "ses_cloudwatch", // Python import path
  },
  license: "MIT",
  copyrightOwner: "Merapar Technologies Group B.V.",
});

project.synth();
