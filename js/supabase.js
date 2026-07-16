// Supabase client — replace with your project credentials
const SUPABASE_URL = "https://likyepdwiocvidjmcpsg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_A9EwnzWubWWs8IqJ5WRP0w_hSGhHhkO";

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
