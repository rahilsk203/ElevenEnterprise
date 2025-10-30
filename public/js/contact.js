/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	

function ContactForm() {	

	if( $('#contact-formular').length > 0 ){
		
		// Add animation to form elements when they come into view
		gsap.utils.toArray('.has-animation').forEach((element, i) => {
			gsap.fromTo(element, 
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						toggleActions: "play none none reverse"
					}
				}
			);
		});
		
		// Add focus effects to form inputs
		$('#contactform input, #contactform textarea').on('focus', function() {
			gsap.to($(this), { duration: 0.3, scale: 1.02, boxShadow: "0 0 0 3px rgba(140, 97, 68, 0.5)" });
		}).on('blur', function() {
			gsap.to($(this), { duration: 0.3, scale: 1, boxShadow: "0 0 0 0 rgba(140, 97, 68, 0)" });
		});
		
		// Add hover effect to form button
		$('.button-wrap.right.button-link.large-btn').on('mouseenter', function() {
			gsap.to($(this).find('.button-icon'), { duration: 0.3, x: 5 });
			gsap.to($(this).find('.button-text span'), { duration: 0.3, color: "#8c6144" });
		}).on('mouseleave', function() {
			gsap.to($(this).find('.button-icon'), { duration: 0.3, x: 0 });
			gsap.to($(this).find('.button-text span'), { duration: 0.3, color: "#fff" });
		});
		
		$('#contactform').submit(function(){
			var action = $(this).attr('action');
			$("#message").slideUp(750,function() {
				$('#message').hide();
				$('#submit').attr('disabled','disabled');		
				$.post(action, {
					name: $('#name').val(),
					email: $('#email').val(),
					comments: $('#comments').val(),
					verify: $('#verify').val()
				},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) {
						$('#contactform').slideUp('slow');
						// Add success animation
						gsap.fromTo('#message', 
							{ opacity: 0, y: 20 },
							{ opacity: 1, y: 0, duration: 0.5 }
						);
						
						// Add celebration effect
						gsap.to('#contact-formular', { 
							duration: 0.5, 
							borderColor: "rgba(40, 167, 69, 0.5)",
							boxShadow: "0 0 20px rgba(40, 167, 69, 0.3)",
							onComplete: function() {
								gsap.to('#contact-formular', { 
									duration: 1, 
									borderColor: "rgba(255, 255, 255, 0.05)",
									boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
								});
							}
						});
					} else {
						// Add error effect
						gsap.to('#contact-formular', { 
							duration: 0.3, 
							x: -5,
							repeat: 3,
							yoyo: true,
							onComplete: function() {
								gsap.to('#contact-formular', { duration: 0.1, x: 0 });
							}
						});
					}
				}
			);		
			});		
			return false;		
		});		
	}


}//End ContactForm	


/*--------------------------------------------------
Function Contact Map
---------------------------------------------------*/	
		
function ContactMap() {	

	if( jQuery('#map_canvas').length > 0 ){					
		var latlng = new google.maps.LatLng(43.270441,6.640888);
		var settings = {
			zoom: 14,
			center: new google.maps.LatLng(43.270441,6.640888),
			mapTypeControl: false,
			scrollwheel: false,
			draggable: true,
			panControl:false,
			scaleControl: false,
			zoomControl: false,
			streetViewControl:false,
			navigationControl: false};			
			var newstyle = [
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			}
		];
		var mapOptions = {
			styles: newstyle,
			mapTypeControlOptions: {
				 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'holver']
			}
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
		var mapType = new google.maps.StyledMapType(newstyle, { name:"Grayscale" });    
			map.mapTypes.set('holver', mapType);
			map.setMapTypeId('holver');
					
		
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});	
		var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;">Hello Friend!</h4>'+
			'<div id="bodyContent">'+
			'<p color:#999; font-size:14px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
			'</div>'+
			'</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});	
		var companyImage = new google.maps.MarkerImage('images/marker.png',
			new google.maps.Size(58,63),
			new google.maps.Point(0,0),
			new google.maps.Point(35,20)
		);
		var companyPos = new google.maps.LatLng(43.270441,6.640888);	
		var companyMarker = new google.maps.Marker({
			position: companyPos,
			map: map,
			icon: companyImage,               
			title:"Our Office",
			zIndex: 3});	
		google.maps.event.addListener(companyMarker, 'click', function() {
			infowindow.open(map,companyMarker);
		});	
	}
	
	return false;

}//End ContactMap

// Initialize animations on page load
$(document).ready(function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if device is touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Small delay to ensure page is fully loaded
    setTimeout(function() {
        // Add staggered animations to contact cards
        if ($('.contact-info-card').length > 0) {
            gsap.utils.toArray('.contact-info-card').forEach((card, i) => {
                // If user prefers reduced motion or is touch device, show elements immediately
                if (prefersReducedMotion || isTouchDevice) {
                    gsap.set(card, { opacity: 1, y: 0 });
                } else {
                    gsap.fromTo(card, 
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: i * 0.1,
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });
        }
        
        // Add staggered animations to location cards
        if ($('.location-card').length > 0) {
            gsap.utils.toArray('.location-card').forEach((card, i) => {
                // If user prefers reduced motion or is touch device, show elements immediately
                if (prefersReducedMotion || isTouchDevice) {
                    gsap.set(card, { opacity: 1, y: 0 });
                } else {
                    gsap.fromTo(card, 
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: i * 0.1,
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });
        }
        
        // Add animation to form elements
        if ($('.has-animation').length > 0) {
            gsap.utils.toArray('.has-animation').forEach((element, i) => {
                // If user prefers reduced motion or is touch device, show elements immediately
                if (prefersReducedMotion || isTouchDevice) {
                    gsap.set(element, { opacity: 1, y: 0 });
                } else {
                    gsap.fromTo(element, 
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: i * 0.1,
                            scrollTrigger: {
                                trigger: element,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });
        }
        
        // Add hover effects to contact cards (only on devices with hover support)
        if (window.matchMedia('(hover: hover)').matches) {
            $('.contact-info-card, .location-card').on('mouseenter', function() {
                gsap.to($(this), { duration: 0.3, y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)" });
            }).on('mouseleave', function() {
                gsap.to($(this), { duration: 0.3, y: 0, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" });
            });
        }
        
        // Add hover effects to buttons (only on devices with hover support)
        if (window.matchMedia('(hover: hover)').matches) {
            $('.button-wrap.right.button-link.large-btn').on('mouseenter', function() {
                gsap.to($(this).find('.button-icon'), { duration: 0.3, x: 5 });
                gsap.to($(this).find('.button-text span'), { duration: 0.3, color: "#8c6144" });
            }).on('mouseleave', function() {
                gsap.to($(this).find('.button-icon'), { duration: 0.3, x: 0 });
                gsap.to($(this).find('.button-text span'), { duration: 0.3, color: "#fff" });
            });
        }
        
        // Add focus effects to form inputs
        $('#contactform input, #contactform textarea').on('focus', function() {
            if (!prefersReducedMotion) {
                gsap.to($(this), { duration: 0.3, scale: 1.02, boxShadow: "0 0 0 3px rgba(140, 97, 68, 0.5)" });
            }
        }).on('blur', function() {
            if (!prefersReducedMotion) {
                gsap.to($(this), { duration: 0.3, scale: 1, boxShadow: "0 0 0 0 rgba(140, 97, 68, 0)" });
            }
        });
    }, 100); // Small delay to ensure elements are rendered
    
    // Handle window resize events for responsive adjustments
    $(window).on('resize', function() {
        // Re-initialize ScrollTrigger on resize
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    });
    
    // Handle orientation change for mobile devices
    $(window).on('orientationchange', function() {
        setTimeout(function() {
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }, 500);
    });
    
    // Handle device motion for mobile devices
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function() {
            setTimeout(function() {
                if (typeof ScrollTrigger !== 'undefined') {
                    ScrollTrigger.refresh();
                }
            }, 500);
        }, false);
    }
});