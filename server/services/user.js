import supabase from "../config/supabase.js";

export async function createUser(userData) {
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();

  if (error) throw new Error(error.message);
  return data;
}
