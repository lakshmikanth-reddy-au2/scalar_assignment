import axios from 'axios'

const fetchKeywords = () => {
    return (axios({
      url : "http://localhost:8000/keywords",
      method : "GET"
    }).then(response => {
      return response.data
    })
    .catch(err => {
      Promise.reject(err)
    }))
  }

export default fetchKeywords