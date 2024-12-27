import supabase from "./supabase";

export const signup = async ({ name, email, password }) => {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName: name,
        avatar: "/default-user.png",
      },
    },
  });

  const { error: cartError } = await supabase
    .from("carts")
    .insert([{ userId: data.user.id }]);
  const { error: wishlistError } = await supabase
    .from("wishlists")
    .insert([{ userId: data.user.id }]);

  if (signUpError) {
    throw new Error(signUpError.message);
  }
  if (cartError) {
    console.log(cartError.message);
    throw new Error(cartError.message);
  }
  if (wishlistError) {
    throw new Error(wishlistError.message);
  }

  return data;
};

export const signin = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const signout = async () => {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};

export const getCurrentUser = async () => {
  let { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
};
