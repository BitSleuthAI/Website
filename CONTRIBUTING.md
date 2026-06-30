# Contributing to BitSleuth Website

Thank you for your interest in contributing to the BitSleuth Website! This document provides guidelines and best practices for contributing to this project.

## 📚 Documentation Organization

**IMPORTANT: All markdown documentation files (`.md`) must be stored in the `docs/` folder.**

This ensures:
- Consistency across the project
- Easy discovery and navigation of documentation
- Clear separation between code and documentation
- Better organization as the project grows

### Current Documentation Files

The following documentation files are available in the `docs/` folder:
- `docs/PRD.md` - Product Requirements Document
- `docs/archive/SEO_STRATEGY.md` - SEO optimization strategy and guidelines
- `docs/todo.md` - Visual recommendations and UI/UX improvements

When creating new documentation (guides, specifications, strategies, etc.), always place it in the `docs/` directory.

## 🚀 Getting Started

### Prerequisites
- **Node.js**: 24.x (LTS — Node 20 is end-of-life)
- **npm**: Latest version
- **Git**: For version control

### Setting Up Your Development Environment

1. **Fork and Clone the Repository:**
   ```bash
   git clone <your-fork-url>
   cd Website
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables (Optional):**
   ```bash
   # Create .env.local if you need to configure environment variables
   # Example: NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   # Server runs on http://localhost:3000
   ```

5. **Verify Everything Works:**
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```

## 💻 Development Workflow

### Branch Strategy

- **Base Branch**: Create all feature branches from `dev`
- **Branch Naming**: Use descriptive names with prefixes:
  - `feature/` - For new features (e.g., `feature/add-wallet-comparison`)
  - `fix/` - For bug fixes (e.g., `fix/mobile-navigation`)
  - `docs/` - For documentation updates (e.g., `docs/update-api-guide`)
  - `refactor/` - For code refactoring (e.g., `refactor/component-structure`)

### Making Changes

1. **Create a Feature Branch:**
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes:**
   - Follow the code style and conventions outlined below
   - Write clean, readable, and maintainable code
   - Test your changes thoroughly

3. **Run Quality Checks:**
   ```bash
   npm run typecheck  # Check TypeScript types
   npm run lint       # Run ESLint
   npm run test       # Run Vitest tests
   npm run build      # Ensure production build works
   # Or run all checks at once:
   npm run ci         # Full CI pipeline (lint + typecheck + test + build)
   ```

4. **Commit Your Changes:**
   Use conventional commit messages:
   ```bash
   git commit -m "feat: add wallet comparison feature"
   git commit -m "fix: resolve mobile navigation issue"
   git commit -m "docs: update contributing guidelines"
   ```

   **Commit Message Prefixes:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, no functional changes)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

5. **Push and Create Pull Request:**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a pull request on GitHub targeting the `dev` branch.

## 📝 Code Style and Standards

### TypeScript
- **Strict Mode**: All code must pass TypeScript strict type checking
- **Type Definitions**: Properly define types for all functions, components, and data structures
- **No `any` Type**: Avoid using `any`; use proper types or `unknown` with type guards

### React and Next.js
- **Component Organization**:
  - Landing page components in `src/components/landing/`
  - UI primitives in `src/components/ui/` (shadcn/ui based)
  - App Router pages in `src/app/`
- **Server Components**: Use React Server Components by default
- **Client Components**: Use `'use client'` directive only when necessary
- **File Naming**: Use PascalCase for component files (e.g., `PricingSection.tsx`)

### Styling
- **Tailwind CSS**: Use utility classes for styling
- **Dark Mode**: Ensure all components support light and dark themes
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **shadcn/ui**: Use existing UI components; avoid creating custom variants unnecessarily

### Code Quality
- **No console.log**: Remove all `console.log` statements before committing
- **Error Handling**: Implement proper error handling and user feedback
- **Accessibility**: Follow WCAG guidelines; use semantic HTML and ARIA attributes
- **Performance**: Optimize images, lazy load components, and minimize bundle size

## 🧪 Testing

### Automated Testing

The project uses **Vitest** for unit and integration testing.

```bash
npm run test        # Run all tests
npm run typecheck   # TypeScript type checking
npm run lint        # ESLint code quality checks
npm run ci          # Full CI pipeline (lint + typecheck + test + build)
```

**Writing Tests:**
- Place test files next to the code they test (e.g., `utils.ts` → `utils.test.ts`)
- Use descriptive test names that explain what is being tested
- Follow existing test patterns in `/src/lib/` for examples
- Ensure tests are deterministic and don't depend on external services

### Manual Testing Checklist

Before submitting a pull request, verify:

- [ ] All routes load correctly
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Dark/light theme toggle functions properly
- [ ] Cookie consent banner displays and functions correctly
- [ ] Analytics tracking works (with proper consent gating)
- [ ] SEO metadata displays correctly (check page source)
- [ ] No console errors or warnings in browser
- [ ] TypeScript type checking passes (`npm run typecheck`)
- [ ] ESLint passes (`npm run lint`)
- [ ] All automated tests pass (`npm run test`)
- [ ] Production build succeeds (`npm run build`)

### Performance Testing

Consider running:
- Lighthouse audits for performance, accessibility, and SEO
- Core Web Vitals checks
- Bundle size analysis

## 📄 Documentation Guidelines

### When to Create Documentation

Create documentation in the `docs/` folder when:
- Adding a new major feature or product page
- Defining technical specifications or architecture
- Documenting strategies (SEO, marketing, analytics, etc.)
- Creating guides for development, deployment, or maintenance
- Defining processes or best practices

### Documentation Best Practices

- **Clear and Concise**: Write for your audience; avoid jargon when possible
- **Well-Structured**: Use headings, lists, and code blocks appropriately
- **Up-to-Date**: Update documentation when making related code changes
- **Examples**: Include code examples and use cases where relevant
- **Markdown Format**: Use proper Markdown syntax and formatting

## 🔍 Pull Request Process

### Before Submitting

1. **Self-Review**: Review your own code changes
2. **Test Thoroughly**: Complete the manual testing checklist
3. **Update Documentation**: If your changes affect documentation, update it
4. **Clean Commits**: Squash or rebase commits if necessary for a clean history
5. **Check CI**: Ensure all automated checks would pass

### Pull Request Template

When creating a pull request, include:

```markdown
## Description
[Brief description of what this PR does]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing
[Describe how you tested these changes]

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Checklist
- [ ] Code follows project conventions
- [ ] TypeScript type checking passes
- [ ] ESLint passes
- [ ] Production build succeeds
- [ ] Manual testing completed
- [ ] Documentation updated (if needed)
- [ ] No console.log statements in production code
```

### Review Process

1. **Submit PR**: Create pull request with clear description
2. **Automated Checks**: Wait for CI/CD checks to pass
3. **Request Review**: Request review from team members
4. **Address Feedback**: Respond to comments and make requested changes
5. **Approval**: Wait for approval from maintainers
6. **Merge**: Maintainer will merge once approved

## 🎯 Code Review Guidelines

### For Contributors

When your code is being reviewed:
- **Be Responsive**: Reply to comments promptly
- **Be Open**: Accept constructive feedback gracefully
- **Ask Questions**: If feedback is unclear, ask for clarification
- **Make Changes**: Address requested changes thoroughly

### For Reviewers

When reviewing code:
- **Be Respectful**: Provide constructive, respectful feedback
- **Be Specific**: Explain why changes are needed
- **Be Thorough**: Check code quality, functionality, and standards
- **Approve**: Approve once all concerns are addressed

### Review Checklist

- [ ] Code follows project conventions and style guide
- [ ] TypeScript types are properly defined
- [ ] No console.log statements in production code
- [ ] Components are properly documented
- [ ] Performance impact is considered
- [ ] Accessibility standards are met
- [ ] Responsive design is maintained
- [ ] Dark mode support is included
- [ ] Error handling is implemented
- [ ] Security best practices are followed

## 🐛 Bug Reports

When reporting bugs:
1. **Check Existing Issues**: Search for similar issues first
2. **Use Issue Template**: Follow the bug report template
3. **Provide Details**: Include reproduction steps, expected vs. actual behavior
4. **Add Context**: Browser, device, screenshots, error messages
5. **Be Clear**: Write clear, concise descriptions

## 💡 Feature Requests

When suggesting features:
1. **Check Existing Requests**: Search for similar feature requests
2. **Use Issue Template**: Follow the feature request template
3. **Explain Value**: Describe the problem and how this feature solves it
4. **Provide Examples**: Include examples, mockups, or use cases
5. **Consider Impact**: Think about implementation complexity and user impact

## 📞 Getting Help

If you need help:
- **Check Documentation**: Review `README.md` and files in `docs/` folder
- **Search Issues**: Look for similar questions or issues
- **Ask Questions**: Create a GitHub issue with your question
- **Community**: Reach out to the team through official channels

## 📜 License

By contributing to BitSleuth Website, you agree that your contributions will be licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See the `LICENSE` file for details.

---

**Thank you for contributing to BitSleuth! 🙏**

Built with ❤️ by the BitSleuth Team
