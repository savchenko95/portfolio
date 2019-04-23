import {Modal} from "./modal-window";
import {Form} from "./form-animation";
import {Arrow} from "./top-arrow";
import {Sidebar} from "./sidebar";
import {Scroll} from "./scroll";
import {ProjectFadeInAnimation} from "./projects-fade-in-animation";
var $ = require("jquery");


$(document).ready(function(){
  Scroll();
  Modal();
  Form();
  Arrow();
  Sidebar();
  ProjectFadeInAnimation();
});
