import { useParams, useNavigate } from 'react-router-dom'
import { rooms } from '../data/rooms'
import { useState } from 'react'
import RoomCard from '../components/RoomCard'

export default function Reserve() {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = id ? rooms.find((r) => r.id === id) : null

  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')

  function submit(e: React.FormEvent) {
    e.preventDefault()
    // save reservation to localStorage (mock persistence)
    const reservation = {
      id: `res_${Date.now()}`,
      roomId: room?.id ?? null,
      roomName: room?.name ?? 'Unknown Room',
      requester: name,
      time,
      message,
      createdAt: new Date().toISOString(),
      note: ''
    }

    try {
      const key = 'studyhere_reservations'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      existing.unshift(reservation)
      localStorage.setItem(key, JSON.stringify(existing))
    } catch (err) {
      console.error('Failed to save reservation', err)
    }

    alert(`Reserved ${room ? room.name : 'a room'} for ${name} at ${time}`)
    navigate('/history')
  }

  return (
    <section className="container">
      <h1>Reserve {room ? room.name : 'a Room'}</h1>
      <div className="reserve-layout">
        <div className="reserve-form-section">
          <form onSubmit={submit} className="reserve-form">
            <label>
              Your name
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Time / Date
              <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g. 2025-12-01 14:00" required />
            </label>
            <label>
              Message to school (optional)
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Optional: request equipment, accessibility needs, etc." />
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button type="submit">Confirm Reservation</button>
              <button type="button" onClick={() => navigate(-1)}>Cancel</button>
            </div>
          </form>
        </div>
        {room && (
          <div className="reserve-room-preview">
            <h3>Room Details</h3>
            <RoomCard room={room} />
          </div>
        )}
      </div>
    </section>
  )
}
