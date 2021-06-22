import { Link } from 'react-router-dom'

function InstrumentCard({ id, name, image }) {
  return (
    <div className="column is-3">
      <Link to={`/instruments/${id}`}>
        <div className="card-inst">
          <div className="card-image-inst">
            <figure className="image image-is-1by1">
              <img className="cardimg" src={image} alt={name} />
            </figure>
          </div>
          <div className="card-header-inst">
            <div className="card-header-title-inst">{name}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default InstrumentCard