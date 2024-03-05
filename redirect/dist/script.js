function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    //return 'iOS';
    window.location.replace("https://apps.apple.com/us/app/evtv-miami/id1465580575");
  }
  else if( userAgent.match( /Android/i ) )
  {
    //return 'Android';
    window.location.replace("https://play.google.com/store/apps/details?id=com.streann.el_venezolano");
  }
  else
  {
    //return 'unknown'; 
    window.location.replace("https://evtv.online");
  }
}

getMobileOperatingSystem();