$(document).ready(function(){
    // Owl Carousel 2
    $('.product-mobile').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            }
        }
    });
    $('.deal-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:4
            },
            1300:{
                items:5
            }
        }
    });
    $('.upsell-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('.best-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:true,
        items:1
    });
    // Show - Hide Back To Top Button
    var backtop = $('.backtop');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            backtop.addClass('show');
        } else {
            backtop.removeClass('show');
        }
    });
    backtop.click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
    // Show and hide specific popups such as login, cart,...
    var loginpop = $('.login-popup'),
        loginpopc = $('.login-popup--content');
    $('.login-btn').click(function(){
        loginpop.fadeIn();
        loginpopc.css('top','50%');
    });
    $('.close-login').click(function(){
        loginpop.fadeOut();
        loginpopc.css('top','30%');
    });
    $('.popup-btn').click(function(){
        $(this).next('.main-popup').fadeIn();
    });
    $('.close-pop').click(function(){
        $('.main-popup').fadeOut();
    });
    $('.close-sub').click(function(){
        $('.popup-sub').hide();
    }); 
    // Show elements on header-top
    var content = $('.dropdown-content'),
        button = $('.dropdown-btn');
    button.click(function() {
        if (content.is(':visible')) {
            content.slideUp();
        }
        if ($(this).next('.dropdown-content').is(':visible')) {
            $(this).next('.dropdown-content').slideUp();
        } else {
            $(this).next('.dropdown-content').slideDown();
        }
    });
    // Show and hide specific dropdowns
    var searchbtn = $('.search-left > .btn'),
        searchcontent = $('.search-left--list');
    searchbtn.click(function(e){
        e.stopPropagation();
        $(this).toggleClass('updown');
        searchcontent.toggle();
    });
    searchcontent.on('click', function(e){
        e.stopPropagation();
    });
    $(document).on('click', function(){
        searchcontent.hide();
        searchbtn.removeClass('updown');
    });
    // Show and hide specific menus
    var leftside = $('.left-sidebar'),
        catlist = $('.cat-product--list');
    $('.show-cat-btn').click(function(){
        leftside.addClass('show');
    });
    $('.close-cat-menu').click(function(){
        leftside.removeClass('show');
    });
    $('.product-cat-btn').click(function(){
        $(this).next('.cat-product--list').addClass('show');
    });
    $('.close-product-cat').click(function(){
        catlist.removeClass('show');
    });
    // Show and hide element over max height
    $('.show-more').click(function(){
        $(this).siblings('.hidden-element').addClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-less').css('display','block');
    });
    $('.show-less').click(function(){
        $(this).siblings('.hidden-element').removeClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-more').css('display','block');
    });
    // Show .pop-cat
    var popsub = $('.pop-sub');
    $('.plusminus').on('click', function() {
        if (popsub.is(':visible')) {
            popsub.slideUp(300);
            $('.plusminus').removeClass('active');
        }
        if ($(this).next('.pop-sub').is(':visible')) {
            $(this).next('.pop-sub').slideUp(300);
            $(this).parent('li').find('.plusminus').removeClass('active');

        } else {
            $(this).next('.pop-sub').slideDown(300);
            $(this).parent('li').find('.plusminus').addClass('active');
        }
    });
    // Product Gallery
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav1'
    });
    $('.slider-nav1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.slider-for1',
        arrows: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // Increase/ Descrease Number input
    $('.minus,.add').on('click', function() {
        var $qty = $(this).closest('p').find('.qty'),
          currentVal = parseInt($qty.val()),
          isAdd = $(this).hasClass('add');
        !isNaN(currentVal) && $qty.val(
          isAdd ? ++currentVal : (currentVal > 0 ? --currentVal : currentVal)
        );
    });
});