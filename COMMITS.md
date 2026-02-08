# 📝 Professional Commit Messages Guide

Use this guide to create meaningful commit messages for this project.

## Commit Convention

Follow the pattern: `type(scope): description`

### Types:
- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code restructuring without changing functionality
- `style` - Formatting, CSS changes
- `docs` - Documentation changes
- `test` - Adding or updating tests
- `perf` - Performance improvements
- `chore` - Build process, dependencies

## Suggested Commits for This Project

```bash
# Initial setup
git init
git add .
git commit -m "chore: initialize sales dashboard project with vite and typescript"

# Feature development
git commit -m "feat: add KPI card component with trend indicators"
git commit -m "feat: implement sales data fetching with custom hook"
git commit -m "feat: create interactive sales chart with recharts"
git commit -m "feat: add team ranking component with top performers"
git commit -m "feat: implement filter panel for region and category"

# Refactoring
git commit -m "refactor: extract currency formatting to utility module"
git commit -m "refactor: separate filter logic into custom hook"
git commit -m "refactor: improve component composition in dashboard"

# Bug fixes
git commit -m "fix: handle empty state when no sales data available"
git commit -m "fix: correct date filtering logic in useSalesData hook"
git commit -m "fix: resolve chart rendering issue on mobile devices"

# Styling
git commit -m "style: improve responsive design for mobile screens"
git commit -m "style: enhance KPI card visual hierarchy"
git commit -m "style: add hover effects to interactive elements"

# Documentation
git commit -m "docs: add comprehensive README with setup instructions"
git commit -m "docs: document component props and usage examples"
git commit -m "docs: add inline comments explaining business logic"

# Performance
git commit -m "perf: memoize chart data transformation"
git commit -m "perf: optimize re-renders with useCallback in filter panel"

# Testing
git commit -m "test: add unit tests for calculation utilities"
git commit -m "test: add tests for useSalesData hook"
```

## Examples of Good vs Bad Commits

### ❌ Bad:
```bash
git commit -m "updates"
git commit -m "fix bug"
git commit -m "changes to dashboard"
git commit -m "wip"
```

### ✅ Good:
```bash
git commit -m "feat: add loading spinner to dashboard"
git commit -m "fix: correct revenue calculation in KPI metrics"
git commit -m "refactor: extract chart component for reusability"
git commit -m "docs: update README with deployment instructions"
```

## Tips

1. **Be specific**: Describe what changed and why
2. **Present tense**: "add feature" not "added feature"
3. **Capitalize**: First letter after colon should be lowercase
4. **Length**: Keep under 72 characters when possible
5. **Why over what**: If the change isn't obvious, explain why it was needed

## Git Workflow

```bash
# Start new feature
git checkout -b feature/team-ranking

# Make changes and commit often
git add src/components/dashboard/TeamRanking
git commit -m "feat: create team ranking component structure"

git add src/components/dashboard/TeamRanking/TeamRanking.module.css
git commit -m "style: add styles for team ranking list"

# Merge back to main
git checkout main
git merge feature/team-ranking
```
