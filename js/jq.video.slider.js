(function ($) {

    // Plugin definition.
    $.fn.videoOslide = function (options) {
        var i = 0;

        var navigate = '<div class="navitem"><div class="netteria_video_opis" style="width:100% !important; text-align: left !important; margin-top: 8px; margin-bootom: 12px;"> </div><ul>';
        this.children().each(function () {
            var item = $(this);
            i++;
            if (i == 1) {
                navigate += '<li data-p="' + i + '" class="active"></li>';
            } else {
                navigate += '<li data-p="' + i + '"></li>';
            }
            item.addClass("p" + i + "");
        });
        navigate += '</ul></div>';

        var height = 0;
        var width = 0;
        var first_display = i;
        //var allItem = i;
        this.children().each(function () {
            var item = $(this);
            item.css("z-index", "" + i + "");
            if (first_display != i) {
                item.css("display", "none");
                width = item.children().attr('width');

            }
            i--;
        });

        this.append(navigate);
        var txt = $(".desc_vs").html();
        $(".netteria_video_opis").html(txt);
        this.css("height", "auto !important");
        this.css('max-width', width + "px");
        this.css('margin', "auto");
        this.css('width', "auto !importnt");
        $('.navitem > ul > li').on('click', function () {
            $('.navitem > ul > li').removeClass('active');
            $(this).addClass('active');
            $('.videoitem').each(function () {
                var itemForHide = $(this);
                itemForHide.hide();
                var url = itemForHide.children('iframe').attr('src');
                itemForHide.children('iframe').attr('src', '');
                itemForHide.children('iframe').attr('src', url);
            });
            var p = $(this).attr('data-p');
            var txt = $(".p" + p + " .desc_vs").html();
            $(".netteria_video_opis").html(txt);
            $(".p" + p).show();
        });
        return this.css({

        });
    };
})(jQuery);