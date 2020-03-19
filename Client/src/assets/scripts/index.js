import M from 'materialize-css' ;
import $ from 'jquery';



const Materialize_SideNav = () => {
  // Sidenav
  const sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav, {});
}


const Materialize_Slider = () => {
  // Slider
  const slider = document.querySelector('.slider');
  M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });
}


const Materialize_AutoComplete = () => {
  // Autocomplete
  const ac = document.querySelector('.autocomplete');
  M.Autocomplete.init(ac, {
    data: {
      'Ariana': null,
      'Beja': null,
      'Bizerte': null,
      'Ben Arous': null,
      'Tataouine': null,
      'Tozeur': null,
      'Tunis': null,
      'Jandouba': null,
      'Zaghouan': null,
      'Siliana': null,
      'Sousse': null,
      'Sfax': null,
      'Gabes': null,     
      'Gafsa': null,
      'Kairouan':null,
      'Kasserine':null,
      'Le Kef':null,
      'Mahdia':null,
      'Manouba':null,
      'Medenine':null,
      'Monastir':null,
      'Nabeul':null,
      'Kebili':null,
      'Sidi Bouzid':null
    }
  });
}


const Materialize_MaterialBoxed = () => {
  // Material Boxed
  const mb = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(mb, {});
}


const Materialize_ScrollSpy = () => {
  // ScrollSpy
  const ss = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(ss, {});
}


const Materialize_SelectIMG = () => {
  document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  });
}


const Materialize_Date = () => {
  document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, { });
  });
}


const Materialize_Notifcations = () => {
  document.getElementById('delete').addEventListener('click', function(){
    M.toast({html: 'Sucess DELETE .. ', displayLength: 1000, classes: 'red'});
  });

  // document.getElementById('update').addEventListener('click', function(){
  //   M.toast({html: 'Sucess UPDATE .. ', displayLength: 1000, classes: 'blue'});
  // });

  // document.getElementById('print').addEventListener('click', function(){
  //   M.toast({html: 'Sucess PRINT .. ', displayLength: 1000, classes: 'black'});
  // });
}


const Materialize_Contact_Notifcations = () => {
  document.getElementById('send').addEventListener('click', function(){
    M.toast({html: 'Sucess .. ', displayLength: 4000, classes: 'green'});
  });
}


const hideErrors = () => {
  setTimeout(function (){
    $('#errors').hide();
  },5000) ;
}



export { 
  hideErrors,
  Materialize_Contact_Notifcations,
  Materialize_Notifcations,
  Materialize_Date,
  Materialize_SelectIMG,
  Materialize_SideNav,
  Materialize_Slider,
  Materialize_AutoComplete,
  Materialize_MaterialBoxed,
  Materialize_ScrollSpy 
};