let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    response = await $fetch(`http://kbspsogfae.cfolks.pl/wp-json/wc/v3/products/?consumer_key=${key}&consumer_secret=${secret}&slug=${event.context.params.product}`).catch((error) => error.data)
    return response[0]
})
