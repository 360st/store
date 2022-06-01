let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    response = await $fetch(`https://cotti.pl/wp-json/wc/v3/products/?consumer_key=${key}&consumer_secret=${secret}&search=${event.context.params.search}&per_page=24`).catch((error) => error.data)
    console.log(response)
    return response
})
