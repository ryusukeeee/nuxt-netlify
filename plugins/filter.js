import vue from 'vue'
import { DateTime } from 'luxon'

vue.filter('formatDate', (value) => {
  const valueDate = DateTime.fromISO(value)
  return valueDate.toFormat('yyyy/MM/dd')
})
