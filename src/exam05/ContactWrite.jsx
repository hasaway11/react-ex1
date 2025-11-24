import { useState } from 'react'
import api from './utils/api';
import { useNavigate } from 'react-router-dom';

function ContactWrite() {
  const [inputs, setInputs] = useState({name:'', address:'', tel:''});
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setInputs(prev=>({...prev, [name]:value}));
  }

  const handleProfile=(e)=>{
    // 비동기이므로 아래처럼 set하면 안된다
    //setProfile(e.target.files[0]);
    const file = e.target.files[0];

    // FileReader 객체 생성 (미리보기용)
    const reader = new FileReader();

    // 파일 읽기가 완료되면 실행되는 이벤트
    reader.onload=(event)=>{
      setPreview(event.target.result);
    }

    // 파일을 Data URL로 읽기
    reader.readAsDataURL(file);
    setPhoto(file);
  }

  const writeContact=()=>{
    console.log(inputs);
    if(!inputs.name || !inputs.address || !inputs.tel) {
      alert('이름, 연락처, 주소는 필수입력입니다');
      return;
    }
    const params = {name:inputs.name, address:inputs.address, tel:inputs.tel};
    api.post(`/`, new URLSearchParams(params)).then(res=>{
      const newNo = res.data.no;
      if(photo) {
        const formData = new FormData();
        formData.append('photo', photo);
        console.log(`/${newNo}/photo`);
        api.post(`/${newNo}/photo`, formData).then((res)=>{console.log(res.data)}).catch(err=>console.log(err));
      }
      navigate(`/read?no=${newNo}`);
    }).catch(err=>console.log(err));
  }

  return (
    <div>
      {preview && <img src={preview} style={{ height: '200px', objectFit: 'cover' }} alt="미리보기" />}
      <div className="mb-3 mt-3">
        <label className="form-label">프로필 사진:</label>
        <input type="file" className="form-control" name="profile" onChange={handleProfile} />
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label">이름:</label>
        <input className="form-control" name="name" onChange={handleChange} />
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label">주소:</label>
        <input className="form-control" name="address" onChange={handleChange}/>
      </div>
      <div className="mb-3 mt-3">
        <label className="form-label">연락처:</label>
        <input className="form-control" name="tel" onChange={handleChange}/>
      </div>
      <button className='btn btn-primary' onClick={writeContact}>추가</button>
    </div>
  )
}

export default ContactWrite