$(document).ready(function (){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data){
            console.log(data);

            $.each(data, function(){
                $('.gammaCohort').append("<div class = 'nextCohortMember'</div>");
                var createStudent = $('.gammaCohort').children().last();
                createStudent.append('<h2>Name: ' + this.name + '</h2>');
                createStudent.append('<p>Description: ' + this.desc + '</p>');
                createStudent.append('<p>Shout-out: ' + this.thanks + '</p>');
                createStudent.append("<div class='footer'><button class='prev'>Previous</button><button class='next'>Next</button></div>");
            });
            $('.nextCohortMember:first').addClass("nextSlide");

            $('body').on('click', '.next', function(){
                var currentSlide = $('.nextSlide');
                var nextSlide = currentSlide.next();
                if(nextSlide.length == 0){
                    nextSlide = $('.nextCohortMember:first');
                }
                currentSlide.removeClass("nextSlide");
                nextSlide.addClass("nextSlide");

            });

            $("body").on("click", ".prev", function(){
                var currentStudent = $(".nextSlide");
                var prevStudent = currentStudent.prev();
                if ( prevStudent.length == 0) {
                    prevStudent = $(".nextCohortMember:last");
                }
                currentStudent.removeClass("nextSlide");
                prevStudent.addClass("nextSlide");
            });
        }
    });
});
