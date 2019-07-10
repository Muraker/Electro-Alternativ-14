// NAV MOBILE
$( ".nav-toggle" ).click(function() {
    $('.nav-wrapper').toggleClass('nav-mob-open');
});

// SimpleSlider
var slider = simpleslider.getSlider({
    container: document.getElementById('pubslider'),
    prop: 'opacity',
    unit: '',
    init: 0,
    show: 1,
    end: 0
});

// MARQUEE
$('.marquee-baseline').marquee({
    duration: 20000,
    gap: 200,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: false
});

// BARBA VIEW
var Homepage = Barba.BaseView.extend({
    namespace: 'home-page',
    onEnter: function() {
        $('.logo').addClass('logo-home');
        $('.nav-wrapper').removeClass('nav-show');

        // THEME
        function getTheme() {
            var currentTime = new Date().getHours();
            if (6 <= currentTime&&currentTime < 20) {
                $('.ea14').removeClass('theme-soir').removeClass('theme-nuit').addClass('theme-jour');
                $( ".video-theme" ).replaceWith( '<video class="video-theme video-hide" poster="https://res.cloudinary.com/muraker/video/upload/so_0p/v1529577432/electro-alternativ-14/jour.jpg" playsinline autoplay muted="muted" loop><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577432/electro-alternativ-14/jour.webm" type="video/webm"><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577432/electro-alternativ-14/jour.mp4" type="video/mp4"></video>' );
            }
            if (20 <= currentTime&&currentTime < 24) {
                $('.ea14').removeClass('theme-jour').removeClass('theme-nuit').addClass('theme-soir');
                $( ".video-theme" ).replaceWith( '<video class="video-theme video-hide" poster="https://res.cloudinary.com/muraker/video/upload/so_0p/v1529577428/electro-alternativ-14/soir.jpg" playsinline autoplay muted="muted" loop><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577428/electro-alternativ-14/soir.webm" type="video/webm"><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577428/electro-alternativ-14/soir.mp4" type="video/mp4"></video>' );
            }
            if (0 <= currentTime&&currentTime < 6) {
                $('.ea14').removeClass('theme-jour').removeClass('theme-soir').addClass('theme-nuit');
                $( ".video-theme" ).replaceWith( '<video class="video-theme video-hide" poster="https://res.cloudinary.com/muraker/video/upload/so_0p/v1529577433/electro-alternativ-14/nuit.jpg" playsinline autoplay muted="muted" loop><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577433/electro-alternativ-14/nuit.webm" type="video/webm"><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577433/electro-alternativ-14/nuit.mp4" type="video/mp4"></video>' );
            }
        }
        getTheme();

        // TEMP SWITCHER
        $( ".switch-jour" ).click(function() {
            $('.ea14').removeClass('theme-soir').removeClass('theme-nuit').addClass('theme-jour');
            $( ".video-theme" ).replaceWith( '<video class="video-theme video-show" poster="https://res.cloudinary.com/muraker/video/upload/so_0p/v1529577432/electro-alternativ-14/jour.jpg" playsinline autoplay muted="muted" loop><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577432/electro-alternativ-14/jour.webm" type="video/webm"><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577432/electro-alternativ-14/jour.mp4" type="video/mp4"></video>' );
        });

        $( ".switch-soir" ).click(function() {
            $('.ea14').removeClass('theme-jour').removeClass('theme-nuit').addClass('theme-soir');
            $( ".video-theme" ).replaceWith( '<video class="video-theme video-show" poster="https://res.cloudinary.com/muraker/video/upload/so_0p/v1529577428/electro-alternativ-14/soir.jpg" playsinline autoplay muted="muted" loop><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577428/electro-alternativ-14/soir.webm" type="video/webm"><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577428/electro-alternativ-14/soir.mp4" type="video/mp4"></video>' );
        });

        $( ".switch-nuit" ).click(function() {
            $('.ea14').removeClass('theme-jour').removeClass('theme-soir').addClass('theme-nuit');
            $( ".video-theme" ).replaceWith( '<video class="video-theme video-show" poster="https://res.cloudinary.com/muraker/video/upload/so_0p/v1529577433/electro-alternativ-14/nuit.jpg" playsinline autoplay muted="muted" loop><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577433/electro-alternativ-14/nuit.webm" type="video/webm"><source src="https://res.cloudinary.com/muraker/video/upload/vc_auto/v1529577433/electro-alternativ-14/nuit.mp4" type="video/mp4"></video>' );
        });
    },
    onEnterCompleted: function() {
        $('.video-theme').removeClass('video-hide').addClass('video-show');
        $('.redline').removeClass('redline-hide').addClass('redline-show');
    },
    onLeave: function() {
        $('.logo').removeClass('logo-home');
        $('.nav-wrapper').addClass('nav-show');
        $('.redline').removeClass('redline-show').addClass('redline-hide');
    }
});
Homepage.init();

var Lefestival = Barba.BaseView.extend({
    namespace: 'lefestival',
    onEnter: function() {
        $('.mn-fest').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);

        var initPhotoSwipeFromDOM = function(gallerySelector) {

            // parse slide data (url, title, size ...) from DOM elements
            // (children of gallerySelector)
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;

                for(var i = 0; i < numNodes; i++) {

                    figureEl = thumbElements[i]; // <figure> element

                    // include only element nodes
                    if(figureEl.nodeType !== 1) {
                        continue;
                    }

                    linkEl = figureEl.children[0]; // <a> element

                    size = linkEl.getAttribute('data-size').split('x');

                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };



                    if(figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML;
                    }

                    if(linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    }

                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }

                return items;
            };

            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };

            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var eTarget = e.target || e.srcElement;

                // find root element of slide
                var clickedListItem = closest(eTarget, function(el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });

                if(!clickedListItem) {
                    return;
                }

                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;

                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) {
                        continue;
                    }

                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }



                if(index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };

            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                    params = {};

                if(hash.length < 5) {
                    return params;
                }

                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if(pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }

                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }

                return params;
            };

            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;

                items = parseThumbnailElements(galleryElement);

                // define options (if needed)
                options = {

                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                    getThumbBoundsFn: function(index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();

                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    }

                };

                // PhotoSwipe opened from URL
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }

                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }

                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }

                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            };

            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll( gallerySelector );

            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }

            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };

        initPhotoSwipeFromDOM('.gallery-wrapper');


    },
    onLeave: function() {
        $('.mn-fest').removeClass('selected');
    }
});
Lefestival.init();

var Eatv = Barba.BaseView.extend({
    namespace: 'eatv',
    onEnter: function() {
        $('.mn-eatv').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);

        $(function() {

            $(".ea-playlist").ycp({
                apikey : 'AIzaSyBMRyIdlgyAKIoKe9ptUZgejHZQB3RWumY',
                playlist : 50,
                autoplay : true,
                related : false
            });

        });
    },
    onEnterCompleted: function() {
        //$( "#mylist-player-js" ).replaceWith( '<script id="mylist-player-js" src="/static/mylist-player/js/mylist-player.js"></script>' );
    },
    onLeave: function() {
        $('.mn-eatv').removeClass('selected');
        //$( "#mylist-player-js-on" ).replaceWith( '<div id="mylist-player-js-off"></div>' );
    }
});
Eatv.init();

var Proglist = Barba.BaseView.extend({
    namespace: 'prog-list',
    onEnter: function() {
        document.getElementById('eventA').onclick = function () {
            document.getElementById('theme_event').href = '/static/css/theme-a.css';
        };
        document.getElementById('eventJ').onclick = function () {
            document.getElementById('theme_event').href = '/static/css/theme-j.css';
        };
        document.getElementById('eventS').onclick = function () {
            document.getElementById('theme_event').href = '/static/css/theme-s.css';
        };
        document.getElementById('eventN').onclick = function () {
            document.getElementById('theme_event').href = '/static/css/theme-n.css';
        };
        $('.mn-prog').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);
    },
    onLeave: function() {
        $('.mn-prog').removeClass('selected');
    }
});
Proglist.init();

var Progpage = Barba.BaseView.extend({
    namespace: 'prog-page',
    onEnter: function() {

        /*var elem = document.querySelector('.main-carousel');
        var flkty = new Flickity( elem, {

            autoPlay: true,
            autoPlay: 3000,
            pauseAutoPlayOnHover: false,
            prevNextButtons: false,
            pageDots: false,
            adaptiveHeight: true,
            wrapAround: true,
            imagesLoaded: true
        });*/

        $('.mn-prog').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);
    },
    onEnterCompleted: function() {
        simpleslider.getSlider({
            container: document.getElementById('my-simple-slider'),
            prop: 'opacity',
            unit: '',
            init: 0,
            show: 1,
            end: 0
        });
    },
    onLeave: function() {
        $('.mn-prog').removeClass('selected');
    }
});
Progpage.init();

var Artistes = Barba.BaseView.extend({
    namespace: 'artistes',
    onEnter: function() {
        $('.mn-arti').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);
    },
    onLeave: function() {
        $('.mn-arti').removeClass('selected');
    }
});
Artistes.init();

var Billetterie = Barba.BaseView.extend({
    namespace: 'billetterie',
    onEnter: function() {
        $('.mn-bill').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);
    },
    onLeave: function() {
        $('.mn-bill').removeClass('selected');
    }
});
Billetterie.init();

var Lieux = Barba.BaseView.extend({
    namespace: 'lieux',
    onEnter: function() {
        $('.mn-lieu').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);
    },
    onLeave: function() {
        $('.mn-lieu').removeClass('selected');
    }
});
Lieux.init();

var Merch = Barba.BaseView.extend({
    namespace: 'merch',
    onEnter: function() {
        $('.mn-merc').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);
    },
    onLeave: function() {
        $('.mn-merc').removeClass('selected');
    }
});
Merch.init();

var Partenaires = Barba.BaseView.extend({
    namespace: 'partenaires',
    onEnter: function() {
        $('.mn-part').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);    },
    onLeave: function() {
        $('.mn-part').removeClass('selected');
    }
});
Partenaires.init();

var Pro = Barba.BaseView.extend({
    namespace: 'pro',
    onEnter: function() {
        $('.mn-espa').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);    },
    onLeave: function() {
        $('.mn-espa').removeClass('selected');
    }
});
Pro.init();

var Contact = Barba.BaseView.extend({
    namespace: 'contact',
    onEnter: function() {
        $('.mn-cont').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);    },
    onLeave: function() {
        $('.mn-cont').removeClass('selected');
    }
});
Contact.init();

var Equipe = Barba.BaseView.extend({
    namespace: 'equipe',
    onEnter: function() {
        $('.mn-equi').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);    },
    onLeave: function() {
        $('.mn-equi').removeClass('selected');
    }
});
Equipe.init();

var Playlist = Barba.BaseView.extend({
    namespace: 'playlist',
    onEnter: function() {
        $('.mn-play').addClass('selected');
        $('.nav-wrapper').addClass('nav-show');

        $('.video-theme').removeClass('video-show').addClass('video-hide');
        setTimeout (function(){
            $( ".video-theme" ).replaceWith( '<video class="video-theme" ></video>' );
        },520);    },
    onLeave: function() {
        $('.mn-play').removeClass('selected');
    }
});
Playlist.init();

// BARBA TRANSITION
var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }, 150).promise();
    },

    fadeIn: function() {
        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
            visibility : 'visible',
            opacity : 0
        });

        $el.animate({ opacity: 1 }, 150, function() {
            _this.done();
        });
    }
});
Barba.Pjax.getTransition = function() {
    return FadeTransition;
};

// BARBA
Barba.Pjax.start();

// BARBA DISPATCH // SCROLL TOP // LOGO SIZE // MENU TOGGLE
Barba.Dispatcher.on('linkClicked', function() {
    $('html,body').animate({ scrollTop: 0 }, 300);
    $('.logo').removeClass('logo-home');
    $('.nav-wrapper').removeClass('nav-mob-open');
    return false;
});
Barba.Dispatcher.on('initStateChange', function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-120984751-1');
});

console.log("%cᕦ(ò_ó*)ᕤ\na website by Muraker\nwww.muraker.com", "font-size:15px");
