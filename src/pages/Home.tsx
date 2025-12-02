import { useState } from 'react'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

export default function Home() {
  const [search, setSearch] = useState('')

  const filtered = rooms.filter((room) => {
    const query = search.toLowerCase()
    return (
      room.name.toLowerCase().includes(query) ||
      room.features.some((f) => f.toLowerCase().includes(query))
    )
  })

  return (
    <section className="container">
      <h1>Available Rooms</h1>
      <p>Choose a room and reserve a time to study.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search rooms by name or features (e.g., wifi, projector)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="rooms-grid">
        {filtered.length > 0 ? (
          filtered.map((r) => (
            <RoomCard key={r.id} room={r} />
          ))
        ) : (
          <p className="no-results">No rooms found matching "{search}"</p>
        )}
      </div>
    </section>
  )
}
