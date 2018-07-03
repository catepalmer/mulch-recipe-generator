import request from 'superagent'

const rootUrl = '/'

export function getFoods () {
  return request.get(rootUrl + 'food/ingredients')
    .then(res => {
      return res.body
    })
}