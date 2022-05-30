import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',

  state: () => {
    return {
      idPaginationPage: null,
      modalDisplay: false,
      searchValue: '',
      cart: [],
      wishlist: []
    }
  },

  getters: {
    quantity: (state) => state.cart.length > 0 ? state.cart.map(q => q.quantity).reduce((a, b) => a + b) : 0,
    sum: (state) => state.cart.length > 0 ? state.cart.map(s => s.price * s.quantity).reduce((a, b) => a + b) : 0,
  },

  actions: {
    addToCart(id, image, name, size, price, quantity) {
      const product = this.cart.find(e => e.id === id && e.size === size)

      product ? product.quantity += quantity
        : this.cart.push({
          id: id,
          image: image,
          name: name,
          size: size,
          price: price,
          quantity: quantity
        })
    },
    changeQuantityProductCart(index, newQuantity) {
      this.cart[index].quantity = newQuantity
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    addToWishlist(id, image, name, slug, price) {
      this.wishlist.push({
        id: id,
        image: image,
        name: name,
        slug: slug,
        price: price
      })
    },
    removeFromWishlist(index) {
      this.wishlist.splice(index, 1)
    },    
    search(value){
      this.searchValue = value
    }
  },
});

