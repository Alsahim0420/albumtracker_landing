export function getStoreUrl() {

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Android
    if (/android/i.test(userAgent)) {
      return "https://play.google.com/store/apps/details?id=com.app.albumcollect&hl=es_CO";
    }
  
    // iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "https://apps.apple.com/co/app/album-collect-2026/id6760950550";
    }
  
    // Default (desktop u otros)
    return "https://albumcollect2026.netlify.app";
  }


export function redirectToStore() {
    const url = getStoreUrl();
    window.location.href = url;
  }