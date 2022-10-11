import { getCrypto } from "./Api/Crypto.api";
import { EventElement, Search } from "./Interface/interface";
import { DisplayUsd, RootObject } from "./Interface/Select.interface";
import { $form, $result, $selectCrypto } from "./variables";

export const objSelect: Search = {
  moneda: '',
  criptomonedas: ''
}

export const selectOption = (data: RootObject) => {
  data.Data.forEach( arr => {
    const { FullName, Name } = arr.CoinInfo
    const option = document.createElement('option')
    option.value = Name
    option.textContent = FullName

    $selectCrypto.appendChild(option)
  })
}

export const readValueMoney = (e: Event) => {
  const event = e as EventElement
  objSelect.moneda = event.target.value
  console.log(objSelect);
  
}
export const readValueCrypto = (e:Event ) =>{
  const event = e as EventElement
  objSelect.criptomonedas = event.target.value
  console.log(objSelect);
}

export const validateForm = async(e: Event) =>{
  e.preventDefault()
  if(!Object.values(objSelect).every( value => value !== '')){
    msgAlert('Todos los campos son obligatorios');
    return
  }
  await getCrypto()
}

export const writeHTML = (data: DisplayUsd) =>{
  clearHTML()
  const {CHANGE24HOUR, LOWDAY, PRICE, HIGHDAY} = data
  const primaryInfoCrypto = document.createElement('p')
  primaryInfoCrypto.classList.add('precio')

  primaryInfoCrypto.innerHTML = `
  El precio es : <span>${PRICE}</span>
  `

  const secondInfoCrypto = document.createElement('div')
  secondInfoCrypto.innerHTML = `
    <p>El precio mas alto del dia: <span>${HIGHDAY}</span></p>
    <p>El precio mas bajo del dia: <span>${LOWDAY}</span></p>
    <p>Variacion entre las ultimas 24h: <span>${CHANGE24HOUR}</span></p>
  `

  $result.appendChild(primaryInfoCrypto)
  $result.appendChild(secondInfoCrypto)
}

const msgAlert = (msg: string) => {
  if(!document.querySelector('.error')){
    const alert = document.createElement('div')
    alert.classList.add('error')
    alert.textContent = msg
    $form.appendChild(alert)
  
    setTimeout(() => {
      alert.remove()
    }, 3000);
  }
}

function clearHTML(){
  while($result.firstChild){
    $result.removeChild($result.firstChild)
  }
}