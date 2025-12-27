# Tailwind CSS Language Server Setup

This document describes the Tailwind CSS IntelliSense configuration for the BitSleuth Website project.

## Overview

The project includes the Tailwind CSS Language Server as a development dependency, providing enhanced IDE support for Tailwind CSS class names, including autocomplete, syntax highlighting, and validation.

## What's Included

### 1. Language Server Dependency
- **Package**: `@tailwindcss/language-server`
- **Version**: ^0.14.29
- **Type**: Development dependency
- **Installation**: Automatically installed with `npm install`

### 2. VSCode Configuration

#### Settings (`.vscode/settings.json`)
The following settings are configured for optimal Tailwind CSS support:

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "tailwindCSS.validate": true
}
```

**Configuration Explained:**
- **classRegex**: Enables IntelliSense for `cva()` (class-variance-authority) and `cx()` utility functions used throughout the codebase
- **includeLanguages**: Adds Tailwind support to TypeScript and TSX files
- **quickSuggestions**: Enables autocomplete inside string literals
- **css.validate**: Disabled to prevent conflicts with Tailwind's @apply directives
- **tailwindCSS.validate**: Enables Tailwind-specific validation

#### Recommended Extensions (`.vscode/extensions.json`)
The project recommends the following VSCode extensions:
- `bradlc.vscode-tailwindcss` - Tailwind CSS IntelliSense
- `dbaeumer.vscode-eslint` - ESLint integration
- `esbenp.prettier-vscode` - Code formatting

VSCode will automatically prompt you to install these extensions when you open the project.

## Features

### 1. Autocomplete
- Type `className="` and get instant suggestions for Tailwind classes
- Works in JSX/TSX files for all className attributes
- Supports `cva()` and `cx()` utility functions

### 2. Hover Preview
- Hover over any Tailwind class to see the generated CSS
- View color previews for color utilities
- See documentation links for complex utilities

### 3. Class Validation
- Invalid or misspelled Tailwind classes are highlighted
- Deprecated classes show warnings with upgrade suggestions
- Conflicts between classes are detected

### 4. Linting
- Ensures consistent ordering of Tailwind classes (if configured)
- Detects unused or redundant classes
- Warns about potential conflicts

## Usage Examples

### Basic Usage
```tsx
// Standard className
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
  {/* IntelliSense will suggest classes as you type */}
</div>
```

### With Class Variance Authority (cva)
```tsx
import { cva } from "class-variance-authority";

const button = cva("btn", {
  variants: {
    intent: {
      primary: "bg-blue-500 text-white",
      // IntelliSense works here too
      secondary: "bg-gray-500 text-white",
    }
  }
});
```

### With cx() Utility
```tsx
import { cx } from "@/lib/utils";

<div className={cx(
  "base-class",
  "hover:bg-blue-500", // IntelliSense works in cx() calls
  isActive && "active-class"
)}>
  Content
</div>
```

## Troubleshooting

### IntelliSense Not Working

1. **Check Extension Installation**
   - Ensure the Tailwind CSS IntelliSense extension is installed
   - Open Command Palette (Cmd/Ctrl + Shift + P)
   - Type "Extensions: Show Installed Extensions"
   - Verify `Tailwind CSS IntelliSense` is present

2. **Restart VSCode**
   - Sometimes the language server needs a restart
   - Close and reopen VSCode
   - Or use Command Palette: "Developer: Reload Window"

3. **Check Tailwind Config**
   - Ensure `tailwind.config.ts` exists in the project root
   - Verify the config is valid TypeScript/JavaScript

4. **Check File Type**
   - IntelliSense only works in supported file types
   - Supported: `.tsx`, `.jsx`, `.ts`, `.js`, `.html`

### Slow Performance

If IntelliSense feels slow:
1. Restart the language server: Command Palette → "Tailwind CSS: Restart Language Server"
2. Check VSCode's output panel for errors
3. Reduce the number of files in your workspace

### Conflicts with Other Extensions

If you experience conflicts:
1. Disable other CSS/styling extensions temporarily
2. Check for conflicting `css.validate` settings
3. Ensure only one Tailwind extension is active

## Additional Resources

- [Tailwind CSS IntelliSense Documentation](https://github.com/tailwindlabs/tailwindcss-intellisense)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Class Variance Authority](https://cva.style/docs)

## Manual Installation (Alternative)

If you prefer to install the language server globally instead of per-project:

```bash
npm install -g @tailwindcss/language-server
```

However, we recommend using the project's dev dependency to ensure version consistency across all developers.

## Contributing

When adding new Tailwind utilities or patterns:
1. Ensure they work with IntelliSense
2. Add custom regex patterns to `.vscode/settings.json` if needed
3. Document any special usage in this file
4. Test autocomplete functionality before committing

---

**Last Updated**: December 27, 2024
**Maintainer**: BitSleuth Development Team
