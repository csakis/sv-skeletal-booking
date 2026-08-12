import { DUFFEL_TOKEN } from "$env/static/private";
import { json } from "@sveltejs/kit";


export async function GET({url}) {
  const query = url.searchParams.get('query');
  // 2. Exact URL from the Duffel documentation
  const urlQuery = `https://api.duffel.com/places/suggestions?query=${encodeURIComponent(query)}`;
  console.log(urlQuery);
  // Call your external REST API here safely
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

