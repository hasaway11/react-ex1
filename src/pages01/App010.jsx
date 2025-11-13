function MyPage() {
  return (
    <div>
      내 정보입니다
    </div>
  );
}

function AuthWrapper({children, isLogin}) {
  if (!isLogin) {
    return <div>로그인페이지로 이동하는 로직</div>
  }
  
  return <>{children}</>;
}


function App() {
  return (
    <AuthWrapper>
      <MyPage />
    </AuthWrapper>
  )
}

export default App;