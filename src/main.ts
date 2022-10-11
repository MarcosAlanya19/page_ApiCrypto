import { selectApi } from './assets/Api/Crypto.api';
import { readValueCrypto, readValueMoney, validateForm } from './assets/functions';
import './assets/style/app.css'
import './assets/style/normalize.css'
import './assets/style/skeleton.css'
import { $form, $selectCrypto, $selectMoney } from './assets/variables';

document.addEventListener('DOMContentLoaded', () => {
  // Value of crypto
  ValueOfCrypto()
  // Value of object selecteds
  $selectMoney.addEventListener('change', readValueMoney)
  $selectCrypto.addEventListener('change', readValueCrypto)

  // Validate Form
  $form.addEventListener('submit', validateForm)
});

async function ValueOfCrypto(){
  await selectApi()
}