import axios from 'axios'
import { DJANGO_BASE_URL } from '../constants'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const forumAxios = axios.create({
  baseURL: DJANGO_BASE_URL + '/api/jobs/',
  timeout: 30000
})

export function postJobAPI (action, postData) {
  let url = ''
  switch (action) {
    case 'create-new-job':
      url = 'create/'; break
    case 'edit-job':
      url = 'edit/'; break
  }
  if (!url) {
    throw new Error('URL không đúng!')
  }
  return forumAxios.post(url, postData)
}

export function getJobsListAPI (params) {
  return forumAxios.get('list/', { params })
}

export function checkJobAPI (params) {
  return forumAxios.get('check/', { params })
}

export function getMyJobsAPI (params) {
  return forumAxios.get('mine/', { params })
}

export function editJobAPI (params) {
  return forumAxios.get('edit/', { params })
}

export function getJobDetailAPI (params) {
  return forumAxios.get('detail/', { params })
}

export function getEmployerInfoAPI (params) {
  return forumAxios.get('employer-info/', { params })
}
