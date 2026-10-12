import { useState } from 'react';

export default function GeneralInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <section>
      <h2>General Information</h2>


      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}






    </section>
  );
}