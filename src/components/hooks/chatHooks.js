import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    
    function handleStatusChange(status) {
      setIsOnline(status);
    }
    handleStatusChange(friendID===1?true:false)
    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });
//   return friendID===1?true:false
   return isOnline;
}
export default useFriendStatus;