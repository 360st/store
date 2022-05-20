let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    response = await $fetch(`https://cotti.pl/wp-json/wc/v3/products/${event.context.params.product}/?consumer_key=${key}&consumer_secret=${secret}&slug=`).catch((error) => error.data)
    return response
})
