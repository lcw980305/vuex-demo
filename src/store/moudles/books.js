export default {
  namespaced: true,
  state: {
    newBooks: [
      {
        name: 'javasript技术内幕',
        price: 100,
        img: 'https://img3m7.ddimg.cn/64/26/29120617-1_u_8.jpg'
      },
      {
        name: '数学之美',
        price: 44,
        img: 'https://img3m2.ddimg.cn/18/30/28538352-1_b_5.jpg'
      },
      {
        name: '认知天性',
        price: 40,
        img: 'https://img3m3.ddimg.cn/74/33/1732997153-3_u_3.jpg'
      }
    ]
  },
  mutations: {

  },
  getters: {
    sum (state) {
      /* reduce(函数【函数的参数：累加值，数组的每一项】，初始值)   ===》返回的是total或者是累加值  */
      // return state.newBooks.reduce((total,item)=>{
      //   return total+=item.price
      // },0)

      return state.newBooks.reduce((total, item) => total + item.price, 0)
    }
  },
  actions: {

  }

}
