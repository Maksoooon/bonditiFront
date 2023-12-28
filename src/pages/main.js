import '../App.css';
import Header from "../components/header";
import Menu from "../components/menu";
import Dictionary from "../components/dictionary";

function Main({words}) {

  return (
    <>
        <Header />
        <Menu />
        <Dictionary words={words}/>
    </>
  );
}

export default Main;
