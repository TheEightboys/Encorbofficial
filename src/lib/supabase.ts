import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  (import.meta.env["VITE_SUPABASE_URL"] as string) ||
  "https://czzrqkuunyfecvnryssl.supabase.co";
const supabaseAnonKey =
  (import.meta.env["VITE_SUPABASE_ANON_KEY"] as string) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6enJxa3V1bnlmZWN2bnJ5c3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0OTA5NTQsImV4cCI6MjEwMzA2Njk1NH0.DwAzJn084oTYv11o8tiSWyug8DtkhTBJ6f4k87Cd8R8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

