// Base type for SVG content
type SVGContent = string;

// React-specific type
declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
  export const content: SVGContent;
}

// Angular and general usage type
declare module '@swrpg-online/art/dice/*.svg' {
  const content: SVGContent;
  export default content;
}

// PNG type (same for all frameworks)
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '@swrpg-online/art/dice/*.png' {
  const content: string;
  export default content;
}

declare module '@swrpg-online/art/dice/numeric/*' {
  const content: string;
  export default content;
}

declare module '@swrpg-online/art/dice/narrative/*' {
  const content: string;
  export default content;
} 