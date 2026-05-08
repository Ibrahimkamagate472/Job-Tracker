import { useEffect, useReducer } from 'react'
import { JobList, jobReducer, JobForm, JobCounter } from '../components/index'
import { Flex } from '@chakra-ui/react'
import axios from 'axios'

export default function SecondPage() {
  const [jobs, dispatch] = useReducer(jobReducer, [])

  useEffect(() => {
    const getJobs = async () => {
      try {
        const token = localStorage.getItem('token')
        const { data } = await axios.get('http://localhost:8000/jobs', {
          headers: {
            Authorization: `token ${token}`,
          },
        })

        dispatch({
          type: 'set',
          jobs: data,
        })
      } catch {
        dispatch({
          type: 'set',
          jobs: [],
        })
      }
    }
    getJobs()
  }, [])

  const addJob = async (
    name,
    position,
    date,
    response,
    username,
    password,
    listing
  ) => {
    const token = localStorage.getItem('token')
    const { data } = await axios.post(
      `http://localhost:8000/jobs`,
      {
        name,
        position,
        date,
        response,
        username,
        password,
        listing,
      },
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    )
    dispatch({
      type: 'set',
      jobs: [...jobs, data],
    })
  }

  const deleteJob = async (index) => {
    const job = jobs[index]
    const token = localStorage.getItem('token')
    await axios.delete(`http://localhost:8000/jobs/${job.id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })

    dispatch({
      type: 'set',
      jobs: jobs.filter((j) => j.id !== job.id),
    })
  }

  const editJob = async (
    index,
    name,
    position,
    date,
    response,
    username,
    password,
    listing
  ) => {
    const job = jobs[index]

    const token = localStorage.getItem('token')

    const { data } = await axios.put(
      `http://localhost:8000/jobs/${job.id}`,
      {
        ...job,
        name,
        position,
        date,
        response,
        username,
        password,
        listing,
      },
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    )
    dispatch({
      type: 'set',
      jobs: jobs.map((j) => (j.id === job.id ? data : j)),
    })
  }

  return (
    <div>
      <Flex gap={10}>
        <JobForm addJob={addJob} />
        <JobCounter jobs={jobs} />
      </Flex>
      <Flex mt={30}>
        <JobList jobs={jobs} deleteJob={deleteJob} editJob={editJob} />
      </Flex>
    </div>
  )
}
