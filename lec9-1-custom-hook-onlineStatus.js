import { useEffect, useState } from "react"

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  
  useEffect(() => {
    window.addEventListener('online', () => {
      setOnlineStatus(true);
    })

    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    })
  }, []);

  return onlineStatus;
}

// custom hook must start with 'use'
// every hook should execute at least once. Be careful while putting 'if' conditions

export default useOnlineStatus;