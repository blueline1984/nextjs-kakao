const SigninPage = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao",
      // redirectUri: "https://dev.passloan.kr/kakao-redirect",
    });
  };
  return (
    <>
      <h1>This is Signin Page</h1>
      <button onClick={kakaoLogin}>카카오로 로그인</button>
    </>
  );
};

export default SigninPage;
