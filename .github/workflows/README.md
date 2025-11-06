# GitHub Workflows for BitSleuth Website

## Copilot Agent Testing Workflow

The `copilot-test.yml` workflow provides a standardized testing environment for Copilot agents with all necessary environment variables pre-configured.

### Setup Instructions

#### Configure Repository Secrets

Go to **Settings > Secrets and variables > Actions > Repository secrets** and add the following Google Sheets credentials:

**Google Sheets (Server-side):**
- `GOOGLE_SHEETS_ID_FEEDBACK` - The Google Sheets spreadsheet ID for feedback/waitlist storage
  - Example: `1ERRAZFVNOTjvYyy9C7GgJ2igXsWkEvp41C86g07k0Cg`
  - Found in the Google Sheets URL: `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Service account email address
  - Example: `svc-feedback@bitsleuth.iam.gserviceaccount.com`
  - From your Google Cloud service account JSON file
- `GOOGLE_SHEETS_PRIVATE_KEY` - Service account private key
  - Full private key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
  - Keep the `\n` escape sequences for line breaks (e.g., `"-----BEGIN PRIVATE KEY-----\nMIIE...`)
  - From your Google Cloud service account JSON file

#### How to Get Google Sheets Credentials

1. **Create a Google Cloud Project** (if you don't have one):
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google Sheets API**:
   - In the Google Cloud Console, go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

3. **Create a Service Account**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Fill in the service account details and click "Create"
   - Skip optional steps and click "Done"

4. **Generate a Private Key**:
   - Click on the created service account
   - Go to the "Keys" tab
   - Click "Add Key" > "Create new key"
   - Select "JSON" format
   - Download the JSON file (contains `client_email` and `private_key`)

5. **Share Your Google Sheet**:
   - Open your Google Sheet
   - Click "Share" in the top-right
   - Add the service account email (from the JSON file) as an Editor
   - Copy the spreadsheet ID from the URL

### Usage

#### Automatic Triggers

The workflow is currently configured for manual triggers only. To enable automatic triggers, uncomment the following in `copilot-test.yml`:

```yaml
#  pull_request:
#    branches:
#      - main
#      - dev
#  push:
#    branches:
#      - main
```

#### Manual Trigger

Run the workflow manually:
1. Go to **Actions** tab in GitHub
2. Select **Copilot Agent Testing** workflow
3. Click **Run workflow**
4. Choose test type:
   - `full` - Complete build and validation (default)
   - `ui` - UI-focused testing
   - `api` - API endpoint testing

### What the Workflow Does

1. **Checkout** - Clones the repository
2. **Setup Node.js** - Installs Node.js 20 with npm caching
3. **Install dependencies** - Runs `npm ci` for clean install
4. **Create .env.local** - Generates environment file with Google Sheets credentials
5. **Type check** - Validates TypeScript types (non-blocking)
6. **Lint** - Runs ESLint checks (non-blocking)
7. **Build** - Builds the Next.js application
8. **Test summary** - Generates a summary of environment status

### Environment Variables Available

The following environment variables are available in the workflow:

| Variable | Type | Purpose |
|----------|------|---------|
| `GOOGLE_SHEETS_ID_FEEDBACK` | Secret | Google Sheets spreadsheet ID for feedback/waitlist |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Secret | Service account email for Google Sheets authentication |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Secret | Service account private key for Google Sheets authentication |

### Copilot Agent Usage

Copilot agents can reference this workflow to:
- Access pre-configured Google Sheets credentials
- Test waitlist/feedback functionality
- Run builds with production-like configuration
- Validate changes against the full application stack

### Example: Testing Waitlist API

The workflow provides everything needed to test the waitlist API endpoint (`/api/waitlist`):
- `GOOGLE_SHEETS_ID_FEEDBACK` for the target spreadsheet
- `GOOGLE_SHEETS_CLIENT_EMAIL` for authentication
- `GOOGLE_SHEETS_PRIVATE_KEY` for secure access

### Troubleshooting

**Build Failures:**
- Ensure all three Google Sheets secrets are configured
- Verify the service account has Editor access to the Google Sheet
- Check that the private key includes proper line breaks (`\n`)

**Google Sheets API Errors:**
- Confirm Google Sheets API is enabled in your Google Cloud project
- Verify the spreadsheet ID is correct
- Ensure the service account email has been shared with the spreadsheet

**Missing Environment Variables:**
- The workflow summary will show which variables are missing
- Add missing secrets as documented above

### Security Notes

- Never commit secrets to the repository
- Use Repository secrets for all sensitive data (private keys, credentials)
- Secrets are never exposed in workflow logs
- Keep your service account JSON file secure and never commit it to version control
- The private key should include `\n` escape sequences as they appear in the JSON file
