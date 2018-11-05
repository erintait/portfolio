jQuery(document).ready(function () {
    if (jQuery.cookie("style_theme") == undefined) {
        jQuery('#theme-switch').attr('href', 'css/orange.css');
    } else if (jQuery.cookie("style_theme") != '') {
        jQuery('#theme-switch').attr('href', jQuery.cookie("style_theme"));
    }

    if (jQuery.cookie("boxed_style_selector") == undefined) {
        jQuery.cookie("boxed_style_selector", "Wide", {path: "/"});
        jQuery('a.widebutton').addClass('active');
        jQuery('#wrapper').addClass('wrapper-all');
        jQuery('#wrapper').removeClass('active');
    } else if (jQuery.cookie("boxed_style_selector") == 'Boxed') {
        jQuery.cookie("boxed_style_selector", "Boxed", {path: "/"});
        jQuery('a.boxedbutton').addClass('active');
        // jQuery('#wrapper').addClass('wrapper-boxed');
        if (jQuery.cookie("boxed_style_background_type") == 'pattern') {
            var patternbg = jQuery.cookie("boxed_style_background");
            jQuery('body').css('background', 'url(' + patternbg + ') 50% 50% / auto repeat fixed');
        } else if (jQuery.cookie("boxed_style_background_type") == 'image') {
            var patternbg = jQuery.cookie("boxed_style_background");
            jQuery('body').css('background', 'url(' + patternbg + ') 50% 50% / cover no-repeat fixed');
        } else {
            var patternbg = jQuery.cookie("boxed_style_background");
            jQuery('body').css('background', 'url(images/1.png) 50% 50% / auto repeat fixed');
        }
    } else if (jQuery.cookie("boxed_style_selector") == 'Wide') {
        jQuery.cookie("boxed_style_selector", "Wide", {path: "/"});
        jQuery('#wrapper').addClass('wrapper-all');
        jQuery('a.widebutton').addClass('active');
        jQuery('#wrapper').removeClass('active');
    }
    jQuery('a.widebutton').click(function (e) {
        var current = 'Wide';

        //jQuery('#wrapper').removeClass('wrapper-boxed');
        // jQuery('#wrapper').addClass('wrapper-all');
        jQuery('body').css('background', 'url()');
        jQuery.cookie('boxed_style_background', '', {path: '/'});
        jQuery.cookie('boxed_style_background_type', '', {path: '/'});
        if (jQuery.cookie("boxed_style_selector") == current) {
            e.preventDefault();
            return false;
        }
        jQuery.cookie('boxed_style_selector', current, {path: '/'});
        jQuery(this).addClass('active');
        jQuery('a.boxedbutton').removeClass('active');
    });
    jQuery('a.boxedbutton').click(function (e) {
        var current = 'Boxed';
        if (jQuery.cookie("boxed_style_selector") == current) {
            e.preventDefault();
            return false;
        }
        jQuery.cookie('boxed_style_selector', current, {path: '/'});
        jQuery(this).addClass('active');
        jQuery('a.widebutton').removeClass('active');
        //jQuery('#wrapper').removeClass('wrapper-all'); jQuery('#wrapper').addClass('wrapper-boxed');
    });

    jQuery('ul.patternbg li a').click(function () {
        if (jQuery.cookie("boxed_style_selector") == 'Boxed') {
            var patternbg = jQuery(this).attr('data-value');
            jQuery('body').css('background', 'url(' + patternbg + ') 50% 50% / auto repeat fixed');
            jQuery.cookie('boxed_style_background', patternbg, {path: '/'});
            jQuery.cookie('boxed_style_background_type', 'pattern', {path: '/'});
        } else {
            alert('Please select boxed layout');
        }
    });

    jQuery('ul.patternimage li a').click(function () {
        if (jQuery.cookie("boxed_style_selector") == 'Boxed') {
            var patternbg = jQuery(this).attr('data-value');
            jQuery('body').css('background', 'url()');
            jQuery('body').css('background', 'url(' + patternbg + ') 50% 50% / cover no-repeat fixed');
            jQuery.cookie('boxed_style_background', patternbg, {path: '/'});
            jQuery.cookie('boxed_style_background_type', 'image', {path: '/'});
        } else {
            alert('Please select boxed layout');
        }
    });

    jQuery('ul.patterncss li a').click(function () {
        var pathcss = 'css/';
        var cssname = pathcss + jQuery(this).data("value") + '.css';
        jQuery('#theme-switch').attr('href', cssname);
        jQuery.cookie('style_theme', cssname, {path: '/'});
    });
});
