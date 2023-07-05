 $(document).ready(function() 
{
    $('#slider').owlCarousel( 
    {
        loop: true,
        dots: false,
        center: true,
        responsive:
        {
          0:
          {
            item:1
          },
          750:
          {
            item:2
          },
          1170:
          {
            item:3
          },
        }

    });
});

$('#arrow-1').click(function() {
    $('#slider').trigger('prev.owl.carousel');

});
$('#arrow-2').click(function() {
    $('#slider').trigger('next.owl.carousel');

});


  /*$(document).ready(function() 
  {
   $('#slider').hover(function()
   {
    $('.slider-links').slideToggle('slow');
   },
   function()
   {
    $('.slider-links').slideToggle('slow');
   });
  });*/