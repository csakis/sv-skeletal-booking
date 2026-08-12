import { DUFFEL_TOKEN } from "$env/static/private";
import { json } from "@sveltejs/kit";

export async function GET({url}) {
  const query = url.searchParams.get('query');
  const urlQuery = `https://api.duffel.com/places/suggestions?query=${encodeURIComponent(query)}`;
  const res = await fetch(urlQuery, {
    headers: {
      Authorization: `Bearer ${DUFFEL_TOKEN}`,
      "Duffel-Version": "v2",
      Accept: "application/json"
    }
  });
  const data = await res.json();
  return json(data);
}

