# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js static site portfolio for Michael Endo, generated from resume data. The site features:
- Static site generation with Next.js
- TypeScript for type safety
- Tailwind CSS for styling
- Orange-themed design inspired by the avatar
- Responsive layout

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (usually on port 3000)
- `npm run build` - Build the static site for production
- `npm run lint` - Run ESLint

## Architecture

- `/app` - Next.js App Router pages and layouts
- `/data/resume.ts` - Resume data structure and content
- `/public` - Static assets including avatar image
- Static export configured in `next.config.ts`

## Notes

- The site is configured for static export (no server required)
- After building, the static files are in the `out` directory
- The avatar image provides the orange color theme (#ff8c42)