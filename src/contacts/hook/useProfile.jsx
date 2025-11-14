import { useState } from 'react'

function useProfile() {
  const [profile, setProfile] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);

  const change = (e)=>{
    const file = e.target.files[0];
    setProfile(file);

    if(file) {
      const reader = new FileReader();
      reader.onload = ()=>setProfileUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setProfileUrl(null);
    }
  }

  return {profile, profileUrl, change};
}

export default useProfile