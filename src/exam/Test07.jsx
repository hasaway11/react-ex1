4. 로그인 폼
javascriptfunction LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const handleLogin = () => {
    if (email && password) {
      setMessage(`${email}로 로그인 시도!`);
    } else {
      setMessage('이메일과 비밀번호를 입력하세요');
    }
  };
  
  return (
    <div>
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button onClick={handleLogin}>로그인</button>
      <p>{message}</p>
    </div>
  );
}
5. 탭 메뉴
javascriptfunction Tabs() {
  const [activeTab, setActiveTab] = useState('home');
  
  const content = {
    home: '홈 화면입니다',
    profile: '프로필 화면입니다',
    settings: '설정 화면입니다'
  };
  
  return (
    <div>
      <button onClick={() => setActiveTab('home')}>홈</button>
      <button onClick={() => setActiveTab('profile')}>프로필</button>
      <button onClick={() => setActiveTab('settings')}>설정</button>
      <p>{content[activeTab]}</p>
    </div>
  );
}
6. 타이머
javascriptfunction Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  
  return (
    <div>
      <p>시간: {seconds}초</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '정지' : '시작'}
      </button>
      <button onClick={() => setSeconds(0)}>초기화</button>
    </div>
  );
}