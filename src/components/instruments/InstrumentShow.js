import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleInstrument } from '../../lib/api'
import YoutubeEmbed from '../hooks/YouTubeEmbed'

function InstrumentShow() {
  const [instrument, setInstrument] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleInstrument(id)
        setInstrument(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  console.log(instrument)
  return (
    <section className="section instbg-show">
      <div className="container whitebg">
        {instrument ? (
          <div>
            <h2 className="title has-text-centered">{instrument.name}</h2>
            <br/>
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={instrument.image} alt={instrument.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  About
                </h4>
                <p>{instrument.description}</p>
                <br/><br/>
                <h4 className="title is-4">
                  Instrument Family
                </h4>

                <p>{instrument.instrumentFamily}</p>
                <br/><br/><br/><br/><br/><br/>
                <h4 className="title is-4">
                  What does it sound like?
                </h4>

                <YoutubeEmbed embedId={youTubeIds[instrument.name]} />
              </div>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>
    </section>
  )
}

const youTubeIds = {
  Violin: 'bQIUQzMMD8I',
  Viola: 'Eazw6wZlr9E',
  DoubleBass: 'yo_dItX5zGg',
  Harp: 'HSMAUXsU6Fk',
  Guitar: '9h5nEQpErJg',
  Oboe: 'gmqMxK0J2pY',
  Clarinet: 'FgzVC4jxtxg',
  Bassoon: 'KJtht57aASI',
  Saxophone: 'v09VpxRkPb4',
  Trumpet: 'PZoYrcJGjuc',
  FrenchHorn: 'Y8Ag7nvdZJU',
  Trombone: 'kYV-JxDfdYM',
  Tuba: 'QNjsmFdYnvA',
  Cornet: 'LlHvZoTWfu4',
  Xylophone: 'zyhnzdnFORw',
  Timpani: 'wgcMG4EijSo',
  Drums: 'KdmrxZTWSds',
  Piano: 'BM7Jkwqzdts',
  Cello: 'Y2lQNNoDukE',
  Flute: '6HyNydVIji4',
}

export default InstrumentShow