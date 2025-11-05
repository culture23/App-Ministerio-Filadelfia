import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/Input/Input";
import { SuccessDialog } from "@/components/SuccessDialog/SuccessDialog";

export const AsistenceModal = () => {
  const [cedula, setCedula] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cedula.trim()) {
      console.log("Asistencia registrada para cédula:", cedula);
      setShowSuccess(true);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setCedula("");
    setIsOpen(false);
  };

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger 
          className="w-[200px] mt-4 px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-none"
          style={{ backgroundColor: '#2768F5', color: '#ffffff' }}
        >
          Registrar Asistencia
        </AlertDialogTrigger>
        <AlertDialogContent style={{ backgroundColor: '#ffffff', color: '#1f2937', maxWidth: '500px' }}>
          <AlertDialogHeader>
            <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#172554' }}>
              Registro de Asistencia
            </h2>
            <AlertDialogDescription style={{ color: '#4b5563', fontSize: '1rem', textAlign: 'center' }}>
              Ingresa tu cédula para confirmar tu asistencia
            </AlertDialogDescription>
          </AlertDialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <Input
              label="Cédula de Identidad"
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="V-12345678"
              required
            />

            <div className="flex gap-4 justify-end">
              <Button
                type="button"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
                style={{  
                  color: '#ef4444',
                  backgroundColor: 'transparent',
                  border: '1px solid #e5e7eb'
                }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="hover:bg-blue-600 hover:text-white"
                style={{ backgroundColor: '#2768F5', color: '#ffffff' }}
              >
                Registrar
              </Button>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>

      <SuccessDialog
        isOpen={showSuccess}
        onClose={handleCloseSuccess}
        title="¡Asistencia Registrada!"
        message="Tu asistencia ha sido registrada exitosamente. ¡Gracias por estar presente!"
      />
    </>
  );
};

