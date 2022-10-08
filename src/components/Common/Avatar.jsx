import React from 'react';

export const Avatar = ({src, alt, className}) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

// export default Avatar;