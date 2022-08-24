const { baseURL } = useRuntimeConfig()

const useApiFetch = async (url: string, options = {}) => {
  return await useFetch(`${baseURL}${url}`, options)
}

export default useApiFetch
