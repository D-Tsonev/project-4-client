import React from 'react'
import { getAllInstruments } from '../../lib/api'

import InstrumentCard from './InstrumentCard'

function InstrumentsIndex() {
  const [instruments, setInstruments] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllInstruments()
        setInstruments(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <section className="section instbg">
      <div className="container">
        <div className="columns is-multiline">
          {instruments ? (
            instruments.map(instrument => <InstrumentCard key={instrument.id} {...instrument} />)
          ) : (
            <p>...loading</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default InstrumentsIndex