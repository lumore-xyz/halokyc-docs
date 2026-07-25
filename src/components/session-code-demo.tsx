"use client";

import { useState } from "react";

const examples = {
  node: {
    label: "Node.js",
    language: "JavaScript",
    code: `const response = await fetch(
  \`\${process.env.HALOKYC_API_URL}/api/v1/verifications/start\`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.HALOKYC_API_KEY,
    },
    body: JSON.stringify({
      external_user_id: "usr_01842",
      workflow_id: process.env.HALOKYC_WORKFLOW_ID,
    }),
  },
);

const session = await response.json();`,
  },
  python: {
    label: "Python",
    language: "Python",
    code: `import os
import requests

response = requests.post(
    f"{os.environ['HALOKYC_API_URL']}/api/v1/verifications/start",
    headers={
        "X-API-Key": os.environ["HALOKYC_API_KEY"],
    },
    json={
        "external_user_id": "usr_01842",
        "workflow_id": os.environ["HALOKYC_WORKFLOW_ID"],
    },
    timeout=15,
)
response.raise_for_status()

session = response.json()`,
  },
  curl: {
    label: "cURL",
    language: "Shell",
    code: `curl "$HALOKYC_API_URL/api/v1/verifications/start" \\
  --request POST \\
  --header "Content-Type: application/json" \\
  --header "X-API-Key: $HALOKYC_API_KEY" \\
  --data '{
    "external_user_id": "usr_01842",
    "workflow_id": "'"$HALOKYC_WORKFLOW_ID"'"
  }'`,
  },
} as const;

type ExampleKey = keyof typeof examples;

export function SessionCodeDemo() {
  const [active, setActive] = useState<ExampleKey>("node");
  const example = examples[active];

  return (
    <div className="halo-flow-card" aria-label="Session creation examples">
      <div className="halo-flow-header">
        <span>Start a verification</span>
        <span className="halo-live">API online</span>
      </div>

      <div
        className="halo-code-tabs"
        role="tablist"
        aria-label="Choose a programming language"
      >
        {(Object.keys(examples) as ExampleKey[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            aria-controls="session-code-panel"
            data-active={active === key}
            onClick={() => setActive(key)}
          >
            {examples[key].label}
          </button>
        ))}
      </div>

      <pre
        id="session-code-panel"
        className="halo-code"
        role="tabpanel"
        aria-label={`${example.language} session creation example`}
      >
        <code>{example.code}</code>
      </pre>

      <div className="halo-result">
        <span className="halo-dot" aria-hidden="true" />
        Session created · ready for hosted verification
      </div>
    </div>
  );
}
