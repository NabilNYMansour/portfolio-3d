import { SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { nextjs, projectsNext, projectsReact, react, stylesCss, stylesNext, stylesReact } from '../utils/files';
import { useEffect, useMemo, useState } from 'react';
import { nightOwl } from "@codesandbox/sandpack-themes";

const SandPackRest = ({ selectedApp, selected }: { selectedApp: string, selected: boolean }) => {
  const [enableCode, setEnableCode] = useState(false);
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    if (!selected) {
      setEnableCode(false);
      setTimePassed(false);
    }
    let intervalId: any;
    if (selected) {
      intervalId = setInterval(() => {
        setTimePassed(true);
      }, 1500);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [selected]);

  return <SandpackLayout style={{ height: "950px", display: "flex" }}>
    <SandpackFileExplorer style={{ height: "950px" }} />

    {/* Pain */}
    {enableCode ?
      <SandpackCodeEditor showLineNumbers closableTabs style={{ height: "950px", flex: 3 }} className='fadeIn' /> :
      <button onClick={() => setEnableCode(true)} disabled={!selected || !timePassed}
        style={{ flex: 3, backgroundColor: selectedApp==="nextjs"?"#151515":"#011627", border: "none", cursor: "pointer" }}>
        Show Code
      </button>}

    <SandpackPreview style={{ height: "950px", flex: "3" }} />
  </SandpackLayout>
}

const InnerApp = ({ selectedApp, selected }: { selectedApp: string | undefined, selected: boolean }) => {
  if (selectedApp === "nextjs" || selectedApp === "react") {
    return <SandpackProvider template="react" theme={selectedApp === "nextjs" ? "dark" : nightOwl} key={selectedApp}
      style={{ pointerEvents: selected ? "all" : 'none', height: "950px", width: "1410px" }} className='main'
      options={{
        // autorun: false,
        // initMode: 'lazy',
      }}
      // this is nuts
      files={useMemo(() => ({
        "/App.js": { code: selectedApp === "nextjs" ? nextjs : react },
        "/utils/projects.js": { code: selectedApp === "nextjs" ? projectsNext : projectsReact },
        "/utils/styles.js": { code: selectedApp === "nextjs" ? stylesNext : stylesReact },
        "/styles.css": { code: stylesCss },
      }), [selectedApp])}
      customSetup={useMemo(() => ({
        dependencies: {
          "react-icons": "^5.2.1",
        }
      }), [])}>
      <SandPackRest selectedApp={selectedApp} selected={selected} />
    </SandpackProvider>
  } else if (selectedApp === "unity") {
    return <iframe src="https://nabilmansour.com/FractalGlide/" width="100%" height="100%" style={{ pointerEvents: selected ? "all" : 'none' }} className='main' />
  } else if (selectedApp === "cube") {
    return <iframe width="1410" height="950"
      src="https://www.shadertoy.com/embed/cs3Gz4?gui=false&t=10&paused=true&muted=false"
      style={{ pointerEvents: selected ? "all" : 'none', marginTop: "5px" }}
      className='main'
    />
  } else if (selectedApp === "youtube") {
    return <iframe src="https://www.youtube.com/embed/qUBA8Xotc4o" width="100%" height="100%" style={{ pointerEvents: selected ? "all" : 'none' }} className='main' />
  }

  else {
    return <iframe src="https://nabilmansour.com/" width="100%" height="100%" style={{ pointerEvents: selected ? "all" : 'none' }} className='main' />
  }
}

export default InnerApp;