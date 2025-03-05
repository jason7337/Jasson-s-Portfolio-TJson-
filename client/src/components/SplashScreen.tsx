import React, { useEffect, useState } from 'react';

/**
 * Componente SplashScreen
 * Muestra una pantalla de carga con el logo de TJson al iniciar la aplicación
 */
const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Inicia la animación de salida después de 2 segundos
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Llama a onFinish después de que termine la animación
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="animate-pulse">
        <img src="/images/logo_tjson.png" alt="TJson Logo" className="w-48 h-48 object-contain" />
      </div>
    </div>
  );
};

export default SplashScreen;
