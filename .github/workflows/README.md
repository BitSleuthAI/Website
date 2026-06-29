# GitHub Workflows for BitSleuth Website

## Copilot Agent Testing Workflow

The `copilot-test.yml` workflow provides a standardized testing environment for Copilot agents to build, test, and validate the BitSleuth website.

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
   - `build` - Build-focused testing
   - `ui` - UI-focused testing

### What the Workflow Does

1. **Checkout** - Clones the repository
2. **Setup Node.js** - Installs Node.js 22 with npm caching
3. **Install dependencies** - Runs `npm ci` for clean install
4. **Type check** - Validates TypeScript types (non-blocking)
5. **Lint** - Runs ESLint checks (non-blocking)
6. **Build** - Builds the Next.js application
7. **Start server** - Starts the Next.js production server in the background
8. **Health check** - Verifies the website is accessible and responsive
9. **Test summary** - Generates a summary of test results

### Copilot Agent Usage

Copilot agents can reference this workflow to:
- Run builds with production-like configuration
- Validate changes against the full application stack
- Test website accessibility and navigation
- Verify TypeScript types and ESLint compliance

### Troubleshooting

**Build Failures:**
- Check TypeScript errors: `npm run typecheck`
- Verify ESLint compliance: `npm run lint`
- Clear cache: `rm -rf .next` and rebuild

**Server Start Failures:**
- Ensure port 3000 is available
- Check for build errors in the previous step
- Verify all dependencies are installed correctly

**Health Check Failures:**
- Confirm the server started successfully
- Check server logs for runtime errors
- Verify the application is listening on the correct port

### Security Notes

- Never commit secrets to the repository
- Use Repository secrets for sensitive environment variables
- Secrets are never exposed in workflow logs
- Follow best practices for dependency management and security updates
