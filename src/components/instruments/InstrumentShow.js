import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleInstrument } from '../../lib/api'

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

  return (
    <section className="section">
      <div className="container">
        {instrument ? (
          <div>
            <h2 className="title has-text-centered">{instrument.name}</h2>
            <hr />
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
                <hr />
                <h4 className="title is-4">
                  Instrument Family
                </h4>
                <hr />
                <p>{instrument.instrumentFamily}</p>
                <hr />
                <h4 className="title is-4">
                  What does it sound like?
                </h4>
                <hr />
                <p>{instrument.media}</p>
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

export default InstrumentShow