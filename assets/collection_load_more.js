 

$(document).on('click','button.js-load-more',function(){
  var currantUrl = $(location).attr('href');
  console.log(currantUrl)
  if (currantUrl.indexOf("?filter") > -1) {
    
     //var getUrlOfnextPage = $()
    
     var $this =$(this),
      totalPages = parseInt($('[data-all-pages]').val()),
      currentPage = parseInt($('[data-this-page]').val()),
     
      
      datacollurl = $('[data-coll-url]').val();
    }else{
    var $this =$(this),
      totalPages = parseInt($('[data-all-pages]').val()),
      currentPage = parseInt($('[data-this-page]').val()),
     
      
      datacollurl = $('[data-coll-url]').val();
    }
  

  //console.log('totalPages--'+ totalPages);
  //console.log('currentPage--'+ currentPage);
  //console.log('datacollurl--'+ datacollurl);
  
  $this.attr('disabled', true);
  $this.find('[load-more-text]').addClass('hide');
  $this.find('[loader]').removeClass('hide');
  var nextUrl = $('[data-next-link]').val();
  //console.log(nextUrl);
  var current_page_new = currentPage + 1;
  var next_coll = currentPage + 2;
  //alert(current_page_new)
    //return false;
  $.ajax({
    url: nextUrl,
    type: 'GET',
    dataType: 'html',
    success: function(responseHTML){
      //console.log('current_page_new--'+ current_page_new);
      // if (currantUrl.indexOf("?filter") > -1) {
      // $('[data-next-link]').val('/'+datacollurl + "?page="+next_coll+'=&sort_by='+splitShortByData);
      // }else{
       $('[data-next-link]').val(datacollurl + "?page="+next_coll); 
      //}  
      $('[data-this-page]').val(current_page_new);
      $('#product-grid').append($(responseHTML).find('#product-grid').html());
      //console.log(responseHTML);
    },
    complete: function() {
      if(current_page_new < totalPages) {
         $this.attr('disabled', false); $this.find('[load-more-text]').removeClass('hide'); $this.find('[loader]').addClass('hide');
      } 
      if(current_page_new >= totalPages) {
         $this.find('[load-more-text]').text('Products Finished').removeClass('hide'); $this.find('[loader]').addClass('hide');
      } 
    }
  })

  setTimeout(function() {
     var getCurrantPageNumber = $('[data-this-page]').val();
     console.log("Currant Page: " + getCurrantPageNumber)
     var PlusCurrantPage = parseFloat(current_page_new) + 1;
     console.log("Next Page: " + PlusCurrantPage)
     //console.log("Get Next Page Data: " + PlusCurrantPage)
     var update_dataForLoder = $('a.page__number[aria-label="Page '+PlusCurrantPage+'"]').attr('href');
     console.log("next page Link: " + update_dataForLoder)
     $('[data-next-link]').val(update_dataForLoder); 
     //console.log(update_dataForLoder);
  }, 2000);
});
