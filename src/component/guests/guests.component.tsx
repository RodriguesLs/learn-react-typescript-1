import { useState } from 'react'

export const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);
  
  const addGuest = () => {
    setName('');
    setGuests([...guests, name]);
  }

  const removeGuest = (kickout: string) => {
    let g = guests.filter(g => g !== kickout);
    setGuests(g);
  }

  return (
    <div className='container border border-primary p-5 rounded'>
      <h3>Guest List</h3>
      <ul>
        {
          guests.map((guest, i) => {
            return <li key={i}>{guest}<button className="btn btn-sm btn-danger ml-5" onClick={() => removeGuest(guest)}>X</button></li>
          })
        }
      </ul>
      <div className='row'>
          <div className='col-6'>
            <input className="form-control" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className='col-auto'>
            <button className="btn btn-primary" onClick={addGuest}>Add guest</button>
          </div> 
      </div>
    </div>
  );
};
