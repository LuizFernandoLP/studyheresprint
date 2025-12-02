import { useNavigate } from 'react-router-dom'

type Room = {
  id: string
  name: string
  capacity: number
  features: string[]
  image: string
}

export default function RoomCard({ room }: { room: Room }) {
  const navigate = useNavigate()

  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-image" />
      <h3>{room.name}</h3>
      <p>Capacity: <strong>{room.capacity}</strong></p>
      <p>Features: {room.features.join(', ')}</p>
      <div className="card-actions">
        <button onClick={() => navigate(`/reserve/${room.id}`)}>Reserve</button>
      </div>
    </div>
  )
}
