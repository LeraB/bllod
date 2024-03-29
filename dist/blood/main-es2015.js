(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n  <div class=\"mb-4 content\">\n  <router-outlet></router-outlet>\n  </div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-form/donor-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-form/donor-form.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <section class=\"user-form user-register-form mb-5\">\n    <form #formData=\"ngForm\" [formGroup]=\"form\"  (ngSubmit)=\"onSubmit(formData.value)\" class=\"form col-4\">\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"text\" id=\"fullName\" name=\"fullName\"\n               formControlName=\"fullName\" placeholder=\"Прізвище, ім'я, по батькові\">\n      </div>\n\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"text\" id=\"phoneNumber\" name=\"phoneNumber\"\n               formControlName=\"phoneNumber\" placeholder=\"Телефон (+380...)\">\n      </div>\n\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"number\" min=\"1\" max=\"4\" id=\"bloodType\" name=\"bloodType\"\n               formControlName=\"bloodType\" placeholder=\"Група крові\">\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioPlus\" value=\"option1\">\n          <label class=\"form-check-label\" for=\"inlineRadioPlus\">+\n          </label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioMinus\" value=\"option2\">\n          <label class=\"form-check-label\" for=\"inlineRadioMinus\">-</label>\n        </div>\n      </div>\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"text\" id=\"locality\" name=\"locality\"\n               formControlName=\"locality\" placeholder=\"Місто\">\n      </div>\n\n      <div class=\"form__item form-field form-group\">\n        <textarea class=\"form__input form-control\" id=\"reason\" name=\"reason\"\n               formControlName=\"reason\" placeholder=\"Причина...\"></textarea>\n      </div>\n      <button type=\"reset\"  class=\"btn btn-outline-primary ml-2 mr-4\" (click)=\"formData.reset()\">Очистити</button>\n      <button type=\"submit\"  class=\"btn btn-primary\">Відправити</button>\n    </form>\n  </section>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-list/donor-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-list/donor-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-list-wrap\">\n  <ul class=\"product-list row\">\n    <app-donor class=\"col-3\"\n      *ngFor=\"let donor of favouritesList\"\n      [donor]=donor\n      (removeFromList)=\"removeFromFavorites($event)\"\n      [isInFavoriteList]=true\n    ></app-donor>\n    <app-donor class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\"\n      *ngFor=\"let donor of donors\"\n      [donor]=donor\n      (addToList)=\"addToFavorites($event)\"\n    ></app-donor>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor/donor.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor/donor.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li\n  class=\"donor-list__item mb-4\"\n>\n  <div class=\"donor-list__content\">\n    <h5 class=\"donor-list__name\">{{donor.first_name}}</h5>\n    <p>Пошта: {{donor.email}}</p>\n    <p class=\"donor-list__description\">Група крові: {{donor.RhesusFactor}}{{donor.BloodType}}</p>\n    </div>\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donors-main/donors-main.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donors-main/donors-main.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-5\">\n<div class=\"products-main row\">\n  <div class=\"search col-12 mb-xs-2 mb-md-4\">\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"fetchPeople()\">\n    <input\n      type=\"text\"\n      #searchInput\n      class=\"search__input d-md-inline-block form-control mr-md-2 col-xs-12 col-md-4 col-md-3 mb-3 mb-md-0\"\n      placeholder=\"Пошук по імені\"\n      formControlName=\"searchInput\"\n    >\n    <select class=\"search__select d-md-inline-block form-control mr-md-2 col-xs-12 col-md-3 mb-3 mb-md-0\" formControlName=\"searchRhesusFactor\" #searchRhesusFactor>\n      <option value=\"default\">- Резус фактор -</option>\n      <option value=\"plus\">+</option>\n      <option value=\"minus\">-</option>\n    </select>\n    <select class=\"search__select d-md-inline-block form-control col-xs-12 col-md-3 mb-3 mb-md-0\" formControlName=\"searchType\" #searchType>\n      <option value=\"default\">- Група крові -</option>\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n    </select>\n      <button type=\"submit\" class=\"donor-list__link btn btn-danger ml-4\">Шукати</button>\n    </form>\n  </div>\n  <app-donor-list\n    [donors] = filteredDonors\n  >\n  </app-donor-list>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donors-info/donors-info.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donors-info/donors-info.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article class=\"p-5 container\">\n            <h1 id=\"title1\" class=\"pt-5\">Як стати донором крові?</h1>\n\n\n            <div id=\"text1\">\n                <p>Донором крові в Україні може бути здорова людина віком від <strong>18 років, вагою від 50 кг</strong> (однак, в деяких центрах крові приймають з вагою лише від <strong>55-60 кг</strong>, наприклад, у Львівському обласному центрі служби крові). Якщо з віком та кілограмами більш-менш зрозуміло, то яка ж це здорова людина зрозуміти складніше.</p>\n<p>Отже, здорова людина — це та, яка не має протипоказів до донорства. Іншими словами, якщо ви приймаєте ліки, маєте хронічні захворювання чи стоїте на обліку — донорство крові вам протипоказане чи на постійній основі, чи на тимчасовій.</p>\n<p>А тепер перейдемо до деталей і ознайомимось які саме є протипокази до донорства. Вони діляться на тимчасові та абсолютні і ми рекомендуємо обов'язково ознайомитись з ними за посиланнями.</p>\n<p>Чому ж існує такий величезний список протипоказів і навіщо вони, адже кров все одно перевіряють/тестують в лабораторії перед тим як видати пацієнтам в лікарні. Це все тому, що донорство в першу чергу — це турбота про донора, тобто працює принцип \"не нашкодь собі\". Адже погодьтесь, якщо людина потребує допомоги чи через підвищену температуру, чи має хронічне захворювання, до прикладу, псоріаз її організм потребує на даний момент відпочинку і лікування, а не навантаження. То ж спочатку турбуємось про себе і свій стан здоров'я, а вже потім — рятуємо інших.</p>\n<div id=\"text1\">\n                <p>Абсолютні протипоказання щодо донорства крові та її компонентів визначені в Додатку 3 до <a href=\"https://zakon4.rada.gov.ua/laws/show/z0896-05\" target=\"_blank\">Порядку медичного обстеження донорів крові та (або) її компонентів</a> в розділі 1 - \"Абсолютні протипоказання (усунення від донорства незалежно від давності захворювання і результатів лікування)\".</p>\n<p>1.1. Гемотрансмісивні захворювання</p>\n<p>1.1.1. Інфекційні:</p>\n<ul>\n<li>СНІД, носійство Віл-інфекції.</li>\n<li>Сифіліс вроджений або набутий.</li>\n<li>Вірусні гепатити, позитивний результат дослідження на маркери вірусних гепатитів.</li>\n<li>Туберкульоз, усі форми.</li>\n<li>Бруцельоз, сипний тиф, туляремія, лепра, хвороба Крейтцфельдта-Якоба.</li>\n</ul>\n<p>1.1.2. Паразитарні: ехінококоз, токсоплазмоз, трепаносомоз, філяріатоз, ришта, лейшманіоз. </p>\n<p>1.2. Соматичні захворювання</p>\n<p>1.2.1. Злоякісні новотвори.</p>\n<p>1.2.2. Хвороби крові.</p>\n<p>1.2.3. Органічні захворювання ЦНС.</p>\n<p>1.2.4. Повна відсутність слуху і (або) мови.</p>\n<p>1.2.5. Психічні захворювання.</p>\n<p>1.2.6. Наркоманія, алкоголізм.</p>\n<p>1.2.7. Серцево-судинні захворювання: гіпертонічна хвороба II - III ст., ішемічна хвороба серця, атеросклероз, атеросклеротичний кардіосклероз, облітеруючий \nендоартеріїт, неспецифічний аортоартеріїт, рецидивуючий тромбофлебіт, ендокардит, міокардит, вади серця.</p>\n<p>1.2.8. Хвороби органів дихання:бронхіальна астма, бронхоектатична хвороба, емфізема легень, обструктивний бронхіт, дифузійний пневмосклероз у стадії \nдекомпенсації.</p>\n<p>1.2.9. Хвороби органів травлення:ахілічний гастрит, виразкова хвороба шлунка і дванадцятипалої кишки.</p>\n<p>1.2.10. Захворювання печінки і жовчних шляхів: хронічні \nзахворювання печінки, у тому числі токсичної природи і неясної \nетіології калькульозний холецистит з повторюваними приступами і \nявищами холангіту, цироз печінки.</p>\n<p>1.2.11. Захворювання нирок і сечовивідних шляхів у стадії декомпенсації: дифузні й вогнищеві і ураження нирок, сечокам'яна хвороба.</p>\n<p>1.2.12. Дифузні захворювання сполучної тканини.</p>\n<p>1.2.13. Променева хвороба.</p>\n<p>1.2.14. Хвороби ендокринної системи у випадку порушення функцій і обміну речовин.</p>\n<p>1.2.15. Хвороби лор-органів:озена, інші гострі і хронічні важкі гнійно-запальні \nзахворювання.</p>\n<p>1.2.16. Очні хвороби: залишкові явища увеїту (ірит, іридоцикліт, хоріоретініт), висока міопія (6 Д і більше), трахома, повна сліпота.</p>\n<p>1.2.17. Шкірні хвороби: розповсюджені захворювання шкіри запального і інфекційного \nхарактеру. Псоріаз, еритродермія, екземи, червоний вівчак, пухирчасті дерматози, грибкові поразки шкіри (мікроспорія, трихофітія, фавус, епідермофітія) і внутрішніх органів (глибокі мікози), гнійничкові захворювання шкіри (піодермія, фурункульоз, сікоз).</p>\n<p>1.2.18. Остеомієліт гострий і хронічний.</p>\n<p>1.2.19. Оперативні втручання з приводу ампутації або резекції \nоргана і трансплантації органів та тканин. </p>\n<p>1.3. Форми ризикованої поведінки:</p>\n<ul>\n<li>надання сексуальних послуг за плату,</li>\n<li>статеві стосунки з малознайомими особами без презерватива,</li>\n<li>часта зміна статевих партнерів,</li>\n<li>гомосексуальні стосунки,</li>\n<li>наркоманія.</li>\n</ul>\n\n            </div>\n<p>До прикладу, нас часто питають, чи можу я бути донором, якщо \"приймаю протизаплідні таблетки\"? Якщо ви приймаєте їх з метою контрацепції, а не лікування — ви можете бути донором. Такі та багато інших питань турбують наших потенційних донорів, тож не соромтесь запитати й ви отримаєте <a href=\"https://www.messenger.com/t/donorua.ukraine\" target=\"_blank\">консультацію лікаря он-лайн</a>.</p>\n<p>Ви дізнались, що можете бути донором крові, що робити далі?\nВсе досить просто, достатньо обрати центр крові чи реципієнта, якому ви хочете допомогти і запланувати кроводачу на зручний для вас день.</p>\n<p><strong>Жодних попередніх аналізів крові чи довідок не потрібно!</strong></p>\n<p>Бути донором — це відповідально, тому варто дотриматись правил підготовки й харчування перед донацією.</p>\n<p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/DuO-t9qMyqI?controls=0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe></p>\n<p><strong>ВАЖЛИВО!</strong> Обов'язково потрібно взяти з собою документ, що посвідчує особу інакше ризикуєте не здати кров, тож не забудьте <strong>паспорт громадянина України та ідентифікаційний код.</strong></p>\n<p>Після того як ви стали донором крові є правила відновлення, рекомендуємо вам дотримуватись їх і через 60 днів можна знову стати донором крові!</p>\n<p>Здавайте кров регулярно і залишайтеся здоровими!</p>\n\n            </div>\n        </article>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container\">\n  <div class=\"footer--content\">\n  <div class=\"logo--wrapper\">\n    <a class=\"logo\" routerLink=\"/\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n           viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\"><path d=\"M50.772522,15.6499023c0,0-29.9922485,24.6333008-29.9922485,44.4804688  c0,19.8471069,13.4277344,27.3916016,29.9922485,27.3916016c16.5643921,0,29.9911499-7.5444946,29.9911499-27.3916016  C80.7636719,40.2832031,50.772522,15.6499023,50.772522,15.6499023z M72.3300781,60.1787109h-6.7686157l-1.1825562,5.0561523  c-0.1133423,0.4829102-0.5438843,0.8251953-1.0400391,0.8251953c-0.0019531,0-0.0038452,0-0.0058594,0  c-0.4990234-0.0038452-0.9296875-0.3510742-1.0371094-0.8383789l-1.585022-7.1607056l-3.5067749,19.9570923  c-0.0897827,0.5117188-0.5352173,0.8828125-1.0518188,0.8828125c-0.0136108,0-0.0272827-0.0004883-0.0418701-0.0004883  c-0.5333252-0.0209961-0.9698486-0.4331055-1.0215454-0.9649048l-3.2617798-33.7753296l-5.9755249,23.9663086  c-0.1171875,0.4716187-0.5390739,0.8041992-1.0244751,0.809021c-0.0039063,0-0.0078125,0-0.0117188,0  c-0.4813843,0-0.9042969-0.3217163-1.0301514-0.7866211l-3.2421875-11.8964844l-1.9727173,8.331604  c-0.1240234,0.5272827-0.6230469,0.8807983-1.163147,0.8143921c-0.5380859-0.0629883-0.9442749-0.5189819-0.9442749-1.0609741  v-4.4852905h-7.2490234c-0.5908813,0-1.0683594-0.4781494-1.0683594-1.0679321c0-0.5899048,0.477478-1.0684204,1.0683594-1.0684204  h8.3174438c0.1590576,0,0.3114624,0.034729,0.446167,0.0982056l1.4541016-6.1367798  c0.1123047-0.4750977,0.5332031-0.8134155,1.0214844-0.8217163c0.0059204,0,0.0127563,0,0.0176392,0  c0.4813843,0,0.9042969,0.3217163,1.0302734,0.7875977l3.2684937,11.993103l6.4873047-26.0189819  c0.125-0.5043945,0.5899048-0.8447266,1.1152954-0.8067017c0.5184937,0.0391235,0.9335938,0.4448853,0.984314,0.9624023  l3.1044922,32.1362915l3.0772095-17.5170898c0.0878906-0.5025024,0.5184937-0.8721313,1.0272827-0.8833008  c0.5410156-0.0303345,0.9580078,0.3397827,1.0674438,0.8374023l1.7353516,7.8353882l0.3066406-1.3143921  c0.1132813-0.4829102,0.5448608-0.8242188,1.039978-0.8242188h7.6152954c0.5897827,0,1.0682983,0.4780273,1.0682983,1.0678101  C73.3983765,59.7011719,72.9198608,60.1787109,72.3300781,60.1787109z\" fill=\"#e50000\"/>\n</svg>\n\n    </a>\n  </div>\n\n  <nav id=\"menu-list\" class=\"navigation\">\n    <ul class=\"nav justify-content-end\">\n      <li class=\"nav-item\" *ngIf=\"authService.login\">\n        <a routerLink=\"/new-donor\" routerLinkActive=\"active-link\" class=\"navigation__item nav-link active\">\n          Здати кров\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.login\">\n        <a routerLink=\"/donors-list\" routerLinkActive=\"active-link\" class=\"navigation__item nav-link\">\n          Донори\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.login\">\n        <a routerLink=\"/recipients-list\" routerLinkActive=\"active-link\" class=\"navigation__item nav-link\">\n          Реципієнти\n        </a>\n      </li>\n    </ul>\n  </nav>\n  </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <div class=\"container\">\n<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n<div class=\"header_logo\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n     viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\"><path d=\"M50.772522,15.6499023c0,0-29.9922485,24.6333008-29.9922485,44.4804688  c0,19.8471069,13.4277344,27.3916016,29.9922485,27.3916016c16.5643921,0,29.9911499-7.5444946,29.9911499-27.3916016  C80.7636719,40.2832031,50.772522,15.6499023,50.772522,15.6499023z M72.3300781,60.1787109h-6.7686157l-1.1825562,5.0561523  c-0.1133423,0.4829102-0.5438843,0.8251953-1.0400391,0.8251953c-0.0019531,0-0.0038452,0-0.0058594,0  c-0.4990234-0.0038452-0.9296875-0.3510742-1.0371094-0.8383789l-1.585022-7.1607056l-3.5067749,19.9570923  c-0.0897827,0.5117188-0.5352173,0.8828125-1.0518188,0.8828125c-0.0136108,0-0.0272827-0.0004883-0.0418701-0.0004883  c-0.5333252-0.0209961-0.9698486-0.4331055-1.0215454-0.9649048l-3.2617798-33.7753296l-5.9755249,23.9663086  c-0.1171875,0.4716187-0.5390739,0.8041992-1.0244751,0.809021c-0.0039063,0-0.0078125,0-0.0117188,0  c-0.4813843,0-0.9042969-0.3217163-1.0301514-0.7866211l-3.2421875-11.8964844l-1.9727173,8.331604  c-0.1240234,0.5272827-0.6230469,0.8807983-1.163147,0.8143921c-0.5380859-0.0629883-0.9442749-0.5189819-0.9442749-1.0609741  v-4.4852905h-7.2490234c-0.5908813,0-1.0683594-0.4781494-1.0683594-1.0679321c0-0.5899048,0.477478-1.0684204,1.0683594-1.0684204  h8.3174438c0.1590576,0,0.3114624,0.034729,0.446167,0.0982056l1.4541016-6.1367798  c0.1123047-0.4750977,0.5332031-0.8134155,1.0214844-0.8217163c0.0059204,0,0.0127563,0,0.0176392,0  c0.4813843,0,0.9042969,0.3217163,1.0302734,0.7875977l3.2684937,11.993103l6.4873047-26.0189819  c0.125-0.5043945,0.5899048-0.8447266,1.1152954-0.8067017c0.5184937,0.0391235,0.9335938,0.4448853,0.984314,0.9624023  l3.1044922,32.1362915l3.0772095-17.5170898c0.0878906-0.5025024,0.5184937-0.8721313,1.0272827-0.8833008  c0.5410156-0.0303345,0.9580078,0.3397827,1.0674438,0.8374023l1.7353516,7.8353882l0.3066406-1.3143921  c0.1132813-0.4829102,0.5448608-0.8242188,1.039978-0.8242188h7.6152954c0.5897827,0,1.0682983,0.4780273,1.0682983,1.0678101  C73.3983765,59.7011719,72.9198608,60.1787109,72.3300781,60.1787109z\" fill=\"#e50000\"/>\n</svg>\n   </div>\n</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link navigation__item nav-link\" routerLink = \"/donors-info\">Інформація для донора <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.login\">\n        <a class=\"nav-link navigation__item nav-link\" routerLink = \"/new-demand\">Подати заявку на кров</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"authService.login\">\n        <a class=\"nav-link navigation__item nav-link\" routerLink = \"/recipients-list\">\n          Реципієнти\n        </a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"!authService.login\">\n        <a class=\"nav-link navigation__item nav-link\" routerLink = \"/login\">\n          Увійти/Зареєструватись\n        </a>\n      </li>\n     <li class=\"nav-item dropdown\" *ngIf=\"authService.login\">\n        <a class=\"nav-link navigation__item nav-link\" href = \"/\" (click)=\"logout()\">\n          Вихід\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n    </div>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hero\">\n<div class=\"container\">\n<div class=\"row pb-5 pt-5\">\n  <h1 class=\"col-md-12 col-lg-4 text-center mt-sx-0 mt-md-5\">Почни рятувати життя разом з нами!</h1>\n  <img src=\"assets/image.png\" alt=\"blood\" class=\"col-md-12 col-lg-8\">\n</div>\n</div>\n</div>\n<div class=\"container\">\n<div class=\"row pt-5\">\n  <div class=\"block-give-blood col-11 col-sm-5 mb-3 col-md-4 col-lg-3 card text-center \">\n<a routerLink=\"/donors-info\">\n    <img class=\"block-give-blood__img card-img-top\" src=\"assets/noun_blood.svg\">\n    <div class=\"card-body\">\n    <p>Як стати донором крові?</p>\n    </div>\n</a>\n  </div>\n\n\n  <div *ngIf=\"authService.login\" class=\"block-get-blood col-11 col-sm-5 mb-3 col-md-4 col-lg-3 card text-center\">\n <a routerLink=\"/new-demand\">\n    <img class=\"block-get-blood__img card-img-top\" src=\"assets/noun_Blood Donation.svg\">\n    <div class=\"card-body\">\nПотрібна кров?\n    </div>\n</a>\n  </div>\n\n  <div *ngIf=\"!authService.login\" class=\"block-get-blood col-11 col-sm-5 mb-3 col-md-4 col-lg-3 card text-center\">\n <a routerLink=\"/login\">\n    <img class=\"block-get-blood__img card-img-top\" src=\"assets/noun_Blood Donation.svg\">\n    <div class=\"card-body\">\nПотрібна кров?\n    </div>\n</a>\n  </div>\n\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-5\">\n<section class=\"user-form pt-5 mb-5 user-login-form\" #loginForm ng-init=\"script()\">\n<div class=\"user-login-form--message\"><p>Ми використовуємо Телеграм, для сповіщення користувачів про нові запити крові. Ввійдіть за допомогою Телеграм аккаунту, щоб завжди бути вкурсі подій. </p>\n</div>  \n<div class=\"telegram-login\" #script>\n    <ng-content></ng-content>\n  </div>\n</section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-5\">\n<div class=\"row\">\n<div class=\"col-12 text-center pt-5 mb-5\">\n  <h1>Помилка 404: сторінка не знайдена</h1>\n</div>\n</div>\n\n  <div class=\"row pt-5\">\n    <div class=\"block-give-blood col-11 col-sm-5 mb-3 col-md-4 col-lg-3 card text-center \">\n      <img class=\"block-give-blood__img card-img-top\" src=\"assets/noun_blood.svg\">\n      <div class=\"card-body\">\n        <a routerLink=\"/new-donor\" class=\"block-give-blood_link btn btn-primary\">Здати кров</a>\n      </div>\n    </div>\n\n\n    <div class=\"block-get-blood col-11 col-sm-5 mb-3 col-md-4 col-lg-3 card text-center\">\n      <img class=\"block-get-blood__img card-img-top\" src=\"assets/noun_Blood Donation.svg\">\n      <div class=\"card-body\">\n        <a routerLink=\"/new-donor\" class=\"block-get-blood_link btn btn-primary\">Потрібна кров</a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient-list/recipient-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient-list/recipient-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-list-wrap\">\n  <ul class=\"product-list row\">\n    <app-recipient class=\"col-3\"\n               *ngFor=\"let recipient of favouritesList\"\n               [recipient]=recipient\n               (removeFromList)=\"removeFromFavorites($event)\"\n               [isInFavoriteList]=true\n    ></app-recipient>\n    <app-recipient class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\"\n               *ngFor=\"let recipient of recipient\"\n               [recipient]=recipient\n               (addToList)=\"addToFavorites($event)\"\n    ></app-recipient>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient-main/recipient-main.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient-main/recipient-main.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-5\">\n<div class=\"products-main row\">\n  <div class=\"search col-12 mb-xs-2 mb-md-4 text-center\">\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"search()\">\n      <input\n        type=\"text\"\n        #searchInput\n        class=\"search__input d-md-inline-block form-control mr-md-2 col-xs-12 col-md-4 col-md-3 mb-3 mb-md-0\"\n        placeholder=\"Пошук по імені\"\n        formControlName=\"searchInput\"\n      >\n<!--      <select class=\"search__select d-md-inline-block form-control mr-md-2 col-xs-12 col-md-3 mb-3 mb-md-0\" formControlName=\"searchRhesusFactor\" #searchRhesusFactor>\n        <option value=\"default\">- Резус фактор -</option>\n        <option value=\"plus\">+</option>\n        <option value=\"minus\">-</option>\n      </select>\n      <select class=\"search__select d-md-inline-block form-control col-xs-12 col-md-3 mb-3 mb-md-0\" formControlName=\"searchType\" #searchType>\n        <option value=\"default\">- Група крові -</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n      </select>\n    -->  <button type=\"submit\" class=\"recipient-list__link btn btn-danger mb-4 mb-md-0\">Шукати</button>\n    </form>\n  </div>\n  <app-recipient-list\n    [recipient] = filteredRecipient\n\n    style=\"width: 100%;\"\n  >\n  </app-recipient-list>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient/recipient.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient/recipient.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li\n  class=\"recipient-list__item mb-4\"\n>\n  <div class=\"recipient-list__content\">\n   <button *ngIf=\"isOwner(recipient);\" type=\"button\" class=\"recipient-list__item--edit\" (click)=\"editItem(recipient);\">Edit</button>\n   <button type=\"button\" class=\"recipient-list__item--delete btn btn-primary mr-4\" (click)=\"deleteItem(recipient);\">Delete</button>\n    \n<button type=\"button\" class=\"btn btn-primary\" (click)=\"editItem(recipient);\" data-toggle=\"modal\" data-target=\"#exampleModal\">\nEdit\n</button>\n<h5 class=\"recipient-list__name\">{{recipient.name}}</h5>\n    <p> {{recipient.phoneNumber}}</p>\n\n    <p *ngIf=\"recipient.rhesus\">Група крові: + {{recipient.bloodType}}</p>\n    <p *ngIf=\"!recipient.rhesus\">Група крові: - {{recipient.bloodType}}</p>\n\n    <p *ngIf=\"!recipient.rhesus\">Місто: {{recipient.locality }}</p>\n    <p class=\"recipient-list__description\"> {{recipient.reason}}</p>\n    <button class=\"recipient-list__link btn btn-danger\" (click)=\"respond(recipient); clicked = true;\" *ngIf=\"!clicked; else thenBlock\">Відгукнутись</button>\n    <ng-template #thenBlock><p class=\"recipient-respond\">Дякуємо, ми зв'яжемось з вами!</p></ng-template>\n  </div>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Редагування</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"row\"> \n      <form  #formData=\"ngForm\" [formGroup]=\"form\" (ngSubmit)=\"setNewValue(recipient.id ,formData.value)\" class=\"form col-8 my-3\">\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"text\" id=\"fullName\" name=\"fullName\"\n               formControlName=\"fullName\" value=\"{{recipient.fullName}}\" placeholder=\"Прізвище, ім'я, по батькові\">\n      </div>\n\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"text\" id=\"phoneNumber\" name=\"phoneNumber\"\n               formControlName=\"phoneNumber\" placeholder=\"Телефон (+380...)\">\n      </div>\n\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"number\" min=\"1\" max=\"4\" id=\"bloodType\" name=\"bloodType\"\n               formControlName=\"bloodType\" placeholder=\"Група крові\">\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioPlus\" value=\"option1\">\n          <label class=\"form-check-label\" for=\"inlineRadioPlus\">+\n          </label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioMinus\" value=\"option2\">\n          <label class=\"form-check-label\" for=\"inlineRadioMinus\">-</label>\n        </div>\n      </div>\n      <div class=\"form__item form-field form-group\">\n        <input class=\"form__input form-control\" type=\"text\" id=\"locality\" name=\"locality\"\n               formControlName=\"locality\" placeholder=\"Місто\">\n      </div>\n\n      <div class=\"form__item form-field form-group\">\n        <textarea class=\"form__input form-control\" id=\"reason\" name=\"reason\"\n               formControlName=\"reason\" placeholder=\"Причина...\"></textarea>\n      </div>\n      <button type=\"reset\"  class=\"btn btn-outline-primary ml-2 mr-4\" (click)=\"formData.reset()\">Очистити</button>\n      <button type=\"submit\"  class=\"btn btn-primary\">Відправити</button>\n    </form>\n  </div>\n    </div>\n  </div>\n</div>\n\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<section class=\"user-form user-register-form mb-5\">\n\n<!-- <p class=\"text-center mt-5 welcome-message\" *ngIf=\"authService.login\">Ласкаво просимо до нашого сервісу!</p>\n-->\n  <form  #formData=\"ngForm\" [formGroup]=\"form\"  (ngSubmit)=\"onSubmit()\" class=\"form col-4\">\n    <div class=\"form__item form-field form-group\">\n<label>ПІБ</label>\n      <input class=\"form__input form-control\" type=\"text\" id=\"fullName\" name=\"fullName\"\n             formControlName=\"fullName\" placeholder=\"Прізвище, ім'я, по батькові\">\n<p *ngIf=\"!this.isName\" style=\"color: red;\"> Це поле - обов'язкове!</p>\n    </div>\n    <div class=\"form__item form-field form-group\">\n\n<label>Дата народження</label>\n      <input class=\"form__input form-control\" type=\"date\" id=\"dateOfBirth\" name=\"dateOfBirth\"\n             formControlName=\"dateOfBirth\" placeholder=\"Дата народження\">\n    </div>\n\n    <div class=\"form__item form-field form-group\">\n<label>Телефон</label>    \n  <input class=\"form__input form-control\" type=\"text\" id=\"phoneNumber\" name=\"phoneNumber\"\n             formControlName=\"phoneNumber\" placeholder=\"Телефон (+380...)\">\n      <span>Це номер телефону буде використано для роззилки в Телеграмі.</span>\n    </div>\n\n    <div class=\"form__item form-field form-group\">\n<label>Електронна адреса</label>\n        <input class=\"form__input form-control\"  type=\"text\" id=\"email\" placeholder=\"Електронна адреса\" formControlName=\"email\">\n    </div>\n\n    <div class=\"form__item form-field form-group\">\n<label>Група крові</label>      \n<input class=\"form__input form-control\" type=\"number\" min=\"1\" max=\"4\" id=\"bloodType\" name=\"bloodType\"\n             formControlName=\"bloodType\" placeholder=\"Група крові\">\n    </div>\n\n    <div class=\"form-group\">\n<label>Резус фактор</label>\n<div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioPlus\" value=\"+\" name=\"rhesus\" formControlName=\"rhesus\" checked>\n        <label class=\"form-check-label\" for=\"inlineRadioPlus\">+</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadioMinus\" value=\"-\" name=\"rhesus\" formControlName=\"rhesus\">\n        <label class=\"form-check-label\" for=\"inlineRadioMinus\">-</label>\n      </div>\n    </div>\n</div>\n    <div class=\"form__item form-field form-group\">\n<label>Місто</label>      \n<input class=\"form__input form-control\" type=\"text\" id=\"locality\" name=\"locality\"\n             formControlName=\"locality\" placeholder=\"Місто\">\n    </div>\n\n    <div class=\"form__item form-field form-group\">\n<label>Дата останньої здачі крові</label>      \n<input class=\"form__input form-control\" type=\"date\" id=\"lastBeingDonor\" name=\"lastBeingDonor\"\n             formControlName=\"lastBeingDonor\" placeholder=\"Дата народження\">\n    </div>\n\n<!--    <div class=\"form__item form-field form-group\">-->\n<!--      <input class=\"form__input form-control\" type=\"text\" id=\"password\" name=\"password\"-->\n<!--             formControlName=\"password\" placeholder=\"Пароль\">-->\n<!--    </div>-->\n\n<!--    <div class=\"form__item form-field form-group\">-->\n<!--      <input class=\"form__input form-control\" type=\"text\" id=\"passwordTwo\" name=\"passwordTwo\"-->\n<!--             formControlName=\"passwordTwo\" placeholder=\"Повторіть пароль\">-->\n<!--    </div>-->\n\n    <div class=\"form__item form-field form-group\">\n      <input class=\"form-check-input ml-1\" type=\"checkbox\" id=\"consent\" name=\"consent\" checked>\n      <label for=\"consent\" class=\"form-check-label ml-4\">Я даю згоду на обробку персональних даних</label>\n    </div>\n    <button type=\"reset\"  class=\"btn btn-outline-primary ml-2 mr-4\" (click)=\"formData.reset()\">Reset</button>\n    <button type=\"submit\"  class=\"btn btn-primary\">Submit</button>\n  </form>\n</section>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _donor_donor_form_donor_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donor/donor-form/donor-form.component */ "./src/app/donor/donor-form/donor-form.component.ts");
/* harmony import */ var _donor_donors_main_donors_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor/donors-main/donors-main.component */ "./src/app/donor/donors-main/donors-main.component.ts");
/* harmony import */ var _recipient_recipient_main_recipient_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipient/recipient-main/recipient-main.component */ "./src/app/recipient/recipient-main/recipient-main.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _donor_donor_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./donor/donor.module */ "./src/app/donor/donor.module.ts");
/* harmony import */ var _recipient_recipient_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipient/recipient.module */ "./src/app/recipient/recipient.module.ts");
/* harmony import */ var _donors_info_donors_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./donors-info/donors-info.component */ "./src/app/donors-info/donors-info.component.ts");
















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'donors-list', component: _donor_donors_main_donors_main_component__WEBPACK_IMPORTED_MODULE_4__["DonorsMainComponent"] },
    { path: 'recipients-list', component: _recipient_recipient_main_recipient_main_component__WEBPACK_IMPORTED_MODULE_5__["RecipientMainComponent"] },
    { path: 'new-demand', component: _donor_donor_form_donor_form_component__WEBPACK_IMPORTED_MODULE_3__["DonorFormComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'donors-info', component: _donors_info_donors_info_component__WEBPACK_IMPORTED_MODULE_15__["DonorsInfoComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _donor_donor_module__WEBPACK_IMPORTED_MODULE_13__["DonorModule"], _recipient_recipient_module__WEBPACK_IMPORTED_MODULE_14__["RecipientModule"]],
        declarations: [
            _donor_donor_form_donor_form_component__WEBPACK_IMPORTED_MODULE_3__["DonorFormComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _donor_donors_main_donors_main_component__WEBPACK_IMPORTED_MODULE_4__["DonorsMainComponent"],
            _recipient_recipient_main_recipient_main_component__WEBPACK_IMPORTED_MODULE_5__["RecipientMainComponent"],
            _donors_info_donors_info_component__WEBPACK_IMPORTED_MODULE_15__["DonorsInfoComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  min-height: calc(100vh - 130px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XG59XG4iLCIuY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'blood';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var materialize_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! materialize-angular */ "./node_modules/materialize-angular/fesm2015/materialize-angular.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-cookie/services/cookies.service */ "./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15__);
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(),
            materialize_angular__WEBPACK_IMPORTED_MODULE_14__["MaterializeButtonModule"],
            materialize_angular__WEBPACK_IMPORTED_MODULE_14__["MaterializeNavbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        ],
        providers: [angular2_cookie_services_cookies_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__);





let AuthService = class AuthService {
    constructor(http, router, _cookieService) {
        this.http = http;
        this.router = router;
        this._cookieService = _cookieService;
        this.uri = 'http://http://35.242.214.136:3000';
    }
    init() {
        window['onTelegramAuth'] = user => this.onTelegramAuth(user);
    }
    onTelegramAuth(user) {
        this.http.post(this.uri + '/login', user)
            .subscribe((resp) => {
            this.router.navigate(['/']);
        });
    }
    logout() {
        localStorage.removeItem('stel_token');
    }
    get login() {
        return (this._cookieService.get('stel_token') !== null && this._cookieService.get('stel_token') !== undefined);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/donor/donor-form/donor-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/donor/donor-form/donor-form.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form_rhesus-factor {\n  padding: 20px;\n  display: block;\n}\n\n.form_rhesus-factor:hover {\n  fill: #008000;\n  background-color: #000;\n}\n\n.form__item-label {\n  display: block;\n}\n\n.form_rhesus-factor {\n  display: inline-block;\n}\n\n.user-form {\n  padding-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9kb25vci9kb25vci1mb3JtL2Rvbm9yLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rvbm9yL2Rvbm9yLWZvcm0vZG9ub3ItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZG9ub3IvZG9ub3ItZm9ybS9kb25vci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1fcmhlc3VzLWZhY3RvciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yaGVzdXMtZmFjdG9yOmhvdmVyIHtcbiAgZmlsbDogIzAwODAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmZvcm1fX2l0ZW0tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm1fcmhlc3VzLWZhY3RvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnVzZXItZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG59XG4iLCIuZm9ybV9yaGVzdXMtZmFjdG9yIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtX3JoZXN1cy1mYWN0b3I6aG92ZXIge1xuICBmaWxsOiAjMDA4MDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybV9faXRlbS1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9yaGVzdXMtZmFjdG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udXNlci1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDE1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/donor/donor-form/donor-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/donor/donor-form/donor-form.component.ts ***!
  \**********************************************************/
/*! exports provided: DonorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorFormComponent", function() { return DonorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__);







let DonorFormComponent = class DonorFormComponent {
    constructor(http, router, route, _cookieService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this._cookieService = _cookieService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*380{0,1}[ \\s\\./0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            bloodType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rhesus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('-', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            locality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._cookieService.get('userId'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    get email() {
        return this.form.get('email');
    }
    addEmailField() {
        this.email.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email));
    }
    deleteEmailField(item) {
        this.email.removeAt(this.email.controls.indexOf(item));
    }
    onSubmit() {
        this.result = {
            fullName: this.form.value.fullName,
            phoneNumber: this.form.value.phoneNumber,
            bloodType: this.form.value.bloodType.toString(),
            rhesus: this.form.value.rhesus,
            locality: this.form.value.locality,
            reason: this.form.value.reason,
        };
        this.http.post('http://35.242.214.136:3000/demand', this.result, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': this._cookieService.get('stel_token') }) }).subscribe((data) => {
            this.router.navigateByUrl('/recipients-list');
        });
    }
};
DonorFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
DonorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donor-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donor-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-form/donor-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donor-form.component.scss */ "./src/app/donor/donor-form/donor-form.component.scss")).default]
    })
], DonorFormComponent);



/***/ }),

/***/ "./src/app/donor/donor-list/donor-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/donor/donor-list/donor-list.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-list-wrap .product-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.product-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9kb25vci9kb25vci1saXN0L2Rvbm9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rvbm9yL2Rvbm9yLWxpc3QvZG9ub3ItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBSjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvZG9ub3IvZG9ub3ItbGlzdC9kb25vci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdC13cmFwIHtcbiAgLnByb2R1Y3QtbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiIsIi5wcm9kdWN0LWxpc3Qtd3JhcCAucHJvZHVjdC1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/donor/donor-list/donor-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/donor/donor-list/donor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: DonorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorListComponent", function() { return DonorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DonorListComponent = class DonorListComponent {
    constructor() {
        this.favouritesList = [];
    }
    ngOnInit() {
    }
    addToFavorites(product) {
        this.favouritesList.push(product);
        const index = this.donors.indexOf(product);
        if (index !== -1) {
            this.donors.splice(index, 1);
        }
    }
    removeFromFavorites(product) {
        const index = this.favouritesList.indexOf(product);
        if (index !== -1) {
            this.favouritesList.splice(index, 1);
        }
        this.donors.push(product);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DonorListComponent.prototype, "donors", void 0);
DonorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor-list/donor-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donor-list.component.scss */ "./src/app/donor/donor-list/donor-list.component.scss")).default]
    })
], DonorListComponent);



/***/ }),

/***/ "./src/app/donor/donor.module.ts":
/*!***************************************!*\
  !*** ./src/app/donor/donor.module.ts ***!
  \***************************************/
/*! exports provided: DonorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorModule", function() { return DonorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _donor_list_donor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donor-list/donor-list.component */ "./src/app/donor/donor-list/donor-list.component.ts");
/* harmony import */ var _donor_donor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor/donor.component */ "./src/app/donor/donor/donor.component.ts");





let DonorModule = class DonorModule {
};
DonorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_donor_list_donor_list_component__WEBPACK_IMPORTED_MODULE_3__["DonorListComponent"], _donor_donor_component__WEBPACK_IMPORTED_MODULE_4__["DonorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _donor_donor_component__WEBPACK_IMPORTED_MODULE_4__["DonorComponent"],
            _donor_list_donor_list_component__WEBPACK_IMPORTED_MODULE_3__["DonorListComponent"]
        ]
    })
], DonorModule);



/***/ }),

/***/ "./src/app/donor/donor/donor.component.scss":
/*!**************************************************!*\
  !*** ./src/app/donor/donor/donor.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".donor-list__item {\n  box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.donor-list__content {\n  padding: 20px;\n  text-align: center;\n}\n\n.donor-list__name {\n  font-weight: bold;\n}\n\n.list-title {\n  text-align: center;\n}\n\n.donor-list__title {\n  min-height: 80px;\n}\n\n.donor-list__link {\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.donor-list__description {\n  min-height: 70px;\n}\n\n.donor-respond {\n  font-size: 15px;\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9kb25vci9kb25vci9kb25vci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9ub3IvZG9ub3IvZG9ub3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2Rvbm9yL2Rvbm9yL2Rvbm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvbm9yLWxpc3RfX2l0ZW0ge1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5kb25vci1saXN0X19jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG9ub3ItbGlzdF9fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpc3QtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kb25vci1saXN0X190aXRsZSB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5kb25vci1saXN0X19saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5kb25vci1saXN0X19kZXNjcmlwdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kb25vci1yZXNwb25kIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iLCIuZG9ub3ItbGlzdF9faXRlbSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRvbm9yLWxpc3RfX2NvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kb25vci1saXN0X19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG9ub3ItbGlzdF9fdGl0bGUge1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG4uZG9ub3ItbGlzdF9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZG9ub3ItbGlzdF9fZGVzY3JpcHRpb24ge1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4uZG9ub3ItcmVzcG9uZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/donor/donor/donor.component.ts":
/*!************************************************!*\
  !*** ./src/app/donor/donor/donor.component.ts ***!
  \************************************************/
/*! exports provided: DonorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorComponent", function() { return DonorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DonorComponent = class DonorComponent {
    constructor() {
        this.addToList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFromList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clicked = false;
    }
    ngOnInit() {
    }
    addProductToList(donor) {
        this.addToList.emit(donor);
    }
    removeProductFromList(donor) {
        this.removeFromList.emit(donor);
    }
    respond() {
        return true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DonorComponent.prototype, "donor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DonorComponent.prototype, "isInFavoriteList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DonorComponent.prototype, "addToList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DonorComponent.prototype, "removeFromList", void 0);
DonorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donor/donor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donor.component.scss */ "./src/app/donor/donor/donor.component.scss")).default]
    })
], DonorComponent);



/***/ }),

/***/ "./src/app/donor/donors-main/donors-main.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/donor/donors-main/donors-main.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search__button {\n  padding: 10px;\n  border-radius: 7px 0 7px 0;\n  border: navajowhite;\n  background-color: transparent;\n  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.3);\n  color: black;\n  margin-left: 10px;\n}\n\n.search__button--desc {\n  border-radius: 0 7px 0 7px;\n  transform: rotate(180deg);\n}\n\n.products-main {\n  padding-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9kb25vci9kb25vcnMtbWFpbi9kb25vcnMtbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9ub3IvZG9ub3JzLW1haW4vZG9ub3JzLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kb25vci9kb25vcnMtbWFpbi9kb25vcnMtbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hfX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAwIDdweCAwO1xuICBib3JkZXI6IG5hdmFqb3doaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zZWFyY2hfX2J1dHRvbi0tZGVzYyB7XG4gIGJvcmRlci1yYWRpdXM6IDAgN3B4IDAgN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ucHJvZHVjdHMtbWFpbiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbiIsIi5zZWFyY2hfX2J1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAwIDdweCAwO1xuICBib3JkZXI6IG5hdmFqb3doaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zZWFyY2hfX2J1dHRvbi0tZGVzYyB7XG4gIGJvcmRlci1yYWRpdXM6IDAgN3B4IDAgN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ucHJvZHVjdHMtbWFpbiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/donor/donors-main/donors-main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/donor/donors-main/donors-main.component.ts ***!
  \************************************************************/
/*! exports provided: DonorsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorsMainComponent", function() { return DonorsMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let DonorsMainComponent = class DonorsMainComponent {
    constructor(http) {
        this.http = http;
        this.favoriteProducts = [];
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            searchInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            searchRhesusFactor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('default', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            searchType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('default', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
        this.http
            .get('http://reqres.in/api/users')
            .subscribe(data => {
            this.filteredDonors = data['data'];
            this.donors = data['data'];
        });
    }
    search() {
        console.warn(this.profileForm.value);
        this.filteredDonors = this.donors;
        if (this.profileForm.value.searchInput !== '' && this.profileForm.value.searchInput !== 'default') {
            // tslint:disable-next-line:max-line-length
            this.filteredDonors = this.filteredDonors.filter(product => product.Name.toLowerCase().match(this.profileForm.value.searchInput.toLowerCase()));
        }
        if (this.profileForm.value.searchRhesusFactor !== '' && this.profileForm.value.searchRhesusFactor !== 'default') {
            this.filteredDonors = this.filteredDonors.filter(product => product.RhesusFactor.match(this.profileForm.value.searchRhesusFactor));
        }
        if (this.profileForm.value.searchType !== '' && this.profileForm.value.searchType !== 'default') {
            this.filteredDonors = this.filteredDonors.filter(product => product.BloodType.match(this.profileForm.value.searchType));
        }
    }
    sortASC(field) {
        this.donors.sort((a, b) => { return (a[field] > b[field]) ? 1 : -1; });
    }
    sortDESC(field) {
        this.donors.sort((a, b) => { return (a[field] > b[field]) ? -1 : 1; });
    }
};
DonorsMainComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
DonorsMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donors-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donors-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donor/donors-main/donors-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donors-main.component.scss */ "./src/app/donor/donors-main/donors-main.component.scss")).default]
    })
], DonorsMainComponent);



/***/ }),

/***/ "./src/app/donors-info/donors-info.component.scss":
/*!********************************************************!*\
  !*** ./src/app/donors-info/donors-info.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm9ycy1pbmZvL2Rvbm9ycy1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/donors-info/donors-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/donors-info/donors-info.component.ts ***!
  \******************************************************/
/*! exports provided: DonorsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorsInfoComponent", function() { return DonorsInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DonorsInfoComponent = class DonorsInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
DonorsInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donors-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donors-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donors-info/donors-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donors-info.component.scss */ "./src/app/donors-info/donors-info.component.scss")).default]
    })
], DonorsInfoComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation__item {\n  color: #FFF;\n}\n\n.footer {\n  background: #F0F0F0 !important;\n}\n\n.logo svg {\n  max-width: 100px;\n}\n\n.logo--wrapper {\n  width: 100px;\n}\n\n.footer--content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer .navigation__item {\n  color: #696969;\n  font-size: 16px;\n}\n\n.footer .navigation__item:hover {\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDQSxZQUFBO0FDQ0E7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0EsY0FBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbl9faXRlbSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI0YwRjBGMCFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvIHN2ZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5sb2dvLS13cmFwcGVyIHtcbndpZHRoOiAxMDBweDtcbn1cblxuLmZvb3Rlci0tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb3RlciAubmF2aWdhdGlvbl9faXRlbSB7XG5jb2xvcjogIzY5Njk2OTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9vdGVyIC5uYXZpZ2F0aW9uX19pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG4iLCIubmF2aWdhdGlvbl9faXRlbSB7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI0YwRjBGMCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyBzdmcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4ubG9nby0td3JhcHBlciB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmZvb3Rlci0tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb3RlciAubmF2aWdhdGlvbl9faXRlbSB7XG4gIGNvbG9yOiAjNjk2OTY5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mb290ZXIgLm5hdmlnYXRpb25fX2l0ZW06aG92ZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let FooterComponent = class FooterComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_logo {\n  width: 100px;\n  display: inline-block;\n}\n\n.header {\n  background: #F0F0F0 !important;\n  box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.3);\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.header .navbar {\n  width: 100%;\n  padding: 0;\n}\n\n.header .navbar-brand {\n  padding: 0;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: #e50000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREdBO0VBQ0MsV0FBQTtFQUNBLFVBQUE7QUNBRDs7QURHQTtFQUNDLFVBQUE7QUNBRDs7QURHQTtFQUNBLGNBQUE7QUNBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2xvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNGMEYwRjAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cblxuLmhlYWRlciAubmF2YmFyIHtcbiB3aWR0aDogMTAwJTtcbiBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGVyIC5uYXZiYXItYnJhbmQge1xuIHBhZGRpbmc6IDA7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbmNvbG9yOiAjZTUwMDAwO1xufVxuIiwiLmhlYWRlcl9sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjRjBGMEYwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyIC5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlciAubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogI2U1MDAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__);




let HeaderComponent = class HeaderComponent {
    constructor(_cookieService, authService) {
        this._cookieService = _cookieService;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this._cookieService.remove('stel_token');
        this._cookieService.remove('stel_token');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100%;\n  padding: 15px;\n}\n\n.block-get-blood__img,\n.block-give-blood__img {\n  width: 150px;\n  max-width: 150px;\n  margin: 0 auto;\n}\n\n.block-give-blood,\n.block-get-blood {\n  margin: 0 auto;\n  background-color: #F0F0F0;\n  box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.3);\n}\n\n.hero {\n  background: #F0F0F0;\n  z-index: 1;\n  padding-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBOztFQUVFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5ibG9jay1nZXQtYmxvb2RfX2ltZyxcbi5ibG9jay1naXZlLWJsb29kX19pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmxvY2stZ2l2ZS1ibG9vZCxcbi5ibG9jay1nZXQtYmxvb2Qge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uaGVybyB7XG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbiIsImltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYmxvY2stZ2V0LWJsb29kX19pbWcsXG4uYmxvY2stZ2l2ZS1ibG9vZF9faW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJsb2NrLWdpdmUtYmxvb2QsXG4uYmxvY2stZ2V0LWJsb29kIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kOiAjRjBGMEYwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let HomeComponent = class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form__forgot-pass {\n  padding-top: 20px;\n  text-align: center;\n}\n\n.form__forgot-pass a {\n  color: var(--primary-color);\n}\n\n.user-login-form {\n  padding-top: 20% !important;\n  text-align: center;\n}\n\n.btn-outline-primary:hover {\n  color: white !important;\n}\n\n.btn-outline-primary {\n  color: var(--primary-color) !important;\n}\n\n.user-login-form--message {\n  text-align: center;\n}\n\n.user-login-form--message p {\n  font-style: italic;\n  width: 60%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0EsdUJBQUE7QUNDQTs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDSyxrQkFBQTtBQ0NMOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1fX2ZvcmdvdC1wYXNzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm1fX2ZvcmdvdC1wYXNzIGEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi51c2VyLWxvZ2luLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xuY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWxvZ2luLWZvcm0tLW1lc3NhZ2Uge1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51c2VyLWxvZ2luLWZvcm0tLW1lc3NhZ2UgcCB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIiwiLmZvcm1fX2ZvcmdvdC1wYXNzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm1fX2ZvcmdvdC1wYXNzIGEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi51c2VyLWxvZ2luLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLnVzZXItbG9naW4tZm9ybS0tbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItbG9naW4tZm9ybS0tbWVzc2FnZSBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_7__);








let LoginComponent = class LoginComponent {
    constructor(http, router, authService, _renderer2, _cookieService, _document) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this._renderer2 = _renderer2;
        this._cookieService = _cookieService;
        this._document = _document;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    onSubmit(formData) {
        this.result = formData;
    }
    convertToScript() {
        const element = this.script.nativeElement;
        const script = this._renderer2.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?8';
        script.setAttribute('data-telegram-login', 'MABloodProjectBot');
        script.setAttribute('data-size', 'large'); // Size of the button
        script.setAttribute('data-radius', '20'); // Corners of the button
        script.setAttribute('data-request-access', 'write');
        script.setAttribute('data-userpic', 'true');
        script.setAttribute('data-onauth', 'onTelegramAuth(user)');
        element.parentElement.replaceChild(script, element);
    }
    ngAfterViewInit() {
        this.convertToScript();
    }
    ngOnInit() {
        window['onTelegramAuth'] = user => this.onTelegramAuth(user);
    }
    onTelegramAuth(user) {
        this.result = {
            first_name: user.first_name,
            last_name: user.last_name,
            photo_url: user.photo_url,
            auth_date: user.auth_date,
            hash: user.hash,
            id: user.id,
        };
        this.http.post('http://35.242.214.136:3000/login', this.result).subscribe((data) => {
            console.log('data => ', data);
            if (!!data['token'] && data['token'] != 'undefined') {
                this._cookieService.put('stel_token', data['token']);
                this._cookieService.put('id', data['user']['id']);
                window.location.reload();
            }
            else {
                console.log('login!!!');
                this._cookieService.put('id', data['user']);
                this.router.navigateByUrl('/register');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('script', { static: true })
], LoginComponent.prototype, "script", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', { static: false })
], LoginComponent.prototype, "el", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100%;\n  padding: 15px;\n}\n\n.block-get-blood__img,\n.block-give-blood__img {\n  width: 150px;\n  max-width: 150px;\n  margin: 0 auto;\n}\n\n.block-give-blood,\n.block-get-blood {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7O0VBRUUsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYmxvY2stZ2V0LWJsb29kX19pbWcsXG4uYmxvY2stZ2l2ZS1ibG9vZF9faW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJsb2NrLWdpdmUtYmxvb2QsXG4uYmxvY2stZ2V0LWJsb29kIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iLCJpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmJsb2NrLWdldC1ibG9vZF9faW1nLFxuLmJsb2NrLWdpdmUtYmxvb2RfX2ltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ibG9jay1naXZlLWJsb29kLFxuLmJsb2NrLWdldC1ibG9vZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/recipient/recipient-list/recipient-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/recipient/recipient-list/recipient-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-list-wrap .product-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.product-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9yZWNpcGllbnQvcmVjaXBpZW50LWxpc3QvcmVjaXBpZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY2lwaWVudC9yZWNpcGllbnQtbGlzdC9yZWNpcGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBSjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBpZW50L3JlY2lwaWVudC1saXN0L3JlY2lwaWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdC13cmFwIHtcbiAgLnByb2R1Y3QtbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiIsIi5wcm9kdWN0LWxpc3Qtd3JhcCAucHJvZHVjdC1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/recipient/recipient-list/recipient-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/recipient/recipient-list/recipient-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecipientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientListComponent", function() { return RecipientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipientListComponent = class RecipientListComponent {
    constructor() {
        this.favouritesList = [];
    }
    ngOnInit() {
    }
    addToFavorites(product) {
        this.favouritesList.push(product);
        const index = this.recipient.indexOf(product);
        if (index !== -1) {
            this.recipient.splice(index, 1);
        }
    }
    removeFromFavorites(product) {
        const index = this.favouritesList.indexOf(product);
        if (index !== -1) {
            this.favouritesList.splice(index, 1);
        }
        this.recipient.push(product);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipientListComponent.prototype, "recipient", void 0);
RecipientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipient-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipient-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient-list/recipient-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipient-list.component.scss */ "./src/app/recipient/recipient-list/recipient-list.component.scss")).default]
    })
], RecipientListComponent);



/***/ }),

/***/ "./src/app/recipient/recipient-main/recipient-main.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/recipient/recipient-main/recipient-main.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".products-main {\n  padding-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9yZWNpcGllbnQvcmVjaXBpZW50LW1haW4vcmVjaXBpZW50LW1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlY2lwaWVudC9yZWNpcGllbnQtbWFpbi9yZWNpcGllbnQtbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGllbnQvcmVjaXBpZW50LW1haW4vcmVjaXBpZW50LW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtbWFpbiB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbiIsIi5wcm9kdWN0cy1tYWluIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/recipient/recipient-main/recipient-main.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/recipient/recipient-main/recipient-main.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecipientMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientMainComponent", function() { return RecipientMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__);





let RecipientMainComponent = class RecipientMainComponent {
    constructor(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.favoriteProducts = [];
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            searchInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            searchRhesusFactor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('default', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            searchType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('default', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
        this.http
            .get('http://35.242.214.136:3000/demand?bloodType=1&rhesus=false', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'authorization': this._cookieService.get('stel_token') }) })
            .subscribe(data => {
            this.filteredRecipient = data;
            this.recipient = data;
        });
    }
    search() {
        console.warn(this.profileForm.value);
        this.filteredRecipient = this.recipient;
        if (this.profileForm.value.searchInput !== '' && this.profileForm.value.searchInput !== 'default') {
            // tslint:disable-next-line:max-line-length
            this.filteredRecipient = this.filteredRecipient.filter(product => product.name.toLowerCase().match(this.profileForm.value.searchInput.toLowerCase()));
        }
        if (this.profileForm.value.searchRhesusFactor !== '' && this.profileForm.value.searchRhesusFactor !== 'default') {
            // tslint:disable-next-line:max-line-length
            this.filteredRecipient = this.filteredRecipient.filter(product => product.RhesusFactor.match(this.profileForm.value.searchRhesusFactor));
        }
        if (this.profileForm.value.searchType !== '' && this.profileForm.value.searchType !== 'default') {
            this.filteredRecipient = this.filteredRecipient.filter(product => product.BloodType.match(this.profileForm.value.searchType));
        }
    }
    sortASC(field) {
        this.recipient.sort((a, b) => { return (a[field] > b[field]) ? 1 : -1; });
    }
    sortDESC(field) {
        this.recipient.sort((a, b) => { return (a[field] > b[field]) ? -1 : 1; });
    }
};
RecipientMainComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
RecipientMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipient-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipient-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient-main/recipient-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipient-main.component.scss */ "./src/app/recipient/recipient-main/recipient-main.component.scss")).default]
    })
], RecipientMainComponent);



/***/ }),

/***/ "./src/app/recipient/recipient.module.ts":
/*!***********************************************!*\
  !*** ./src/app/recipient/recipient.module.ts ***!
  \***********************************************/
/*! exports provided: RecipientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientModule", function() { return RecipientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var materialize_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! materialize-angular */ "./node_modules/materialize-angular/fesm2015/materialize-angular.js");
/* harmony import */ var _recipient_recipient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipient/recipient.component */ "./src/app/recipient/recipient/recipient.component.ts");
/* harmony import */ var _recipient_list_recipient_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipient-list/recipient-list.component */ "./src/app/recipient/recipient-list/recipient-list.component.ts");










let RecipientModule = class RecipientModule {
};
RecipientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_recipient_recipient_component__WEBPACK_IMPORTED_MODULE_8__["RecipientComponent"], _recipient_list_recipient_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipientListComponent"]],
        exports: [
            _recipient_list_recipient_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipientListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
            materialize_angular__WEBPACK_IMPORTED_MODULE_7__["MaterializeButtonModule"],
            materialize_angular__WEBPACK_IMPORTED_MODULE_7__["MaterializeNavbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ]
    })
], RecipientModule);



/***/ }),

/***/ "./src/app/recipient/recipient/recipient.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/recipient/recipient/recipient.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".recipient-list__item {\n  box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.recipient-list__content {\n  padding: 20px;\n  text-align: center;\n}\n\n.recipient-list__name {\n  font-weight: bold;\n}\n\n.list-title {\n  text-align: center;\n}\n\n.recipient-list__title {\n  min-height: 80px;\n}\n\n.recipient-list__link {\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.recipient-list__description {\n  min-height: 70px;\n}\n\n.recipient-respond {\n  font-size: 15px;\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9yZWNpcGllbnQvcmVjaXBpZW50L3JlY2lwaWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVjaXBpZW50L3JlY2lwaWVudC9yZWNpcGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBpZW50L3JlY2lwaWVudC9yZWNpcGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBpZW50LWxpc3RfX2l0ZW0ge1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5yZWNpcGllbnQtbGlzdF9fY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlY2lwaWVudC1saXN0X19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGlzdC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlY2lwaWVudC1saXN0X190aXRsZSB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5yZWNpcGllbnQtbGlzdF9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlY2lwaWVudC1saXN0X19kZXNjcmlwdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZWNpcGllbnQtcmVzcG9uZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIiwiLnJlY2lwaWVudC1saXN0X19pdGVtIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucmVjaXBpZW50LWxpc3RfX2NvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWNpcGllbnQtbGlzdF9fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGlzdC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlY2lwaWVudC1saXN0X190aXRsZSB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5yZWNpcGllbnQtbGlzdF9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlY2lwaWVudC1saXN0X19kZXNjcmlwdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZWNpcGllbnQtcmVzcG9uZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/recipient/recipient/recipient.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recipient/recipient/recipient.component.ts ***!
  \************************************************************/
/*! exports provided: RecipientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientComponent", function() { return RecipientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let RecipientComponent = class RecipientComponent {
    constructor(router, http, _cookieService) {
        this.router = router;
        this.http = http;
        this._cookieService = _cookieService;
        this.addToList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFromList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clicked = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[+]*380{0,1}[ \\s\\./0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            bloodType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            rhesus: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('-', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            locality: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this._cookieService.get('userId'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    addProductToList(recipient) {
        this.addToList.emit(recipient);
    }
    removeProductFromList(recipient) {
        this.removeFromList.emit(recipient);
    }
    respond(event) {
        this.http.post('http://35.242.214.136:3000/connection', { demandId: +event.id }, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'authorization': this._cookieService.get('stel_token') }) }).subscribe((data) => { });
        return true;
    }
    deleteItem(demand) {
        this.http.delete('http://35.242.214.136:3000/demand?id=' + demand.id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'authorization': this._cookieService.get('stel_token') }) }).subscribe((data) => {
            window.location.reload();
        });
    }
    editItem(demand) {
        console.log('demand.fullName => ', demand);
        this.form.patchValue({ fullName: demand.name, phoneNumber: demand.phoneNumber, loodType: demand.bloodType.toString(), rhesus: demand.rhesus, locality: demand.locality, reason: demand.reason });
    }
    setNewValue(id, demand) {
        this.result = {
            fullName: demand.fullName,
            phoneNumber: demand.phoneNumber,
            bloodType: demand.bloodType.toString(),
            rhesus: demand.rhesus,
            locality: demand.locality,
            reason: demand.reason,
        };
        this.http.put('http://35.242.214.136:3000/demand?id=' + id, demand, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'authorization': this._cookieService.get('stel_token') }) }).subscribe((data) => {
            window.location.reload();
        });
    }
    isOwner(demand) {
        if (demand.id === this._cookieService.get('id')) {
            return true;
        }
    }
};
RecipientComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipientComponent.prototype, "recipient", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipientComponent.prototype, "isInFavoriteList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RecipientComponent.prototype, "addToList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RecipientComponent.prototype, "removeFromList", void 0);
RecipientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipient/recipient/recipient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipient.component.scss */ "./src/app/recipient/recipient/recipient.component.scss")).default]
    })
], RecipientComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-check-label {\n  font-size: 14px;\n}\n\n.user-register-form {\n  padding-top: 15%;\n}\n\n.form__item {\n  text-align: center;\n}\n\nspan {\n  font-size: 11px;\n}\n\n.welcome-message {\n  font-size: 25px;\n  color: red;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2Jsb29kLW1hc3Rlci5vcmcvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFBO0FDQ0E7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2hlY2stbGFiZWwge1xuZm9udC1zaXplOiAxNHB4O1xufVxuXG4udXNlci1yZWdpc3Rlci1mb3JtICB7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG59XG5cbi5mb3JtX19pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ud2VsY29tZS1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4iLCIuZm9ybS1jaGVjay1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVzZXItcmVnaXN0ZXItZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG59XG5cbi5mb3JtX19pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ud2VsY29tZS1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");








let RegisterComponent = class RegisterComponent {
    constructor(router, authService, http, route, _cookieService) {
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.route = route;
        this._cookieService = _cookieService;
        this.isName = true;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*380{0,1}[ \\s\\./0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            bloodType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rhesus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('-', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            locality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastBeingDonor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            telegramId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._cookieService.get('id'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() { }
    onSubmit() {
        this.isName = true;
        if (this.form.value.fullName === '') {
            this.isName = false;
        }
        this.result = {
            telegramId: this.form.value.telegramId,
            fullName: this.form.value.fullName,
            dateOfBirth: new Date(this.form.value.dateOfBirth).toISOString(),
            phoneNumber: this.form.value.phoneNumber,
            email: this.form.value.email,
            bloodType: this.form.value.bloodType.toString(),
            rhesus: this.form.value.rhesus,
            locality: this.form.value.locality,
            lastBeingDonor: new Date(this.form.value.lastBeingDonor).toISOString()
        };
        this.http.post('http://35.242.214.136:3000/registration', this.result).subscribe((data) => {
            this._cookieService.put('stel_token', data['token']);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: angular2_cookie_core__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/blood-master.org/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map