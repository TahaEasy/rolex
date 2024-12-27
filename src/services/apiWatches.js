import supabase from "./supabase";

export const getWatches = async (from, to) => {
  const { data, error } = await supabase
    .from("watches")
    .select(
      `
      id,
      name,
      price,
      discount,
      description,
      image,
      created_at,
      brands (
        brandName
      )
    `
    )
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getSearchedWatches = async (search) => {
  const { data, error } = await supabase
    .from("watches")
    .select(
      `
      id,
      name,
      price,
      discount,
      description,
      image,
      created_at,
      brands (
        brandName
      )
    `
    )
    .ilike("name", `%${search}%`);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createWatch = async (createData) => {
  const { data, error } = await supabase.from("watches").insert(createData);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const uploadAllWatches = async (createData) => {
  const { error: deleteError } = await supabase
    .from("watches")
    .delete()
    .gt("id", 0);

  if (deleteError) {
    throw new Error(deleteError.message);
  }

  const { data, error } = await supabase.from("watches").insert(createData);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
