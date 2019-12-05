jQuery(document).ready(function($){

    var prependName=false;
    $('.btn').on('click', function(){
        var firstname = $('#fname').val();
        var lastname=$('#lname').val();
        if(!firstname && !lastname) {
            alert('Please complete form!');
            return;
        }
        
        else{
            
            if(!prependName)
            {
                $('#task').prepend(firstname,' ',lastname);
                prependName=true;
            }
        }

    });

});