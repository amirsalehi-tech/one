import {Outlet} from "react-router";
import {DirectionProvider} from "@radix-ui/react-direction";
const App = () => {
  return (
    <DirectionProvider dir="rtl">
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
    </DirectionProvider>
  );
};

export default App;
