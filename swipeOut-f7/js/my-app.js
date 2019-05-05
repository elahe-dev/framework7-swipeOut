var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/p4/',
            pageName: 'page4',
            on: { pageAfterIn: function (e, page) { } }
        },
    ],
    // ... other parameters
});

var mainView = app.views.create('.view-main', {
    stackPages: true,
    pushState: true,
});
//==================================================
$(document).on('page:beforein', function (e) {
    $('.page-content').scrollTop(0);
});
$('.page-content').on('scroll', function () {
    //alert(0);
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 100) {
        $(".scroll-top").css('display', 'block');
    }
    else { $(".scroll-top").css('display', 'none'); }
});

$(".scroll-top").click(function () {
    $('.page-content').scrollTop(0, 600);
    $(this).css('display', 'none');
});
//==================================================b 