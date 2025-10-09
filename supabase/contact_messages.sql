-- Enable UUID generator for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    category TEXT
);

-- Optional: Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_messages_category ON public.contact_messages(category);

-- Enable Row-Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create insert policy to allow anonymous users to submit contact messages
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE schemaname = 'public'
          AND tablename = 'contact_messages'
          AND policyname = 'Allow inserts from anon'
    ) THEN
        CREATE POLICY "Allow inserts from anon"
            ON public.contact_messages
            FOR INSERT
            TO anon
            USING (true)
            WITH CHECK (true);
    END IF;
END$$;

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';

