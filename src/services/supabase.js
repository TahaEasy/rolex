import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oxbjbirmgximydypglqg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94YmpiaXJtZ3hpbXlkeXBnbHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NzAyNzksImV4cCI6MjAyMzE0NjI3OX0.1vEeu7pBRRmY3gVFUCPdICy_yY8y7GAsQyvXgG1u8nU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
