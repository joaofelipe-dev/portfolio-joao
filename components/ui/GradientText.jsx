export default function GradientText({
  children,
  className = '',
  colors = [ '#9d00ff','#00f5ff', '#007bff'],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div
      className={`relative flex max-w-fit flex-row items-baseline justify-center font-bold transition-shadow duration-500 ${className}`}
      // Pequeno padding vertical evita que "p, q, g" sejam cortadas
      style={{ paddingTop: '0.12em', paddingBottom: '0.12em' }}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: '300% 100%',
            zIndex: -10
          }}
        >
          {/* fundo preto recuado (corrigida a sintaxe do rounded) */}
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem]"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: -11
            }}
          />
        </div>
      )}

      <div
        className="inline-block relative z-10 bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', // garante compatibilidade
          backgroundSize: '300% 100%',
          lineHeight: 1.25,
          display: 'inline-block'
        }}
      >
        {children}
      </div>
    </div>
  );
}
