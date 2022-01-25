export default async ({
  $axios,
  $config
}) => {
  await $axios.onRequest((config) => {
    console.log($config.API_KEY);
    config.headers.common['X-API-KEY'] = $config.API_KEY
    return config
  })
  // errorLog
  $axios.onError((e) => {
    console.log(e.response)
  })
}
