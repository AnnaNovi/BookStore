export async function getQuantityOfFoundBooks(url:string) {
  return await fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.numFound;
    })
}