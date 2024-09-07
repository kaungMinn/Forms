import { BrowserRouter as Router } from "react-router-dom";
import { CommonErrorBox as ErrorBoxProvider } from "./Components/ModalBox/ErrorBox/CommonErrorBox";
// import { useAppSelector } from "./Hooks/ReduxProvider";
import { Router as Routing } from "./Router";
import { useAppSelector } from "./Hooks/ReduxProvider";
import { useCallback, useEffect } from "react";
const App = () => {
  const { font } = useAppSelector((state) => state.theme);

  const loadFont = useCallback(async () => {
    const fontface = new FontFace("selectedFont", `url(${font})`);
    document.fonts.add(fontface);
    await fontface.load();
  }, [font]);

  useEffect(() => {
    loadFont();
  }, [loadFont]);

  return (
    <div className="light" style={{ fontFamily: "selectedFont" }}>
      <ErrorBoxProvider>
        <Router>
          <Routing />
        </Router>
      </ErrorBoxProvider>
    </div>
  );
};

export default App;
