import x from './x.js'
import jpg from './assets/image.jpg' // 得到图片路径

const div = document.createElement('div')
// 把图片路径放到 src 下
div.innerHTML = `
    <img src = "${jpg}"> 
`
document.body.appendChild(div)

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  const promise = import('./lazy') // 异步
  promise.then(
    (module) => {
      const fn = module.default
      fn()
    },
    () => {}
  )
}
document.body.insertBefore(button, div)
