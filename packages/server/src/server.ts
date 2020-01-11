import { Open5eMonster } from '@rpg-tools/open5e'
import bodyParser from 'body-parser'
import express from 'express'

const main = async (): Promise<void> => {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', async (req, res) => {
    const open5eMonster = new Open5eMonster()

    const { monsters: wolves } = await open5eMonster.getMonstersByName('wolf')

    const monsters = wolves.map(wolf => {
      return {
        name: wolf.name,
        slug: wolf.slug,
        challengeRating: wolf.challenge_rating,
      }
    })

    res.send({ count: wolves.length, monsters })
  })

  const port = process.env.PORT || 4000

  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}

main()
