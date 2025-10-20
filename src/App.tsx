import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { LogoFiladelfia } from "../assets/SVG/LogoFila";
import { Modal } from "./components/Modal/Modal";
import { Form } from "./components/Form/Form";

export const App = () => {
  const { width, height } = useWindowSize();
  const [viewForm, setViewForm] = useState(false);

  const handleContinue = () => {
    setViewForm(true);
  };

  const handleBack = () => {
    setViewForm(false);
  };

  // Si viewForm es true, muestra el formulario
  if (viewForm) {
    return <Form onBack={handleBack} />;
  }

  // Si viewForm es false, muestra la página de bienvenida
  return (
    <div className="flex justify-center flex-col items-center bg-blue-100 w-screen h-screen">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={500}
        recycle={false}
      />

      <LogoFiladelfia />

      <div className="flex flex-col items-center gap-10 m-2 justify-center item-center">
        <h1 className=" sm:text-[15px] text-blue-950 text-center lg:text-base md:text-2xl">
          ¡Únete a la Juventud de la Iglesia!
        </h1>
        <p className="text-center text-[14px] lg:text-2xl md:text-sm  ">
          Inscríbete hoy, conecta con tu fe y haz nuevos amigos.
        </p>
      </div>
      <Modal onContinue={handleContinue} />
    </div>
  );
};

export default App;
