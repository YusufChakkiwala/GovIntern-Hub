## Contact form storage and email notifications

The Contact page saves submissions to Supabase and can email notifications via EmailJS REST API.

### Supabase

Create table `contact_messages` in your Supabase project:

```sql
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  category text
);

-- Optional: enable Row Level Security and allow inserts from anon if needed
alter table public.contact_messages enable row level security;
create policy "Allow inserts from anon" on public.contact_messages
  for insert to anon using (true) with check (true);
```

The client inserts via `src/lib/contact.ts` using the generated Supabase client.

### Email notifications (EmailJS REST)

Configure Vite env variables in `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Create an EmailJS template with params: `name`, `email`, `subject`, `message`, `category`, `to_email`.

If these env vars are not set, email sending is skipped while DB save still works.

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7b19b4e1-284f-4b43-991e-8b58717ab939

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7b19b4e1-284f-4b43-991e-8b58717ab939) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7b19b4e1-284f-4b43-991e-8b58717ab939) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
