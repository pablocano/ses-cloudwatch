# ses-cloudwatch Python Example

This is a minimal AWS CDK (Python) example showing how to use the `ses-cloudwatch` construct (Python package name `ses-cloudwatch`, module import `ses_cloudwatch`) to forward Amazon SES sending events to CloudWatch Logs via EventBridge.

## Prerequisites

- Python 3.11+
- Node.js (to build the construct and run projen if developing locally)
- AWS credentials & a bootstrapped CDK environment

The included `.gitignore` excludes virtual environment, build artifacts, and CDK output (`cdk.out/`).

## Quick start (Makefile)

```bash
make setup     # create venv, upgrade pip, install deps & dev deps
make synth     # synthesize (alias of build)
make deploy    # deploy stack (no approval)
make test      # run pytest (if tests added)
make destroy   # tear down stack
```

To view all targets:

```bash
make help
```

Individual steps below if you prefer manual commands.

## Manual dependency install

Create and activate a virtual environment (recommended) then install deps:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Install the construct locally (before PyPI publish)

From repository root:

```bash
npx projen package:python
pip install dist/python/ses-cloudwatch-*.tar.gz
```

After publishing you can instead:

```bash
pip install ses-cloudwatch
```

## Synthesize

Using Makefile (`make synth`) or directly:

```bash
python app.py synth
```

## Deploy

Using Makefile (`make deploy`) or directly:

```bash
cdk deploy --require-approval never
```

Set env via `CDK_DEFAULT_ACCOUNT` and `CDK_DEFAULT_REGION` if necessary.

## Resources Created

- CloudWatch LogGroup(s)
- SES Configuration Set(s)
- EventBridge Rule(s)
- Configuration Set Event Destination(s)

## Clean Up

Using Makefile (`make destroy`) or directly:

```bash
cdk destroy --force
```

## License

Apache-2.0
