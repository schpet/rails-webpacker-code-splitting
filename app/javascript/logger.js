import { say } from 'cowsay-browser'


export default (message) => {
  const el = document.createElement('pre')
  el.innerText = say({ text: message })
  document.body.appendChild(el)
}
