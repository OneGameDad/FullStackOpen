import axios from 'axios'
const allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const findUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getAll = () => {
	const request = axios.get(allUrl)
	return request.then(response => response.data)
}

const find = (filter) => {
	const request = axios.get(`${findUrl}${filter}`)
	return request.then(response => response.data)
}

export default { getAll, find }
