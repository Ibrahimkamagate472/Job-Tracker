import Job from './Job'

export const jobReducer = (jobs, action) => {
  if (action.type === 'set') {
    return action.jobs
  }
  return jobs
}
