import * as Dialog from "@radix-ui/react-dialog";
import Lottie from "lottie-react";
import AlertAnimation from "@/assets/lotties/Alert.json";


interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

export const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "¡Confirma el formulario!",
  message = "¿Estás seguro de que deseas enviar el formulario con esta información?",
}: ConfirmationDialogProps) => {
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
            {/* Animación Lottie */}
            <div
              style={{
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lottie
                animationData={AlertAnimation}
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
                {title}
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

            <div
              style={{
                display: "flex",
                gap: "12px",
                width: "100%",
              }}
            >
              <button
                onClick={onClose}
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  color: "#ef4444",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fef2f2";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Cancelar
              </button>
              <button
                onClick={onConfirm}
                style={{
                  flex: 1,
                  backgroundColor: "#2768F5",
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
                  e.currentTarget.style.backgroundColor = "#1e54d1";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#2768F5";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Confirmar
              </button>
            </div>
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
