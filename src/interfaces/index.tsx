export interface ButtonProps {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}
