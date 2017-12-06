<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <meta name="_csrf" content="${_csrf.token}"/>
    <meta name="_csrf_header" content="${_csrf.headerName}"/>

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css"/>
    <link rel="stylesheet" href="/resources/css/map.css">
    <title>Title</title>
</head>

<body>

<div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 bhoechie-tab-container">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 bhoechie-tab-menu">
                <div class="list-group">
                    <a href="#" class="list-group-item text-center">
                        <h4 class="glyphicon glyphicon-plus"></h4><br/>Add parking space
                    </a>
                    <a href="#" class="list-group-item text-center">
                        <h4 class="glyphicon glyphicon-map-marker"></h4><br/>Search parking space
                    </a>
                    <a href="#" class="list-group-item text-center" id="viewYourPs">
                        <h4 class="glyphicon glyphicon-edit"></h4><br/>View your parking spaces
                    </a>
                </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 bhoechie-tab">
                <!-- add section -->
                <div class="bhoechie-tab-content">
                    <fieldset id="add">
                        <legend>Add parking space</legend>
                        <div class="form-group">
                            <label for="addressSearch"> Address:</label>
                            <input id="addressSearch" type="text" placeholder="Search">
                            <input type="submit" class="btn btn-success" value="Search" id="addressSearchBtn"/>
                        </div>

                        <div class="form-group">
                            <label for="spotNumber">Parking spot number :</label>
                            <input id="spotNumber" type="number" name="spotNumber">
                        </div>

                        <div class="container">
                            <div class='col-md-7'>
                                <label>From: </label>
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker1'>
                                        <input type='text' class="form-control"/>
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="submit" name="addParking" class="btn btn-success" value="Add parking space" id="addParking2" >
                        <input type="hidden" name="${_csrf.parameterName}"  value="${_csrf.token}"/>
                    </fieldset>
                </div>
                <!-- search section -->
                <div class="bhoechie-tab-content">
                    <fieldset id="search">
                        <legend>Search parking space</legend>
                        <div class="container">
                            <div class='col-md-7'>
                                <label>Start date: </label>
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker3'>
                                        <input type='text' class="form-control"/>
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-7'>
                                <label>End date: </label>
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker4'>
                                        <input type='text' class="form-control"/>
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Show occupied spaces: </label>
                            <label class="radio-inline">
                                <input type="radio" name="showOccupied" value="true"> Yes
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="showOccupied" value="false" checked> No
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="distance">Maximum distance(metres):</label>
                            <input type="number" class="form-control" name="maxDistance" id="distance"/>
                        </div>
                        <div class="form-group">
                            <label for="searchTextField"> Address:</label>
                            <input id="searchTextField" type="text" placeholder="Search">
                            <input type="submit" class="btn btn-success" value="Search" id="searchBtn"/>
                        </div>


                    </fieldset>
                </div>
                <!-- your ps section -->
                <div class="bhoechie-tab-content">
                    <fieldset id="yourPs">
                        <legend>Your parking space</legend>
                        <div class="form-group">
                            <label for="addressSearch"> Address:</label>
                            <input id="addressSearchYours" type="text" placeholder="Search">
                            <input type="submit" class="btn btn-success" value="Search" id="addressSearchYoursBtn"/>
                        </div>

                        <div class="form-group">
                            <label for="yourSpotNumber">Parking spot number :</label>
                            <input id="yourSpotNumber" type="number" name="yourSpotNumber">
                        </div>

                        <div class="container">
                            <div class='col-md-7'>
                                <label>Day: </label>
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker5'>
                                        <input type='text' class="form-control" />
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-7'>
                                <label>From: </label>
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker6'>
                                        <input type='text' class="form-control"/>
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-time"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class='col-md-7'>
                                <label>To: </label>
                                <div class="form-group">
                                    <div class='input-group date' id='datetimepicker7'>
                                        <input type='text' class="form-control"/>
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-time"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="submit" name="addParking" class="btn btn-success" value="Add parking space" id="addYourParking" >
                        <input type="hidden" name="${_csrf.parameterName}"  value="${_csrf.token}"/>
                    </fieldset>
                </div>
            </div>
        </div>
        <div id="map-canvas"></div>
    </div>
    <div style ="padding-top: 30px; ">
        <%--<center>--%>
            <%--<table  id="tbDetails" style="width:100%">--%>
                <%--<tr>--%>
                    <%--<th >Street Address</th>--%>
                    <%--<th >Number</th>--%>
                    <%--<th >Latitude</th>--%>
                    <%--<th>Longitude</th>--%>
                    <%--<th>Availability</th>--%>
                    <%--<th></th>--%>
                    <%--<th></th>--%>
                <%--</tr>--%>

                <%--<!-- This is our clonable table line -->--%>

            <%--</table>--%>
        <%--</center>--%>
            <table id='parentTable' width=100%>
                <colgroup width="">
                    <tr>
                        <th style="width:26%;text-align: center">Street Address</th>
                        <th style="width:15%;text-align: center">Number</th>
                        <th style="width:20%;text-align: center" >Latitude</th>
                        <th style="width:20%;text-align: center">Longitude</th>
                        <th style="width:10%;text-align: center">Availability</th>
                        <th></th>
                        <th></th>
                    </tr>
</colgroup>
<tr>
    <td colspan=7>
        <div class='scroll' >
            <table id="tbDetails" width=100%>

            </table>
        </div>
    </td>
</tr>
</table>
    </div>
    <%--rezerva parking space--%>
    <div class="modal fade" id="addPs" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="bhoechie-tab-content">
                        <fieldset id="reservePs">
                            <legend>Reserve parking space</legend>
                            <div class="form-group">
                                <label for="addressSearch"> Address:</label>
                                <input id="addressPs" type="text" placeholder="Address" disabled>
                            </div>

                            <div class="container">
                                <div class='col-md-7'>
                                    <label>Day: </label>
                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker8'>
                                            <input type='text' class="form-control" />
                                            <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-7'>
                                    <label>From: </label>
                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker9'>
                                            <input type='text' class="form-control"/>
                                            <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-time"></span>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-md-7'>
                                    <label>To: </label>
                                    <div class="form-group">
                                        <div class='input-group date' id='datetimepicker10'>
                                            <input type='text' class="form-control"/>
                                            <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-time"></span>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <input type="submit" name="addParking" class="btn btn-success" value="Reserve parking space" id="reserveParking" >
                            <input type="hidden" name="${_csrf.parameterName}"  value="${_csrf.token}"/>
                        </fieldset>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<%--<script  src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="   crossorigin="anonymous"></script>--%>
<%--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>--%>
<%--<script src="resources/javascript/bootstable.min.js"></script>--%>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>

<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDsl9gy1E0LajY2Byc9mNaiVLffNywLm4&libraries=places&callback=initMap"></script>
<script src="/resources/javascript/map.js"></script>


</html>
