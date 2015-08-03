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
        //    $('.nextCohortMember:first').addClass(".nextSlide");
        //
        //    $('body').on('click', '.next', function(){
        //        var currentSlide = $('.nextSlide');
        //        var nextSlide = currentSlide.next();
        //        if(nextSlide.length == 0){
        //            nextSlide = $('.nextCohortMember:first');
        //        }
        //        currentSlide.removeClass(".nextSlide");
        //        nextSlide.addClass(".nextSlide");
        //
        //    });
        //
        //    $("body").on("click", ".prev", function(){
        //        var currentStudent = $(".nextSlide");
        //        var prevStudent = currentStudent.prev();
        //        if ( prevStudent.length == 0) {
        //            prevStudent = $(".nextCohortMember:last");
        //        }
        //        currentStudent.removeClass(".nextSlide");
        //        prevStudent.addClass(".nextSlide");
        //    });
        //}
            $('.arrow-next').click(function() {
                var currentSlide = $('.active-slide');
                var nextSlide = currentSlide.next();

                var currentDot = $('.active-dot');
                var nextDot = currentDot.next();

                if(nextSlide.length === 0) {
                    nextSlide = $('.slide').first();
                    nextDot = $('.dot').first();
                }

                currentSlide.fadeOut(600).removeClass('active-slide');
                nextSlide.fadeIn(600).addClass('active-slide');

                currentDot.removeClass('active-dot');
                nextDot.addClass('active-dot');
            });


            $('.arrow-prev').click(function() {
                var currentSlide = $('.active-slide');
                var prevSlide = currentSlide.prev();

                var currentDot = $('.active-dot');
                var prevDot = currentDot.prev();

                if(prevSlide.length === 0) {
                    prevSlide = $('.slide').last();
                    prevDot = $('.dot').last();
                }

                currentSlide.fadeOut(600).removeClass('active-slide');
                prevSlide.fadeIn(600).addClass('active-slide');

                currentDot.removeClass('active-dot');
                prevDot.addClass('active-dot');
            });

        }
    });
});
