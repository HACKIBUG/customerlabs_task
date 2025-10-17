# Save Segment — Vite + React demo

This repository is a small React app implementing the CustomerLabs "Save Segment" test flow.

## What it does
- Click **Save segment** to open a modal
- Enter a segment name
- Select a schema from the top dropdown and click **+Add new schema** to append it to the blue box
- Each appended schema is itself a dropdown — available options exclude already used schemas
- Remove slots, change selections, and click **Save the segment** to POST JSON to a webhook

## JSON payload format
```json
{
  "segment_name": "last_10_days_blog_visits",
  "schema": [
    { "first_name": "First name" },
    { "last_name": "Last name" }
  ]
}
```

## Run locally
1. Install dependencies

```bash
npm install
```

2. Run Frontend

```bash
npm run dev
```

Run node server

```bash
node index.js
```

3. Open http://localhost:5173

## Testing the POST
Replace the placeholder webhook URL in `src/components/SaveSegmentModal.jsx` with a webhook.site URL (create one at https://webhook.site). Save and click **Save the segment**. The payload will appear in webhook.site's inspector.

## Notes
- The UI is intentionally minimal and dependency-free so it's easy to review and run.
- If you want, I can convert this into a GitHub-ready repo ZIP or push to your repo text if you provide permissions.
