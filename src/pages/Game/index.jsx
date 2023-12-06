import React from "react";
import { useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "../../style/GlobalCSS.scss";

const Game = ({ onIncrease }) => {
  const {
    unityProvider,
    // sendMessage, // unity 함수를 호출하기 위한 sendMessage 추가
    addEventListener, // unity -> react 통신
    removeEventListener, // unity -> react 통신
    UNSAFE__detachAndUnloadImmediate: detachAndUnloadImmediate,
  } = useUnityContext({
    loaderUrl: `${process.env.PUBLIC_URL}/build/Adv_unity.loader.js`,
    dataUrl: `${process.env.PUBLIC_URL}/build/Adv_unity.data`,
    frameworkUrl: `${process.env.PUBLIC_URL}/build/Adv_unity.framework.js`,
    codeUrl: `${process.env.PUBLIC_URL}/build/Adv_unity.wasm`,
  });

  const setScoreUp = useCallback(
    (curScore) => {
      onIncrease(curScore);
    },
    [onIncrease]
  );

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
