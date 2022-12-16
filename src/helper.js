export const upLoadImage = async imagebase => {
  const clientId = "9c059832fa1e968"
  const auth = "Client-ID " + clientId
  const formData = new FormData()

  formData.append("image", imagebase)
  formData.append("type", "base64")

  const result = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: auth
    }
  })

  const response_body = await result.json()
  return response_body.data.link
}
