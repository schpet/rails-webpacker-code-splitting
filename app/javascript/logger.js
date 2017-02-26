import { say } from 'cowsay-browser'

export const xxxUnused = () => {
  console.log('never used!')
}

export default (message) => {
  const el = document.createElement('pre')
  el.innerText = say({ text: message })
  document.body.appendChild(el)
  console.log(message)
}
