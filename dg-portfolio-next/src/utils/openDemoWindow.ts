// src/utils/openDemoWindow.ts
export function openDemoWindow(url: string) {
    const width = 1280;
    const height = 720;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
  
    window.open(
      url,
      "_blank",
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,location=no,status=no`
    );
  }
  