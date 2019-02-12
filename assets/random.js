

        // Create a new directionsService object.
        var directionsService = new google.maps.DirectionsService;
        directionsService.route({
            origin: start,
            destination: end,
            travelMode: 'DRIVING',
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                var directionsDisplay = new google.maps.DirectionsRenderer({
                    suppressMarkers: true,
                    map: map,
                    directions: response,
                    draggable: false,
                    suppressPolylines: true,
                    // IF YOU SET `suppressPolylines` TO FALSE, THE LINE WILL BE
                    // AUTOMATICALLY DRAWN FOR YOU.
                });

                // IF YOU WISH TO APPLY USER ACTIONS TO YOUR LINE YOU NEED TO CREATE A 
                // `polyLine` OBJECT BY LOOPING THROUGH THE RESPONSE ROUTES AND CREATING A 
                // LIST
                pathPoints = response.routes[0].overview_path.map(function (location) {
                    return { lat: location.lat(), lng: location.lng() };
                });

                var assumedPath = new google.maps.Polyline({
                    path: pathPoints, //APPLY LIST TO PATH
                    geodesic: true,
                    strokeColor: '#708090',
                    strokeOpacity: 0.7,
                    strokeWeight: 2.5
                });









                
                assumedPath.setMap(map); // Set the path object to the map