declare module 'fslightbox-react' {
  import * as React from 'react';

  export type FsLightboxSourceType = 'image' | 'video' | 'youtube';

  export interface FsLightboxProps {
    toggler: boolean;
    sources: (string | React.ReactNode)[];
    slide?: number;                     // 1-based index
    type?: FsLightboxSourceType;        // global type for all sources
    types?: (FsLightboxSourceType | null)[]; // per–source types
    onOpen?: () => void;
    onClose?: () => void;
    openOnMount?: boolean;
    // Allow unknown future props without type errors
    [key: string]: any;
  }

  const FsLightbox: React.FC<FsLightboxProps>;
  export default FsLightbox;
}