import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password

    })
    .then(res => {
      console.log('Registered!')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      console.log("Hmm?", res);
      localStorage.setItem('usertoken', res.data)
      return res.data
    })
    .catch(err => {
      console.log("AAA!", err)
    })
}


export const getReview = review => {
  return axios
    .post('users/profile', {
      date_name: review.date_name,
      platform: review.platform,
      one_word: review.one_word,
      review: review.review
    })
    .then(res => {
      console.log("Hmm?", res);
     // localStorage.setItem('usertoken', res.data)
     // return res.data
    })
    .catch(err => {
      console.log("AAA!", err)
    })
}

/*export const getProfile = user => {
  return axios
    .get('users/profile', {
      // headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}*/

/*export const getReview = review => {
  return axios
  .post ('reviews/review', {
    date_name: review.date_name,
    platform: review.platform,
    one_word: review.one_word,
    review: review.review,
  })
  .then(res => {
    console.log('Review added.')
  })
} 
*/



