let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    response = await $fetch(`https://cotti.pl/wp-json/wc/v3/products/?include=[${event.context.params.include}]/&consumer_key=${key}&consumer_secret=${secret}`).catch((error) => error.data)
    return response
})
