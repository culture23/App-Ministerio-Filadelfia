import * as Dialog from "@radix-ui/react-dialog";
import Lottie from "lottie-react";
import SuccessAnimation from "@/assets/lotties/Success.json";

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  nombre?: string;
}

export const SuccessDialog = ({
  isOpen,
  onClose,
  title = "¡Inscripción Exitosa!",
  message = "Tu formulario ha sido enviado correctamente. Pronto recibirás información sobre las actividades de la juventud. ¡Bienvenido a la familia!",
  nombre,
}: SuccessDialogProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            inset: 0,
            animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 9999,
          }}
        />
        <Dialog.Content
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow:
              "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            maxWidth: "500px",
            maxHeight: "85vh",
            padding: "32px",
            animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {/* Animación Lottie de Success */}
            <div
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lottie
                animationData={SuccessAnimation}
                loop={false}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <Dialog.Title
                style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#172554",
                  marginBottom: "12px",
                }}
              >
                {nombre ? `Gracias ${nombre}, por registrarte` : title}
              </Dialog.Title>
              <Dialog.Description
                style={{
                  margin: 0,
                  fontSize: "16px",
                  color: "#4b5563",
                  lineHeight: "1.6",
                }}
              >
                {message}
              </Dialog.Description>
            </div>

            <button
              onClick={onClose}
              style={{
                width: "100%",
                backgroundColor: "#10b981",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#059669";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#10b981";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Volver al Inicio
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>

      <style>{`
        @keyframes overlayShow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes contentShow {
          from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </Dialog.Root>
  );
};

