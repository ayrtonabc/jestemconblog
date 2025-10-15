import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = "w-full h-auto object-cover",
  width,
  height
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
      width={width}
      height={height}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = '/placeholder.jpg'; // Imagen de respaldo en caso de error
      }}
    />
  );
};

export default LazyImage;