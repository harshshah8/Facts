import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oxnddtpybtorpuhulaar.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bmRkdHB5YnRvcnB1aHVsYWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwOTEyNTMsImV4cCI6MjAwNDY2NzI1M30.C7otKdq9TQDjapwG7PaRDM3tO6INBJeIk42S6PZdKWU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
