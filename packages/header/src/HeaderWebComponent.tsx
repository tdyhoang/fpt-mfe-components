import Header from "./components/Header";
import StyleInjector from "./components/Header/StyleInjector";

const HeaderWebComponent = () => {
  return (
    <>
      <StyleInjector />
      <Header />
    </>
  );
};

export default HeaderWebComponent;
