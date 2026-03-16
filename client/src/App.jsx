import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/msg').then((data) => {
      setMessage(data.data.message)
    });
  }, [])

  return (
    <div className="text-center">
      <div>GitFo</div>
      <div>
        {
          message == '' ?
            <p>Loading...</p>
            : <p>{message}</p>
        }
      </div>

    </div>
  )
}

export default App
