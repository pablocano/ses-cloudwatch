import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Pablo Cano',
  authorAddress: 'pablo.cano@merapar.com',
  cdkVersion: '2.212.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'ses-cloudwatch',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/pablocano/ses-cloudwatch.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();