import axios from '../api/axios'
import { errorMessage } from './index'

export function GetHabit({ token }, { demoMode }) {
  const headers = { Authorization: 'Bearer ' + token }
  return axios.get((demoMode ? '/public/' : '/') + 'habit', { headers })
    .then(({ data }) => Object({
      error: false,
      message: 'Welcome!',
      data,
    }))
    .catch((error) => {
      console.error(error);
      return Object({
        error: true,
        message: errorMessage(error),
        data: null,
      })
    })
}

export function CreateHabit({ token, values }, { demoMode }) {
  const headers = { Authorization: 'Bearer ' + token }
  return axios.post((demoMode ? '/public/' : '/') + 'habit', values, { headers })
    .then(({ data }) => Object({
      error: false,
      message: 'Done: Habit created',
      data,
    }))
    .catch((error) => {
      console.error(error);
      return Object({
        error: true,
        message: errorMessage(error),
        data: null,
      })
    })
}

export function UpdateHabit({ token, habitID, values }, { demoMode }) {
  const headers = { Authorization: 'Bearer ' + token }
  return axios.patch((demoMode ? '/public/' : '/') + 'habit/' + habitID, values, { headers })
    .then(() => Object({
      error: false,
      message: 'Done: Habit updated',
    }))
    .catch((error) => Object({
      error: true,
      message: errorMessage(error),
    }))
}

export function DeleteHabit({ token, habitID }, { demoMode }) {
  const headers = { Authorization: 'Bearer ' + token }
  return axios.delete((demoMode ? '/public/' : '/') + 'habit/' + habitID, { headers })
    .then(() => Object({
      error: false,
      message: 'Done: Habit deleted',
    }))
    .catch((error) => Object({
      error: true,
      message: errorMessage(error),
    }))
}
