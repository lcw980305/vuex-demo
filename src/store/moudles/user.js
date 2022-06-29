export default {
  namespaced: true,
  state: {
    userInfo: {
      name: 'tom',
      skills: ['龟山', '蛇山', '黄鹤楼'],
      address: '武汉长江大桥',
      logo: 'https://vuejs.org/images/logo.svg'
      //  https://www.runoob.com/wp-content/uploads/2016/02/react.png
    }
  },
  mutations: {
    changeLogo: function (state, { newLogo, second, uname }) {
      state.userInfo.logo = newLogo
      console.log(second)
      state.userInfo.name = uname
      console.log(state.userInfo.name)
    }
  },
  actions: {
    aset (context, m) {
      var n = 1
      setInterval(() => {
        n += m
        console.log(n)
      }, 500)
    }
  }

}
