# shadcn/ui Update - January 2025

## Overview
This document tracks the shadcn CLI and component updates performed to keep the BitSleuth website current with the latest versions.

## Update Date
January 12, 2025

## Changes Made

### 1. shadcn CLI Version
- **Current Version**: 3.5.0 (latest)
- **Status**: ✅ Up to date

### 2. Radix UI Components Updated
All Radix UI primitives (the foundation of shadcn/ui components) were updated to their latest minor versions:

| Package | Previous | Updated | Change Type |
|---------|----------|---------|-------------|
| `@radix-ui/react-accordion` | 1.2.3 | 1.2.12 | Patch |
| `@radix-ui/react-alert-dialog` | 1.1.6 | 1.1.15 | Patch |
| `@radix-ui/react-avatar` | 1.1.3 | 1.1.11 | Patch |
| `@radix-ui/react-checkbox` | 1.1.4 | 1.3.3 | Minor |
| `@radix-ui/react-collapsible` | 1.1.11 | 1.1.12 | Patch |
| `@radix-ui/react-dialog` | 1.1.6 | 1.1.15 | Patch |
| `@radix-ui/react-dropdown-menu` | 2.1.6 | 2.1.16 | Patch |
| `@radix-ui/react-label` | 2.1.2 | 2.1.8 | Patch |
| `@radix-ui/react-menubar` | 1.1.6 | 1.1.16 | Patch |
| `@radix-ui/react-popover` | 1.1.6 | 1.1.15 | Patch |
| `@radix-ui/react-progress` | 1.1.2 | 1.1.8 | Patch |
| `@radix-ui/react-radio-group` | 1.2.3 | 1.3.8 | Minor |
| `@radix-ui/react-scroll-area` | 1.2.3 | 1.2.10 | Patch |
| `@radix-ui/react-select` | 2.1.6 | 2.2.6 | Minor |
| `@radix-ui/react-separator` | 1.1.2 | 1.1.8 | Patch |
| `@radix-ui/react-slider` | 1.2.3 | 1.3.6 | Minor |
| `@radix-ui/react-slot` | 1.2.3 | 1.2.4 | Patch |
| `@radix-ui/react-switch` | 1.1.3 | 1.2.6 | Minor |
| `@radix-ui/react-tabs` | 1.1.3 | 1.1.13 | Patch |
| `@radix-ui/react-toast` | 1.2.6 | 1.2.15 | Patch |
| `@radix-ui/react-tooltip` | 1.1.8 | 1.2.8 | Minor |

### 3. Supporting Packages Updated

| Package | Previous | Updated | Change Type |
|---------|----------|---------|-------------|
| `tailwind-merge` | 3.0.1 | 3.4.0 | Minor |
| `patch-package` | 8.0.0 | 8.0.1 | Patch |

### 4. Icon Library
- `lucide-react`: 0.475.0 (unchanged - already at latest wanted version)

## Verification Steps Performed

1. ✅ **Type Checking**: Passed with no errors
   ```bash
   npm run typecheck
   ```

2. ✅ **Linting**: Passed with no errors
   ```bash
   npm run lint
   ```

3. ✅ **Production Build**: Successful compilation
   ```bash
   npm run build
   ```

4. ✅ **Development Server**: Verified all routes load correctly
   - Homepage: ✅ Working
   - Analyzer page: ✅ Working
   - Glossary page: ✅ Working
   - All UI components: ✅ Rendering correctly

## Breaking Changes
- **None**: All updates were minor or patch versions that maintain backward compatibility
- No code changes were required in components
- All existing functionality preserved

## Benefits of This Update

1. **Bug Fixes**: Latest patches include bug fixes from Radix UI team
2. **Performance**: Minor improvements in component performance
3. **Security**: Latest versions include security patches
4. **Stability**: Improved stability and edge case handling
5. **Accessibility**: Enhanced accessibility features in newer Radix versions

## Files Modified
- `package-lock.json` - Updated dependency versions

## Next Steps
- Monitor for any issues in production
- Continue to check for updates quarterly
- Consider major version updates when available (with proper testing)

## Notes
- The `shadcn diff` command cannot be used in this environment due to network restrictions
- Updates were performed using `npm update` to respect semver ranges
- All updates follow semantic versioning principles (no breaking changes)
