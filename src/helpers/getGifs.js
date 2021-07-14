export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3XiU7tNSbRr4WWh5LQcV7RnsFa5NTLpK&q=${encodeURI(
    category
  )}&limit=10`
  const resp = await fetch(url)
  const {data} = await resp.json()

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: {url},
      },
    }) => {
      return {
        id,
        title,
        url,
      }
    }
  )
  return gifs
}
