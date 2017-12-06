<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <link rel="stylesheet" href="/resources/css/index.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="/resources/css/offline-theme-default.css">
    <link rel="stylesheet" href="/resources/css/offline-language-english.css">
    <link rel="shortcut icon" href="/resources/css/favicon.ico" type="image/x-icon">
    <title>Title</title>
</head>

<body >
<sec:authorize access="isAnonymous()"> <!--apare cand nu esti logat -->

    <div class="container">

        <div class="card card-container">

            <c:if test="${loginFailed != null}">
                <div class="alert alert-danger">
                    <strong>${loginFailed}</strong>
                </div>
            </c:if>


            <c:if test="${registerSuccess == true}">
                <div class="alert alert-success">
                    <strong>Inregistrare cu succes! Va rugam verificati-va email-ul pentru activarea contului.</strong>
                </div>
            </c:if>

            <c:if test="${registerFailed == true}">
                <div class="alert alert-danger">
                    <strong>Inregistrarea nu s-a efectuat!</strong>
                </div>
            </c:if>


            <c:if test="${sendSuccess == true}">
                <div class="alert alert-info">
                    <strong>Email-ul a fost trimis!</strong>
                </div>
            </c:if>


            <c:if test="${sendFailed == true}">
                <div class="alert alert-danger">
                    <strong>Email-ul nu exista!</strong>
                </div>
            </c:if>


            <c:if test="${resetSuccess == true}">
                <div class="alert alert-success">
                    <strong>Parola a fost schimbata!</strong>
                </div>
            </c:if>

            <c:if test="${resetFailed == true}">
                <div class="alert alert-danger">
                    <strong>Problema la schimbarea parolei!</strong>
                </div>
            </c:if>

            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
            <p id="profile-name" class="profile-name-card"></p>

            <div role="dialog">
                <form class="form-signin" id="loginForm" action="/login_check" method="POST" role="form">
                    <span id="reauth-email" class="reauth-email"></span>
                    <div class="form-group">
                        <input type="text" id="inputEmail" class="form-control" placeholder="Email address"
                               name="username_login"
                               required autofocus>
                    </div>
                    <div class="form-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                               name="password_login"
                               required>
                    </div>
                    <div id="remember" class="checkbox">
                        <label>
                            <input type="checkbox" name="remember-me"> Remember me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" id="submitBtn">Sign in
                    </button>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" type="button"
                            data-toggle="modal"
                            data-target="#registerF">Register
                    </button>
                    <button class="btn btn-link" type="button" data-toggle="modal"
                            data-target="#emailForm"> Forgot you password?
                    </button>
                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                </form>
            </div>
        </div>

        <div class="modal fade" role="dialog" id="registerF">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h3 class="modal-title"> Register </h3>
                    </div>
                    <div class="modal-body">
                        <form name='registerForm' action="/register" method='POST' role="form">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                            <div class="form-group">
                                <label> Email: </label>
                                <input type='email' name='email' class="form-control" placeholder="email" required>
                            </div>
                            <div class="form-group">
                                <label> Password: </label>
                                <input type='password' name='password' class="form-control" placeholder="password"
                                       required/>
                            </div>
                            <div class="form-group">
                                <label> Confirm password </label>
                                <input type='password' name='password2' class="form-control" placeholder="Password"
                                       required/>
                            </div>
                            <div class="form-group">
                                <label> Phone Number: </label>
                                <input type="text" name="phoneNumber" class="form-control" placeholder="Phone number"
                                       required>
                            </div>
                            <div class="form-group">
                                <label> Plate Number: </label>
                                <input type="text" name="plate" class="form-control" placeholder="Plate number"
                                       required>
                            </div>
                            <div class="form-group">
                                <label> FirstName: </label>
                                <input type='text' name='firstName' class="form-control" class="form-control"
                                       placeholder="First name" required>
                            </div>
                            <div class="form-group">
                                <label> LastName: </label>
                                <input type='text' name='lastName' class="form-control" placeholder="Last name"
                                       required>
                            </div>
                            <div class="form-group">
                                <label> Do you have parking space? </label> <br>
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                       value="yes"
                                       checked required>
                                <label> Yes </label>

                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                       value="no" required>
                                <label> No </label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="checkboxTC" value="termsAcons"/>
                                <a href="#" id="termsAcons" data-toggle="modal"
                                   data-target="#termsCons"> I agree to the Terms and Conditions</a>
                            </div>


                            <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                                Submit
                            </button>
                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" role="dialog" id="emailForm">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <label><i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
                    </div>
                    <div class="modal-body">
                        <form action="/resetPart1" method="POST" role="form" id="resetEmailForm">
                            <div class="form-group">
                                <input type="text" class="form-control" name="email_reset" placeholder="Enter Email"
                                       required>
                            </div>

                            <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">
                                Send email
                            </button>
                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <c:if test="${passwordReset == true}">
            <div role="dialog" id="resetPassForm">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <form action="/resetPart2" method="post" role="form" id="passForm">
                                <div class="form-group">
                                    <input type="password" placeholder="Password" name="password_reset">
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Confirm password" name="password2_reset">
                                </div>
                                <button type="submit">reset</button>
                                <input type="hidden" name="token" value="${token}"/>
                                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </c:if>

        <div class="modal fade" role="dialog" id="termsCons">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <label><i class="fa fa-envelope" aria-hidden="true"></i> Terms and Conditions</label>
                    </div>
                    <div class="modal-body">
                        BLA BLA BLA
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</sec:authorize>



<c:url value="/logout" var="logoutUrl"/>
<form action="${logoutUrl}" method="post" id="logoutForm">
    <input type="hidden" name="${_csrf.parameterName}"
           value="${_csrf.token}"/>
</form>

<sec:authorize access="isAuthenticated()">
    <a href="javascript:formSubmit()" class="logout-btn"><span class="glyphicon glyphicon-log-out"></span>&nbsp&nbsp Logout</a>
    <jsp:include page="map.jsp"/>
</sec:authorize>
<script type="text/javascript" src="/resources/javascript/index.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="http://formvalidation.io/vendor/formvalidation/js/formValidation.min.js"></script>
<script src="http://formvalidation.io/vendor/formvalidation/js/framework/bootstrap.min.js"></script>
<script src="https://use.fontawesome.com/5a638b4cc0.js"></script>
<script type="text/javascript" src="/resources/javascript/offline.js"></script>
<script type="text/javascript">
    Offline.options = {
        // to check the connection status immediatly on page load.
        checkOnLoad: false,

        // to monitor AJAX requests to check connection.
        interceptRequests: true,

        // to automatically retest periodically when the connection is down (set to false to disable).
        reconnect: {
            // delay time in seconds to wait before rechecking.
            initialDelay: 3,

            // wait time in seconds between retries.
            delay: 1
        },

        // to store and attempt to remake requests which failed while the connection was down.
        requests: true
    };

</script>
</body>
</html>
