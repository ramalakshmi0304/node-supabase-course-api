import { createClient } from "@supabase/supabase-js";
import dotenv from dotenv
dotenv.config()

const supabase = createClient(
SUPABASE_URL= process.env.SUPABASE_URL,
SUPABASE_KEY= process.env.SUPABASE_KEY
    
)

export default supabase;