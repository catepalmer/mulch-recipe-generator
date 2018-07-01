import request from 'superagent'

const rootUrl = '/'

export function getFoods () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}