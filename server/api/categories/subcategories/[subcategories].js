let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    response = await $fetch(`http://kbspsogfae.cfolks.pl/wp-json/wc/v3/products/categories/?consumer_key=${key}&consumer_secret=${secret}&parent=${event.context.params.subcategories}`).catch((error) => error.data)
    return response
})
