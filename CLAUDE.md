# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**convertr.tools** is a web application offering various online converter tools (HTML↔Markdown, JSON formatter, unit converters, text formatters, etc.). Built with Next.js 14, TypeScript, and Tailwind CSS.

## Common Development Commands

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14.2.23 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with dark theme (cyan/gray color scheme)
- **Font**: Local Geist fonts

### Project Structure
- **Main App**: `src/app/page.tsx` - Client-side rendered converter grid with search
- **Components**: Reusable UI components in `components/`
- **API Routes**: Logging endpoint at `pages/api/log.ts`
- **Config**: Application settings in `config.json`

### Current Implementation Status
- **Working Converters**: JSON Formatter, Markdown to HTML (2 of 8 planned)
- **Features**: Client-side search, category-based organization, dark theme
- **Styling**: Dark theme with cyan accents (different from blueprint's teal)

### Key Design Decisions
1. All converters are implemented as inline components in `page.tsx`
2. Client-side state management using React hooks
3. Dark theme by default with cyan color scheme
4. Responsive grid layout with Tailwind CSS

## Adding New Converters

When implementing new converters:
1. Add converter metadata to the `converters` array in `src/app/page.tsx`
2. Create a new component function following the pattern of `JsonFormatter` or `MarkdownToHtml`
3. Add the component to the conditional rendering logic
4. Ensure proper error handling and user feedback
5. Maintain consistent styling with cyan/gray color scheme

## Configuration

Key settings in `config.json`:
- App name, domain, SEO keywords
- User instructions for converter usage
- Placeholder ad configuration (not yet implemented)

## Development Notes

- The project uses a hybrid structure with both App Router (`src/app`) and Pages Router (`pages/`)
- TypeScript path alias configured: `@/*` → `./src/*`
- Tailwind content paths include both `src` and `pages` directories
- The original blueprint specified teal (#008080) but implementation uses cyan