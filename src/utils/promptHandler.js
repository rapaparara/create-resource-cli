const readline = require('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

const ask = (question) =>
   new Promise((resolve) => rl.question(question, resolve))

const getFieldDetails = async () => {
   const fields = []
   let addMore = true

   while (addMore) {
      const validTypes = [
         'string',
         'number',
         'date',
         'boolean',
         'array',
         'object',
      ]

      const name = (await ask('Masukkan nama field: ')) || ''

      const type = await (async () => {
         let inputType
         do {
            inputType =
               (await ask('Tipe field (string, number, date, dsb.): ')) || ''
            inputType = inputType.trim().toLowerCase()

            if (!validTypes.includes(inputType)) {
               console.log(
                  `Tipe tidak valid. Silakan masukkan salah satu dari: ${validTypes.join(
                     ', '
                  )}`
               )
            }
         } while (!validTypes.includes(inputType))
         return inputType
      })()

      const isPrimaryInput = await ask('Apakah ini primary key? (y/n): ')
      const isPrimary =
         typeof isPrimaryInput === 'string' &&
         isPrimaryInput.trim().toLowerCase() === 'y'

      const validationInput = await ask(
         'Aturan validasi (misalnya, required|min:3): '
      )
      const validation =
         typeof validationInput === 'string' ? validationInput.trim() : ''

      fields.push({ name, type, isPrimary, validation })

      addMore = (await ask('Tambah field lain? (y/n): ')) === 'y'
   }

   return fields
}

module.exports = { ask, getFieldDetails }
