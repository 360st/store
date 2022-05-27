
let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    let query = useQuery(event)
    response = await $fetch.raw(`https://cotti.pl/wp-json/wc/v3/products/?consumer_key=${key}&consumer_secret=${secret}&category=${event.context.params.list}&per_page=16&page=${query.strona}`).catch((error) => error.data)
    let totalPages = response.headers.get('x-wp-totalpages')
    return [{'data': response._data}, {'totalPages': totalPages}]
})
