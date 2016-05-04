// VLThemes Portfolio

(function ($) {
    "use strict";

    function load_more_projects() {
        function link_disable() {
            $('.load-more-btn')
                .addClass('disable')
                .find('span')
                .text('All items loaded');
                
        }
        var portfolio_track_click  = 0,
            portfolio_offset       = 0,
            portfolio_items_loaded = parseInt($('.load-more-btn').attr('data-load'), 10);
        $('.load-more-btn').on('click', function (e) {
            e.preventDefault();
            $.ajax({
                cache   : false,
                dataType: "html",
                msg     : '',
                success : function (data) {
                    var items  = $(data).filter('.crazy-portfolio-item'),
                        length = items.length,
                        html   = '';
                    if (length > 0) {
                        if (portfolio_offset !== length) {
                            for (var i = 0; portfolio_offset < length && i < portfolio_items_loaded; portfolio_offset++, i++) {
                                html += items
                                    .eq(portfolio_offset)
                                    .prop('outerHTML');
                            }
                            $('.crazy-portfolio-list').append(html);
                            $('.crazy-portfolio-list').imagesLoaded(function () {
                                $(window).trigger('resize');
                                $('.crazy-portfolio-list')
                                    .isotope('reloadItems')
                                    .isotope();
                                setBg();
                                hoverlightbox();
                              
                            });
                            if (length <= portfolio_items_loaded || portfolio_offset == length) {
                                link_disable();
                            }
                        } else {
                            link_disable();
                        }
                    } else {
                        link_disable();
                    }
                },
                type    : "POST",
                url     : $(".load-more-btn").attr("href")
            });
        });
        //
    }
    
    $(document).ready(function () {
 if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {
            $(".kaelar-portfolio-list")
                .imagesLoaded(function () {
                    var container = $(".crazy-portfolio-list");
                    container.isotope({itemSelector: '.crazy-portfolio-item', layoutMode: 'masonry', transitionDuration: '0.8s'});
                    $(".filters li").on("click", function () {
                        var $this = $(this);
                        $('.filters')
                            .find('li')
                            .removeClass('active-filter');
                        $(this).addClass("active-filter");
                        var selector = $(this).attr("data-filter");
                        container.isotope({filter: selector});
                        return false;
                    });
                    $(window).resize(function () {
                        container.isotope();
                    });
                });
        }
        load_more_projects();

    });
})(jQuery);
