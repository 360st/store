let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    const query = useQuery(event)
    response = await $fetch(`https://cotti.pl/wp-json/wc/v3/products/${event.context.params.id}/variations/${query.param}/?consumer_key=${key}&consumer_secret=${secret}`).catch((error) => error.data)
    return response
})