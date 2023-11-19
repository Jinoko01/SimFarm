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
    loaderUrl: "build/Addgame.loader.js",
    dataUrl: "build/Addgame.data",
    frameworkUrl: "build/Addgame.framework.js",
    codeUrl: "build/Addgame.wasm",
  });

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
        width: "750px", 
        height: "500px",
        justifySelf: 'center', // 안됨
        alignSelf: 'center', // 안됨
      }}  unityProvider={unityProvider}/>
      <p>{`Coin : ${Coin}`}</p>
  </div>;
};

export default Game;
