var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'data.json'
})

jQuery(document).ready(function( $ ){
  
  niks();
  
  jQuery('.g1-drop-toggle-icon').click(function(){
    skin();
  })
  
  
  function skin(){
  	if ( $(".g1-skinmode").length > 0 ) {
      jQuery('.g1-hb-row-b>.g1-row-background').css({"background-image":"url('http://www.lasopa.com/wp-content/uploads/2019/05/fse2.jpg')"})
    }else{
      jQuery('.g1-hb-row-b>.g1-row-background').css({"background-image":"none"})
    };
  }
  
  function niks(){
  	if ( $(".g1-skinmode").length <= 0 ) {
      jQuery('.g1-hb-row-b>.g1-row-background').css({"background-image":"url('http://www.lasopa.com/wp-content/uploads/2019/05/fse2.jpg')"})
    }
  }
  
  
    
    
    jQuery( window ).scroll(function() {
  	if ( jQuery(".is-sticky").length > 0 ) {
        alert("up");
      /*jQuery('.site-branding img').css({"width":"240"})*/
    }else{
        alert("down");
      /*jQuery('.site-branding img').css({"width":"130"})*/
    };
});
    
    
  
});