function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    //return 'iOS';
    $('body').addClass('ios-device');
    $(".op").append( "iOS" );
  }
  else if( userAgent.match( /Android/i ) )
  {
    //return 'Android';
    $('body').addClass('android-device');
    $(".op").append( "Android" );
  }
  else
  {
    //return 'unknown'; 
    $('body').addClass('other-device');
    $(".op").append( "other" );
  }
}

getMobileOperatingSystem();