import request from 'superagent'

const rootUrl = '/'

export function getFoods () {
  return request.get(rootUrl + '/ingredients')
    .then(res => {
      console.log("Here is the thing from apiClient: " + res)
      return res.body
    })
}