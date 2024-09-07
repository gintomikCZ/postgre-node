import db from './utils/db.js'

db.get('js6persons').then((data) => {
  // v data je pole všech persons
})

db.get('js6persons/54').then(record => {
  // v record je objekt osoby s id 54
})

db.get('js6personstasks?taskid=76').then((data) => {
  // v data pole všech spojovacích záznamů - lidi co pracují na úkolu s id 76
})

db.get('js6tasks?projectid=12').then(data => {
  // v data je pole tasků, které patří pod projekt s id 12
})