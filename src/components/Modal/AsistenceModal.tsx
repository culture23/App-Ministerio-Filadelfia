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
import { getPersonas, asistirActividad } from "@/services/Api";

interface AsistenceModalProps {
  actividadId: string;
}

export const AsistenceModal = ({ actividadId }: AsistenceModalProps) => {
  const [cedula, setCedula] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cedula.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Buscar persona por cédula
      const response = await getPersonas({ cedula: cedula.trim() });
      
      if (response.data.length === 0) {
        setError("No se encontró ninguna persona con esta cédula");
        setLoading(false);
        return;
      }

      const persona = response.data[0];

      // Registrar asistencia
      await asistirActividad(actividadId, persona._id);
      
      setShowSuccess(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err.message || "Error al registrar la asistencia");
      } else {
        setError("Error al registrar la asistencia");
      }
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
              type="tel"
              value={cedula}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                if (value.length <= 8) {
                  setCedula(value);
                }
                if (error) setError(null);
              }}
              placeholder="12345678"
              required
              disabled={loading}
            />

            {error && (
              <div 
                className="p-3 rounded-md text-sm font-medium"
                style={{ backgroundColor: '#fee2e2', color: '#991b1b' }}
              >
                {error}
              </div>
            )}

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
                disabled={loading}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="hover:bg-blue-600 hover:text-white"
                style={{ backgroundColor: '#2768F5', color: '#ffffff' }}
                disabled={loading}
              >
                {loading ? "Registrando..." : "Registrar"}
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

