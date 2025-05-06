import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function login(email: string, password: string) {
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return data.user;
}
