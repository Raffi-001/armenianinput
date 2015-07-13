$.fn.armenianinput = function() {
              this.keyup(function() {
                console.clear();
                var inputTXT = $(this).val();
                var inputARR = inputTXT.split("");
                var err = [];
                $.each(inputARR, function(index, value) {
                  if(value.match(/^[ԱԲԳԴԵԶԵ]/)) {
                    err.push('no'); 
                  }else{
                    err.push('yes');
                  }
                });
                if($.inArray('no', err)) {
                  $(this).addClass('armenian-only');
                  if($('.language-error').length == 0) {
                    $(this).parent().append('<div class="language-error">' + Drupal.t('language-error') + '</div>');
                  }
                  console.log('err');   
                }else{
                  console.log('clear');   
                  $(this).removeClass('armenian-only');
                  $('.language-error').remove();
                }
              });
};

