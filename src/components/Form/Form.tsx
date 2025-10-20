import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/Input/Input";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { ConfirmationDialog } from "@/components/ConfirmationDialog/ConfirmationDialog";
import { SuccessDialog } from "@/components/SuccessDialog/SuccessDialog";

interface FormProps {
  onBack: () => void;
}

export const Form = ({ onBack }: FormProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    correo: "",
    fechaNacimiento: undefined as Date | undefined,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    // Mostrar el diálogo de confirmación
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Cerrar el diálogo de confirmación
    setShowConfirmation(false);
    
    // Aquí puedes enviar los datos a tu backend
    console.log("Enviando datos al backend:", formData);
    
    // Mostrar el diálogo de éxito
    setShowSuccess(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    
    // Limpiar el formulario
    setFormData({
      nombre: "",
      apellido: "",
      edad: "",
      telefono: "",
      correo: "",
      fechaNacimiento: undefined,
    });
    
    // Volver a la página principal
    onBack();
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen p-4" style={{ backgroundColor: '#dbeafe' }}>
      <div className="rounded-lg shadow-xl p-8 max-w-2xl w-full" style={{ backgroundColor: '#ffffff' }}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#172554' }}>
            Formulario de Inscripción
          </h2>
          <p className="text-center" style={{ color: '#4b5563' }}>
            Completa tus datos para unirte a la juventud
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Nombre"
              type="text"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
              placeholder="Tu nombre"
              required
            />

            <Input
              label="Apellido"
              type="text"
              value={formData.apellido}
              onChange={(e) =>
                setFormData({ ...formData, apellido: e.target.value })
              }
              placeholder="Tu apellido"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Edad"
              type="number"
              value={formData.edad}
              onChange={(e) =>
                setFormData({ ...formData, edad: e.target.value })
              }
              placeholder="Tu edad"
              required
            />

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#374151' }}>
                Fecha de Nacimiento
              </label>
              <DatePicker
                selected={formData.fechaNacimiento}
                onSelect={(date) =>
                  setFormData({ ...formData, fechaNacimiento: date })
                }
              />
            </div>
          </div>

          <Input
            label="Teléfono"
            type="tel"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
            placeholder="+58 414 123 4567"
            required
          />

          <Input
            label="Correo Electrónico"
            type="email"
            value={formData.correo}
            onChange={(e) =>
              setFormData({ ...formData, correo: e.target.value })
            }
            placeholder="tu@correo.com"
            required
          />

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              onClick={onBack}
              style={{  color: '#ef4444',
                backgroundColor: 'transparent',
                border: '1px solid #e5e7eb'}}
            >
              Volver
            </Button>
            <Button
              type="submit"
              style={{ backgroundColor: '#2768F5', color: '#ffffff' }}
           
            >
              Enviar Inscripción
            </Button>
          </div>
        </form>
      </div>

      <ConfirmationDialog
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        onConfirm={handleConfirm}
        title="¿Confirmar envío?"
        message="¿Estás seguro de que deseas enviar el formulario con esta información?"
      />

      <SuccessDialog
        isOpen={showSuccess}
        onClose={handleCloseSuccess}
        title="¡Inscripción Exitosa!"
        message="Tu formulario ha sido enviado correctamente. Pronto recibirás información sobre las actividades de la juventud. ¡Bienvenido a la familia!"
      />
    </div>
  );
};

