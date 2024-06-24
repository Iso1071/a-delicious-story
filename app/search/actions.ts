'use server'

import { sanitize } from "@/utils/sanitize";
import { redirect } from "next/navigation";

export async function doSearch(formData: FormData) {
  const data = {
    search: formData.get('search') as string,
  }

  const onlyAlphaNumeric = sanitize(data.search);

  redirect('/search?q=' + onlyAlphaNumeric);
}


