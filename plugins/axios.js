const {
  API_KEY
} = process.env;

export default async ({
  $axios
}) => {
  await $axios.onRequest((config) => {
    console.log(process.env.BASE_URL);
    config.headers.common['X-API-KEY'] = API_KEY
    return config
  })
  // errorLog
  $axios.onError((e) => {
    console.log(e.response)
  })
}
