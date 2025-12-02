import { useEffect, useState } from 'react'
import { rooms } from '../data/rooms'
import RoomCard from '../components/RoomCard'

type Reservation = {
  id: string
  roomId: string | null
  roomName: string
  requester: string
  time: string
  message?: string
  createdAt: string
  note?: string
}

export default function History() {
  const [items, setItems] = useState<Reservation[]>([])

  useEffect(() => {
    const key = 'studyhere_reservations'
    try {
      const raw = localStorage.getItem(key) || '[]'
      setItems(JSON.parse(raw))
    } catch (err) {
      console.error('Failed to load reservations', err)
      setItems([])
    }
  }, [])

  function saveNote(id: string, note: string) {
    const key = 'studyhere_reservations'
    const updated = items.map((it) => (it.id === id ? { ...it, note } : it))
    setItems(updated)
    localStorage.setItem(key, JSON.stringify(updated))
  }

  function remove(id: string) {
    const key = 'studyhere_reservations'
    const updated = items.filter((it) => it.id !== id)
    setItems(updated)
    localStorage.setItem(key, JSON.stringify(updated))
  }

  return (
    <section className="container">
      <h1>Your Reservation History</h1>
      <p>All rooms you have booked are listed below. Add notes to remember anything you didn't like or need.</p>

      {items.length === 0 ? (
        <p className="no-results">No reservations yet.</p>
      ) : (
        <div className="rooms-grid">
          {items.map((res) => {
            const room = res.roomId ? rooms.find((r) => r.id === res.roomId) : null
            return (
              <div key={res.id} className="room-card">
                <div style={{ marginBottom: 8 }}>
                  {room ? (
                    <RoomCard room={room} />
                  ) : (
                    <h3>{res.roomName}</h3>
                  )}
                </div>
                <p><strong>When:</strong> {res.time}</p>
                <p><strong>Booked by:</strong> {res.requester}</p>
                {res.message && <p><strong>Message:</strong> {res.message}</p>}

                <label style={{ display: 'block', marginTop: 8 }}>
                  Notes
                  <textarea
                    value={res.note || ''}
                    onChange={(e) => saveNote(res.id, e.target.value)}
                    placeholder="Write notes about this room..."
                  />
                </label>
                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <button onClick={() => remove(res.id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
