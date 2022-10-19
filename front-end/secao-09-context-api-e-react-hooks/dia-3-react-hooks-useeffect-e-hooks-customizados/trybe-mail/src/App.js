import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [emailData, setEmailData] = useState([
    {
      id: 1,
      title: 'Email 1',
      status: 0,
    },
    {
      id: 2,
      title: 'Email 2',
      status: 0,
    },
    {
      id: 3,
      title: 'Email 3',
      status: 0,
    },
    {
      id: 4,
      title: 'Email 4',
      status: 0,
    },
  ]);

  const read = 1;
  const unread = 0;

  const handleReadEmail = (id, type) => {
    let newEmailData;
    if (id === null) {
      newEmailData = emailData.map((element) => ({ ...element, status: type }))
    } else {
      newEmailData = emailData.map((element) => {
        if(element.id === id) {
          return { ...element, status: type }
        }
        return element;
      });
    }
    setEmailData(newEmailData)
  };

  useEffect(() => {
    const isAllReaded = emailData.every((element) => element.status === read)
    console.log(isAllReaded);
    if(isAllReaded) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [emailData]);

  return (
    <div>
      <h1>TrybeMail</h1>
      <button type="button" onClick={() => handleReadEmail(null, read)}>Marcar todas como lida</button>
      <button type="button"  onClick={() => handleReadEmail(null, unread)}>Marcar todas como não lida</button>
      <ul>
        {
         emailData.map((element) => (
          <li key={element.id} className={element.status === 0 ? 'unread' : 'read'}>
            {element.title}
            <button type="button" onClick={() => handleReadEmail(element.id, read)}>Lida</button>
            <button type="button" onClick={() => handleReadEmail(element.id, unread)}>Não Lida</button>
          </li>
         ))
        }
      </ul>
    </div>
  );
}

export default App;
