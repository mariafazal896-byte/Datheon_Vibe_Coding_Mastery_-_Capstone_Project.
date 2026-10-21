# FocusFlow AI — AI-Powered Study Planner

FocusFlow AI is a modern landing page for an AI-powered study planning concept designed to help students organize their learning goals, plan their study sessions, and improve their productivity.

This project was built using Bolt.new as part of the **Datheon Vibe Coding Mastery & Capstone Project**.

## Features

- **Modern Landing Page:** A clean, professional interface focused on student productivity.
- **Dark and Light Mode:** Switch between dark and light themes.
- **Responsive Design:** A layout designed for desktop and mobile screens.
- **Feature Sections:** Introduces the benefits of AI-assisted study planning.
- **Lead Capture Form:** Collects a visitor's name, email address, and plan interest.
- **Form Validation:** Validates required fields and basic email formatting.
- **Supabase Integration:** Stores lead submissions in a Supabase database.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- ESLint
- Bolt.new

## Live Demo

**Website:** https://focusflow-ai-landing-imvh.bolt.host/

## Getting Started

### Prerequisites

Install [Node.js (LTS)](https://nodejs.org/), which includes npm.

### Installation

1. Clone this repository:

   ```bash
  [View the GitHub Repository](https://github.com/mariafazal896-byte/Datheon_Vibe_Coding_Mastery_-_Capstone_Project)
   ```

2. Open the project folder:

   ```bash
   cd Datheon_Vibe_Coding_Mastery_-_Capstone_Project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure the required environment variables for Supabase, if needed.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

## Environment Variables

The project uses Supabase for lead storage. Depending on the current source code, environment variables may be required for the Supabase project URL and public client key.

For a typical Vite setup, the variables may look like:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_public_key
```

These are example variable names. Check the project source code for the exact names required.

**Security notes:**
- Never upload your real `.env` file to GitHub.
- Never expose Supabase service-role keys or private credentials.
- Configure Row Level Security (RLS) policies to protect database access.
- Use placeholder values in any example environment file.

## Lead Capture Form

The lead capture form is designed to validate visitor information and save submissions to Supabase.

**Email confirmation status:** Automatic confirmation emails are not currently configured. The form's success message does not mean that an email has been sent.

## Project Structure

The project includes the following main files and directories:

- `src/` — Application components and source code.
- `supabase/` — Supabase configuration or database migrations.
- `public/` — Public assets, if present.
- `index.html` — HTML entry point.
- `package.json` — Project scripts and dependencies.
- `package-lock.json` — Dependency lockfile.
- `vite.config.ts` — Vite configuration.
- `tailwind.config.js` — Tailwind CSS configuration.

## Future Improvements

- Integrate an email service for confirmation emails.
- Develop a personalized AI study-planning dashboard.
- Add more study productivity tools.
- Improve accessibility and automated testing.
- Introduce analytics for landing-page engagement.

## Project Purpose

This project demonstrates AI-assisted development through natural-language prompting, interactive user-interface design, responsive layouts, and database-connected lead capture.

It was developed as part of the **Datheon Vibe Coding Mastery & Capstone Project**.

## License

No license has been specified for this project yet.
r respective owners unless a license is added to this repository.
