import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
  const [Coin, setCoin] = useState(0);

  const {
    unityProvider,
    sendMessage, // unity 함수를 호출하기 위한 sendMessage 추가
    addEventListener, // unity -> react 통신
    removeEventListener, // unity -> react 통신
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "build/ADV_Game1.loader.js",
    dataUrl: "build/ADV_Game1.data",
    frameworkUrl: "build/ADV_Game1.framework.js",
    codeUrl: "build/ADV_Game1.wasm",
  });

  // +5는 테스트 코드
  // 아직 Game/index.jsx가 Store/index.jsx의 변수 증가를 할 줄 모름
  const setScoreUp = useCallback((curScore) => {
    setCoin(curScore + 5);
  }, []);
  // const reactScoreUp = (value) =>{
  //   setCoin(preCoin => preCoin + value);
  // }

  useEffect(() => {
    addEventListener("reactScoreUp", setScoreUp);

    return () => {
      detachAndUnloadImmediate().catch((reason) => {
        console.log(reason);
      });
      removeEventListener("reactSpeedUp", setScoreUp);
    };
  }, [
    detachAndUnloadImmediate,
    addEventListener,
    removeEventListener,
    setScoreUp,
  ]);

  return <div>
    <Unity style={{
        width: "960px", 
        height: "540px",
        justifySelf: 'center', // 안됨
        alignSelf: 'center', // 안됨
      }}  unityProvider={unityProvider}/>
      <p>{`Coin : ${Coin}`}</p>
  </div>;
};

export default Game;
