require('./app.sass');
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require("../node_modules/font-awesome/scss/font-awesome.scss");

import 'jquery';
import 'bootstrap-sass';

let page = `
    <br>
    <br>
    <br>
    <div class="container">
        <div class="jumbotron">
            <h1>
                webpack-starter
            </h1>
            <br>
            <br>
            <br>
            <div class="col-md-1 text-right">
                <i class="fa fa-circle-o-notch fa-spin fa-fw fa-2x"></i>
            </div>
            <div class="col-md-11">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%">
                        <span class="sr-only">65% Complete</span>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
`;

$('#app').html(page);
