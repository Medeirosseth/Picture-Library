import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2irqapHY0sIY2sqYZc9B3UzLPP1k14Eun8xYU791IUk"
  }
})


