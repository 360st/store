
let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    let query = useQuery(event)
    response = await $fetch.raw(`http://kbspsogfae.cfolks.pl/wp-json/wc/v3/products/?consumer_key=${key}&consumer_secret=${secret}&per_page=16&page=${query.strona}&orderby=${query.orderby}&category=${event.context.params.list}`).catch((error) => error.data)
    let totalPages = response.headers.get('x-wp-totalpages')
    return [{'data': response._data}, {'totalPages': totalPages}]
})
