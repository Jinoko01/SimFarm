import React from "react";
import { useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../style/GlobalCSS.scss";

const Game = ({onIncrease}) => {
  const {
    unityProvider,
    // sendMessage, // unity 함수를 호출하기 위한 sendMessage 추가
    addEventListener, // unity -> react 통신
    removeEventListener, // unity -> react 통신
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: "build/Adv_unity.loader.js",
    dataUrl: "build/Adv_unity.data",
    frameworkUrl: "build/Adv_unity.framework.js",
    codeUrl: "build/Adv_unity.wasm",
  });

  // +5는 테스트 코드
  // 아직 Game/index.jsx가 Store/index.jsx의 변수 증가를 할 줄 모름
  const setScoreUp = useCallback((curScore) => {
    onIncrease(curScore);
  }, [onIncrease]);

  useEffect(() => {
    addEventListener("reactScoreUp", setScoreUp);

    return () => {
      // Unity가 마운트될때만 detachAndUnloadImmediate함수 실행
      if (
        unityProvider &&
        detachAndUnloadImmediate &&
        typeof detachAndUnloadImmediate === "function"
      ) {
        detachAndUnloadImmediate().catch((reason) => {
          console.log(reason);
        });
        removeEventListener("reactScoreUp", setScoreUp);
      }
    };
  }, [
    unityProvider,
    detachAndUnloadImmediate,
    addEventListener,
    removeEventListener,
    setScoreUp,
  ]);

  return (
    <div className="wrapping">
      <Unity
        style={{
          width: "960px",
          height: "540px",
          justifySelf: "center",
          alignSelf: "center",
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
};

export default Game;
