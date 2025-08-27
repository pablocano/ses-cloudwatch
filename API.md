# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesCloudWatch <a name="SesCloudWatch" id="ses-cloudwatch.SesCloudWatch"></a>

A construct that wires Amazon SES sending events into CloudWatch Logs via EventBridge.

It creates:
 - A CloudWatch LogGroup (optionally named) to store SES event logs
 - An SES Configuration Set (optionally named)
 - An EventBridge Rule that matches all SES events
 - A Configuration Set Event Destination that routes SEND events to the
   default EventBridge bus so they are captured by the rule and forwarded
   to the LogGroup.

#### Initializers <a name="Initializers" id="ses-cloudwatch.SesCloudWatch.Initializer"></a>

```typescript
import { SesCloudWatch } from 'ses-cloudwatch'

new SesCloudWatch(scope: Construct, id: string, props?: SesCloudWatchProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ses-cloudwatch.SesCloudWatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#ses-cloudwatch.SesCloudWatch.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#ses-cloudwatch.SesCloudWatch.Initializer.parameter.props">props</a></code> | <code><a href="#ses-cloudwatch.SesCloudWatchProps">SesCloudWatchProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="ses-cloudwatch.SesCloudWatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="ses-cloudwatch.SesCloudWatch.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="ses-cloudwatch.SesCloudWatch.Initializer.parameter.props"></a>

- *Type:* <a href="#ses-cloudwatch.SesCloudWatchProps">SesCloudWatchProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ses-cloudwatch.SesCloudWatch.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="ses-cloudwatch.SesCloudWatch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#ses-cloudwatch.SesCloudWatch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="ses-cloudwatch.SesCloudWatch.isConstruct"></a>

```typescript
import { SesCloudWatch } from 'ses-cloudwatch'

SesCloudWatch.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="ses-cloudwatch.SesCloudWatch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ses-cloudwatch.SesCloudWatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#ses-cloudwatch.SesCloudWatch.property.configurationSet">configurationSet</a></code> | <code>aws-cdk-lib.aws_ses.ConfigurationSet</code> | The SES Configuration Set whose events are being published. |
| <code><a href="#ses-cloudwatch.SesCloudWatch.property.eventRule">eventRule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | The EventBridge Rule that captures SES events. |
| <code><a href="#ses-cloudwatch.SesCloudWatch.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The CloudWatch LogGroup used to store SES event data. |

---

##### `node`<sup>Required</sup> <a name="node" id="ses-cloudwatch.SesCloudWatch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `configurationSet`<sup>Required</sup> <a name="configurationSet" id="ses-cloudwatch.SesCloudWatch.property.configurationSet"></a>

```typescript
public readonly configurationSet: ConfigurationSet;
```

- *Type:* aws-cdk-lib.aws_ses.ConfigurationSet

The SES Configuration Set whose events are being published.

---

##### `eventRule`<sup>Required</sup> <a name="eventRule" id="ses-cloudwatch.SesCloudWatch.property.eventRule"></a>

```typescript
public readonly eventRule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

The EventBridge Rule that captures SES events.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="ses-cloudwatch.SesCloudWatch.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The CloudWatch LogGroup used to store SES event data.

---


## Structs <a name="Structs" id="Structs"></a>

### SesCloudWatchProps <a name="SesCloudWatchProps" id="ses-cloudwatch.SesCloudWatchProps"></a>

Properties for `SesCloudWatch`.

#### Initializer <a name="Initializer" id="ses-cloudwatch.SesCloudWatchProps.Initializer"></a>

```typescript
import { SesCloudWatchProps } from 'ses-cloudwatch'

const sesCloudWatchProps: SesCloudWatchProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#ses-cloudwatch.SesCloudWatchProps.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | (Optional) Explicit name for the SES Configuration Set. |
| <code><a href="#ses-cloudwatch.SesCloudWatchProps.property.eventRuleName">eventRuleName</a></code> | <code>string</code> | (Optional) Explicit name for the EventBridge Rule that captures SES events. |
| <code><a href="#ses-cloudwatch.SesCloudWatchProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_ses.EmailSendingEvent[]</code> | (Optional) The events to capture from SES. |
| <code><a href="#ses-cloudwatch.SesCloudWatchProps.property.logGroupName">logGroupName</a></code> | <code>string</code> | (Optional) Explicit name for the CloudWatch LogGroup that will receive the SES event logs. |

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="ses-cloudwatch.SesCloudWatchProps.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

(Optional) Explicit name for the SES Configuration Set.

If not provided
a name will be derived using the pattern:
`${Stack.of(this).stackName}-ses-config-set`.

---

##### `eventRuleName`<sup>Optional</sup> <a name="eventRuleName" id="ses-cloudwatch.SesCloudWatchProps.property.eventRuleName"></a>

```typescript
public readonly eventRuleName: string;
```

- *Type:* string

(Optional) Explicit name for the EventBridge Rule that captures SES events.

If not provided a name will be derived using the pattern:
`${Stack.of(this).stackName}-ses-event-rule`.

---

##### `events`<sup>Optional</sup> <a name="events" id="ses-cloudwatch.SesCloudWatchProps.property.events"></a>

```typescript
public readonly events: EmailSendingEvent[];
```

- *Type:* aws-cdk-lib.aws_ses.EmailSendingEvent[]

(Optional) The events to capture from SES.

Defaults to SEND.

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="ses-cloudwatch.SesCloudWatchProps.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

(Optional) Explicit name for the CloudWatch LogGroup that will receive the SES event logs.

If omitted, the LogGroup name will be automatically
generated by CloudFormation.

---



