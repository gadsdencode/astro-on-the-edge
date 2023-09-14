import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://axtvutsnzioxiyjjusky.supabase.co'; // From your Supabase project settings
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4dHZ1dHNuemlveGl5amp1c2t5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ2OTg5NjEsImV4cCI6MjAxMDI3NDk2MX0.yz87dpOtYde9LIE47jhdBBFFlK77KP5YhDcqVyzL09E'; // From your Supabase project settings

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
