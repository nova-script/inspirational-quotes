async function fetchGraphQL(text: any, variables = {}): Promise<JSON> {
  const response = await fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  return await response.json();
}

export default fetchGraphQL;
