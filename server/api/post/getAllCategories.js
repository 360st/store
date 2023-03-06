let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async () => {
    response = await $fetch(`http://kbspsogfae.cfolks.pl/wp-json/wc/v3/products/categories/?consumer_key=${key}&consumer_secret=${secret}&per_page=100`).catch((error) => error.data)
    return response 
})