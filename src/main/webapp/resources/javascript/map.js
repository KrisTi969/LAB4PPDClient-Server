$('#datetimepicker3').datetimepicker({
    showClear: true,
    keepOpen: true,
    format: 'MM/DD/YYYY HH:mm',
    minDate: moment().format()
});
$('#datetimepicker4').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    showClear: true,
    keepOpen: true,
    format: 'MM/DD/YYYY HH:mm'
});
$('#datetimepicker5').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    showClear: true,
    keepOpen: true,
    format: 'MM/DD/YYYY'
});
$('#datetimepicker6').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    showClear: true,
    keepOpen: true,
    format: 'HH:mm'
});
$('#datetimepicker7').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    showClear: true,
    keepOpen: true,
    format: 'HH:mm'
});
$('#datetimepicker8').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    showClear: true,
    keepOpen: true,
    format: 'MM/DD/YYYY'
});
$('#datetimepicker9').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    showClear: true,
    keepOpen: true,
    format: 'HH:mm'
});
$('#datetimepicker10').datetimepicker({
    useCurrent: false, //Important! See issue #1075
    showClear: true,
    keepOpen: true,
    format: 'HH:mm'
});
$('#datetimepicker1').datetimepicker({
    showClear: true,
    keepOpen: true,
    format: 'MM/DD/YYYY',
    minDate: moment().format()
});

function initMap() {
    var marker;
    var myOptions = {
            zoom: 20,
            center: new google.maps.LatLng(46.770439, 23.591423)
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
        infowindow = new google.maps.InfoWindow,
        geocoder = new google.maps.Geocoder();

    $('#searchBtn').on('click', function () {
        geocodeAddress(geocoder, map, searchParkingSpaces, 'search');
    });

    $('#addressSearchBtn').on('click', function () {
        centerCameraForAddressAtAdd(geocoder, map);
    });

    $("#addressSearchYoursBtn").on('click', function () {
        geocodeAddress(geocoder, map, setParkingSpace, 'set');
    });

    $("#viewYourPs").on('click', function () {
        geocodeAddress(geocoder, map, setParkingSpace, 'set');
    })


    $('#addParking2').on('click', function () {
        geocodeAddress(geocoder, map, addParkingSpace, 'add');
    });
    $("#addYourParking").on('click', function () {
        geocodeAddress(geocoder, map, addParkingSpace, 'add2');
    })



    map.addListener('rightclick', function (e) {
        var myLatLng = {lat: e.latLng.lat(), lng: e.latLng.lng()},
            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });
        map.setCenter(e.latLng);
        marker.setPosition(e.latLng);
        infowindow.setContent("Latitude: " + e.latLng.lat() +
            "<br>" + "Longitude: " + e.latLng.lng());
        infowindow.open(map, marker);

        marker.addListener('click', function (e) {
            infowindow.setContent("Latitude: " + e.latLng.lat() +
                "<br>" + "Longitude: " + e.latLng.lng());
            infowindow.open(map, marker);
        });
    });
    var input = document.getElementById('searchTextField');
    var input2 = document.getElementById('addressSearch');
    var input3 = document.getElementById('addressSearchYours');

    var searchBox3 = new google.maps.places.SearchBox(input3);
    map.addListener('bounds_changed', function () {
        searchBox3.setBounds(map.getBounds());
    })

    var searchBox2 = new google.maps.places.SearchBox(input2);
    map.addListener('bounds_changed', function () {
        searchBox2.setBounds(map.getBounds());
    });

    var searchBox = new google.maps.places.SearchBox(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];

    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
        new google.maps.places.Autocomplete(
            (document.getElementById('searchTextField')), {
                types: ['geocode']
            });

    });

    searchBox2.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
        new google.maps.places.Autocomplete(
            (document.getElementById('addressSearch')), {
                types: ['geocode']
            });

    });

    searchBox3.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
        new google.maps.places.Autocomplete(
            (document.getElementById('addressSearchYours')), {
                types: ['geocode']
            });

    });

    function setParkingSpace (latitude, longitude, map, action) {
        var latlng = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map
        });

        marker.setIcon(customIcon({
            fillColor: '#ffac25',
            strokeColor: '#000'
        }));}

    //din lat lng in address
    function geocodeLatLng(geocoder, map, infowindow) {
        var input = document.getElementById('searchTextField').value;
        var latlngStr = input.split(',', 2);
        var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
        geocoder.geocode({'location': latlng}, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    map.setZoom(11);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }

    //din address in lat lng
    function geocodeAddress(geocoder, resultsMap, callback, x) {

        var address, latitudeSearch, longitudeSearch;
        if (x == 'search') {
            address = document.getElementById('searchTextField').value;
            var action = infowindow;
        } else if (x == 'add') {
            address = document.getElementById('addressSearch').value;
            var action = 'addPublic';
        } else if (x == 'set') {
            address = document.getElementById('addressSearchYours').value;
        }  else if (x =='add2')
        {
            address = document.getElementById("addressSearchYours").value;
            var action = 'addPrivate';
        }
        geocoder.geocode({'address': address}, function (results, status) {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });

                latitudeSearch = marker.position.lat();
                longitudeSearch = marker.position.lng();
                callback(latitudeSearch, longitudeSearch, map, action);
            } else {
                alert('Geocode was not successful for the following reason12: ' + status);
            }
        });
    }


    function centerCameraForAddressAtAdd(geocoder, resultsMap) {
        var address = document.getElementById('addressSearch').value,
            getLat, getLong;
        geocoder.geocode({'address': address}, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    getAllYourParkingSpaces(map);
}


$("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
    e.preventDefault();
    $(this).siblings('a.active').removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
    $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
});

function getAllYourParkingSpaces(map) {
    var allParkingspaces;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getMyParkingSpaces",
        data: {},
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            if (data) {
                allParkingspaces = data;

                for (var i in data) {
                    var row =
                        '<tr id="tblRow" style="height:35px;">' +
                        '<td contenteditable="true" style="width:27%;text-align: center">' + data[i].streetAddress + '</td>' +
                        '<td contenteditable="true" style="width:15%;text-align: center">' + data[i].number.toString() + '</td>' +
                        '<td contenteditable="true" style="width:20%;text-align: center">' + data[i].latitude.toString() + '</td>' +
                        '<td contenteditable="true" style="width:20%;text-align: center">' + data[i].longitude.toString() + '</td>' +
                        '<td contenteditable="true" style="width:10%;text-align: center">' + data[i].available + '</td>' +
                        '<td style="text-align: center"><span class="table-edit glyphicon glyphicon-edit"></span></td>'+
                        '<td style="text-align: center"><span class="table-remove glyphicon glyphicon-remove"></span>'+
                        '</td>'+
                        '</tr>'
                    $("#tbDetails ").append(row);

                    for (var i = 0; i < data.length; i++) {
                        var latlng = new google.maps.LatLng(data[i].latitude, data[i].longitude);
                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });
                        marker.setIcon(customIcon({
                            fillColor: '#4165aa',
                            strokeColor: '#000'
                        }));
                    }
                }
                ;

            }
            else {
                console.log('naspa rau treaba');
                $("#ajaxResponse").html("<div><b>Eroare</b></div>");
            }
        },
        //If there was no resonse from the server
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something really bad!")
        },
        //capture the request before it was sent to server
        beforeSend: function (jqXHR, settings) {
        },
        //this is called after the response or error functions are finsihed so that we can take some action
        complete: function (jqXHR, textStatus) {
        }
    });
}

function searchParkingSpaces(lat, long, map, infowindow) {

    var timeStart = new Date($('#datetimepicker3 input').val()).getTime(),
        timeStop,
        latitude = lat, longitude = long, maxDistance = 500, showOccupied;

    if ($('#datetimepicker4 input').val() == "")
        timeStop = timeStart;
    else
        timeStop = new Date($('#datetimepicker4 input').val()).getTime();

    if ($("[name=maxDistance]").val() != "")
        maxDistance = $(this).val();
    else
        maxDistance = 500;

    showOccupied = $('input[name=showOccupied]:checked').val();

    if (latitude && longitude) {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/getParkingSpaces",
            data: {
                lat: latitude,
                long: longitude,
                timeStart: timeStart,
                timeStop: timeStop,
                maxDistance: maxDistance,
                showOccupied: showOccupied
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data) {
                    for (var i = 0; i < data.length; i++) {
                        console.log(data[i]);
                        var latlng = new google.maps.LatLng(data[i].latitude, data[i].longitude);
                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });
                        console.log(data[i]);
                        marker.setIcon(customIcon({
                            fillColor: '#80ff6b',
                            strokeColor: '#000',
                            address: data[i].address,
                            start: moment(data[i].start).format("MM/DD/YYYY"),
                            end: moment(data[i].end)
                        }));
                        console.log(moment(data[i].start).format("MM/DD/YYYY"));
                        google.maps.event.addListener(marker, 'click', (function (marker, i) {
                            return function () {
                                console.log(data[i]);

                                //   infowindow.setContent("Address:" + data[i].streetAddress + "<br>" + "Added by: " + data[i][addedBy].firstName + " " + data[i][addedBy].lastName + "<br>" + "Phone nr: "
                                // + data[i][addedBy].phoneNumber + " Email: " + data[i][addedBy].email);
                                // infowindow.open(map, marker);
                                $("#addPs").modal('show');
                                $("#addPs #addressPs").val(data[i].streetAddress);


                                var day = moment(data[i].start).format("MM/DD/YYYY"),
                                    start = moment(data[i].start).format("HH:mm"), stop = moment(data[i].stop).format("HH:mm");

                                $("#addPs #datetimepicker8 input").val(day);
                                $('#datetimepicker9 input').val(start);
                                $('#datetimepicker10 input').val(stop);

                                var timeStart = new Date(moment(day + " " + start)).getTime(),
                                timeStop = new Date(moment(day + " " + stop)).getTime();

                                $("[name=addParking]").click(function () {

                                    $.ajax({
                                        type: "POST",
                                        url: "http://localhost:8080/rezerv",
                                        data: {
                                            parkingSpaceId: data[i].id,
                                            timeStart: timeStart,
                                            timeStop: timeStop
                                        },
                                        dataType: "json",
                                        success: function (data, textStatus, jqXHR) {
                                            console.log(data);
                                            if (data) {
                                                console.log("Add success");
                                            }
                                            else {
                                                console.log("Add failed");
                                            }
                                        },
                                        //If there was no resonse from the server
                                        error: function (jqXHR, textStatus, errorThrown) {
                                            alert("Something really bad!", textStatus);
                                        },
                                        //capture the request before it was sent to server
                                        beforeSend: function (jqXHR, settings) {
                                        },
                                        //this is called after the response or error functions are finsihed so that we can take some action
                                        complete: function (jqXHR, textStatus) {
                                        }
                                    });
                                });

                            }
                        })(marker, i));
                        google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                            return function () {
                                console.log(data[i]);
                                //
                                // infowindow.setContent("Latitude: " + e.latLng.lat() +
                                //     "<br>" + "Longitude: " + e.latLng.lng());



                                infowindow.setContent("Address:" + data[i].streetAddress + "<br>" + "Added by: " + data[i].addedBy.firstName + " " + data[i].addedBy.lastName + "<br>" + "Phone nr: "
                                    + data[i].addedBy.phoneNumber + " Email: " + data[i].addedBy.email);
                                infowindow.open(map, marker);
                            }
                        })(marker, i));
                    }
                }
                else {
                    console.log('esec');
                    $("#ajaxResponse").html("<div><b>Eroare</b></div>");
                }
            },
            //If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something really bad!")
            },
            //capture the request before it was sent to server
            beforeSend: function (jqXHR, settings) {
            },
            //this is called after the response or error functions are finsihed so that we can take some action
            complete: function (jqXHR, textStatus) {
            }
        });
    }

};

function addParkingSpace(lat, long, map, action) {

    console.log(action);
    var address, spotNumber, start, stop, timeStart, timeStop, day;

    if( (action == 'addPublic')) {
            address = $('#addressSearch').val(),
            spotNumber = $('#spotNumber').val(),
            start = moment($('#datetimepicker1 input').val()).startOf('day').toDate(),
            stop = moment($('#datetimepicker1 input').val()).endOf('day'),
            timeStart = new Date(start).getTime(),
            timeStop = new Date(stop).getTime();
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/addParkingSpace",
            data: {
                address: address,
                number: spotNumber,
                timeStart: timeStart,
                timeStop: timeStop,
                lat: lat,
                long: long
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                if (data) {
                    console.log("Add success");
                }
                else {
                    console.log("Add failed");
                }
            },
            //If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Something really bad!", textStatus);
            },
            //capture the request before it was sent to server
            beforeSend: function (jqXHR, settings) {
            },
            //this is called after the response or error functions are finsihed so that we can take some action
            complete: function (jqXHR, textStatus) {
            }
        });
    }
    else {  //update yoor ps
            address = $('#addressSearchYours').val(),
            spotNumber = $('#yourSpotNumber').val(),
                day = $('#datetimepicker5 input').val(),
            start = $('#datetimepicker6 input').val();
            if ($('#datetimepicker7 input').val() == "")
                stop = "23:59:59";
            else
                stop = $('#datetimepicker7 input').val();
            console.log(day + "  " + start + "  " + stop);
            timeStart = new Date(moment(day + " " + start)).getTime();
            timeStop = new Date(moment(day + " " + stop)).getTime();
            var psId = JSON.parse(sessionStorage.getItem('userPs'));
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/edit",
            data: {
                streetAddress: address,
                number: spotNumber,
                latitude: lat,
                longitude: long,
                start: timeStart,
                stop: timeStop,
                id : psId['id']
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                console.log("asta ii data:" + data);
                if (data) {
                    console.log("Edit success");
                }
                else {
                    console.log("Edit failed");
                }
            },
            //If there was no resonse from the server
            error: function (jqXHR, textStatus, errorThrown) {
                for (var i in jqXHR)
                    console.log(jqXHR[i]);
                alert("Something really bad!", textStatus, errorThrown);
            },
            //capture the request before it was sent to server
            beforeSend: function (jqXHR, settings) {
            },
            //this is called after the response or error functions are finsihed so that we can take some action
            complete: function (jqXHR, textStatus) {
            }
        });
    }
}

$(document).ready(function () {

    User = function (id, username, email, firstName, lastName, id, parkingSpace, phoneNumber, plate) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.parkingSpace = parkingSpace;
        this.phoneNumber = phoneNumber;
        this.plate = plate;
    }

    ParkingSpace = function (id, streetAddress, numarParcare, latitude, longitude, availableStart, availableStop, addedBy ){
        this.id = id;
        this.streetAddress = streetAddress;
        this.numarParcare = numarParcare;
        this.latitude = latitude;
        this.longitude = longitude;
        this.availableStart = availableStart;
        this.availableStop = availableStop;
        this.addedBy = addedBy;

    }

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/getCurrentUser",
        data: {

        },
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data.parkingSpace);
            var user = new User ();
            var userPs = new ParkingSpace();
            user['username'] = data.username;
            user['email'] = data.email;
            user['firstName'] = data.firstName;
            user['lastName'] = data.lastName;
            user['id'] = data.id;
            if (data.parkingSpace) {
                user['id'] = data.id;
                user['parkingSpace'] = data.parkingSpace.id;
                userPs['id'] = data.parkingSpace.id;
                userPs['streetAddress'] = data.parkingSpace.streetAddress;
                userPs['numarParcare'] = data.parkingSpace.number;
                userPs['latitude'] = data.parkingSpace.latitude;
                userPs['longitude'] = data.parkingSpace.longitude;
                userPs['availableStart'] = data.parkingSpace.start;
                userPs['availableStop'] = data.parkingSpace.stop;
            }
            else
                user['parkingSpace'] = -1;

            user['phoneNumber'] = data.phoneNumber;
            user['plate'] = data.plate;

            sessionStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('userPs', JSON.stringify(userPs));
        },
        //If there was no response from the server
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something really bad!" + errorThrown + '   txt ' + textStatus );
        },
        //capture the request before it was sent to server
        beforeSend: function (jqXHR, settings) {
        },
        //this is called after the response or error functions are finsihed so that we can take some action
        complete: function (jqXHR, textStatus) {
        }
    }).then( function () {
        var theUser = JSON.parse(sessionStorage.getItem('user'));
        if (theUser['parkingSpace'] == '-1') {
      //      $("#add .container").css('display', 'none');
            $("#viewYourPs").css('display', 'none');
        }
        else {
            var userPs = JSON.parse(sessionStorage.getItem('userPs'));
            $("#add .container").css('display', 'block');
            $("#yourPs").css('display', 'block');
            $("#addressSearchYours").val(userPs['streetAddress']);
            $("#yourSpotNumber").val(userPs['numarParcare']);

            var day = moment(userPs['avaiableStart']).format("MM/DD/YYYY"),
                stDate = moment(userPs['availableStart']).format('hh:mm'),
                enDate = moment(userPs['availableStop']).format("hh:mm");
            $('#datetimepicker5 input').val(day);
            $('#datetimepicker6 input').val(stDate);
            $('#datetimepicker7 input').val(enDate);

        }
    });
});

function customIcon(opts) {
    return Object.assign({
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: '#4165aa',
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1,
    }, opts);
}



