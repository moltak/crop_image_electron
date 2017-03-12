export default [
  {
    path: '/',
    name: 'main',
    component: require('components/MainAppView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
