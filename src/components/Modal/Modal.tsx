import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ModalProps {
  onContinue: () => void;
}
export const Modal = ({ onContinue }: ModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger 
        className="w-[200px] focus:outline-none rounded-md px-4 py-2 font-medium"
        style={{
          backgroundColor: '#2768F5',
          color: '#ffffff'
        }}
      >
        Empezar Formulario
      </AlertDialogTrigger>
      <AlertDialogContent style={{ backgroundColor: '#ffffff', color: '#1f2937' }}>
        <AlertDialogHeader>
          <AlertDialogDescription style={{ color: '#1f2937', fontSize: '1rem' }}>
            Este formulario contiene datos personales, si eres menor de edad
            pidele ayuda tu representante
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel 
            className="hover:text-white"
            style={{ 
              color: '#ef4444',
              backgroundColor: 'transparent',
              border: '1px solid #e5e7eb'
            }}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={onContinue}
            style={{
              backgroundColor: '#2768F5',
              color: '#ffffff'
            }}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
