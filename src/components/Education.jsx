import { useState } from 'react';

export default function Education() {
  const [school, setSchool] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [studyDate, setStudyDate] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <section>
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="school">School Name:</label>
            <input
              id="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="studyTitle">Title of Study</label>
            <input
              id="studyTitle"
              type="text"
              value={studyTitle}
              onChange={(e) => setStudyTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="studyDate">Date of Study</label>
            <input
              id="studyDate"
              type="date"
              value={studyDate}
              onChange={(e) => setStudyDate(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{school}</p>
          <p>{studyTitle}</p>
          <p>{studyDate}</p>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}

    </section>
  );
}