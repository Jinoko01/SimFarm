import React from "react";

import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
  const  {unityProvider} = useUnityContext({
    loaderUrl: "build/adventure.loader.js",
    dataUrl: "build/adventure.data",
    frameworkUrl: "build/adventure.framework.js",
    codeUrl: "build/adventure.wasm",
  });

  return <div>
    <Unity style={{ 
        width: "750px", 
        height: "500px",
        justifySelf: 'center',
        alignSelf: 'center',
      }}  unityProvider={unityProvider}/>
  </div>;
};

export default Game;
