import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const KakaoRedirect: NextPage = () => {
  const router = useRouter();
  const { code, error: kakaoServerError } = router.query;
  console.log(code);
  const handleLogin = useCallback(async () => {
    // const response = await fetch("mw/KaKao/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     transactionNo: "transactionNo",
    //     condition: {
    //       code,
    //     },
    //     trackCd: "trackCd",
    //   }),
    // }).then((res) => res.json());
    console.log("로그인 성공1");
    router.push("/");

    // if (response.ok) {
    //   router.push("/");
    //   console.log("로그인 성공2");
    // } else {
    //   router.push("/404");
    // }
  }, [router]);

  useEffect(() => {
    if (code) {
      handleLogin();
    } else if (kakaoServerError) {
      router.push("/404");
    }
  }, [handleLogin, code, kakaoServerError, router]);
  return <div>로그인중...</div>;
};

export default KakaoRedirect;
