/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../blocks-src/calculated-field/block.json":
/*!*************************************************!*\
  !*** ../blocks-src/calculated-field/block.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/calculated-field","category":"jet-form-builder-fields","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><path d=\\"M30.0333 40.0333H27.3667C26.9775 40.0333 26.6418 40.195 26.396 40.4408C26.1353 40.7015 26 41.0418 26 41.4V43.6C26 43.9557 26.1322 44.2795 26.3598 44.5325L26.395 44.5716L26.4342 44.6068C26.6871 44.8345 27.011 44.9667 27.3667 44.9667H30.0333V47.6333C30.0333 47.9915 30.1686 48.3318 30.4293 48.5925C30.6751 48.8383 31.0109 49 31.4 49H33.6C33.9754 49 34.3116 48.8484 34.5595 48.5928C34.8151 48.3449 34.9667 48.0087 34.9667 47.6333V44.9667H37.6333C37.9915 44.9667 38.3318 44.8314 38.5925 44.5707C38.8383 44.3249 39 43.9891 39 43.6V41.4C39 41.0246 38.8484 40.6884 38.5928 40.4405C38.3449 40.1849 38.0087 40.0333 37.6333 40.0333H34.9667V37.3667C34.9667 36.9913 34.8151 36.6551 34.5595 36.4072C34.3116 36.1516 33.9754 36 33.6 36H31.4C31.0109 36 30.6751 36.1617 30.4294 36.4075L31.1365 37.1146L30.4294 36.4075C30.1686 36.6682 30.0333 37.0085 30.0333 37.3667V40.0333Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M52.0688 45.9949L52.0688 45.9949L52.0743 46.0003C52.4373 46.3595 52.6155 46.7809 52.6155 47.3289C52.6155 48.0345 52.3912 48.4956 51.9978 48.833C51.5866 49.1856 50.9592 49.4211 49.9936 49.4211C49.0383 49.4211 48.4404 49.1544 48.0492 48.7441C47.6528 48.3284 47.3845 47.6705 47.3845 46.6184V45.6184H46.3845H44H43V46.6184C43 48.53 43.4997 50.1667 44.6052 51.4134L44.6051 51.4135L44.6112 51.4202C45.528 52.4355 46.7156 53.0671 48.1171 53.3503V55V56H49.1171H51.0247H52.0247V55V53.3438C53.3759 53.0668 54.5232 52.4931 55.4047 51.5761C56.4928 50.4535 57 48.9947 57 47.3026C57 46.2477 56.8 45.2769 56.3652 44.4197C55.9365 43.5574 55.2757 42.8331 54.4266 42.2374C53.5819 41.63 52.4558 41.1146 51.0945 40.6692C49.8425 40.2485 49.0609 39.8226 48.6377 39.4384C48.3044 39.1212 48.1063 38.6866 48.1063 38.0263C48.1063 37.2533 48.3177 36.7877 48.6213 36.4875L48.6214 36.4876L48.6271 36.4818C48.9248 36.1827 49.4162 35.9605 50.2642 35.9605C50.9576 35.9605 51.4386 36.1996 51.8128 36.6729C52.2087 37.1735 52.4608 37.9134 52.4608 39V40H53.4608H55.8324H56.8324V39C56.8324 37.0613 56.3974 35.4023 55.4108 34.1368C54.607 33.0966 53.5388 32.4155 52.2567 32.0765V30V29H51.2567H49.3362H48.3362V30V32.0453C47.0883 32.342 46.0271 32.9372 45.2014 33.8592L45.2014 33.8591L45.1979 33.863C44.1926 34.9973 43.7218 36.4265 43.7218 38.0658C43.7218 39.6897 44.2078 41.1066 45.2306 42.2368L45.2306 42.2368L45.2373 42.2441C46.244 43.3347 47.7621 44.1442 49.6705 44.7402C50.9292 45.1697 51.6832 45.6073 52.0688 45.9949Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","keywords":["jetformbuilder","field","calculated"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"attributes":{"separate_decimals":{"type":"string","default":"."},"separate_thousands":{"type":"string","default":""},"calc_formula":{"type":"string","default":""},"precision":{"type":"number","default":2},"calc_prefix":{"type":"string","default":""},"calc_suffix":{"type":"string","default":""},"calc_hidden":{"type":"boolean","default":false},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/checkbox-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/checkbox-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/checkbox-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","checkbox"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"6\\" width=\\"62\\" height=\\"52\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"36\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"#6F8BFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"28\\" y=\\"41\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\" fill=\\"#162B40\\"/><rect x=\\"28\\" y=\\"17\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\" fill=\\"#162B40\\"/><path d=\\"M11 44L14 47L19 41\\" stroke=\\"#162B40\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"7\\" y=\\"12\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/color-picker-field/block.json":
/*!***************************************************!*\
  !*** ../blocks-src/color-picker-field/block.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/color-picker-field","category":"jet-form-builder-fields","icon":"<svg width=\\"32\\" height=\\"32\\" viewBox=\\"0 0 32 32\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M16.9677 21H2.875C1.83947 21 1 20.186 1 19.1818V7.81818C1 6.81403 1.83947 6 2.875 6H29.125C30.1605 6 31 6.81403 31 7.81818V19.1818C31 20.186 30.1605 21 29.125 21H24\\" stroke=\\"#162B40\\" fill=\\"white\\"/><rect x=\\"16.5\\" y=\\"17.5\\" width=\\"7\\" height=\\"7\\" rx=\\"0.5\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\"/><path d=\\"M21 21V19.4032L24.8065 15.3065L26.5 17L22.6935 21H21Z\\" fill=\\"#4AF3BA\\"/><path d=\\"M28.8544 14.3161L27.6845 13.1462C27.4895 12.9513 27.1745 12.9513 26.9795 13.1462L25.4196 14.706L24.705 14.0011C24.705 14.0011 24.3147 13.8911 24.1022 14.1036C23.8897 14.3161 24 14.706 24 14.706L24.4597 15.1659L20 19.6253V22H22.3748L26.8345 17.5406L27.294 18C27.294 18 27.4989 18.2961 27.8969 17.8981C28.295 17.5 27.9989 17.2951 27.9989 17.2951L27.2895 16.5858L28.8494 15.026C29.0494 14.826 29.0494 14.511 28.8544 14.3161ZM21.9599 21.0001L20.9999 20.0403L25.0296 16.0108L25.9896 16.9707L21.9599 21.0001Z\\" fill=\\"#162B40\\"/></svg>","keywords":["jetformbuilder","field","colorpicker","picker","input"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"attributes":{"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/conditional-block/block.json":
/*!**************************************************!*\
  !*** ../blocks-src/conditional-block/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/conditional-block","category":"jet-form-builder-fields","keywords":["jetformbuilder","block","conditonal"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect x=\\"1\\" y=\\"12\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#ffffff\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"1\\" y=\\"34\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"45\\" y=\\"12\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><rect x=\\"45\\" y=\\"34\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" fill=\\"#ffffff\\" stroke=\\"#0F172A\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M40 17L44 21L40 25V22H36.7004L28.9398 43.3417C28.7961 43.7369 28.4205 44 28 44H19V42H27.2996L35.0602 20.6583C35.2039 20.2631 35.5795 20 36 20H40V17Z\\" fill=\\"#0F172A\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M30.9359 26.1477L28.9398 20.6583C28.7961 20.2631 28.4205 20 28 20H19V22H27.2996L29.8719 29.0739L30.9359 26.1477ZM33.0641 37.8524L35.0602 43.3417C35.2039 43.7369 35.5795 44 36 44H40V47L44 43L40 39V42H36.7004L34.1281 34.9262L33.0641 37.8524Z\\" fill=\\"#0F172A\\"/></svg>","attributes":{"conditions":{"type":"array","default":[]},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/date-field/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/date-field/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/date-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","date"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"15\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"31\\" y=\\"32.2\\" width=\\"26\\" height=\\"28.8\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M31 35.2C31 33.5431 32.3431 32.2 34 32.2H54C55.6569 32.2 57 33.5431 57 35.2V43.4H31V35.2Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M36.4615 30C36.4615 29.4477 36.9092 29 37.4615 29H37.6154C38.1676 29 38.6154 29.4477 38.6154 30V34.6C38.6154 35.1523 38.1676 35.6 37.6154 35.6H37.4615C36.9092 35.6 36.4615 35.1523 36.4615 34.6V30Z\\" fill=\\"#162B40\\"/><path d=\\"M49.3846 30C49.3846 29.4477 49.8323 29 50.3846 29H50.5384C51.0907 29 51.5384 29.4477 51.5384 30V34.6C51.5384 35.1523 51.0907 35.6 50.5384 35.6H50.3846C49.8323 35.6 49.3846 35.1523 49.3846 34.6V30Z\\" fill=\\"#162B40\\"/></svg>","attributes":{"is_timestamp":{"type":"boolean","default":false},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/datetime-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/datetime-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/datetime-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","date"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M14 34C12.8954 34 12 34.8954 12 36V41H29V36C29 34.8954 28.1046 34 27 34H14ZM50.391 38.9385C50.7931 39.9091 51 40.9494 51 42H43V34C44.0506 34 45.0909 34.2069 46.0615 34.609C47.0321 35.011 47.914 35.6003 48.6569 36.3431C49.3997 37.086 49.989 37.9679 50.391 38.9385Z\\" fill=\\"#4AF3BA\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 14H4C2.89453 14 2 14.8955 2 16V41C2 42.1045 2.89453 43 4 43H12V41V36C12 34.8955 12.8945 34 14 34H16V33C16 32.4478 16.4473 32 17 32C17.5527 32 18 32.4478 18 33V34H23V33C23 32.4478 23.4473 32 24 32C24.1172 32 24.2305 32.02 24.334 32.0566C24.4453 32.0959 24.5469 32.1543 24.6348 32.2278C24.8574 32.4111 25 32.689 25 33V34H27C28.1055 34 29 34.8955 29 36V41V43H32H33.0494C33.0167 42.6711 33 42.3375 33 42C33 36.4771 37.4766 32 43 32C48.5234 32 53 36.4771 53 42C53 42.3375 52.9833 42.6711 52.9506 43H52.9512H54H60C61.1055 43 62 42.1045 62 41V16C62 14.8955 61.1055 14 60 14ZM54 45H52.543H52.5423C51.2681 49.0572 47.4781 52 43 52C38.5219 52 34.7312 49.0572 33.457 45H32H29V50C29 51.1045 28.1055 52 27 52H14C12.8945 52 12 51.1045 12 50V45H4C1.79102 45 0 43.2092 0 41V16C0 13.7908 1.79102 12 4 12H60C62.209 12 64 13.7908 64 16V41C64 43.2092 62.209 45 60 45H54ZM50.9375 43C50.4453 46.9463 47.0801 50 43 50C38.582 50 35 46.4182 35 42C35 37.9204 38.0527 34.554 42 34.062V41V42V43H50.9375ZM50.9375 41H44V34.062C47.6191 34.5132 50.4863 37.3813 50.9375 41ZM24 37C23.4473 37 23 36.5522 23 36H18C18 36.5522 17.5527 37 17 37C16.4473 37 16 36.5522 16 36H14V39H27V36H25C25 36.2761 24.8867 36.5261 24.7051 36.7073C24.5254 36.8882 24.2754 37 24 37ZM14 41H27V50H14V41Z\\" fill=\\"#0F172A\\"/></svg>","attributes":{"is_timestamp":{"type":"boolean","default":false},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/form-break-field/block.json":
/*!*************************************************!*\
  !*** ../blocks-src/form-break-field/block.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/form-break-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","block","break","pagebreak","formbreak"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"29\\" y=\\"1\\" width=\\"34\\" height=\\"34\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"22\\" width=\\"41\\" height=\\"41\\" rx=\\"3\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M23.3721 49H20.832V39.209L17.7998 40.1494V38.084L23.0996 36.1855H23.3721V49Z\\" fill=\\"#162B40\\"/><path d=\\"M50.9795 23H44.1572V21.6465L47.377 18.2148C47.819 17.7318 48.1449 17.3102 48.3545 16.9502C48.5687 16.5902 48.6758 16.2484 48.6758 15.9248C48.6758 15.4827 48.5641 15.1364 48.3408 14.8857C48.1175 14.6305 47.7985 14.5029 47.3838 14.5029C46.9372 14.5029 46.584 14.6579 46.3242 14.9678C46.069 15.2731 45.9414 15.6764 45.9414 16.1777H43.959C43.959 15.5716 44.1025 15.0179 44.3896 14.5166C44.6813 14.0153 45.0915 13.6234 45.6201 13.3408C46.1488 13.0537 46.748 12.9102 47.418 12.9102C48.4434 12.9102 49.2386 13.1562 49.8037 13.6484C50.3734 14.1406 50.6582 14.8356 50.6582 15.7334C50.6582 16.2256 50.5306 16.7269 50.2754 17.2373C50.0202 17.7477 49.5827 18.3424 48.9629 19.0215L46.7002 21.4072H50.9795V23Z\\" fill=\\"#162B40\\"/></svg>","attributes":{"page_break_disabled":{"type":"string","default":""},"label_progress":{"type":"string","default":""},"label":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"class_name":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/group-break-field/block.json":
/*!**************************************************!*\
  !*** ../blocks-src/group-break-field/block.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/group-break-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","block","conditonal"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"1\\" width=\\"62\\" height=\\"24\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"39\\" width=\\"62\\" height=\\"24\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"30\\" width=\\"62\\" height=\\"4\\" rx=\\"2\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"visibility":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/heading-field/block.json":
/*!**********************************************!*\
  !*** ../blocks-src/heading-field/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/heading-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","heading"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><path d=\\"M40.7126 54.5332C41.6699 54.5332 42.446 53.7572 42.446 52.7999V30.2825C42.446 29.3252 41.6699 28.5492 40.7126 28.5492H38.0411C37.0838 28.5492 36.3077 29.3252 36.3077 30.2825V38.5315H27.617V30.2825C27.617 29.3252 26.841 28.5492 25.8836 28.5492H23.1957C22.2383 28.5492 21.4623 29.3252 21.4623 30.2825V52.7999C21.4623 53.7572 22.2383 54.5332 23.1957 54.5332H25.8836C26.841 54.5332 27.617 53.7572 27.617 52.7999V43.8755H36.3077V52.7999C36.3077 53.7572 37.0838 54.5332 38.0411 54.5332H40.7126ZM55.8044 54.5332C56.7617 54.5332 57.5378 53.7572 57.5378 52.7999V29.8987C57.5378 29.1079 56.8967 28.4668 56.1058 28.4668C55.9366 28.4668 55.7688 28.4968 55.61 28.5554L46.8342 31.7945C46.1533 32.0458 45.701 32.6948 45.701 33.4206V35.2598C45.701 36.4491 46.8714 37.2852 47.9965 36.8995L51.5637 35.6767V52.7999C51.5637 53.7572 52.3397 54.5332 53.297 54.5332H55.8044Z\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"label":{"type":"string","default":""},"desc":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/hidden-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/hidden-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/hidden-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","hidden"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M4 16H60C61.1046 16 62 16.8954 62 18V38C62 39.1046 61.1046 40 60 40H57V42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H28V40H4C2.89543 40 2 39.1046 2 38V18C2 16.8954 2.89543 16 4 16Z\\" fill=\\"#162B40\\"/><path d=\\"M42.5 32.5C36.9592 32.5 31.9346 35.5314 28.2269 40.4552C27.9244 40.8586 27.9244 41.4222 28.2269 41.8256C31.9346 46.7553 36.9592 49.7867 42.5 49.7867C48.0408 49.7867 53.0654 46.7553 56.7731 41.8315C57.0756 41.4281 57.0756 40.8645 56.7731 40.4611C53.0654 35.5314 48.0408 32.5 42.5 32.5ZM42.8975 47.2299C39.2194 47.4612 36.1821 44.4298 36.4135 40.7459C36.6033 37.7086 39.0652 35.2466 42.1025 35.0568C45.7806 34.8255 48.8179 37.8569 48.5865 41.5408C48.3908 44.5722 45.9289 47.0341 42.8975 47.2299Z\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"54.0909\\" y=\\"27.5858\\" width=\\"3.5\\" height=\\"34.7076\\" rx=\\"1.75\\" transform=\\"rotate(44.914 54.0909 27.5858)\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"field_value":{"type":"string","default":"post_id"},"hidden_value_field":{"type":"string","default":""},"query_var_key":{"type":"string","default":""},"date_format":{"type":"string","default":""},"hidden_value":{"type":"string","default":""},"name":{"type":"string","default":"hidden_field_name"},"default":{"type":"string","default":""},"class_name":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/media-field/block.json":
/*!********************************************!*\
  !*** ../blocks-src/media-field/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/media-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","media","image","file"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><rect x=\\"22.9474\\" y=\\"27.9474\\" width=\\"34.1053\\" height=\\"27.1822\\" rx=\\"1.82186\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"1.89474\\"/><path d=\\"M34.4615 46.3847L36.9393 43.8672L39.417 46.3847L42.8239 42.9231L46.2308 46.3847\\" stroke=\\"#162B40\\" stroke-width=\\"1.38462\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"/><circle cx=\\"39.6538\\" cy=\\"38.4231\\" r=\\"1.73077\\" stroke=\\"#162B40\\" stroke-width=\\"1.38462\\"/></svg>","attributes":{"allowed_user_cap":{"type":"string","default":""},"insert_attachment":{"type":"boolean","default":false},"value_format":{"type":"string","default":""},"max_files":{"type":"number","default":null},"max_size":{"type":"number","default":null},"allowed_mimes":{"type":"array","default":[]},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/number-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/number-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/number-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","media","image","file"],"textdomain":"jet-form-builder","icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"15\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" stroke=\\"#162B40\\" fill=\\"white\\" stroke-width=\\"2\\"/><path d=\\"M44 16H60C61.1046 16 62 16.8954 62 18V38C62 39.1046 61.1046 40 60 40H44V16Z\\" fill=\\"#4EFEC3\\"/><path d=\\"M53.59 20.2409C53.2263 19.8772 52.6817 19.9692 52.318 20.333C51.9542 20.6967 51.9091 21.1944 52.2728 21.5581L55.41 24.6953C55.7737 25.0591 56.3635 25.0591 56.7272 24.6953C57.0909 24.3316 57.0909 23.7419 56.7272 23.3781L53.59 20.2409Z\\" fill=\\"#162B40\\"/><path d=\\"M52.41 20.2409C52.7737 19.8772 53.2949 19.9458 53.6586 20.3095C54.0223 20.6733 54.0909 21.1944 53.7272 21.5581L50.59 24.6953C50.2263 25.0591 49.6365 25.0591 49.2728 24.6953C48.9091 24.3316 48.9091 23.7419 49.2728 23.3781L52.41 20.2409Z\\" fill=\\"#162B40\\"/><path d=\\"M53.59 35.7272C53.2263 36.091 52.7094 36.0266 52.3456 35.6628C51.9819 35.2991 51.9091 34.7738 52.2728 34.41L55.41 31.2728C55.7737 30.9091 56.3635 30.9091 56.7272 31.2728C57.0909 31.6366 57.0909 32.2263 56.7272 32.59L53.59 35.7272Z\\" fill=\\"#162B40\\"/><path d=\\"M52.41 35.7272C52.7737 36.091 53.2906 36.0266 53.6544 35.6629C54.0181 35.2991 54.0909 34.7738 53.7272 34.41L50.59 31.2728C50.2263 30.9091 49.6365 30.9091 49.2728 31.2728C48.9091 31.6366 48.9091 32.2263 49.2728 32.59L52.41 35.7272Z\\" fill=\\"#162B40\\"/><path d=\\"M13.002 29.2539H14.1299V30.8467H13.002V33H11.0264V30.8467H6.94531L6.85645 29.6025L11.0059 23.0469H13.002V29.2539ZM8.8252 29.2539H11.0264V25.7402L10.8965 25.9658L8.8252 29.2539Z\\" fill=\\"#162B40\\"/><path d=\\"M43 16V40.5\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","supports":{"customClassName":false,"html":false},"attributes":{"min":{"type":"number","default":""},"max":{"type":"number","default":""},"step":{"type":"number","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/radio-field/block.json":
/*!********************************************!*\
  !*** ../blocks-src/radio-field/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/radio-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","radio"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"6\\" width=\\"62\\" height=\\"52\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"7\\" y=\\"36\\" width=\\"16\\" height=\\"16\\" rx=\\"8\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"28\\" y=\\"41\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 46C28 45.4477 28.4477 45 29 45H48C48.5523 45 49 45.4477 49 46C49 46.5523 48.5523 47 48 47H29C28.4477 47 28 46.5523 28 46Z\\" fill=\\"#162B40\\"/><rect x=\\"28\\" y=\\"17\\" width=\\"30\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><path d=\\"M28 22C28 21.4477 28.4477 21 29 21H48C48.5523 21 49 21.4477 49 22C49 22.5523 48.5523 23 48 23H29C28.4477 23 28 22.5523 28 22Z\\" fill=\\"#162B40\\"/><rect x=\\"7\\" y=\\"12\\" width=\\"16\\" height=\\"16\\" rx=\\"8\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><circle cx=\\"15\\" cy=\\"20\\" r=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"switch_on_change":{"type":"boolean","default":false},"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/range-field/block.json":
/*!********************************************!*\
  !*** ../blocks-src/range-field/block.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/range-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","range"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><rect x=\\"12\\" y=\\"28\\" width=\\"43\\" height=\\"2\\" fill=\\"#162B40\\"/><circle cx=\\"12\\" cy=\\"29\\" r=\\"5\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><circle cx=\\"55\\" cy=\\"29\\" r=\\"2\\" fill=\\"#162B40\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><circle cx=\\"37\\" cy=\\"29\\" r=\\"5\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"min":{"type":"number","default":""},"max":{"type":"number","default":""},"step":{"type":"number","default":""},"prefix":{"type":"string","default":""},"suffix":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/repeater-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/repeater-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/repeater-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","range"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"2\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M11.9561 20H9.98047V12.3848L7.62207 13.1162V11.5098L11.7441 10.0332H11.9561V20Z\\" fill=\\"#162B40\\"/><path d=\\"M20 3H60C61.1046 3 62 3.89543 62 5V25C62 26.1046 61.1046 27 60 27H20V3Z\\" fill=\\"white\\"/><path d=\\"M19.5 2V27.5\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"35\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M13.9795 53H7.15723V51.6465L10.377 48.2148C10.819 47.7318 11.1449 47.3102 11.3545 46.9502C11.5687 46.5902 11.6758 46.2484 11.6758 45.9248C11.6758 45.4827 11.5641 45.1364 11.3408 44.8857C11.1175 44.6305 10.7985 44.5029 10.3838 44.5029C9.93717 44.5029 9.58398 44.6579 9.32422 44.9678C9.06901 45.2731 8.94141 45.6764 8.94141 46.1777H6.95898C6.95898 45.5716 7.10254 45.0179 7.38965 44.5166C7.68132 44.0153 8.09147 43.6234 8.62012 43.3408C9.14876 43.0537 9.74805 42.9102 10.418 42.9102C11.4434 42.9102 12.2386 43.1562 12.8037 43.6484C13.3734 44.1406 13.6582 44.8356 13.6582 45.7334C13.6582 46.2256 13.5306 46.7269 13.2754 47.2373C13.0202 47.7477 12.5827 48.3424 11.9629 49.0215L9.7002 51.4072H13.9795V53Z\\" fill=\\"#162B40\\"/><path d=\\"M20 36H60C61.1046 36 62 36.8954 62 38V58C62 59.1046 61.1046 60 60 60H20V36Z\\" fill=\\"white\\"/><path d=\\"M19.5 35V60.5\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"calc_formula":{"type":"string","default":""},"manage_items_count":{"type":"string","default":"manually"},"new_item_label":{"type":"string","default":""},"manage_items_count_field":{"type":"string","default":""},"repeater_calc_type":{"type":"string","default":"default"},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/select-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/select-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/select-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","select"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"3\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"42\\" y=\\"8\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M48 15L50 17L52 15\\" stroke=\\"#162B40\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\"/><rect x=\\"1\\" y=\\"36\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"42\\" y=\\"41\\" width=\\"16\\" height=\\"16\\" rx=\\"3\\" fill=\\"#4AF3BA\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M48 48L50 50L52 48\\" stroke=\\"#162B40\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\"/></svg>","attributes":{"generator_numbers_min":{"type":"number","default":""},"generator_numbers_max":{"type":"number","default":""},"generator_numbers_step":{"type":"number","default":""},"glossary_id":{"type":"string","default":""},"switch_on_change":{"type":"boolean","default":false},"field_options_from":{"type":"string","default":"manual_input"},"field_options":{"type":"array","default":[]},"field_options_post_type":{"type":"string","default":"post"},"field_options_tax":{"type":"string","default":"category"},"field_options_key":{"type":"string","default":""},"generator_function":{"type":"string","default":""},"generator_field":{"type":"string","default":""},"calculated_value_from_key":{"type":"string","default":""},"value_from_key":{"type":"string","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/submit-field/block.json":
/*!*********************************************!*\
  !*** ../blocks-src/submit-field/block.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/submit-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","submit"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false,"multiple":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"12\\" width=\\"62\\" height=\\"31\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><mask id=\\"path-3-outside-1\\" maskUnits=\\"userSpaceOnUse\\" x=\\"40\\" y=\\"38\\" width=\\"17\\" height=\\"17\\" fill=\\"black\\"><rect fill=\\"white\\" x=\\"40\\" y=\\"38\\" width=\\"17\\" height=\\"17\\"/><path d=\\"M53.5023 53C53.702 53 53.8917 52.9651 54.0714 52.8952C54.2512 52.8153 54.4159 52.7055 54.5657 52.5657C54.8552 52.2661 55 51.9117 55 51.5023C55 51.0929 54.8552 50.7385 54.5657 50.4389L50.0127 45.9009L54.6555 43.7892C54.7554 43.7492 54.8303 43.6843 54.8802 43.5945C54.9301 43.5046 54.9501 43.4098 54.9401 43.3099C54.9301 43.2101 54.8902 43.1202 54.8203 43.0403C54.7504 42.9604 54.6655 42.9105 54.5657 42.8906L42.5841 40.015C42.5042 39.995 42.4243 39.995 42.3445 40.015C42.2646 40.0349 42.1947 40.0749 42.1348 40.1348C42.0849 40.1947 42.0449 40.2646 42.015 40.3445C41.995 40.4243 41.995 40.5042 42.015 40.5841L44.8906 52.5657C44.9105 52.6655 44.9604 52.7504 45.0403 52.8203C45.1202 52.8902 45.2101 52.9301 45.3099 52.9401C45.4098 52.9501 45.5046 52.9301 45.5945 52.8802C45.6843 52.8303 45.7492 52.7554 45.7892 52.6555L47.9009 48.0127L52.4389 52.5657C52.5887 52.7055 52.7535 52.8153 52.9332 52.8952C53.1129 52.9651 53.3026 53 53.5023 53Z\\"/></mask><path d=\\"M53.5023 53C53.702 53 53.8917 52.9651 54.0714 52.8952C54.2512 52.8153 54.4159 52.7055 54.5657 52.5657C54.8552 52.2661 55 51.9117 55 51.5023C55 51.0929 54.8552 50.7385 54.5657 50.4389L50.0127 45.9009L54.6555 43.7892C54.7554 43.7492 54.8303 43.6843 54.8802 43.5945C54.9301 43.5046 54.9501 43.4098 54.9401 43.3099C54.9301 43.2101 54.8902 43.1202 54.8203 43.0403C54.7504 42.9604 54.6655 42.9105 54.5657 42.8906L42.5841 40.015C42.5042 39.995 42.4243 39.995 42.3445 40.015C42.2646 40.0349 42.1947 40.0749 42.1348 40.1348C42.0849 40.1947 42.0449 40.2646 42.015 40.3445C41.995 40.4243 41.995 40.5042 42.015 40.5841L44.8906 52.5657C44.9105 52.6655 44.9604 52.7504 45.0403 52.8203C45.1202 52.8902 45.2101 52.9301 45.3099 52.9401C45.4098 52.9501 45.5046 52.9301 45.5945 52.8802C45.6843 52.8303 45.7492 52.7554 45.7892 52.6555L47.9009 48.0127L52.4389 52.5657C52.5887 52.7055 52.7535 52.8153 52.9332 52.8952C53.1129 52.9651 53.3026 53 53.5023 53Z\\" fill=\\"#4AF3BA\\"/><path d=\\"M54.0714 52.8952L54.7963 54.7592L54.8404 54.742L54.8837 54.7228L54.0714 52.8952ZM54.5657 52.5657L55.9303 54.0278L55.9679 53.9927L56.0036 53.9557L54.5657 52.5657ZM54.5657 50.4389L56.0036 49.0489L55.9907 49.0355L55.9776 49.0224L54.5657 50.4389ZM50.0127 45.9009L49.1846 44.0804L46.5537 45.2771L48.6008 47.3175L50.0127 45.9009ZM54.6555 43.7892L53.9127 41.9322L53.8697 41.9494L53.8275 41.9686L54.6555 43.7892ZM54.5657 42.8906L54.0989 44.8353L54.136 44.8442L54.1734 44.8517L54.5657 42.8906ZM42.5841 40.015L42.099 41.9553L42.1082 41.9575L42.1174 41.9598L42.5841 40.015ZM42.1348 40.1348L40.7206 38.7206L40.6564 38.7847L40.5984 38.8544L42.1348 40.1348ZM42.015 40.3445L40.1423 39.6422L40.1023 39.7489L40.0747 39.8594L42.015 40.3445ZM42.015 40.5841L43.9598 40.1174L43.9575 40.1082L43.9553 40.099L42.015 40.5841ZM44.8906 52.5657L46.8517 52.1734L46.8442 52.136L46.8353 52.0989L44.8906 52.5657ZM45.7892 52.6555L43.9686 51.8275L43.9494 51.8697L43.9322 51.9127L45.7892 52.6555ZM47.9009 48.0127L49.3175 46.6008L47.2771 44.5537L46.0804 47.1846L47.9009 48.0127ZM52.4389 52.5657L51.0224 53.9776L51.0479 54.0031L51.0743 54.0278L52.4389 52.5657ZM52.9332 52.8952L52.1209 54.7228L52.1642 54.742L52.2083 54.7592L52.9332 52.8952ZM53.5023 55C53.941 55 54.3773 54.9221 54.7963 54.7592L53.3465 51.0312C53.4061 51.008 53.463 51 53.5023 51V55ZM54.8837 54.7228C55.275 54.5489 55.6249 54.3129 55.9303 54.0278L53.201 51.1036C53.2029 51.1019 53.2093 51.0962 53.2204 51.0888C53.2316 51.0813 53.2448 51.0739 53.2592 51.0675L54.8837 54.7228ZM56.0036 53.9557C56.6466 53.2906 57 52.4405 57 51.5023H53C53 51.4658 53.0076 51.398 53.0399 51.3189C53.0719 51.2405 53.1112 51.1927 53.1277 51.1756L56.0036 53.9557ZM57 51.5023C57 50.5641 56.6466 49.714 56.0036 49.0489L53.1277 51.829C53.1112 51.8119 53.0719 51.7641 53.0399 51.6857C53.0076 51.6066 53 51.5388 53 51.5023H57ZM55.9776 49.0224L51.4246 44.4844L48.6008 47.3175L53.1538 51.8555L55.9776 49.0224ZM50.8407 47.7215L55.4836 45.6097L53.8275 41.9686L49.1846 44.0804L50.8407 47.7215ZM55.3983 45.6461C55.9039 45.4439 56.3443 45.0773 56.6285 44.5658L53.1319 42.6232C53.3162 42.2914 53.6068 42.0546 53.9127 41.9322L55.3983 45.6461ZM56.6285 44.5658C56.8712 44.1288 56.9818 43.6268 56.9302 43.1109L52.95 43.5089C52.9184 43.1927 52.989 42.8804 53.1319 42.6232L56.6285 44.5658ZM56.9302 43.1109C56.8763 42.5724 56.6525 42.0972 56.3254 41.7233L53.3151 44.3573C53.1278 44.1432 52.9839 43.8478 52.95 43.5089L56.9302 43.1109ZM56.3254 41.7233C55.9788 41.3271 55.5088 41.0396 54.9579 40.9294L54.1734 44.8517C53.8223 44.7815 53.522 44.5937 53.3151 44.3573L56.3254 41.7233ZM55.0324 40.9458L43.0508 38.0702L42.1174 41.9598L54.0989 44.8353L55.0324 40.9458ZM43.0692 38.0747C42.6708 37.9751 42.2578 37.9751 41.8594 38.0747L42.8295 41.9553C42.5909 42.0149 42.3376 42.0149 42.099 41.9553L43.0692 38.0747ZM41.8594 38.0747C41.4173 38.1852 41.029 38.4122 40.7206 38.7206L43.549 41.549C43.3604 41.7376 43.1119 41.8847 42.8295 41.9553L41.8594 38.0747ZM40.5984 38.8544C40.3918 39.1023 40.2437 39.3718 40.1423 39.6422L43.8876 41.0467C43.8461 41.1574 43.7779 41.2871 43.6712 41.4152L40.5984 38.8544ZM40.0747 39.8594C39.9751 40.2578 39.9751 40.6708 40.0747 41.0692L43.9553 40.099C44.0149 40.3376 44.0149 40.5909 43.9553 40.8295L40.0747 39.8594ZM40.0702 41.0508L42.9458 53.0324L46.8353 52.0989L43.9598 40.1174L40.0702 41.0508ZM42.9294 52.9579C43.0396 53.5088 43.3271 53.9788 43.7233 54.3254L46.3573 51.3151C46.5937 51.522 46.7815 51.8223 46.8517 52.1734L42.9294 52.9579ZM43.7233 54.3254C44.0972 54.6525 44.5724 54.8763 45.1109 54.9302L45.5089 50.95C45.8478 50.9839 46.1432 51.1278 46.3573 51.3151L43.7233 54.3254ZM45.1109 54.9302C45.6268 54.9818 46.1288 54.8712 46.5658 54.6285L44.6232 51.1319C44.8804 50.989 45.1927 50.9184 45.5089 50.95L45.1109 54.9302ZM46.5658 54.6285C47.0773 54.3443 47.4439 53.9039 47.6461 53.3983L43.9322 51.9127C44.0546 51.6068 44.2914 51.3162 44.6232 51.1319L46.5658 54.6285ZM47.6097 53.4836L49.7215 48.8407L46.0804 47.1846L43.9686 51.8275L47.6097 53.4836ZM46.4844 49.4246L51.0224 53.9776L53.8555 51.1538L49.3175 46.6008L46.4844 49.4246ZM51.0743 54.0278C51.3798 54.3129 51.7296 54.5489 52.1209 54.7228L53.7455 51.0675C53.7598 51.0739 53.773 51.0813 53.7842 51.0888C53.7954 51.0962 53.8018 51.1019 53.8036 51.1036L51.0743 54.0278ZM52.2083 54.7592C52.6273 54.9221 53.0636 55 53.5023 55V51C53.5416 51 53.5985 51.008 53.6581 51.0312L52.2083 54.7592Z\\" fill=\\"#162B40\\" mask=\\"url(#path-3-outside-1)\\"/><path d=\\"M12.75 30.4365C12.75 29.999 12.5951 29.6618 12.2852 29.4248C11.9798 29.1878 11.4261 28.9486 10.624 28.707C9.82194 28.4655 9.18392 28.1966 8.70996 27.9004C7.80306 27.3307 7.34961 26.5879 7.34961 25.6719C7.34961 24.8698 7.67546 24.209 8.32715 23.6895C8.9834 23.1699 9.83333 22.9102 10.877 22.9102C11.5697 22.9102 12.1872 23.0378 12.7295 23.293C13.2718 23.5482 13.6979 23.9128 14.0078 24.3867C14.3177 24.8561 14.4727 25.3779 14.4727 25.9521H12.75C12.75 25.4326 12.5859 25.027 12.2578 24.7354C11.9342 24.4391 11.4694 24.291 10.8633 24.291C10.2982 24.291 9.8584 24.4118 9.54395 24.6533C9.23405 24.8949 9.0791 25.2321 9.0791 25.665C9.0791 26.0296 9.24772 26.335 9.58496 26.5811C9.9222 26.8226 10.4782 27.0596 11.2529 27.292C12.0277 27.5199 12.6497 27.7819 13.1191 28.0781C13.5885 28.3698 13.9326 28.707 14.1514 29.0898C14.3701 29.4681 14.4795 29.9124 14.4795 30.4229C14.4795 31.2523 14.1605 31.9131 13.5225 32.4053C12.889 32.8929 12.0277 33.1367 10.9385 33.1367C10.2184 33.1367 9.55534 33.0046 8.94922 32.7402C8.34766 32.4714 7.87826 32.1022 7.54102 31.6328C7.20833 31.1634 7.04199 30.6165 7.04199 29.9922H8.77148C8.77148 30.5573 8.95833 30.9948 9.33203 31.3047C9.70573 31.6146 10.2412 31.7695 10.9385 31.7695C11.54 31.7695 11.9912 31.6488 12.292 31.4072C12.5973 31.1611 12.75 30.8376 12.75 30.4365ZM23.2773 23.0469V29.6982C23.2773 30.7555 22.9378 31.5941 22.2588 32.2139C21.5843 32.8291 20.6842 33.1367 19.5586 33.1367C18.4193 33.1367 17.5146 32.8337 16.8447 32.2275C16.1748 31.6169 15.8398 30.7715 15.8398 29.6914V23.0469H17.5625V29.7051C17.5625 30.3704 17.7311 30.8786 18.0684 31.2295C18.4056 31.5804 18.9023 31.7559 19.5586 31.7559C20.8893 31.7559 21.5547 31.054 21.5547 29.6504V23.0469H23.2773ZM25.1299 33V23.0469H28.541C29.6667 23.0469 30.5234 23.2725 31.1113 23.7236C31.6992 24.1748 31.9932 24.847 31.9932 25.7402C31.9932 26.196 31.8701 26.6061 31.624 26.9707C31.3779 27.3353 31.0179 27.6178 30.5439 27.8184C31.0817 27.9642 31.4964 28.2399 31.7881 28.6455C32.0843 29.0465 32.2324 29.5296 32.2324 30.0947C32.2324 31.029 31.9316 31.7467 31.3301 32.248C30.7331 32.7493 29.8763 33 28.7598 33H25.1299ZM26.8594 28.5088V31.6191H28.7803C29.3226 31.6191 29.7464 31.4847 30.0518 31.2158C30.3571 30.9469 30.5098 30.5732 30.5098 30.0947C30.5098 29.0602 29.9811 28.5316 28.9238 28.5088H26.8594ZM26.8594 27.2373H28.5547C29.0924 27.2373 29.5117 27.1165 29.8125 26.875C30.1178 26.6289 30.2705 26.2826 30.2705 25.8359C30.2705 25.3438 30.1292 24.9883 29.8467 24.7695C29.5687 24.5508 29.1335 24.4414 28.541 24.4414H26.8594V27.2373ZM36.2041 23.0469L39.0752 30.6758L41.9395 23.0469H44.1748V33H42.4521V29.7188L42.623 25.3301L39.6836 33H38.4463L35.5137 25.3369L35.6846 29.7188V33H33.9619V23.0469H36.2041ZM48.0508 33H46.3281V23.0469H48.0508V33ZM57.1631 24.4414H54.0596V33H52.3438V24.4414H49.2676V23.0469H57.1631V24.4414Z\\" fill=\\"#162B40\\"/></svg>","attributes":{"label":{"type":"string","default":"Submit"},"name":{"type":"string","default":"Submit"},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/text-field/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/text-field/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/text-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","text"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"65\\" height=\\"64\\" viewBox=\\"0 0 65 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><path d=\\"M44.9148 29.2883L45.8495 29.6436L44.9148 29.2883L33.1316 60.2883C32.6359 61.5925 33.594 63 34.9975 63H37.3174C38.1614 63 38.9118 62.4689 39.1962 61.6766L41.812 54.3874H54.1699L56.827 61.6853C57.1138 62.4731 57.8621 63 58.7027 63H61.0025C62.4065 63 63.3647 61.5916 62.868 60.2872L51.0636 29.2872C50.7691 28.5137 50.028 28 49.1982 28H46.7806C45.9503 28 45.209 28.5142 44.9148 29.2883ZM52.1579 48.8063H43.8411C43.8412 48.806 43.8413 48.8056 43.8414 48.8053L47.9911 37.3112L52.1575 48.8053C52.1577 48.8056 52.1578 48.806 52.1579 48.8063Z\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"field_type":{"type":"string","default":"text"},"enable_input_mask":{"type":"boolean","default":false},"mask_type":{"type":"string","default":""},"input_mask":{"type":"string","default":""},"mask_visibility":{"type":"string","default":"always"},"mask_placeholder":{"type":"string","default":"_"},"minlength":{"type":"number","default":""},"maxlength":{"type":"number","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/textarea-field/block.json":
/*!***********************************************!*\
  !*** ../blocks-src/textarea-field/block.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/textarea-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","textarea"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"6\\" y=\\"6\\" width=\\"52\\" height=\\"52\\" rx=\\"3\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"52\\" y=\\"1\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"52\\" y=\\"52\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"1\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"1\\" y=\\"52\\" width=\\"11\\" height=\\"11\\" rx=\\"1\\" fill=\\"white\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M43 20.581C44.1046 20.581 45 19.6856 45 18.581V17C45 15.8954 44.1046 15 43 15H20C18.8954 15 18 15.8954 18 17V18.581C18 19.6856 18.8954 20.581 20 20.581H28.3686V48C28.3686 49.1046 29.264 50 30.3686 50H32.6092C33.7138 50 34.6092 49.1046 34.6092 48L34.6092 20.581H43Z\\" fill=\\"#6F8BFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/></svg>","attributes":{"minlength":{"type":"number","default":""},"maxlength":{"type":"number","default":""},"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/time-field/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/time-field/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/time-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","time"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M60 16H4C2.89543 16 2 16.8954 2 18V38C2 39.1046 2.89543 40 4 40H60C61.1046 40 62 39.1046 62 38V18C62 16.8954 61.1046 16 60 16ZM4 14C1.79086 14 0 15.7909 0 18V38C0 40.2091 1.79086 42 4 42H60C62.2091 42 64 40.2091 64 38V18C64 15.7909 62.2091 14 60 14H4Z\\" fill=\\"#162B40\\"/><circle cx=\\"43\\" cy=\\"42\\" r=\\"14\\" fill=\\"#6F8CFF\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><rect x=\\"42\\" y=\\"43\\" width=\\"7\\" height=\\"2\\" rx=\\"1\\" fill=\\"#162B40\\"/><rect x=\\"42\\" y=\\"35\\" width=\\"2\\" height=\\"10\\" rx=\\"1\\" fill=\\"#162B40\\"/></svg>","attributes":{"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"default":{"type":"string","default":""},"required":{"type":"boolean","default":false},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "../blocks-src/wysiwyg-field/block.json":
/*!**********************************************!*\
  !*** ../blocks-src/wysiwyg-field/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"jet-forms/wysiwyg-field","category":"jet-form-builder-fields","keywords":["jetformbuilder","field","wysiwyg","text"],"textdomain":"jet-form-builder","supports":{"customClassName":false,"html":false},"icon":"<svg width=\\"64\\" height=\\"64\\" viewBox=\\"0 0 64 64\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><rect width=\\"64\\" height=\\"64\\" fill=\\"white\\"/><rect x=\\"1\\" y=\\"15\\" width=\\"62\\" height=\\"26\\" rx=\\"3\\" fill=\\"#4EFEC3\\" stroke=\\"#162B40\\" stroke-width=\\"2\\"/><path d=\\"M10 34V23H13.7708C15.077 23 16.0678 23.2569 16.7431 23.7706C17.4184 24.2793 17.756 25.0272 17.756 26.0144C17.756 26.5533 17.6205 27.0293 17.3494 27.4423C17.0782 27.8503 16.7012 28.15 16.2181 28.3413C16.7702 28.4824 17.2039 28.7669 17.5194 29.1951C17.8398 29.6232 18 30.147 18 30.7665C18 31.8242 17.6697 32.625 17.0092 33.169C16.3487 33.7129 15.4073 33.9899 14.1848 34H10ZM12.2181 29.2102V32.1793H14.1183C14.6408 32.1793 15.0474 32.0533 15.3383 31.8015C15.634 31.5446 15.7819 31.1921 15.7819 30.7438C15.7819 29.7365 15.2717 29.2253 14.2514 29.2102H12.2181ZM12.2181 27.6085H13.8595C14.9784 27.5884 15.5379 27.1326 15.5379 26.2411C15.5379 25.7424 15.3949 25.3848 15.1091 25.1683C14.8281 24.9467 14.382 24.8359 13.7708 24.8359H12.2181V27.6085Z\\" fill=\\"#162B40\\"/><path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M35.0634 25.2306H32.8394L30.5817 31.8276H32.0422V34.0581H26V31.8276H28.2241L30.4819 25.2306H29.0212V23H35.0634V25.2306Z\\" fill=\\"#162B40\\"/><circle cx=\\"44.4385\\" cy=\\"24.375\\" r=\\"1.375\\" fill=\\"#162B40\\"/><circle cx=\\"44.4385\\" cy=\\"28.5\\" r=\\"1.375\\" fill=\\"#162B40\\"/><circle cx=\\"44.4385\\" cy=\\"32.625\\" r=\\"1.375\\" fill=\\"#162B40\\"/><path d=\\"M47.1885 24.375H54.0635\\" stroke=\\"#162B40\\" stroke-width=\\"1.375\\"/><path d=\\"M47.1885 28.5H54.0635\\" stroke=\\"#162B40\\" stroke-width=\\"1.375\\"/><path d=\\"M47.1885 32.625H54.0635\\" stroke=\\"#162B40\\" stroke-width=\\"1.375\\"/></svg>","attributes":{"label":{"type":"string","default":""},"name":{"type":"string","default":"field_name"},"desc":{"type":"string","default":""},"required":{"type":"boolean","default":false},"default":{"type":"string","default":""},"add_prev":{"type":"boolean","default":false},"prev_label":{"type":"string","default":""},"visibility":{"type":"string","default":""},"class_name":{"type":"string","default":""},"className":{"type":"string","default":""}}}');

/***/ }),

/***/ "./editor/blocks/block-wrappers.js":
/*!*****************************************!*\
  !*** ./editor/blocks/block-wrappers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withCustomProps": () => (/* binding */ withCustomProps)
/* harmony export */ });
/* harmony import */ var _help_messages_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-messages-config */ "./editor/blocks/help-messages-config.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var applyFilters = wp.hooks.applyFilters;
function withCustomProps(block) {
  var EditComponent = block.settings.edit;
  var _plugins = {};

  if ('useEditProps' in block.settings) {
    var useEditProps = block.settings.useEditProps;
    useEditProps.forEach(function (name) {
      var editProp = editProps.find(function (prop) {
        return name === prop.name;
      });

      if (editProp) {
        _plugins[name] = editProp.callable(block);
      }
    });
    delete block.settings.useEditProps;
  }

  return function (props) {
    return wp.element.createElement(EditComponent, _extends({}, props, {
      editProps: _objectSpread({}, _plugins)
    }));
  };
}

var getHelpInstance = function getHelpInstance(block) {
  var messages = {};
  _help_messages_config__WEBPACK_IMPORTED_MODULE_0__.messagesConfig.forEach(function (msg) {
    if (msg.to.includes(block.name) && msg.message) {
      messages[msg.attribute] = msg;
    }
  });
  return function (attribute) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!(attribute in messages)) {
      return '';
    }

    var item = messages[attribute];

    if ('conditions' in item) {
      for (var attrName in item.conditions) {
        if (!(attrName in attributes) || item.conditions[attrName] !== attributes[attrName]) {
          return;
        }
      }
    }

    return item.message;
  };
};

var editProps = applyFilters('jet.fb.register.editProps', [{
  name: 'uniqKey',
  callable: function callable(block) {
    return function (suffix) {
      return "".concat(block.name, "/").concat(suffix);
    };
  }
}, {
  name: 'blockName',
  callable: function callable(block) {
    return block.name;
  }
}, {
  name: 'attrHelp',
  callable: getHelpInstance
}]);

/***/ }),

/***/ "./editor/blocks/calculated-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/calculated-field/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditCalculated)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper,
    BaseHelp = _JetFBComponents.BaseHelp;
var _JetFBActions = JetFBActions,
    getFieldsWithoutCurrent = _JetFBActions.getFieldsWithoutCurrent;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    ToolbarGroup = _wp$components.ToolbarGroup,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = __experimentalNumberControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    RawHTML = _wp$element.RawHTML;
var applyFilters = wp.hooks.applyFilters;
var help = {
  calc_hidden: __('Check this to hide calculated field')
};
function EditCalculated(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;

  var insertMacros = function insertMacros(macros) {
    setAttributes({
      calc_formula: "".concat(attributes.calc_formula || '').concat(macros)
    });
  };

  var togglePopover = function togglePopover() {
    var fields = getFieldsWithoutCurrent().map(function (_ref2) {
      var value = _ref2.value;
      return '%FIELD::' + value + '%';
    });
    setFormFields(applyFilters('jet.fb.calculated.field.available.fields', fields));
    setShowMacros(function (toggle) {
      return !toggle;
    });
  };

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFields = _useState2[0],
      setFormFields = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showMacros = _useState4[0],
      setShowMacros = _useState4[1];

  return [wp.element.createElement(BlockControls, {
    key: uniqKey('BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolbarGroup')
  }, wp.element.createElement(Button, {
    key: uniqKey('show-popover'),
    isTertiary: true,
    isSmall: true,
    icon: showMacros ? 'no-alt' : 'admin-tools',
    onClick: togglePopover
  }), showMacros && wp.element.createElement(Popover, {
    key: uniqKey('Popover'),
    position: 'bottom left'
  }, formFields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, formFields.map(function (value, index) {
    return wp.element.createElement("div", {
      key: uniqKey("formFields-".concat(index))
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        insertMacros(value);
      }
    }, value));
  }))))), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement("p", {
    className: 'components-base-control__help',
    style: {
      marginTop: '0px',
      color: 'rgb(117, 117, 117)'
    },
    dangerouslySetInnerHTML: {
      __html: JetFormCalculatedField.field_desc
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Decimal Places Number'),
    labelPosition: "top",
    key: "precision",
    value: attributes.precision,
    onChange: function onChange(newValue) {
      setAttributes({
        precision: parseInt(newValue)
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_separate_decimals",
    label: __('Decimals separator'),
    value: attributes.separate_decimals,
    onChange: function onChange(separate_decimals) {
      return setAttributes({
        separate_decimals: separate_decimals
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_separate_thousands",
    label: __('Thousands separator'),
    value: attributes.separate_thousands,
    onChange: function onChange(separate_thousands) {
      return setAttributes({
        separate_thousands: separate_thousands
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_prefix",
    label: __('Calculated Value Prefix'),
    value: attributes.calc_prefix,
    help: __('For space before or after text use: &nbsp;'),
    onChange: function onChange(newValue) {
      setAttributes({
        calc_prefix: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calc_suffix",
    label: __('Calculated Value Suffix'),
    value: attributes.calc_suffix,
    help: __('For space before or after text use: &nbsp;'),
    onChange: function onChange(newValue) {
      setAttributes({
        calc_suffix: newValue
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'calc_hidden',
    label: __('Hidden'),
    checked: attributes.calc_hidden,
    help: help.calc_hidden,
    onChange: function onChange(newVal) {
      setAttributes({
        calc_hidden: Boolean(newVal)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement("div", {
    className: 'jet-form-builder__calculated-field'
  }, wp.element.createElement("div", {
    className: 'calc-prefix'
  }, attributes.calc_prefix), wp.element.createElement("div", {
    className: 'calc-formula'
  }, attributes.calc_formula), wp.element.createElement("div", {
    className: 'calc-suffix'
  }, attributes.calc_suffix)), props.isSelected && wp.element.createElement(React.Fragment, null, wp.element.createElement(TextareaControl, {
    key: "calc_formula",
    value: attributes.calc_formula,
    onChange: function onChange(newValue) {
      setAttributes({
        calc_formula: newValue
      });
    }
  }))))];
}

/***/ }),

/***/ "./editor/blocks/calculated-field/index.js":
/*!*************************************************!*\
  !*** ./editor/blocks/calculated-field/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/calculated-field/edit.js");
/* harmony import */ var _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/calculated-field/block.json */ "../blocks-src/calculated-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _blocks_calculated_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Calculated Field'),
  className: name.replace('/', '-'),
  description: __('Calculate and display your number values'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      label: 'Calculated Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/checkbox-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/checkbox-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckboxEdit)
/* harmony export */ });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    FieldControl = _JetFBComponents.FieldControl;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var localized = window.JetFormCheckboxFieldData;
function CheckboxEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__.SelectRadioCheckPlaceholder, _extends({
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: localized
  }, props)), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__.default, props, wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))))];
}

/***/ }),

/***/ "./editor/blocks/checkbox-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/checkbox-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/checkbox-field/edit.js");
/* harmony import */ var _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/checkbox-field/block.json */ "../blocks-src/checkbox-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _blocks_checkbox_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Checkbox Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'blockName', 'attrHelp'],
  example: {
    attributes: {
      label: 'Checkbox Field',
      desc: 'Field description...',
      field_options: [{
        label: 'First Option',
        value: ''
      }, {
        label: 'Second Option',
        value: ''
      }, {
        label: 'Third Option',
        value: ''
      }]
    }
  }
};


/***/ }),

/***/ "./editor/blocks/color-picker-field/edit.js":
/*!**************************************************!*\
  !*** ./editor/blocks/color-picker-field/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    useBlockProps = _wp$blockEditor.useBlockProps;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function ColorPickerEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, _extends({
    key: uniqKey('FieldSettingsWrapper')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(InputControl, {
    className: "jet-form-builder__field-wrap",
    type: "color",
    key: 'color_picker_place_holder_block',
    onChange: function onChange() {}
  })))];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPickerEdit);

/***/ }),

/***/ "./editor/blocks/color-picker-field/index.js":
/*!***************************************************!*\
  !*** ./editor/blocks/color-picker-field/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/color-picker-field/edit.js");
/* harmony import */ var _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/color-picker-field/block.json */ "../blocks-src/color-picker-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    icon = _blocks_color_picker_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Color Picker Field'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'blockName', 'attrHelp'],
  example: {
    attributes: {
      label: 'Color Picker Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/conditional-block/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/conditional-block/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConditionalBlockEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/conditional-block/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBComponents = JetFBComponents,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    ActionModal = _JetFBComponents.ActionModal,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset;
var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    getInnerBlocks = _JetFBActions.getInnerBlocks,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InnerBlocks = _ref.InnerBlocks,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    Button = _wp$components.Button,
    ToolbarGroup = _wp$components.ToolbarGroup,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl;
var useState = wp.element.useState;
function ConditionalBlockEdit(props) {
  var blockProps = useBlockProps();
  var setAttributes = props.setAttributes,
      attributes = props.attributes,
      clientId = props.clientId,
      uniqKey = props.editProps.uniqKey;
  Tools.addConditionForCondType('isSingleField', function () {
    return 1 === getInnerBlocks(clientId).length;
  });
  var getConditionTypes = Tools.parseConditionsFunc(_options__WEBPACK_IMPORTED_MODULE_0__.options.conditionTypes);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var formFields = getFormFieldsBlocks([], '--');
  return [wp.element.createElement(BlockControls, {
    key: uniqKey('BlockControls')
  }, wp.element.createElement(ToolbarGroup, {
    key: uniqKey('ToolbarGroup')
  }, wp.element.createElement(Button, {
    key: uniqKey('randomize'),
    isTertiary: true,
    isSmall: true,
    icon: "randomize",
    onClick: function onClick() {
      return setShowModal(true);
    }
  }))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement("div", {
    className: "jet-form-builder__conditional"
  }, wp.element.createElement(InnerBlocks, {
    key: uniqKey('conditional-fields'),
    renderAppender: function renderAppender() {
      return wp.element.createElement(InnerBlocks.ButtonBlockAppender, {
        key: uniqKey('ButtonBlockAppender')
      });
    }
  }))), showModal && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: function onRequestClose() {
      return setShowModal(false);
    },
    title: "Conditional Logic"
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
      key: uniqKey('RepeaterWithState'),
      items: attributes.conditions,
      isSaveAction: actionClick,
      onUnMount: onRequestClose,
      newItem: _options__WEBPACK_IMPORTED_MODULE_0__.options.condition,
      onSaveItems: function onSaveItems(conditions) {
        return setAttributes({
          conditions: conditions
        });
      },
      addNewButtonLabel: __("New Condition"),
      help: {
        helpVisible: function helpVisible(conditions) {
          return conditions.length > 1;
        },
        helpSource: window.JetFormEditorData.helpForRepeaters,
        helpKey: 'conditional_block'
      }
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-type'),
        label: "Type",
        labelPosition: "side",
        value: currentItem.type,
        options: getConditionTypes,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            type: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-field'),
        label: "Field",
        labelPosition: "side",
        value: currentItem.field,
        options: formFields,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            field: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        key: uniqKey('SelectControl-operator'),
        label: "Operator",
        labelPosition: "side",
        value: currentItem.operator,
        options: _options__WEBPACK_IMPORTED_MODULE_0__.options.conditionOperators,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            operator: newValue
          });
        }
      }), wp.element.createElement(FieldWithPreset, {
        key: uniqKey('FieldWithPreset-value_to_compare'),
        baseControlProps: {
          label: "Value to Compare"
        },
        ModalEditor: function ModalEditor(_ref4) {
          var actionClick = _ref4.actionClick,
              onRequestClose = _ref4.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
            key: uniqKey('DynamicPreset-value_to_compare'),
            value: currentItem.value,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                value: newValue
              });
            },
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        key: uniqKey('TextareaControl-value'),
        className: 'jet-control-clear jet-user-fields-map__list',
        value: currentItem.value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            value: newValue
          });
        }
      })), 'set_value' === currentItem.type && wp.element.createElement(FieldWithPreset, {
        key: uniqKey('FieldWithPreset-value_to_set'),
        baseControlProps: {
          label: __('Value to Set', 'jet-form-builder'),
          help: __('Separate values with commas', 'jet-form-builder')
        },
        ModalEditor: function ModalEditor(_ref5) {
          var actionClick = _ref5.actionClick,
              onRequestClose = _ref5.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
            key: uniqKey('DynamicPreset-value_to_set'),
            value: currentItem.set_value,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                set_value: newValue
              });
            },
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        key: uniqKey('TextareaControl-set_value'),
        className: 'jet-control-clear jet-user-fields-map__list',
        value: currentItem.set_value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            set_value: newValue
          });
        }
      })));
    });
  })];
}

/***/ }),

/***/ "./editor/blocks/conditional-block/index.js":
/*!**************************************************!*\
  !*** ./editor/blocks/conditional-block/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/conditional-block/edit.js");
/* harmony import */ var _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/conditional-block/block.json */ "../blocks-src/conditional-block/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./editor/blocks/conditional-block/save.js");



var __ = wp.i18n.__;
var name = _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_conditional_block_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Conditional Block'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default,
  useEditProps: ['uniqKey'],
  example: {
    innerBlocks: [{
      name: 'jet-forms/text-field',
      attributes: {
        label: 'Title'
      }
    }, {
      name: 'jet-forms/radio-field',
      attributes: {
        label: 'Item Radio',
        field_options: [{
          label: 'First Option',
          value: ''
        }, {
          label: 'Second Option',
          value: ''
        }, {
          label: 'Third Option',
          value: ''
        }]
      }
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/conditional-block/options.js":
/*!****************************************************!*\
  !*** ./editor/blocks/conditional-block/options.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
var options = {
  condition: {
    type: 'hide',
    field: '',
    operator: '',
    value: '',
    set_value: ''
  },
  conditionTypes: [{
    label: '--',
    value: ''
  }, {
    label: 'Hide this field if...',
    value: 'hide'
  }, {
    label: 'Show this field if...',
    value: 'show'
  }, {
    label: 'Set value for this field if...',
    value: 'set_value',
    condition: 'isSingleField'
  }],
  conditionOperators: [{
    label: '--',
    value: ''
  }, {
    label: 'Equal',
    value: 'equal'
  }, {
    label: 'Greater than',
    value: 'greater'
  }, {
    label: 'Less than',
    value: 'less'
  }, {
    label: 'Between',
    value: 'between'
  }, {
    label: 'In the list',
    value: 'one_of'
  }, {
    label: 'Contain text',
    value: 'contain'
  }]
};

/***/ }),

/***/ "./editor/blocks/conditional-block/save.js":
/*!*************************************************!*\
  !*** ./editor/blocks/conditional-block/save.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConditionalSave)
/* harmony export */ });
var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InnerBlocks = _ref.InnerBlocks;

function ConditionalSave(props) {
  return wp.element.createElement(InnerBlocks.Content, null);
}

/***/ }),

/***/ "./editor/blocks/controls/default-meta.js":
/*!************************************************!*\
  !*** ./editor/blocks/controls/default-meta.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;

var JetDefaultMetaControl = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(JetDefaultMetaControl, _wp$element$Component);

  var _super = _createSuper(JetDefaultMetaControl);

  function JetDefaultMetaControl(props) {
    var _this;

    _classCallCheck(this, JetDefaultMetaControl);

    _this = _super.call(this, props);
    _this.addNewOption = _this.addNewOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(JetDefaultMetaControl, [{
    key: "getDefaultMeta",
    value: function getDefaultMeta() {
      if (!this.props.defaultMeta) {
        return [];
      }

      return Array.from(this.props.defaultMeta);
    }
  }, {
    key: "addNewOption",
    value: function addNewOption() {
      var items = this.getDefaultMeta();
      items.push({
        key: '',
        value: ''
      });
      this.props.onChange(items);
    }
  }, {
    key: "removeOption",
    value: function removeOption(index) {
      var items = this.getDefaultMeta();
      items.splice(index, 1);
      this.props.onChange(items);
    }
  }, {
    key: "onChangeValue",
    value: function onChangeValue(_ref) {
      var value = _ref.value,
          name = _ref.name,
          id = _ref.id;
      var items = Array.from(this.props.defaultMeta);
      items[id][name] = value;
      this.props.onChange(items);
    }
    /* eslint-disable jsx-a11y/no-onchange */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, this.getDefaultMeta().map(function (currentItem, index) {
        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'jet-form-builder-repeater-item-' + index
        }, wp.element.createElement("div", {
          className: "repeater-item-column jet-margin-bottom-wrapper"
        }, wp.element.createElement(TextControl, {
          key: "meta_key",
          label: __('Meta Key'),
          value: currentItem.key,
          onChange: function onChange(newValue) {
            _this2.onChangeValue({
              value: newValue,
              name: 'key',
              id: index
            });
          }
        }), wp.element.createElement(TextControl, {
          key: "meta_value",
          label: __('Meta Value'),
          value: currentItem.value,
          onChange: function onChange(newValue) {
            _this2.onChangeValue({
              value: newValue,
              name: 'value',
              id: index
            });
          }
        })), wp.element.createElement("div", {
          className: "repeater-item-column"
        }, wp.element.createElement(Button, {
          icon: "dismiss",
          label: "Remove",
          onClick: function onClick() {
            return _this2.removeOption(index);
          }
        })));
      }), wp.element.createElement(Button, {
        className: "button-add-option",
        isSecondary: true,
        onClick: this.addNewOption
      }, __('Add New Option')));
    }
  }]);

  return JetDefaultMetaControl;
}(wp.element.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JetDefaultMetaControl);

/***/ }),

/***/ "./editor/blocks/date-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/date-field/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function DateEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      isSelected = props.isSelected,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      blockName = _props$editProps.blockName,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('JetForm-toolbar')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(ToggleControl, {
    key: "is_timestamp",
    label: __('Is Timestamp'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: "place_holder_block_".concat(blockName),
    placeholder: 'Input type="date"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/date-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/date-field/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/date-field/edit.js");
/* harmony import */ var _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/date-field/block.json */ "../blocks-src/date-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_date_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Date Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Date Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/datetime-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/datetime-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTimeEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody;
function DateTimeEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('JetForm-general')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(ToggleControl, {
    key: uniqKey('is_timestamp'),
    label: __('Is Timestamp'),
    checked: attributes.is_timestamp,
    help: attrHelp('is_timestamp'),
    onChange: function onChange(newValue) {
      setAttributes({
        is_timestamp: Boolean(newValue)
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('JetForm-advanced')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: uniqKey('place_holder_block'),
    placeholder: 'Input type="datetime-local"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/datetime-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/datetime-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/datetime-field/edit.js");
/* harmony import */ var _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/datetime-field/block.json */ "../blocks-src/datetime-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_datetime_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Datetime field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Datetime Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/form-break-field/edit.js":
/*!************************************************!*\
  !*** ./editor/blocks/form-break-field/edit.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormBreakEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps,
    RichText = _ref.RichText;

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button;
function FormBreakEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [props.isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields'),
    autoCompleteLabel: false
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(TextControl, {
    label: __('Label of progress'),
    value: attributes.label_progress,
    help: attrHelp('label_progress'),
    onChange: function onChange(newValue) {
      props.setAttributes({
        label_progress: newValue
      });
    }
  }), wp.element.createElement(TextareaControl, {
    key: "page_break_disabled",
    value: attributes.page_break_disabled,
    label: __('Disabled message'),
    help: attrHelp('page_break_disabled'),
    onChange: function onChange(newValue) {
      setAttributes({
        page_break_disabled: newValue
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement("div", {
    className: 'jet-form-builder__next-page-wrap'
  }, wp.element.createElement(Button, {
    isSecondary: true,
    key: "next_page_button",
    className: "jet-form-builder__next-page"
  }, wp.element.createElement(RichText, {
    placeholder: "Next...",
    allowedFormats: [],
    value: attributes.label,
    onChange: function onChange(label) {
      return setAttributes({
        label: label
      });
    }
  })), attributes.add_prev && wp.element.createElement(Button, {
    isSecondary: true,
    key: "prev_page_button",
    className: "jet-form-builder__prev-page"
  }, wp.element.createElement(RichText, {
    placeholder: "Prev...",
    allowedFormats: [],
    value: attributes.prev_label,
    onChange: function onChange(prev_label) {
      return setAttributes({
        prev_label: prev_label
      });
    }
  }))))];
}

/***/ }),

/***/ "./editor/blocks/form-break-field/index.js":
/*!*************************************************!*\
  !*** ./editor/blocks/form-break-field/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/form-break-field/edit.js");
/* harmony import */ var _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/form-break-field/block.json */ "../blocks-src/form-break-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_form_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Form Break Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Next Page'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/form-fields.js":
/*!**************************************!*\
  !*** ./editor/blocks/form-fields.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterFormFields)
/* harmony export */ });
/* harmony import */ var _calculated_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculated-field */ "./editor/blocks/calculated-field/index.js");
/* harmony import */ var _checkbox_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-field */ "./editor/blocks/checkbox-field/index.js");
/* harmony import */ var _conditional_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditional-block */ "./editor/blocks/conditional-block/index.js");
/* harmony import */ var _date_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-field */ "./editor/blocks/date-field/index.js");
/* harmony import */ var _datetime_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datetime-field */ "./editor/blocks/datetime-field/index.js");
/* harmony import */ var _form_break_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-break-field */ "./editor/blocks/form-break-field/index.js");
/* harmony import */ var _group_break_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-break-field */ "./editor/blocks/group-break-field/index.js");
/* harmony import */ var _heading_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heading-field */ "./editor/blocks/heading-field/index.js");
/* harmony import */ var _hidden_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hidden-field */ "./editor/blocks/hidden-field/index.js");
/* harmony import */ var _media_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-field */ "./editor/blocks/media-field/index.js");
/* harmony import */ var _number_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number-field */ "./editor/blocks/number-field/index.js");
/* harmony import */ var _radio_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radio-field */ "./editor/blocks/radio-field/index.js");
/* harmony import */ var _range_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./range-field */ "./editor/blocks/range-field/index.js");
/* harmony import */ var _repeater_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./repeater-field */ "./editor/blocks/repeater-field/index.js");
/* harmony import */ var _select_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select-field */ "./editor/blocks/select-field/index.js");
/* harmony import */ var _submit_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./submit-field */ "./editor/blocks/submit-field/index.js");
/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text-field */ "./editor/blocks/text-field/index.js");
/* harmony import */ var _textarea_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./textarea-field */ "./editor/blocks/textarea-field/index.js");
/* harmony import */ var _time_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./time-field */ "./editor/blocks/time-field/index.js");
/* harmony import */ var _wysiwyg_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wysiwyg-field */ "./editor/blocks/wysiwyg-field/index.js");
/* harmony import */ var _color_picker_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./color-picker-field */ "./editor/blocks/color-picker-field/index.js");
/* harmony import */ var _block_wrappers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./block-wrappers */ "./editor/blocks/block-wrappers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























var registerBlockType = wp.blocks.registerBlockType;
var applyFilters = wp.hooks.applyFilters;
var fields = applyFilters('jet.fb.register.fields', [_calculated_field__WEBPACK_IMPORTED_MODULE_0__, _checkbox_field__WEBPACK_IMPORTED_MODULE_1__, _conditional_block__WEBPACK_IMPORTED_MODULE_2__, _datetime_field__WEBPACK_IMPORTED_MODULE_4__, _date_field__WEBPACK_IMPORTED_MODULE_3__, _form_break_field__WEBPACK_IMPORTED_MODULE_5__, _group_break_field__WEBPACK_IMPORTED_MODULE_6__, _heading_field__WEBPACK_IMPORTED_MODULE_7__, _hidden_field__WEBPACK_IMPORTED_MODULE_8__, _media_field__WEBPACK_IMPORTED_MODULE_9__, _number_field__WEBPACK_IMPORTED_MODULE_10__, _radio_field__WEBPACK_IMPORTED_MODULE_11__, _range_field__WEBPACK_IMPORTED_MODULE_12__, _repeater_field__WEBPACK_IMPORTED_MODULE_13__, _select_field__WEBPACK_IMPORTED_MODULE_14__, _submit_field__WEBPACK_IMPORTED_MODULE_15__, _text_field__WEBPACK_IMPORTED_MODULE_16__, _textarea_field__WEBPACK_IMPORTED_MODULE_17__, _time_field__WEBPACK_IMPORTED_MODULE_18__, _wysiwyg_field__WEBPACK_IMPORTED_MODULE_19__, _color_picker_field__WEBPACK_IMPORTED_MODULE_20__]);

var registerFormField = function registerFormField(block) {
  if (!block) {
    return;
  }

  var metadata = block.metadata,
      settings = block.settings,
      name = block.name;
  settings.edit = _block_wrappers__WEBPACK_IMPORTED_MODULE_21__.withCustomProps(block);
  registerBlockType(name, _objectSpread(_objectSpread({}, metadata), settings));
};

function sortBlocks(_ref, _ref2) {
  var a = _ref.settings.title;
  var b = _ref2.settings.title;

  try {
    return a.localeCompare(b);
  } catch (e) {
    return 0;
  }
}

function RegisterFormFields() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fields;
  blocks.sort(sortBlocks);
  blocks.forEach(applyFilters('jet.fb.register.fields.handler', registerFormField));
}

/***/ }),

/***/ "./editor/blocks/group-break-field/edit.js":
/*!*************************************************!*\
  !*** ./editor/blocks/group-break-field/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GroupBreakEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    AdvancedFields = _JetFBComponents.AdvancedFields;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function GroupBreakEdit(props) {
  var blockProps = useBlockProps();
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", blockProps, wp.element.createElement("div", {
    className: 'jet-form-builder__group-break'
  }, wp.element.createElement("span", null, __('GROUP BREAK'))))];
}

/***/ }),

/***/ "./editor/blocks/group-break-field/index.js":
/*!**************************************************!*\
  !*** ./editor/blocks/group-break-field/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/group-break-field/edit.js");
/* harmony import */ var _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/group-break-field/block.json */ "../blocks-src/group-break-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_group_break_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Group Break Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey'],
  example: {}
};


/***/ }),

/***/ "./editor/blocks/heading-field/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/heading-field/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeadingEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

function HeadingEdit(props) {
  var blockProps = useBlockProps();
  var isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper'),
    valueIfEmptyLabel: 'Heading'
  }, props)))];
}

/***/ }),

/***/ "./editor/blocks/heading-field/index.js":
/*!**********************************************!*\
  !*** ./editor/blocks/heading-field/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/heading-field/edit.js");
/* harmony import */ var _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/heading-field/block.json */ "../blocks-src/heading-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_heading_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Heading Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      label: 'Heading Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/help-messages-config.js":
/*!***********************************************!*\
  !*** ./editor/blocks/help-messages-config.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messagesConfig": () => (/* binding */ messagesConfig)
/* harmony export */ });
var __ = wp.i18n.__;
var MEDIA = 'jet-forms/media-field';
var FORM_BREAK = 'jet-forms/form-break-field';
var DATE = 'jet-forms/date-field';
var DATETIME = 'jet-forms/datetime-field';
var RADIO = 'jet-forms/radio-field';
var CHECKBOX = 'jet-forms/checkbox-field';
var SELECT = 'jet-forms/select-field';
var RANGE = 'jet-forms/range-field';
var REPEATER = 'jet-forms/repeater-field';
var TEXT = 'jet-forms/text-field';
var TIME = 'jet-forms/time-field';
var messagesConfig = [{
  attribute: 'is_timestamp',
  to: [DATE, DATETIME],
  message: __("Check this if you want to send value of this \n\t\tfield as timestamp instead of plain datetime")
}, {
  attribute: 'default',
  to: [DATE],
  message: __('Plain date should be in yyyy-mm-dd format')
}, {
  attribute: 'default',
  to: [DATETIME],
  message: __('Plain datetime should be in yyyy-MM-ddThh:mm format')
}, {
  attribute: 'page_break_disabled',
  to: [FORM_BREAK],
  message: __("Text to show if next page button is disabled. \n\t\tFor example - \"Fill required fields\" etc.")
}, {
  attribute: 'insert_attachment',
  to: [MEDIA],
  message: __("If checked new attachment will be inserted for uploaded file. \n\t\tNote: work only for logged-in users!")
}, {
  attribute: 'max_files',
  to: [MEDIA],
  message: __('If not set allow to upload 1 file')
}, {
  attribute: 'max_size',
  to: [MEDIA],
  message: __('Mb')
}, {
  attribute: 'allowed_mimes',
  to: [MEDIA],
  message: __("If no MIME type selected will allow all types. \n\t\tHold down the Ctrl (windows) / Command (Mac) button to select multiple options.")
}, {
  attribute: 'value_from_meta',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("By default post/term ID is used as value. Here you can \n\t\tset meta field name to use its value as form field value")
}, {
  attribute: 'calculated_value_from_key',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("Here you can set meta field name to use its value \n\t\tas calculated value for current form field")
}, {
  attribute: 'generator_field',
  to: [RADIO, CHECKBOX, SELECT],
  message: __("For Numbers range generator set field with max range value"),
  conditions: {
    generator_function: 'num_range'
  }
}, {
  attribute: 'switch_on_change',
  to: [SELECT],
  message: __("Check this to switch page to next on current value change")
}, {
  attribute: 'prefix_suffix',
  to: [RANGE],
  message: __('For space before or after text use: &nbsp;')
}, {
  attribute: 'calc_hidden',
  to: [REPEATER],
  message: __('Check this to hide calculated field')
}, {
  attribute: 'input_mask_default',
  to: [TEXT],
  message: __("Examples: (999) 999-9999 - static mask, 9-a{1,3}9{1,3} - mask with dynamic syntax \n\t\tDefault masking definitions: 9 - numeric, a - alphabetical, * - alphanumeric")
}, {
  attribute: 'input_mask_datetime_link',
  to: [TEXT],
  message: "https://github.com/RobinHerbots/Inputmask/blob/5.x/README_date.md"
}, {
  attribute: 'default',
  to: [TIME],
  message: __('Plain time should be in hh:mm:ss format')
}, {
  attribute: 'label_progress',
  to: [FORM_BREAK],
  message: __("To set/change a last progress name add a Form Break Field at the very end of the form.")
}];


/***/ }),

/***/ "./editor/blocks/hidden-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/hidden-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HiddenEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/hidden-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var __ = wp.i18n.__;
var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var _JetFBActions = JetFBActions,
    getConvertedName = _JetFBActions.getConvertedName;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps,
    RichText = _ref.RichText;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    Card = _wp$components.Card,
    CardHeader = _wp$components.CardHeader,
    CardBody = _wp$components.CardBody,
    BaseControl = _wp$components.BaseControl;
function HiddenEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();

  var setDynamicName = function setDynamicName(newValue) {
    if (newValue && (!attributes.name || 'hidden_field_name' === attributes.name)) {
      setAttributes({
        name: newValue
      });
    }
  };

  var checkFieldValueInput = function checkFieldValueInput() {
    return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
      key: "field_value",
      label: "Field Value",
      labelPosition: "top",
      value: attributes.field_value,
      onChange: function onChange(newValue) {
        setAttributes({
          field_value: newValue
        });
        setDynamicName(newValue);
      },
      options: _options__WEBPACK_IMPORTED_MODULE_0__.hiddenValues
    }), ['post_meta', 'user_meta'].includes(attributes.field_value) && wp.element.createElement(TextControl, {
      key: "hidden_value_field",
      label: "Meta Field to Get Value From",
      value: attributes.hidden_value_field,
      onChange: function onChange(newValue) {
        setAttributes({
          hidden_value_field: newValue
        });
      }
    }), 'query_var' === attributes.field_value && wp.element.createElement(TextControl, {
      key: "query_var_key",
      label: "Query Variable Key",
      value: attributes.query_var_key,
      onChange: function onChange(newValue) {
        setAttributes({
          query_var_key: newValue
        });
      }
    }), 'current_date' === attributes.field_value && wp.element.createElement(TextControl, {
      key: "date_format",
      label: "Format",
      value: attributes.date_format,
      onChange: function onChange(newValue) {
        setAttributes({
          date_format: newValue
        });
      }
    }), 'manual_input' === attributes.field_value && wp.element.createElement(TextControl, {
      key: "hidden_value",
      label: "Value",
      value: attributes.hidden_value,
      onChange: function onChange(newValue) {
        setAttributes({
          hidden_value: newValue
        });
      }
    }));
  };

  var _hiddenValues$find = _options__WEBPACK_IMPORTED_MODULE_0__.hiddenValues.find(function (option) {
    return option.value === attributes.field_value;
  }),
      _hiddenValues$find$la = _hiddenValues$find.label,
      label = _hiddenValues$find$la === void 0 ? 'Please set `Field Value`' : _hiddenValues$find$la;

  var resultLabel = [label];

  switch (attributes.field_value) {
    case 'post_meta':
    case 'user_meta':
      resultLabel.push(attributes.hidden_value_field);
      break;

    case 'query_var':
      resultLabel.push(attributes.query_var_key);
      break;

    case 'current_date':
      resultLabel.push(attributes.date_format);
      break;

    case 'manual_input':
      resultLabel.push(attributes.hidden_value);
      break;
  }

  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, checkFieldValueInput()), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(Card, {
    isElevated: true
  }, wp.element.createElement(CardHeader, null, wp.element.createElement(RichText, {
    placeholder: "hidden_field_name...",
    allowedFormats: [],
    value: attributes.name,
    onChange: function onChange(name) {
      return setAttributes({
        name: name
      });
    }
  })), wp.element.createElement(CardBody, null, isSelected && checkFieldValueInput(), !isSelected && resultLabel.join(': '))))];
}
;

/***/ }),

/***/ "./editor/blocks/hidden-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/hidden-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/hidden-field/edit.js");
/* harmony import */ var _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/hidden-field/block.json */ "../blocks-src/hidden-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_hidden_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Hidden Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      field_value: 'post_id'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/hidden-field/options.js":
/*!***********************************************!*\
  !*** ./editor/blocks/hidden-field/options.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hiddenValues": () => (/* binding */ hiddenValues)
/* harmony export */ });
var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;
var hiddenValues = Tools.withPlaceholder([{
  value: 'post_id',
  label: __('Current Post ID')
}, {
  value: 'post_title',
  label: __('Current Post Title')
}, {
  value: 'post_url',
  label: __('Current Post/Page URL')
}, {
  value: 'post_meta',
  label: __('Current Post Meta')
}, {
  value: 'user_id',
  label: __('Current User ID')
}, {
  value: 'user_email',
  label: __('Current User Email')
}, {
  value: 'user_name',
  label: __('Current User Name')
}, {
  value: 'user_meta',
  label: __('Current User Meta')
}, {
  value: 'author_id',
  label: __('Current Post Author ID')
}, {
  value: 'author_email',
  label: __('Current Post Author Email')
}, {
  value: 'author_name',
  label: __('Current Post Author Name')
}, {
  value: 'query_var',
  label: __('URL Query Variable')
}, {
  value: 'current_date',
  label: __('Current Date')
}, {
  value: 'manual_input',
  label: __('Manual Input')
}]);


/***/ }),

/***/ "./editor/blocks/media-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/media-field/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/media-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    useBlockProps = _ref.useBlockProps,
    InspectorControls = _ref.InspectorControls;

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var _wp$components2 = wp.components,
    NumberControl = _wp$components2.NumberControl,
    InputControl = _wp$components2.InputControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

var localizeData = window.jetFormMediaFieldData;
function MediaEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(SelectControl, {
    key: "allowed_user_cap",
    label: __('User access'),
    labelPosition: "top",
    value: attributes.allowed_user_cap,
    onChange: function onChange(newValue) {
      setAttributes({
        allowed_user_cap: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.userAccess
  }), 'any_user' !== attributes.allowed_user_cap && wp.element.createElement(ToggleControl, {
    key: "insert_attachment",
    label: __('Insert attachment'),
    checked: attributes.insert_attachment,
    help: attrHelp('insert_attachment'),
    onChange: function onChange(newValue) {
      setAttributes({
        insert_attachment: Boolean(newValue)
      });
    }
  }), 'any_user' !== attributes.allowed_user_cap && attributes.insert_attachment && wp.element.createElement(SelectControl, {
    key: "value_format",
    label: __('Field value'),
    labelPosition: "top",
    value: attributes.value_format,
    onChange: function onChange(newValue) {
      props.setAttributes({
        value_format: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.valueFormats
  }), wp.element.createElement(NumberControl, {
    key: "max_files",
    label: __('Maximum allowed files to upload'),
    labelPosition: "top",
    help: attrHelp('max_files'),
    value: attributes.max_files,
    onChange: function onChange(newValue) {
      props.setAttributes({
        max_files: parseInt(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Maximum size in Mb'),
    labelPosition: "top",
    key: "max_size",
    help: attrHelp('max_size'),
    value: attributes.max_size,
    step: 0.01,
    onChange: function onChange(newValue) {
      props.setAttributes({
        max_size: Number(newValue)
      });
    }
  }), wp.element.createElement(SelectControl, {
    multiple: true,
    className: "field-mime-types",
    key: "allowed_mimes",
    label: __('Allow MIME types'),
    labelPosition: "top",
    help: attrHelp('allowed_mimes'),
    value: attributes.allowed_mimes,
    onChange: function onChange(newValue) {
      props.setAttributes({
        allowed_mimes: newValue
      });
    },
    options: localizeData.mime_types
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(InputControl, {
    key: uniqKey('place_holder_block_new'),
    type: 'file',
    disabled: true
  })))];
}

/***/ }),

/***/ "./editor/blocks/media-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/media-field/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/media-field/edit.js");
/* harmony import */ var _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/media-field/block.json */ "../blocks-src/media-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_media_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Media Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Thumbnail & file',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/media-field/options.js":
/*!**********************************************!*\
  !*** ./editor/blocks/media-field/options.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAccess": () => (/* binding */ userAccess),
/* harmony export */   "valueFormats": () => (/* binding */ valueFormats)
/* harmony export */ });
var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var userAccess = Tools.withPlaceholder([{
  value: "all",
  label: "Any registered user"
}, {
  value: "upload_files",
  label: "Any user, who allowed to upload files"
}, {
  value: "edit_posts",
  label: "Any user, who allowed to edit posts"
}, {
  value: "any_user",
  label: "Any user ( incl. Guest )"
}]);
var valueFormats = Tools.withPlaceholder([{
  "value": "id",
  "label": "Attachment ID"
}, {
  "value": "url",
  "label": "Attachment URL"
}, {
  "value": "both",
  "label": "Array with attachment ID and URL"
}]);


/***/ }),

/***/ "./editor/blocks/number-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/number-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    __experimentalInputControl = _wp$components.__experimentalInputControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var _wp$components2 = wp.components,
    InputControl = _wp$components2.InputControl,
    NumberControl = _wp$components2.NumberControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function NumberEdit(props) {
  var blockProps = useBlockProps();
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;

  var changeNumberValue = function changeNumberValue(key, newValue) {
    props.setAttributes(_defineProperty({}, key, newValue ? parseFloat(newValue) : null));
  };

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(NumberControl, {
    label: __('Min Value'),
    labelPosition: "top",
    key: "min",
    value: attributes.min,
    onChange: function onChange(newValue) {
      return changeNumberValue('min', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max Value'),
    labelPosition: "top",
    key: "max",
    value: attributes.max,
    onChange: function onChange(newValue) {
      return changeNumberValue('max', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Step'),
    labelPosition: "top",
    key: "step",
    step: 0.01,
    value: attributes.step,
    onChange: function onChange(newValue) {
      return changeNumberValue('step', newValue);
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(NumberControl, {
    placeholder: attributes.placeholder,
    key: uniqKey('place_holder_block'),
    min: attributes.min || 0,
    max: attributes.max || 1000,
    step: attributes.step || 1
  })))];
}

/***/ }),

/***/ "./editor/blocks/number-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/number-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/number-field/edit.js");
/* harmony import */ var _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/number-field/block.json */ "../blocks-src/number-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_number_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Number Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'blockName'],
  example: {
    attributes: {
      label: 'Number Field',
      desc: 'Field description...',
      placeholder: 'Input your number...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/radio-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/radio-field/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RadioEdit)
/* harmony export */ });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldControl = _JetFBComponents.FieldControl;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var ToggleControl = wp.components.ToggleControl;
function RadioEdit(props) {
  var isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__.SelectRadioCheckPlaceholder, _extends({
    key: uniqKey('SelectRadioCheckPlaceholder'),
    scriptData: window.JetFormRadioFieldData
  }, props)), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__.default, props, wp.element.createElement(ToggleControl, {
    key: "switch_on_change",
    label: __('Switch page on change'),
    checked: attributes.switch_on_change,
    help: attrHelp('switch_on_change'),
    onChange: function onChange(newValue) {
      setAttributes({
        switch_on_change: Boolean(newValue)
      });
    }
  }), wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))))];
}

/***/ }),

/***/ "./editor/blocks/radio-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/radio-field/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/radio-field/edit.js");
/* harmony import */ var _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/radio-field/block.json */ "../blocks-src/radio-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_radio_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Radio Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Radio Field',
      field_options: [{
        label: 'First Option',
        value: ''
      }, {
        label: 'Second Option',
        value: ''
      }, {
        label: 'Third Option',
        value: ''
      }]
    }
  }
};


/***/ }),

/***/ "./editor/blocks/range-field/edit.js":
/*!*******************************************!*\
  !*** ./editor/blocks/range-field/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RangeEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var useState = wp.element.useState;
var _wp$components2 = wp.components,
    NumberControl = _wp$components2.NumberControl,
    InputControl = _wp$components2.InputControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function RangeEdit(props) {
  var blockProps = useBlockProps();

  var _useState = useState(50),
      _useState2 = _slicedToArray(_useState, 2),
      rangeValue = _useState2[0],
      setRangeValue = _useState2[1];

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  return [props.isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(NumberControl, {
    label: __('Min Value'),
    labelPosition: "top",
    key: "min",
    value: attributes.min,
    onChange: function onChange(newValue) {
      setAttributes({
        min: parseFloat(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max Value'),
    labelPosition: "top",
    key: "max",
    value: attributes.max,
    onChange: function onChange(newValue) {
      setAttributes({
        max: parseFloat(newValue)
      });
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Step'),
    labelPosition: "top",
    key: "step",
    value: attributes.step,
    onChange: function onChange(newValue) {
      setAttributes({
        step: parseFloat(newValue)
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "prefix",
    label: __('Value prefix'),
    value: attributes.prefix,
    help: attrHelp('prefix_suffix'),
    onChange: function onChange(newValue) {
      setAttributes({
        prefix: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "suffix",
    label: __('Value suffix'),
    value: attributes.suffix,
    help: attrHelp('prefix_suffix'),
    onChange: function onChange(newValue) {
      setAttributes({
        suffix: newValue
      });
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper'),
    wrapClasses: ['range-wrap']
  }, props), wp.element.createElement("div", {
    className: "range-flex-wrap"
  }, wp.element.createElement(InputControl, {
    key: uniqKey('placeholder_block'),
    type: 'range',
    min: attributes.min || 0,
    max: attributes.max || 100,
    step: attributes.step || 1,
    onChange: setRangeValue
  }), wp.element.createElement("div", {
    className: 'jet-form-builder__field-value'
  }, wp.element.createElement("span", {
    className: 'jet-form-builder__field-value-prefix'
  }, attributes.prefix), wp.element.createElement("span", null, rangeValue), wp.element.createElement("span", {
    className: 'jet-form-builder__field-value-suffix'
  }, attributes.suffix)))))];
}

/***/ }),

/***/ "./editor/blocks/range-field/index.js":
/*!********************************************!*\
  !*** ./editor/blocks/range-field/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/range-field/edit.js");
/* harmony import */ var _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/range-field/block.json */ "../blocks-src/range-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_range_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Range Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Range Field',
      prefix: 'price: ',
      suffix: '$'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/repeater-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/repeater-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RepeaterEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/repeater-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var _JetFBActions = JetFBActions,
    getFieldsWithoutCurrent = _JetFBActions.getFieldsWithoutCurrent,
    Tools = _JetFBActions.Tools;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    InnerBlocks = _ref.InnerBlocks,
    useBlockProps = _ref.useBlockProps,
    RichText = _ref.RichText;

var select = wp.data.select;
var useState = wp.element.useState;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function RepeaterEdit(props) {
  var blockProps = useBlockProps();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMacros = _useState2[0],
      setShowMacros = _useState2[1];

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var formFields = getFieldsWithoutCurrent();
  var meta = select('core/editor').getEditedPostAttribute('meta') || {};
  var label = Tools.getLabel(meta, attributes);

  var insertMacros = function insertMacros(macros) {
    var formula = attributes.calc_formula || '';
    props.setAttributes({
      calc_formula: formula + '%FIELD::' + macros + '%'
    });
  };

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props), 'custom' === attributes.repeater_calc_type && wp.element.createElement(Button, {
    key: uniqKey('Button'),
    isTertiary: true,
    isSmall: true,
    icon: showMacros ? 'no-alt' : 'admin-tools',
    onClick: function onClick() {
      return setShowMacros(function (toggle) {
        return !toggle;
      });
    }
  }), showMacros && wp.element.createElement(Popover, {
    position: 'bottom left',
    key: uniqKey('Popover')
  }, formFields.length && wp.element.createElement(PanelBody, {
    title: 'Form Fields'
  }, formFields.map(function (_ref2, index) {
    var value = _ref2.value;
    return wp.element.createElement("div", {
      key: uniqKey('field_' + value + index)
    }, wp.element.createElement(Button, {
      isLink: true,
      onClick: function onClick() {
        insertMacros(value);
      }
    }, '%FIELD::' + value + '%'));
  })))), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(PanelBody, {
    title: __('Field Settings'),
    key: uniqKey('PanelBody')
  }, wp.element.createElement(SelectControl, {
    key: "manage_items_count",
    label: __('Manage repeater items count'),
    labelPosition: "top",
    value: attributes.manage_items_count,
    onChange: function onChange(newValue) {
      props.setAttributes({
        manage_items_count: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.manageItemsCount
  }), 'manually' === attributes.manage_items_count && wp.element.createElement(TextControl, {
    key: "new_item_label",
    label: __('Add New Item Label'),
    value: attributes.new_item_label,
    onChange: function onChange(newValue) {
      props.setAttributes({
        new_item_label: newValue
      });
    }
  }), 'dynamically' === attributes.manage_items_count && wp.element.createElement(SelectControl, {
    key: "manage_items_count_field",
    label: __('Field items count'),
    labelPosition: "top",
    value: attributes.manage_items_count_field,
    onChange: function onChange(newValue) {
      props.setAttributes({
        manage_items_count_field: newValue
      });
    },
    options: formFields
  }), wp.element.createElement(SelectControl, {
    key: "repeater_calc_type",
    label: __('Calculate repeater row value'),
    labelPosition: "top",
    value: attributes.repeater_calc_type,
    onChange: function onChange(newValue) {
      props.setAttributes({
        repeater_calc_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.calcType
  }), 'custom' === attributes.repeater_calc_type && wp.element.createElement("div", {
    className: "jet-form-editor__row-notice"
  }, __('Set math formula to calculate field value.', 'jet-form-builder'), wp.element.createElement("br", null), __('For example:', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null), "%FIELD::quantity%*%META::price%", wp.element.createElement("br", null), wp.element.createElement("br", null), __('Where:', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%FIELD::quantity% - macros for form field value. "quantity" - is a field name to get value from', 'jet-form-builder'), wp.element.createElement("br", null), "-", __('%META::price% - macros for current post meta value. "price" - is a meta key to get value from', 'jet-form-builder'), wp.element.createElement("br", null), wp.element.createElement("br", null))), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('Fragment')
  }, blockProps), 'custom' === attributes.repeater_calc_type && wp.element.createElement("div", {
    className: "jet-forms__calc-formula-editor"
  }, wp.element.createElement("div", {
    className: "jet-form-editor__macros-wrap"
  }, wp.element.createElement(TextareaControl, {
    key: "calc_formula",
    value: attributes.calc_formula,
    label: __('Calculation Formula for Repeater'),
    onChange: function onChange(newValue) {
      props.setAttributes({
        calc_formula: newValue
      });
    }
  }))), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper'),
    childrenPosition: "bottom"
  }, props), wp.element.createElement(InnerBlocks, {
    key: uniqKey('repeater-fields'),
    renderAppender: function renderAppender() {
      return wp.element.createElement(InnerBlocks.ButtonBlockAppender, {
        key: uniqKey('ButtonBlockAppender')
      });
    }
  }), wp.element.createElement(Button, {
    className: 'jet-form-builder-repeater__remove',
    isSecondary: true,
    onClick: function onClick() {}
  }, "\xD7"), wp.element.createElement("div", {
    style: {
      width: '100%',
      height: '0.7em'
    }
  }), wp.element.createElement("div", {
    className: "jet-form-builder-repeater__actions"
  }, wp.element.createElement(Button, {
    className: 'jet-form-builder-repeater__new',
    isSecondary: true,
    onClick: function onClick() {}
  }, wp.element.createElement(RichText, {
    placeholder: "Add New",
    allowedFormats: [],
    value: attributes.new_item_label,
    onChange: function onChange(new_item_label) {
      return setAttributes({
        new_item_label: new_item_label
      });
    }
  })))))];
}

/***/ }),

/***/ "./editor/blocks/repeater-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/repeater-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/repeater-field/block.json */ "../blocks-src/repeater-field/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./editor/blocks/repeater-field/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./editor/blocks/repeater-field/save.js");



var __ = wp.i18n.__;
var name = _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__.name,
    _metadata$icon = _blocks_repeater_field_block_json__WEBPACK_IMPORTED_MODULE_0__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Repeater Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__.default,
  save: _save__WEBPACK_IMPORTED_MODULE_2__.default,
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Multiple fields',
      desc: 'Field description...'
    },
    innerBlocks: [{
      name: 'jet-forms/text-field',
      attributes: {
        label: 'Item Title'
      }
    }, {
      name: 'jet-forms/radio-field',
      attributes: {
        label: 'Item Radio',
        field_options: [{
          label: 'First Option',
          value: ''
        }, {
          label: 'Second Option',
          value: ''
        }, {
          label: 'Third Option',
          value: ''
        }]
      }
    }]
  }
};


/***/ }),

/***/ "./editor/blocks/repeater-field/options.js":
/*!*************************************************!*\
  !*** ./editor/blocks/repeater-field/options.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcType": () => (/* binding */ calcType),
/* harmony export */   "manageItemsCount": () => (/* binding */ manageItemsCount)
/* harmony export */ });
var __ = wp.i18n.__;
var calcType = [{
  value: 'default',
  label: __('Default (returns rows count)')
}, {
  value: 'custom',
  label: __('Custom (calculate custom value for each row)')
}];
var manageItemsCount = [{
  value: 'manually',
  label: __('Manually')
}, {
  value: 'dynamically',
  label: __('Dynamically (get count from form field)')
}];


/***/ }),

/***/ "./editor/blocks/repeater-field/save.js":
/*!**********************************************!*\
  !*** ./editor/blocks/repeater-field/save.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RepeaterSave)
/* harmony export */ });
var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InnerBlocks = _ref.InnerBlocks;

function RepeaterSave(props) {
  return wp.element.createElement(InnerBlocks.Content, null);
}
;

/***/ }),

/***/ "./editor/blocks/select-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/select-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectEdit)
/* harmony export */ });
/* harmony import */ var _components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check-placeholder */ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js");
/* harmony import */ var _components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-select-check-radio/select-radio-check */ "./editor/components/base-select-check-radio/select-radio-check.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldControl = _JetFBComponents.FieldControl,
    HorizontalLine = _JetFBComponents.HorizontalLine;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var ToggleControl = wp.components.ToggleControl;
function SelectEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(_components_base_select_check_radio_select_radio_check_placeholder__WEBPACK_IMPORTED_MODULE_0__.SelectRadioCheckPlaceholder, _extends({
    scriptData: window.JetFormSelectFieldData
  }, props)), wp.element.createElement(_components_base_select_check_radio_select_radio_check__WEBPACK_IMPORTED_MODULE_1__.default, props, wp.element.createElement(ToggleControl, {
    key: "switch_on_change",
    label: __('Switch page on change'),
    checked: attributes.switch_on_change,
    help: attrHelp('switch_on_change'),
    onChange: function onChange(newValue) {
      setAttributes({
        switch_on_change: Boolean(newValue)
      });
    }
  }), wp.element.createElement(FieldControl, _extends({
    type: "custom_settings",
    key: uniqKey('customSettingsFields')
  }, props))))];
}

/***/ }),

/***/ "./editor/blocks/select-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/select-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/select-field/edit.js");
/* harmony import */ var _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/select-field/block.json */ "../blocks-src/select-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_select_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Select Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp', 'blockName'],
  example: {
    attributes: {
      label: 'Select Field',
      desc: 'Field description...',
      field_options: [{
        label: 'Choose option...',
        value: ''
      }]
    }
  }
};


/***/ }),

/***/ "./editor/blocks/select-radio-chekc-options.js":
/*!*****************************************************!*\
  !*** ./editor/blocks/select-radio-chekc-options.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listFrom": () => (/* binding */ listFrom)
/* harmony export */ });
var __ = wp.i18n.__;
var jetEngineVersion = window.JetFormEditorData.jetEngineVersion;
var _JetFBActions = JetFBActions,
    versionCompare = _JetFBActions.versionCompare;
var listFrom = [{
  "value": "manual_input",
  "label": __('Manual Input', 'jet-form-builder')
}, {
  "value": "posts",
  "label": __('Posts', 'jet-form-builder')
}, {
  "value": "terms",
  "label": __('Terms', 'jet-form-builder')
}, {
  "value": "meta_field",
  "label": __('Meta Field', 'jet-form-builder')
}, {
  "value": "generate",
  "label": __('Generate Dynamically', 'jet-form-builder')
}];

if ("" !== jetEngineVersion) {
  listFrom.push({
    "value": "glossary",
    "label": __('Glossary', 'jet-form-builder')
  });
}



/***/ }),

/***/ "./editor/blocks/submit-field/edit.js":
/*!********************************************!*\
  !*** ./editor/blocks/submit-field/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SubmitEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var Button = wp.components.Button;
var RichText = wp.blockEditor.RichText;
function SubmitEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps({
    className: 'jet-form-builder__submit-wrap'
  });
  return [isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props, {
    attrsSettings: {
      name: {
        show: false
      }
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('submit-wrap')
  }), wp.element.createElement(Button, {
    isPrimary: true,
    className: 'jet-form-builder__submit',
    key: uniqKey('place_holder_block')
  }, wp.element.createElement(RichText, {
    placeholder: "Input Submit label...",
    allowedFormats: [],
    value: attributes.label,
    onChange: function onChange(label) {
      return setAttributes({
        label: label
      });
    }
  })))];
}

/***/ }),

/***/ "./editor/blocks/submit-field/index.js":
/*!*********************************************!*\
  !*** ./editor/blocks/submit-field/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/submit-field/edit.js");
/* harmony import */ var _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/submit-field/block.json */ "../blocks-src/submit-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_submit_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Submit Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey'],
  example: {
    attributes: {
      label: 'Submit'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/text-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/text-field/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextEdit)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/blocks/text-field/options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function TextEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;

  var changeNumberValue = function changeNumberValue(key, newValue) {
    var value = newValue && newValue > 0 ? parseInt(newValue) : null;
    props.setAttributes(_defineProperty({}, key, value));
  };

  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(SelectControl, {
    key: "field_type",
    label: __('Field Type'),
    labelPosition: "top",
    value: attributes.field_type,
    onChange: function onChange(newValue) {
      setAttributes({
        field_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.fieldTypesList
  }), wp.element.createElement(NumberControl, {
    label: __('Min length (symbols)'),
    labelPosition: "top",
    key: "minlength",
    min: 1,
    value: attributes.minlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('minlength', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max length (symbols)'),
    labelPosition: "top",
    key: "maxlength",
    min: 1,
    value: attributes.maxlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('maxlength', newValue);
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'enable_input_mask',
    label: __('Set Input Mask'),
    checked: attributes.enable_input_mask,
    help: __('Check this to setup specific input format for the current field'),
    onChange: function onChange(newVal) {
      setAttributes({
        enable_input_mask: newVal
      });
    }
  }), attributes.enable_input_mask && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "mask_type",
    label: __('Mask type'),
    labelPosition: "top",
    value: attributes.mask_type,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_type: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.maskTypesList
  }), wp.element.createElement(TextControl, {
    key: "input_mask",
    label: __('Input mask'),
    value: attributes.input_mask,
    onChange: function onChange(newValue) {
      setAttributes({
        input_mask: newValue
      });
    }
  }), !attributes.mask_type && wp.element.createElement("div", {
    className: 'help-input'
  }, attrHelp('input_mask_default')), 'datetime' === attributes.mask_type && wp.element.createElement("div", {
    className: 'help-input'
  }, __('Examples:', 'jet-form-builder'), " dd/mm/yyyy, mm/dd/yyyy", wp.element.createElement("br", null), __('More info - ', 'jet-form-builder'), wp.element.createElement("a", {
    href: attrHelp('input_mask_datetime_link'),
    target: "_blank"
  }, __('here', 'jet-form-builder'))), wp.element.createElement(SelectControl, {
    key: "mask_visibility",
    label: __('Mask visibility'),
    labelPosition: "top",
    value: attributes.mask_visibility,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_visibility: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.maskVisibilitiesList
  }), wp.element.createElement(SelectControl, {
    key: "mask_placeholder",
    label: __('Mask placeholder'),
    labelPosition: "top",
    value: attributes.mask_placeholder,
    onChange: function onChange(newValue) {
      setAttributes({
        mask_placeholder: newValue
      });
    },
    options: _options__WEBPACK_IMPORTED_MODULE_0__.maskPlaceholdersList
  }))), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    placeholder: attributes.placeholder,
    key: uniqKey('place_holder_block'),
    onChange: function onChange() {}
  })))];
}
;

/***/ }),

/***/ "./editor/blocks/text-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/text-field/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/text-field/edit.js");
/* harmony import */ var _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/text-field/block.json */ "../blocks-src/text-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_text_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Text Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Text Field',
      placeholder: 'Input your text...',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/text-field/options.js":
/*!*********************************************!*\
  !*** ./editor/blocks/text-field/options.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldTypesList": () => (/* binding */ fieldTypesList),
/* harmony export */   "maskTypesList": () => (/* binding */ maskTypesList),
/* harmony export */   "maskPlaceholdersList": () => (/* binding */ maskPlaceholdersList),
/* harmony export */   "maskVisibilitiesList": () => (/* binding */ maskVisibilitiesList)
/* harmony export */ });
var __ = wp.i18n.__;
var fieldTypesList = [{
  value: 'text',
  label: __('Text')
}, {
  value: 'email',
  label: __('Email')
}, {
  value: 'url',
  label: __('Url')
}, {
  value: 'tel',
  label: __('Tel')
}, {
  value: 'password',
  label: __('Password')
}];
var maskTypesList = [{
  value: '',
  label: __('Default')
}, {
  value: 'datetime',
  label: __('Datetime')
}];
var maskVisibilitiesList = [{
  value: 'always',
  label: __('Always')
}, {
  value: 'hover',
  label: __('Hover')
}, {
  value: 'focus',
  label: __('Focus')
}];
var maskPlaceholdersList = [{
  value: '_',
  label: '_'
}, {
  value: '-',
  label: '-'
}, {
  value: '*',
  label: '*'
}, {
  value: '•',
  label: '•'
}];


/***/ }),

/***/ "./editor/blocks/textarea-field/edit.js":
/*!**********************************************!*\
  !*** ./editor/blocks/textarea-field/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextareaEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper,
    FieldSettingsWrapper = _JetFBComponents.FieldSettingsWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    PanelBody = _wp$components.PanelBody,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function TextareaEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$editProps = props.editProps,
      uniqKey = _props$editProps.uniqKey,
      attrHelp = _props$editProps.attrHelp;
  var blockProps = useBlockProps();

  var changeNumberValue = function changeNumberValue(key, newValue) {
    var value = newValue && newValue > 0 ? parseInt(newValue) : null;
    setAttributes(_defineProperty({}, key, value));
  };

  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(FieldSettingsWrapper, props, wp.element.createElement(NumberControl, {
    label: __('Min length (symbols)'),
    labelPosition: "top",
    key: "minlength",
    min: 1,
    value: attributes.minlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('minlength', newValue);
    }
  }), wp.element.createElement(NumberControl, {
    label: __('Max length (symbols)'),
    labelPosition: "top",
    key: "maxlength",
    min: 1,
    value: attributes.maxlength,
    onChange: function onChange(newValue) {
      return changeNumberValue('maxlength', newValue);
    }
  })), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextareaControl, {
    key: uniqKey('place_holder_block'),
    placeholder: attributes.placeholder,
    onChange: function onChange() {}
  })))];
}

/***/ }),

/***/ "./editor/blocks/textarea-field/index.js":
/*!***********************************************!*\
  !*** ./editor/blocks/textarea-field/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/textarea-field/edit.js");
/* harmony import */ var _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/textarea-field/block.json */ "../blocks-src/textarea-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_textarea_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Textarea Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Textarea Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/time-field/edit.js":
/*!******************************************!*\
  !*** ./editor/blocks/time-field/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    __experimentalInputControl = _wp$components.__experimentalInputControl;
var InputControl = wp.components.InputControl;

if (typeof InputControl === 'undefined') {
  InputControl = __experimentalInputControl;
}

function TimeEdit(props) {
  var attributes = props.attributes,
      isSelected = props.isSelected,
      uniqKey = props.editProps.uniqKey;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({}, blockProps, {
    key: uniqKey('viewBlock')
  }), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextControl, {
    onChange: function onChange() {},
    key: uniqKey('place_holder_block'),
    placeholder: 'Input type="time"'
  })))];
}

/***/ }),

/***/ "./editor/blocks/time-field/index.js":
/*!*******************************************!*\
  !*** ./editor/blocks/time-field/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/time-field/edit.js");
/* harmony import */ var _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/time-field/block.json */ "../blocks-src/time-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_time_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Time Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Time Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/blocks/wysiwyg-field/edit.js":
/*!*********************************************!*\
  !*** ./editor/blocks/wysiwyg-field/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WysiwygEdit)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _JetFBComponents = JetFBComponents,
    ToolBarFields = _JetFBComponents.ToolBarFields,
    GeneralFields = _JetFBComponents.GeneralFields,
    AdvancedFields = _JetFBComponents.AdvancedFields,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var __ = wp.i18n.__;

var _ref = wp.blockEditor ? wp.blockEditor : wp.editor,
    InspectorControls = _ref.InspectorControls,
    useBlockProps = _ref.useBlockProps;

var TextareaControl = wp.components.TextareaControl;
function WysiwygEdit(props) {
  var uniqKey = props.editProps.uniqKey,
      isSelected = props.isSelected;
  var blockProps = useBlockProps();
  return [wp.element.createElement(ToolBarFields, _extends({
    key: uniqKey('ToolBarFields')
  }, props)), isSelected && wp.element.createElement(InspectorControls, {
    key: uniqKey('InspectorControls')
  }, wp.element.createElement(GeneralFields, _extends({
    key: uniqKey('GeneralFields')
  }, props)), wp.element.createElement(AdvancedFields, _extends({
    key: uniqKey('AdvancedFields')
  }, props))), wp.element.createElement("div", _extends({
    key: uniqKey('viewBlock')
  }, blockProps), wp.element.createElement(FieldWrapper, _extends({
    key: uniqKey('FieldWrapper')
  }, props), wp.element.createElement(TextareaControl, {
    key: uniqKey('place_holder_block'),
    onChange: function onChange() {}
  })))];
}

/***/ }),

/***/ "./editor/blocks/wysiwyg-field/index.js":
/*!**********************************************!*\
  !*** ./editor/blocks/wysiwyg-field/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./editor/blocks/wysiwyg-field/edit.js");
/* harmony import */ var _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/wysiwyg-field/block.json */ "../blocks-src/wysiwyg-field/block.json");


var __ = wp.i18n.__;
var name = _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    _metadata$icon = _blocks_wysiwyg_field_block_json__WEBPACK_IMPORTED_MODULE_1__.icon,
    icon = _metadata$icon === void 0 ? '' : _metadata$icon;
/**
 * Available items for `useEditProps`:
 *  - uniqKey
 *  - formFields
 *  - blockName
 *  - attrHelp
 */

var settings = {
  title: __('Wysiwyg Field'),
  className: name.replace('/', '-'),
  icon: wp.element.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__.default,
  useEditProps: ['uniqKey', 'attrHelp'],
  example: {
    attributes: {
      label: 'Wysiwyg Field',
      desc: 'Field description...'
    }
  }
};


/***/ }),

/***/ "./editor/components/base-select-check-radio/from-generators-fields.js":
/*!*****************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-generators-fields.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var __ = wp.i18n.__;
var _wp$hooks = wp.hooks,
    applyFilters = _wp$hooks.applyFilters,
    addFilter = _wp$hooks.addFilter;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

function getGeneratorFields(genFunction, props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;

  switch (genFunction) {
    case 'num_range_manual':
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        label: __('Start of range', 'jet-form-builder')
      }, wp.element.createElement(NumberControl, {
        labelPosition: "top",
        step: 0.01,
        value: attributes.generator_numbers_min,
        onChange: function onChange(newValue) {
          setAttributes({
            generator_numbers_min: Number(newValue)
          });
        }
      })), wp.element.createElement(BaseControl, {
        label: __('End of range', 'jet-form-builder')
      }, wp.element.createElement(NumberControl, {
        labelPosition: "top",
        step: 0.01,
        value: attributes.generator_numbers_max,
        onChange: function onChange(newValue) {
          setAttributes({
            generator_numbers_max: Number(newValue)
          });
        }
      })), wp.element.createElement(BaseControl, {
        label: __('Step', 'jet-form-builder')
      }, wp.element.createElement(NumberControl, {
        labelPosition: "top",
        key: "step",
        step: 0.01,
        value: attributes.generator_numbers_step,
        onChange: function onChange(newValue) {
          setAttributes({
            generator_numbers_step: Number(newValue)
          });
        }
      })));

    default:
      return applyFilters('jet.fb.select.radio.check.generator.controls', wp.element.createElement(TextControl, {
        key: "generator_field",
        label: "Field Name",
        value: attributes.generator_field,
        help: attrHelp('generator_field', attributes),
        onChange: function onChange(newValue) {
          setAttributes({
            generator_field: newValue
          });
        }
      }), genFunction, props);
  }
}

function getGeneratorAdditionalFields(genFunction, props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;

  switch (genFunction) {
    case 'num_range_manual':
      return null;

    default:
      return applyFilters('jet.fb.select.radio.check.generator.additionalControls', wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
        key: "from_generator__value_from_meta",
        label: "Value from meta field",
        help: attrHelp('value_from_meta'),
        value: attributes.from_generator__value_from_meta,
        onChange: function onChange(newValue) {
          setAttributes({
            from_generator__value_from_meta: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "calculated_value_from_key",
        label: "Calculated value from meta field",
        help: attrHelp('calculated_value_from_key'),
        value: attributes.calculated_value_from_key,
        onChange: function onChange(newValue) {
          setAttributes({
            calculated_value_from_key: newValue
          });
        }
      })), genFunction, props);
  }
}

function FromGeneratorsFields(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "generator_function",
    label: "Generator Function",
    labelPosition: "top",
    value: attributes.generator_function,
    onChange: function onChange(newValue) {
      setAttributes({
        generator_function: newValue
      });
    },
    options: window.JetFormSelectFieldData.generators_list
  }), getGeneratorFields(attributes.generator_function, props), getGeneratorAdditionalFields(attributes.generator_function, props));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromGeneratorsFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/from-manual-fields.js":
/*!*************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-manual-fields.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    ActionModal = _JetFBComponents.ActionModal;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
var addNewOption = {
  label: '',
  value: '',
  calculate: ''
};

function FromManualFields(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showManualModal = _useState2[0],
      setShowModal = _useState2[1];

  var setAttributes = props.setAttributes,
      attributes = props.attributes;

  var toggleModal = function toggleModal() {
    setShowModal(function (toggle) {
      return !toggle;
    });
  };

  var onUpdateOptions = function onUpdateOptions(items) {
    /* Remove empty options */
    var field_options = items.filter(function (option) {
      return Boolean(option.value) || Boolean(option.calculate);
    });
    setAttributes({
      field_options: field_options
    });
  };

  var itemHeading = function itemHeading(_ref) {
    var currentItem = _ref.currentItem,
        index = _ref.index;
    var leftPart = ["#".concat(index + 1)];
    var rightPart = [];

    if (currentItem.label) {
      rightPart.push("Label [".concat(currentItem.label, "]"));
    }

    if (currentItem.value) {
      rightPart.push("Value [".concat(currentItem.value, "]"));
    }

    if (currentItem.calculate) {
      rightPart.push("Calculate [".concat(currentItem.calculate, "]"));
    }

    leftPart.push(rightPart.join(' | '));
    return leftPart.join(' ');
  };

  return wp.element.createElement(React.Fragment, {
    key: "jet-form/manage-manual-items"
  }, wp.element.createElement(Button, {
    isSecondary: true,
    onClick: toggleModal,
    icon: 'admin-tools',
    style: {
      marginBottom: '15px'
    }
  }, __('Manage Items')), showManualModal && wp.element.createElement(ActionModal, {
    title: 'Edit Manual Options',
    onRequestClose: toggleModal,
    classNames: ['width-60']
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
      items: attributes.field_options,
      onSaveItems: onUpdateOptions,
      newItem: addNewOption,
      onUnMount: onRequestClose,
      isSaveAction: actionClick,
      addNewButtonLabel: __('Add New Option'),
      ItemHeading: itemHeading
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(TextControl, {
        key: "manual_label",
        label: __('Label'),
        value: currentItem.label,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            label: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "manual_value",
        label: __('Value'),
        value: currentItem.value,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            value: newValue
          });
        }
      }), wp.element.createElement(TextControl, {
        key: "manual_calculate",
        label: __('Calculate'),
        value: currentItem.calculate,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            calculate: newValue
          });
        }
      }));
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromManualFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/from-post-terms-fields.js":
/*!*****************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/from-post-terms-fields.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources */ "./editor/components/base-select-check-radio/sources.js");

var TextControl = wp.components.TextControl;
var __ = wp.i18n.__;

function FromPostTermsFields(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      attrHelp = props.editProps.attrHelp;
  return wp.element.createElement(React.Fragment, null, (0,_sources__WEBPACK_IMPORTED_MODULE_0__.getSelectSource)(props), wp.element.createElement(TextControl, {
    key: "value_from_key",
    label: __('Value from meta field'),
    value: attributes.value_from_key,
    help: attrHelp('value_from_meta'),
    onChange: function onChange(newValue) {
      setAttributes({
        value_from_key: newValue
      });
    }
  }), wp.element.createElement(TextControl, {
    key: "calculated_value_from_key",
    label: __('Calculated value from meta field'),
    value: attributes.calculated_value_from_key,
    help: attrHelp('calculated_value_from_key'),
    onChange: function onChange(newValue) {
      setAttributes({
        calculated_value_from_key: newValue
      });
    }
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FromPostTermsFields);

/***/ }),

/***/ "./editor/components/base-select-check-radio/select-radio-check-placeholder.js":
/*!*************************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/select-radio-check-placeholder.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectRadioCheckPlaceholder": () => (/* binding */ SelectRadioCheckPlaceholder)
/* harmony export */ });
/* harmony import */ var _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/select-radio-chekc-options */ "./editor/blocks/select-radio-chekc-options.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var _JetFBComponents = JetFBComponents,
    FieldWrapper = _JetFBComponents.FieldWrapper;
var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    RadioControl = _wp$components.RadioControl;
var DELIMITER = ' - ';
function SelectRadioCheckPlaceholder(props) {
  var _props$editProps = props.editProps,
      blockName = _props$editProps.blockName,
      uniqKey = _props$editProps.uniqKey,
      scriptData = props.scriptData,
      attributes = props.attributes;

  var getCheckbox = function getCheckbox(label) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-form-builder__field-wrap checkboxes-wrap',
      key: "check_place_holder_block_".concat(label + index),
      label: label,
      onChange: function onChange() {}
    });
  };

  var getSelect = function getSelect(_ref) {
    var options = _ref.options,
        index = _ref.index;
    return wp.element.createElement(SelectControl, {
      key: "select_place_holder_block_".concat(attributes.name + index) //label={ attributes.label }
      ,
      options: options //help={ attributes.desc }
      ,
      onChange: function onChange() {}
    });
  };

  var getRadio = function getRadio(_ref2) {
    var options = _ref2.options,
        label = _ref2.label,
        index = _ref2.index;
    return wp.element.createElement(RadioControl, {
      key: "radio_place_holder_block_".concat(label + index) //label={ attributes.label }
      ,
      options: options //help={ attributes.desc }
      ,
      onChange: function onChange() {}
    });
  };

  var getProp = function getProp(of, propName) {
    var ifEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if ('undefined' !== typeof of && 'undefined' !== typeof of[propName]) {
      return of[propName];
    }

    return ifEmpty;
  };

  var getLabelProp = function getLabelProp(of) {
    return getProp(of, 'label');
  };

  var getFullLabel = function getFullLabel() {
    var field_options_from = attributes.field_options_from,
        field_options_post_type = attributes.field_options_post_type,
        field_options_tax = attributes.field_options_tax,
        field_options_key = attributes.field_options_key,
        generator_function = attributes.generator_function,
        generator_field = attributes.generator_field;
    var full_label = [];
    var value = [];

    switch (field_options_from) {
      case 'posts':
        if (field_options_post_type) {
          value.push(getLabelProp(scriptData.post_types_list.find(function (option) {
            return option.value === field_options_post_type;
          })));
        }

        break;

      case 'terms':
        if (field_options_tax) {
          value.push(getLabelProp(scriptData.taxonomies_list.find(function (option) {
            return option.value === field_options_tax;
          })));
        }

        break;

      case 'meta_field':
        if (field_options_key) {
          value.push(field_options_key);
        }

        break;

      case 'generate':
        if (generator_function) {
          value.push(getLabelProp(scriptData.generators_list.find(function (option) {
            return option.value === generator_function;
          })));
        }

        if (generator_field) {
          value.push(generator_field);
        }

        break;
    }

    full_label.push(getLabelProp(_blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__.listFrom.find(function (option) {
      return option.value === field_options_from;
    })));

    if (value.length) {
      full_label.push(value.join(DELIMITER));
    }

    return full_label.join(DELIMITER);
  };

  var getManualField = function getManualField() {
    var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (blockName.includes('checkbox')) {
      if (label) {
        return getCheckbox(label);
      }

      return attributes.field_options.map(function (_ref3, index) {
        var checkLabel = _ref3.label;
        return getCheckbox(checkLabel, index);
      });
    } else if (blockName.includes('select')) {
      if (label) {
        return getSelect({
          attributes: attributes,
          options: [{
            label: label
          }]
        });
      }

      return getSelect({
        attributes: attributes,
        options: attributes.field_options
      });
    } else if (blockName.includes('radio')) {
      if (label) {
        return getRadio({
          attributes: attributes,
          options: [{
            label: label
          }]
        });
      }

      return getRadio({
        attributes: attributes,
        options: attributes.field_options
      });
    }
  };

  return wp.element.createElement(FieldWrapper, _extends({
    key: 'jet-form-builder-field-wrapper'
  }, props), wp.element.createElement("div", {
    className: 'jet-form-builder__fields-group'
  }, ('manual_input' !== attributes.field_options_from || !attributes.field_options.length) && getManualField(getFullLabel(scriptData, attributes)) || null, 'manual_input' === attributes.field_options_from && attributes.field_options.length && getManualField() || null));
}

/***/ }),

/***/ "./editor/components/base-select-check-radio/select-radio-check.js":
/*!*************************************************************************!*\
  !*** ./editor/components/base-select-check-radio/select-radio-check.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/select-radio-chekc-options */ "./editor/blocks/select-radio-chekc-options.js");
/* harmony import */ var _from_manual_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-manual-fields */ "./editor/components/base-select-check-radio/from-manual-fields.js");
/* harmony import */ var _from_post_terms_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-post-terms-fields */ "./editor/components/base-select-check-radio/from-post-terms-fields.js");
/* harmony import */ var _from_generators_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from-generators-fields */ "./editor/components/base-select-check-radio/from-generators-fields.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var jetEngineVersion = window.JetFormEditorData.jetEngineVersion;
var _JetFBActions = JetFBActions,
    versionCompare = _JetFBActions.versionCompare;
var applyFilters = wp.hooks.applyFilters;
var canRenderGlossaries = "" !== jetEngineVersion;

function getFieldOptionsForm(optionsFrom, props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;

  switch (optionsFrom) {
    case 'manual_input':
      return wp.element.createElement(_from_manual_fields__WEBPACK_IMPORTED_MODULE_1__.default, _extends({
        key: "from_manual"
      }, props));

    case 'posts':
    case 'terms':
      return wp.element.createElement(_from_post_terms_fields__WEBPACK_IMPORTED_MODULE_2__.default, _extends({
        key: "form_posts_terms"
      }, props));

    case 'meta_field':
      return wp.element.createElement(TextControl, {
        key: "field_options_key",
        label: "Meta field to get value from",
        value: attributes.field_options_key,
        onChange: function onChange(newValue) {
          setAttributes({
            field_options_key: newValue
          });
        }
      });

    case 'generate':
      return wp.element.createElement(_from_generators_fields__WEBPACK_IMPORTED_MODULE_3__.default, _extends({
        key: "form_generators"
      }, props));

    case 'glossary':
      return canRenderGlossaries && wp.element.createElement(SelectControl, {
        key: "select_glossary",
        label: "Select Glossary",
        labelPosition: "top",
        value: attributes.glossary_id,
        onChange: function onChange(glossary_id) {
          return setAttributes({
            glossary_id: glossary_id
          });
        },
        options: [{
          value: '',
          label: '--'
        }].concat(_toConsumableArray(window.JetFormSelectFieldData.glossaries_list))
      });

    default:
      return applyFilters('jet.fb.select.radio.check.controls', null, optionsFrom, props);
  }
}

function SelectRadioCheck(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children;
  var field_options_from = attributes.field_options_from;
  return isSelected && wp.element.createElement("div", {
    className: "inside-block-options"
  }, wp.element.createElement(SelectControl, {
    key: "field_options_from",
    label: "Fill Options From",
    labelPosition: "top",
    value: field_options_from,
    onChange: function onChange(newValue) {
      setAttributes({
        field_options_from: newValue
      });
    },
    options: _blocks_select_radio_chekc_options__WEBPACK_IMPORTED_MODULE_0__.listFrom
  }), getFieldOptionsForm(field_options_from, props), children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRadioCheck);

/***/ }),

/***/ "./editor/components/base-select-check-radio/sources.js":
/*!**************************************************************!*\
  !*** ./editor/components/base-select-check-radio/sources.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSelectSource": () => (/* binding */ getSelectSource)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var localizeData = window.JetFormSelectFieldData;
var SelectControl = wp.components.SelectControl;
var sources = {
  terms: {
    label: __('Taxonomy'),
    attr: 'field_options_tax',
    options: localizeData.taxonomies_list
  },
  posts: {
    label: __('Post Type'),
    attr: 'field_options_post_type',
    options: localizeData.post_types_list
  }
};

var getSelectSource = function getSelectSource(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var field_options_from = attributes.field_options_from;

  if (!sources[field_options_from] && !sources[field_options_from]) {
    return null;
  }

  var source = sources[field_options_from];
  return wp.element.createElement(SelectControl, {
    label: source.label,
    labelPosition: "top",
    value: attributes[source.attr],
    onChange: function onChange(newValue) {
      setAttributes(_defineProperty({}, source.attr, newValue));
    },
    options: source.options
  });
};



/***/ }),

/***/ "./editor/components/presets/general-preset.js":
/*!*****************************************************!*\
  !*** ./editor/components/presets/general-preset.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBComponents = JetFBComponents,
    GlobalField = _JetFBComponents.GlobalField,
    AvailableMapField = _JetFBComponents.AvailableMapField;
var _JetFBActions = JetFBActions,
    withPreset = _JetFBActions.withPreset;
var Fragment = wp.element.Fragment;

function GeneralPreset(_ref) {
  var value = _ref.value,
      availableFields = _ref.availableFields,
      isMapFieldVisible = _ref.isMapFieldVisible,
      isVisible = _ref.isVisible,
      onChange = _ref.onChange;
  var position = 'general';

  var onChangeValue = function onChangeValue(newValue, name) {
    onChange(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, name, newValue)));
  };

  return wp.element.createElement(Fragment, {
    key: 'jfb-general-preset-main-wrapper'
  }, window.JetFormEditorData.presetConfig.global_fields.map(function (data, index) {
    return wp.element.createElement(GlobalField, {
      key: data.name + index,
      value: value,
      index: index,
      data: data,
      options: data.options,
      onChangeValue: onChangeValue,
      isVisible: isVisible,
      position: position
    });
  }), value.from && availableFields.map(function (field, index) {
    return wp.element.createElement(AvailableMapField, {
      key: field + index,
      fieldsMap: value.fields_map,
      field: field,
      index: index,
      onChangeValue: onChangeValue,
      isMapFieldVisible: isMapFieldVisible,
      value: value
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withPreset(GeneralPreset));

/***/ }),

/***/ "./editor/form-actions/activecampaign.js":
/*!***********************************************!*\
  !*** ./editor/form-actions/activecampaign.js ***!
  \***********************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    PlaceholderMessage = _JetFBComponents.PlaceholderMessage;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

function ActiveCampaignAction(props) {
  var settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      onChange = props.onChange,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      source = props.source,
      label = props.label,
      help = props.help,
      requestFields = props.requestFields;
  var currentTab = globalTab({
    slug: 'active-campaign-tab'
  });

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFieldsList = _useState2[0],
      setFormFields = _useState2[1];

  var _useState3 = useState(function () {
    return settings.isValidAPI ? 'is-valid' : 'is-invalid';
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      buttonClass = _useState4[0],
      setButtonClass = _useState4[1];

  useEffect(function () {
    setFormFields([].concat(_toConsumableArray(getFormFieldsBlocks([], '--')), _toConsumableArray(requestFields)));
  }, []);

  function getAPI(prop) {
    return settings.use_global ? currentTab[prop] : settings[prop] || "";
  }

  function validateActiveCampaignData() {
    var api = {
      api_key: getAPI('api_key'),
      api_url: getAPI('api_url')
    };
    getActiveCampaignData(true, api);
  }

  function getActiveCampaignData() {
    var isValidate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        _ref$api_key = _ref.api_key,
        api_key = _ref$api_key === void 0 ? '' : _ref$api_key,
        _ref$api_url = _ref.api_url,
        api_url = _ref$api_url === void 0 ? '' : _ref$api_url;

    if (!api_key || !api_url) {
      onChangeSetting(false, 'isValidAPI');
      setButtonClass('is-invalid');
      return;
    }

    var endpoint = '/admin/api.php?api_action=list_list';
    var url = api_url + endpoint + '&api_key=' + api_key + '&ids=all&api_output=json';
    setButtonClass('loading');
    jQuery.getJSON(url).success(function (data) {
      if (undefined !== data.result_code && data.result_code) {
        var lists = [];

        for (var prop in data) {
          if (undefined === data[prop].id) {
            continue;
          }

          lists.push({
            value: data[prop].id,
            label: data[prop].name
          });
        }

        onChange(_objectSpread(_objectSpread({}, settings), {}, {
          data: lists,
          isValidAPI: true
        }));
        setButtonClass('is-valid');
      } else {
        onChangeSetting(false, 'isValidAPI');
        setButtonClass('is-invalid');
      }
    }).error(function () {
      setButtonClass('is-invalid');
      onChangeSetting(false, 'isValidAPI');
    });
  }
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: label('use_global'),
    checked: settings.use_global,
    onChange: function onChange(use_global) {
      onChangeSetting(Boolean(use_global), 'use_global');
    }
  }), wp.element.createElement(BaseControl, {
    label: label('api_data'),
    key: 'activecampaign_input_key'
  }, wp.element.createElement("div", {
    className: "jet-control-clear-full jet-d-flex-between"
  }, wp.element.createElement("div", null, wp.element.createElement(TextControl, {
    key: "api_url",
    help: label('api_url'),
    className: "jet-control-clear",
    disabled: settings.use_global,
    value: getAPI('api_url'),
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'api_url');
    }
  }), wp.element.createElement(TextControl, {
    key: "api_key",
    help: label('api_key'),
    className: "jet-control-clear",
    disabled: settings.use_global,
    value: getAPI('api_key'),
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'api_key');
    }
  })), wp.element.createElement(Button, {
    key: 'validate_api_key',
    isPrimary: true,
    onClick: validateActiveCampaignData,
    className: "".concat(buttonClass, " jet-form-validate-button")
  }, wp.element.createElement("i", {
    className: "dashicons"
  }), settings.isValidAPI ? label('retry_request') : label('validate_api_key')))), wp.element.createElement("div", {
    style: {
      paddingBottom: '1.2em'
    }
  }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
    href: help('api_key_link')
  }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "activecampaign_select_lists",
    label: label('list_id'),
    labelPosition: "side",
    value: settings.list_id,
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'list_id');
    },
    options: withPlaceholder(settings.data || [])
  }), wp.element.createElement(TextControl, {
    key: "activecampaign_tags",
    label: label('tags'),
    value: settings.tags,
    help: help('tags'),
    onChange: function onChange(newVal) {
      return onChangeSetting(newVal, 'tags');
    }
  }), wp.element.createElement(ActionFieldsMap, {
    label: label('fields_map'),
    fields: Object.entries(source.activecampaign_fields)
  }, function (_ref2) {
    var fieldId = _ref2.fieldId,
        fieldData = _ref2.fieldData,
        index = _ref2.index;
    return wp.element.createElement(WrapperRequiredControl, {
      field: [fieldId, fieldData]
    }, wp.element.createElement(SelectControl, {
      key: fieldId + index,
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      },
      options: formFieldsList
    }));
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('active_campaign', withSelect(withRequestFields)(ActiveCampaignAction));

/***/ }),

/***/ "./editor/form-actions/base-action-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/base-action-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseActionComponent)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BaseActionComponent = /*#__PURE__*/function (_wp$element$Component) {
  _inherits(BaseActionComponent, _wp$element$Component);

  var _super = _createSuper(BaseActionComponent);

  function BaseActionComponent() {
    _classCallCheck(this, BaseActionComponent);

    return _super.apply(this, arguments);
  }

  _createClass(BaseActionComponent, [{
    key: "addPlaceholderForSelect",
    value: function addPlaceholderForSelect(array) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '--';
      return [{
        label: label
      }].concat(_toConsumableArray(array));
    }
  }, {
    key: "onChangeSetting",
    value: function onChangeSetting(value, key) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, key, value)));
    }
  }, {
    key: "onChangeSettingObj",
    value: function onChangeSettingObj(value) {
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), value));
    }
  }, {
    key: "getFieldDefault",
    value: function getFieldDefault(name) {
      var source = 'fields_map';
      return this.getFieldByName({
        name: name,
        source: source
      });
    }
  }, {
    key: "getFieldMeta",
    value: function getFieldMeta(name) {
      var source = 'meta_fields_map';
      return this.getFieldByName({
        name: name,
        source: source
      });
    }
  }, {
    key: "getFieldByName",
    value: function getFieldByName(_ref) {
      var source = _ref.source,
          name = _ref.name;
      var settings = this.props.settings;

      if (typeof settings[source] !== 'undefined' && typeof settings[source][name] !== 'undefined') {
        return settings[source][name];
      }

      return '';
    }
  }, {
    key: "onChangeFieldMap",
    value: function onChangeFieldMap(value, nameField) {
      var source = 'fields_map';
      this.changeFieldsMap({
        value: value,
        nameField: nameField,
        source: source
      });
    }
  }, {
    key: "onChangeMetaFieldMap",
    value: function onChangeMetaFieldMap(value, nameField) {
      var source = 'meta_fields_map';
      this.changeFieldsMap({
        value: value,
        nameField: nameField,
        source: source
      });
    }
  }, {
    key: "changeFieldsMap",
    value: function changeFieldsMap(_ref2) {
      var source = _ref2.source,
          nameField = _ref2.nameField,
          value = _ref2.value;
      var fieldsMap = Object.assign({}, this.props.settings[source], _defineProperty({}, nameField, value));
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));
    }
  }]);

  return BaseActionComponent;
}(wp.element.Component);



/***/ }),

/***/ "./editor/form-actions/call-hook.js":
/*!******************************************!*\
  !*** ./editor/form-actions/call-hook.js ***!
  \******************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
addAction('call_hook', function CallHookAction(_ref) {
  var settings = _ref.settings,
      onChange = _ref.onChange,
      source = _ref.source,
      label = _ref.label,
      help = _ref.help;

  var onChangeSetting = function onChangeSetting(value, key) {
    onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "call_hook"
  }, wp.element.createElement(TextControl, {
    key: "hook_name",
    label: label('hook_name'),
    value: settings.hook_name,
    onChange: function onChange(newVal) {
      onChangeSetting(newVal, 'hook_name');
    }
  }), wp.element.createElement(BaseControl, {
    key: "help_message"
  }, wp.element.createElement("div", {
    className: "jet-call-hook-instruction"
  }, __('Called hook names:'), wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("code", null, "jet-form-builder/custom-action/", settings.hook_name), " - ", __('WP action. Perform a hook without an ability to validate form,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "jet-form-builder/custom-filter/", settings.hook_name), " - ", __('WP filter. Perform a hook with an ability to validate form. Allows to return error message.'))), __('Hook arguments:'), wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("code", null, "$result"), " - ", __('only for WP filter. Hook execution result,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "$request"), " - ", __('array with submitted form data,')), wp.element.createElement("li", null, wp.element.createElement("code", null, "$action_handler"), " - ", __('action handler object, allows to manage actions data and to throws error status:'), wp.element.createElement("code", null, "throw new Action_Exception( 'failed' )"))))));
  /* eslint-enable jsx-a11y/no-onchange */
});

/***/ }),

/***/ "./editor/form-actions/call-webhook.js":
/*!*********************************************!*\
  !*** ./editor/form-actions/call-webhook.js ***!
  \*********************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
addAction('call_webhook', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(CallWebHookAction, _wp$element$Component);

  var _super = _createSuper(CallWebHookAction);

  function CallWebHookAction(props) {
    var _this;

    _classCallCheck(this, CallWebHookAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
    return _this;
  }

  _createClass(CallWebHookAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          settings = _this$props.settings,
          label = _this$props.label,
          onChangeSetting = _this$props.onChangeSetting;
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(TextControl, {
        key: "webhook_url",
        label: label('webhook_url'),
        value: settings.webhook_url,
        onChange: function onChange(newVal) {
          return onChangeSetting(newVal, 'webhook_url');
        }
      });
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return CallWebHookAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/getresponse.js":
/*!********************************************!*\
  !*** ./editor/form-actions/getresponse.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab;
var _JetFBComponents = JetFBComponents,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    __experimentalNumberControl = _wp$components.__experimentalNumberControl;
var NumberControl = wp.components.NumberControl;

if (typeof NumberControl === 'undefined') {
  NumberControl = __experimentalNumberControl;
}

var __ = wp.i18n.__;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

var GetResponseAction = /*#__PURE__*/function (_IntegrationComponent) {
  _inherits(GetResponseAction, _IntegrationComponent);

  var _super = _createSuper(GetResponseAction);

  function GetResponseAction(props) {
    var _this;

    _classCallCheck(this, GetResponseAction);

    _this = _super.call(this, props);
    _this.formFieldsList = [].concat(_toConsumableArray(_this.formFieldsList), _toConsumableArray(_this.props.requestFields));
    return _this;
  }

  _createClass(GetResponseAction, [{
    key: "getFields",
    value: function getFields() {
      var settings = this.props.settings;

      if (settings.data && settings.data.fields) {
        return Object.entries(settings.data.fields);
      }

      return [];
    }
  }, {
    key: "getLists",
    value: function getLists() {
      var settings = this.props.settings;

      if (settings.data && settings.data.lists) {
        return this.formatEntriesArray(settings.data.lists);
      }

      return [];
    }
  }, {
    key: "formatEntriesArray",
    value: function formatEntriesArray() {
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var isNeedPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var placeholder = {
        label: '--'
      };

      if (!entries) {
        return [];
      }

      var options = Object.entries(entries).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            label = _ref2[1];

        return {
          value: value,
          label: label
        };
      });
      return isNeedPlaceholder ? [placeholder].concat(_toConsumableArray(options)) : options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;
      var fields = this.getFields();
      var currentTab = globalTab({
        slug: 'get-response-tab'
      });
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement(React.Fragment, {
        key: "getresponse"
      }, wp.element.createElement(ToggleControl, {
        key: 'use_global',
        label: label('use_global'),
        checked: settings.use_global,
        onChange: function onChange(use_global) {
          _this2.onChangeSetting(Boolean(use_global), 'use_global');
        }
      }), wp.element.createElement(BaseControl, {
        key: 'getresponse_input_key',
        className: "input-with-button"
      }, wp.element.createElement(TextControl, {
        key: "api_key",
        label: label('api_key'),
        disabled: settings.use_global,
        value: settings.use_global ? currentTab.api_key : settings.api_key,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'api_key');
        }
      }), wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this2.validateAPIKey(currentTab.api_key) : _this2.validateAPIKey();
        },
        className: this.state.className.join(' ') + ' jet-form-validate-button'
      }, wp.element.createElement("i", {
        className: "dashicons"
      }), label('validate_api_key'))), wp.element.createElement("div", null), wp.element.createElement("div", {
        className: "margin-bottom--small"
      }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
        href: help('api_key_link')
      }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        key: "getresponse_select_lists",
        className: "input-with-button"
      }, wp.element.createElement(SelectControl, {
        key: "list_id",
        className: "full-width",
        label: label('list_id'),
        labelPosition: "side",
        value: settings.list_id,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'list_id');
        },
        options: this.getLists()
      }), wp.element.createElement(Button, {
        key: 'update_list_ids',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this2.getApiData(settings.api_key) : _this2.getApiData(currentTab.api_key);
        }
      }, label('update_list_ids'))), wp.element.createElement(BaseControl, {
        key: 'getresponse_day_of_cycle'
      }, wp.element.createElement(NumberControl, {
        key: "day_of_cycle",
        label: label('day_of_cycle'),
        labelPosition: "side",
        value: settings.day_of_cycle,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(Number(newVal), 'day_of_cycle');
        }
      })), wp.element.createElement(BaseControl, {
        label: label('fields_map'),
        key: "getresponse_fields_map"
      }, wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, fields.map(function (_ref3, index) {
        var _ref4 = _slicedToArray(_ref3, 2),
            fieldName = _ref4[0],
            fieldData = _ref4[1];

        return wp.element.createElement(WrapperRequiredControl, {
          field: [fieldName, fieldData]
        }, wp.element.createElement(SelectControl, {
          className: "full-width",
          key: fieldName + index,
          value: _this2.getFieldDefault(fieldName),
          onChange: function onChange(value) {
            return _this2.onChangeFieldMap(value, fieldName);
          },
          options: _this2.formFieldsList
        }));
      })))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return GetResponseAction;
}(_integration_component__WEBPACK_IMPORTED_MODULE_0__.default);

addAction('getresponse', withSelect(withRequestFields)(GetResponseAction));

/***/ }),

/***/ "./editor/form-actions/insert-post.js":
/*!********************************************!*\
  !*** ./editor/form-actions/insert-post.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/controls/default-meta */ "./editor/blocks/controls/default-meta.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    convertListToFieldsMap = _JetFBActions.convertListToFieldsMap;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
var _JetFBHooks = JetFBHooks,
    useRequestFields = _JetFBHooks.useRequestFields,
    withRequestFields = _JetFBHooks.withRequestFields;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var withSelect = wp.data.withSelect;

function taxPrefix() {
  var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return 'jet_tax__' + suffix;
}

function InsertPostAction(props) {
  var settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      source = props.source,
      help = props.help,
      label = props.label,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      requestFields = props.requestFields;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      fieldType = _useState2[0],
      setTypeField = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      taxonomies = _useState4[0],
      setTaxonomies = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      formFields = _useState6[0],
      setFormFields = _useState6[1];

  function getPreparedTaxonomies() {
    var preparedTaxes = [];

    if (!source.taxonomies.length) {
      return [];
    }

    var _iterator = _createForOfIteratorHelper(source.taxonomies),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var taxonomy = _step.value;
        preparedTaxes.push(_objectSpread(_objectSpread({}, taxonomy), {}, {
          value: taxPrefix(taxonomy.value)
        }));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return preparedTaxes;
  }

  useEffect(function () {
    setTypeField(function () {
      var result = {};

      for (var fieldsMapKey in settings.fields_map) {
        result[fieldsMapKey] = getTypeFieldValue(settings.fields_map[fieldsMapKey]);
      }

      return result;
    });
    setTaxonomies(getPreparedTaxonomies());
    onChangeSetting([source.requestFields.inserted_post_id], 'requestFields');
    setFormFields(convertListToFieldsMap(getFormFieldsBlocks(), requestFields));
  }, []);

  function getTypeFieldValue(value) {
    var resultValue = 'post_meta';

    var _iterator2 = _createForOfIteratorHelper(source.fieldsMapOptions),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var fieldsMapOption = _step2.value;

        if (value === fieldsMapOption.value) {
          resultValue = value;
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (value.includes(taxPrefix())) {
      resultValue = 'post_terms';
    }

    return resultValue;
  }

  function setTypeFieldValue(prev, fieldID, value) {
    var resultValue = getTypeFieldValue(value);

    if (['post_meta', 'post_terms'].includes(resultValue)) {
      setMapField({
        nameField: fieldID,
        value: ''
      });
    } else {
      setMapField({
        nameField: fieldID,
        value: resultValue
      });
    }

    return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, fieldID, resultValue));
  }
  /* eslint-disable jsx-a11y/no-onchange */


  var getFieldSelect = function getFieldSelect(fieldId, index) {
    return wp.element.createElement(SelectControl, {
      key: fieldId + index,
      value: fieldType[fieldId],
      onChange: function onChange(value) {
        setTypeField(function (prev) {
          return setTypeFieldValue(prev, fieldId, value);
        });
      },
      options: source.fieldsMapOptions
    });
  };

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "post_type",
    className: "full-width",
    labelPosition: "side",
    value: settings.post_type,
    options: source.postTypes,
    label: label('post_type'),
    help: help('post_type'),
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'post_type');
    }
  }), wp.element.createElement(SelectControl, {
    key: "post_status",
    className: "full-width",
    labelPosition: "side",
    value: settings.post_status,
    options: source.postStatuses,
    label: label('post_status'),
    help: help('post_status'),
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'post_status');
    }
  }), wp.element.createElement(ActionFieldsMap, {
    label: label('fields_map'),
    key: "user_fields_map",
    fields: formFields
  }, function (_ref) {
    var fieldId = _ref.fieldId,
        fieldData = _ref.fieldData,
        index = _ref.index;
    return wp.element.createElement(WrapperRequiredControl, {
      field: [fieldId, fieldData]
    }, 'post_meta' === fieldType[fieldId] && wp.element.createElement("div", {
      className: "components-base-control jet-margin-bottom-wrapper"
    }, getFieldSelect(fieldId, index), wp.element.createElement(TextControl, {
      key: fieldId + index + '_text',
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      }
    })), 'post_terms' === fieldType[fieldId] && wp.element.createElement("div", {
      className: "components-base-control jet-margin-bottom-wrapper"
    }, getFieldSelect(fieldId, index), wp.element.createElement(SelectControl, {
      key: fieldId + index + '_text',
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      },
      options: taxonomies
    })), !['post_meta', 'post_terms'].includes(fieldType[fieldId]) && getFieldSelect(fieldId, index));
  }), wp.element.createElement(BaseControl, {
    label: label('default_meta'),
    key: "default_meta"
  }, wp.element.createElement(_blocks_controls_default_meta__WEBPACK_IMPORTED_MODULE_0__.default, {
    defaultMeta: settings.default_meta,
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'default_meta');
    }
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('insert_post', withSelect(withRequestFields)(InsertPostAction));

/***/ }),

/***/ "./editor/form-actions/integration-component.js":
/*!******************************************************!*\
  !*** ./editor/form-actions/integration-component.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IntegrationComponent)
/* harmony export */ });
/* harmony import */ var _base_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-action-component */ "./editor/form-actions/base-action-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;

var IntegrationComponent = /*#__PURE__*/function (_BaseActionComponent) {
  _inherits(IntegrationComponent, _BaseActionComponent);

  var _super = _createSuper(IntegrationComponent);

  function IntegrationComponent(props) {
    var _this;

    _classCallCheck(this, IntegrationComponent);

    _this = _super.call(this, props);
    _this.validateAPIKey = _this.validateAPIKey.bind(_assertThisInitialized(_this));
    _this.getApiData = _this.getApiData.bind(_assertThisInitialized(_this));
    _this.getLists = _this.getLists.bind(_assertThisInitialized(_this));
    _this.formFieldsList = getFormFieldsBlocks([], '--');
    _this.state = {
      className: [_this.getclassNameValidateButton()]
    };
    return _this;
  }

  _createClass(IntegrationComponent, [{
    key: "validateAPIKey",
    value: function validateAPIKey() {
      var customApiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.setState({
        className: ['loading']
      });

      if (customApiKey && 'string' === typeof customApiKey) {
        this.getApiData(customApiKey);
        return;
      }

      var settings = this.props.settings;
      this.getApiData(settings.api_key);
    }
  }, {
    key: "getApiData",
    value: function getApiData(apiKey) {
      var self = this;

      if (!apiKey) {
        self.onChangeSetting(null, 'isValidAPI');
        self.setState({
          className: []
        });
        return;
      }

      jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        data: {
          'action': this.props.source.action,
          'api_key': apiKey
        },
        success: function success(response) {
          if (response.success) {
            self.onChangeSetting(true, 'isValidAPI');
            self.onChangeSetting(response.data, 'data');
            self.setState({
              className: ['is-valid']
            });
          } else {
            self.onChangeSetting(false, 'isValidAPI');
            self.setState({
              className: ['is-invalid']
            });
          }
        },
        error: function error() {
          self.onChangeSetting(false, 'isValidAPI');
          self.setState({
            className: ['is-invalid']
          });
        }
      });
    }
  }, {
    key: "getclassNameValidateButton",
    value: function getclassNameValidateButton() {
      var settings = this.props.settings;

      if (true === settings.isValidAPI) {
        return 'is-valid';
      } else if (false === settings.isValidAPI) {
        return 'is-invalid';
      }
    }
  }]);

  return IntegrationComponent;
}(_base_action_component__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./editor/form-actions/mailchimp.js":
/*!******************************************!*\
  !*** ./editor/form-actions/mailchimp.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-component */ "./editor/form-actions/integration-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    globalTab = _JetFBActions.globalTab;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl;
var __ = wp.i18n.__;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

var MailChimpAction = /*#__PURE__*/function (_IntegrationComponent) {
  _inherits(MailChimpAction, _IntegrationComponent);

  var _super = _createSuper(MailChimpAction);

  function MailChimpAction(props) {
    var _this;

    _classCallCheck(this, MailChimpAction);

    _this = _super.call(this, props);
    _this.formFieldsList = [].concat(_toConsumableArray(_this.formFieldsList), _toConsumableArray(_this.props.requestFields));
    return _this;
  }

  _createClass(MailChimpAction, [{
    key: "getFields",
    value: function getFields() {
      var settings = this.props.settings;

      if (settings.list_id && settings.data && settings.data.fields && settings.data.fields[settings.list_id]) {
        return Object.entries(settings.data.fields[settings.list_id]);
      }

      return [];
    }
  }, {
    key: "getLists",
    value: function getLists() {
      var settings = this.props.settings;

      if (settings.data && settings.data.lists) {
        return this.formatEntriesArray(settings.data.lists);
      }

      return [];
    }
  }, {
    key: "getGroups",
    value: function getGroups() {
      var settings = this.props.settings;

      if (settings.data && settings.data.groups) {
        return settings.data.groups[settings.list_id];
      }

      return [];
    }
  }, {
    key: "formatEntriesArray",
    value: function formatEntriesArray() {
      var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!entries) {
        return [];
      }

      var options = Object.entries(entries).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[0],
            label = _ref2[1];

        return {
          value: value,
          label: label
        };
      });
      return [{
        label: '--',
        value: ''
      }].concat(_toConsumableArray(options));
    }
  }, {
    key: "isCheckedGroup",
    value: function isCheckedGroup(value) {
      var settings = this.props.settings;
      return value && settings.groups_ids && settings.groups_ids[value] ? settings.groups_ids[value] : false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;
      var fields = this.getFields();
      var currentTab = globalTab({
        slug: 'mailchimp-tab'
      });
      /* eslint-disable jsx-a11y/no-onchange */

      return wp.element.createElement("div", {
        key: "mailchimp"
      }, wp.element.createElement(ToggleControl, {
        key: 'use_global',
        label: label('use_global'),
        checked: settings.use_global,
        onChange: function onChange(use_global) {
          _this2.onChangeSetting(Boolean(use_global), 'use_global');
        }
      }), wp.element.createElement(BaseControl, {
        key: 'mailchimp_key_inputs',
        className: "input-with-button",
        label: label('api_key')
      }, wp.element.createElement(TextControl, {
        key: "api_key",
        className: "jet-control-clear-full",
        disabled: settings.use_global,
        value: settings.use_global ? currentTab.api_key : settings.api_key,
        onChange: function onChange(newVal) {
          _this2.onChangeSetting(newVal, 'api_key');
        }
      }), wp.element.createElement(Button, {
        key: 'validate_api_key',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this2.validateAPIKey(currentTab.api_key) : _this2.validateAPIKey();
        },
        className: this.state.className.join(' ') + ' jet-form-validate-button'
      }, wp.element.createElement("i", {
        className: "dashicons"
      }), label('validate_api_key'))), wp.element.createElement("div", null), wp.element.createElement("div", {
        className: "margin-bottom--small"
      }, help('api_key_link_prefix'), " ", wp.element.createElement("a", {
        href: help('api_key_link')
      }, help('api_key_link_suffix'))), settings.isValidAPI && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        key: 'mailchimp_select_lists',
        className: "input-with-button",
        label: label('list_id')
      }, wp.element.createElement(BaseControl, {
        key: 'mailchimp_select_lists_select',
        className: "jet-control-clear-full"
      }, wp.element.createElement(SelectControl, {
        key: "list_id",
        labelPosition: "top",
        value: settings.list_id,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'list_id');
        },
        options: this.getLists()
      })), wp.element.createElement(Button, {
        key: 'update_list_ids',
        isPrimary: true,
        onClick: function onClick() {
          settings.use_global ? _this2.getApiData(settings.api_key) : _this2.getApiData(currentTab.api_key);
        }
      }, label('update_list_ids'))), Boolean(settings.list_id) && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
        label: label('groups_ids')
      }, wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, this.getGroups().map(function (group) {
        return wp.element.createElement(CheckboxControl, {
          key: "groups_ids_".concat(group.value),
          checked: _this2.isCheckedGroup(group.value),
          label: group.label,
          onChange: function onChange(active) {
            return _this2.onChangeSetting(_objectSpread(_objectSpread({}, settings.groups_ids || {}), {}, _defineProperty({}, group.value, active)), 'groups_ids');
          }
        });
      }))), wp.element.createElement(TextControl, {
        key: "mailchimp_tags",
        value: settings.tags,
        label: label('tags'),
        help: help('tags'),
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(newVal, 'tags');
        }
      }), wp.element.createElement(ToggleControl, {
        key: 'double_opt_in',
        label: label('double_opt_in'),
        checked: settings.double_opt_in,
        onChange: function onChange(newVal) {
          return _this2.onChangeSetting(Boolean(newVal), 'double_opt_in');
        }
      }), wp.element.createElement(ActionFieldsMap, {
        label: label('fields_map'),
        key: "mailchimp",
        fields: fields
      }, function (_ref3) {
        var fieldId = _ref3.fieldId,
            fieldData = _ref3.fieldData,
            index = _ref3.index;
        return wp.element.createElement(WrapperRequiredControl, {
          field: [fieldId, fieldData]
        }, wp.element.createElement(SelectControl, {
          className: "full-width",
          key: fieldId + index,
          value: _this2.getFieldDefault(fieldId),
          onChange: function onChange(value) {
            return _this2.onChangeFieldMap(value, fieldId);
          },
          options: _this2.formFieldsList
        }));
      }))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return MailChimpAction;
}(_integration_component__WEBPACK_IMPORTED_MODULE_0__.default);

addAction('mailchimp', withSelect(withRequestFields)(MailChimpAction));

/***/ }),

/***/ "./editor/form-actions/redirect-to-page.js":
/*!*************************************************!*\
  !*** ./editor/form-actions/redirect-to-page.js ***!
  \*************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _JetFBComponents = JetFBComponents,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    CheckboxControl = _wp$components.CheckboxControl;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

function RedirectToPageAction(props) {
  var source = props.source,
      label = props.label,
      settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      onChangeSettingObj = props.onChangeSettingObj,
      requestFields = props.requestFields;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  useEffect(function () {
    setFields([].concat(_toConsumableArray(getFormFieldsBlocks()), _toConsumableArray(requestFields)));
  }, []);

  var isChecked = function isChecked(name) {
    var args_fields = Array.from(settings.redirect_args || []);
    return Boolean(args_fields.includes(name));
  };

  var onChangeRedirectArgs = function onChangeRedirectArgs(value, field_name) {
    var redirect_args = Array.from(settings.redirect_args || []);

    if (!value) {
      var field_id = redirect_args.indexOf(field_name);
      redirect_args.splice(field_id, 1);
    } else {
      redirect_args.push(field_name);
    }

    onChangeSettingObj({
      redirect_args: redirect_args
    });
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "redirect_to_page"
  }, wp.element.createElement(SelectControl, {
    className: "full-width",
    key: "redirect_type",
    label: label('redirect_type'),
    labelPosition: "side",
    value: settings.redirect_type,
    options: source.redirect_types,
    onChange: function onChange(redirect_type) {
      return onChangeSettingObj({
        redirect_type: redirect_type
      });
    }
  }), 'static_page' === settings.redirect_type && wp.element.createElement(SelectControl, {
    key: "redirect_type",
    className: "full-width",
    label: label('redirect_page'),
    labelPosition: "side",
    value: settings.redirect_page,
    options: source.pages,
    onChange: function onChange(redirect_page) {
      return onChangeSettingObj({
        redirect_page: redirect_page
      });
    }
  }), 'custom_url' === settings.redirect_type && wp.element.createElement(FieldWithPreset, {
    key: 'custom_url-FieldWithPreset',
    ModalEditor: function ModalEditor(_ref) {
      var actionClick = _ref.actionClick,
          onRequestClose = _ref.onRequestClose;
      return wp.element.createElement(DynamicPreset, {
        value: settings.redirect_url,
        isSaveAction: actionClick,
        onSavePreset: function onSavePreset(redirect_url) {
          return onChangeSettingObj({
            redirect_url: redirect_url
          });
        },
        onUnMount: onRequestClose,
        excludeSources: ['query_var']
      });
    },
    triggerClasses: ['trigger__text-control']
  }, wp.element.createElement(TextControl, {
    key: "redirect_url_control",
    label: label('redirect_url'),
    value: settings.redirect_url,
    className: 'jet-control-with-dynamic',
    onChange: function onChange(redirect_url) {
      return onChangeSettingObj({
        redirect_url: redirect_url
      });
    }
  })), wp.element.createElement(BaseControl, {
    label: label('redirect_args'),
    key: "redirect_args_control"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, fields.map(function (_ref2, index) {
    var name = _ref2.name;
    return wp.element.createElement(CheckboxControl, {
      key: "checkbox_args_".concat(name, "_").concat(index),
      label: name,
      checked: isChecked(name),
      onChange: function onChange(newVal) {
        return onChangeRedirectArgs(newVal, name);
      }
    });
  }))), wp.element.createElement(TextControl, {
    key: "redirect_hash_control",
    label: label('redirect_hash'),
    value: settings.redirect_hash,
    onChange: function onChange(redirect_hash) {
      return onChangeSettingObj({
        redirect_hash: redirect_hash
      });
    }
  }));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('redirect_to_page', withSelect(withRequestFields)(RedirectToPageAction));

/***/ }),

/***/ "./editor/form-actions/register-user.js":
/*!**********************************************!*\
  !*** ./editor/form-actions/register-user.js ***!
  \**********************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBComponents = JetFBComponents,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    ActionMessages = _JetFBComponents.ActionMessages;
var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder,
    convertListToFieldsMap = _JetFBActions.convertListToFieldsMap;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function RegisterUserAction(props) {
  var settings = props.settings,
      source = props.source,
      label = props.label,
      help = props.help,
      onChangeSettingObj = props.onChangeSettingObj,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      requestFields = props.requestFields;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldsWithRequest = _useState4[0],
      setFieldsWithRequest = _useState4[1];

  useEffect(function () {
    var _fields = getFormFieldsBlocks();

    setFields([].concat(_toConsumableArray(_fields), _toConsumableArray(requestFields)));
    setFieldsWithRequest(convertListToFieldsMap(_fields, requestFields));

    if (settings.add_user_id) {
      onChangeSettingObj({
        requestFields: [source.requestFields.user_id]
      });
    }
  }, []);
  var userFields = Object.entries(source.userFields);
  /* eslint-disable jsx-a11y/no-onchange */

  return wp.element.createElement(React.Fragment, {
    key: "register_user"
  }, wp.element.createElement(ToggleControl, {
    key: "allow_register",
    label: label('allow_register'),
    checked: settings.allow_register,
    onChange: function onChange(allow_register) {
      return onChangeSettingObj({
        allow_register: allow_register
      });
    }
  }), settings.allow_register && wp.element.createElement(SelectControl, {
    key: "role_can_register",
    label: label('role_can_register'),
    labelPosition: "side",
    value: settings.role_can_register,
    options: source.allUserRoles,
    onChange: function onChange(role_can_register) {
      return onChangeSettingObj({
        role_can_register: role_can_register
      });
    }
  }), wp.element.createElement(BaseControl, {
    label: label('fields_map'),
    key: "user_fields_map"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, wp.element.createElement("span", {
    className: 'description-controls'
  }, __('Set form fields names to to get user data from', 'jet-form-builder')), userFields.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[0],
        data = _ref2[1];

    return wp.element.createElement(WrapperRequiredControl, {
      field: [value, data]
    }, wp.element.createElement(SelectControl, {
      className: "full-width",
      key: "user_fields_".concat(value),
      value: getMapField({
        name: value
      }),
      options: withPlaceholder(fields),
      onChange: function onChange(newValue) {
        return setMapField({
          nameField: value,
          value: newValue
        });
      }
    }));
  }))), wp.element.createElement(SelectControl, {
    key: "user_role_list",
    className: "full-width",
    label: label('user_role'),
    labelPosition: "side",
    value: settings.user_role,
    options: source.userRoles,
    onChange: function onChange(user_role) {
      return onChangeSettingObj({
        user_role: user_role
      });
    }
  }), wp.element.createElement(BaseControl, {
    label: label('user_meta'),
    key: "user_meta_list"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, wp.element.createElement("span", {
    className: 'description-controls'
  }, __('Set user meta fields to save appropriate form fields into', 'jet-form-builder')), fieldsWithRequest.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        name = _ref4[0],
        data = _ref4[1];

    return wp.element.createElement(WrapperRequiredControl, {
      field: [name, data]
    }, wp.element.createElement(TextControl, {
      key: "form_fields_".concat(name),
      value: getMapField({
        source: 'meta_fields_map',
        name: name
      }),
      onChange: function onChange(newVal) {
        return setMapField({
          nameField: name,
          value: newVal,
          source: 'meta_fields_map'
        });
      }
    }));
  }))), wp.element.createElement(ToggleControl, {
    key: "log_in",
    label: label('log_in'),
    checked: settings.log_in,
    onChange: function onChange(log_in) {
      return onChangeSettingObj({
        log_in: log_in
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: "add_user_id_control",
    label: label('add_user_id'),
    checked: settings.add_user_id,
    onChange: function onChange(add_user_id) {
      return onChangeSettingObj({
        add_user_id: add_user_id,
        requestFields: add_user_id ? [source.requestFields.user_id] : []
      });
    },
    help: help('add_user_id')
  }), wp.element.createElement(ActionMessages, props));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('register_user', withSelect(withRequestFields)(RegisterUserAction));

/***/ }),

/***/ "./editor/form-actions/send-email.js":
/*!*******************************************!*\
  !*** ./editor/form-actions/send-email.js ***!
  \*******************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Internal dependencies
 */
var _JetFBComponents = JetFBComponents,
    MacrosInserter = _JetFBComponents.MacrosInserter;
var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;

function SendEmailAction(_ref) {
  var settings = _ref.settings,
      source = _ref.source,
      label = _ref.label,
      help = _ref.help,
      onChangeSetting = _ref.onChangeSetting,
      requestFields = _ref.requestFields;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      formFields = _useState2[0],
      setFormFields = _useState2[1];

  useEffect(function () {
    setFormFields([].concat(_toConsumableArray(getFormFieldsBlocks()), _toConsumableArray(requestFields)));
  }, []);

  var insertMacros = function insertMacros(macros) {
    var content = (settings.content || '') + '%' + macros + '%';
    onChangeSetting(content, 'content');
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    key: "mail_to",
    labelPosition: "side",
    className: "full-width",
    value: settings.mail_to,
    options: source.mailTo,
    label: label('mail_to'),
    help: help('mail_to'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'mail_to');
    }
  }), 'custom' === settings.mail_to && wp.element.createElement(TextControl, {
    key: "custom_email",
    value: settings.custom_email,
    label: label('custom_email'),
    help: help('custom_email'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'custom_email');
    }
  }), 'form' === settings.mail_to && wp.element.createElement(SelectControl, {
    key: "from_field",
    labelPosition: "side",
    className: "full-width",
    value: settings.from_field,
    options: withPlaceholder(formFields),
    label: label('from_field'),
    help: help('from_field'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_field');
    }
  }), wp.element.createElement(SelectControl, {
    key: "reply_to",
    labelPosition: "side",
    className: "full-width",
    value: settings.reply_to,
    options: source.replyTo,
    label: label('reply_to'),
    help: help('reply_to'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_to');
    }
  }), 'custom' === settings.reply_to && wp.element.createElement(TextControl, {
    key: "reply_to_email",
    value: settings.reply_to_email,
    label: label('reply_to_email'),
    help: help('reply_to_email'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_to_email');
    }
  }), 'form' === settings.reply_to && wp.element.createElement(SelectControl, {
    key: "reply_from_field",
    labelPosition: "side",
    className: "full-width",
    value: settings.reply_from_field,
    options: withPlaceholder(formFields),
    label: label('reply_from_field'),
    help: help('reply_from_field'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'reply_from_field');
    }
  }), wp.element.createElement(TextControl, {
    key: "subject",
    value: settings.subject,
    label: label('subject'),
    help: help('subject'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'subject');
    }
  }), wp.element.createElement(TextControl, {
    key: "from_name",
    value: settings.from_name,
    label: label('from_name'),
    help: help('from_name'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_name');
    }
  }), wp.element.createElement(TextControl, {
    key: "from_address",
    value: settings.from_address,
    label: label('from_address'),
    help: help('from_address'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'from_address');
    }
  }), wp.element.createElement(SelectControl, {
    key: "content_type",
    labelPosition: "side",
    className: "full-width",
    value: settings.content_type,
    options: source.content_type,
    label: label('content_type'),
    help: help('content_type'),
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'content_type');
    }
  }), wp.element.createElement("div", {
    className: "jet-form-editor__macros-wrap"
  }, wp.element.createElement(TextareaControl, {
    key: "content",
    value: settings.content,
    label: label('content'),
    help: help('content'),
    onChange: function onChange(newValue) {
      onChangeSetting(newValue, 'content');
    }
  }), wp.element.createElement(MacrosInserter, {
    fields: formFields,
    onFieldClick: insertMacros,
    customMacros: source.customMacros,
    zIndex: 10000000
  })));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('send_email', withSelect(withRequestFields)(SendEmailAction));

/***/ }),

/***/ "./editor/form-actions/update-options.js":
/*!***********************************************!*\
  !*** ./editor/form-actions/update-options.js ***!
  \***********************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    addAction = _JetFBActions.addAction;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl;
var __ = wp.i18n.__;
var useState = wp.element.useState;
addAction('update_options', /*#__PURE__*/function (_wp$element$Component) {
  _inherits(UpdateOptionsAction, _wp$element$Component);

  var _super = _createSuper(UpdateOptionsAction);

  function UpdateOptionsAction(props) {
    var _this;

    _classCallCheck(this, UpdateOptionsAction);

    _this = _super.call(this, props);
    _this.fields = getFormFieldsBlocks();
    return _this;
  }

  _createClass(UpdateOptionsAction, [{
    key: "getFieldByName",
    value: function getFieldByName(_ref) {
      var source = _ref.source,
          name = _ref.name;
      var settings = this.props.settings;

      if (settings[source] && settings[source][name]) {
        return settings[source][name];
      }

      return '';
    }
  }, {
    key: "getFieldMeta",
    value: function getFieldMeta(name) {
      return this.getFieldByName({
        source: 'meta_fields_map',
        name: name
      });
    }
  }, {
    key: "changeFieldsMap",
    value: function changeFieldsMap(_ref2) {
      var source = _ref2.source,
          nameField = _ref2.nameField,
          value = _ref2.value;
      var fieldsMap = Object.assign({}, this.props.settings[source]);
      fieldsMap[nameField] = value;
      this.props.onChange(_objectSpread(_objectSpread({}, this.props.settings), {}, _defineProperty({}, source, fieldsMap)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          settings = _this$props.settings,
          onChange = _this$props.onChange,
          source = _this$props.source,
          label = _this$props.label,
          help = _this$props.help;

      var onChangeMetaFieldMap = function onChangeMetaFieldMap(value, nameField) {
        var source = 'meta_fields_map';

        _this2.changeFieldsMap({
          value: value,
          nameField: nameField,
          source: source
        });
      };

      var onChangeSetting = function onChangeSetting(value, key) {
        onChange(_objectSpread(_objectSpread({}, settings), {}, _defineProperty({}, key, value)));
      };
      /* eslint-disable jsx-a11y/no-onchange */


      return wp.element.createElement("div", {
        key: "register_user"
      }, wp.element.createElement(SelectControl, {
        key: "options_page_list",
        className: "full-width",
        label: label('options_page'),
        labelPosition: "side",
        value: settings.options_page,
        options: source.optionsPages,
        onChange: function onChange(newValue) {
          onChangeSetting(newValue, 'options_page');
        }
      }), wp.element.createElement(BaseControl, {
        label: label('options_map'),
        key: "options_meta_list"
      }, wp.element.createElement("div", {
        className: "jet-user-fields-map__list"
      }, this.fields.map(function (_ref3, index) {
        var name = _ref3.name;
        return wp.element.createElement("div", {
          className: "jet-user-meta__row",
          key: 'options_meta_' + name + index
        }, wp.element.createElement(TextControl, {
          label: name,
          value: _this2.getFieldMeta(name),
          onChange: function onChange(newVal) {
            return onChangeMetaFieldMap(newVal, name);
          }
        }));
      }))));
      /* eslint-enable jsx-a11y/no-onchange */
    }
  }]);

  return UpdateOptionsAction;
}(wp.element.Component));

/***/ }),

/***/ "./editor/form-actions/update-user.js":
/*!********************************************!*\
  !*** ./editor/form-actions/update-user.js ***!
  \********************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBActions = JetFBActions,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    convertListToFieldsMap = _JetFBActions.convertListToFieldsMap,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    ActionMessages = _JetFBComponents.ActionMessages;
var _JetFBHooks = JetFBHooks,
    withRequestFields = _JetFBHooks.withRequestFields;
var withSelect = wp.data.withSelect;
/**
 * Internal dependencies
 */

var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

function UpdateUserAction(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var settings = props.settings,
      onChangeSetting = props.onChangeSetting,
      source = props.source,
      label = props.label,
      getMapField = props.getMapField,
      setMapField = props.setMapField,
      requestFields = props.requestFields;

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldType = _useState4[0],
      setTypeField = _useState4[1];

  useEffect(function () {
    setTypeField(function () {
      var result = {};

      for (var fieldsMapKey in settings.fields_map) {
        result[fieldsMapKey] = getTypeFieldValue(settings.fields_map[fieldsMapKey]);
      }

      return result;
    });
    setFields(convertListToFieldsMap(getFormFieldsBlocks(), requestFields));
  }, []);

  function getTypeFieldValue(value) {
    var resultValue = 'user_meta';

    var _iterator = _createForOfIteratorHelper(source.userFields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var userField = _step.value;

        if (value === userField.value) {
          resultValue = value;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return resultValue;
  }

  function setTypeFieldValue(prev, fieldID, value) {
    var resultValue = getTypeFieldValue(value);

    if ('user_meta' === resultValue) {
      setMapField({
        nameField: fieldID,
        value: ''
      });
    } else {
      setMapField({
        nameField: fieldID,
        value: resultValue
      });
    }

    return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, fieldID, resultValue));
  }

  var getFieldSelect = function getFieldSelect(fieldId, index) {
    return wp.element.createElement(SelectControl, {
      key: fieldId + index,
      value: fieldType[fieldId],
      onChange: function onChange(value) {
        setTypeField(function (prev) {
          return setTypeFieldValue(prev, fieldId, value);
        });
      },
      options: source.userFields
    });
  };
  /* eslint-disable jsx-a11y/no-onchange */


  return wp.element.createElement("div", {
    key: "update_user"
  }, wp.element.createElement(ActionFieldsMap, {
    label: label('fields_map'),
    key: "user_fields_map",
    fields: fields
  }, function (_ref) {
    var fieldId = _ref.fieldId,
        fieldData = _ref.fieldData,
        index = _ref.index;
    return wp.element.createElement(WrapperRequiredControl, {
      field: [fieldId, fieldData]
    }, 'user_meta' === fieldType[fieldId] && wp.element.createElement("div", {
      className: "components-base-control jet-margin-bottom-wrapper"
    }, getFieldSelect(fieldId, index), wp.element.createElement(TextControl, {
      key: fieldId + index + '_text',
      value: getMapField({
        name: fieldId
      }),
      onChange: function onChange(value) {
        return setMapField({
          nameField: fieldId,
          value: value
        });
      }
    })), 'user_meta' !== fieldType[fieldId] && getFieldSelect(fieldId, index));
  }), wp.element.createElement(SelectControl, {
    label: label('user_role'),
    labelPosition: "side",
    key: "user_role_list",
    className: "full-width",
    value: settings.user_role,
    options: source.userRoles,
    onChange: function onChange(newValue) {
      return onChangeSetting(newValue, 'user_role');
    }
  }), wp.element.createElement(ActionMessages, props));
  /* eslint-enable jsx-a11y/no-onchange */
}

addAction('update_user', withSelect(withRequestFields)(UpdateUserAction));

/***/ }),

/***/ "./editor/gateways/gateways-editor.js":
/*!********************************************!*\
  !*** ./editor/gateways/gateways-editor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GatewaysEditor)
/* harmony export */ });
/* harmony import */ var _paypal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal */ "./editor/gateways/paypal.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBActions = JetFBActions,
    actionByTypeList = _JetFBActions.actionByTypeList,
    fromLocalizeHelper = _JetFBActions.fromLocalizeHelper,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks,
    gatewayAttr = _JetFBActions.gatewayAttr,
    renderGateway = _JetFBActions.renderGateway,
    gatewayActionAttributes = _JetFBActions.gatewayActionAttributes;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RadioControl = _wp$components.RadioControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
function GatewaysEditor(_ref) {
  var gatewaysArgs = _ref.gatewaysArgs,
      activeActions = _ref.activeActions,
      onUnMount = _ref.onUnMount,
      isSaveAction = _ref.isSaveAction,
      onSaveItems = _ref.onSaveItems;
  var availableActions = activeActions.filter(function (action) {
    return action.type !== 'redirect_to_page';
  });
  var gatewaysData = gatewayAttr();
  var label = gatewayAttr('labels');

  var _useState = useState(gatewaysArgs),
      _useState2 = _slicedToArray(_useState, 2),
      gateway = _useState2[0],
      setGateway = _useState2[1];

  var formFields = getFormFieldsBlocks([], '--');
  /**
   * Used for set notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param newValue
   */

  var setValueInObject = function setValueInObject(when, type, newValue) {
    setGateway(function (prevArgs) {
      if (!prevArgs[when]) {
        prevArgs[when] = {};
      }

      prevArgs[when][type] = newValue;
      return _objectSpread({}, prevArgs);
    });
  };
  /**
   * Used for get notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param isEmptyResult
   * @returns {boolean|*}
   */


  var getNotifications = function getNotifications(when, type) {
    var isEmptyResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (gateway[when] && gateway[when][type]) {
      return gateway[when][type];
    }

    return isEmptyResult;
  };

  var setResultMessage = function setResultMessage(key, value) {
    setValueInObject('messages', key, value);
  };

  var getResultMessage = function getResultMessage(key) {
    return getNotifications('messages', key, gatewaysData.messages[key]);
  };

  var setNotificationsBefore = function setNotificationsBefore(id, newValue) {
    setValueInObject('notifications_before', id, newValue);
  };

  var actionDefault = {
    active: false
  };

  var getNotificationsBefore = function getNotificationsBefore(id) {
    return getNotifications('notifications_before', id, actionDefault);
  };

  var setNotificationsFailed = function setNotificationsFailed(type, newValue) {
    setValueInObject('notifications_failed', type, newValue);
  };

  var getNotificationsFailed = function getNotificationsFailed(id) {
    return getNotifications('notifications_failed', id, actionDefault);
  };

  var setNotificationsSuccess = function setNotificationsSuccess(id, newValue) {
    setValueInObject('notifications_success', id, newValue);
  };

  var getNotificationsSuccess = function getNotificationsSuccess(id) {
    return getNotifications('notifications_success', id, actionDefault);
  };

  useEffect(function () {
    if (true === isSaveAction) {
      if (onSaveItems) {
        ['notifications_before', 'notifications_failed', 'notifications_success'].forEach(function (name) {
          if (!gateway[name]) {
            gateway[name] = {};
            return;
          }

          Object.entries(gateway[name]).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                action = _ref3[0],
                isChecked = _ref3[1];

            if (!isChecked) {
              delete gateway[name][action];
            }
          });
        });
        onSaveItems(gateway);
      }

      onUnMount();
    } else if (false === isSaveAction) {
      onUnMount();
    }
  }, [isSaveAction]);
  var actionsList = actionByTypeList('insert_post', true);
  var actionLabel = fromLocalizeHelper('getActionLabel');
  return wp.element.createElement(React.Fragment, null, renderGateway(gateway.gateway, {
    setValueInObject: setValueInObject,
    getNotifications: getNotifications
  }), Boolean(availableActions.length) && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: __('Before payment processed:', 'jet-form-builder'),
    key: "before_payment_base_control"
  }, wp.element.createElement("div", {
    className: 'jet-user-fields-map__list'
  }, availableActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsBefore(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
      onChange: function onChange(active) {
        return setNotificationsBefore(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  }))), wp.element.createElement(BaseControl, {
    label: __('On successful payment:', 'jet-form-builder'),
    key: "success_payment_base_control"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, availableActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsSuccess(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
      onChange: function onChange(active) {
        return setNotificationsSuccess(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  }))), wp.element.createElement(BaseControl, {
    label: __('On failed payment:', 'jet-form-builder'),
    key: "failed_payment_base_control"
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, availableActions.map(function (action, index) {
    return wp.element.createElement(CheckboxControl, {
      className: 'jet-forms-checkbox-field',
      key: "place_holder_block_".concat(action.id + index),
      checked: getNotificationsFailed(action.id).active,
      label: actionLabel(action.type),
      help: gatewayActionAttributes(action),
      onChange: function onChange(active) {
        return setNotificationsFailed(action.id, {
          active: active,
          type: action.type
        });
      }
    });
  })))), wp.element.createElement(BaseControl, {
    label: label('action_order'),
    key: "gateway_action_order_base_control"
  }, wp.element.createElement(RadioControl, {
    className: "jet-control-clear-full jet-user-fields-map__list",
    key: "gateway_action_order",
    options: actionByTypeList('insert_post', true),
    selected: gateway.action_order,
    onChange: function onChange(newVal) {
      setGateway(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          action_order: Number(newVal)
        });
      });
    }
  })), wp.element.createElement(SelectControl, {
    label: label('price_field'),
    key: 'form_fields_price_field',
    value: gateway.price_field,
    labelPosition: "side",
    onChange: function onChange(newVal) {
      setGateway(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          price_field: newVal
        });
      });
    },
    options: formFields
  }), wp.element.createElement(BaseControl, {
    key: "payment_result_macros_base_control"
  }, wp.element.createElement("h4", null, __('Available macros list: ', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_amount% - payment amount returned from gateway template;', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_status% - payment status returned from payment gateway;', 'jet-form-builder'), wp.element.createElement("br", null), __('%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder'), wp.element.createElement("br", null))), wp.element.createElement(TextareaControl, {
    key: "payment_result_message_success",
    label: label('message_success'),
    value: getResultMessage('success'),
    onChange: function onChange(newValue) {
      return setResultMessage('success', newValue);
    }
  }), wp.element.createElement(TextareaControl, {
    key: "payment_result_message_failed",
    label: label('message_failed'),
    value: getResultMessage('failed'),
    onChange: function onChange(newValue) {
      return setResultMessage('failed', newValue);
    }
  }), activeActions.find(function (action) {
    return action.type === 'redirect_to_page';
  }) && wp.element.createElement(CheckboxControl, {
    key: "checkbox_block_redirect_to_page",
    checked: gateway.use_success_redirect,
    label: label('use_success_redirect'),
    onChange: function onChange(value) {
      setGateway(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          use_success_redirect: value
        });
      });
    }
  }));
}

/***/ }),

/***/ "./editor/gateways/paypal.js":
/*!***********************************!*\
  !*** ./editor/gateways/paypal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PayPal)
/* harmony export */ });
var __ = wp.i18n.__;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl;
var _JetFBActions = JetFBActions,
    registerGateway = _JetFBActions.registerGateway,
    gatewayLabel = _JetFBActions.gatewayLabel,
    globalTab = _JetFBActions.globalTab;
var label = gatewayLabel('paypal');
var currentTab = globalTab({
  slug: 'paypal'
});
function PayPal(_ref) {
  var setValueInObject = _ref.setValueInObject,
      getNotifications = _ref.getNotifications;

  var setSetting = function setSetting(key, value) {
    setValueInObject('paypal', key, value);
  };

  var getSetting = function getSetting(key) {
    return getNotifications('paypal', key, '');
  };

  var isGlobal = getNotifications('paypal', 'use_global', false);

  var getManualOrGlobal = function getManualOrGlobal(key) {
    return isGlobal ? currentTab[key] : getSetting(key);
  };

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: label('use_global'),
    checked: getSetting('use_global'),
    onChange: function onChange(newVal) {
      return setSetting('use_global', newVal);
    }
  }), wp.element.createElement(TextControl, {
    label: label('client_id'),
    key: "paypal_client_id_setting",
    value: getManualOrGlobal('client_id'),
    onChange: function onChange(newVal) {
      return setSetting('client_id', newVal);
    },
    disabled: isGlobal
  }), wp.element.createElement(TextControl, {
    label: label('secret'),
    key: "paypal_secret_setting",
    value: getManualOrGlobal('secret'),
    onChange: function onChange(newVal) {
      return setSetting('secret', newVal);
    },
    disabled: isGlobal
  }), wp.element.createElement(TextControl, {
    label: label('currency'),
    key: "paypal_currency_code_setting",
    value: getSetting('currency'),
    onChange: function onChange(newVal) {
      return setSetting('currency', newVal);
    }
  }));
}
registerGateway('paypal', PayPal);

/***/ }),

/***/ "./editor/plugins/actions/index.js":
/*!*****************************************!*\
  !*** ./editor/plugins/actions/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/actions/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-actions-panel',
  title: __('Post Submit Actions')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: null
};


/***/ }),

/***/ "./editor/plugins/actions/options.js":
/*!*******************************************!*\
  !*** ./editor/plugins/actions/options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomID": () => (/* binding */ getRandomID),
/* harmony export */   "defaultActions": () => (/* binding */ defaultActions),
/* harmony export */   "newItemCondition": () => (/* binding */ newItemCondition),
/* harmony export */   "conditionOperators": () => (/* binding */ conditionOperators),
/* harmony export */   "defaultAction": () => (/* binding */ defaultAction)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getRandomID = function getRandomID() {
  return Math.floor(Math.random() * 8999) + 1000;
};

var defaultAction = {
  type: 'send_email',
  id: getRandomID(),
  settings: {}
};
var defaultActions = [_objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(defaultAction))), {}, {
  settings: {
    send_email: {
      subject: 'New order on website',
      content: 'Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%'
    }
  }
})];
var newItemCondition = {
  execute: true,
  operator: '',
  field: '',
  default: ''
};
var conditionOperators = [{
  label: '--',
  value: ''
}, {
  label: 'Equal',
  value: 'equal'
}, {
  label: 'Greater than',
  value: 'greater'
}, {
  label: 'Less than',
  value: 'less'
}, {
  label: 'Between',
  value: 'between'
}, {
  label: 'In the list',
  value: 'one_of'
}, {
  label: 'Contain text',
  value: 'contain'
}];


/***/ }),

/***/ "./editor/plugins/actions/render.js":
/*!******************************************!*\
  !*** ./editor/plugins/actions/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/actions/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBActions = JetFBActions,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _JetFBComponents = JetFBComponents,
    ActionModal = _JetFBComponents.ActionModal,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    FieldWithPreset = _JetFBComponents.FieldWithPreset,
    DynamicPreset = _JetFBComponents.DynamicPreset;
var _JetFBHooks = JetFBHooks,
    useActions = _JetFBHooks.useActions;
var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    CardHeader = _wp$components.CardHeader,
    DropdownMenu = _wp$components.DropdownMenu,
    Flex = _wp$components.Flex;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var __ = wp.i18n.__;
var applyFilters = wp.hooks.applyFilters;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    useDispatch = _wp$data.useDispatch;
var compose = wp.compose.compose;
var actionTypes = window.jetFormActionTypes.map(function (action) {
  return {
    value: action.id,
    label: action.name
  };
});

function getActionCallback(editedAction) {
  for (var i = 0; i < window.jetFormActionTypes.length; i++) {
    if (window.jetFormActionTypes[i].id === editedAction.type && window.jetFormActionTypes[i].callback) {
      return window.jetFormActionTypes[i].callback;
    }
  }

  return false;
}

function PluginActions(_ref) {
  var setCurrentAction = _ref.setCurrentAction;

  var _useActions = useActions(true),
      _useActions2 = _slicedToArray(_useActions, 2),
      actions = _useActions2[0],
      setActions = _useActions2[1];

  useEffect(function () {
    if (0 === actions.length) {
      setActions(_options__WEBPACK_IMPORTED_MODULE_0__.defaultActions);
    }
  }, []);

  var moveAction = function moveAction(fromIndex, toIndex) {
    var item = JSON.parse(JSON.stringify(actions[fromIndex])),
        replacedItem = JSON.parse(JSON.stringify(actions[toIndex]));
    actions.splice(toIndex, 1, item);
    actions.splice(fromIndex, 1, replacedItem);
    setActions(_toConsumableArray(actions));
  };

  var deleteAction = function deleteAction(index) {
    actions.splice(index, 1);
    setActions(_toConsumableArray(actions));
  };

  var updateAction = function updateAction(id, key, value) {
    setActions(actions.map(function (action, index) {
      if (action.id === id) {
        var newAction = JSON.parse(JSON.stringify(action));
        newAction[key] = value;
        return newAction;
      } else {
        return action;
      }
    }));
  };

  var updateActionObj = function updateActionObj(id, props) {
    setActions(function (actions) {
      return actions.map(function (current) {
        if (id !== current.id) {
          return current;
        }

        return _objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(current))), props);
      });
    });
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEdit = _useState2[0],
      setEdit = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      editedAction = _useState4[0],
      setEditedAction = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEditProcessAction = _useState6[0],
      setEditProcessAction = _useState6[1];

  var _useState7 = useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      processedAction = _useState8[0],
      setProcessedAction = _useState8[1];

  var closeModal = function closeModal() {
    setEdit(false);
    setCurrentAction({});
  };

  var Callback = getActionCallback(editedAction);

  var updateActionSettings = function updateActionSettings(action) {
    updateActionObj(action.id, {
      settings: action.settings
    });
    closeModal();
  };

  var updateActionCondition = function updateActionCondition(items) {
    updateAction(processedAction.id, 'conditions', items);
    setEditProcessAction(false);
  };

  var updateActionType = function updateActionType(id, type) {
    setActions(function (prev) {
      return prev.map(function (prevItem) {
        if (prevItem.id === id) {
          var newAction = JSON.parse(JSON.stringify(prevItem));
          newAction.type = type;
          newAction.settings = newAction.settings || {};
          newAction.settings[type] = newAction.settings[type] || {};
          return newAction;
        } else {
          return prevItem;
        }
      });
    });
  };

  useEffect(function () {
    if (editedAction.type) {
      setEdit(true);
    }
  }, [editedAction]);
  useEffect(function () {
    if (processedAction.type) {
      setEditProcessAction(true);
    }
  }, [processedAction]);
  var formFields = getFormFieldsBlocks([], '--');

  var getMergedSettings = function getMergedSettings() {
    return editedAction.settings[editedAction.type] || editedAction.settings;
  };

  return wp.element.createElement(React.Fragment, null, actions && actions.map(function (action, index) {
    var header = applyFilters("jet.fb.section.actions.header.".concat(action.type), null, action, actions);
    return wp.element.createElement(Card, {
      key: action.id,
      size: 'extraSmall',
      className: 'jet-form-action'
    }, header && wp.element.createElement(CardHeader, null, header), wp.element.createElement(CardBody, null, wp.element.createElement(SelectControl, {
      value: action.type,
      options: actionTypes,
      onChange: function onChange(newType) {
        return updateActionType(action.id, newType);
      }
    }), applyFilters("jet.fb.section.actions.afterSelect.".concat(action.type), null, action, actions), wp.element.createElement(Flex, {
      style: {
        marginTop: '0.5em'
      },
      justify: "space-around"
    }, wp.element.createElement(Button, {
      disabled: !getActionCallback(action),
      icon: "edit",
      label: 'Edit Action',
      onClick: function onClick() {
        setEditedAction(function () {
          return _objectSpread({}, action);
        });
        setCurrentAction(_objectSpread(_objectSpread({}, action), {}, {
          index: index
        }));
      }
    }), wp.element.createElement(Button, {
      icon: "randomize",
      label: 'Conditions',
      onClick: function onClick() {
        setProcessedAction(function () {
          return _objectSpread({}, action);
        });
      }
    }), wp.element.createElement(DropdownMenu, {
      icon: 'ellipsis',
      label: 'Edit, move or delete',
      controls: [{
        title: 'Up',
        icon: 'arrow-up',
        disabled: true,
        onClick: function onClick() {
          if (0 !== index) {
            moveAction(index, index - 1);
          }
        }
      }, {
        title: 'Down',
        icon: 'arrow-down',
        disabled: index === actions.length,
        onClick: function onClick() {
          if (actions.length - 1 !== index) {
            moveAction(index, index + 1);
          }
        }
      }, {
        title: 'Delete',
        icon: 'trash',
        onClick: function onClick() {
          deleteAction(index);
        }
      }]
    }))));
  }), wp.element.createElement(Button, {
    isPrimary: true,
    onClick: function onClick() {
      setActions([].concat(_toConsumableArray(actions), [_objectSpread(_objectSpread({}, JSON.parse(JSON.stringify(_options__WEBPACK_IMPORTED_MODULE_0__.defaultAction))), {}, {
        id: (0,_options__WEBPACK_IMPORTED_MODULE_0__.getRandomID)()
      })]));
    }
  }, '+ New Action'), isEdit && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: closeModal,
    title: 'Edit Action',
    onUpdateClick: function onUpdateClick() {
      updateActionSettings(editedAction);
    },
    onCancelClick: closeModal
  }, Callback && wp.element.createElement(Callback, {
    settings: getMergedSettings(),
    actionId: editedAction.id,
    onChange: function onChange(data) {
      setEditedAction(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          settings: _objectSpread(_objectSpread({}, prev.settings), {}, _defineProperty({}, editedAction.type, data))
        });
      });
    }
  })), isEditProcessAction && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    title: 'Edit Action Conditions',
    onRequestClose: function onRequestClose() {
      return setEditProcessAction(false);
    },
    onCancelClick: function onCancelClick() {
      return setEditProcessAction(false);
    }
  }, function (_ref2) {
    var actionClick = _ref2.actionClick,
        onRequestClose = _ref2.onRequestClose;
    return wp.element.createElement(RepeaterWithState, {
      items: processedAction.conditions,
      newItem: _options__WEBPACK_IMPORTED_MODULE_0__.newItemCondition,
      onUnMount: onRequestClose,
      isSaveAction: actionClick,
      onSaveItems: updateActionCondition,
      addNewButtonLabel: __('Add New Condition'),
      help: {
        helpVisible: function helpVisible(conditions) {
          return conditions.length > 1;
        },
        helpSource: window.JetFormEditorData.helpForRepeaters,
        helpKey: 'conditional_action'
      }
    }, function (_ref3) {
      var currentItem = _ref3.currentItem,
          changeCurrentItem = _ref3.changeCurrentItem;
      var executeLabel = __('To fulfill this condition, the result of the check must be', 'jet-form-builder') + ' ';
      executeLabel += currentItem.execute ? 'TRUE' : 'FALSE';
      return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
        label: executeLabel,
        checked: currentItem.execute,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            execute: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: "Operator",
        labelPosition: "side",
        value: currentItem.operator,
        options: _options__WEBPACK_IMPORTED_MODULE_0__.conditionOperators,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            operator: newValue
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: "Field",
        labelPosition: "side",
        value: currentItem.field,
        options: formFields,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            field: newValue
          });
        }
      }), wp.element.createElement(FieldWithPreset, {
        baseControlProps: {
          label: "Value to Compare"
        },
        ModalEditor: function ModalEditor(_ref4) {
          var actionClick = _ref4.actionClick,
              onRequestClose = _ref4.onRequestClose;
          return wp.element.createElement(DynamicPreset, {
            value: currentItem.default,
            isSaveAction: actionClick,
            onSavePreset: function onSavePreset(newValue) {
              changeCurrentItem({
                default: newValue
              });
            },
            excludeSources: ['query_var'],
            onUnMount: onRequestClose
          });
        },
        triggerClasses: ['trigger__textarea']
      }, wp.element.createElement(TextareaControl, {
        className: 'jet-control-clear jet-user-fields-map__list',
        value: currentItem.default,
        onChange: function onChange(newValue) {
          changeCurrentItem({
            default: newValue
          });
        }
      })));
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withDispatch(function (dispatch) {
  return {
    setCurrentAction: function setCurrentAction(action) {
      dispatch('jet-forms/actions').setCurrentAction(action);
    }
  };
}))(PluginActions));

/***/ }),

/***/ "./editor/plugins/arguments/index.js":
/*!*******************************************!*\
  !*** ./editor/plugins/arguments/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/arguments/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-args-panel',
  title: __('Form Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: null
};


/***/ }),

/***/ "./editor/plugins/arguments/options.js":
/*!*********************************************!*\
  !*** ./editor/plugins/arguments/options.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitTypes": () => (/* binding */ submitTypes),
/* harmony export */   "fieldsLayout": () => (/* binding */ fieldsLayout)
/* harmony export */ });
var submitTypes = [{
  value: '',
  label: '--'
}, {
  value: 'reload',
  label: 'Page Reload'
}, {
  value: 'ajax',
  label: 'AJAX'
}];
var fieldsLayout = [{
  value: '',
  label: '--'
}, {
  value: 'column',
  label: 'Column'
}, {
  value: 'row',
  label: 'Row'
}];


/***/ }),

/***/ "./editor/plugins/arguments/render.js":
/*!********************************************!*\
  !*** ./editor/plugins/arguments/render.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginArgs)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/arguments/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
function PluginArgs() {
  var _useMetaState = useMetaState('_jf_args'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: 'Fields Layout',
    value: args.fields_layout,
    options: _options__WEBPACK_IMPORTED_MODULE_0__.fieldsLayout,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          fields_layout: newVal
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    label: 'Required Mark',
    value: args.required_mark,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          required_mark: newVal
        });
      });
    }
  }), wp.element.createElement(SelectControl, {
    label: 'Submit Type',
    value: args.submit_type,
    options: _options__WEBPACK_IMPORTED_MODULE_0__.submitTypes,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          submit_type: newVal
        });
      });
    }
  }), wp.element.createElement(ToggleControl, {
    key: 'enable_progress',
    label: 'Enable form pages progress',
    checked: args.enable_progress,
    onChange: function onChange(newVal) {
      setArgs(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          enable_progress: Boolean(newVal)
        });
      });
    }
  }));
}
;

/***/ }),

/***/ "./editor/plugins/captcha/index.js":
/*!*****************************************!*\
  !*** ./editor/plugins/captcha/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/captcha/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-captcha-panel',
  title: __('Captcha Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: null
};


/***/ }),

/***/ "./editor/plugins/captcha/options.js":
/*!*******************************************!*\
  !*** ./editor/plugins/captcha/options.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "labels": () => (/* binding */ labels)
/* harmony export */ });
var __ = wp.i18n.__;
var labels = {
  enabled: __('Enable reCAPTCHA v3 form verification'),
  key: __('Site Key:'),
  secret: __('Secret Key:'),
  use_global: __('Use Global Settings')
};


/***/ }),

/***/ "./editor/plugins/captcha/render.js":
/*!******************************************!*\
  !*** ./editor/plugins/captcha/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./editor/plugins/captcha/options.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__;
var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var _JetFBActions = JetFBActions,
    globalTab = _JetFBActions.globalTab;
var currentTab = globalTab({
  slug: 'captcha-tab'
});

function PluginCaptcha() {
  var _useMetaState = useMetaState('_jf_recaptcha'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'enabled',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.enabled,
    checked: args.enabled,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          enabled: Boolean(newVal)
        });
      });
    }
  }), args.enabled && wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'use_global',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.use_global,
    checked: args.use_global,
    onChange: function onChange(use_global) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          use_global: Boolean(use_global)
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    key: 'site_key',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.key,
    value: args.use_global ? currentTab.key : args.key,
    disabled: args.use_global,
    onChange: function onChange(newValue) {
      return setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          key: newValue
        });
      });
    }
  }), wp.element.createElement(TextControl, {
    key: 'secret_key',
    label: _options__WEBPACK_IMPORTED_MODULE_0__.labels.secret,
    value: args.use_global ? currentTab.secret : args.secret,
    disabled: args.use_global,
    onChange: function onChange(newValue) {
      return setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          secret: newValue
        });
      });
    }
  }), wp.element.createElement("span", null, 'Register reCAPTCHA v3 keys ', wp.element.createElement("a", {
    href: "https://www.google.com/recaptcha/admin/create",
    target: "_blank"
  }, "here"))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginCaptcha);

/***/ }),

/***/ "./editor/plugins/gateways/index.js":
/*!******************************************!*\
  !*** ./editor/plugins/gateways/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/gateways/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-gateways-panel',
  title: __('Gateways Settings'),
  condition: window.JetFormEditorData.gateways.allowed
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: null
};


/***/ }),

/***/ "./editor/plugins/gateways/render.js":
/*!*******************************************!*\
  !*** ./editor/plugins/gateways/render.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../gateways/gateways-editor */ "./editor/gateways/gateways-editor.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var __ = wp.i18n.__;
var _wp$components = wp.components,
    RadioControl = _wp$components.RadioControl,
    Button = _wp$components.Button;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBComponents = JetFBComponents,
    ActionModal = _JetFBComponents.ActionModal;

function PluginGateways() {
  var gatewaysData = window.JetFormEditorData.gateways;
  var meta = useSelect(function (select) {
    return select('core/editor').getEditedPostAttribute('meta') || {};
  });

  var _useDispatch = useDispatch('core/editor'),
      editPost = _useDispatch.editPost;

  var gatewaysProps = {
    activeActions: JSON.parse(meta._jf_actions),
    gatewaysArgs: JSON.parse(meta._jf_gateways || '{}')
  };

  var _useState = useState(gatewaysProps.gatewaysArgs.gateway),
      _useState2 = _slicedToArray(_useState, 2),
      gateway = _useState2[0],
      setGateway = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isEdit = _useState4[0],
      setEdit = _useState4[1];

  var closeModal = function closeModal() {
    setEdit(false);
  };

  var getGatewayLabel = function getGatewayLabel(type) {
    return gatewaysData.list.find(function (el) {
      return el.value === type;
    }).label;
  };

  var saveArgs = function saveArgs(newArgs) {
    editPost({
      meta: _objectSpread(_objectSpread({}, meta), {}, {
        _jf_gateways: JSON.stringify(newArgs)
      })
    });
  };

  var saveGateway = function saveGateway(type) {
    gatewaysProps.gatewaysArgs.gateway = type;
    editPost({
      meta: _objectSpread(_objectSpread({}, meta), {}, {
        _jf_gateways: JSON.stringify(gatewaysProps.gatewaysArgs)
      })
    });
  };

  var issetActionType = function issetActionType(type) {
    return Boolean(gatewaysProps.activeActions.find(function (action) {
      return type === action.type;
    }));
  };

  var isDisabled = !issetActionType('insert_post');
  useEffect(function () {
    saveGateway(gateway);
  }, [gateway]);
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(RadioControl, {
    key: 'gateways_radio_control',
    selected: gateway,
    options: [{
      label: 'None',
      value: 'none'
    }].concat(_toConsumableArray(gatewaysData.list)),
    onChange: setGateway
  }), gateway && 'none' !== gateway && wp.element.createElement(React.Fragment, null, wp.element.createElement(Button, {
    onClick: function onClick() {
      return setEdit(true);
    },
    icon: 'admin-tools',
    style: {
      margin: '1em 0'
    },
    isSecondary: true,
    disabled: isDisabled
  }, __('Edit')), isDisabled && wp.element.createElement("p", null, __('Please add \`Insert/Update Post\` action', 'jet-form-builder'))), isEdit && wp.element.createElement(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: closeModal,
    title: "Edit ".concat(getGatewayLabel(gateway), " Settings")
  }, function (_ref) {
    var actionClick = _ref.actionClick,
        onRequestClose = _ref.onRequestClose;
    return wp.element.createElement(React.Fragment, null, wp.element.createElement(_gateways_gateways_editor__WEBPACK_IMPORTED_MODULE_0__.default, _extends({}, gatewaysProps, {
      isSaveAction: actionClick,
      onUnMount: onRequestClose,
      onSaveItems: saveArgs
    })));
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginGateways);

/***/ }),

/***/ "./editor/plugins/manager.js":
/*!***********************************!*\
  !*** ./editor/plugins/manager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPlugins)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./editor/plugins/actions/index.js");
/* harmony import */ var _arguments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arguments */ "./editor/plugins/arguments/index.js");
/* harmony import */ var _captcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha */ "./editor/plugins/captcha/index.js");
/* harmony import */ var _gateways__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateways */ "./editor/plugins/gateways/index.js");
/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preset */ "./editor/plugins/preset/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./editor/plugins/messages/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var applyFilters = wp.hooks.applyFilters;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;

var withPluginProps = function withPluginProps(settings, base) {
  var PluginRender = settings.render;
  return function () {
    return wp.element.createElement(PluginDocumentSettingPanel, _extends({}, base, {
      key: "plugin-panel-".concat(base.name)
    }), wp.element.createElement(PluginRender, {
      key: "plugin-render-".concat(base.name)
    }));
  };
};

var registerJfbPlugin = function registerJfbPlugin(plugin) {
  var base = plugin.base,
      settings = plugin.settings;
  settings.render = withPluginProps(settings, base);
  registerPlugin(base.name, settings);
};

function RegisterPlugins() {
  var sortedPlugins = [];
  var jfbPlugins = applyFilters('jet.fb.register.plugins', [_arguments__WEBPACK_IMPORTED_MODULE_1__, _captcha__WEBPACK_IMPORTED_MODULE_2__, _gateways__WEBPACK_IMPORTED_MODULE_3__, _actions__WEBPACK_IMPORTED_MODULE_0__, _preset__WEBPACK_IMPORTED_MODULE_4__, _messages__WEBPACK_IMPORTED_MODULE_5__]);
  jfbPlugins.forEach(function (plugin) {
    var _plugin$base = plugin.base,
        name = _plugin$base.name,
        _plugin$base$conditio = _plugin$base.condition,
        condition = _plugin$base$conditio === void 0 ? true : _plugin$base$conditio;

    if (!condition) {
      return false;
    }

    var beforePlugin = applyFilters("jet.fb.register.plugin.".concat(name, ".before"), []);

    if (beforePlugin) {
      sortedPlugins.push.apply(sortedPlugins, _toConsumableArray(beforePlugin));
    }

    sortedPlugins.push(plugin);
    var afterPlugin = applyFilters("jet.fb.register.plugin.".concat(name, ".after"), []);

    if (afterPlugin) {
      sortedPlugins.push.apply(sortedPlugins, _toConsumableArray(afterPlugin));
    }
  });
  sortedPlugins.forEach(registerJfbPlugin);
}

/***/ }),

/***/ "./editor/plugins/messages/index.js":
/*!******************************************!*\
  !*** ./editor/plugins/messages/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/messages/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-messages-panel',
  title: __('General Messages Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: null
};


/***/ }),

/***/ "./editor/plugins/messages/render.js":
/*!*******************************************!*\
  !*** ./editor/plugins/messages/render.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _JetFBActions = JetFBActions,
    Tools = _JetFBActions.Tools;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var TextControl = wp.components.TextControl;

function PluginMessages() {
  var meta = wp.data.select('core/editor').getEditedPostAttribute('meta') || {};

  var _useDispatch = useDispatch('core/editor'),
      editPost = _useDispatch.editPost;

  var getDefaultMessagesValues = function getDefaultMessagesValues() {
    var defaults = {};
    Object.entries(JetFormEditorData.messagesDefault).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          type = _ref2[0],
          data = _ref2[1];

      defaults[type] = data.value;
    });
    return defaults;
  };

  var _useState = useState(function () {
    var metaMessages = JSON.parse(meta._jf_messages || '{}');
    return Tools.isEmptyObject(metaMessages) ? getDefaultMessagesValues() : metaMessages;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  useEffect(function () {
    editPost({
      meta: _objectSpread(_objectSpread({}, meta), {}, {
        _jf_messages: JSON.stringify(messages)
      })
    });
  });

  var onChangeMessage = function onChangeMessage(type, value) {
    setMessages(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, type, value));
    });
  };

  return wp.element.createElement(React.Fragment, null, Object.entries(messages).map(function (_ref3, id) {
    var _ref4 = _slicedToArray(_ref3, 2),
        type = _ref4[0],
        text = _ref4[1];

    return JetFormEditorData.messagesDefault[type] && wp.element.createElement(TextControl, {
      key: type + id,
      label: JetFormEditorData.messagesDefault[type].label,
      value: text,
      onChange: function onChange(newValue) {
        return onChangeMessage(type, newValue);
      }
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginMessages);

/***/ }),

/***/ "./editor/plugins/preset/index.js":
/*!****************************************!*\
  !*** ./editor/plugins/preset/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugins/preset/render.js");

var __ = wp.i18n.__;
var base = {
  name: 'jf-preset-panel',
  title: __('Preset Settings')
};
var settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__.default,
  icon: null
};


/***/ }),

/***/ "./editor/plugins/preset/render.js":
/*!*****************************************!*\
  !*** ./editor/plugins/preset/render.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_presets_general_preset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/presets/general-preset */ "./editor/components/presets/general-preset.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBHooks = JetFBHooks,
    useMetaState = _JetFBHooks.useMetaState;
var _JetFBActions = JetFBActions,
    getAvailableFields = _JetFBActions.getAvailableFields;

function PluginPreset() {
  var ToggleControl = wp.components.ToggleControl;

  var _useMetaState = useMetaState('_jf_preset'),
      _useMetaState2 = _slicedToArray(_useMetaState, 2),
      args = _useMetaState2[0],
      setArgs = _useMetaState2[1];

  var formFields = getAvailableFields();
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(ToggleControl, {
    key: 'enable_preset',
    label: 'Enable',
    checked: args.enabled,
    help: 'Check this to enable global form preset',
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread({}, prevArgs), {}, {
          enabled: newVal
        });
      });
    }
  }), args.enabled && wp.element.createElement(_components_presets_general_preset__WEBPACK_IMPORTED_MODULE_0__.default, {
    key: '_jf_preset_general',
    value: args,
    onChange: function onChange(newVal) {
      setArgs(function (prevArgs) {
        return _objectSpread(_objectSpread(_objectSpread({}, prevArgs), newVal), {}, {
          enabled: prevArgs.enabled
        });
      });
    },
    availableFields: formFields
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginPreset);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/form-fields */ "./editor/blocks/form-fields.js");
/* harmony import */ var _form_actions_send_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-actions/send-email */ "./editor/form-actions/send-email.js");
/* harmony import */ var _form_actions_send_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_actions_send_email__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_actions_insert_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-actions/insert-post */ "./editor/form-actions/insert-post.js");
/* harmony import */ var _form_actions_register_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-actions/register-user */ "./editor/form-actions/register-user.js");
/* harmony import */ var _form_actions_register_user__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_actions_register_user__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form_actions_update_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-actions/update-user */ "./editor/form-actions/update-user.js");
/* harmony import */ var _form_actions_update_user__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form_actions_update_user__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _form_actions_update_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-actions/update-options */ "./editor/form-actions/update-options.js");
/* harmony import */ var _form_actions_update_options__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_form_actions_update_options__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-actions/call-hook */ "./editor/form-actions/call-hook.js");
/* harmony import */ var _form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_form_actions_call_hook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-actions/call-webhook */ "./editor/form-actions/call-webhook.js");
/* harmony import */ var _form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_form_actions_call_webhook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-actions/redirect-to-page */ "./editor/form-actions/redirect-to-page.js");
/* harmony import */ var _form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_form_actions_redirect_to_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _form_actions_mailchimp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-actions/mailchimp */ "./editor/form-actions/mailchimp.js");
/* harmony import */ var _form_actions_getresponse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-actions/getresponse */ "./editor/form-actions/getresponse.js");
/* harmony import */ var _form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-actions/activecampaign */ "./editor/form-actions/activecampaign.js");
/* harmony import */ var _form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_form_actions_activecampaign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plugins_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/manager */ "./editor/plugins/manager.js");














var _JetFBActions = JetFBActions,
    event = _JetFBActions.event;
event('jet-form-builder-initialize')();
window.jetFormActionTypes.forEach(function (action, index) {
  if (window.jetFormDefaultActions && window.jetFormDefaultActions[action.id]) {
    window.jetFormActionTypes[index].callback = window.jetFormDefaultActions[action.id];
  }
});
(0,_plugins_manager__WEBPACK_IMPORTED_MODULE_12__.default)();
(0,_blocks_form_fields__WEBPACK_IMPORTED_MODULE_0__.default)();
event('jet-form-builder-initialized')();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9ibG9jay13cmFwcGVycy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NhbGN1bGF0ZWQtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NhbGN1bGF0ZWQtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jaGVja2JveC1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY2hlY2tib3gtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb2xvci1waWNrZXItZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbG9yLXBpY2tlci1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb25kaXRpb25hbC1ibG9jay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2NvbmRpdGlvbmFsLWJsb2NrL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9jb25kaXRpb25hbC1ibG9jay9zYXZlLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvY29udHJvbHMvZGVmYXVsdC1tZXRhLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvZGF0ZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2RhdGV0aW1lLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9kYXRldGltZS1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tYnJlYWstZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2Zvcm0tYnJlYWstZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9mb3JtLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2dyb3VwLWJyZWFrLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9ncm91cC1icmVhay1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hlYWRpbmctZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hlYWRpbmctZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9oZWxwLW1lc3NhZ2VzLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL2hpZGRlbi1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGlkZGVuLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvaGlkZGVuLWZpZWxkL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9tZWRpYS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbWVkaWEtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9tZWRpYS1maWVsZC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvbnVtYmVyLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9udW1iZXItZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yYWRpby1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmFkaW8tZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yYW5nZS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmFuZ2UtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yZXBlYXRlci1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmVwZWF0ZXItZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9yZXBlYXRlci1maWVsZC9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvcmVwZWF0ZXItZmllbGQvc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3NlbGVjdC1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc2VsZWN0LWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvc2VsZWN0LXJhZGlvLWNoZWtjLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy9zdWJtaXQtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3N1Ym1pdC1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHQtZmllbGQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvYmxvY2tzL3RleHQtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0LWZpZWxkL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90ZXh0YXJlYS1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3MvdGV4dGFyZWEtZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90aW1lLWZpZWxkL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Jsb2Nrcy90aW1lLWZpZWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvd3lzaXd5Zy1maWVsZC9lZGl0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9ibG9ja3Mvd3lzaXd5Zy1maWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9mcm9tLWdlbmVyYXRvcnMtZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL2Zyb20tbWFudWFsLWZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9mcm9tLXBvc3QtdGVybXMtZmllbGRzLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvY29tcG9uZW50cy9wcmVzZXRzL2dlbmVyYWwtcHJlc2V0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvYWN0aXZlY2FtcGFpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9iYXNlLWFjdGlvbi1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9jYWxsLWhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9jYWxsLXdlYmhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9nZXRyZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL2luc2VydC1wb3N0LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvaW50ZWdyYXRpb24tY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvbWFpbGNoaW1wLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvcmVkaXJlY3QtdG8tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZ2lzdGVyLXVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy9zZW5kLWVtYWlsLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9mb3JtLWFjdGlvbnMvdXBkYXRlLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL2Zvcm0tYWN0aW9ucy91cGRhdGUtdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvZ2F0ZXdheXMvZ2F0ZXdheXMtZWRpdG9yLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9nYXRld2F5cy9wYXlwYWwuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9hY3Rpb25zL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYWN0aW9ucy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvYXJndW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL2FyZ3VtZW50cy9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL2FyZ3VtZW50cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvY2FwdGNoYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9jYXB0Y2hhL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvY2FwdGNoYS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvZ2F0ZXdheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvZ2F0ZXdheXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvbWVzc2FnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZWRpdG9yL3BsdWdpbnMvbWVzc2FnZXMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2VkaXRvci9wbHVnaW5zL3ByZXNldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvcGx1Z2lucy9wcmVzZXQvcmVuZGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlc0NvbmZpZyB9IGZyb20gXCIuL2hlbHAtbWVzc2FnZXMtY29uZmlnXCI7XG5cbmNvbnN0IHtcblx0YXBwbHlGaWx0ZXJzXG59ID0gd3AuaG9va3M7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQ3VzdG9tUHJvcHMoIGJsb2NrICkge1xuXHRjb25zdCB7IGVkaXQ6IEVkaXRDb21wb25lbnQgfSA9IGJsb2NrLnNldHRpbmdzO1xuXG5cdGxldCBfcGx1Z2lucyA9IHt9O1xuXG5cdGlmICggJ3VzZUVkaXRQcm9wcycgaW4gYmxvY2suc2V0dGluZ3MgKSB7XG5cdFx0Y29uc3QgeyB1c2VFZGl0UHJvcHMgfSA9IGJsb2NrLnNldHRpbmdzO1xuXG5cdFx0dXNlRWRpdFByb3BzLmZvckVhY2goIG5hbWUgPT4ge1xuXHRcdFx0Y29uc3QgZWRpdFByb3AgPSBlZGl0UHJvcHMuZmluZCggcHJvcCA9PiBuYW1lID09PSBwcm9wLm5hbWUgKTtcblxuXHRcdFx0aWYgKCBlZGl0UHJvcCApIHtcblx0XHRcdFx0X3BsdWdpbnNbIG5hbWUgXSA9IGVkaXRQcm9wLmNhbGxhYmxlKCBibG9jayApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGRlbGV0ZSBibG9jay5zZXR0aW5ncy51c2VFZGl0UHJvcHM7XG5cdH1cblxuXHRyZXR1cm4gcHJvcHMgPT4gPEVkaXRDb21wb25lbnQgeyAuLi5wcm9wcyB9IGVkaXRQcm9wcz17IHsgLi4uX3BsdWdpbnMgfSB9Lz47XG59XG5cbmNvbnN0IGdldEhlbHBJbnN0YW5jZSA9IGJsb2NrID0+IHtcblx0Y29uc3QgbWVzc2FnZXMgPSB7fTtcblxuXHRtZXNzYWdlc0NvbmZpZy5mb3JFYWNoKCBtc2cgPT4ge1xuXHRcdGlmICggbXNnLnRvLmluY2x1ZGVzKCBibG9jay5uYW1lICkgJiYgbXNnLm1lc3NhZ2UgKSB7XG5cdFx0XHRtZXNzYWdlc1sgbXNnLmF0dHJpYnV0ZSBdID0gbXNnO1xuXHRcdH1cblx0fSApO1xuXG5cdHJldHVybiAoIGF0dHJpYnV0ZSwgYXR0cmlidXRlcyA9IHt9ICkgPT4ge1xuXHRcdGlmICggISAoIGF0dHJpYnV0ZSBpbiBtZXNzYWdlcyApICkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRjb25zdCBpdGVtID0gbWVzc2FnZXNbIGF0dHJpYnV0ZSBdO1xuXG5cdFx0aWYgKCAnY29uZGl0aW9ucycgaW4gaXRlbSApIHtcblx0XHRcdGZvciAoIGNvbnN0IGF0dHJOYW1lIGluIGl0ZW0uY29uZGl0aW9ucyApIHtcblx0XHRcdFx0aWYgKCAhICggYXR0ck5hbWUgaW4gYXR0cmlidXRlcyApIHx8IGl0ZW0uY29uZGl0aW9uc1sgYXR0ck5hbWUgXSAhPT0gYXR0cmlidXRlc1sgYXR0ck5hbWUgXSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGl0ZW0ubWVzc2FnZTtcblx0fVxufTtcblxuY29uc3QgZWRpdFByb3BzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmVkaXRQcm9wcycsIFtcblx0e1xuXHRcdG5hbWU6ICd1bmlxS2V5Jyxcblx0XHRjYWxsYWJsZTogYmxvY2sgPT4gKCBzdWZmaXggPT4gYCR7IGJsb2NrLm5hbWUgfS8keyBzdWZmaXggfWAgKVxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2Jsb2NrTmFtZScsXG5cdFx0Y2FsbGFibGU6IGJsb2NrID0+IGJsb2NrLm5hbWVcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdhdHRySGVscCcsXG5cdFx0Y2FsbGFibGU6IGdldEhlbHBJbnN0YW5jZVxuXHR9XG5dICk7IiwiY29uc3Qge1xuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxuXHRcdCAgRmllbGRXcmFwcGVyLFxuXHRcdCAgRmllbGRTZXR0aW5nc1dyYXBwZXIsXG5cdFx0ICBCYXNlSGVscCxcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICBnZXRGaWVsZHNXaXRob3V0Q3VycmVudCxcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBCbG9ja0NvbnRyb2xzLFxuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFRleHRhcmVhQ29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBCdXR0b24sXG5cdFx0ICBQb3BvdmVyLFxuXHRcdCAgVG9vbGJhckdyb3VwLFxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBOdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xuXG5jb25zdCB7IHVzZVN0YXRlLCBSYXdIVE1MIH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBoZWxwID0ge1xuXHRjYWxjX2hpZGRlbjogX18oICdDaGVjayB0aGlzIHRvIGhpZGUgY2FsY3VsYXRlZCBmaWVsZCcgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRDYWxjdWxhdGVkKCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgaW5zZXJ0TWFjcm9zID0gKCBtYWNyb3MgKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0Y2FsY19mb3JtdWxhOiBgJHsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfHwgJycgfSR7IG1hY3JvcyB9YCxcblx0XHR9ICk7XG5cdH07XG5cdGNvbnN0IHRvZ2dsZVBvcG92ZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZmllbGRzID0gZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQoKS5tYXAoICggeyB2YWx1ZSB9ICkgPT4gKCAnJUZJRUxEOjonICsgdmFsdWUgKyAnJScgKSApO1xuXG5cdFx0c2V0Rm9ybUZpZWxkcyggYXBwbHlGaWx0ZXJzKCAnamV0LmZiLmNhbGN1bGF0ZWQuZmllbGQuYXZhaWxhYmxlLmZpZWxkcycsIGZpZWxkcyApICk7XG5cdFx0c2V0U2hvd01hY3JvcyggdG9nZ2xlID0+ICEgdG9nZ2xlICk7XG5cdH07XG5cblx0Y29uc3QgWyBmb3JtRmllbGRzLCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcblx0Y29uc3QgWyBzaG93TWFjcm9zLCBzZXRTaG93TWFjcm9zIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRyZXR1cm4gW1xuXHRcdDxCbG9ja0NvbnRyb2xzIGtleT17IHVuaXFLZXkoICdCbG9ja0NvbnRyb2xzJyApIH0+XG5cdFx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sYmFyR3JvdXAnICkgfT5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdzaG93LXBvcG92ZXInICkgfVxuXHRcdFx0XHRcdGlzVGVydGlhcnlcblx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0aWNvbj17IHNob3dNYWNyb3MgPyAnbm8tYWx0JyA6ICdhZG1pbi10b29scycgfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB0b2dnbGVQb3BvdmVyIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBzaG93TWFjcm9zICYmIDxQb3BvdmVyXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BvcG92ZXInICkgfVxuXHRcdFx0XHRcdHBvc2l0aW9uPXsgJ2JvdHRvbSBsZWZ0JyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IGZvcm1GaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XG5cdFx0XHRcdFx0XHR7IGZvcm1GaWVsZHMubWFwKCAoIHZhbHVlLCBpbmRleCApID0+IDxkaXYga2V5PXsgdW5pcUtleSggYGZvcm1GaWVsZHMtJHsgaW5kZXggfWAgKSB9PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlzTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5zZXJ0TWFjcm9zKCB2YWx1ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0XHQ+eyB2YWx1ZSB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2Pixcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cdFx0XHRcdDwvUG9wb3Zlcj4gfVxuXHRcdFx0PC9Ub29sYmFyR3JvdXA+XG5cdFx0PC9CbG9ja0NvbnRyb2xzPixcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHQ+XG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1nZW5lcmFsJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0PHBcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHAnIH1cblx0XHRcdFx0XHRzdHlsZT17IHsgbWFyZ2luVG9wOiAnMHB4JywgY29sb3I6ICdyZ2IoMTE3LCAxMTcsIDExNyknIH0gfVxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IEpldEZvcm1DYWxjdWxhdGVkRmllbGQuZmllbGRfZGVzYyB9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRGVjaW1hbCBQbGFjZXMgTnVtYmVyJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0a2V5PSdwcmVjaXNpb24nXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByZWNpc2lvbiB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBwcmVjaXNpb246IHBhcnNlSW50KCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdjYWxjX3NlcGFyYXRlX2RlY2ltYWxzJ1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdEZWNpbWFscyBzZXBhcmF0b3InICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zZXBhcmF0ZV9kZWNpbWFscyB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXBhcmF0ZV9kZWNpbWFscyA9PiBzZXRBdHRyaWJ1dGVzKCB7IHNlcGFyYXRlX2RlY2ltYWxzIH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nY2FsY19zZXBhcmF0ZV90aG91c2FuZHMnXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Rob3VzYW5kcyBzZXBhcmF0b3InICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zZXBhcmF0ZV90aG91c2FuZHMgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgc2VwYXJhdGVfdGhvdXNhbmRzID0+IHNldEF0dHJpYnV0ZXMoIHsgc2VwYXJhdGVfdGhvdXNhbmRzIH0gKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nY2FsY19wcmVmaXgnXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgVmFsdWUgUHJlZml4JyApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY19wcmVmaXggfVxuXHRcdFx0XHRcdGhlbHA9eyBfXyggJ0ZvciBzcGFjZSBiZWZvcmUgb3IgYWZ0ZXIgdGV4dCB1c2U6ICZuYnNwOycgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjX3ByZWZpeDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J2NhbGNfc3VmZml4J1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGVkIFZhbHVlIFN1ZmZpeCcgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfc3VmZml4IH1cblx0XHRcdFx0XHRoZWxwPXsgX18oICdGb3Igc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHRleHQgdXNlOiAmbmJzcDsnICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY19zdWZmaXg6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnY2FsY19oaWRkZW4nIH1cblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSGlkZGVuJyApIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5jYWxjX2hpZGRlbiB9XG5cdFx0XHRcdFx0aGVscD17IGhlbHAuY2FsY19oaWRkZW4gfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0XHRcdFx0Y2FsY19oaWRkZW46IEJvb2xlYW4oIG5ld1ZhbCApLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFNldHRpbmdzV3JhcHBlcj5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1hZHZhbmNlZCcgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19jYWxjdWxhdGVkLWZpZWxkJyB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NhbGMtcHJlZml4JyB9PnsgYXR0cmlidXRlcy5jYWxjX3ByZWZpeCB9PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnY2FsYy1mb3JtdWxhJyB9PnsgYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2NhbGMtc3VmZml4JyB9PnsgYXR0cmlidXRlcy5jYWxjX3N1ZmZpeCB9PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IHByb3BzLmlzU2VsZWN0ZWQgJiYgPD5cblx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9XCJjYWxjX2Zvcm11bGFcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmNhbGNfZm9ybXVsYSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgY2FsY19mb3JtdWxhOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8Lz4gfVxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+LFxuXHRdO1xufSIsImltcG9ydCBFZGl0Q2FsY3VsYXRlZCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvY2FsY3VsYXRlZC1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0NhbGN1bGF0ZWQgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRkZXNjcmlwdGlvbjogX18oICdDYWxjdWxhdGUgYW5kIGRpc3BsYXkgeW91ciBudW1iZXIgdmFsdWVzJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBFZGl0Q2FsY3VsYXRlZCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnQ2FsY3VsYXRlZCBGaWVsZCcsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59O1xuIiwiaW1wb3J0IHsgU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2tcIjtcblxuY29uc3Qge1xuXHRBZHZhbmNlZEZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0VG9vbEJhckZpZWxkcyxcblx0RmllbGRDb250cm9sLFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCBsb2NhbGl6ZWQgPSB3aW5kb3cuSmV0Rm9ybUNoZWNrYm94RmllbGREYXRhO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveEVkaXQoIHByb3BzICkge1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3Qge1xuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRpc1NlbGVjdGVkLFxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cblx0fSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdKZXRGb3JtLXRvb2xiYXInICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tZ2VuZXJhbCcgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1hZHZhbmNlZCcgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1NlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlcicgKSB9XG5cdFx0XHRcdHNjcmlwdERhdGE9eyBsb2NhbGl6ZWQgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdFx0XHR0eXBlPSdjdXN0b21fc2V0dGluZ3MnXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cblx0XHQ8L2Rpdj5cblx0XTtcbn0iLCJpbXBvcnQgQ2hlY2tib3hFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9jaGVja2JveC1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0NoZWNrYm94IEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogQ2hlY2tib3hFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYmxvY2tOYW1lJywgJ2F0dHJIZWxwJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bGFiZWw6ICdDaGVja2JveCBGaWVsZCcsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdFx0ZmllbGRfb3B0aW9uczogW1xuXHRcdFx0XHR7IGxhYmVsOiAnRmlyc3QgT3B0aW9uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRcdHsgbGFiZWw6ICdTZWNvbmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRcdHsgbGFiZWw6ICdUaGlyZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdF1cblx0XHR9LFxuXHR9LFxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0XHQgIEFkdmFuY2VkRmllbGRzLFxuXHRcdCAgR2VuZXJhbEZpZWxkcyxcblx0XHQgIFRvb2xCYXJGaWVsZHMsXG5cdFx0ICBGaWVsZFdyYXBwZXIsXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIF9fZXhwZXJpbWVudGFsSW5wdXRDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5cbmNvbnN0IHtcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmxldCB7IElucHV0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XG59XG5cbmZ1bmN0aW9uIENvbG9yUGlja2VyRWRpdCggcHJvcHMgKSB7XG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBpc1NlbGVjdGVkLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFNldHRpbmdzV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PElucHV0Q29udHJvbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCdcblx0XHRcdFx0XHR0eXBlPSdjb2xvcidcblx0XHRcdFx0XHRrZXk9eyAnY29sb3JfcGlja2VyX3BsYWNlX2hvbGRlcl9ibG9jaycgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+LFxuXHRdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlckVkaXQ7IiwiaW1wb3J0IEJsb2NrRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvY29sb3ItcGlja2VyLWZpZWxkL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnQ29sb3IgUGlja2VyIEZpZWxkJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBCbG9ja0VkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdibG9ja05hbWUnLCAnYXR0ckhlbHAnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ0NvbG9yIFBpY2tlciBGaWVsZCcsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRcdCAgUmVwZWF0ZXJXaXRoU3RhdGUsXG5cdFx0ICBBY3Rpb25Nb2RhbCxcblx0XHQgIEZpZWxkV2l0aFByZXNldCxcblx0XHQgIER5bmFtaWNQcmVzZXQsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0XHQgIGdldElubmVyQmxvY2tzLFxuXHRcdCAgVG9vbHMsXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRcdCAgQmxvY2tDb250cm9scyxcblx0XHQgIElubmVyQmxvY2tzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgQnV0dG9uLFxuXHRcdCAgVG9vbGJhckdyb3VwLFxuXHRcdCAgVGV4dGFyZWFDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmRpdGlvbmFsQmxvY2tFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcblx0XHRcdCAgYXR0cmlidXRlcyxcblx0XHRcdCAgY2xpZW50SWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0VG9vbHMuYWRkQ29uZGl0aW9uRm9yQ29uZFR5cGUoICdpc1NpbmdsZUZpZWxkJywgKCkgPT4ge1xuXHRcdHJldHVybiAxID09PSBnZXRJbm5lckJsb2NrcyggY2xpZW50SWQgKS5sZW5ndGg7XG5cdH0gKVxuXG5cdGNvbnN0IGdldENvbmRpdGlvblR5cGVzID0gVG9vbHMucGFyc2VDb25kaXRpb25zRnVuYyggb3B0aW9ucy5jb25kaXRpb25UeXBlcyApO1xuXHRjb25zdCBbIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcblxuXHRyZXR1cm4gW1xuXHRcdDxCbG9ja0NvbnRyb2xzIGtleT17IHVuaXFLZXkoICdCbG9ja0NvbnRyb2xzJyApIH0+XG5cdFx0XHQ8VG9vbGJhckdyb3VwIGtleT17IHVuaXFLZXkoICdUb29sYmFyR3JvdXAnICkgfT5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdyYW5kb21pemUnICkgfVxuXHRcdFx0XHRcdGlzVGVydGlhcnlcblx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0aWNvbj0ncmFuZG9taXplJ1xuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TW9kYWwoIHRydWUgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1Rvb2xiYXJHcm91cD5cblx0XHQ8L0Jsb2NrQ29udHJvbHM+LFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC1mb3JtLWJ1aWxkZXJfX2NvbmRpdGlvbmFsJz5cblx0XHRcdFx0PElubmVyQmxvY2tzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2NvbmRpdGlvbmFsLWZpZWxkcycgKSB9XG5cdFx0XHRcdFx0cmVuZGVyQXBwZW5kZXI9eyAoKSA9PiA8SW5uZXJCbG9ja3MuQnV0dG9uQmxvY2tBcHBlbmRlciBrZXk9eyB1bmlxS2V5KCAnQnV0dG9uQmxvY2tBcHBlbmRlcicgKSB9Lz4gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+LFxuXHRcdHNob3dNb2RhbCAmJiA8QWN0aW9uTW9kYWxcblx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IHNldFNob3dNb2RhbCggZmFsc2UgKSB9XG5cdFx0XHR0aXRsZT1cIkNvbmRpdGlvbmFsIExvZ2ljXCJcblx0XHQ+XG5cdFx0XHR7ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxSZXBlYXRlcldpdGhTdGF0ZVxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUmVwZWF0ZXJXaXRoU3RhdGUnICkgfVxuXHRcdFx0XHRpdGVtcz17IGF0dHJpYnV0ZXMuY29uZGl0aW9ucyB9XG5cdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cblx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxuXHRcdFx0XHRuZXdJdGVtPXsgb3B0aW9ucy5jb25kaXRpb24gfVxuXHRcdFx0XHRvblNhdmVJdGVtcz17IGNvbmRpdGlvbnMgPT4gc2V0QXR0cmlidXRlcyggeyBjb25kaXRpb25zIH0gKSB9XG5cdFx0XHRcdGFkZE5ld0J1dHRvbkxhYmVsPXsgX18oIFwiTmV3IENvbmRpdGlvblwiICkgfVxuXHRcdFx0XHRoZWxwPXsge1xuXHRcdFx0XHRcdGhlbHBWaXNpYmxlOiBjb25kaXRpb25zID0+IGNvbmRpdGlvbnMubGVuZ3RoID4gMSxcblx0XHRcdFx0XHRoZWxwU291cmNlOiB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuaGVscEZvclJlcGVhdGVycyxcblx0XHRcdFx0XHRoZWxwS2V5OiAnY29uZGl0aW9uYWxfYmxvY2snLFxuXHRcdFx0XHR9IH1cblx0XHRcdD5cblx0XHRcdFx0eyAoIHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gKSA9PiA8PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC10eXBlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsPVwiVHlwZVwiXG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnR5cGUgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGdldENvbmRpdGlvblR5cGVzIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB0eXBlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC1maWVsZCcgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIkZpZWxkXCJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZmllbGQgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGZpZWxkOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0Q29udHJvbC1vcGVyYXRvcicgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbD1cIk9wZXJhdG9yXCJcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ub3BlcmF0b3IgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG9wdGlvbnMuY29uZGl0aW9uT3BlcmF0b3JzIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBvcGVyYXRvcjogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8RmllbGRXaXRoUHJlc2V0XG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXaXRoUHJlc2V0LXZhbHVlX3RvX2NvbXBhcmUnICkgfVxuXHRcdFx0XHRcdFx0YmFzZUNvbnRyb2xQcm9wcz17IHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiVmFsdWUgdG8gQ29tcGFyZVwiLFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRNb2RhbEVkaXRvcj17ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IDxEeW5hbWljUHJlc2V0XG5cdFx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdEeW5hbWljUHJlc2V0LXZhbHVlX3RvX2NvbXBhcmUnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cblx0XHRcdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxuXHRcdFx0XHRcdFx0XHRvblNhdmVQcmVzZXQ9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdG9uVW5Nb3VudD17IG9uUmVxdWVzdENsb3NlIH1cblx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHRcdHRyaWdnZXJDbGFzc2VzPXsgWyAndHJpZ2dlcl9fdGV4dGFyZWEnIF0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1RleHRhcmVhQ29udHJvbC12YWx1ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtY29udHJvbC1jbGVhciBqZXQtdXNlci1maWVsZHMtbWFwX19saXN0JyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0udmFsdWUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyB2YWx1ZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+XG5cdFx0XHRcdFx0eyAnc2V0X3ZhbHVlJyA9PT0gY3VycmVudEl0ZW0udHlwZSAmJiA8RmllbGRXaXRoUHJlc2V0XG5cdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXaXRoUHJlc2V0LXZhbHVlX3RvX3NldCcgKSB9XG5cdFx0XHRcdFx0XHRiYXNlQ29udHJvbFByb3BzPXsge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdWYWx1ZSB0byBTZXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0XHRcdFx0aGVscDogX18oICdTZXBhcmF0ZSB2YWx1ZXMgd2l0aCBjb21tYXMnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8RHluYW1pY1ByZXNldFxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRHluYW1pY1ByZXNldC12YWx1ZV90b19zZXQnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnNldF92YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cblx0XHRcdFx0XHRcdFx0b25TYXZlUHJlc2V0PXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IHNldF92YWx1ZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxuXHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0YXJlYScgXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnVGV4dGFyZWFDb250cm9sLXNldF92YWx1ZScgKSB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtY29udHJvbC1jbGVhciBqZXQtdXNlci1maWVsZHMtbWFwX19saXN0JyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uc2V0X3ZhbHVlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgc2V0X3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD4gfVxuXHRcdFx0XHQ8Lz4gfVxuXHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT4gfVxuXHRcdDwvQWN0aW9uTW9kYWw+LFxuXHRdO1xufSIsImltcG9ydCBDb25kaXRpb25hbEJsb2NrRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvY29uZGl0aW9uYWwtYmxvY2svYmxvY2suanNvblwiO1xuaW1wb3J0IENvbmRpdGlvbmFsU2F2ZSBmcm9tIFwiLi9zYXZlXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnQ29uZGl0aW9uYWwgQmxvY2snICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBDb25kaXRpb25hbEJsb2NrRWRpdCxcblx0c2F2ZTogQ29uZGl0aW9uYWxTYXZlLFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0bGFiZWw6ICdUaXRsZSdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2pldC1mb3Jtcy9yYWRpby1maWVsZCcsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRsYWJlbDogJ0l0ZW0gUmFkaW8nLFxuXHRcdFx0XHRcdGZpZWxkX29wdGlvbnM6IFtcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdGaXJzdCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdTZWNvbmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiAnVGhpcmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9LFxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xuXHRjb25kaXRpb246IHtcblx0XHR0eXBlOiAnaGlkZScsXG5cdFx0ZmllbGQ6ICcnLFxuXHRcdG9wZXJhdG9yOiAnJyxcblx0XHR2YWx1ZTogJycsXG5cdFx0c2V0X3ZhbHVlOiAnJyxcblx0fSxcblx0Y29uZGl0aW9uVHlwZXM6IFtcblx0XHR7IGxhYmVsOiAnLS0nLCB2YWx1ZTogJycgfSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ0hpZGUgdGhpcyBmaWVsZCBpZi4uLicsXG5cdFx0XHR2YWx1ZTogJ2hpZGUnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ1Nob3cgdGhpcyBmaWVsZCBpZi4uLicsXG5cdFx0XHR2YWx1ZTogJ3Nob3cnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRsYWJlbDogJ1NldCB2YWx1ZSBmb3IgdGhpcyBmaWVsZCBpZi4uLicsXG5cdFx0XHR2YWx1ZTogJ3NldF92YWx1ZScsXG5cdFx0XHRjb25kaXRpb246ICdpc1NpbmdsZUZpZWxkJyxcblx0XHR9LFxuXHRdLFxuXHRjb25kaXRpb25PcGVyYXRvcnM6IFtcblx0XHR7IGxhYmVsOiAnLS0nLCB2YWx1ZTogJycgfSxcblx0XHR7IGxhYmVsOiAnRXF1YWwnLCB2YWx1ZTogJ2VxdWFsJyB9LFxuXHRcdHsgbGFiZWw6ICdHcmVhdGVyIHRoYW4nLCB2YWx1ZTogJ2dyZWF0ZXInIH0sXG5cdFx0eyBsYWJlbDogJ0xlc3MgdGhhbicsIHZhbHVlOiAnbGVzcycgfSxcblx0XHR7IGxhYmVsOiAnQmV0d2VlbicsIHZhbHVlOiAnYmV0d2VlbicgfSxcblx0XHR7IGxhYmVsOiAnSW4gdGhlIGxpc3QnLCB2YWx1ZTogJ29uZV9vZicgfSxcblx0XHR7IGxhYmVsOiAnQ29udGFpbiB0ZXh0JywgdmFsdWU6ICdjb250YWluJyB9LFxuXHRdLFxufTsiLCJjb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25kaXRpb25hbFNhdmUoIHByb3BzICkge1xuXHRyZXR1cm4gPElubmVyQmxvY2tzLkNvbnRlbnQvPjtcbn0iLCJjb25zdCB7XG5cdEJ1dHRvbixcblx0VGV4dENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY2xhc3MgSmV0RGVmYXVsdE1ldGFDb250cm9sIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMuYWRkTmV3T3B0aW9uID0gdGhpcy5hZGROZXdPcHRpb24uYmluZCggdGhpcyApO1xuXHR9XG5cblx0Z2V0RGVmYXVsdE1ldGEoKSB7XG5cdFx0aWYgKCAhIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLnByb3BzLmRlZmF1bHRNZXRhICk7XG5cdH1cblxuXG5cdGFkZE5ld09wdGlvbigpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuZ2V0RGVmYXVsdE1ldGEoKTtcblxuXHRcdGl0ZW1zLnB1c2goIHtcblx0XHRcdGtleTogJycsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcblx0fVxuXG5cdHJlbW92ZU9wdGlvbiggaW5kZXggKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLmdldERlZmF1bHRNZXRhKCk7XG5cdFx0aXRlbXMuc3BsaWNlKCBpbmRleCwgMSApO1xuXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSggaXRlbXMgKTtcblx0fVxuXG5cdG9uQ2hhbmdlVmFsdWUoIHsgdmFsdWUsIG5hbWUsIGlkIH0gKSB7XG5cblx0XHRjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oIHRoaXMucHJvcHMuZGVmYXVsdE1ldGEgKTtcblx0XHRpdGVtc1sgaWQgXVsgbmFtZSBdID0gdmFsdWU7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCBpdGVtcyApO1xuXHR9XG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3RcIlxuXHRcdD5cblx0XHRcdHsgdGhpcy5nZXREZWZhdWx0TWV0YSgpLm1hcCggKCBjdXJyZW50SXRlbSwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdHJldHVybiA8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiamV0LXVzZXItbWV0YV9fcm93XCJcblx0XHRcdFx0XHRrZXk9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlci1pdGVtLScgKyBpbmRleCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0ZXItaXRlbS1jb2x1bW4gamV0LW1hcmdpbi1ib3R0b20td3JhcHBlcic+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PSdtZXRhX2tleSdcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgS2V5JyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5rZXkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVZhbHVlKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAna2V5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGtleT0nbWV0YV92YWx1ZSdcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01ldGEgVmFsdWUnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLnZhbHVlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMub25DaGFuZ2VWYWx1ZSgge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ3ZhbHVlJyxcblx0XHRcdFx0XHRcdFx0XHRcdGlkOiBpbmRleFxuXHRcdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRlci1pdGVtLWNvbHVtbic+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGljb249XCJkaXNtaXNzXCJcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJSZW1vdmVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gdGhpcy5yZW1vdmVPcHRpb24oIGluZGV4ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9ICkgfVxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRjbGFzc05hbWU9J2J1dHRvbi1hZGQtb3B0aW9uJ1xuXHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRvbkNsaWNrPXsgdGhpcy5hZGROZXdPcHRpb24gfVxuXHRcdFx0PlxuXHRcdFx0XHR7IF9fKCAnQWRkIE5ldyBPcHRpb24nICkgfVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+O1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEpldERlZmF1bHRNZXRhQ29udHJvbDsiLCJjb25zdCB7XG5cdFx0ICBUb29sQmFyRmllbGRzLFxuXHRcdCAgR2VuZXJhbEZpZWxkcyxcblx0XHQgIEFkdmFuY2VkRmllbGRzLFxuXHRcdCAgRmllbGRXcmFwcGVyLFxuXHRcdCAgRmllbGRTZXR0aW5nc1dyYXBwZXIsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUVkaXQoIHByb3BzICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgYXR0cmlidXRlcyxcblx0XHRcdCAgaXNTZWxlY3RlZCxcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGJsb2NrTmFtZSwgYXR0ckhlbHAgfSxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRyZXR1cm4gW1xuXHRcdDxUb29sQmFyRmllbGRzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS10b29sYmFyJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9J2lzX3RpbWVzdGFtcCdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSXMgVGltZXN0YW1wJyApIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5pc190aW1lc3RhbXAgfVxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2lzX3RpbWVzdGFtcCcgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBpc190aW1lc3RhbXA6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFNldHRpbmdzV3JhcHBlcj5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0a2V5PXsgYHBsYWNlX2hvbGRlcl9ibG9ja18keyBibG9ja05hbWUgfWAgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgJ0lucHV0IHR5cGU9XCJkYXRlXCInIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2Pixcblx0XTtcbn0iLCJpbXBvcnQgRGF0ZUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL2RhdGUtZmllbGQvYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0RhdGUgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBEYXRlRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnRGF0ZSBGaWVsZCcsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0VG9vbEJhckZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkV3JhcHBlcixcblx0RmllbGRTZXR0aW5nc1dyYXBwZXIsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHR1c2VCbG9ja1Byb3BzLFxufSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFRleHRhcmVhQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0UGFuZWxCb2R5LFxufSA9IHdwLmNvbXBvbmVudHM7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWVFZGl0KCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGlzU2VsZWN0ZWQsXG5cdFx0ZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH1cblx0fSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0pldEZvcm0tZ2VuZXJhbCcgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlciB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdpc190aW1lc3RhbXAnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0lzIFRpbWVzdGFtcCcgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5pc190aW1lc3RhbXAgfVxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnaXNfdGltZXN0YW1wJyApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGlzX3RpbWVzdGFtcDogQm9vbGVhbiggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxuXHRcdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSmV0Rm9ybS1hZHZhbmNlZCcgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdCksXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyAnSW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCInIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2PlxuXHRdO1xufSIsImltcG9ydCBEYXRlVGltZUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL2RhdGV0aW1lLWZpZWxkL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdEYXRldGltZSBmaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IERhdGVUaW1lRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnRGF0ZXRpbWUgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCB7XG5cdFx0ICBHZW5lcmFsRmllbGRzLFxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcblx0XHQgIHVzZUJsb2NrUHJvcHMsXG5cdFx0ICBSaWNoVGV4dCxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgVGV4dGFyZWFDb250cm9sLFxuXHRcdCAgVGV4dENvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBCdXR0b24sXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1CcmVha0VkaXQoIHByb3BzICkge1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfSxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRyZXR1cm4gW1xuXHRcdHByb3BzLmlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0YXV0b0NvbXBsZXRlTGFiZWw9eyBmYWxzZSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlciB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdMYWJlbCBvZiBwcm9ncmVzcycgKSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsX3Byb2dyZXNzIH1cblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdsYWJlbF9wcm9ncmVzcycgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBsYWJlbF9wcm9ncmVzczogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0a2V5PVwicGFnZV9icmVha19kaXNhYmxlZFwiXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnBhZ2VfYnJlYWtfZGlzYWJsZWQgfVxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdEaXNhYmxlZCBtZXNzYWdlJyApIH1cblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdwYWdlX2JyZWFrX2Rpc2FibGVkJyApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHBhZ2VfYnJlYWtfZGlzYWJsZWQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fbmV4dC1wYWdlLXdyYXAnIH0+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdGtleT1cIm5leHRfcGFnZV9idXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX25leHQtcGFnZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdOZXh0Li4uJ1xuXHRcdFx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubGFiZWwgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBsYWJlbCA9PiBzZXRBdHRyaWJ1dGVzKCB7IGxhYmVsIH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0eyBhdHRyaWJ1dGVzLmFkZF9wcmV2ICYmIDxCdXR0b25cblx0XHRcdFx0XHRpc1NlY29uZGFyeVxuXHRcdFx0XHRcdGtleT1cInByZXZfcGFnZV9idXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1mb3JtLWJ1aWxkZXJfX3ByZXYtcGFnZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdQcmV2Li4uJ1xuXHRcdFx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMucHJldl9sYWJlbCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHByZXZfbGFiZWwgPT4gc2V0QXR0cmlidXRlcyggeyBwcmV2X2xhYmVsIH0gKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CdXR0b24+IH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2Pixcblx0XTtcblxufSIsImltcG9ydCBGb3JtQnJlYWtFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9mb3JtLWJyZWFrLWZpZWxkL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdGb3JtIEJyZWFrIEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogRm9ybUJyZWFrRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnTmV4dCBQYWdlJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImltcG9ydCAqIGFzIGNhbGN1bGF0ZWQgZnJvbSAnLi9jYWxjdWxhdGVkLWZpZWxkJztcbmltcG9ydCAqIGFzIGNoZWNrYm94IGZyb20gJy4vY2hlY2tib3gtZmllbGQnO1xuaW1wb3J0ICogYXMgY29uZGl0aW9uYWwgZnJvbSAnLi9jb25kaXRpb25hbC1ibG9jayc7XG5pbXBvcnQgKiBhcyBkYXRlIGZyb20gJy4vZGF0ZS1maWVsZCc7XG5pbXBvcnQgKiBhcyBkYXRldGltZSBmcm9tICcuL2RhdGV0aW1lLWZpZWxkJztcbmltcG9ydCAqIGFzIGZvcm1CcmVhayBmcm9tICcuL2Zvcm0tYnJlYWstZmllbGQnO1xuaW1wb3J0ICogYXMgZ3JvdXBCcmVhayBmcm9tICcuL2dyb3VwLWJyZWFrLWZpZWxkJztcbmltcG9ydCAqIGFzIGhlYWRpbmcgZnJvbSAnLi9oZWFkaW5nLWZpZWxkJztcbmltcG9ydCAqIGFzIGhpZGRlbiBmcm9tICcuL2hpZGRlbi1maWVsZCc7XG5pbXBvcnQgKiBhcyBtZWRpYSBmcm9tICcuL21lZGlhLWZpZWxkJztcbmltcG9ydCAqIGFzIG51bWJlciBmcm9tICcuL251bWJlci1maWVsZCc7XG5pbXBvcnQgKiBhcyByYWRpbyBmcm9tICcuL3JhZGlvLWZpZWxkJztcbmltcG9ydCAqIGFzIHJhbmdlIGZyb20gJy4vcmFuZ2UtZmllbGQnO1xuaW1wb3J0ICogYXMgcmVwZWF0ZXIgZnJvbSAnLi9yZXBlYXRlci1maWVsZCc7XG5pbXBvcnQgKiBhcyBzZWxlY3QgZnJvbSAnLi9zZWxlY3QtZmllbGQnO1xuaW1wb3J0ICogYXMgc3VibWl0IGZyb20gJy4vc3VibWl0LWZpZWxkJztcbmltcG9ydCAqIGFzIHRleHQgZnJvbSAnLi90ZXh0LWZpZWxkJztcbmltcG9ydCAqIGFzIHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEtZmllbGQnO1xuaW1wb3J0ICogYXMgdGltZSBmcm9tICcuL3RpbWUtZmllbGQnO1xuaW1wb3J0ICogYXMgd3lzaXd5ZyBmcm9tICcuL3d5c2l3eWctZmllbGQnO1xuaW1wb3J0ICogYXMgY29sb3JQaWNrZXIgZnJvbSAnLi9jb2xvci1waWNrZXItZmllbGQnO1xuaW1wb3J0ICogYXMgd3JhcHBlcnMgZnJvbSBcIi4vYmxvY2std3JhcHBlcnNcIjtcblxuY29uc3Qge1xuXHRcdCAgcmVnaXN0ZXJCbG9ja1R5cGUsXG5cdCAgfSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRcdCAgYXBwbHlGaWx0ZXJzLFxuXHQgIH0gPSB3cC5ob29rcztcblxuY29uc3QgZmllbGRzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcycsIFtcblx0Y2FsY3VsYXRlZCxcblx0Y2hlY2tib3gsXG5cdGNvbmRpdGlvbmFsLFxuXHRkYXRldGltZSxcblx0ZGF0ZSxcblx0Zm9ybUJyZWFrLFxuXHRncm91cEJyZWFrLFxuXHRoZWFkaW5nLFxuXHRoaWRkZW4sXG5cdG1lZGlhLFxuXHRudW1iZXIsXG5cdHJhZGlvLFxuXHRyYW5nZSxcblx0cmVwZWF0ZXIsXG5cdHNlbGVjdCxcblx0c3VibWl0LFxuXHR0ZXh0LFxuXHR0ZXh0YXJlYSxcblx0dGltZSxcblx0d3lzaXd5Zyxcblx0Y29sb3JQaWNrZXIsXG5dICk7XG5cbmNvbnN0IHJlZ2lzdGVyRm9ybUZpZWxkID0gYmxvY2sgPT4ge1xuXHRpZiAoICEgYmxvY2sgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHsgbWV0YWRhdGEsIHNldHRpbmdzLCBuYW1lIH0gPSBibG9jaztcblxuXHRzZXR0aW5ncy5lZGl0ID0gd3JhcHBlcnMud2l0aEN1c3RvbVByb3BzKCBibG9jayApO1xuXG5cdHJlZ2lzdGVyQmxvY2tUeXBlKCBuYW1lLCB7XG5cdFx0Li4ubWV0YWRhdGEsXG5cdFx0Li4uc2V0dGluZ3MsXG5cdH0gKTtcbn07XG5cbmZ1bmN0aW9uIHNvcnRCbG9ja3MoIHsgc2V0dGluZ3M6IHsgdGl0bGU6IGEgfSB9LFxuXHRcdFx0XHRcdCB7IHNldHRpbmdzOiB7IHRpdGxlOiBiIH0gfSApIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYS5sb2NhbGVDb21wYXJlKCBiICk7XG5cdH0gY2F0Y2ggKCBlICkge1xuXHRcdHJldHVybiAwO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyRm9ybUZpZWxkcyggYmxvY2tzID0gZmllbGRzICkge1xuXHRibG9ja3Muc29ydCggc29ydEJsb2NrcyApO1xuXHRibG9ja3MuZm9yRWFjaCggYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZ2lzdGVyLmZpZWxkcy5oYW5kbGVyJywgcmVnaXN0ZXJGb3JtRmllbGQgKSApO1xufVxuIiwiY29uc3Qge1xuXHRBZHZhbmNlZEZpZWxkcyxcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHNcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyb3VwQnJlYWtFZGl0KCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0aXNTZWxlY3RlZCxcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSB9XG5cdH0gPSBwcm9wcztcblxuXHRyZXR1cm4gW1xuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzIGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9PlxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZ3JvdXAtYnJlYWsnIH0+XG5cdFx0XHRcdDxzcGFuPnsgX18oICdHUk9VUCBCUkVBSycgKSB9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdF07XG59IiwiaW1wb3J0IEdyb3VwQnJlYWtFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9ncm91cC1icmVhay1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnR3JvdXAgQnJlYWsgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBHcm91cEJyZWFrRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JyBdLFxuXHRleGFtcGxlOiB7fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkV3JhcHBlcixcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGluZ0VkaXQoIHByb3BzICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IHtcblx0XHRpc1NlbGVjdGVkLFxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cblx0fSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH0+XG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR2YWx1ZUlmRW1wdHlMYWJlbD17ICdIZWFkaW5nJyB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0XTtcbn0iLCJpbXBvcnQgSGVhZGluZ0VkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL2hlYWRpbmctZmllbGQvYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0hlYWRpbmcgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBIZWFkaW5nRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnSGVhZGluZyBGaWVsZCcsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IE1FRElBID0gJ2pldC1mb3Jtcy9tZWRpYS1maWVsZCc7XG5jb25zdCBGT1JNX0JSRUFLID0gJ2pldC1mb3Jtcy9mb3JtLWJyZWFrLWZpZWxkJztcbmNvbnN0IERBVEUgPSAnamV0LWZvcm1zL2RhdGUtZmllbGQnO1xuY29uc3QgREFURVRJTUUgPSAnamV0LWZvcm1zL2RhdGV0aW1lLWZpZWxkJztcbmNvbnN0IFJBRElPID0gJ2pldC1mb3Jtcy9yYWRpby1maWVsZCc7XG5jb25zdCBDSEVDS0JPWCA9ICdqZXQtZm9ybXMvY2hlY2tib3gtZmllbGQnO1xuY29uc3QgU0VMRUNUID0gJ2pldC1mb3Jtcy9zZWxlY3QtZmllbGQnO1xuY29uc3QgUkFOR0UgPSAnamV0LWZvcm1zL3JhbmdlLWZpZWxkJztcbmNvbnN0IFJFUEVBVEVSID0gJ2pldC1mb3Jtcy9yZXBlYXRlci1maWVsZCc7XG5jb25zdCBURVhUID0gJ2pldC1mb3Jtcy90ZXh0LWZpZWxkJztcbmNvbnN0IFRJTUUgPSAnamV0LWZvcm1zL3RpbWUtZmllbGQnO1xuXG5cbmNvbnN0IG1lc3NhZ2VzQ29uZmlnID0gW1xuXHR7XG5cdFx0YXR0cmlidXRlOiAnaXNfdGltZXN0YW1wJyxcblx0XHR0bzogWyBEQVRFLCBEQVRFVElNRSBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgQ2hlY2sgdGhpcyBpZiB5b3Ugd2FudCB0byBzZW5kIHZhbHVlIG9mIHRoaXMgXG5cdFx0ZmllbGQgYXMgdGltZXN0YW1wIGluc3RlYWQgb2YgcGxhaW4gZGF0ZXRpbWVgIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2RlZmF1bHQnLFxuXHRcdHRvOiBbIERBVEUgXSxcblx0XHRtZXNzYWdlOiBfXyggJ1BsYWluIGRhdGUgc2hvdWxkIGJlIGluIHl5eXktbW0tZGQgZm9ybWF0JyApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdkZWZhdWx0Jyxcblx0XHR0bzogWyBEQVRFVElNRSBdLFxuXHRcdG1lc3NhZ2U6IF9fKCAnUGxhaW4gZGF0ZXRpbWUgc2hvdWxkIGJlIGluIHl5eXktTU0tZGRUaGg6bW0gZm9ybWF0JyApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdwYWdlX2JyZWFrX2Rpc2FibGVkJyxcblx0XHR0bzogWyBGT1JNX0JSRUFLIF0sXG5cdFx0bWVzc2FnZTogX18oIGBUZXh0IHRvIHNob3cgaWYgbmV4dCBwYWdlIGJ1dHRvbiBpcyBkaXNhYmxlZC4gXG5cdFx0Rm9yIGV4YW1wbGUgLSBcIkZpbGwgcmVxdWlyZWQgZmllbGRzXCIgZXRjLmAgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnaW5zZXJ0X2F0dGFjaG1lbnQnLFxuXHRcdHRvOiBbIE1FRElBIF0sXG5cdFx0bWVzc2FnZTogX18oIGBJZiBjaGVja2VkIG5ldyBhdHRhY2htZW50IHdpbGwgYmUgaW5zZXJ0ZWQgZm9yIHVwbG9hZGVkIGZpbGUuIFxuXHRcdE5vdGU6IHdvcmsgb25seSBmb3IgbG9nZ2VkLWluIHVzZXJzIWAgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnbWF4X2ZpbGVzJyxcblx0XHR0bzogWyBNRURJQSBdLFxuXHRcdG1lc3NhZ2U6IF9fKCAnSWYgbm90IHNldCBhbGxvdyB0byB1cGxvYWQgMSBmaWxlJyApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdtYXhfc2l6ZScsXG5cdFx0dG86IFsgTUVESUEgXSxcblx0XHRtZXNzYWdlOiBfXyggJ01iJyApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICdhbGxvd2VkX21pbWVzJyxcblx0XHR0bzogWyBNRURJQSBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgSWYgbm8gTUlNRSB0eXBlIHNlbGVjdGVkIHdpbGwgYWxsb3cgYWxsIHR5cGVzLiBcblx0XHRIb2xkIGRvd24gdGhlIEN0cmwgKHdpbmRvd3MpIC8gQ29tbWFuZCAoTWFjKSBidXR0b24gdG8gc2VsZWN0IG11bHRpcGxlIG9wdGlvbnMuYCApXG5cdH0sXG5cdHtcblx0XHRhdHRyaWJ1dGU6ICd2YWx1ZV9mcm9tX21ldGEnLFxuXHRcdHRvOiBbIFJBRElPLCBDSEVDS0JPWCwgU0VMRUNUIF0sXG5cdFx0bWVzc2FnZTogX18oIGBCeSBkZWZhdWx0IHBvc3QvdGVybSBJRCBpcyB1c2VkIGFzIHZhbHVlLiBIZXJlIHlvdSBjYW4gXG5cdFx0c2V0IG1ldGEgZmllbGQgbmFtZSB0byB1c2UgaXRzIHZhbHVlIGFzIGZvcm0gZmllbGQgdmFsdWVgIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknLFxuXHRcdHRvOiBbIFJBRElPLCBDSEVDS0JPWCwgU0VMRUNUIF0sXG5cdFx0bWVzc2FnZTogX18oIGBIZXJlIHlvdSBjYW4gc2V0IG1ldGEgZmllbGQgbmFtZSB0byB1c2UgaXRzIHZhbHVlIFxuXHRcdGFzIGNhbGN1bGF0ZWQgdmFsdWUgZm9yIGN1cnJlbnQgZm9ybSBmaWVsZGAgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnZ2VuZXJhdG9yX2ZpZWxkJyxcblx0XHR0bzogWyBSQURJTywgQ0hFQ0tCT1gsIFNFTEVDVCBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgRm9yIE51bWJlcnMgcmFuZ2UgZ2VuZXJhdG9yIHNldCBmaWVsZCB3aXRoIG1heCByYW5nZSB2YWx1ZWAgKSxcblx0XHRjb25kaXRpb25zOiB7XG5cdFx0XHRnZW5lcmF0b3JfZnVuY3Rpb246ICdudW1fcmFuZ2UnXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnc3dpdGNoX29uX2NoYW5nZScsXG5cdFx0dG86IFsgU0VMRUNUIF0sXG5cdFx0bWVzc2FnZTogX18oIGBDaGVjayB0aGlzIHRvIHN3aXRjaCBwYWdlIHRvIG5leHQgb24gY3VycmVudCB2YWx1ZSBjaGFuZ2VgIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ3ByZWZpeF9zdWZmaXgnLFxuXHRcdHRvOiBbIFJBTkdFIF0sXG5cdFx0bWVzc2FnZTogX18oICdGb3Igc3BhY2UgYmVmb3JlIG9yIGFmdGVyIHRleHQgdXNlOiAmbmJzcDsnIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2NhbGNfaGlkZGVuJyxcblx0XHR0bzogWyBSRVBFQVRFUiBdLFxuXHRcdG1lc3NhZ2U6IF9fKCAnQ2hlY2sgdGhpcyB0byBoaWRlIGNhbGN1bGF0ZWQgZmllbGQnIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2lucHV0X21hc2tfZGVmYXVsdCcsXG5cdFx0dG86IFsgVEVYVCBdLFxuXHRcdG1lc3NhZ2U6IF9fKCBgRXhhbXBsZXM6ICg5OTkpIDk5OS05OTk5IC0gc3RhdGljIG1hc2ssIDktYXsxLDN9OXsxLDN9IC0gbWFzayB3aXRoIGR5bmFtaWMgc3ludGF4IFxuXHRcdERlZmF1bHQgbWFza2luZyBkZWZpbml0aW9uczogOSAtIG51bWVyaWMsIGEgLSBhbHBoYWJldGljYWwsICogLSBhbHBoYW51bWVyaWNgIClcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2lucHV0X21hc2tfZGF0ZXRpbWVfbGluaycsXG5cdFx0dG86IFsgVEVYVCBdLFxuXHRcdG1lc3NhZ2U6IGBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFzay9ibG9iLzUueC9SRUFETUVfZGF0ZS5tZGBcblx0fSxcblx0e1xuXHRcdGF0dHJpYnV0ZTogJ2RlZmF1bHQnLFxuXHRcdHRvOiBbIFRJTUUgXSxcblx0XHRtZXNzYWdlOiBfXyggJ1BsYWluIHRpbWUgc2hvdWxkIGJlIGluIGhoOm1tOnNzIGZvcm1hdCcgKVxuXHR9LFxuXHR7XG5cdFx0YXR0cmlidXRlOiAnbGFiZWxfcHJvZ3Jlc3MnLFxuXHRcdHRvOiBbIEZPUk1fQlJFQUsgXSxcblx0XHRtZXNzYWdlOiBfXyggYFRvIHNldC9jaGFuZ2UgYSBsYXN0IHByb2dyZXNzIG5hbWUgYWRkIGEgRm9ybSBCcmVhayBGaWVsZCBhdCB0aGUgdmVyeSBlbmQgb2YgdGhlIGZvcm0uYCApXG5cdH0sXG5dO1xuXG5cbmV4cG9ydCB7IG1lc3NhZ2VzQ29uZmlnIH07IiwiaW1wb3J0IHsgaGlkZGVuVmFsdWVzIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBHZW5lcmFsRmllbGRzLFxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IGdldENvbnZlcnRlZE5hbWUgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxuXHRcdCAgUmljaFRleHQsXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIFBhbmVsQm9keSxcblx0XHQgIENhcmQsXG5cdFx0ICBDYXJkSGVhZGVyLFxuXHRcdCAgQ2FyZEJvZHksXG5cdFx0ICBCYXNlQ29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlkZGVuRWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBpc1NlbGVjdGVkLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3Qgc2V0RHluYW1pY05hbWUgPSBuZXdWYWx1ZSA9PiB7XG5cdFx0aWYgKCBuZXdWYWx1ZVxuXHRcdFx0JiYgKCAhIGF0dHJpYnV0ZXMubmFtZSB8fCAnaGlkZGVuX2ZpZWxkX25hbWUnID09PSBhdHRyaWJ1dGVzLm5hbWUgKVxuXHRcdCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyggeyBuYW1lOiBuZXdWYWx1ZSB9IClcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2hlY2tGaWVsZFZhbHVlSW5wdXQgPSAoKSA9PiA8PlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9J2ZpZWxkX3ZhbHVlJ1xuXHRcdFx0bGFiZWw9XCJGaWVsZCBWYWx1ZVwiXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwidG9wXCJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5maWVsZF92YWx1ZSB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF92YWx1ZTogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRzZXREeW5hbWljTmFtZSggbmV3VmFsdWUgKVxuXHRcdFx0fSB9XG5cdFx0XHRvcHRpb25zPXsgaGlkZGVuVmFsdWVzIH1cblx0XHQvPlxuXHRcdHsgWyAncG9zdF9tZXRhJywgJ3VzZXJfbWV0YScgXS5pbmNsdWRlcyggYXR0cmlidXRlcy5maWVsZF92YWx1ZSApICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PVwiaGlkZGVuX3ZhbHVlX2ZpZWxkXCJcblx0XHRcdGxhYmVsPVwiTWV0YSBGaWVsZCB0byBHZXQgVmFsdWUgRnJvbVwiXG5cdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaGlkZGVuX3ZhbHVlX2ZpZWxkIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGhpZGRlbl92YWx1ZV9maWVsZDogbmV3VmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHRcdHsgJ3F1ZXJ5X3ZhcicgPT09IGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgJiYgPFRleHRDb250cm9sXG5cdFx0XHRrZXk9XCJxdWVyeV92YXJfa2V5XCJcblx0XHRcdGxhYmVsPVwiUXVlcnkgVmFyaWFibGUgS2V5XCJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5xdWVyeV92YXJfa2V5IH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHF1ZXJ5X3Zhcl9rZXk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdC8+IH1cblx0XHR7ICdjdXJyZW50X2RhdGUnID09PSBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PVwiZGF0ZV9mb3JtYXRcIlxuXHRcdFx0bGFiZWw9XCJGb3JtYXRcIlxuXHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmRhdGVfZm9ybWF0IH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGRhdGVfZm9ybWF0OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPiB9XG5cdFx0eyAnbWFudWFsX2lucHV0JyA9PT0gYXR0cmlidXRlcy5maWVsZF92YWx1ZSAmJiA8VGV4dENvbnRyb2xcblx0XHRcdGtleT1cImhpZGRlbl92YWx1ZVwiXG5cdFx0XHRsYWJlbD1cIlZhbHVlXCJcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5oaWRkZW5fdmFsdWUgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaGlkZGVuX3ZhbHVlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPiB9XG5cdDwvPjtcblxuXHRjb25zdCB7IGxhYmVsID0gJ1BsZWFzZSBzZXQgYEZpZWxkIFZhbHVlYCcgfSA9IGhpZGRlblZhbHVlcy5maW5kKCBvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBhdHRyaWJ1dGVzLmZpZWxkX3ZhbHVlICk7XG5cdGNvbnN0IHJlc3VsdExhYmVsID0gWyBsYWJlbCBdO1xuXG5cdHN3aXRjaCAoIGF0dHJpYnV0ZXMuZmllbGRfdmFsdWUgKSB7XG5cdFx0Y2FzZSAncG9zdF9tZXRhJzpcblx0XHRjYXNlICd1c2VyX21ldGEnOlxuXHRcdFx0cmVzdWx0TGFiZWwucHVzaCggYXR0cmlidXRlcy5oaWRkZW5fdmFsdWVfZmllbGQgKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ3F1ZXJ5X3Zhcic6XG5cdFx0XHRyZXN1bHRMYWJlbC5wdXNoKCBhdHRyaWJ1dGVzLnF1ZXJ5X3Zhcl9rZXkgKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2N1cnJlbnRfZGF0ZSc6XG5cdFx0XHRyZXN1bHRMYWJlbC5wdXNoKCBhdHRyaWJ1dGVzLmRhdGVfZm9ybWF0ICk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdtYW51YWxfaW5wdXQnOlxuXHRcdFx0cmVzdWx0TGFiZWwucHVzaCggYXR0cmlidXRlcy5oaWRkZW5fdmFsdWUgKTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRpc1NlbGVjdGVkICYmIChcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0XHR7IGNoZWNrRmllbGRWYWx1ZUlucHV0KCkgfVxuXHRcdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxuXHRcdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQpLFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PENhcmQgaXNFbGV2YXRlZD5cblx0XHRcdFx0PENhcmRIZWFkZXI+XG5cdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0naGlkZGVuX2ZpZWxkX25hbWUuLi4nXG5cdFx0XHRcdFx0XHRhbGxvd2VkRm9ybWF0cz17IFtdIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uYW1lIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmFtZSA9PiBzZXRBdHRyaWJ1dGVzKCB7IG5hbWUgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0NhcmRIZWFkZXI+XG5cdFx0XHRcdDxDYXJkQm9keT5cblx0XHRcdFx0XHR7IGlzU2VsZWN0ZWQgJiYgY2hlY2tGaWVsZFZhbHVlSW5wdXQoKSB9XG5cdFx0XHRcdFx0eyAhIGlzU2VsZWN0ZWQgJiYgcmVzdWx0TGFiZWwuam9pbiggJzogJyApIH1cblx0XHRcdFx0PC9DYXJkQm9keT5cblx0XHRcdDwvQ2FyZD5cblx0XHQ8L2Rpdj4sXG5cdF07XG59O1xuIiwiaW1wb3J0IEhlYWRpbmdFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9oaWRkZW4tZmllbGQvYmxvY2suanNvblwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ0hpZGRlbiBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IEhlYWRpbmdFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYmxvY2tOYW1lJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0ZmllbGRfdmFsdWU6ICdwb3N0X2lkJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgVG9vbHMgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgaGlkZGVuVmFsdWVzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXG5cdHtcblx0XHR2YWx1ZTogJ3Bvc3RfaWQnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBJRCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdwb3N0X3RpdGxlJyxcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFBvc3QgVGl0bGUnIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAncG9zdF91cmwnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdC9QYWdlIFVSTCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdwb3N0X21ldGEnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBNZXRhJyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ3VzZXJfaWQnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBJRCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd1c2VyX2VtYWlsJyxcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgRW1haWwnIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAndXNlcl9uYW1lJyxcblx0XHRsYWJlbDogX18oICdDdXJyZW50IFVzZXIgTmFtZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd1c2VyX21ldGEnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgVXNlciBNZXRhJyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2F1dGhvcl9pZCcsXG5cdFx0bGFiZWw6IF9fKCAnQ3VycmVudCBQb3N0IEF1dGhvciBJRCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdhdXRob3JfZW1haWwnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBBdXRob3IgRW1haWwnIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnYXV0aG9yX25hbWUnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgUG9zdCBBdXRob3IgTmFtZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdxdWVyeV92YXInLFxuXHRcdGxhYmVsOiBfXyggJ1VSTCBRdWVyeSBWYXJpYWJsZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdjdXJyZW50X2RhdGUnLFxuXHRcdGxhYmVsOiBfXyggJ0N1cnJlbnQgRGF0ZScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdtYW51YWxfaW5wdXQnLFxuXHRcdGxhYmVsOiBfXyggJ01hbnVhbCBJbnB1dCcgKVxuXHR9LFxuXSApO1xuXG5leHBvcnQgeyBoaWRkZW5WYWx1ZXMgfTsiLCJpbXBvcnQge1xuXHR1c2VyQWNjZXNzLFxuXHR2YWx1ZUZvcm1hdHMsXG59IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkV3JhcHBlcixcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIHVzZUJsb2NrUHJvcHMsXG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdFx0ICBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgTnVtYmVyQ29udHJvbCwgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XG59XG5cbmNvbnN0IGxvY2FsaXplRGF0YSA9IHdpbmRvdy5qZXRGb3JtTWVkaWFGaWVsZERhdGE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhRWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J2FsbG93ZWRfdXNlcl9jYXAnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVXNlciBhY2Nlc3MnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmFsbG93ZWRfdXNlcl9jYXAgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGFsbG93ZWRfdXNlcl9jYXA6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IHVzZXJBY2Nlc3MgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0eyAnYW55X3VzZXInICE9PSBhdHRyaWJ1dGVzLmFsbG93ZWRfdXNlcl9jYXAgJiYgPFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0naW5zZXJ0X2F0dGFjaG1lbnQnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW5zZXJ0IGF0dGFjaG1lbnQnICkgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGF0dHJpYnV0ZXMuaW5zZXJ0X2F0dGFjaG1lbnQgfVxuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnaW5zZXJ0X2F0dGFjaG1lbnQnICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGluc2VydF9hdHRhY2htZW50OiBCb29sZWFuKCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHR7ICggJ2FueV91c2VyJyAhPT0gYXR0cmlidXRlcy5hbGxvd2VkX3VzZXJfY2FwICYmIGF0dHJpYnV0ZXMuaW5zZXJ0X2F0dGFjaG1lbnQgKSAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSd2YWx1ZV9mb3JtYXQnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGQgdmFsdWUnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnZhbHVlX2Zvcm1hdCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgdmFsdWVfZm9ybWF0OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyB2YWx1ZUZvcm1hdHMgfVxuXHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdtYXhfZmlsZXMnXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4aW11bSBhbGxvd2VkIGZpbGVzIHRvIHVwbG9hZCcgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdtYXhfZmlsZXMnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heF9maWxlcyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWF4X2ZpbGVzOiBwYXJzZUludCggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4aW11bSBzaXplIGluIE1iJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nbWF4X3NpemUnXG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdtYXhfc2l6ZScgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4X3NpemUgfVxuXHRcdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWF4X3NpemU6IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRtdWx0aXBsZVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmaWVsZC1taW1lLXR5cGVzJ1xuXHRcdFx0XHRcdFx0a2V5PSdhbGxvd2VkX21pbWVzJ1xuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0FsbG93IE1JTUUgdHlwZXMnICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0aGVscD17IGF0dHJIZWxwKCAnYWxsb3dlZF9taW1lcycgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuYWxsb3dlZF9taW1lcyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgYWxsb3dlZF9taW1lczogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgbG9jYWxpemVEYXRhLm1pbWVfdHlwZXMgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRmllbGRTZXR0aW5nc1dyYXBwZXI+XG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdCksXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PElucHV0Q29udHJvbFxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2tfbmV3JyApIH1cblx0XHRcdFx0XHR0eXBlPXsgJ2ZpbGUnIH1cblx0XHRcdFx0XHRkaXNhYmxlZD17IHRydWUgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+LFxuXHRdO1xufSIsImltcG9ydCBNZWRpYUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL21lZGlhLWZpZWxkL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdNZWRpYSBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IE1lZGlhRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnVGh1bWJuYWlsICYgZmlsZScsXG5cdFx0XHRkZXNjOiAnRmllbGQgZGVzY3JpcHRpb24uLi4nLFxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgVG9vbHMgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgdXNlckFjY2VzcyA9IFRvb2xzLndpdGhQbGFjZWhvbGRlciggW1xuXHR7XG5cdFx0dmFsdWU6IFwiYWxsXCIsXG5cdFx0bGFiZWw6IFwiQW55IHJlZ2lzdGVyZWQgdXNlclwiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJ1cGxvYWRfZmlsZXNcIixcblx0XHRsYWJlbDogXCJBbnkgdXNlciwgd2hvIGFsbG93ZWQgdG8gdXBsb2FkIGZpbGVzXCJcblx0fSxcblx0e1xuXHRcdHZhbHVlOiBcImVkaXRfcG9zdHNcIixcblx0XHRsYWJlbDogXCJBbnkgdXNlciwgd2hvIGFsbG93ZWQgdG8gZWRpdCBwb3N0c1wiXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogXCJhbnlfdXNlclwiLFxuXHRcdGxhYmVsOiBcIkFueSB1c2VyICggaW5jbC4gR3Vlc3QgKVwiXG5cdH1cbl0gKTtcblxuY29uc3QgdmFsdWVGb3JtYXRzID0gVG9vbHMud2l0aFBsYWNlaG9sZGVyKCBbXG5cdHtcblx0XHRcInZhbHVlXCI6IFwiaWRcIixcblx0XHRcImxhYmVsXCI6IFwiQXR0YWNobWVudCBJRFwiXG5cdH0sXG5cdHtcblx0XHRcInZhbHVlXCI6IFwidXJsXCIsXG5cdFx0XCJsYWJlbFwiOiBcIkF0dGFjaG1lbnQgVVJMXCJcblx0fSxcblx0e1xuXHRcdFwidmFsdWVcIjogXCJib3RoXCIsXG5cdFx0XCJsYWJlbFwiOiBcIkFycmF5IHdpdGggYXR0YWNobWVudCBJRCBhbmQgVVJMXCJcblx0fVxuXSApO1xuXG5leHBvcnQge1xuXHR1c2VyQWNjZXNzLFxuXHR2YWx1ZUZvcm1hdHNcbn07IiwiY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkV3JhcHBlcixcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgUGFuZWxCb2R5LFxuXHRcdCAgX19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IElucHV0Q29udHJvbCwgTnVtYmVyQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuaWYgKCB0eXBlb2YgSW5wdXRDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0SW5wdXRDb250cm9sID0gX19leHBlcmltZW50YWxJbnB1dENvbnRyb2w7XG59XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJFZGl0KCBwcm9wcyApIHtcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5IH0sXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoIGtleSwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiBuZXdWYWx1ZSA/IHBhcnNlRmxvYXQoIG5ld1ZhbHVlICkgOiBudWxsIH0gKTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgKFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRTZXR0aW5nc1dyYXBwZXIgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWluIFZhbHVlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nbWluJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbiB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IGNoYW5nZU51bWJlclZhbHVlKCAnbWluJywgbmV3VmFsdWUgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heCBWYWx1ZScgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRrZXk9J21heCdcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5tYXggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heCcsIG5ld1ZhbHVlICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdGVwJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nc3RlcCdcblx0XHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdGVwIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdzdGVwJywgbmV3VmFsdWUgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9GaWVsZFNldHRpbmdzV3JhcHBlcj5cblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0KSxcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRcdFx0bWluPXsgYXR0cmlidXRlcy5taW4gfHwgMCB9XG5cdFx0XHRcdFx0bWF4PXsgYXR0cmlidXRlcy5tYXggfHwgMTAwMCB9XG5cdFx0XHRcdFx0c3RlcD17IGF0dHJpYnV0ZXMuc3RlcCB8fCAxIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2Pixcblx0XTtcbn0iLCJpbXBvcnQgTnVtYmVyRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvbnVtYmVyLWZpZWxkL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdOdW1iZXIgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBOdW1iZXJFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYmxvY2tOYW1lJyBdLFxuXHRleGFtcGxlOiB7XG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0bGFiZWw6ICdOdW1iZXIgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJyxcblx0XHRcdHBsYWNlaG9sZGVyOiAnSW5wdXQgeW91ciBudW1iZXIuLi4nXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiaW1wb3J0IHsgU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrLXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgU2VsZWN0UmFkaW9DaGVjayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlLXNlbGVjdC1jaGVjay1yYWRpby9zZWxlY3QtcmFkaW8tY2hlY2tcIjtcblxuY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkQ29udHJvbCxcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcblx0XHQgIHVzZUJsb2NrUHJvcHMsXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHsgVG9nZ2xlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFkaW9FZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnU2VsZWN0UmFkaW9DaGVja1BsYWNlaG9sZGVyJyApIH1cblx0XHRcdFx0c2NyaXB0RGF0YT17IHdpbmRvdy5KZXRGb3JtUmFkaW9GaWVsZERhdGEgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8U2VsZWN0UmFkaW9DaGVjayB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdzd2l0Y2hfb25fY2hhbmdlJ1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdTd2l0Y2ggcGFnZSBvbiBjaGFuZ2UnICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLnN3aXRjaF9vbl9jaGFuZ2UgfVxuXHRcdFx0XHRcdGhlbHA9eyBhdHRySGVscCggJ3N3aXRjaF9vbl9jaGFuZ2UnICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgc3dpdGNoX29uX2NoYW5nZTogQm9vbGVhbiggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxGaWVsZENvbnRyb2xcblx0XHRcdFx0XHR0eXBlPSdjdXN0b21fc2V0dGluZ3MnXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2N1c3RvbVNldHRpbmdzRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvU2VsZWN0UmFkaW9DaGVjaz5cblx0XHQ8L2Rpdj5cblx0XTtcbn0iLCJpbXBvcnQgUmFkaW9FZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9yYWRpby1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnUmFkaW8gRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBSYWRpb0VkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcsICdibG9ja05hbWUnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ1JhZGlvIEZpZWxkJyxcblx0XHRcdGZpZWxkX29wdGlvbnM6IFtcblx0XHRcdFx0eyBsYWJlbDogJ0ZpcnN0IE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHR7IGxhYmVsOiAnU2Vjb25kIE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHR7IGxhYmVsOiAnVGhpcmQgT3B0aW9uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRdXG5cdFx0fSxcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkV3JhcHBlcixcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHNcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRQYW5lbEJvZHksXG5cdF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbCxcblx0X19leHBlcmltZW50YWxJbnB1dENvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IHVzZVN0YXRlIH0gPSB3cC5lbGVtZW50O1xuXG5sZXQgeyBOdW1iZXJDb250cm9sLCBJbnB1dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IFsgcmFuZ2VWYWx1ZSwgc2V0UmFuZ2VWYWx1ZSBdID0gdXNlU3RhdGUoIDUwICk7XG5cblx0Y29uc3Qge1xuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfVxuXHR9ID0gcHJvcHM7XG5cblx0cmV0dXJuIFtcblx0XHRwcm9wcy5pc1NlbGVjdGVkICYmIChcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXsgX18oICdGaWVsZCBTZXR0aW5ncycgKSB9XG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BhbmVsQm9keScgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbiBWYWx1ZScgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHRrZXk9J21pbidcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5taW4gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1pbjogcGFyc2VGbG9hdCggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4IFZhbHVlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nbWF4J1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWF4OiBwYXJzZUZsb2F0KCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTdGVwJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdGtleT0nc3RlcCdcblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5zdGVwIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzdGVwOiBwYXJzZUZsb2F0KCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J3ByZWZpeCdcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSBwcmVmaXgnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnByZWZpeCB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdwcmVmaXhfc3VmZml4JyApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBwcmVmaXg6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J3N1ZmZpeCdcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZSBzdWZmaXgnICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLnN1ZmZpeCB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdwcmVmaXhfc3VmZml4JyApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBzdWZmaXg6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdCksXG5cdFx0PGRpdiB7IC4uLmJsb2NrUHJvcHMgfSBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR3cmFwQ2xhc3Nlcz17IFtcblx0XHRcdFx0XHQncmFuZ2Utd3JhcCdcblx0XHRcdFx0XSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhbmdlLWZsZXgtd3JhcFwiPlxuXHRcdFx0XHRcdDxJbnB1dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZWhvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRcdFx0XHR0eXBlPXsgJ3JhbmdlJyB9XG5cdFx0XHRcdFx0XHRtaW49eyBhdHRyaWJ1dGVzLm1pbiB8fCAwIH1cblx0XHRcdFx0XHRcdG1heD17IGF0dHJpYnV0ZXMubWF4IHx8IDEwMCB9XG5cdFx0XHRcdFx0XHRzdGVwPXsgYXR0cmlidXRlcy5zdGVwIHx8IDEgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBzZXRSYW5nZVZhbHVlIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlJyB9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXZhbHVlLXByZWZpeCcgfT57IGF0dHJpYnV0ZXMucHJlZml4IH08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57IHJhbmdlVmFsdWUgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ICdqZXQtZm9ybS1idWlsZGVyX19maWVsZC12YWx1ZS1zdWZmaXgnIH0+eyBhdHRyaWJ1dGVzLnN1ZmZpeCB9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2PlxuXHRdO1xufSIsImltcG9ydCBSYW5nZUVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL3JhbmdlLWZpZWxkL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdSYW5nZSBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IFJhbmdlRWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnUmFuZ2UgRmllbGQnLFxuXHRcdFx0cHJlZml4OiAncHJpY2U6ICcsXG5cdFx0XHRzdWZmaXg6ICckJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImltcG9ydCB7XG5cdGNhbGNUeXBlLFxuXHRtYW5hZ2VJdGVtc0NvdW50LFxufSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IHtcblx0XHQgIFRvb2xCYXJGaWVsZHMsXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXG5cdFx0ICBGaWVsZFdyYXBwZXIsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQsXG5cdFx0ICBUb29scyxcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcblx0XHQgIElubmVyQmxvY2tzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0XHQgIFJpY2hUZXh0LFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFx0ICBzZWxlY3QsXG5cdCAgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IHtcblx0XHQgIHVzZVN0YXRlLFxuXHQgIH0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFRleHRhcmVhQ29udHJvbCxcblx0XHQgIFNlbGVjdENvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBCdXR0b24sXG5cdFx0ICBQb3BvdmVyLFxuXHRcdCAgQmFzZUNvbnRyb2wsXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXBlYXRlckVkaXQoIHByb3BzICkge1xuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdGNvbnN0IFsgc2hvd01hY3Jvcywgc2V0U2hvd01hY3JvcyBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBpc1NlbGVjdGVkLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSwgYXR0ckhlbHAgfSxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0RmllbGRzV2l0aG91dEN1cnJlbnQoKTtcblxuXHRjb25zdCBtZXRhID0gc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ21ldGEnICkgfHwge307XG5cdGNvbnN0IGxhYmVsID0gVG9vbHMuZ2V0TGFiZWwoIG1ldGEsIGF0dHJpYnV0ZXMgKTtcblxuXHRjb25zdCBpbnNlcnRNYWNyb3MgPSAoIG1hY3JvcyApID0+IHtcblx0XHRjb25zdCBmb3JtdWxhID0gYXR0cmlidXRlcy5jYWxjX2Zvcm11bGEgfHwgJyc7XG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBjYWxjX2Zvcm11bGE6IGZvcm11bGEgKyAnJUZJRUxEOjonICsgbWFjcm9zICsgJyUnIH0gKTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdD5cblx0XHRcdHsgJ2N1c3RvbScgPT09IGF0dHJpYnV0ZXMucmVwZWF0ZXJfY2FsY190eXBlICYmIDxCdXR0b25cblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0J1dHRvbicgKSB9XG5cdFx0XHRcdGlzVGVydGlhcnlcblx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRpY29uPXsgc2hvd01hY3JvcyA/ICduby1hbHQnIDogJ2FkbWluLXRvb2xzJyB9XG5cdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRTaG93TWFjcm9zKCB0b2dnbGUgPT4gISB0b2dnbGUgKSB9XG5cdFx0XHQvPiB9XG5cdFx0XHR7IHNob3dNYWNyb3MgJiYgPFBvcG92ZXJcblx0XHRcdFx0cG9zaXRpb249eyAnYm90dG9tIGxlZnQnIH1cblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ1BvcG92ZXInICkgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGZvcm1GaWVsZHMubGVuZ3RoICYmIDxQYW5lbEJvZHkgdGl0bGU9eyAnRm9ybSBGaWVsZHMnIH0+XG5cdFx0XHRcdFx0eyBmb3JtRmllbGRzLm1hcCggKCB7IHZhbHVlIH0sIGluZGV4ICkgPT4gPGRpdlxuXHRcdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ2ZpZWxkXycgKyB2YWx1ZSArIGluZGV4ICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aXNMaW5rXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aW5zZXJ0TWFjcm9zKCB2YWx1ZSApXG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0PnsgJyVGSUVMRDo6JyArIHZhbHVlICsgJyUnIH08L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj4gKSB9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PiB9XG5cdFx0XHQ8L1BvcG92ZXI+IH1cblx0XHQ8L1Rvb2xCYXJGaWVsZHM+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHR0aXRsZT17IF9fKCAnRmllbGQgU2V0dGluZ3MnICkgfVxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnUGFuZWxCb2R5JyApIH1cblx0XHRcdD5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J21hbmFnZV9pdGVtc19jb3VudCdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWFuYWdlIHJlcGVhdGVyIGl0ZW1zIGNvdW50JyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hbmFnZV9pdGVtc19jb3VudCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7IG1hbmFnZV9pdGVtc19jb3VudDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9wdGlvbnM9eyBtYW5hZ2VJdGVtc0NvdW50IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyAnbWFudWFsbHknID09PSBhdHRyaWJ1dGVzLm1hbmFnZV9pdGVtc19jb3VudCAmJiA8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J25ld19pdGVtX2xhYmVsJ1xuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdBZGQgTmV3IEl0ZW0gTGFiZWwnICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5uZXdfaXRlbV9sYWJlbCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBuZXdfaXRlbV9sYWJlbDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPiB9XG5cdFx0XHRcdHsgJ2R5bmFtaWNhbGx5JyA9PT0gYXR0cmlidXRlcy5tYW5hZ2VfaXRlbXNfY291bnQgJiYgPFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J21hbmFnZV9pdGVtc19jb3VudF9maWVsZCdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRmllbGQgaXRlbXMgY291bnQnICkgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFuYWdlX2l0ZW1zX2NvdW50X2ZpZWxkIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHsgbWFuYWdlX2l0ZW1zX2NvdW50X2ZpZWxkOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHQvPiB9XG5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J3JlcGVhdGVyX2NhbGNfdHlwZSdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ2FsY3VsYXRlIHJlcGVhdGVyIHJvdyB2YWx1ZScgKSB9XG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5yZXBlYXRlcl9jYWxjX3R5cGUgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyByZXBlYXRlcl9jYWxjX3R5cGU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvcHRpb25zPXsgY2FsY1R5cGUgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7ICdjdXN0b20nID09PSBhdHRyaWJ1dGVzLnJlcGVhdGVyX2NhbGNfdHlwZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImpldC1mb3JtLWVkaXRvcl9fcm93LW5vdGljZVwiPlxuXHRcdFx0XHRcdHsgX18oICdTZXQgbWF0aCBmb3JtdWxhIHRvIGNhbGN1bGF0ZSBmaWVsZCB2YWx1ZS4nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cblx0XHRcdFx0XHR7IF9fKCAnRm9yIGV4YW1wbGU6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+PGJyLz5cblx0XHRcdFx0XHQlRklFTEQ6OnF1YW50aXR5JSolTUVUQTo6cHJpY2UlPGJyLz48YnIvPlxuXHRcdFx0XHRcdHsgX18oICdXaGVyZTonLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cblx0XHRcdFx0XHQtXG5cdFx0XHRcdFx0eyBfXyggJyVGSUVMRDo6cXVhbnRpdHklIC0gbWFjcm9zIGZvciBmb3JtIGZpZWxkIHZhbHVlLiBcInF1YW50aXR5XCIgLSBpcyBhIGZpZWxkIG5hbWUgdG8gZ2V0IHZhbHVlIGZyb20nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cblx0XHRcdFx0XHQtXG5cdFx0XHRcdFx0eyBfXyggJyVNRVRBOjpwcmljZSUgLSBtYWNyb3MgZm9yIGN1cnJlbnQgcG9zdCBtZXRhIHZhbHVlLiBcInByaWNlXCIgLSBpcyBhIG1ldGEga2V5IHRvIGdldCB2YWx1ZSBmcm9tJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+PGJyLz5cblx0XHRcdFx0PC9kaXY+IH1cblxuXG5cdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAnRnJhZ21lbnQnICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdHsgJ2N1c3RvbScgPT09IGF0dHJpYnV0ZXMucmVwZWF0ZXJfY2FsY190eXBlICYmIDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm1zX19jYWxjLWZvcm11bGEtZWRpdG9yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3Mtd3JhcFwiPlxuXHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdGtleT1cImNhbGNfZm9ybXVsYVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY19mb3JtdWxhIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGlvbiBGb3JtdWxhIGZvciBSZXBlYXRlcicgKSB9XG5cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBjYWxjX2Zvcm11bGE6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+IH1cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdGNoaWxkcmVuUG9zaXRpb249J2JvdHRvbSdcblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxJbm5lckJsb2Nrc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdyZXBlYXRlci1maWVsZHMnICkgfVxuXHRcdFx0XHRcdHJlbmRlckFwcGVuZGVyPXsgKCkgPT4gKFxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzLkJ1dHRvbkJsb2NrQXBwZW5kZXIga2V5PXsgdW5pcUtleSggJ0J1dHRvbkJsb2NrQXBwZW5kZXInICkgfS8+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9fcmVtb3ZlJyB9XG5cdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQ+JnRpbWVzOzwvQnV0dG9uPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcwLjdlbScgfSB9Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19hY3Rpb25zXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXJfX25ldycgfVxuXHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0FkZCBOZXcnXG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRGb3JtYXRzPXsgW10gfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubmV3X2l0ZW1fbGFiZWwgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld19pdGVtX2xhYmVsID0+IHNldEF0dHJpYnV0ZXMoIHsgbmV3X2l0ZW1fbGFiZWwgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+LFxuXHRdO1xufSIsImltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy9yZXBlYXRlci1maWVsZC9ibG9jay5qc29uXCI7XG5pbXBvcnQgUmVwZWF0ZXJFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBSZXBlYXRlclNhdmUgZnJvbSBcIi4vc2F2ZVwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IG5hbWUsIGljb24gPSAnJyB9ID0gbWV0YWRhdGE7XG5cbi8qKlxuICogQXZhaWxhYmxlIGl0ZW1zIGZvciBgdXNlRWRpdFByb3BzYDpcbiAqICAtIHVuaXFLZXlcbiAqICAtIGZvcm1GaWVsZHNcbiAqICAtIGJsb2NrTmFtZVxuICogIC0gYXR0ckhlbHBcbiAqL1xuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ1JlcGVhdGVyIEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogUmVwZWF0ZXJFZGl0LFxuXHRzYXZlOiBSZXBlYXRlclNhdmUsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnTXVsdGlwbGUgZmllbGRzJyxcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXG5cdFx0fSxcblx0XHRpbm5lckJsb2NrczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnamV0LWZvcm1zL3RleHQtZmllbGQnLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0bGFiZWw6ICdJdGVtIFRpdGxlJ1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnamV0LWZvcm1zL3JhZGlvLWZpZWxkJyxcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdGxhYmVsOiAnSXRlbSBSYWRpbycsXG5cdFx0XHRcdFx0ZmllbGRfb3B0aW9uczogW1xuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ0ZpcnN0IE9wdGlvbicsIHZhbHVlOiAnJyB9LFxuXHRcdFx0XHRcdFx0eyBsYWJlbDogJ1NlY29uZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdFx0XHRcdHsgbGFiZWw6ICdUaGlyZCBPcHRpb24nLCB2YWx1ZTogJycgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBjYWxjVHlwZSA9IFtcblx0e1xuXHRcdHZhbHVlOiAnZGVmYXVsdCcsXG5cdFx0bGFiZWw6IF9fKCAnRGVmYXVsdCAocmV0dXJucyByb3dzIGNvdW50KScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdjdXN0b20nLFxuXHRcdGxhYmVsOiBfXyggJ0N1c3RvbSAoY2FsY3VsYXRlIGN1c3RvbSB2YWx1ZSBmb3IgZWFjaCByb3cpJyApXG5cdH1cbl07XG5cbmNvbnN0IG1hbmFnZUl0ZW1zQ291bnQgPSBbXG5cdHtcblx0XHR2YWx1ZTogJ21hbnVhbGx5Jyxcblx0XHRsYWJlbDogX18oICdNYW51YWxseScgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdkeW5hbWljYWxseScsXG5cdFx0bGFiZWw6IF9fKCAnRHluYW1pY2FsbHkgKGdldCBjb3VudCBmcm9tIGZvcm0gZmllbGQpJyApXG5cdH1cbl07XG5cbmV4cG9ydCB7XG5cdGNhbGNUeXBlLFxuXHRtYW5hZ2VJdGVtc0NvdW50XG59OyIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcGVhdGVyU2F2ZSggcHJvcHMgKSB7XG5cdHJldHVybiA8SW5uZXJCbG9ja3MuQ29udGVudC8+O1xufTtcbiIsImltcG9ydCB7IFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2Utc2VsZWN0LWNoZWNrLXJhZGlvL3NlbGVjdC1yYWRpby1jaGVjay1wbGFjZWhvbGRlclwiO1xuaW1wb3J0IFNlbGVjdFJhZGlvQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS1zZWxlY3QtY2hlY2stcmFkaW8vc2VsZWN0LXJhZGlvLWNoZWNrXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbmNvbnN0IHtcblx0VG9vbEJhckZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkQ29udHJvbCxcblx0SG9yaXpvbnRhbExpbmVcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHNcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFRvZ2dsZUNvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0RWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3Qge1xuXHRcdGF0dHJpYnV0ZXMsXG5cdFx0c2V0QXR0cmlidXRlcyxcblx0XHRpc1NlbGVjdGVkLFxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9XG5cdH0gPSBwcm9wcztcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdDxTZWxlY3RSYWRpb0NoZWNrUGxhY2Vob2xkZXJcblx0XHRcdFx0c2NyaXB0RGF0YT17IHdpbmRvdy5KZXRGb3JtU2VsZWN0RmllbGREYXRhIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PFNlbGVjdFJhZGlvQ2hlY2sgeyAuLi5wcm9wcyB9PlxuXHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdGtleT0nc3dpdGNoX29uX2NoYW5nZSdcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3dpdGNoIHBhZ2Ugb24gY2hhbmdlJyApIH1cblx0XHRcdFx0XHRjaGVja2VkPXsgYXR0cmlidXRlcy5zd2l0Y2hfb25fY2hhbmdlIH1cblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdzd2l0Y2hfb25fY2hhbmdlJyApIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHN3aXRjaF9vbl9jaGFuZ2U6IEJvb2xlYW4oIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8RmllbGRDb250cm9sXG5cdFx0XHRcdFx0dHlwZT0nY3VzdG9tX3NldHRpbmdzJ1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdjdXN0b21TZXR0aW5nc0ZpZWxkcycgKSB9XG5cdFx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1NlbGVjdFJhZGlvQ2hlY2s+XG5cdFx0PC9kaXY+XG5cdF07XG59IiwiaW1wb3J0IFNlbGVjdEVkaXQgZnJvbSBcIi4vZWRpdFwiO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gXCJAYmxvY2tzL3NlbGVjdC1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnU2VsZWN0IEZpZWxkJyApLFxuXHRjbGFzc05hbWU6IG5hbWUucmVwbGFjZSggJy8nLCAnLScgKSxcblx0aWNvbjogPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaWNvbiB9IH0+PC9zcGFuPixcblx0ZWRpdDogU2VsZWN0RWRpdCxcblx0dXNlRWRpdFByb3BzOiBbICd1bmlxS2V5JywgJ2F0dHJIZWxwJywgJ2Jsb2NrTmFtZScgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnU2VsZWN0IEZpZWxkJyxcblx0XHRcdGRlc2M6ICdGaWVsZCBkZXNjcmlwdGlvbi4uLicsXG5cdFx0XHRmaWVsZF9vcHRpb25zOiBbXG5cdFx0XHRcdHsgbGFiZWw6ICdDaG9vc2Ugb3B0aW9uLi4uJywgdmFsdWU6ICcnIH0sXG5cdFx0XHRdXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge1xuXHRtZXRhZGF0YSxcblx0bmFtZSxcblx0c2V0dGluZ3Ncbn07IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBqZXRFbmdpbmVWZXJzaW9uIH0gPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGE7XG5jb25zdCB7IHZlcnNpb25Db21wYXJlIH0gPSBKZXRGQkFjdGlvbnM7XG5cbmNvbnN0IGxpc3RGcm9tID0gW1xuXHR7XG5cdFx0XCJ2YWx1ZVwiOiBcIm1hbnVhbF9pbnB1dFwiLFxuXHRcdFwibGFiZWxcIjogX18oICdNYW51YWwgSW5wdXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0fSxcblx0e1xuXHRcdFwidmFsdWVcIjogXCJwb3N0c1wiLFxuXHRcdFwibGFiZWxcIjogX18oICdQb3N0cycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9LFxuXHR7XG5cdFx0XCJ2YWx1ZVwiOiBcInRlcm1zXCIsXG5cdFx0XCJsYWJlbFwiOiBfXyggJ1Rlcm1zJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5cdHtcblx0XHRcInZhbHVlXCI6IFwibWV0YV9maWVsZFwiLFxuXHRcdFwibGFiZWxcIjogX18oICdNZXRhIEZpZWxkJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXG5cdH0sXG5cdHtcblx0XHRcInZhbHVlXCI6IFwiZ2VuZXJhdGVcIixcblx0XHRcImxhYmVsXCI6IF9fKCAnR2VuZXJhdGUgRHluYW1pY2FsbHknLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcblx0fSxcbl07XG5cbmlmICggXCJcIiAhPT0gamV0RW5naW5lVmVyc2lvbiApIHtcblx0bGlzdEZyb20ucHVzaCgge1xuXHRcdFwidmFsdWVcIjogXCJnbG9zc2FyeVwiLFxuXHRcdFwibGFiZWxcIjogX18oICdHbG9zc2FyeScsICdqZXQtZm9ybS1idWlsZGVyJyApLFxuXHR9IClcbn1cblxuZXhwb3J0IHsgbGlzdEZyb20gfTsiLCJjb25zdCB7XG5cdFx0ICBHZW5lcmFsRmllbGRzLFxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRcdCAgSW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0ICB1c2VCbG9ja1Byb3BzLFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFx0ICBCdXR0b24sXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0XHQgIFJpY2hUZXh0LFxuXHQgIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0RWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBpc1NlbGVjdGVkLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCB7IGNsYXNzTmFtZTogJ2pldC1mb3JtLWJ1aWxkZXJfX3N1Ym1pdC13cmFwJyB9ICk7XG5cblx0cmV0dXJuIFtcblx0XHRpc1NlbGVjdGVkICYmIDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH1cblx0XHQ+XG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0XHRhdHRyc1NldHRpbmdzPXsge1xuXHRcdFx0XHRcdG5hbWU6IHsgc2hvdzogZmFsc2UgfSxcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IHsgLi4uYmxvY2tQcm9wcyB9IGtleT17IHVuaXFLZXkoICdzdWJtaXQtd3JhcCcgKSB9PlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX3N1Ym1pdCcgfVxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAncGxhY2VfaG9sZGVyX2Jsb2NrJyApIH1cblx0XHRcdD5cblx0XHRcdFx0eyAvKmF0dHJpYnV0ZXMubGFiZWwgfHwgJ1N1Ym1pdCcqLyB9XG5cdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdJbnB1dCBTdWJtaXQgbGFiZWwuLi4nXG5cdFx0XHRcdFx0YWxsb3dlZEZvcm1hdHM9eyBbXSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IGxhYmVsID0+IHNldEF0dHJpYnV0ZXMoIHsgbGFiZWwgfSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQnV0dG9uPlxuXHRcdDwvZGl2Pixcblx0XTtcbn0iLCJpbXBvcnQgU3VibWl0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3Mvc3VibWl0LWZpZWxkL2Jsb2NrLmpzb25cIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBuYW1lLCBpY29uID0gJycgfSA9IG1ldGFkYXRhO1xuXG4vKipcbiAqIEF2YWlsYWJsZSBpdGVtcyBmb3IgYHVzZUVkaXRQcm9wc2A6XG4gKiAgLSB1bmlxS2V5XG4gKiAgLSBmb3JtRmllbGRzXG4gKiAgLSBibG9ja05hbWVcbiAqICAtIGF0dHJIZWxwXG4gKi9cbmNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdTdWJtaXQgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBTdWJtaXRFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ1N1Ym1pdCdcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdG1ldGFkYXRhLFxuXHRuYW1lLFxuXHRzZXR0aW5nc1xufTsiLCJpbXBvcnQge1xuXHRmaWVsZFR5cGVzTGlzdCxcblx0bWFza1BsYWNlaG9sZGVyc0xpc3QsXG5cdG1hc2tUeXBlc0xpc3QsXG5cdG1hc2tWaXNpYmlsaXRpZXNMaXN0LFxufSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IHtcblx0XHQgIFRvb2xCYXJGaWVsZHMsXG5cdFx0ICBHZW5lcmFsRmllbGRzLFxuXHRcdCAgQWR2YW5jZWRGaWVsZHMsXG5cdFx0ICBGaWVsZFdyYXBwZXIsXG5cdFx0ICBGaWVsZFNldHRpbmdzV3JhcHBlcixcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBJbnNwZWN0b3JDb250cm9scyxcblx0XHQgIHVzZUJsb2NrUHJvcHMsXG5cdCAgfSA9IHdwLmJsb2NrRWRpdG9yID8gd3AuYmxvY2tFZGl0b3IgOiB3cC5lZGl0b3I7XG5cbmNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBQYW5lbEJvZHksXG5cdFx0ICBfX2V4cGVyaW1lbnRhbE51bWJlckNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RWRpdCggcHJvcHMgKSB7XG5cdGNvbnN0IHtcblx0XHRcdCAgYXR0cmlidXRlcyxcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcblx0XHRcdCAgaXNTZWxlY3RlZCxcblx0XHRcdCAgZWRpdFByb3BzOiB7IHVuaXFLZXksIGF0dHJIZWxwIH0sXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoIGtleSwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSAoIG5ld1ZhbHVlICYmIG5ld1ZhbHVlID4gMCApID8gcGFyc2VJbnQoIG5ld1ZhbHVlICkgOiBudWxsO1xuXG5cdFx0cHJvcHMuc2V0QXR0cmlidXRlcyggeyBbIGtleSBdOiB2YWx1ZSB9ICk7XG5cdH1cblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcygpO1xuXG5cdHJldHVybiBbXG5cdFx0PFRvb2xCYXJGaWVsZHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdUb29sQmFyRmllbGRzJyApIH1cblx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdC8+LFxuXHRcdGlzU2VsZWN0ZWQgJiYgPEluc3BlY3RvckNvbnRyb2xzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdD5cblx0XHRcdDxHZW5lcmFsRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdFx0PEZpZWxkU2V0dGluZ3NXcmFwcGVyIHsgLi4ucHJvcHMgfT5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J2ZpZWxkX3R5cGUnXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0ZpZWxkIFR5cGUnICkgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuZmllbGRfdHlwZSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX3R5cGU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRvcHRpb25zPXsgZmllbGRUeXBlc0xpc3QgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXsgX18oICdNaW4gbGVuZ3RoIChzeW1ib2xzKScgKSB9XG5cdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdGtleT0nbWlubGVuZ3RoJ1xuXHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5taW5sZW5ndGggfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IGNoYW5nZU51bWJlclZhbHVlKCAnbWlubGVuZ3RoJywgbmV3VmFsdWUgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01heCBsZW5ndGggKHN5bWJvbHMpJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0a2V5PSdtYXhsZW5ndGgnXG5cdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1heGxlbmd0aCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtYXhsZW5ndGgnLCBuZXdWYWx1ZSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZW5hYmxlX2lucHV0X21hc2snIH1cblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2V0IElucHV0IE1hc2snICkgfVxuXHRcdFx0XHRcdGNoZWNrZWQ9eyBhdHRyaWJ1dGVzLmVuYWJsZV9pbnB1dF9tYXNrIH1cblx0XHRcdFx0XHRoZWxwPXsgX18oICdDaGVjayB0aGlzIHRvIHNldHVwIHNwZWNpZmljIGlucHV0IGZvcm1hdCBmb3IgdGhlIGN1cnJlbnQgZmllbGQnICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZW5hYmxlX2lucHV0X21hc2s6IG5ld1ZhbCB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgYXR0cmlidXRlcy5lbmFibGVfaW5wdXRfbWFzayAmJiA8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT0nbWFza190eXBlJ1xuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgdHlwZScgKSB9XG5cdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWFza190eXBlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBtYXNrX3R5cGU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tUeXBlc0xpc3QgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J2lucHV0X21hc2snXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnSW5wdXQgbWFzaycgKSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuaW5wdXRfbWFzayB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgaW5wdXRfbWFzazogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ICggISBhdHRyaWJ1dGVzLm1hc2tfdHlwZSApICYmIDxkaXYgY2xhc3NOYW1lPXsgJ2hlbHAtaW5wdXQnIH0+XG5cdFx0XHRcdFx0XHR7IGF0dHJIZWxwKCAnaW5wdXRfbWFza19kZWZhdWx0JyApIH1cblx0XHRcdFx0XHQ8L2Rpdj4gfVxuXG5cdFx0XHRcdFx0eyAnZGF0ZXRpbWUnID09PSBhdHRyaWJ1dGVzLm1hc2tfdHlwZSAmJiA8ZGl2IGNsYXNzTmFtZT17ICdoZWxwLWlucHV0JyB9PlxuXHRcdFx0XHRcdFx0eyBfXyggJ0V4YW1wbGVzOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH0gZGQvbW0veXl5eSwgbW0vZGQveXl5eTxici8+XG5cdFx0XHRcdFx0XHR7IF9fKCAnTW9yZSBpbmZvIC0gJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRcdFx0PGEgaHJlZj17IGF0dHJIZWxwKCAnaW5wdXRfbWFza19kYXRldGltZV9saW5rJyApIH1cblx0XHRcdFx0XHRcdCAgIHRhcmdldD0nX2JsYW5rJz57IF9fKCAnaGVyZScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L2E+XG5cdFx0XHRcdFx0PC9kaXY+IH1cblxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J21hc2tfdmlzaWJpbGl0eSdcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdNYXNrIHZpc2liaWxpdHknICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hc2tfdmlzaWJpbGl0eSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgbWFza192aXNpYmlsaXR5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBtYXNrVmlzaWJpbGl0aWVzTGlzdCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdtYXNrX3BsYWNlaG9sZGVyJ1xuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01hc2sgcGxhY2Vob2xkZXInICkgfVxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1hc2tfcGxhY2Vob2xkZXIgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1hc2tfcGxhY2Vob2xkZXI6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IG1hc2tQbGFjZWhvbGRlcnNMaXN0IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XG5cdFx0XHQ8L0ZpZWxkU2V0dGluZ3NXcmFwcGVyPlxuXHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdBZHZhbmNlZEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17IGF0dHJpYnV0ZXMucGxhY2Vob2xkZXIgfVxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFdyYXBwZXI+XG5cdFx0PC9kaXY+LFxuXHRdO1xufTtcbiIsImltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvdGV4dC1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnVGV4dCBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IFRleHRFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ1RleHQgRmllbGQnLFxuXHRcdFx0cGxhY2Vob2xkZXI6ICdJbnB1dCB5b3VyIHRleHQuLi4nLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGZpZWxkVHlwZXNMaXN0ID0gW1xuXHR7XG5cdFx0dmFsdWU6ICd0ZXh0Jyxcblx0XHRsYWJlbDogX18oICdUZXh0JyApXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJ2VtYWlsJyxcblx0XHRsYWJlbDogX18oICdFbWFpbCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd1cmwnLFxuXHRcdGxhYmVsOiBfXyggJ1VybCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICd0ZWwnLFxuXHRcdGxhYmVsOiBfXyggJ1RlbCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdwYXNzd29yZCcsXG5cdFx0bGFiZWw6IF9fKCAnUGFzc3dvcmQnIClcblx0fSxcbl07XG5cbmNvbnN0IG1hc2tUeXBlc0xpc3QgPSBbXG5cdHtcblx0XHR2YWx1ZTogJycsXG5cdFx0bGFiZWw6IF9fKCAnRGVmYXVsdCcgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdkYXRldGltZScsXG5cdFx0bGFiZWw6IF9fKCAnRGF0ZXRpbWUnIClcblx0fSxcbl07XG5cbmNvbnN0IG1hc2tWaXNpYmlsaXRpZXNMaXN0ID0gW1xuXHR7XG5cdFx0dmFsdWU6ICdhbHdheXMnLFxuXHRcdGxhYmVsOiBfXyggJ0Fsd2F5cycgKVxuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICdob3ZlcicsXG5cdFx0bGFiZWw6IF9fKCAnSG92ZXInIClcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAnZm9jdXMnLFxuXHRcdGxhYmVsOiBfXyggJ0ZvY3VzJyApXG5cdH0sXG5dO1xuXG5jb25zdCBtYXNrUGxhY2Vob2xkZXJzTGlzdCA9IFtcblx0e1xuXHRcdHZhbHVlOiAnXycsXG5cdFx0bGFiZWw6ICdfJ1xuXHR9LFxuXHR7XG5cdFx0dmFsdWU6ICctJyxcblx0XHRsYWJlbDogJy0nXG5cdH0sXG5cdHtcblx0XHR2YWx1ZTogJyonLFxuXHRcdGxhYmVsOiAnKidcblx0fSxcblx0e1xuXHRcdHZhbHVlOiAn4oCiJyxcblx0XHRsYWJlbDogJ+KAoidcblx0fSxcbl07XG5cbmV4cG9ydCB7XG5cdGZpZWxkVHlwZXNMaXN0LFxuXHRtYXNrVHlwZXNMaXN0LFxuXHRtYXNrUGxhY2Vob2xkZXJzTGlzdCxcblx0bWFza1Zpc2liaWxpdGllc0xpc3Rcbn07IiwiY29uc3Qge1xuXHRcdCAgVG9vbEJhckZpZWxkcyxcblx0XHQgIEdlbmVyYWxGaWVsZHMsXG5cdFx0ICBBZHZhbmNlZEZpZWxkcyxcblx0XHQgIEZpZWxkV3JhcHBlcixcblx0XHQgIEZpZWxkU2V0dGluZ3NXcmFwcGVyLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdCAgdXNlQmxvY2tQcm9wcyxcblx0ICB9ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRcdCAgVGV4dGFyZWFDb250cm9sLFxuXHRcdCAgUGFuZWxCb2R5LFxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5sZXQgeyBOdW1iZXJDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBOdW1iZXJDb250cm9sID09PSAndW5kZWZpbmVkJyApIHtcblx0TnVtYmVyQ29udHJvbCA9IF9fZXhwZXJpbWVudGFsTnVtYmVyQ29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dGFyZWFFZGl0KCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGlzU2VsZWN0ZWQsXG5cdFx0XHQgIGVkaXRQcm9wczogeyB1bmlxS2V5LCBhdHRySGVscCB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0Y29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoIGtleSwgbmV3VmFsdWUgKSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSAoIG5ld1ZhbHVlICYmIG5ld1ZhbHVlID4gMCApID8gcGFyc2VJbnQoIG5ld1ZhbHVlICkgOiBudWxsO1xuXHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBrZXkgXTogdmFsdWUgfSApO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHMga2V5PXsgdW5pcUtleSggJ0luc3BlY3RvckNvbnRyb2xzJyApIH0+XG5cdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnR2VuZXJhbEZpZWxkcycgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0Lz5cblx0XHRcdDxGaWVsZFNldHRpbmdzV3JhcHBlciB7IC4uLnByb3BzIH0+XG5cdFx0XHRcdDxOdW1iZXJDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ01pbiBsZW5ndGggKHN5bWJvbHMpJyApIH1cblx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdFx0a2V5PSdtaW5sZW5ndGgnXG5cdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLm1pbmxlbmd0aCB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4gY2hhbmdlTnVtYmVyVmFsdWUoICdtaW5sZW5ndGgnLCBuZXdWYWx1ZSApIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnTWF4IGxlbmd0aCAoc3ltYm9scyknICkgfVxuXHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRrZXk9J21heGxlbmd0aCdcblx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMubWF4bGVuZ3RoIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBjaGFuZ2VOdW1iZXJWYWx1ZSggJ21heGxlbmd0aCcsIG5ld1ZhbHVlICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9GaWVsZFNldHRpbmdzV3JhcHBlcj5cblx0XHRcdDxBZHZhbmNlZEZpZWxkc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnQWR2YW5jZWRGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0PGRpdiBrZXk9eyB1bmlxS2V5KCAndmlld0Jsb2NrJyApIH0geyAuLi5ibG9ja1Byb3BzIH0+XG5cdFx0XHQ8RmllbGRXcmFwcGVyXG5cdFx0XHRcdGtleT17IHVuaXFLZXkoICdGaWVsZFdyYXBwZXInICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdD5cblx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgYXR0cmlidXRlcy5wbGFjZWhvbGRlciB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cblx0XHQ8L2Rpdj4sXG5cdF07XG59XG4iLCJpbXBvcnQgVGV4dGFyZWFFZGl0IGZyb20gXCIuL2VkaXRcIjtcbmltcG9ydCBtZXRhZGF0YSBmcm9tIFwiQGJsb2Nrcy90ZXh0YXJlYS1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnVGV4dGFyZWEgRmllbGQnICksXG5cdGNsYXNzTmFtZTogbmFtZS5yZXBsYWNlKCAnLycsICctJyApLFxuXHRpY29uOiA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiBpY29uIH0gfT48L3NwYW4+LFxuXHRlZGl0OiBUZXh0YXJlYUVkaXQsXG5cdHVzZUVkaXRQcm9wczogWyAndW5pcUtleScsICdhdHRySGVscCcgXSxcblx0ZXhhbXBsZToge1xuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGxhYmVsOiAnVGV4dGFyZWEgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0VG9vbEJhckZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkV3JhcHBlcixcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHMsXG59ID0gd3AuYmxvY2tFZGl0b3IgPyB3cC5ibG9ja0VkaXRvciA6IHdwLmVkaXRvcjtcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0X19leHBlcmltZW50YWxJbnB1dENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxubGV0IHsgSW5wdXRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5pZiAoIHR5cGVvZiBJbnB1dENvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHRJbnB1dENvbnRyb2wgPSBfX2V4cGVyaW1lbnRhbElucHV0Q29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZUVkaXQoIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0YXR0cmlidXRlcyxcblx0XHRpc1NlbGVjdGVkLFxuXHRcdGVkaXRQcm9wczogeyB1bmlxS2V5IH1cblx0fSA9IHByb3BzO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKCk7XG5cblx0cmV0dXJuIFtcblx0XHQ8VG9vbEJhckZpZWxkc1xuXHRcdFx0a2V5PXsgdW5pcUtleSggJ1Rvb2xCYXJGaWVsZHMnICkgfVxuXHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0Lz4sXG5cdFx0aXNTZWxlY3RlZCAmJiA8SW5zcGVjdG9yQ29udHJvbHNcblx0XHRcdGtleT17IHVuaXFLZXkoICdJbnNwZWN0b3JDb250cm9scycgKSB9XG5cdFx0PlxuXHRcdFx0PEdlbmVyYWxGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0dlbmVyYWxGaWVsZHMnICkgfVxuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+XG5cdFx0XHQ8QWR2YW5jZWRGaWVsZHNcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQvPlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdDxkaXYgeyAuLi5ibG9ja1Byb3BzIH0ga2V5PXsgdW5pcUtleSggJ3ZpZXdCbG9jaycgKSB9PlxuXHRcdFx0PEZpZWxkV3JhcHBlclxuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnRmllbGRXcmFwcGVyJyApIH1cblx0XHRcdFx0eyAuLi5wcm9wcyB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdwbGFjZV9ob2xkZXJfYmxvY2snICkgfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgJ0lucHV0IHR5cGU9XCJ0aW1lXCInIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvRmllbGRXcmFwcGVyPlxuXHRcdDwvZGl2PlxuXHRdO1xufSIsImltcG9ydCBUaW1lRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3MvdGltZS1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnVGltZSBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IFRpbWVFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ1RpbWUgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0VG9vbEJhckZpZWxkcyxcblx0R2VuZXJhbEZpZWxkcyxcblx0QWR2YW5jZWRGaWVsZHMsXG5cdEZpZWxkV3JhcHBlcixcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdHVzZUJsb2NrUHJvcHNcbn0gPSB3cC5ibG9ja0VkaXRvciA/IHdwLmJsb2NrRWRpdG9yIDogd3AuZWRpdG9yO1xuXG5jb25zdCB7XG5cdFRleHRhcmVhQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXeXNpd3lnRWRpdCggcHJvcHMgKSB7XG5cblx0Y29uc3QgeyBlZGl0UHJvcHM6IHsgdW5pcUtleSB9LCBpc1NlbGVjdGVkIH0gPSBwcm9wcztcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoKTtcblxuXHRyZXR1cm4gW1xuXHRcdDxUb29sQmFyRmllbGRzXG5cdFx0XHRrZXk9eyB1bmlxS2V5KCAnVG9vbEJhckZpZWxkcycgKSB9XG5cdFx0XHR7IC4uLnByb3BzIH1cblx0XHQvPixcblx0XHRpc1NlbGVjdGVkICYmIChcblx0XHRcdDxJbnNwZWN0b3JDb250cm9sc1xuXHRcdFx0XHRrZXk9eyB1bmlxS2V5KCAnSW5zcGVjdG9yQ29udHJvbHMnICkgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8R2VuZXJhbEZpZWxkc1xuXHRcdFx0XHRcdGtleT17IHVuaXFLZXkoICdHZW5lcmFsRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEFkdmFuY2VkRmllbGRzXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0FkdmFuY2VkRmllbGRzJyApIH1cblx0XHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0KSxcblx0XHQ8ZGl2IGtleT17IHVuaXFLZXkoICd2aWV3QmxvY2snICkgfSB7IC4uLmJsb2NrUHJvcHMgfT5cblx0XHRcdDxGaWVsZFdyYXBwZXJcblx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ0ZpZWxkV3JhcHBlcicgKSB9XG5cdFx0XHRcdHsgLi4ucHJvcHMgfVxuXHRcdFx0PlxuXHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgdW5pcUtleSggJ3BsYWNlX2hvbGRlcl9ibG9jaycgKSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0ZpZWxkV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0XTtcblxufSIsImltcG9ydCBXeXNpd3lnRWRpdCBmcm9tIFwiLi9lZGl0XCI7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSBcIkBibG9ja3Mvd3lzaXd5Zy1maWVsZC9ibG9jay5qc29uXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgbmFtZSwgaWNvbiA9ICcnIH0gPSBtZXRhZGF0YTtcblxuLyoqXG4gKiBBdmFpbGFibGUgaXRlbXMgZm9yIGB1c2VFZGl0UHJvcHNgOlxuICogIC0gdW5pcUtleVxuICogIC0gZm9ybUZpZWxkc1xuICogIC0gYmxvY2tOYW1lXG4gKiAgLSBhdHRySGVscFxuICovXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0dGl0bGU6IF9fKCAnV3lzaXd5ZyBGaWVsZCcgKSxcblx0Y2xhc3NOYW1lOiBuYW1lLnJlcGxhY2UoICcvJywgJy0nICksXG5cdGljb246IDxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IGljb24gfSB9Pjwvc3Bhbj4sXG5cdGVkaXQ6IFd5c2l3eWdFZGl0LFxuXHR1c2VFZGl0UHJvcHM6IFsgJ3VuaXFLZXknLCAnYXR0ckhlbHAnIF0sXG5cdGV4YW1wbGU6IHtcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRsYWJlbDogJ1d5c2l3eWcgRmllbGQnLFxuXHRcdFx0ZGVzYzogJ0ZpZWxkIGRlc2NyaXB0aW9uLi4uJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtcblx0bWV0YWRhdGEsXG5cdG5hbWUsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIEJhc2VDb250cm9sLFxuXHRcdCAgX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBhcHBseUZpbHRlcnMsIGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XG5cbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5mdW5jdGlvbiBnZXRHZW5lcmF0b3JGaWVsZHMoIGdlbkZ1bmN0aW9uLCBwcm9wcyApIHtcblx0Y29uc3Qge1xuXHRcdFx0ICBhdHRyaWJ1dGVzLFxuXHRcdFx0ICBzZXRBdHRyaWJ1dGVzLFxuXHRcdFx0ICBlZGl0UHJvcHM6IHsgYXR0ckhlbHAgfSxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRzd2l0Y2ggKCBnZW5GdW5jdGlvbiApIHtcblx0XHRjYXNlICdudW1fcmFuZ2VfbWFudWFsJzpcblx0XHRcdHJldHVybiA8PlxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3RhcnQgb2YgcmFuZ2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9udW1iZXJzX21pbiB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfbnVtYmVyc19taW46IE51bWJlciggbmV3VmFsdWUgKSB9ICk7XG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRW5kIG9mIHJhbmdlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE51bWJlckNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfbnVtYmVyc19tYXggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX251bWJlcnNfbWF4OiBOdW1iZXIoIG5ld1ZhbHVlICkgfSApO1xuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1N0ZXAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0a2V5PSdzdGVwJ1xuXHRcdFx0XHRcdFx0c3RlcD17IDAuMDEgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9udW1iZXJzX3N0ZXAgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZ2VuZXJhdG9yX251bWJlcnNfc3RlcDogTnVtYmVyKCBuZXdWYWx1ZSApIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHQ8Lz47XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoICdqZXQuZmIuc2VsZWN0LnJhZGlvLmNoZWNrLmdlbmVyYXRvci5jb250cm9scycsIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9J2dlbmVyYXRvcl9maWVsZCdcblx0XHRcdFx0bGFiZWw9J0ZpZWxkIE5hbWUnXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfZmllbGQgfVxuXHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdnZW5lcmF0b3JfZmllbGQnLCBhdHRyaWJ1dGVzICkgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBnZW5lcmF0b3JfZmllbGQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPiwgZ2VuRnVuY3Rpb24sIHByb3BzICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0R2VuZXJhdG9yQWRkaXRpb25hbEZpZWxkcyggZ2VuRnVuY3Rpb24sIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0XHQgIGVkaXRQcm9wczogeyBhdHRySGVscCB9LFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdHN3aXRjaCAoIGdlbkZ1bmN0aW9uICkge1xuXHRcdGNhc2UgJ251bV9yYW5nZV9tYW51YWwnOlxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBhcHBseUZpbHRlcnMoICdqZXQuZmIuc2VsZWN0LnJhZGlvLmNoZWNrLmdlbmVyYXRvci5hZGRpdGlvbmFsQ29udHJvbHMnLCA8PlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRrZXk9J2Zyb21fZ2VuZXJhdG9yX192YWx1ZV9mcm9tX21ldGEnXG5cdFx0XHRcdFx0bGFiZWw9J1ZhbHVlIGZyb20gbWV0YSBmaWVsZCdcblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICd2YWx1ZV9mcm9tX21ldGEnICkgfVxuXHRcdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5mcm9tX2dlbmVyYXRvcl9fdmFsdWVfZnJvbV9tZXRhIH1cblx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZyb21fZ2VuZXJhdG9yX192YWx1ZV9mcm9tX21ldGE6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5J1xuXHRcdFx0XHRcdGxhYmVsPSdDYWxjdWxhdGVkIHZhbHVlIGZyb20gbWV0YSBmaWVsZCdcblx0XHRcdFx0XHRoZWxwPXsgYXR0ckhlbHAoICdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5JyApIH1cblx0XHRcdFx0XHR2YWx1ZT17IGF0dHJpYnV0ZXMuY2FsY3VsYXRlZF92YWx1ZV9mcm9tX2tleSB9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8Lz4sIGdlbkZ1bmN0aW9uLCBwcm9wcyApO1xuXHR9XG5cbn1cblxuZnVuY3Rpb24gRnJvbUdlbmVyYXRvcnNGaWVsZHMoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgYXR0cmlidXRlcyxcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcblx0XHRcdCAgZWRpdFByb3BzOiB7IGF0dHJIZWxwIH0sXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGtleT0nZ2VuZXJhdG9yX2Z1bmN0aW9uJ1xuXHRcdFx0bGFiZWw9J0dlbmVyYXRvciBGdW5jdGlvbidcblx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nZW5lcmF0b3JfZnVuY3Rpb24gfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGdlbmVyYXRvcl9mdW5jdGlvbjogbmV3VmFsdWUgfSApO1xuXHRcdFx0fSB9XG5cdFx0XHRvcHRpb25zPXsgd2luZG93LkpldEZvcm1TZWxlY3RGaWVsZERhdGEuZ2VuZXJhdG9yc19saXN0IH1cblx0XHQvPlxuXHRcdHsgZ2V0R2VuZXJhdG9yRmllbGRzKCBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9mdW5jdGlvbiwgcHJvcHMgKSB9XG5cdFx0eyBnZXRHZW5lcmF0b3JBZGRpdGlvbmFsRmllbGRzKCBhdHRyaWJ1dGVzLmdlbmVyYXRvcl9mdW5jdGlvbiwgcHJvcHMgKSB9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJvbUdlbmVyYXRvcnNGaWVsZHM7IiwiY29uc3Qge1xuXHRSZXBlYXRlcldpdGhTdGF0ZSxcblx0QWN0aW9uTW9kYWwsXG59ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0VGV4dENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgdXNlU3RhdGUgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IGFkZE5ld09wdGlvbiA9IHtcblx0bGFiZWw6ICcnLFxuXHR2YWx1ZTogJycsXG5cdGNhbGN1bGF0ZTogJydcbn07XG5cbmZ1bmN0aW9uIEZyb21NYW51YWxGaWVsZHMoIHByb3BzICkge1xuXG5cdGNvbnN0IFsgc2hvd01hbnVhbE1vZGFsLCBzZXRTaG93TW9kYWwgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xuXG5cdGNvbnN0IHtcblx0XHRzZXRBdHRyaWJ1dGVzLFxuXHRcdGF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXG5cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG5cdFx0c2V0U2hvd01vZGFsKCB0b2dnbGUgPT4gISB0b2dnbGUgKTtcblx0fVxuXG5cdGNvbnN0IG9uVXBkYXRlT3B0aW9ucyA9IGl0ZW1zID0+IHtcblx0XHQvKiBSZW1vdmUgZW1wdHkgb3B0aW9ucyAqL1xuXHRcdGNvbnN0IGZpZWxkX29wdGlvbnMgPSBpdGVtcy5maWx0ZXIoIG9wdGlvbiA9PiB7XG5cdFx0XHRyZXR1cm4gKCBCb29sZWFuKCBvcHRpb24udmFsdWUgKSB8fCBCb29sZWFuKCBvcHRpb24uY2FsY3VsYXRlICkgKTtcblx0XHR9ICk7XG5cblx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZpZWxkX29wdGlvbnMgfSApO1xuXHR9XG5cblx0Y29uc3QgaXRlbUhlYWRpbmcgPSAoIHsgY3VycmVudEl0ZW0sIGluZGV4IH0gKSA9PiB7XG5cdFx0Y29uc3QgbGVmdFBhcnQgPSBbIGAjJHsgaW5kZXggKyAxIH1gIF07XG5cdFx0Y29uc3QgcmlnaHRQYXJ0ID0gW107XG5cblx0XHRpZiAoIGN1cnJlbnRJdGVtLmxhYmVsICkge1xuXHRcdFx0cmlnaHRQYXJ0LnB1c2goIGBMYWJlbCBbJHsgY3VycmVudEl0ZW0ubGFiZWwgfV1gICk7XG5cdFx0fVxuXHRcdGlmICggY3VycmVudEl0ZW0udmFsdWUgKSB7XG5cdFx0XHRyaWdodFBhcnQucHVzaCggYFZhbHVlIFskeyBjdXJyZW50SXRlbS52YWx1ZSB9XWAgKTtcblx0XHR9XG5cdFx0aWYgKCBjdXJyZW50SXRlbS5jYWxjdWxhdGUgKSB7XG5cdFx0XHRyaWdodFBhcnQucHVzaCggYENhbGN1bGF0ZSBbJHsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1dYCApO1xuXHRcdH1cblx0XHRsZWZ0UGFydC5wdXNoKCByaWdodFBhcnQuam9pbiggJyB8ICcgKSApXG5cblx0XHRyZXR1cm4gbGVmdFBhcnQuam9pbiggJyAnICk7XG5cdH07XG5cblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9J2pldC1mb3JtL21hbmFnZS1tYW51YWwtaXRlbXMnPlxuXHRcdDxCdXR0b25cblx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRvbkNsaWNrPXsgdG9nZ2xlTW9kYWwgfVxuXHRcdFx0aWNvbj17ICdhZG1pbi10b29scycgfVxuXHRcdFx0c3R5bGU9eyB7XG5cdFx0XHRcdG1hcmdpbkJvdHRvbTogJzE1cHgnXG5cdFx0XHR9IH1cblx0XHQ+XG5cdFx0XHR7IF9fKCAnTWFuYWdlIEl0ZW1zJyApIH1cblx0XHQ8L0J1dHRvbj5cblx0XHR7IHNob3dNYW51YWxNb2RhbCAmJiA8QWN0aW9uTW9kYWxcblx0XHRcdHRpdGxlPXsgJ0VkaXQgTWFudWFsIE9wdGlvbnMnIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgdG9nZ2xlTW9kYWwgfVxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHQ+XG5cdFx0XHR7ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IHtcblx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlcldpdGhTdGF0ZVxuXHRcdFx0XHRcdGl0ZW1zPXsgYXR0cmlidXRlcy5maWVsZF9vcHRpb25zIH1cblx0XHRcdFx0XHRvblNhdmVJdGVtcz17IG9uVXBkYXRlT3B0aW9ucyB9XG5cdFx0XHRcdFx0bmV3SXRlbT17IGFkZE5ld09wdGlvbiB9XG5cdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxuXHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cblx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbD17IF9fKCAnQWRkIE5ldyBPcHRpb24nICkgfVxuXHRcdFx0XHRcdEl0ZW1IZWFkaW5nPXsgaXRlbUhlYWRpbmcgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyAoIHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPD5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0a2V5PSdtYW51YWxfbGFiZWwnXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0xhYmVsJyApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGN1cnJlbnRJdGVtLmxhYmVsIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZUN1cnJlbnRJdGVtKCB7IGxhYmVsOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGtleT0nbWFudWFsX3ZhbHVlJ1xuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWYWx1ZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS52YWx1ZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgdmFsdWU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0a2V5PSdtYW51YWxfY2FsY3VsYXRlJ1xuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDYWxjdWxhdGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uY2FsY3VsYXRlIH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBjYWxjdWxhdGU6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvPjtcblx0XHRcdFx0XHR9IH1cblx0XHRcdFx0PC9SZXBlYXRlcldpdGhTdGF0ZT5cblx0XHRcdH0gfVxuXHRcdDwvQWN0aW9uTW9kYWw+IH1cblx0PC9SZWFjdC5GcmFnbWVudD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyb21NYW51YWxGaWVsZHM7IiwiaW1wb3J0IHsgZ2V0U2VsZWN0U291cmNlIH0gZnJvbSBcIi4vc291cmNlc1wiO1xuXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmZ1bmN0aW9uIEZyb21Qb3N0VGVybXNGaWVsZHMoIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdHNldEF0dHJpYnV0ZXMsXG5cdFx0ZWRpdFByb3BzOiB7IGF0dHJIZWxwIH1cblx0fSA9IHByb3BzO1xuXG5cdHJldHVybiA8PlxuXHRcdHsgZ2V0U2VsZWN0U291cmNlKCBwcm9wcyApIH1cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT0ndmFsdWVfZnJvbV9rZXknXG5cdFx0XHRsYWJlbD17IF9fKCAnVmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy52YWx1ZV9mcm9tX2tleSB9XG5cdFx0XHRoZWxwPXsgYXR0ckhlbHAoICd2YWx1ZV9mcm9tX21ldGEnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHZhbHVlX2Zyb21fa2V5OiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PSdjYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5J1xuXHRcdFx0bGFiZWw9eyBfXyggJ0NhbGN1bGF0ZWQgdmFsdWUgZnJvbSBtZXRhIGZpZWxkJyApIH1cblx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5jYWxjdWxhdGVkX3ZhbHVlX2Zyb21fa2V5IH1cblx0XHRcdGhlbHA9eyBhdHRySGVscCggJ2NhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXknICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGNhbGN1bGF0ZWRfdmFsdWVfZnJvbV9rZXk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdDwvPjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGcm9tUG9zdFRlcm1zRmllbGRzOyIsImltcG9ydCB7IGxpc3RGcm9tIH0gZnJvbSBcIi4uLy4uL2Jsb2Nrcy9zZWxlY3QtcmFkaW8tY2hla2Mtb3B0aW9uc1wiO1xuXG5jb25zdCB7XG5cdEZpZWxkV3JhcHBlcixcbn0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0Q2hlY2tib3hDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRSYWRpb0NvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgREVMSU1JVEVSID0gJyAtICc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFJhZGlvQ2hlY2tQbGFjZWhvbGRlciggcHJvcHMgKSB7XG5cblx0Y29uc3Qge1xuXHRcdGVkaXRQcm9wczogeyBibG9ja05hbWUsIHVuaXFLZXkgfSxcblx0XHRzY3JpcHREYXRhLFxuXHRcdGF0dHJpYnV0ZXNcblx0fSA9IHByb3BzO1xuXG5cdGNvbnN0IGdldENoZWNrYm94ID0gKCBsYWJlbCwgaW5kZXggPSAxICkgPT4ge1xuXHRcdHJldHVybiA8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCBjaGVja2JveGVzLXdyYXAnIH1cblx0XHRcdGtleT17IGBjaGVja19wbGFjZV9ob2xkZXJfYmxvY2tfJHsgbGFiZWwgKyBpbmRleCB9YCB9XG5cdFx0XHRsYWJlbD17IGxhYmVsIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xuXHRcdFx0fSB9XG5cdFx0Lz47XG5cdH1cblxuXHRjb25zdCBnZXRTZWxlY3QgPSAoIHsgb3B0aW9ucywgaW5kZXggfSApID0+IHtcblx0XHRyZXR1cm4gPFNlbGVjdENvbnRyb2xcblx0XHRcdGtleT17IGBzZWxlY3RfcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGF0dHJpYnV0ZXMubmFtZSArIGluZGV4IH1gIH1cblx0XHRcdC8vbGFiZWw9eyBhdHRyaWJ1dGVzLmxhYmVsIH1cblx0XHRcdG9wdGlvbnM9eyBvcHRpb25zIH1cblx0XHRcdC8vaGVscD17IGF0dHJpYnV0ZXMuZGVzYyB9XG5cdFx0XHRvbkNoYW5nZT17ICgpID0+IHtcblx0XHRcdH0gfVxuXHRcdC8+O1xuXHR9XG5cblx0Y29uc3QgZ2V0UmFkaW8gPSAoIHsgb3B0aW9ucywgbGFiZWwsIGluZGV4IH0gKSA9PiB7XG5cdFx0cmV0dXJuIDxSYWRpb0NvbnRyb2xcblx0XHRcdGtleT17IGByYWRpb19wbGFjZV9ob2xkZXJfYmxvY2tfJHsgbGFiZWwgKyBpbmRleCB9YCB9XG5cdFx0XHQvL2xhYmVsPXsgYXR0cmlidXRlcy5sYWJlbCB9XG5cdFx0XHRvcHRpb25zPXsgb3B0aW9ucyB9XG5cdFx0XHQvL2hlbHA9eyBhdHRyaWJ1dGVzLmRlc2MgfVxuXHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XG5cdFx0XHR9IH1cblx0XHQvPjtcblx0fVxuXG5cdGNvbnN0IGdldFByb3AgPSAoIG9mLCBwcm9wTmFtZSwgaWZFbXB0eSA9ICcnICkgPT4ge1xuXHRcdGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBvZiAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG9mWyBwcm9wTmFtZSBdICkge1xuXHRcdFx0cmV0dXJuIG9mWyBwcm9wTmFtZSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBpZkVtcHR5O1xuXHR9O1xuXG5cdGNvbnN0IGdldExhYmVsUHJvcCA9IG9mID0+IHtcblx0XHRyZXR1cm4gZ2V0UHJvcCggb2YsICdsYWJlbCcgKTtcblx0fTtcblxuXHRjb25zdCBnZXRGdWxsTGFiZWwgPSAoKSA9PiB7XG5cblx0XHRjb25zdCB7XG5cdFx0XHRmaWVsZF9vcHRpb25zX2Zyb20sXG5cdFx0XHRmaWVsZF9vcHRpb25zX3Bvc3RfdHlwZSxcblx0XHRcdGZpZWxkX29wdGlvbnNfdGF4LFxuXHRcdFx0ZmllbGRfb3B0aW9uc19rZXksXG5cdFx0XHRnZW5lcmF0b3JfZnVuY3Rpb24sXG5cdFx0XHRnZW5lcmF0b3JfZmllbGRcblx0XHR9ID0gYXR0cmlidXRlcztcblxuXHRcdGxldCBmdWxsX2xhYmVsID0gW107XG5cdFx0bGV0IHZhbHVlID0gW107XG5cdFx0c3dpdGNoICggZmllbGRfb3B0aW9uc19mcm9tICkge1xuXHRcdFx0Y2FzZSAncG9zdHMnOlxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfcG9zdF90eXBlICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGdldExhYmVsUHJvcCggc2NyaXB0RGF0YS5wb3N0X3R5cGVzX2xpc3QuZmluZChcblx0XHRcdFx0XHRcdG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IGZpZWxkX29wdGlvbnNfcG9zdF90eXBlXG5cdFx0XHRcdFx0KSApICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3Rlcm1zJzpcblx0XHRcdFx0aWYgKCBmaWVsZF9vcHRpb25zX3RheCApIHtcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBnZXRMYWJlbFByb3AoIHNjcmlwdERhdGEudGF4b25vbWllc19saXN0LmZpbmQoXG5cdFx0XHRcdFx0XHRvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBmaWVsZF9vcHRpb25zX3RheFxuXHRcdFx0XHRcdCkgKSApXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ21ldGFfZmllbGQnOlxuXHRcdFx0XHRpZiAoIGZpZWxkX29wdGlvbnNfa2V5ICkge1xuXHRcdFx0XHRcdHZhbHVlLnB1c2goIGZpZWxkX29wdGlvbnNfa2V5ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2dlbmVyYXRlJzpcblx0XHRcdFx0aWYgKCBnZW5lcmF0b3JfZnVuY3Rpb24gKSB7XG5cdFx0XHRcdFx0dmFsdWUucHVzaCggZ2V0TGFiZWxQcm9wKCBzY3JpcHREYXRhLmdlbmVyYXRvcnNfbGlzdC5maW5kKFxuXHRcdFx0XHRcdFx0b3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZ2VuZXJhdG9yX2Z1bmN0aW9uXG5cdFx0XHRcdFx0KSApIClcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGdlbmVyYXRvcl9maWVsZCApIHtcblx0XHRcdFx0XHR2YWx1ZS5wdXNoKCBnZW5lcmF0b3JfZmllbGQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblx0XHRmdWxsX2xhYmVsLnB1c2goIGdldExhYmVsUHJvcCggbGlzdEZyb20uZmluZCggb3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gZmllbGRfb3B0aW9uc19mcm9tICkgKSApO1xuXG5cdFx0aWYgKCB2YWx1ZS5sZW5ndGggKSB7XG5cdFx0XHRmdWxsX2xhYmVsLnB1c2goIHZhbHVlLmpvaW4oIERFTElNSVRFUiApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZ1bGxfbGFiZWwuam9pbiggREVMSU1JVEVSICk7XG5cdH1cblxuXHRjb25zdCBnZXRNYW51YWxGaWVsZCA9ICggbGFiZWwgPSAnJyApID0+IHtcblx0XHRpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ2NoZWNrYm94JyApICkge1xuXHRcdFx0aWYgKCBsYWJlbCApIHtcblx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBsYWJlbCApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucy5tYXAoICggeyBsYWJlbDogY2hlY2tMYWJlbCB9LCBpbmRleCApID0+IHtcblx0XHRcdFx0cmV0dXJuIGdldENoZWNrYm94KCBjaGVja0xhYmVsLCBpbmRleCApXG5cdFx0XHR9ICk7XG5cblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ3NlbGVjdCcgKSApIHtcblx0XHRcdGlmICggbGFiZWwgKSB7XG5cdFx0XHRcdHJldHVybiBnZXRTZWxlY3QoIHtcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRcdG9wdGlvbnM6IFsgeyBsYWJlbCB9IF1cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGdldFNlbGVjdCgge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRvcHRpb25zOiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNcblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoIGJsb2NrTmFtZS5pbmNsdWRlcyggJ3JhZGlvJyApICkge1xuXHRcdFx0aWYgKCBsYWJlbCApIHtcblx0XHRcdFx0cmV0dXJuIGdldFJhZGlvKCB7XG5cdFx0XHRcdFx0YXR0cmlidXRlcyxcblx0XHRcdFx0XHRvcHRpb25zOiBbIHsgbGFiZWwgfSBdXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBnZXRSYWRpbygge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLFxuXHRcdFx0XHRvcHRpb25zOiBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gPEZpZWxkV3JhcHBlclxuXHRcdGtleT17ICdqZXQtZm9ybS1idWlsZGVyLWZpZWxkLXdyYXBwZXInIH1cblx0XHR7IC4uLnByb3BzIH1cblx0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXsgJ2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkcy1ncm91cCcgfT5cblx0XHRcdHsgKCAnbWFudWFsX2lucHV0JyAhPT0gYXR0cmlidXRlcy5maWVsZF9vcHRpb25zX2Zyb20gfHwgISBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnMubGVuZ3RoICkgJiZcblx0XHRcdGdldE1hbnVhbEZpZWxkKCBnZXRGdWxsTGFiZWwoIHNjcmlwdERhdGEsIGF0dHJpYnV0ZXMgKSApIHx8IG51bGxcblx0XHRcdH1cblx0XHRcdHsgJ21hbnVhbF9pbnB1dCcgPT09IGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9uc19mcm9tICYmIGF0dHJpYnV0ZXMuZmllbGRfb3B0aW9ucy5sZW5ndGggJiZcblx0XHRcdGdldE1hbnVhbEZpZWxkKCkgfHwgbnVsbFxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQ8L0ZpZWxkV3JhcHBlcj47XG5cblxufVxuXG5cbiIsImltcG9ydCB7IGxpc3RGcm9tIH0gZnJvbSBcIi4uLy4uL2Jsb2Nrcy9zZWxlY3QtcmFkaW8tY2hla2Mtb3B0aW9uc1wiO1xuaW1wb3J0IEZyb21NYW51YWxGaWVsZHMgZnJvbSBcIi4vZnJvbS1tYW51YWwtZmllbGRzXCI7XG5pbXBvcnQgRnJvbVBvc3RUZXJtc0ZpZWxkcyBmcm9tIFwiLi9mcm9tLXBvc3QtdGVybXMtZmllbGRzXCI7XG5pbXBvcnQgRnJvbUdlbmVyYXRvcnNGaWVsZHMgZnJvbSBcIi4vZnJvbS1nZW5lcmF0b3JzLWZpZWxkc1wiO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFNlbGVjdENvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgamV0RW5naW5lVmVyc2lvbiB9ID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhO1xuY29uc3QgeyB2ZXJzaW9uQ29tcGFyZSB9ID0gSmV0RkJBY3Rpb25zO1xuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCBjYW5SZW5kZXJHbG9zc2FyaWVzID0gXCJcIiAhPT0gamV0RW5naW5lVmVyc2lvbjtcblxuZnVuY3Rpb24gZ2V0RmllbGRPcHRpb25zRm9ybSggb3B0aW9uc0Zyb20sIHByb3BzICkge1xuXHRjb25zdCB7XG5cdFx0XHQgIGF0dHJpYnV0ZXMsXG5cdFx0XHQgIHNldEF0dHJpYnV0ZXMsXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0c3dpdGNoICggb3B0aW9uc0Zyb20gKSB7XG5cdFx0Y2FzZSAnbWFudWFsX2lucHV0Jzpcblx0XHRcdHJldHVybiA8RnJvbU1hbnVhbEZpZWxkc1xuXHRcdFx0XHRrZXk9J2Zyb21fbWFudWFsJ1xuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+O1xuXHRcdGNhc2UgJ3Bvc3RzJzpcblx0XHRjYXNlICd0ZXJtcyc6XG5cdFx0XHRyZXR1cm4gPEZyb21Qb3N0VGVybXNGaWVsZHNcblx0XHRcdFx0a2V5PSdmb3JtX3Bvc3RzX3Rlcm1zJ1xuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+O1xuXHRcdGNhc2UgJ21ldGFfZmllbGQnOlxuXHRcdFx0cmV0dXJuIDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9J2ZpZWxkX29wdGlvbnNfa2V5J1xuXHRcdFx0XHRsYWJlbD0nTWV0YSBmaWVsZCB0byBnZXQgdmFsdWUgZnJvbSdcblx0XHRcdFx0dmFsdWU9eyBhdHRyaWJ1dGVzLmZpZWxkX29wdGlvbnNfa2V5IH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgZmllbGRfb3B0aW9uc19rZXk6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0fSB9XG5cdFx0XHQvPjtcblx0XHRjYXNlICdnZW5lcmF0ZSc6XG5cdFx0XHRyZXR1cm4gPEZyb21HZW5lcmF0b3JzRmllbGRzXG5cdFx0XHRcdGtleT0nZm9ybV9nZW5lcmF0b3JzJ1xuXHRcdFx0XHR7IC4uLnByb3BzIH1cblx0XHRcdC8+O1xuXHRcdGNhc2UgJ2dsb3NzYXJ5Jzpcblx0XHRcdHJldHVybiBjYW5SZW5kZXJHbG9zc2FyaWVzICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdGtleT0nc2VsZWN0X2dsb3NzYXJ5J1xuXHRcdFx0XHRsYWJlbD0nU2VsZWN0IEdsb3NzYXJ5J1xuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0XHRcdHZhbHVlPXsgYXR0cmlidXRlcy5nbG9zc2FyeV9pZCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgZ2xvc3NhcnlfaWQgPT4gc2V0QXR0cmlidXRlcyggeyBnbG9zc2FyeV9pZCB9ICkgfVxuXHRcdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHRcdHsgdmFsdWU6ICcnLCBsYWJlbDogJy0tJyB9LFxuXHRcdFx0XHRcdC4uLndpbmRvdy5KZXRGb3JtU2VsZWN0RmllbGREYXRhLmdsb3NzYXJpZXNfbGlzdCxcblx0XHRcdFx0XSB9XG5cdFx0XHQvPjtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGFwcGx5RmlsdGVycyggJ2pldC5mYi5zZWxlY3QucmFkaW8uY2hlY2suY29udHJvbHMnLCBudWxsLCBvcHRpb25zRnJvbSwgcHJvcHMgKTtcblxuXHR9XG59XG5cbmZ1bmN0aW9uIFNlbGVjdFJhZGlvQ2hlY2soIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgYXR0cmlidXRlcyxcblx0XHRcdCAgc2V0QXR0cmlidXRlcyxcblx0XHRcdCAgaXNTZWxlY3RlZCxcblx0XHRcdCAgY2hpbGRyZW4gPSBbXSxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRjb25zdCB7IGZpZWxkX29wdGlvbnNfZnJvbSB9ID0gYXR0cmlidXRlcztcblxuXHRyZXR1cm4gaXNTZWxlY3RlZCAmJiA8ZGl2IGNsYXNzTmFtZT0naW5zaWRlLWJsb2NrLW9wdGlvbnMnPlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9J2ZpZWxkX29wdGlvbnNfZnJvbSdcblx0XHRcdGxhYmVsPSdGaWxsIE9wdGlvbnMgRnJvbSdcblx0XHRcdGxhYmVsUG9zaXRpb249J3RvcCdcblx0XHRcdHZhbHVlPXsgZmllbGRfb3B0aW9uc19mcm9tIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBmaWVsZF9vcHRpb25zX2Zyb206IG5ld1ZhbHVlIH0gKTtcblx0XHRcdH0gfVxuXHRcdFx0b3B0aW9ucz17IGxpc3RGcm9tIH1cblx0XHQvPlxuXHRcdHsgZ2V0RmllbGRPcHRpb25zRm9ybSggZmllbGRfb3B0aW9uc19mcm9tLCBwcm9wcyApIH1cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RSYWRpb0NoZWNrOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCBsb2NhbGl6ZURhdGEgPSB3aW5kb3cuSmV0Rm9ybVNlbGVjdEZpZWxkRGF0YTtcblxuXG5jb25zdCB7XG5cdFNlbGVjdENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qgc291cmNlcyA9IHtcblx0dGVybXM6IHtcblx0XHRsYWJlbDogX18oICdUYXhvbm9teScgKSxcblx0XHRhdHRyOiAnZmllbGRfb3B0aW9uc190YXgnLFxuXHRcdG9wdGlvbnM6IGxvY2FsaXplRGF0YS50YXhvbm9taWVzX2xpc3Rcblx0fSxcblx0cG9zdHM6IHtcblx0XHRsYWJlbDogX18oICdQb3N0IFR5cGUnICksXG5cdFx0YXR0cjogJ2ZpZWxkX29wdGlvbnNfcG9zdF90eXBlJyxcblx0XHRvcHRpb25zOiBsb2NhbGl6ZURhdGEucG9zdF90eXBlc19saXN0XG5cdH1cbn07XG5cbmNvbnN0IGdldFNlbGVjdFNvdXJjZSA9ICggcHJvcHMgKSA9PiB7XG5cdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgZmllbGRfb3B0aW9uc19mcm9tIH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGlmICggISBzb3VyY2VzWyBmaWVsZF9vcHRpb25zX2Zyb20gXSAmJiAhIHNvdXJjZXNbIGZpZWxkX29wdGlvbnNfZnJvbSBdICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdGNvbnN0IHNvdXJjZSA9IHNvdXJjZXNbIGZpZWxkX29wdGlvbnNfZnJvbSBdO1xuXG5cdHJldHVybiA8U2VsZWN0Q29udHJvbFxuXHRcdGxhYmVsPXsgc291cmNlLmxhYmVsIH1cblx0XHRsYWJlbFBvc2l0aW9uPSd0b3AnXG5cdFx0dmFsdWU9eyBhdHRyaWJ1dGVzWyBzb3VyY2UuYXR0ciBdIH1cblx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgWyBzb3VyY2UuYXR0ciBdOiBuZXdWYWx1ZSB9ICk7XG5cdFx0fSB9XG5cdFx0b3B0aW9ucz17IHNvdXJjZS5vcHRpb25zIH1cblx0Lz5cbn07XG5cbmV4cG9ydCB7IGdldFNlbGVjdFNvdXJjZSB9OyIsImNvbnN0IHtcblx0XHQgIEdsb2JhbEZpZWxkLFxuXHRcdCAgQXZhaWxhYmxlTWFwRmllbGQsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyB3aXRoUHJlc2V0IH0gPSBKZXRGQkFjdGlvbnM7XG5cbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmZ1bmN0aW9uIEdlbmVyYWxQcmVzZXQoIHtcblx0XHRcdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0XHRcdGF2YWlsYWJsZUZpZWxkcyxcblx0XHRcdFx0XHRcdFx0aXNNYXBGaWVsZFZpc2libGUsXG5cdFx0XHRcdFx0XHRcdGlzVmlzaWJsZSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2UsXG5cdFx0XHRcdFx0XHR9ICkge1xuXHRjb25zdCBwb3NpdGlvbiA9ICdnZW5lcmFsJztcblxuXHRjb25zdCBvbkNoYW5nZVZhbHVlID0gKCBuZXdWYWx1ZSwgbmFtZSApID0+IHtcblx0XHRvbkNoYW5nZSggeyAuLi52YWx1ZSwgWyBuYW1lIF06IG5ld1ZhbHVlIH0gKTtcblx0fVxuXG5cdHJldHVybiA8RnJhZ21lbnQga2V5PXsgJ2pmYi1nZW5lcmFsLXByZXNldC1tYWluLXdyYXBwZXInIH0+XG5cdFx0eyB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEucHJlc2V0Q29uZmlnLmdsb2JhbF9maWVsZHMubWFwKCAoIGRhdGEsIGluZGV4ICkgPT4gPEdsb2JhbEZpZWxkXG5cdFx0XHRrZXk9eyBkYXRhLm5hbWUgKyBpbmRleCB9XG5cdFx0XHR2YWx1ZT17IHZhbHVlIH1cblx0XHRcdGluZGV4PXsgaW5kZXggfVxuXHRcdFx0ZGF0YT17IGRhdGEgfVxuXHRcdFx0b3B0aW9ucz17IGRhdGEub3B0aW9ucyB9XG5cdFx0XHRvbkNoYW5nZVZhbHVlPXsgb25DaGFuZ2VWYWx1ZSB9XG5cdFx0XHRpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxuXHRcdFx0cG9zaXRpb249eyBwb3NpdGlvbiB9XG5cdFx0Lz4gKSB9XG5cblx0XHR7IHZhbHVlLmZyb20gJiYgKFxuXHRcdFx0YXZhaWxhYmxlRmllbGRzLm1hcCggKCBmaWVsZCwgaW5kZXggKSA9PiA8QXZhaWxhYmxlTWFwRmllbGRcblx0XHRcdFx0a2V5PXsgZmllbGQgKyBpbmRleCB9XG5cdFx0XHRcdGZpZWxkc01hcD17IHZhbHVlLmZpZWxkc19tYXAgfVxuXHRcdFx0XHRmaWVsZD17IGZpZWxkIH1cblx0XHRcdFx0aW5kZXg9eyBpbmRleCB9XG5cdFx0XHRcdG9uQ2hhbmdlVmFsdWU9eyBvbkNoYW5nZVZhbHVlIH1cblx0XHRcdFx0aXNNYXBGaWVsZFZpc2libGU9eyBpc01hcEZpZWxkVmlzaWJsZSB9XG5cdFx0XHRcdHZhbHVlPXsgdmFsdWUgfVxuXHRcdFx0Lz4gKVxuXHRcdCkgfVxuXHQ8L0ZyYWdtZW50Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFByZXNldCggR2VuZXJhbFByZXNldCApOyIsImNvbnN0IHtcblx0XHQgIGFkZEFjdGlvbixcblx0XHQgIGdsb2JhbFRhYixcblx0XHQgIFRvb2xzOiB7IHdpdGhQbGFjZWhvbGRlciB9LFxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7XG5cdFx0ICBBY3Rpb25GaWVsZHNNYXAsXG5cdFx0ICBXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxuXHRcdCAgUGxhY2Vob2xkZXJNZXNzYWdlLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcblx0XHQgIFNlbGVjdENvbnRyb2wsXG5cdFx0ICBCYXNlQ29udHJvbCxcblx0XHQgIEJ1dHRvbixcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdFx0ICB1c2VFZmZlY3QsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMgfSA9IEpldEZCSG9va3M7XG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5cbmZ1bmN0aW9uIEFjdGl2ZUNhbXBhaWduQWN0aW9uKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0XHQgIHNldHRpbmdzLFxuXHRcdFx0ICBvbkNoYW5nZVNldHRpbmcsXG5cdFx0XHQgIG9uQ2hhbmdlLFxuXHRcdFx0ICBnZXRNYXBGaWVsZCxcblx0XHRcdCAgc2V0TWFwRmllbGQsXG5cdFx0XHQgIHNvdXJjZSxcblx0XHRcdCAgbGFiZWwsXG5cdFx0XHQgIGhlbHAsXG5cdFx0XHQgIHJlcXVlc3RGaWVsZHMsXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgY3VycmVudFRhYiA9IGdsb2JhbFRhYiggeyBzbHVnOiAnYWN0aXZlLWNhbXBhaWduLXRhYicgfSApXG5cblx0Y29uc3QgWyBmb3JtRmllbGRzTGlzdCwgc2V0Rm9ybUZpZWxkcyBdID0gdXNlU3RhdGUoIFtdICk7XG5cblx0Y29uc3QgWyBidXR0b25DbGFzcywgc2V0QnV0dG9uQ2xhc3MgXSA9IHVzZVN0YXRlKCAoKSA9PiAoIHNldHRpbmdzLmlzVmFsaWRBUElcblx0XHQ/ICdpcy12YWxpZCdcblx0XHQ6ICdpcy1pbnZhbGlkJyApLFxuXHQpO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldEZvcm1GaWVsZHMoIFsgLi4uZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKSwgLi4ucmVxdWVzdEZpZWxkcyBdICk7XG5cdH0sIFtdIClcblxuXHRmdW5jdGlvbiBnZXRBUEkoIHByb3AgKSB7XG5cdFx0cmV0dXJuIHNldHRpbmdzLnVzZV9nbG9iYWwgPyBjdXJyZW50VGFiWyBwcm9wIF0gOiAoIHNldHRpbmdzWyBwcm9wIF0gfHwgXCJcIiApO1xuXHR9XG5cblx0ZnVuY3Rpb24gdmFsaWRhdGVBY3RpdmVDYW1wYWlnbkRhdGEoKSB7XG5cdFx0Y29uc3QgYXBpID0ge1xuXHRcdFx0YXBpX2tleTogZ2V0QVBJKCAnYXBpX2tleScgKSxcblx0XHRcdGFwaV91cmw6IGdldEFQSSggJ2FwaV91cmwnICksXG5cdFx0fTtcblxuXHRcdGdldEFjdGl2ZUNhbXBhaWduRGF0YSggdHJ1ZSwgYXBpICk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRBY3RpdmVDYW1wYWlnbkRhdGEoIGlzVmFsaWRhdGUgPSBmYWxzZSwgeyBhcGlfa2V5ID0gJycsIGFwaV91cmwgPSAnJyB9ICkge1xuXHRcdGlmICggISBhcGlfa2V5IHx8ICEgYXBpX3VybCApIHtcblx0XHRcdG9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xuXHRcdFx0c2V0QnV0dG9uQ2xhc3MoICdpcy1pbnZhbGlkJyApO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZW5kcG9pbnQgPSAnL2FkbWluL2FwaS5waHA/YXBpX2FjdGlvbj1saXN0X2xpc3QnO1xuXHRcdGNvbnN0IHVybCA9IGFwaV91cmwgKyBlbmRwb2ludCArICcmYXBpX2tleT0nICsgYXBpX2tleSArICcmaWRzPWFsbCZhcGlfb3V0cHV0PWpzb24nO1xuXG5cdFx0c2V0QnV0dG9uQ2xhc3MoICdsb2FkaW5nJyApO1xuXG5cdFx0alF1ZXJ5LmdldEpTT04oIHVybCApXG5cdFx0XHQuc3VjY2VzcyggZnVuY3Rpb24oIGRhdGEgKSB7XG5cdFx0XHRcdGlmICggdW5kZWZpbmVkICE9PSBkYXRhLnJlc3VsdF9jb2RlICYmIGRhdGEucmVzdWx0X2NvZGUgKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGlzdHMgPSBbXTtcblxuXHRcdFx0XHRcdGZvciAoIHZhciBwcm9wIGluIGRhdGEgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gZGF0YVsgcHJvcCBdLmlkICkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxpc3RzLnB1c2goIHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGRhdGFbIHByb3AgXS5pZCxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IGRhdGFbIHByb3AgXS5uYW1lLFxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9uQ2hhbmdlKCB7XG5cdFx0XHRcdFx0XHQuLi5zZXR0aW5ncyxcblx0XHRcdFx0XHRcdGRhdGE6IGxpc3RzLFxuXHRcdFx0XHRcdFx0aXNWYWxpZEFQSTogdHJ1ZSxcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0c2V0QnV0dG9uQ2xhc3MoICdpcy12YWxpZCcgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIGZhbHNlLCAnaXNWYWxpZEFQSScgKTtcblx0XHRcdFx0XHRzZXRCdXR0b25DbGFzcyggJ2lzLWludmFsaWQnICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdFx0LmVycm9yKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2V0QnV0dG9uQ2xhc3MoICdpcy1pbnZhbGlkJyApO1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIGZhbHNlLCAnaXNWYWxpZEFQSScgKTtcblx0XHRcdH0gKTtcblx0fVxuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdHJldHVybiA8PlxuXHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRrZXk9eyAndXNlX2dsb2JhbCcgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZV9nbG9iYWwnICkgfVxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0b25DaGFuZ2U9eyB1c2VfZ2xvYmFsID0+IHtcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBCb29sZWFuKCB1c2VfZ2xvYmFsICksICd1c2VfZ2xvYmFsJyApXG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FwaV9kYXRhJyApIH1cblx0XHRcdGtleT17ICdhY3RpdmVjYW1wYWlnbl9pbnB1dF9rZXknIH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCBqZXQtZC1mbGV4LWJldHdlZW4nPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdhcGlfdXJsJ1xuXHRcdFx0XHRcdFx0aGVscD17IGxhYmVsKCAnYXBpX3VybCcgKSB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2pldC1jb250cm9sLWNsZWFyJ1xuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0QVBJKCAnYXBpX3VybCcgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV91cmwnICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J2FwaV9rZXknXG5cdFx0XHRcdFx0XHRoZWxwPXsgbGFiZWwoICdhcGlfa2V5JyApIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXInXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBnZXRBUEkoICdhcGlfa2V5JyApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnYXBpX2tleScgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRrZXk9eyAndmFsaWRhdGVfYXBpX2tleScgfVxuXHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdG9uQ2xpY2s9eyB2YWxpZGF0ZUFjdGl2ZUNhbXBhaWduRGF0YSB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgYCR7IGJ1dHRvbkNsYXNzIH0gamV0LWZvcm0tdmFsaWRhdGUtYnV0dG9uYCB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJkYXNoaWNvbnNcIi8+XG5cdFx0XHRcdFx0eyBzZXR0aW5ncy5pc1ZhbGlkQVBJID8gbGFiZWwoICdyZXRyeV9yZXF1ZXN0JyApIDogbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0PGRpdiBzdHlsZT17IHtcblx0XHRcdHBhZGRpbmdCb3R0b206ICcxLjJlbScsXG5cdFx0fSB9PlxuXHRcdFx0eyBoZWxwKCAnYXBpX2tleV9saW5rX3ByZWZpeCcgKSB9IDxhXG5cdFx0XHRocmVmPXsgaGVscCggJ2FwaV9rZXlfbGluaycgKSB9PnsgaGVscCggJ2FwaV9rZXlfbGlua19zdWZmaXgnICkgfTwvYT5cblx0XHQ8L2Rpdj5cblx0XHR7IHNldHRpbmdzLmlzVmFsaWRBUEkgJiYgPFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0a2V5PSdhY3RpdmVjYW1wYWlnbl9zZWxlY3RfbGlzdHMnXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsaXN0X2lkJyApIH1cblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmxpc3RfaWQgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2xpc3RfaWQnICkgfVxuXHRcdFx0XHRvcHRpb25zPXsgd2l0aFBsYWNlaG9sZGVyKCBzZXR0aW5ncy5kYXRhIHx8IFtdICkgfVxuXHRcdFx0Lz5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9J2FjdGl2ZWNhbXBhaWduX3RhZ3MnXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd0YWdzJyApIH1cblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy50YWdzIH1cblx0XHRcdFx0aGVscD17IGhlbHAoICd0YWdzJyApIH1cblx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWwsICd0YWdzJyApIH1cblx0XHRcdC8+XG5cdFx0XHQ8QWN0aW9uRmllbGRzTWFwXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cblx0XHRcdFx0ZmllbGRzPXsgT2JqZWN0LmVudHJpZXMoIHNvdXJjZS5hY3RpdmVjYW1wYWlnbl9maWVsZHMgKSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKCB7IGZpZWxkSWQsIGZpZWxkRGF0YSwgaW5kZXggfSApID0+IDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXG5cdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkSWQsIGZpZWxkRGF0YSBdIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBmaWVsZElkICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBnZXRNYXBGaWVsZCggeyBuYW1lOiBmaWVsZElkIH0gKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJZCwgdmFsdWUgfSApIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzTGlzdCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPiB9XG5cdFx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cblx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XG5cdDwvPjtcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5hZGRBY3Rpb24oICdhY3RpdmVfY2FtcGFpZ24nLCB3aXRoU2VsZWN0KCB3aXRoUmVxdWVzdEZpZWxkcyApKCBBY3RpdmVDYW1wYWlnbkFjdGlvbiApIClcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VBY3Rpb25Db21wb25lbnQgZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0YWRkUGxhY2Vob2xkZXJGb3JTZWxlY3QoIGFycmF5LCBsYWJlbCA9ICctLScgKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgbGFiZWwgfSxcblx0XHRcdC4uLmFycmF5LFxuXHRcdF07XG5cdH1cblxuXHRvbkNoYW5nZVNldHRpbmcoIHZhbHVlLCBrZXkgKSB7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSgge1xuXHRcdFx0Li4udGhpcy5wcm9wcy5zZXR0aW5ncyxcblx0XHRcdFsga2V5IF06IHZhbHVlLFxuXHRcdH0gKTtcblx0fTtcblxuXHRvbkNoYW5nZVNldHRpbmdPYmooIHZhbHVlICkge1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcblx0XHRcdC4uLnRoaXMucHJvcHMuc2V0dGluZ3MsXG5cdFx0XHQuLi52YWx1ZSxcblx0XHR9ICk7XG5cdH07XG5cblx0Z2V0RmllbGREZWZhdWx0KCBuYW1lICkge1xuXHRcdGNvbnN0IHNvdXJjZSA9ICdmaWVsZHNfbWFwJztcblxuXHRcdHJldHVybiB0aGlzLmdldEZpZWxkQnlOYW1lKFxuXHRcdFx0eyBuYW1lLCBzb3VyY2UgfSxcblx0XHQpO1xuXHR9XG5cblx0Z2V0RmllbGRNZXRhKCBuYW1lICkge1xuXHRcdGNvbnN0IHNvdXJjZSA9ICdtZXRhX2ZpZWxkc19tYXAnO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RmllbGRCeU5hbWUoXG5cdFx0XHR7IG5hbWUsIHNvdXJjZSB9LFxuXHRcdCk7XG5cdH1cblxuXHRnZXRGaWVsZEJ5TmFtZSggeyBzb3VyY2UsIG5hbWUgfSApIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbIHNvdXJjZSBdWyBuYW1lIF07XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdG9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBuYW1lRmllbGQgKSB7XG5cdFx0Y29uc3Qgc291cmNlID0gJ2ZpZWxkc19tYXAnO1xuXG5cdFx0dGhpcy5jaGFuZ2VGaWVsZHNNYXAoXG5cdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9LFxuXHRcdCk7XG5cdH07XG5cblx0b25DaGFuZ2VNZXRhRmllbGRNYXAoIHZhbHVlLCBuYW1lRmllbGQgKSB7XG5cdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XG5cblx0XHR0aGlzLmNoYW5nZUZpZWxkc01hcChcblx0XHRcdHsgdmFsdWUsIG5hbWVGaWVsZCwgc291cmNlIH0sXG5cdFx0KTtcblx0fTtcblxuXHRjaGFuZ2VGaWVsZHNNYXAoIHsgc291cmNlLCBuYW1lRmllbGQsIHZhbHVlIH0gKSB7XG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdHt9LFxuXHRcdFx0dGhpcy5wcm9wcy5zZXR0aW5nc1sgc291cmNlIF0sXG5cdFx0XHR7IFsgbmFtZUZpZWxkIF06IHZhbHVlIH0sXG5cdFx0KTtcblxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoIHtcblx0XHRcdC4uLnRoaXMucHJvcHMuc2V0dGluZ3MsXG5cdFx0XHRbIHNvdXJjZSBdOiBmaWVsZHNNYXAsXG5cdFx0fSApO1xuXHR9XG5cbn0iLCJcbmNvbnN0IHsgVG9vbHMsIGFkZEFjdGlvbiB9ID0gSmV0RkJBY3Rpb25zO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRCYXNlQ29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0dXNlU3RhdGVcbn0gPSB3cC5lbGVtZW50O1xuXG5hZGRBY3Rpb24oICdjYWxsX2hvb2snLCBmdW5jdGlvbiBDYWxsSG9va0FjdGlvbiggeyBzZXR0aW5ncywgb25DaGFuZ2UsIHNvdXJjZSwgbGFiZWwsIGhlbHAgfSApIHtcblxuXHRjb25zdCBvbkNoYW5nZVNldHRpbmcgPSAoIHZhbHVlLCBrZXkgKSA9PiB7XG5cdFx0b25DaGFuZ2UoIHtcblx0XHRcdC4uLnNldHRpbmdzLFxuXHRcdFx0WyBrZXkgXTogdmFsdWVcblx0XHR9ICk7XG5cdH07XG5cblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0cmV0dXJuICggPGRpdiBrZXk9XCJjYWxsX2hvb2tcIj5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGtleT0naG9va19uYW1lJ1xuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2hvb2tfbmFtZScgKSB9XG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLmhvb2tfbmFtZSB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnaG9va19uYW1lJyApXG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0a2V5PSdoZWxwX21lc3NhZ2UnXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC1jYWxsLWhvb2staW5zdHJ1Y3Rpb24nPlxuXHRcdFx0XHR7IF9fKCAnQ2FsbGVkIGhvb2sgbmFtZXM6JyApIH1cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxjb2RlPmpldC1mb3JtLWJ1aWxkZXIvY3VzdG9tLWFjdGlvbi97IHNldHRpbmdzLmhvb2tfbmFtZSB9PC9jb2RlPiAtIHsgX18oICdXUCBhY3Rpb24uIFBlcmZvcm0gYSBob29rIHdpdGhvdXQgYW4gYWJpbGl0eSB0byB2YWxpZGF0ZSBmb3JtLCcgKSB9XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8Y29kZT5qZXQtZm9ybS1idWlsZGVyL2N1c3RvbS1maWx0ZXIveyBzZXR0aW5ncy5ob29rX25hbWUgfTwvY29kZT4gLSB7IF9fKCAnV1AgZmlsdGVyLiBQZXJmb3JtIGEgaG9vayB3aXRoIGFuIGFiaWxpdHkgdG8gdmFsaWRhdGUgZm9ybS4gQWxsb3dzIHRvIHJldHVybiBlcnJvciBtZXNzYWdlLicgKSB9XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFx0eyBfXyggJ0hvb2sgYXJndW1lbnRzOicgKSB9XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+PGNvZGU+JHJlc3VsdDwvY29kZT4gLSB7IF9fKCAnb25seSBmb3IgV1AgZmlsdGVyLiBIb29rIGV4ZWN1dGlvbiByZXN1bHQsJyApIH08L2xpPlxuXHRcdFx0XHRcdDxsaT48Y29kZT4kcmVxdWVzdDwvY29kZT4gLSB7IF9fKCAnYXJyYXkgd2l0aCBzdWJtaXR0ZWQgZm9ybSBkYXRhLCcgKSB9PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8Y29kZT4kYWN0aW9uX2hhbmRsZXI8L2NvZGU+IC0geyBfXyggJ2FjdGlvbiBoYW5kbGVyIG9iamVjdCwgYWxsb3dzIHRvIG1hbmFnZSBhY3Rpb25zIGRhdGEgYW5kIHRvIHRocm93cyBlcnJvciBzdGF0dXM6JyApIH1cblx0XHRcdFx0XHRcdDxjb2RlPnRocm93IG5ldyBBY3Rpb25fRXhjZXB0aW9uKCAnZmFpbGVkJyApPC9jb2RlPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXG5cdDwvZGl2PiApO1xuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59ICk7XG4iLCJjb25zdCB7XG5cdFRvb2xzLFxuXHRhZGRBY3Rpb24sXG5cdGdldEZvcm1GaWVsZHNCbG9ja3Ncbn0gPSBKZXRGQkFjdGlvbnM7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0VGV4dENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdEJhc2VDb250cm9sXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHR1c2VTdGF0ZVxufSA9IHdwLmVsZW1lbnQ7XG5cbmFkZEFjdGlvbiggJ2NhbGxfd2ViaG9vaycsIGNsYXNzIENhbGxXZWJIb29rQWN0aW9uIGV4dGVuZHMgd3AuZWxlbWVudC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMuZmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc2V0dGluZ3MsIGxhYmVsLCBvbkNoYW5nZVNldHRpbmcgfSA9IHRoaXMucHJvcHM7XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRcdHJldHVybiA8VGV4dENvbnRyb2xcblx0XHRcdGtleT0nd2ViaG9va191cmwnXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnd2ViaG9va191cmwnICkgfVxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy53ZWJob29rX3VybCB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ3dlYmhvb2tfdXJsJyApIH1cblx0XHQvPjtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn0gKTtcbiIsImltcG9ydCBJbnRlZ3JhdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9pbnRlZ3JhdGlvbi1jb21wb25lbnRcIjtcblxuY29uc3Qge1xuXHRhZGRBY3Rpb24sXG5cdGdsb2JhbFRhYlxufSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxufSA9IEpldEZCQ29tcG9uZW50cztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0QmFzZUNvbnRyb2wsXG5cdEJ1dHRvbixcblx0X19leHBlcmltZW50YWxOdW1iZXJDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmxldCB7IE51bWJlckNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmlmICggdHlwZW9mIE51bWJlckNvbnRyb2wgPT09ICd1bmRlZmluZWQnICkge1xuXHROdW1iZXJDb250cm9sID0gX19leHBlcmltZW50YWxOdW1iZXJDb250cm9sO1xufVxuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5jbGFzcyBHZXRSZXNwb25zZUFjdGlvbiBleHRlbmRzIEludGVncmF0aW9uQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5mb3JtRmllbGRzTGlzdCA9IFsgLi4udGhpcy5mb3JtRmllbGRzTGlzdCwgLi4udGhpcy5wcm9wcy5yZXF1ZXN0RmllbGRzIF07XG5cdH1cblxuXHRnZXRGaWVsZHMoKSB7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG5cdFx0aWYgKCBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLmRhdGEuZmllbGRzICkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5kYXRhLmZpZWxkcyApO1xuXHRcdH1cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRnZXRMaXN0cygpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MuZGF0YS5saXN0cyApIHtcblx0XHRcdHJldHVybiB0aGlzLmZvcm1hdEVudHJpZXNBcnJheSggc2V0dGluZ3MuZGF0YS5saXN0cyApO1xuXHRcdH1cblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRmb3JtYXRFbnRyaWVzQXJyYXkoIGVudHJpZXMgPSBbXSwgaXNOZWVkUGxhY2Vob2xkZXIgPSB0cnVlICkge1xuXHRcdGNvbnN0IHBsYWNlaG9sZGVyID0ge1xuXHRcdFx0bGFiZWw6ICctLSdcblx0XHR9O1xuXHRcdGlmICggISBlbnRyaWVzICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIGlzTmVlZFBsYWNlaG9sZGVyID8gWyBwbGFjZWhvbGRlciwgLi4ub3B0aW9ucyBdIDogb3B0aW9ucztcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkcygpO1xuXHRcdGNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ2dldC1yZXNwb25zZS10YWInIH0gKTtcblxuXHRcdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdFx0cmV0dXJuICggPFJlYWN0LkZyYWdtZW50IGtleT1cImdldHJlc3BvbnNlXCI+XG5cdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRrZXk9eyAndXNlX2dsb2JhbCcgfVxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlX2dsb2JhbCcgKSB9XG5cdFx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cblx0XHRcdFx0b25DaGFuZ2U9eyB1c2VfZ2xvYmFsID0+IHtcblx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggQm9vbGVhbiggdXNlX2dsb2JhbCApLCAndXNlX2dsb2JhbCcgKVxuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0a2V5PXsgJ2dldHJlc3BvbnNlX2lucHV0X2tleScgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dC13aXRoLWJ1dHRvblwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGtleT0nYXBpX2tleSdcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnYXBpX2tleScgKSB9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyBzZXR0aW5ncy51c2VfZ2xvYmFsIH1cblx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZV9nbG9iYWxcblx0XHRcdFx0XHRcdD8gY3VycmVudFRhYi5hcGlfa2V5XG5cdFx0XHRcdFx0XHQ6IHNldHRpbmdzLmFwaV9rZXlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIG5ld1ZhbCwgJ2FwaV9rZXknICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cblx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0XHQ/IHRoaXMudmFsaWRhdGVBUElLZXkoIGN1cnJlbnRUYWIuYXBpX2tleSApXG5cdFx0XHRcdFx0XHRcdDogdGhpcy52YWxpZGF0ZUFQSUtleSgpXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS5jbGFzc05hbWUuam9pbiggJyAnICkgKyAnIGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxuXHRcdFx0XHRcdHsgbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PGRpdi8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luLWJvdHRvbS0tc21hbGwnPnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxuXHRcdFx0XHRocmVmPXsgaGVscCggJ2FwaV9rZXlfbGluaycgKSB9PnsgaGVscCggJ2FwaV9rZXlfbGlua19zdWZmaXgnICkgfTwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyBzZXR0aW5ncy5pc1ZhbGlkQVBJICYmIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9zZWxlY3RfbGlzdHMnXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC13aXRoLWJ1dHRvbidcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J2xpc3RfaWQnXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdsaXN0X2lkJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MubGlzdF9pZCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnbGlzdF9pZCcgKSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5nZXRMaXN0cygpIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRBcGlEYXRhKCBzZXR0aW5ncy5hcGlfa2V5IClcblx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuZ2V0QXBpRGF0YSggY3VycmVudFRhYi5hcGlfa2V5IClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgbGFiZWwoICd1cGRhdGVfbGlzdF9pZHMnICkgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRrZXk9eyAnZ2V0cmVzcG9uc2VfZGF5X29mX2N5Y2xlJyB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TnVtYmVyQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PSdkYXlfb2ZfY3ljbGUnXG5cdFx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZGF5X29mX2N5Y2xlJyApIH1cblx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZGF5X29mX2N5Y2xlIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBOdW1iZXIoIG5ld1ZhbCApLCAnZGF5X29mX2N5Y2xlJyApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnZmllbGRzX21hcCcgKSB9XG5cdFx0XHRcdFx0a2V5PSdnZXRyZXNwb25zZV9maWVsZHNfbWFwJ1xuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxuXHRcdFx0XHRcdFx0eyBmaWVsZHMubWFwKCAoIFsgZmllbGROYW1lLCBmaWVsZERhdGEgXSwgaW5kZXggKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0ZmllbGQ9eyBbIGZpZWxkTmFtZSwgZmllbGREYXRhIF0gfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGROYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB0aGlzLmdldEZpZWxkRGVmYXVsdCggZmllbGROYW1lICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB0aGlzLm9uQ2hhbmdlRmllbGRNYXAoIHZhbHVlLCBmaWVsZE5hbWUgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5mb3JtRmllbGRzTGlzdCB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPjtcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PiB9XG5cdFx0PC9SZWFjdC5GcmFnbWVudD4gKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn1cblxuYWRkQWN0aW9uKCAnZ2V0cmVzcG9uc2UnLCB3aXRoU2VsZWN0KCB3aXRoUmVxdWVzdEZpZWxkcyApKCBHZXRSZXNwb25zZUFjdGlvbiApIClcbiIsImltcG9ydCBKZXREZWZhdWx0TWV0YUNvbnRyb2wgZnJvbSBcIi4uL2Jsb2Nrcy9jb250cm9scy9kZWZhdWx0LW1ldGFcIjtcblxuY29uc3Qge1xuXHRcdCAgYWRkQWN0aW9uLFxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0XHQgIGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAsXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRcdCAgQWN0aW9uRmllbGRzTWFwLFxuXHRcdCAgV3JhcHBlclJlcXVpcmVkQ29udHJvbCxcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7IHVzZVJlcXVlc3RGaWVsZHMsIHdpdGhSZXF1ZXN0RmllbGRzIH0gPSBKZXRGQkhvb2tzO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFx0ICBCYXNlQ29udHJvbCxcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdFx0ICB1c2VFZmZlY3QsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gdGF4UHJlZml4KCBzdWZmaXggPSAnJyApIHtcblx0cmV0dXJuICdqZXRfdGF4X18nICsgc3VmZml4O1xufVxuXG5mdW5jdGlvbiBJbnNlcnRQb3N0QWN0aW9uKCBwcm9wcyApIHtcblxuXHRjb25zdCB7XG5cdFx0XHQgIHNldHRpbmdzLFxuXHRcdFx0ICBvbkNoYW5nZVNldHRpbmcsXG5cdFx0XHQgIHNvdXJjZSxcblx0XHRcdCAgaGVscCxcblx0XHRcdCAgbGFiZWwsXG5cdFx0XHQgIGdldE1hcEZpZWxkLFxuXHRcdFx0ICBzZXRNYXBGaWVsZCxcblx0XHRcdCAgcmVxdWVzdEZpZWxkcyxcblx0XHQgIH0gPSBwcm9wcztcblxuXHRjb25zdCBbIGZpZWxkVHlwZSwgc2V0VHlwZUZpZWxkIF0gPSB1c2VTdGF0ZSgge30gKTtcblx0Y29uc3QgWyB0YXhvbm9taWVzLCBzZXRUYXhvbm9taWVzIF0gPSB1c2VTdGF0ZSggW10gKTtcblx0Y29uc3QgWyBmb3JtRmllbGRzLCBzZXRGb3JtRmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcblxuXHRmdW5jdGlvbiBnZXRQcmVwYXJlZFRheG9ub21pZXMoKSB7XG5cdFx0Y29uc3QgcHJlcGFyZWRUYXhlcyA9IFtdO1xuXHRcdGlmICggISBzb3VyY2UudGF4b25vbWllcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgdGF4b25vbXkgb2Ygc291cmNlLnRheG9ub21pZXMgKSB7XG5cdFx0XHRwcmVwYXJlZFRheGVzLnB1c2goIHtcblx0XHRcdFx0Li4udGF4b25vbXksXG5cdFx0XHRcdHZhbHVlOiB0YXhQcmVmaXgoIHRheG9ub215LnZhbHVlICksXG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByZXBhcmVkVGF4ZXNcblx0fVxuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldFR5cGVGaWVsZCggKCkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0ge307XG5cblx0XHRcdGZvciAoIGNvbnN0IGZpZWxkc01hcEtleSBpbiBzZXR0aW5ncy5maWVsZHNfbWFwICkge1xuXHRcdFx0XHRyZXN1bHRbIGZpZWxkc01hcEtleSBdID0gZ2V0VHlwZUZpZWxkVmFsdWUoIHNldHRpbmdzLmZpZWxkc19tYXBbIGZpZWxkc01hcEtleSBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSApO1xuXHRcdHNldFRheG9ub21pZXMoIGdldFByZXBhcmVkVGF4b25vbWllcygpICk7XG5cdFx0b25DaGFuZ2VTZXR0aW5nKCBbIHNvdXJjZS5yZXF1ZXN0RmllbGRzLmluc2VydGVkX3Bvc3RfaWQgXSwgJ3JlcXVlc3RGaWVsZHMnICk7XG5cdFx0c2V0Rm9ybUZpZWxkcyhcblx0XHRcdGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAoIGdldEZvcm1GaWVsZHNCbG9ja3MoKSwgcmVxdWVzdEZpZWxkcyApXG5cdFx0KTtcblx0fSwgW10gKTtcblxuXHRmdW5jdGlvbiBnZXRUeXBlRmllbGRWYWx1ZSggdmFsdWUgKSB7XG5cdFx0bGV0IHJlc3VsdFZhbHVlID0gJ3Bvc3RfbWV0YSc7XG5cblx0XHRmb3IgKCBjb25zdCBmaWVsZHNNYXBPcHRpb24gb2Ygc291cmNlLmZpZWxkc01hcE9wdGlvbnMgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBmaWVsZHNNYXBPcHRpb24udmFsdWUgKSB7XG5cdFx0XHRcdHJlc3VsdFZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdmFsdWUuaW5jbHVkZXMoIHRheFByZWZpeCgpICkgKSB7XG5cdFx0XHRyZXN1bHRWYWx1ZSA9ICdwb3N0X3Rlcm1zJztcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0VmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRUeXBlRmllbGRWYWx1ZSggcHJldiwgZmllbGRJRCwgdmFsdWUgKSB7XG5cdFx0Y29uc3QgcmVzdWx0VmFsdWUgPSBnZXRUeXBlRmllbGRWYWx1ZSggdmFsdWUgKTtcblxuXHRcdGlmICggWyAncG9zdF9tZXRhJywgJ3Bvc3RfdGVybXMnIF0uaW5jbHVkZXMoIHJlc3VsdFZhbHVlICkgKSB7XG5cdFx0XHRzZXRNYXBGaWVsZCggeyBuYW1lRmllbGQ6IGZpZWxkSUQsIHZhbHVlOiAnJyB9IClcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0TWFwRmllbGQoIHsgbmFtZUZpZWxkOiBmaWVsZElELCB2YWx1ZTogcmVzdWx0VmFsdWUgfSApXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnByZXYsXG5cdFx0XHRbIGZpZWxkSUQgXTogcmVzdWx0VmFsdWUsXG5cdFx0fTtcblx0fVxuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cblx0Y29uc3QgZ2V0RmllbGRTZWxlY3QgPSAoIGZpZWxkSWQsIGluZGV4ICkgPT4gKCA8U2VsZWN0Q29udHJvbFxuXHRcdGtleT17IGZpZWxkSWQgKyBpbmRleCB9XG5cdFx0dmFsdWU9eyBmaWVsZFR5cGVbIGZpZWxkSWQgXSB9XG5cdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiB7XG5cdFx0XHRzZXRUeXBlRmllbGQoIHByZXYgPT4gc2V0VHlwZUZpZWxkVmFsdWUoIHByZXYsIGZpZWxkSWQsIHZhbHVlICkgKTtcblx0XHR9IH1cblx0XHRvcHRpb25zPXsgc291cmNlLmZpZWxkc01hcE9wdGlvbnMgfVxuXHQvPiApO1xuXG5cdHJldHVybiAoIDw+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGtleT1cInBvc3RfdHlwZVwiXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF90eXBlIH1cblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucG9zdFR5cGVzIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwoICdwb3N0X3R5cGUnICkgfVxuXHRcdFx0aGVscD17IGhlbHAoICdwb3N0X3R5cGUnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAncG9zdF90eXBlJyApIH1cblx0XHQvPlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9XCJwb3N0X3N0YXR1c1wiXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucG9zdF9zdGF0dXMgfVxuXHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wb3N0U3RhdHVzZXMgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3Bvc3Rfc3RhdHVzJyApIH1cblx0XHRcdGhlbHA9eyBoZWxwKCAncG9zdF9zdGF0dXMnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAncG9zdF9zdGF0dXMnICkgfVxuXHRcdC8+XG5cdFx0PEFjdGlvbkZpZWxkc01hcFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxuXHRcdFx0a2V5PSd1c2VyX2ZpZWxkc19tYXAnXG5cdFx0XHRmaWVsZHM9eyBmb3JtRmllbGRzIH1cblx0XHQ+XG5cdFx0XHR7ICggeyBmaWVsZElkLCBmaWVsZERhdGEsIGluZGV4IH0gKSA9PiB7XG5cdFx0XHRcdHJldHVybiA8V3JhcHBlclJlcXVpcmVkQ29udHJvbFxuXHRcdFx0XHRcdGZpZWxkPXsgWyBmaWVsZElkLCBmaWVsZERhdGEgXSB9XG5cdFx0XHRcdD5cblxuXHRcdFx0XHRcdHsgJ3Bvc3RfbWV0YScgPT09IGZpZWxkVHlwZVsgZmllbGRJZCBdICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbXBvbmVudHMtYmFzZS1jb250cm9sIGpldC1tYXJnaW4tYm90dG9tLXdyYXBwZXInPlxuXHRcdFx0XHRcdFx0eyBnZXRGaWVsZFNlbGVjdCggZmllbGRJZCwgaW5kZXggKSB9XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGRJZCArIGluZGV4ICsgJ190ZXh0JyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogZmllbGRJZCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJZCwgdmFsdWUgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+IH1cblx0XHRcdFx0XHR7ICdwb3N0X3Rlcm1zJyA9PT0gZmllbGRUeXBlWyBmaWVsZElkIF0gJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgamV0LW1hcmdpbi1ib3R0b20td3JhcHBlcic+XG5cdFx0XHRcdFx0XHR7IGdldEZpZWxkU2VsZWN0KCBmaWVsZElkLCBpbmRleCApIH1cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdGtleT17IGZpZWxkSWQgKyBpbmRleCArICdfdGV4dCcgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGdldE1hcEZpZWxkKCB7IG5hbWU6IGZpZWxkSWQgfSApIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB2YWx1ZSA9PiBzZXRNYXBGaWVsZCggeyBuYW1lRmllbGQ6IGZpZWxkSWQsIHZhbHVlIH0gKSB9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0YXhvbm9taWVzIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+IH1cblx0XHRcdFx0XHR7ICEgWyAncG9zdF9tZXRhJyxcblx0XHRcdFx0XHRcdCdwb3N0X3Rlcm1zJyBdLmluY2x1ZGVzKCBmaWVsZFR5cGVbIGZpZWxkSWQgXSApICYmIGdldEZpZWxkU2VsZWN0KCBmaWVsZElkLCBpbmRleCApIH1cblx0XHRcdFx0PC9XcmFwcGVyUmVxdWlyZWRDb250cm9sPlxuXHRcdFx0fSB9XG5cdFx0PC9BY3Rpb25GaWVsZHNNYXA+XG5cdFx0PEJhc2VDb250cm9sXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZGVmYXVsdF9tZXRhJyApIH1cblx0XHRcdGtleT1cImRlZmF1bHRfbWV0YVwiXG5cdFx0PlxuXHRcdFx0PEpldERlZmF1bHRNZXRhQ29udHJvbFxuXHRcdFx0XHRkZWZhdWx0TWV0YT17IHNldHRpbmdzLmRlZmF1bHRfbWV0YSB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2RlZmF1bHRfbWV0YScgKSB9XG5cdFx0XHQvPlxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdDwvPiApO1xuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59XG5cbmFkZEFjdGlvbiggJ2luc2VydF9wb3N0Jywgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggSW5zZXJ0UG9zdEFjdGlvbiApICk7XG4iLCJpbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9iYXNlLWFjdGlvbi1jb21wb25lbnRcIjtcblxuY29uc3QgeyBnZXRGb3JtRmllbGRzQmxvY2tzIH0gPSBKZXRGQkFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVncmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUFjdGlvbkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy52YWxpZGF0ZUFQSUtleSA9IHRoaXMudmFsaWRhdGVBUElLZXkuYmluZCggdGhpcyApO1xuXHRcdHRoaXMuZ2V0QXBpRGF0YSA9IHRoaXMuZ2V0QXBpRGF0YS5iaW5kKCB0aGlzICk7XG5cdFx0dGhpcy5nZXRMaXN0cyA9IHRoaXMuZ2V0TGlzdHMuYmluZCggdGhpcyApO1xuXG5cdFx0dGhpcy5mb3JtRmllbGRzTGlzdCA9IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2xhc3NOYW1lOiBbIHRoaXMuZ2V0Y2xhc3NOYW1lVmFsaWRhdGVCdXR0b24oKSBdLFxuXHRcdH07XG5cdH1cblxuXHR2YWxpZGF0ZUFQSUtleSggY3VzdG9tQXBpS2V5ID0gZmFsc2UgKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2xvYWRpbmcnIF0gfSApO1xuXG5cdFx0aWYgKCBjdXN0b21BcGlLZXkgJiYgJ3N0cmluZycgPT09IHR5cGVvZiBjdXN0b21BcGlLZXkgKSB7XG5cdFx0XHR0aGlzLmdldEFwaURhdGEoIGN1c3RvbUFwaUtleSApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cdFx0dGhpcy5nZXRBcGlEYXRhKCBzZXR0aW5ncy5hcGlfa2V5ICk7XG5cdH1cblxuXHRnZXRBcGlEYXRhKCBhcGlLZXkgKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0XHRpZiAoICEgYXBpS2V5ICkge1xuXHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIG51bGwsICdpc1ZhbGlkQVBJJyApO1xuXHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFtdIH0gKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiBhamF4dXJsLFxuXHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHQnYWN0aW9uJzogdGhpcy5wcm9wcy5zb3VyY2UuYWN0aW9uLFxuXHRcdFx0XHQnYXBpX2tleSc6IGFwaUtleVxuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uICggcmVzcG9uc2UgKSB7XG5cdFx0XHRcdGlmICggcmVzcG9uc2Uuc3VjY2VzcyApIHtcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggdHJ1ZSwgJ2lzVmFsaWRBUEknICk7XG5cdFx0XHRcdFx0c2VsZi5vbkNoYW5nZVNldHRpbmcoIHJlc3BvbnNlLmRhdGEsICdkYXRhJyApO1xuXG5cdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSggeyBjbGFzc05hbWU6IFsgJ2lzLXZhbGlkJyBdIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlU2V0dGluZyggZmFsc2UsICdpc1ZhbGlkQVBJJyApO1xuXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdpcy1pbnZhbGlkJyBdIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGVycm9yOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNlbGYub25DaGFuZ2VTZXR0aW5nKCBmYWxzZSwgJ2lzVmFsaWRBUEknICk7XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoIHsgY2xhc3NOYW1lOiBbICdpcy1pbnZhbGlkJyBdIH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblxuXHR9XG5cblx0Z2V0Y2xhc3NOYW1lVmFsaWRhdGVCdXR0b24oKSB7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG5cdFx0aWYgKCB0cnVlID09PSBzZXR0aW5ncy5pc1ZhbGlkQVBJICkge1xuXHRcdFx0cmV0dXJuICdpcy12YWxpZCc7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBmYWxzZSA9PT0gc2V0dGluZ3MuaXNWYWxpZEFQSSApIHtcblx0XHRcdHJldHVybiAnaXMtaW52YWxpZCc7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IEludGVncmF0aW9uQ29tcG9uZW50IGZyb20gXCIuL2ludGVncmF0aW9uLWNvbXBvbmVudFwiO1xuXG5jb25zdCB7XG5cdFx0ICBhZGRBY3Rpb24sXG5cdFx0ICBnbG9iYWxUYWIsXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRcdCAgVGV4dENvbnRyb2wsXG5cdFx0ICBUb2dnbGVDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIENoZWNrYm94Q29udHJvbCxcblx0XHQgIEJhc2VDb250cm9sLFxuXHRcdCAgQnV0dG9uLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICBBY3Rpb25GaWVsZHNNYXAsXG5cdFx0ICBXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMgfSA9IEpldEZCSG9va3M7XG5cbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcblxuY2xhc3MgTWFpbENoaW1wQWN0aW9uIGV4dGVuZHMgSW50ZWdyYXRpb25Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcblx0XHRzdXBlciggcHJvcHMgKTtcblxuXHRcdHRoaXMuZm9ybUZpZWxkc0xpc3QgPSBbIC4uLnRoaXMuZm9ybUZpZWxkc0xpc3QsIC4uLnRoaXMucHJvcHMucmVxdWVzdEZpZWxkcyBdO1xuXHR9XG5cblx0Z2V0RmllbGRzKCkge1xuXHRcdGNvbnN0IHsgc2V0dGluZ3MgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAoIHNldHRpbmdzLmxpc3RfaWRcblx0XHRcdCYmIHNldHRpbmdzLmRhdGFcblx0XHRcdCYmIHNldHRpbmdzLmRhdGEuZmllbGRzXG5cdFx0XHQmJiBzZXR0aW5ncy5kYXRhLmZpZWxkc1sgc2V0dGluZ3MubGlzdF9pZCBdICkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKCBzZXR0aW5ncy5kYXRhLmZpZWxkc1sgc2V0dGluZ3MubGlzdF9pZCBdICk7XG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGdldExpc3RzKCkge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuXHRcdGlmICggc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy5kYXRhLmxpc3RzICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0RW50cmllc0FycmF5KCBzZXR0aW5ncy5kYXRhLmxpc3RzICk7XG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGdldEdyb3VwcygpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHNldHRpbmdzLmRhdGFcblx0XHRcdCYmIHNldHRpbmdzLmRhdGEuZ3JvdXBzICkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzLmRhdGEuZ3JvdXBzWyBzZXR0aW5ncy5saXN0X2lkIF07XG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGZvcm1hdEVudHJpZXNBcnJheSggZW50cmllcyA9IFtdICkge1xuXHRcdGlmICggISBlbnRyaWVzICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZW50cmllcyggZW50cmllcyApLm1hcCggKCBbIHZhbHVlLCBsYWJlbCBdICkgPT4ge1xuXHRcdFx0cmV0dXJuIHsgdmFsdWUsIGxhYmVsIH07XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIFsgeyBsYWJlbDogJy0tJywgdmFsdWU6ICcnIH0sIC4uLm9wdGlvbnMgXTtcblx0fVxuXG5cdGlzQ2hlY2tlZEdyb3VwKCB2YWx1ZSApIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRyZXR1cm4gKCB2YWx1ZSAmJiBzZXR0aW5ncy5ncm91cHNfaWRzICYmIHNldHRpbmdzLmdyb3Vwc19pZHNbIHZhbHVlIF0gKSA/IHNldHRpbmdzLmdyb3Vwc19pZHNbIHZhbHVlIF0gOiBmYWxzZTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBzb3VyY2UsIGxhYmVsLCBoZWxwIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKCk7XG5cdFx0Y29uc3QgY3VycmVudFRhYiA9IGdsb2JhbFRhYiggeyBzbHVnOiAnbWFpbGNoaW1wLXRhYicgfSApO1xuXG5cdFx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0XHRyZXR1cm4gKCA8ZGl2IGtleT1cIm1haWxjaGltcFwiPlxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0a2V5PXsgJ3VzZV9nbG9iYWwnIH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZV9nbG9iYWwnICkgfVxuXHRcdFx0XHRjaGVja2VkPXsgc2V0dGluZ3MudXNlX2dsb2JhbCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgdXNlX2dsb2JhbCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5vbkNoYW5nZVNldHRpbmcoIEJvb2xlYW4oIHVzZV9nbG9iYWwgKSwgJ3VzZV9nbG9iYWwnIClcblx0XHRcdFx0fSB9XG5cdFx0XHQvPlxuXHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdGtleT17ICdtYWlsY2hpbXBfa2V5X2lucHV0cycgfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dC13aXRoLWJ1dHRvblwiXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdhcGlfa2V5JyApIH1cblx0XHRcdD5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0a2V5PSdhcGlfa2V5J1xuXHRcdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCdcblx0XHRcdFx0XHRkaXNhYmxlZD17IHNldHRpbmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0PyBjdXJyZW50VGFiLmFwaV9rZXlcblx0XHRcdFx0XHRcdDogc2V0dGluZ3MuYXBpX2tleVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnYXBpX2tleScgKVxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0a2V5PXsgJ3ZhbGlkYXRlX2FwaV9rZXknIH1cblx0XHRcdFx0XHRpc1ByaW1hcnlcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0XHQ/IHRoaXMudmFsaWRhdGVBUElLZXkoIGN1cnJlbnRUYWIuYXBpX2tleSApXG5cdFx0XHRcdFx0XHRcdDogdGhpcy52YWxpZGF0ZUFQSUtleSgpXG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgdGhpcy5zdGF0ZS5jbGFzc05hbWUuam9pbiggJyAnICkgKyAnIGpldC1mb3JtLXZhbGlkYXRlLWJ1dHRvbicgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZGFzaGljb25zXCIvPlxuXHRcdFx0XHRcdHsgbGFiZWwoICd2YWxpZGF0ZV9hcGlfa2V5JyApIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PGRpdi8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFyZ2luLWJvdHRvbS0tc21hbGwnPnsgaGVscCggJ2FwaV9rZXlfbGlua19wcmVmaXgnICkgfSA8YVxuXHRcdFx0XHRocmVmPXsgaGVscCggJ2FwaV9rZXlfbGluaycgKSB9PnsgaGVscCggJ2FwaV9rZXlfbGlua19zdWZmaXgnICkgfTwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0eyBzZXR0aW5ncy5pc1ZhbGlkQVBJICYmIDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0a2V5PXsgJ21haWxjaGltcF9zZWxlY3RfbGlzdHMnIH1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dC13aXRoLWJ1dHRvblwiXG5cdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2xpc3RfaWQnICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyAnbWFpbGNoaW1wX3NlbGVjdF9saXN0c19zZWxlY3QnIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC1jb250cm9sLWNsZWFyLWZ1bGxcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdGtleT0nbGlzdF9pZCdcblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ndG9wJ1xuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLmxpc3RfaWQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAnbGlzdF9pZCcgKSB9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyB0aGlzLmdldExpc3RzKCkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGtleT17ICd1cGRhdGVfbGlzdF9pZHMnIH1cblx0XHRcdFx0XHRcdGlzUHJpbWFyeVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MudXNlX2dsb2JhbFxuXHRcdFx0XHRcdFx0XHRcdD8gdGhpcy5nZXRBcGlEYXRhKCBzZXR0aW5ncy5hcGlfa2V5IClcblx0XHRcdFx0XHRcdFx0XHQ6IHRoaXMuZ2V0QXBpRGF0YSggY3VycmVudFRhYi5hcGlfa2V5IClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgbGFiZWwoICd1cGRhdGVfbGlzdF9pZHMnICkgfVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHR7IEJvb2xlYW4oIHNldHRpbmdzLmxpc3RfaWQgKSAmJiA8PlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2dyb3Vwc19pZHMnICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cblx0XHRcdFx0XHRcdFx0eyB0aGlzLmdldEdyb3VwcygpLm1hcCggZ3JvdXAgPT4gPENoZWNrYm94Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGtleT17IGBncm91cHNfaWRzXyR7IGdyb3VwLnZhbHVlIH1gIH1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgdGhpcy5pc0NoZWNrZWRHcm91cCggZ3JvdXAudmFsdWUgKSB9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBncm91cC5sYWJlbCB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBhY3RpdmUgPT4gdGhpcy5vbkNoYW5nZVNldHRpbmcoIHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLiggc2V0dGluZ3MuZ3JvdXBzX2lkcyB8fCB7fSApLFxuXHRcdFx0XHRcdFx0XHRcdFx0WyBncm91cC52YWx1ZSBdOiBhY3RpdmUsXG5cdFx0XHRcdFx0XHRcdFx0fSwgJ2dyb3Vwc19pZHMnICkgfVxuXHRcdFx0XHRcdFx0XHQvPiApIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9J21haWxjaGltcF90YWdzJ1xuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy50YWdzIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd0YWdzJyApIH1cblx0XHRcdFx0XHRcdGhlbHA9eyBoZWxwKCAndGFncycgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB0aGlzLm9uQ2hhbmdlU2V0dGluZyggbmV3VmFsLCAndGFncycgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0a2V5PXsgJ2RvdWJsZV9vcHRfaW4nIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdkb3VibGVfb3B0X2luJyApIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy5kb3VibGVfb3B0X2luIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHRoaXMub25DaGFuZ2VTZXR0aW5nKCBCb29sZWFuKCBuZXdWYWwgKSwgJ2RvdWJsZV9vcHRfaW4nICkgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEFjdGlvbkZpZWxkc01hcFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxuXHRcdFx0XHRcdFx0a2V5PSdtYWlsY2hpbXAnXG5cdFx0XHRcdFx0XHRmaWVsZHM9eyBmaWVsZHMgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHsgKCB7IGZpZWxkSWQsIGZpZWxkRGF0YSwgaW5kZXggfSApID0+IDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGZpZWxkPXsgWyBmaWVsZElkLCBmaWVsZERhdGEgXSB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXsgZmllbGRJZCArIGluZGV4IH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGREZWZhdWx0KCBmaWVsZElkICkgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4gdGhpcy5vbkNoYW5nZUZpZWxkTWFwKCB2YWx1ZSwgZmllbGRJZCApIH1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgdGhpcy5mb3JtRmllbGRzTGlzdCB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+IH1cblx0XHRcdFx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cblx0XHRcdFx0PC8+IH1cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+IH1cblx0XHQ8L2Rpdj4gKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdH1cbn1cblxuYWRkQWN0aW9uKCAnbWFpbGNoaW1wJywgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggTWFpbENoaW1wQWN0aW9uICkgKSIsImNvbnN0IHtcblx0XHQgIFRvb2xzLFxuXHRcdCAgYWRkQWN0aW9uLFxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCB7XG5cdFx0ICBGaWVsZFdpdGhQcmVzZXQsXG5cdFx0ICBEeW5hbWljUHJlc2V0LFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHtcblx0XHQgIFRleHRDb250cm9sLFxuXHRcdCAgVG9nZ2xlQ29udHJvbCxcblx0XHQgIFNlbGVjdENvbnRyb2wsXG5cdFx0ICBCYXNlQ29udHJvbCxcblx0XHQgIENoZWNrYm94Q29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdFx0ICB1c2VFZmZlY3QsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMgfSA9IEpldEZCSG9va3M7XG5cbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcblxuZnVuY3Rpb24gUmVkaXJlY3RUb1BhZ2VBY3Rpb24oIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgc291cmNlLFxuXHRcdFx0ICBsYWJlbCxcblx0XHRcdCAgc2V0dGluZ3MsXG5cdFx0XHQgIG9uQ2hhbmdlU2V0dGluZyxcblx0XHRcdCAgb25DaGFuZ2VTZXR0aW5nT2JqLFxuXHRcdFx0ICByZXF1ZXN0RmllbGRzLFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IFsgZmllbGRzLCBzZXRGaWVsZHMgXSA9IHVzZVN0YXRlKCBbXSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldEZpZWxkcyggWyAuLi5nZXRGb3JtRmllbGRzQmxvY2tzKCksIC4uLnJlcXVlc3RGaWVsZHMgXSApO1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IGlzQ2hlY2tlZCA9IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdGNvbnN0IGFyZ3NfZmllbGRzID0gQXJyYXkuZnJvbSggc2V0dGluZ3MucmVkaXJlY3RfYXJncyB8fCBbXSApO1xuXG5cdFx0cmV0dXJuIEJvb2xlYW4oIGFyZ3NfZmllbGRzLmluY2x1ZGVzKCBuYW1lICkgKTtcblx0fVxuXG5cdGNvbnN0IG9uQ2hhbmdlUmVkaXJlY3RBcmdzID0gZnVuY3Rpb24oIHZhbHVlLCBmaWVsZF9uYW1lICkge1xuXHRcdGxldCByZWRpcmVjdF9hcmdzID0gQXJyYXkuZnJvbSggc2V0dGluZ3MucmVkaXJlY3RfYXJncyB8fCBbXSApO1xuXG5cdFx0aWYgKCAhIHZhbHVlICkge1xuXHRcdFx0Y29uc3QgZmllbGRfaWQgPSByZWRpcmVjdF9hcmdzLmluZGV4T2YoIGZpZWxkX25hbWUgKTtcblxuXHRcdFx0cmVkaXJlY3RfYXJncy5zcGxpY2UoIGZpZWxkX2lkLCAxICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlZGlyZWN0X2FyZ3MucHVzaCggZmllbGRfbmFtZSApO1xuXHRcdH1cblxuXHRcdG9uQ2hhbmdlU2V0dGluZ09iaiggeyByZWRpcmVjdF9hcmdzIH0gKTtcblx0fVxuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdHJldHVybiAoIDxkaXYga2V5PVwicmVkaXJlY3RfdG9fcGFnZVwiPlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdGtleT0ncmVkaXJlY3RfdHlwZSdcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF90eXBlJyApIH1cblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfdHlwZSB9XG5cdFx0XHRvcHRpb25zPXsgc291cmNlLnJlZGlyZWN0X3R5cGVzIH1cblx0XHRcdG9uQ2hhbmdlPXsgcmVkaXJlY3RfdHlwZSA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHsgcmVkaXJlY3RfdHlwZSB9ICkgfVxuXHRcdC8+XG5cdFx0eyAnc3RhdGljX3BhZ2UnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9J3JlZGlyZWN0X3R5cGUnXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9wYWdlJyApIH1cblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfcGFnZSB9XG5cdFx0XHRvcHRpb25zPXsgc291cmNlLnBhZ2VzIH1cblx0XHRcdG9uQ2hhbmdlPXsgcmVkaXJlY3RfcGFnZSA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHsgcmVkaXJlY3RfcGFnZSB9ICkgfVxuXHRcdC8+IH1cblxuXHRcdHsgJ2N1c3RvbV91cmwnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxGaWVsZFdpdGhQcmVzZXRcblx0XHRcdGtleT17ICdjdXN0b21fdXJsLUZpZWxkV2l0aFByZXNldCcgfVxuXHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8RHluYW1pY1ByZXNldFxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X3VybCB9XG5cdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cblx0XHRcdFx0b25TYXZlUHJlc2V0PXsgcmVkaXJlY3RfdXJsID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyByZWRpcmVjdF91cmwgfSApIH1cblx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxuXHRcdFx0XHRleGNsdWRlU291cmNlcz17IFsgJ3F1ZXJ5X3ZhcicgXSB9XG5cdFx0XHQvPiB9XG5cdFx0XHR0cmlnZ2VyQ2xhc3Nlcz17IFsgJ3RyaWdnZXJfX3RleHQtY29udHJvbCcgXSB9XG5cdFx0PlxuXHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdGtleT0ncmVkaXJlY3RfdXJsX2NvbnRyb2wnXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF91cmwnICkgfVxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X3VybCB9XG5cdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtY29udHJvbC13aXRoLWR5bmFtaWMnIH1cblx0XHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF91cmwgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlZGlyZWN0X3VybCB9ICkgfVxuXHRcdFx0Lz5cblx0XHQ8L0ZpZWxkV2l0aFByZXNldD4gfVxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X2FyZ3MnICkgfVxuXHRcdFx0a2V5PVwicmVkaXJlY3RfYXJnc19jb250cm9sXCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCc+XG5cdFx0XHRcdHsgZmllbGRzLm1hcCggKCB7IG5hbWUgfSwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRcdFx0XHRrZXk9eyBgY2hlY2tib3hfYXJnc18keyBuYW1lIH1fJHsgaW5kZXggfWAgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBuYW1lIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBpc0NoZWNrZWQoIG5hbWUgKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVJlZGlyZWN0QXJncyggbmV3VmFsLCBuYW1lICkgfVxuXHRcdFx0XHRcdC8+LFxuXHRcdFx0XHQpIH1cblx0XHRcdDwvZGl2PlxuXHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9J3JlZGlyZWN0X2hhc2hfY29udHJvbCdcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZWRpcmVjdF9oYXNoJyApIH1cblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfaGFzaCB9XG5cdFx0XHRvbkNoYW5nZT17IHJlZGlyZWN0X2hhc2ggPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IHJlZGlyZWN0X2hhc2ggfSApIH1cblx0XHQvPlxuXHQ8L2Rpdj4gKTtcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5hZGRBY3Rpb24oICdyZWRpcmVjdF90b19wYWdlJywgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggUmVkaXJlY3RUb1BhZ2VBY3Rpb24gKSApO1xuXG4iLCJjb25zdCB7XG5cdFx0ICBXcmFwcGVyUmVxdWlyZWRDb250cm9sLFxuXHRcdCAgQWN0aW9uTWVzc2FnZXMsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcbmNvbnN0IHtcblx0XHQgIGFkZEFjdGlvbixcblx0XHQgIGdldEZvcm1GaWVsZHNCbG9ja3MsXG5cdFx0ICBUb29sczogeyB3aXRoUGxhY2Vob2xkZXIgfSxcblx0XHQgIGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAsXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3QgeyB3aXRoUmVxdWVzdEZpZWxkcyB9ID0gSmV0RkJIb29rcztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRcdCAgVGV4dENvbnRyb2wsXG5cdFx0ICBUb2dnbGVDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIEJhc2VDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5cbmNvbnN0IHtcblx0XHQgIHVzZVN0YXRlLFxuXHRcdCAgdXNlRWZmZWN0LFxuXHQgIH0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiBSZWdpc3RlclVzZXJBY3Rpb24oIHByb3BzICkge1xuXG5cdGNvbnN0IHtcblx0XHRcdCAgc2V0dGluZ3MsXG5cdFx0XHQgIHNvdXJjZSxcblx0XHRcdCAgbGFiZWwsXG5cdFx0XHQgIGhlbHAsXG5cdFx0XHQgIG9uQ2hhbmdlU2V0dGluZ09iaixcblx0XHRcdCAgZ2V0TWFwRmllbGQsXG5cdFx0XHQgIHNldE1hcEZpZWxkLFxuXHRcdFx0ICByZXF1ZXN0RmllbGRzLFxuXHRcdCAgfSA9IHByb3BzO1xuXG5cdGNvbnN0IFsgZmllbGRzLCBzZXRGaWVsZHMgXSA9IHVzZVN0YXRlKCBbXSApO1xuXHRjb25zdCBbIGZpZWxkc1dpdGhSZXF1ZXN0LCBzZXRGaWVsZHNXaXRoUmVxdWVzdCBdID0gdXNlU3RhdGUoIFtdICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0Y29uc3QgX2ZpZWxkcyA9IGdldEZvcm1GaWVsZHNCbG9ja3MoKTtcblx0XHRzZXRGaWVsZHMoIFsgLi4uX2ZpZWxkcywgLi4ucmVxdWVzdEZpZWxkcyBdICk7XG5cdFx0c2V0RmllbGRzV2l0aFJlcXVlc3QoIGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAoIF9maWVsZHMsIHJlcXVlc3RGaWVsZHMgKSApO1xuXG5cdFx0aWYgKCBzZXR0aW5ncy5hZGRfdXNlcl9pZCApIHtcblx0XHRcdG9uQ2hhbmdlU2V0dGluZ09iaiggeyByZXF1ZXN0RmllbGRzOiBbIHNvdXJjZS5yZXF1ZXN0RmllbGRzLnVzZXJfaWQgXSB9IClcblx0XHR9XG5cdH0sIFtdICk7XG5cblx0Y29uc3QgdXNlckZpZWxkcyA9IE9iamVjdC5lbnRyaWVzKCBzb3VyY2UudXNlckZpZWxkcyApO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdHJldHVybiAoIDxSZWFjdC5GcmFnbWVudCBrZXk9XCJyZWdpc3Rlcl91c2VyXCI+XG5cdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdGtleT0nYWxsb3dfcmVnaXN0ZXInXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnYWxsb3dfcmVnaXN0ZXInICkgfVxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmFsbG93X3JlZ2lzdGVyIH1cblx0XHRcdG9uQ2hhbmdlPXsgYWxsb3dfcmVnaXN0ZXIgPT4gb25DaGFuZ2VTZXR0aW5nT2JqKCB7IGFsbG93X3JlZ2lzdGVyIH0gKSB9XG5cdFx0Lz5cblx0XHR7IHNldHRpbmdzLmFsbG93X3JlZ2lzdGVyICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9XCJyb2xlX2Nhbl9yZWdpc3RlclwiXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncm9sZV9jYW5fcmVnaXN0ZXInICkgfVxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yb2xlX2Nhbl9yZWdpc3RlciB9XG5cdFx0XHRvcHRpb25zPXsgc291cmNlLmFsbFVzZXJSb2xlcyB9XG5cdFx0XHRvbkNoYW5nZT17IHJvbGVfY2FuX3JlZ2lzdGVyID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyByb2xlX2Nhbl9yZWdpc3RlciB9ICkgfVxuXHRcdC8+IH1cblx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmaWVsZHNfbWFwJyApIH1cblx0XHRcdGtleT1cInVzZXJfZmllbGRzX21hcFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtdXNlci1maWVsZHMtbWFwX19saXN0XCI+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfT57IF9fKCAnU2V0IGZvcm0gZmllbGRzIG5hbWVzIHRvIHRvIGdldCB1c2VyIGRhdGEgZnJvbScsICdqZXQtZm9ybS1idWlsZGVyJyApIH08L3NwYW4+XG5cdFx0XHRcdHsgdXNlckZpZWxkcy5tYXAoICggWyB2YWx1ZSwgZGF0YSBdICkgPT4ge1xuXG5cdFx0XHRcdFx0cmV0dXJuIDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXG5cdFx0XHRcdFx0XHRmaWVsZD17IFsgdmFsdWUsIGRhdGEgXSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHRcdFx0XHRcdGtleT17IGB1c2VyX2ZpZWxkc18keyB2YWx1ZSB9YCB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgbmFtZTogdmFsdWUgfSApIH1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IHdpdGhQbGFjZWhvbGRlciggZmllbGRzICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogdmFsdWUsIHZhbHVlOiBuZXdWYWx1ZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+O1xuXHRcdFx0XHR9ICkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9CYXNlQ29udHJvbD5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwidXNlcl9yb2xlX2xpc3RcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlcl9yb2xlJyApIH1cblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlcl9yb2xlIH1cblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UudXNlclJvbGVzIH1cblx0XHRcdG9uQ2hhbmdlPXsgdXNlcl9yb2xlID0+IG9uQ2hhbmdlU2V0dGluZ09iaiggeyB1c2VyX3JvbGUgfSApIH1cblx0XHQvPlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfbWV0YScgKSB9XG5cdFx0XHRrZXk9J3VzZXJfbWV0YV9saXN0J1xuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdqZXQtdXNlci1maWVsZHMtbWFwX19saXN0Jz5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9PnsgX18oICdTZXQgdXNlciBtZXRhIGZpZWxkcyB0byBzYXZlIGFwcHJvcHJpYXRlIGZvcm0gZmllbGRzIGludG8nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9zcGFuPlxuXHRcdFx0XHR7IGZpZWxkc1dpdGhSZXF1ZXN0Lm1hcCggKCBbIG5hbWUsIGRhdGEgXSApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPFdyYXBwZXJSZXF1aXJlZENvbnRyb2xcblx0XHRcdFx0XHRcdGZpZWxkPXsgWyBuYW1lLCBkYXRhIF0gfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgZm9ybV9maWVsZHNfJHsgbmFtZSB9YCB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgZ2V0TWFwRmllbGQoIHsgc291cmNlOiAnbWV0YV9maWVsZHNfbWFwJywgbmFtZSB9ICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBzZXRNYXBGaWVsZCgge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWVGaWVsZDogbmFtZSxcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogbmV3VmFsLFxuXHRcdFx0XHRcdFx0XHRcdHNvdXJjZTogJ21ldGFfZmllbGRzX21hcCcsXG5cdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvV3JhcHBlclJlcXVpcmVkQ29udHJvbD47XG5cdFx0XHRcdH0gKSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRrZXk9J2xvZ19pbidcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdsb2dfaW4nICkgfVxuXHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLmxvZ19pbiB9XG5cdFx0XHRvbkNoYW5nZT17IGxvZ19pbiA9PiBvbkNoYW5nZVNldHRpbmdPYmooIHsgbG9nX2luIH0gKSB9XG5cdFx0Lz5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0a2V5PSdhZGRfdXNlcl9pZF9jb250cm9sJ1xuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FkZF91c2VyX2lkJyApIH1cblx0XHRcdGNoZWNrZWQ9eyBzZXR0aW5ncy5hZGRfdXNlcl9pZCB9XG5cdFx0XHRvbkNoYW5nZT17IGFkZF91c2VyX2lkID0+IG9uQ2hhbmdlU2V0dGluZ09iaigge1xuXHRcdFx0XHRhZGRfdXNlcl9pZCxcblx0XHRcdFx0cmVxdWVzdEZpZWxkczogYWRkX3VzZXJfaWQgPyBbIHNvdXJjZS5yZXF1ZXN0RmllbGRzLnVzZXJfaWQgXSA6IFtdLFxuXHRcdFx0fSApIH1cblx0XHRcdGhlbHA9eyBoZWxwKCAnYWRkX3VzZXJfaWQnICkgfVxuXHRcdC8+XG5cdFx0PEFjdGlvbk1lc3NhZ2VzIHsgLi4ucHJvcHMgfSAvPlxuXHQ8L1JlYWN0LkZyYWdtZW50PiApO1xuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59XG5cbmFkZEFjdGlvbiggJ3JlZ2lzdGVyX3VzZXInLCB3aXRoU2VsZWN0KCB3aXRoUmVxdWVzdEZpZWxkcyApKCBSZWdpc3RlclVzZXJBY3Rpb24gKSApO1xuIiwiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG5jb25zdCB7XG5cdFx0ICBNYWNyb3NJbnNlcnRlcixcblx0ICB9ID0gSmV0RkJDb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICBhZGRBY3Rpb24sXG5cdFx0ICBnZXRGb3JtRmllbGRzQmxvY2tzLFxuXHRcdCAgVG9vbHM6IHsgd2l0aFBsYWNlaG9sZGVyIH0sXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRcdCAgVGV4dENvbnRyb2wsXG5cdFx0ICBUZXh0YXJlYUNvbnRyb2wsXG5cdFx0ICBTZWxlY3RDb250cm9sLFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICB1c2VTdGF0ZSxcblx0XHQgIHVzZUVmZmVjdCxcblx0ICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgeyB3aXRoUmVxdWVzdEZpZWxkcyB9ID0gSmV0RkJIb29rcztcblxuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5mdW5jdGlvbiBTZW5kRW1haWxBY3Rpb24oIHtcblx0XHRcdFx0XHRcdFx0ICBzZXR0aW5ncyxcblx0XHRcdFx0XHRcdFx0ICBzb3VyY2UsXG5cdFx0XHRcdFx0XHRcdCAgbGFiZWwsXG5cdFx0XHRcdFx0XHRcdCAgaGVscCxcblx0XHRcdFx0XHRcdFx0ICBvbkNoYW5nZVNldHRpbmcsXG5cdFx0XHRcdFx0XHRcdCAgcmVxdWVzdEZpZWxkcyxcblx0XHRcdFx0XHRcdCAgfSApIHtcblxuXHRjb25zdCBbIGZvcm1GaWVsZHMsIHNldEZvcm1GaWVsZHMgXSA9IHVzZVN0YXRlKCBbXSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdHNldEZvcm1GaWVsZHMoIFsgLi4uZ2V0Rm9ybUZpZWxkc0Jsb2NrcygpLCAuLi5yZXF1ZXN0RmllbGRzIF0gKTtcblx0fSwgW10gKTtcblxuXHRjb25zdCBpbnNlcnRNYWNyb3MgPSAoIG1hY3JvcyApID0+IHtcblx0XHRjb25zdCBjb250ZW50ID0gKCBzZXR0aW5ncy5jb250ZW50IHx8ICcnICkgKyAnJScgKyBtYWNyb3MgKyAnJSc7XG5cdFx0b25DaGFuZ2VTZXR0aW5nKCBjb250ZW50LCAnY29udGVudCcgKTtcblx0fVxuXG5cdC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG5cdHJldHVybiA8PlxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9XCJtYWlsX3RvXCJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5tYWlsX3RvIH1cblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UubWFpbFRvIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtYWlsX3RvJyApIH1cblx0XHRcdGhlbHA9eyBoZWxwKCAnbWFpbF90bycgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdtYWlsX3RvJyApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHR7ICdjdXN0b20nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PVwiY3VzdG9tX2VtYWlsXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuY3VzdG9tX2VtYWlsIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjdXN0b21fZW1haWwnICkgfVxuXHRcdFx0aGVscD17IGhlbHAoICdjdXN0b21fZW1haWwnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY3VzdG9tX2VtYWlsJyApO1xuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHRcdHsgJ2Zvcm0nID09PSBzZXR0aW5ncy5tYWlsX3RvICYmIDxTZWxlY3RDb250cm9sXG5cdFx0XHRrZXk9XCJmcm9tX2ZpZWxkXCJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5mcm9tX2ZpZWxkIH1cblx0XHRcdG9wdGlvbnM9eyB3aXRoUGxhY2Vob2xkZXIoIGZvcm1GaWVsZHMgKSB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnZnJvbV9maWVsZCcgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fZmllbGQnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9maWVsZCcgKTtcblx0XHRcdH0gfVxuXHRcdC8+IH1cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwicmVwbHlfdG9cIlxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X3RvIH1cblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UucmVwbHlUbyB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncmVwbHlfdG8nICkgfVxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV90bycgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdyZXBseV90bycgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyAnY3VzdG9tJyA9PT0gc2V0dGluZ3MucmVwbHlfdG8gJiYgPFRleHRDb250cm9sXG5cdFx0XHRrZXk9XCJyZXBseV90b19lbWFpbFwiXG5cdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlcGx5X3RvX2VtYWlsIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwoICdyZXBseV90b19lbWFpbCcgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ3JlcGx5X3RvX2VtYWlsJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X3RvX2VtYWlsJyApO1xuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHRcdHsgJ2Zvcm0nID09PSBzZXR0aW5ncy5yZXBseV90byAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwicmVwbHlfZnJvbV9maWVsZFwiXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVwbHlfZnJvbV9maWVsZCB9XG5cdFx0XHRvcHRpb25zPXsgd2l0aFBsYWNlaG9sZGVyKCBmb3JtRmllbGRzICkgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlcGx5X2Zyb21fZmllbGQnICkgfVxuXHRcdFx0aGVscD17IGhlbHAoICdyZXBseV9mcm9tX2ZpZWxkJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3JlcGx5X2Zyb21fZmllbGQnICk7XG5cdFx0XHR9IH1cblx0XHQvPiB9XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9XCJzdWJqZWN0XCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3Muc3ViamVjdCB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnc3ViamVjdCcgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ3N1YmplY3QnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnc3ViamVjdCcgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRrZXk9XCJmcm9tX25hbWVcIlxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5mcm9tX25hbWUgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2Zyb21fbmFtZScgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ2Zyb21fbmFtZScgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdG9uQ2hhbmdlU2V0dGluZyggbmV3VmFsdWUsICdmcm9tX25hbWUnICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0a2V5PVwiZnJvbV9hZGRyZXNzXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MuZnJvbV9hZGRyZXNzIH1cblx0XHRcdGxhYmVsPXsgbGFiZWwoICdmcm9tX2FkZHJlc3MnICkgfVxuXHRcdFx0aGVscD17IGhlbHAoICdmcm9tX2FkZHJlc3MnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyAoIG5ld1ZhbHVlICkgPT4ge1xuXHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnZnJvbV9hZGRyZXNzJyApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0a2V5PVwiY29udGVudF90eXBlXCJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdGNsYXNzTmFtZT1cImZ1bGwtd2lkdGhcIlxuXHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5jb250ZW50X3R5cGUgfVxuXHRcdFx0b3B0aW9ucz17IHNvdXJjZS5jb250ZW50X3R5cGUgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2NvbnRlbnRfdHlwZScgKSB9XG5cdFx0XHRoZWxwPXsgaGVscCggJ2NvbnRlbnRfdHlwZScgKSB9XG5cdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiBvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnY29udGVudF90eXBlJyApIH1cblx0XHQvPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LWZvcm0tZWRpdG9yX19tYWNyb3Mtd3JhcFwiPlxuXHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRrZXk9XCJjb250ZW50XCJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5jb250ZW50IH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ2NvbnRlbnQnICkgfVxuXHRcdFx0XHRoZWxwPXsgaGVscCggJ2NvbnRlbnQnICkgfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggbmV3VmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0b25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ2NvbnRlbnQnICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHRcdDxNYWNyb3NJbnNlcnRlclxuXHRcdFx0XHRmaWVsZHM9eyBmb3JtRmllbGRzIH1cblx0XHRcdFx0b25GaWVsZENsaWNrPXsgaW5zZXJ0TWFjcm9zIH1cblx0XHRcdFx0Y3VzdG9tTWFjcm9zPXsgc291cmNlLmN1c3RvbU1hY3JvcyB9XG5cdFx0XHRcdHpJbmRleD17IDEwMDAwMDAwIH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdDwvPjtcblx0LyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xufVxuXG5hZGRBY3Rpb24oICdzZW5kX2VtYWlsJywgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggU2VuZEVtYWlsQWN0aW9uICkgKVxuIiwiY29uc3Qge1xuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0XHQgIGFkZEFjdGlvbixcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdFx0ICBTZWxlY3RDb250cm9sLFxuXHRcdCAgQmFzZUNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIHVzZVN0YXRlLFxuXHQgIH0gPSB3cC5lbGVtZW50O1xuXG5hZGRBY3Rpb24oICd1cGRhdGVfb3B0aW9ucycsIGNsYXNzIFVwZGF0ZU9wdGlvbnNBY3Rpb24gZXh0ZW5kcyB3cC5lbGVtZW50LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoIHByb3BzICkge1xuXHRcdHN1cGVyKCBwcm9wcyApO1xuXG5cdFx0dGhpcy5maWVsZHMgPSBnZXRGb3JtRmllbGRzQmxvY2tzKCk7XG5cdH1cblxuXHRnZXRGaWVsZEJ5TmFtZSggeyBzb3VyY2UsIG5hbWUgfSApIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuc2V0dGluZ3M7XG5cblx0XHRpZiAoIHNldHRpbmdzWyBzb3VyY2UgXSAmJiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXSApIHtcblx0XHRcdHJldHVybiBzZXR0aW5nc1sgc291cmNlIF1bIG5hbWUgXTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0RmllbGRNZXRhKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmdldEZpZWxkQnlOYW1lKCB7XG5cdFx0XHRzb3VyY2U6ICdtZXRhX2ZpZWxkc19tYXAnLFxuXHRcdFx0bmFtZSxcblx0XHR9ICk7XG5cdH1cblxuXHRjaGFuZ2VGaWVsZHNNYXAoIHsgc291cmNlLCBuYW1lRmllbGQsIHZhbHVlIH0gKSB7XG5cdFx0Y29uc3QgZmllbGRzTWFwID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMucHJvcHMuc2V0dGluZ3NbIHNvdXJjZSBdICk7XG5cblx0XHRmaWVsZHNNYXBbIG5hbWVGaWVsZCBdID0gdmFsdWU7XG5cblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKCB7XG5cdFx0XHQuLi50aGlzLnByb3BzLnNldHRpbmdzLFxuXHRcdFx0WyBzb3VyY2UgXTogZmllbGRzTWFwLFxuXHRcdH0gKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNldHRpbmdzLCBvbkNoYW5nZSwgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IG9uQ2hhbmdlTWV0YUZpZWxkTWFwID0gKCB2YWx1ZSwgbmFtZUZpZWxkICkgPT4ge1xuXHRcdFx0Y29uc3Qgc291cmNlID0gJ21ldGFfZmllbGRzX21hcCc7XG5cblx0XHRcdHRoaXMuY2hhbmdlRmllbGRzTWFwKFxuXHRcdFx0XHR7IHZhbHVlLCBuYW1lRmllbGQsIHNvdXJjZSB9LFxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2VTZXR0aW5nID0gKCB2YWx1ZSwga2V5ICkgPT4ge1xuXHRcdFx0b25DaGFuZ2UoIHtcblx0XHRcdFx0Li4uc2V0dGluZ3MsXG5cdFx0XHRcdFsga2V5IF06IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRcdHJldHVybiAoIDxkaXYga2V5PVwicmVnaXN0ZXJfdXNlclwiPlxuXHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0a2V5PVwib3B0aW9uc19wYWdlX2xpc3RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfcGFnZScgKSB9XG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5vcHRpb25zX3BhZ2UgfVxuXHRcdFx0XHRvcHRpb25zPXsgc291cmNlLm9wdGlvbnNQYWdlcyB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdWYWx1ZSApID0+IHtcblx0XHRcdFx0XHRvbkNoYW5nZVNldHRpbmcoIG5ld1ZhbHVlLCAnb3B0aW9uc19wYWdlJyApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ29wdGlvbnNfbWFwJyApIH1cblx0XHRcdFx0a2V5PSdvcHRpb25zX21ldGFfbGlzdCdcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxuXHRcdFx0XHRcdHsgdGhpcy5maWVsZHMubWFwKCAoIHsgbmFtZSB9LCBpbmRleCApID0+IDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpldC11c2VyLW1ldGFfX3Jvd1wiXG5cdFx0XHRcdFx0XHRrZXk9eyAnb3B0aW9uc19tZXRhXycgKyBuYW1lICsgaW5kZXggfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IG5hbWUgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRoaXMuZ2V0RmllbGRNZXRhKCBuYW1lICkgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZU1ldGFGaWVsZE1hcCggbmV3VmFsLCBuYW1lICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj4gKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdDwvZGl2PiApO1xuXHRcdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cblx0fVxufSApOyIsImNvbnN0IHtcblx0XHQgIGFkZEFjdGlvbixcblx0XHQgIGdldEZvcm1GaWVsZHNCbG9ja3MsXG5cdFx0ICBjb252ZXJ0TGlzdFRvRmllbGRzTWFwLFxuXHRcdCAgVG9vbHM6IHsgd2l0aFBsYWNlaG9sZGVyIH0sXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRcdCAgQWN0aW9uRmllbGRzTWFwLFxuXHRcdCAgV3JhcHBlclJlcXVpcmVkQ29udHJvbCxcblx0XHQgIEFjdGlvbk1lc3NhZ2VzLFxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmNvbnN0IHsgd2l0aFJlcXVlc3RGaWVsZHMgfSA9IEpldEZCSG9va3M7XG5cbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3Qge1xuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIEJhc2VDb250cm9sLFxuXHRcdCAgVGV4dENvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIHVzZVN0YXRlLFxuXHRcdCAgdXNlRWZmZWN0LFxuXHQgIH0gPSB3cC5lbGVtZW50O1xuXG5mdW5jdGlvbiBVcGRhdGVVc2VyQWN0aW9uKCBwcm9wcyApIHtcblxuXHRjb25zdCBbIGZpZWxkcywgc2V0RmllbGRzIF0gPSB1c2VTdGF0ZSggW10gKTtcblx0Y29uc3Qge1xuXHRcdFx0ICBzZXR0aW5ncyxcblx0XHRcdCAgb25DaGFuZ2VTZXR0aW5nLFxuXHRcdFx0ICBzb3VyY2UsXG5cdFx0XHQgIGxhYmVsLFxuXHRcdFx0ICBnZXRNYXBGaWVsZCxcblx0XHRcdCAgc2V0TWFwRmllbGQsXG5cdFx0XHQgIHJlcXVlc3RGaWVsZHMsXG5cdFx0ICB9ID0gcHJvcHM7XG5cblx0Y29uc3QgWyBmaWVsZFR5cGUsIHNldFR5cGVGaWVsZCBdID0gdXNlU3RhdGUoIHt9ICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0c2V0VHlwZUZpZWxkKCAoKSA9PiB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB7fTtcblxuXHRcdFx0Zm9yICggY29uc3QgZmllbGRzTWFwS2V5IGluIHNldHRpbmdzLmZpZWxkc19tYXAgKSB7XG5cdFx0XHRcdHJlc3VsdFsgZmllbGRzTWFwS2V5IF0gPSBnZXRUeXBlRmllbGRWYWx1ZSggc2V0dGluZ3MuZmllbGRzX21hcFsgZmllbGRzTWFwS2V5IF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9ICk7XG5cblx0XHRzZXRGaWVsZHMoIGNvbnZlcnRMaXN0VG9GaWVsZHNNYXAoIGdldEZvcm1GaWVsZHNCbG9ja3MoKSwgcmVxdWVzdEZpZWxkcyApIClcblx0fSwgW10gKTtcblxuXHRmdW5jdGlvbiBnZXRUeXBlRmllbGRWYWx1ZSggdmFsdWUgKSB7XG5cdFx0bGV0IHJlc3VsdFZhbHVlID0gJ3VzZXJfbWV0YSc7XG5cblx0XHRmb3IgKCBjb25zdCB1c2VyRmllbGQgb2Ygc291cmNlLnVzZXJGaWVsZHMgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSB1c2VyRmllbGQudmFsdWUgKSB7XG5cdFx0XHRcdHJlc3VsdFZhbHVlID0gdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHRWYWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFR5cGVGaWVsZFZhbHVlKCBwcmV2LCBmaWVsZElELCB2YWx1ZSApIHtcblx0XHRjb25zdCByZXN1bHRWYWx1ZSA9IGdldFR5cGVGaWVsZFZhbHVlKCB2YWx1ZSApO1xuXG5cdFx0aWYgKCAndXNlcl9tZXRhJyA9PT0gcmVzdWx0VmFsdWUgKSB7XG5cdFx0XHRzZXRNYXBGaWVsZCggeyBuYW1lRmllbGQ6IGZpZWxkSUQsIHZhbHVlOiAnJyB9IClcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0TWFwRmllbGQoIHsgbmFtZUZpZWxkOiBmaWVsZElELCB2YWx1ZTogcmVzdWx0VmFsdWUgfSApXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnByZXYsXG5cdFx0XHRbIGZpZWxkSUQgXTogcmVzdWx0VmFsdWUsXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IGdldEZpZWxkU2VsZWN0ID0gKCBmaWVsZElkLCBpbmRleCApID0+ICggPFNlbGVjdENvbnRyb2xcblx0XHRrZXk9eyBmaWVsZElkICsgaW5kZXggfVxuXHRcdHZhbHVlPXsgZmllbGRUeXBlWyBmaWVsZElkIF0gfVxuXHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4ge1xuXHRcdFx0c2V0VHlwZUZpZWxkKCBwcmV2ID0+IHNldFR5cGVGaWVsZFZhbHVlKCBwcmV2LCBmaWVsZElkLCB2YWx1ZSApICk7XG5cdFx0fSB9XG5cdFx0b3B0aW9ucz17IHNvdXJjZS51c2VyRmllbGRzIH1cblx0Lz4gKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1vbmNoYW5nZSAqL1xuXHRyZXR1cm4gKCA8ZGl2IGtleT1cInVwZGF0ZV91c2VyXCI+XG5cdFx0PEFjdGlvbkZpZWxkc01hcFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2ZpZWxkc19tYXAnICkgfVxuXHRcdFx0a2V5PSd1c2VyX2ZpZWxkc19tYXAnXG5cdFx0XHRmaWVsZHM9eyBmaWVsZHMgfVxuXHRcdD5cblx0XHRcdHsgKCB7IGZpZWxkSWQsIGZpZWxkRGF0YSwgaW5kZXggfSApID0+IDxXcmFwcGVyUmVxdWlyZWRDb250cm9sXG5cdFx0XHRcdGZpZWxkPXsgWyBmaWVsZElkLCBmaWVsZERhdGEgXSB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgJ3VzZXJfbWV0YScgPT09IGZpZWxkVHlwZVsgZmllbGRJZCBdICYmXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb21wb25lbnRzLWJhc2UtY29udHJvbCBqZXQtbWFyZ2luLWJvdHRvbS13cmFwcGVyJz5cblx0XHRcdFx0XHR7IGdldEZpZWxkU2VsZWN0KCBmaWVsZElkLCBpbmRleCApIH1cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGtleT17IGZpZWxkSWQgKyBpbmRleCArICdfdGV4dCcgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBnZXRNYXBGaWVsZCggeyBuYW1lOiBmaWVsZElkIH0gKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IHZhbHVlID0+IHNldE1hcEZpZWxkKCB7IG5hbWVGaWVsZDogZmllbGRJZCwgdmFsdWUgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj4gfVxuXHRcdFx0XHR7ICd1c2VyX21ldGEnICE9PSBmaWVsZFR5cGVbIGZpZWxkSWQgXSAmJiBnZXRGaWVsZFNlbGVjdCggZmllbGRJZCwgaW5kZXggKSB9XG5cdFx0XHQ8L1dyYXBwZXJSZXF1aXJlZENvbnRyb2w+IH1cblx0XHQ8L0FjdGlvbkZpZWxkc01hcD5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZXJfcm9sZScgKSB9XG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRrZXk9XCJ1c2VyX3JvbGVfbGlzdFwiXG5cdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcblx0XHRcdHZhbHVlPXsgc2V0dGluZ3MudXNlcl9yb2xlIH1cblx0XHRcdG9wdGlvbnM9eyBzb3VyY2UudXNlclJvbGVzIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gb25DaGFuZ2VTZXR0aW5nKCBuZXdWYWx1ZSwgJ3VzZXJfcm9sZScgKSB9XG5cdFx0Lz5cblx0XHQ8QWN0aW9uTWVzc2FnZXMgeyAuLi5wcm9wcyB9IC8+XG5cdDwvZGl2PiApO1xuXHQvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L25vLW9uY2hhbmdlICovXG59XG5cbmFkZEFjdGlvbiggJ3VwZGF0ZV91c2VyJywgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggVXBkYXRlVXNlckFjdGlvbiApICk7XG4iLCJpbXBvcnQgUGF5UGFsIGZyb20gXCIuL3BheXBhbFwiO1xuXG5jb25zdCB7XG5cdFx0ICBhY3Rpb25CeVR5cGVMaXN0LFxuXHRcdCAgZnJvbUxvY2FsaXplSGVscGVyLFxuXHRcdCAgZ2V0Rm9ybUZpZWxkc0Jsb2Nrcyxcblx0XHQgIGdhdGV3YXlBdHRyLFxuXHRcdCAgcmVuZGVyR2F0ZXdheSxcblx0XHQgIGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzLFxuXHQgIH0gPSBKZXRGQkFjdGlvbnM7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHtcblx0XHQgIFRleHRhcmVhQ29udHJvbCxcblx0XHQgIENoZWNrYm94Q29udHJvbCxcblx0XHQgIFNlbGVjdENvbnRyb2wsXG5cdFx0ICBCYXNlQ29udHJvbCxcblx0XHQgIFJhZGlvQ29udHJvbCxcblx0ICB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3Qge1xuXHRcdCAgdXNlU3RhdGUsXG5cdFx0ICB1c2VFZmZlY3QsXG5cdCAgfSA9IHdwLmVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhdGV3YXlzRWRpdG9yKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2F0ZXdheXNBcmdzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZUFjdGlvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25Vbk1vdW50LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvblNhdmVJdGVtcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApIHtcblxuXHRjb25zdCBhdmFpbGFibGVBY3Rpb25zID0gYWN0aXZlQWN0aW9ucy5maWx0ZXIoIGFjdGlvbiA9PiBhY3Rpb24udHlwZSAhPT0gJ3JlZGlyZWN0X3RvX3BhZ2UnICk7XG5cblx0Y29uc3QgZ2F0ZXdheXNEYXRhID0gZ2F0ZXdheUF0dHIoKTtcblx0Y29uc3QgbGFiZWwgPSBnYXRld2F5QXR0ciggJ2xhYmVscycgKTtcblxuXHRjb25zdCBbIGdhdGV3YXksIHNldEdhdGV3YXkgXSA9IHVzZVN0YXRlKCBnYXRld2F5c0FyZ3MgKTtcblxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcblxuXHQvKipcblx0ICogVXNlZCBmb3Igc2V0IG5vdGlmaWNhdGlvbnMgYW5kIGdhdGV3YXkgdHlwZSBzZXR0aW5nc1xuXHQgKlxuXHQgKiBAcGFyYW0gd2hlblxuXHQgKiBAcGFyYW0gdHlwZVxuXHQgKiBAcGFyYW0gbmV3VmFsdWVcblx0ICovXG5cdGNvbnN0IHNldFZhbHVlSW5PYmplY3QgPSAoIHdoZW4sIHR5cGUsIG5ld1ZhbHVlICkgPT4ge1xuXHRcdHNldEdhdGV3YXkoICggcHJldkFyZ3MgKSA9PiB7XG5cdFx0XHRpZiAoICEgcHJldkFyZ3NbIHdoZW4gXSApIHtcblx0XHRcdFx0cHJldkFyZ3NbIHdoZW4gXSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0cHJldkFyZ3NbIHdoZW4gXVsgdHlwZSBdID0gbmV3VmFsdWU7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdH1cblx0XHR9ICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFVzZWQgZm9yIGdldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3Ncblx0ICpcblx0ICogQHBhcmFtIHdoZW5cblx0ICogQHBhcmFtIHR5cGVcblx0ICogQHBhcmFtIGlzRW1wdHlSZXN1bHRcblx0ICogQHJldHVybnMge2Jvb2xlYW58Kn1cblx0ICovXG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnMgPSAoIHdoZW4sIHR5cGUsIGlzRW1wdHlSZXN1bHQgPSBmYWxzZSApID0+IHtcblx0XHRpZiAoIGdhdGV3YXlbIHdoZW4gXSAmJiBnYXRld2F5WyB3aGVuIF1bIHR5cGUgXSApIHtcblx0XHRcdHJldHVybiBnYXRld2F5WyB3aGVuIF1bIHR5cGUgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGlzRW1wdHlSZXN1bHQ7XG5cdH07XG5cblx0Y29uc3Qgc2V0UmVzdWx0TWVzc2FnZSA9ICgga2V5LCB2YWx1ZSApID0+IHtcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbWVzc2FnZXMnLCBrZXksIHZhbHVlICk7XG5cdH07XG5cdGNvbnN0IGdldFJlc3VsdE1lc3NhZ2UgPSAoIGtleSApID0+IHtcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ21lc3NhZ2VzJywga2V5LCBnYXRld2F5c0RhdGEubWVzc2FnZXNbIGtleSBdICk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc0JlZm9yZSA9ICggaWQsIG5ld1ZhbHVlICkgPT4ge1xuXHRcdHNldFZhbHVlSW5PYmplY3QoICdub3RpZmljYXRpb25zX2JlZm9yZScsIGlkLCBuZXdWYWx1ZSApO1xuXHR9O1xuXG5cdGNvbnN0IGFjdGlvbkRlZmF1bHQgPSB7IGFjdGl2ZTogZmFsc2UgfTtcblxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zQmVmb3JlID0gaWQgPT4ge1xuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbm90aWZpY2F0aW9uc19iZWZvcmUnLCBpZCwgYWN0aW9uRGVmYXVsdCApO1xuXHR9O1xuXG5cdGNvbnN0IHNldE5vdGlmaWNhdGlvbnNGYWlsZWQgPSAoIHR5cGUsIG5ld1ZhbHVlICkgPT4ge1xuXHRcdHNldFZhbHVlSW5PYmplY3QoICdub3RpZmljYXRpb25zX2ZhaWxlZCcsIHR5cGUsIG5ld1ZhbHVlICk7XG5cdH07XG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnNGYWlsZWQgPSBpZCA9PiB7XG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdub3RpZmljYXRpb25zX2ZhaWxlZCcsIGlkLCBhY3Rpb25EZWZhdWx0ICk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Tm90aWZpY2F0aW9uc1N1Y2Nlc3MgPSAoIGlkLCBuZXdWYWx1ZSApID0+IHtcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbm90aWZpY2F0aW9uc19zdWNjZXNzJywgaWQsIG5ld1ZhbHVlICk7XG5cdH07XG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnNTdWNjZXNzID0gaWQgPT4ge1xuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbm90aWZpY2F0aW9uc19zdWNjZXNzJywgaWQsIGFjdGlvbkRlZmF1bHQgKTtcblx0fTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoIHRydWUgPT09IGlzU2F2ZUFjdGlvbiApIHtcblx0XHRcdGlmICggb25TYXZlSXRlbXMgKSB7XG5cblx0XHRcdFx0WyAnbm90aWZpY2F0aW9uc19iZWZvcmUnLCAnbm90aWZpY2F0aW9uc19mYWlsZWQnLCAnbm90aWZpY2F0aW9uc19zdWNjZXNzJyBdLmZvckVhY2goIG5hbWUgPT4ge1xuXHRcdFx0XHRcdGlmICggISBnYXRld2F5WyBuYW1lIF0gKSB7XG5cdFx0XHRcdFx0XHRnYXRld2F5WyBuYW1lIF0gPSB7fTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0T2JqZWN0LmVudHJpZXMoIGdhdGV3YXlbIG5hbWUgXSApLmZvckVhY2goICggWyBhY3Rpb24sIGlzQ2hlY2tlZCBdICkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCAhIGlzQ2hlY2tlZCApIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIGdhdGV3YXlbIG5hbWUgXVsgYWN0aW9uIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRvblNhdmVJdGVtcyggZ2F0ZXdheSApO1xuXHRcdFx0fVxuXHRcdFx0b25Vbk1vdW50KCk7XG5cdFx0fSBlbHNlIGlmICggZmFsc2UgPT09IGlzU2F2ZUFjdGlvbiApIHtcblx0XHRcdG9uVW5Nb3VudCgpO1xuXHRcdH1cblx0fSwgWyBpc1NhdmVBY3Rpb24gXSApO1xuXG5cdGNvbnN0IGFjdGlvbnNMaXN0ID0gYWN0aW9uQnlUeXBlTGlzdCggJ2luc2VydF9wb3N0JywgdHJ1ZSApO1xuXHRjb25zdCBhY3Rpb25MYWJlbCA9IGZyb21Mb2NhbGl6ZUhlbHBlciggJ2dldEFjdGlvbkxhYmVsJyApO1xuXG5cdHJldHVybiA8PlxuXHRcdHsgcmVuZGVyR2F0ZXdheSggZ2F0ZXdheS5nYXRld2F5LCB7IHNldFZhbHVlSW5PYmplY3QsIGdldE5vdGlmaWNhdGlvbnMgfSApIH1cblx0XHR7IEJvb2xlYW4oIGF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoICkgJiYgPD5cblx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnQmVmb3JlIHBheW1lbnQgcHJvY2Vzc2VkOicsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cblx0XHRcdFx0a2V5PVwiYmVmb3JlX3BheW1lbnRfYmFzZV9jb250cm9sXCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyAnamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCcgfT5cblx0XHRcdFx0XHR7IGF2YWlsYWJsZUFjdGlvbnMubWFwKCAoIGFjdGlvbiwgaW5kZXggKSA9PiA8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9eyAnamV0LWZvcm1zLWNoZWNrYm94LWZpZWxkJyB9XG5cdFx0XHRcdFx0XHRrZXk9eyBgcGxhY2VfaG9sZGVyX2Jsb2NrXyR7IGFjdGlvbi5pZCArIGluZGV4IH1gIH1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBnZXROb3RpZmljYXRpb25zQmVmb3JlKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBhY3Rpb25MYWJlbCggYWN0aW9uLnR5cGUgKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNCZWZvcmUoIGFjdGlvbi5pZCwge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmUsXG5cdFx0XHRcdFx0XHRcdHR5cGU6IGFjdGlvbi50eXBlLFxuXHRcdFx0XHRcdFx0fSApIH1cblx0XHRcdFx0XHQvPiApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdPbiBzdWNjZXNzZnVsIHBheW1lbnQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRrZXk9XCJzdWNjZXNzX3BheW1lbnRfYmFzZV9jb250cm9sXCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2pldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnPlxuXHRcdFx0XHRcdHsgYXZhaWxhYmxlQWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IDxDaGVja2JveENvbnRyb2xcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtZm9ybXMtY2hlY2tib3gtZmllbGQnIH1cblx0XHRcdFx0XHRcdGtleT17IGBwbGFjZV9ob2xkZXJfYmxvY2tfJHsgYWN0aW9uLmlkICsgaW5kZXggfWAgfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17IGdldE5vdGlmaWNhdGlvbnNTdWNjZXNzKCBhY3Rpb24uaWQgKS5hY3RpdmUgfVxuXHRcdFx0XHRcdFx0bGFiZWw9eyBhY3Rpb25MYWJlbCggYWN0aW9uLnR5cGUgKSB9XG5cdFx0XHRcdFx0XHRoZWxwPXsgZ2F0ZXdheUFjdGlvbkF0dHJpYnV0ZXMoIGFjdGlvbiApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYWN0aXZlID0+IHNldE5vdGlmaWNhdGlvbnNTdWNjZXNzKCBhY3Rpb24uaWQsIHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiBhY3Rpb24udHlwZSxcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0Lz4gKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnT24gZmFpbGVkIHBheW1lbnQ6JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxuXHRcdFx0XHRrZXk9XCJmYWlsZWRfcGF5bWVudF9iYXNlX2NvbnRyb2xcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0namV0LXVzZXItZmllbGRzLW1hcF9fbGlzdCc+XG5cdFx0XHRcdFx0eyBhdmFpbGFibGVBY3Rpb25zLm1hcCggKCBhY3Rpb24sIGluZGV4ICkgPT4gPENoZWNrYm94Q29udHJvbFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3Jtcy1jaGVja2JveC1maWVsZCcgfVxuXHRcdFx0XHRcdFx0a2V5PXsgYHBsYWNlX2hvbGRlcl9ibG9ja18keyBhY3Rpb24uaWQgKyBpbmRleCB9YCB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgZ2V0Tm90aWZpY2F0aW9uc0ZhaWxlZCggYWN0aW9uLmlkICkuYWN0aXZlIH1cblx0XHRcdFx0XHRcdGxhYmVsPXsgYWN0aW9uTGFiZWwoIGFjdGlvbi50eXBlICkgfVxuXHRcdFx0XHRcdFx0aGVscD17IGdhdGV3YXlBY3Rpb25BdHRyaWJ1dGVzKCBhY3Rpb24gKSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IGFjdGl2ZSA9PiBzZXROb3RpZmljYXRpb25zRmFpbGVkKCBhY3Rpb24uaWQsIHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiBhY3Rpb24udHlwZSxcblx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0Lz4gKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHQ8Lz4gfVxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ2FjdGlvbl9vcmRlcicgKSB9XG5cdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyX2Jhc2VfY29udHJvbCdcblx0XHQ+XG5cdFx0XHQ8UmFkaW9Db250cm9sXG5cdFx0XHRcdGNsYXNzTmFtZT0namV0LWNvbnRyb2wtY2xlYXItZnVsbCBqZXQtdXNlci1maWVsZHMtbWFwX19saXN0J1xuXHRcdFx0XHRrZXk9J2dhdGV3YXlfYWN0aW9uX29yZGVyJ1xuXHRcdFx0XHRvcHRpb25zPXsgYWN0aW9uQnlUeXBlTGlzdCggJ2luc2VydF9wb3N0JywgdHJ1ZSApIH1cblx0XHRcdFx0c2VsZWN0ZWQ9eyBnYXRld2F5LmFjdGlvbl9vcmRlciB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0XHRzZXRHYXRld2F5KCBwcmV2QXJncyA9PiAoIHtcblx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdFx0YWN0aW9uX29yZGVyOiBOdW1iZXIoIG5ld1ZhbCApLFxuXHRcdFx0XHRcdH0gKSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+XG5cdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAncHJpY2VfZmllbGQnICkgfVxuXHRcdFx0a2V5PXsgJ2Zvcm1fZmllbGRzX3ByaWNlX2ZpZWxkJyB9XG5cdFx0XHR2YWx1ZT17IGdhdGV3YXkucHJpY2VfZmllbGQgfVxuXHRcdFx0bGFiZWxQb3NpdGlvbj0nc2lkZSdcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0c2V0R2F0ZXdheSggcHJldkFyZ3MgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0cHJpY2VfZmllbGQ6IG5ld1ZhbCxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IH1cblx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cblx0XHQvPlxuXHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWFjcm9zX2Jhc2VfY29udHJvbFwiXG5cdFx0PlxuXHRcdFx0PGg0PlxuXHRcdFx0XHR7IF9fKCAnQXZhaWxhYmxlIG1hY3JvcyBsaXN0OiAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cblx0XHRcdFx0eyBfXyggJyVnYXRld2F5X2Ftb3VudCUgLSBwYXltZW50IGFtb3VudCByZXR1cm5lZCBmcm9tIGdhdGV3YXkgdGVtcGxhdGU7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XG5cdFx0XHRcdHsgX18oICclZ2F0ZXdheV9zdGF0dXMlIC0gcGF5bWVudCBzdGF0dXMgcmV0dXJuZWQgZnJvbSBwYXltZW50IGdhdGV3YXk7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XG5cdFx0XHRcdHsgX18oICclZmllbGRfbmFtZSUgLSByZXBsYWNlIFwiZmllbGRfbmFtZVwiIHdpdGggYW55IGZpZWxkIG5hbWUgZnJvbSB0aGUgZm9ybTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cblx0XHRcdDwvaDQ+XG5cdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21lc3NhZ2Vfc3VjY2Vzc1wiXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnbWVzc2FnZV9zdWNjZXNzJyApIH1cblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRSZXN1bHRNZXNzYWdlKCAnc3VjY2VzcycsIG5ld1ZhbHVlICkgfVxuXHRcdC8+XG5cdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9mYWlsZWRcIlxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2VfZmFpbGVkJyApIH1cblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcgKSB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdmYWlsZWQnLCBuZXdWYWx1ZSApIH1cblx0XHQvPlxuXHRcdHsgYWN0aXZlQWN0aW9ucy5maW5kKCBhY3Rpb24gPT4gYWN0aW9uLnR5cGUgPT09ICdyZWRpcmVjdF90b19wYWdlJyApICYmIDxDaGVja2JveENvbnRyb2xcblx0XHRcdGtleT1cImNoZWNrYm94X2Jsb2NrX3JlZGlyZWN0X3RvX3BhZ2VcIlxuXHRcdFx0Y2hlY2tlZD17IGdhdGV3YXkudXNlX3N1Y2Nlc3NfcmVkaXJlY3QgfVxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3VzZV9zdWNjZXNzX3JlZGlyZWN0JyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgdmFsdWUgPT4ge1xuXHRcdFx0XHRzZXRHYXRld2F5KCBwcmV2QXJncyA9PiAoIHtcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHR1c2Vfc3VjY2Vzc19yZWRpcmVjdDogdmFsdWUsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0Lz4gfVxuXHQ8Lz47XG5cbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0Q29udHJvbCxcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXG5cdCAgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IHtcblx0XHQgIHJlZ2lzdGVyR2F0ZXdheSxcblx0XHQgIGdhdGV3YXlMYWJlbCxcblx0XHQgIGdsb2JhbFRhYixcblx0ICB9ID0gSmV0RkJBY3Rpb25zO1xuXG5jb25zdCBsYWJlbCA9IGdhdGV3YXlMYWJlbCggJ3BheXBhbCcgKTtcbmNvbnN0IGN1cnJlbnRUYWIgPSBnbG9iYWxUYWIoIHsgc2x1ZzogJ3BheXBhbCcgfSApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXlQYWwoIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFZhbHVlSW5PYmplY3QsXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXROb3RpZmljYXRpb25zLFxuXHRcdFx0XHRcdFx0XHRcdH0gKSB7XG5cblx0Y29uc3Qgc2V0U2V0dGluZyA9ICgga2V5LCB2YWx1ZSApID0+IHtcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAncGF5cGFsJywga2V5LCB2YWx1ZSApO1xuXHR9O1xuXHRjb25zdCBnZXRTZXR0aW5nID0gKCBrZXkgKSA9PiB7XG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdwYXlwYWwnLCBrZXksICcnICk7XG5cdH07XG5cblx0Y29uc3QgaXNHbG9iYWwgPSBnZXROb3RpZmljYXRpb25zKCAncGF5cGFsJywgJ3VzZV9nbG9iYWwnLCBmYWxzZSApO1xuXG5cdGNvbnN0IGdldE1hbnVhbE9yR2xvYmFsID0ga2V5ID0+IHtcblx0XHRyZXR1cm4gaXNHbG9iYWxcblx0XHRcdD8gY3VycmVudFRhYlsga2V5IF1cblx0XHRcdDogZ2V0U2V0dGluZygga2V5ICk7XG5cdH07XG5cblx0cmV0dXJuIDw+XG5cdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdGtleT17ICd1c2VfZ2xvYmFsJyB9XG5cdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlX2dsb2JhbCcgKSB9XG5cdFx0XHRjaGVja2VkPXsgZ2V0U2V0dGluZyggJ3VzZV9nbG9iYWwnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ3VzZV9nbG9iYWwnLCBuZXdWYWwgKSB9XG5cdFx0Lz5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdjbGllbnRfaWQnICkgfVxuXHRcdFx0a2V5PSdwYXlwYWxfY2xpZW50X2lkX3NldHRpbmcnXG5cdFx0XHR2YWx1ZT17IGdldE1hbnVhbE9yR2xvYmFsKCAnY2xpZW50X2lkJyApIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHNldFNldHRpbmcoICdjbGllbnRfaWQnLCBuZXdWYWwgKSB9XG5cdFx0XHRkaXNhYmxlZD17IGlzR2xvYmFsIH1cblx0XHQvPlxuXHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ3NlY3JldCcgKSB9XG5cdFx0XHRrZXk9J3BheXBhbF9zZWNyZXRfc2V0dGluZydcblx0XHRcdHZhbHVlPXsgZ2V0TWFudWFsT3JHbG9iYWwoICdzZWNyZXQnICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ3NlY3JldCcsIG5ld1ZhbCApIH1cblx0XHRcdGRpc2FibGVkPXsgaXNHbG9iYWwgfVxuXHRcdC8+XG5cdFx0PFRleHRDb250cm9sXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnY3VycmVuY3knICkgfVxuXHRcdFx0a2V5PSdwYXlwYWxfY3VycmVuY3lfY29kZV9zZXR0aW5nJ1xuXHRcdFx0dmFsdWU9eyBnZXRTZXR0aW5nKCAnY3VycmVuY3knICkgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4gc2V0U2V0dGluZyggJ2N1cnJlbmN5JywgbmV3VmFsICkgfVxuXHRcdC8+XG5cdDwvPjtcbn1cblxucmVnaXN0ZXJHYXRld2F5KCAncGF5cGFsJywgUGF5UGFsICk7XG5cbiIsImltcG9ydCBQbHVnaW5BY3Rpb25zIGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBiYXNlID0ge1xuXHRuYW1lOiAnamYtYWN0aW9ucy1wYW5lbCcsXG5cdHRpdGxlOiBfXyggJ1Bvc3QgU3VibWl0IEFjdGlvbnMnIClcbn07XG5cbmNvbnN0IHNldHRpbmdzID0ge1xuXHRyZW5kZXI6IFBsdWdpbkFjdGlvbnMsXG5cdGljb246IG51bGxcbn07XG5cbmV4cG9ydCB7XG5cdGJhc2UsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IGdldFJhbmRvbUlEID0gKCkgPT4ge1xuXHRyZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDg5OTkgKSArIDEwMDA7XG59XG5cbmNvbnN0IGRlZmF1bHRBY3Rpb24gPSB7XG5cdHR5cGU6ICdzZW5kX2VtYWlsJyxcblx0aWQ6IGdldFJhbmRvbUlEKCksXG5cdHNldHRpbmdzOiB7fSxcbn1cblxuY29uc3QgZGVmYXVsdEFjdGlvbnMgPSBbIHtcblx0Li4uSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIGRlZmF1bHRBY3Rpb24gKSApLFxuXHRzZXR0aW5nczoge1xuXHRcdHNlbmRfZW1haWw6IHtcblx0XHRcdHN1YmplY3Q6ICdOZXcgb3JkZXIgb24gd2Vic2l0ZScsXG5cdFx0XHRjb250ZW50OiAnSGkgYWRtaW4hXFxuXFxuVGhlcmUgYXJlIG5ldyBvcmRlciBvbiB5b3VyIHdlYnNpdGUuXFxuXFxuT3JkZXIgZGV0YWlsczpcXG4tIFBvc3QgSUQ6ICVwb3N0X2lkJScsXG5cdFx0fSxcblx0fSxcbn0gXTtcblxuY29uc3QgbmV3SXRlbUNvbmRpdGlvbiA9IHtcblx0ZXhlY3V0ZTogdHJ1ZSxcblx0b3BlcmF0b3I6ICcnLFxuXHRmaWVsZDogJycsXG5cdGRlZmF1bHQ6ICcnLFxufTtcblxuY29uc3QgY29uZGl0aW9uT3BlcmF0b3JzID0gW1xuXHR7IGxhYmVsOiAnLS0nLCB2YWx1ZTogJycgfSxcblx0eyBsYWJlbDogJ0VxdWFsJywgdmFsdWU6ICdlcXVhbCcgfSxcblx0eyBsYWJlbDogJ0dyZWF0ZXIgdGhhbicsIHZhbHVlOiAnZ3JlYXRlcicgfSxcblx0eyBsYWJlbDogJ0xlc3MgdGhhbicsIHZhbHVlOiAnbGVzcycgfSxcblx0eyBsYWJlbDogJ0JldHdlZW4nLCB2YWx1ZTogJ2JldHdlZW4nIH0sXG5cdHsgbGFiZWw6ICdJbiB0aGUgbGlzdCcsIHZhbHVlOiAnb25lX29mJyB9LFxuXHR7IGxhYmVsOiAnQ29udGFpbiB0ZXh0JywgdmFsdWU6ICdjb250YWluJyB9LFxuXTtcblxuZXhwb3J0IHtcblx0Z2V0UmFuZG9tSUQsXG5cdGRlZmF1bHRBY3Rpb25zLFxuXHRuZXdJdGVtQ29uZGl0aW9uLFxuXHRjb25kaXRpb25PcGVyYXRvcnMsXG5cdGRlZmF1bHRBY3Rpb24sXG59OyIsImltcG9ydCB7XG5cdGNvbmRpdGlvbk9wZXJhdG9ycyxcblx0ZGVmYXVsdEFjdGlvbixcblx0ZGVmYXVsdEFjdGlvbnMsXG5cdGdldFJhbmRvbUlELFxuXHRuZXdJdGVtQ29uZGl0aW9uLFxufSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IHtcblx0XHQgIGdldEZvcm1GaWVsZHNCbG9ja3MsXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHRcdCAgQWN0aW9uTW9kYWwsXG5cdFx0ICBSZXBlYXRlcldpdGhTdGF0ZSxcblx0XHQgIEZpZWxkV2l0aFByZXNldCxcblx0XHQgIER5bmFtaWNQcmVzZXQsXG5cdCAgfSA9IEpldEZCQ29tcG9uZW50cztcblxuY29uc3QgeyB1c2VBY3Rpb25zIH0gPSBKZXRGQkhvb2tzO1xuXG5jb25zdCB7XG5cdFx0ICBUZXh0YXJlYUNvbnRyb2wsXG5cdFx0ICBUb2dnbGVDb250cm9sLFxuXHRcdCAgU2VsZWN0Q29udHJvbCxcblx0XHQgIEJ1dHRvbixcblx0XHQgIENhcmQsXG5cdFx0ICBDYXJkQm9keSxcblx0XHQgIENhcmRIZWFkZXIsXG5cdFx0ICBEcm9wZG93bk1lbnUsXG5cdFx0ICBGbGV4LFxuXHQgIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdFx0ICB1c2VTdGF0ZSxcblx0XHQgIHVzZUVmZmVjdCxcblx0ICB9ID0gd3AuZWxlbWVudDtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG5jb25zdCB7IHdpdGhEaXNwYXRjaCwgdXNlRGlzcGF0Y2ggfSA9IHdwLmRhdGE7XG5jb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XG5cbmNvbnN0IGFjdGlvblR5cGVzID0gd2luZG93LmpldEZvcm1BY3Rpb25UeXBlcy5tYXAoIGZ1bmN0aW9uKCBhY3Rpb24gKSB7XG5cdHJldHVybiB7XG5cdFx0dmFsdWU6IGFjdGlvbi5pZCxcblx0XHRsYWJlbDogYWN0aW9uLm5hbWUsXG5cdH07XG59ICk7XG5cbmZ1bmN0aW9uIGdldEFjdGlvbkNhbGxiYWNrKCBlZGl0ZWRBY3Rpb24gKSB7XG5cdGZvciAoIGxldCBpID0gMDsgaSA8IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0aWYgKCB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpIF0uaWQgPT09IGVkaXRlZEFjdGlvbi50eXBlICYmIHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGkgXS5jYWxsYmFjayApIHtcblx0XHRcdHJldHVybiB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBpIF0uY2FsbGJhY2s7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBQbHVnaW5BY3Rpb25zKCB7IHNldEN1cnJlbnRBY3Rpb24gfSApIHtcblxuXHRjb25zdCBbIGFjdGlvbnMsIHNldEFjdGlvbnMgXSA9IHVzZUFjdGlvbnMoIHRydWUgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoIDAgPT09IGFjdGlvbnMubGVuZ3RoICkge1xuXHRcdFx0c2V0QWN0aW9ucyggZGVmYXVsdEFjdGlvbnMgKTtcblx0XHR9XG5cdH0sIFtdICk7XG5cblx0Y29uc3QgbW92ZUFjdGlvbiA9ICggZnJvbUluZGV4LCB0b0luZGV4ICkgPT4ge1xuXG5cdFx0dmFyIGl0ZW0gICAgICAgICA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBhY3Rpb25zWyBmcm9tSW5kZXggXSApICksXG5cdFx0XHRyZXBsYWNlZEl0ZW0gPSBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggYWN0aW9uc1sgdG9JbmRleCBdICkgKTtcblxuXHRcdGFjdGlvbnMuc3BsaWNlKCB0b0luZGV4LCAxLCBpdGVtICk7XG5cdFx0YWN0aW9ucy5zcGxpY2UoIGZyb21JbmRleCwgMSwgcmVwbGFjZWRJdGVtICk7XG5cblx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMgXSApO1xuXG5cdH07XG5cblx0Y29uc3QgZGVsZXRlQWN0aW9uID0gKCBpbmRleCApID0+IHtcblx0XHRhY3Rpb25zLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRzZXRBY3Rpb25zKCBbIC4uLmFjdGlvbnMgXSApO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZUFjdGlvbiA9ICggaWQsIGtleSwgdmFsdWUgKSA9PiB7XG5cdFx0c2V0QWN0aW9ucyggYWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcblx0XHRcdGlmICggYWN0aW9uLmlkID09PSBpZCApIHtcblx0XHRcdFx0dmFyIG5ld0FjdGlvbiA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBhY3Rpb24gKSApO1xuXHRcdFx0XHRuZXdBY3Rpb25bIGtleSBdID0gdmFsdWU7XG5cdFx0XHRcdHJldHVybiBuZXdBY3Rpb247XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xuXHRcdFx0fVxuXHRcdH0gKSApO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZUFjdGlvbk9iaiA9ICggaWQsIHByb3BzICkgPT4ge1xuXHRcdHNldEFjdGlvbnMoIGFjdGlvbnMgPT4gYWN0aW9ucy5tYXAoIGN1cnJlbnQgPT4ge1xuXHRcdFx0aWYgKCBpZCAhPT0gY3VycmVudC5pZCApIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5KU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggY3VycmVudCApICksXG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0fTtcblx0XHR9ICkgKVxuXHR9O1xuXG5cdGNvbnN0IFsgaXNFZGl0LCBzZXRFZGl0IF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcblx0Y29uc3QgWyBlZGl0ZWRBY3Rpb24sIHNldEVkaXRlZEFjdGlvbiBdID0gdXNlU3RhdGUoIHt9ICk7XG5cblx0Y29uc3QgWyBpc0VkaXRQcm9jZXNzQWN0aW9uLCBzZXRFZGl0UHJvY2Vzc0FjdGlvbiBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cdGNvbnN0IFsgcHJvY2Vzc2VkQWN0aW9uLCBzZXRQcm9jZXNzZWRBY3Rpb24gXSA9IHVzZVN0YXRlKCB7fSApO1xuXG5cdGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG5cdFx0c2V0RWRpdCggZmFsc2UgKTtcblx0XHRzZXRDdXJyZW50QWN0aW9uKCB7fSApO1xuXHR9O1xuXG5cdHZhciBDYWxsYmFjayA9IGdldEFjdGlvbkNhbGxiYWNrKCBlZGl0ZWRBY3Rpb24gKTtcblxuXHRjb25zdCB1cGRhdGVBY3Rpb25TZXR0aW5ncyA9IGFjdGlvbiA9PiB7XG5cdFx0dXBkYXRlQWN0aW9uT2JqKCBhY3Rpb24uaWQsIHtcblx0XHRcdHNldHRpbmdzOiBhY3Rpb24uc2V0dGluZ3MsXG5cdFx0fSApXG5cdFx0Y2xvc2VNb2RhbCgpO1xuXHR9XG5cblx0Y29uc3QgdXBkYXRlQWN0aW9uQ29uZGl0aW9uID0gaXRlbXMgPT4ge1xuXHRcdHVwZGF0ZUFjdGlvbiggcHJvY2Vzc2VkQWN0aW9uLmlkLCAnY29uZGl0aW9ucycsIGl0ZW1zICk7XG5cdFx0c2V0RWRpdFByb2Nlc3NBY3Rpb24oIGZhbHNlICk7XG5cdH1cblxuXHRjb25zdCB1cGRhdGVBY3Rpb25UeXBlID0gKCBpZCwgdHlwZSApID0+IHtcblx0XHRzZXRBY3Rpb25zKCBwcmV2ID0+IHByZXYubWFwKCBwcmV2SXRlbSA9PiB7XG5cdFx0XHRpZiAoIHByZXZJdGVtLmlkID09PSBpZCApIHtcblx0XHRcdFx0dmFyIG5ld0FjdGlvbiA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBwcmV2SXRlbSApICk7XG5cdFx0XHRcdG5ld0FjdGlvbi50eXBlID0gdHlwZTtcblx0XHRcdFx0bmV3QWN0aW9uLnNldHRpbmdzID0gbmV3QWN0aW9uLnNldHRpbmdzIHx8IHt9O1xuXHRcdFx0XHRuZXdBY3Rpb24uc2V0dGluZ3NbIHR5cGUgXSA9IG5ld0FjdGlvbi5zZXR0aW5nc1sgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHRcdHJldHVybiBuZXdBY3Rpb247XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gcHJldkl0ZW07XG5cdFx0XHR9XG5cdFx0fSApICk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0aWYgKCBlZGl0ZWRBY3Rpb24udHlwZSApIHtcblx0XHRcdHNldEVkaXQoIHRydWUgKTtcblx0XHR9XG5cdH0sIFsgZWRpdGVkQWN0aW9uIF0gKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRpZiAoIHByb2Nlc3NlZEFjdGlvbi50eXBlICkge1xuXHRcdFx0c2V0RWRpdFByb2Nlc3NBY3Rpb24oIHRydWUgKTtcblx0XHR9XG5cdH0sIFsgcHJvY2Vzc2VkQWN0aW9uIF0gKTtcblxuXHRjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkc0Jsb2NrcyggW10sICctLScgKTtcblxuXHRjb25zdCBnZXRNZXJnZWRTZXR0aW5ncyA9ICgpID0+IHtcblx0XHRyZXR1cm4gZWRpdGVkQWN0aW9uLnNldHRpbmdzWyBlZGl0ZWRBY3Rpb24udHlwZSBdIHx8IGVkaXRlZEFjdGlvbi5zZXR0aW5ncztcblx0fTtcblxuXHRyZXR1cm4gPD5cblx0XHR7IGFjdGlvbnMgJiYgYWN0aW9ucy5tYXAoICggYWN0aW9uLCBpbmRleCApID0+IHtcblx0XHRcdGNvbnN0IGhlYWRlciA9IGFwcGx5RmlsdGVycyggYGpldC5mYi5zZWN0aW9uLmFjdGlvbnMuaGVhZGVyLiR7IGFjdGlvbi50eXBlIH1gLCBudWxsLCBhY3Rpb24sIGFjdGlvbnMgKTtcblx0XHRcdHJldHVybiA8Q2FyZFxuXHRcdFx0XHRrZXk9eyBhY3Rpb24uaWQgfVxuXHRcdFx0XHRzaXplPXsgJ2V4dHJhU21hbGwnIH1cblx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1mb3JtLWFjdGlvbicgfVxuXHRcdFx0PlxuXHRcdFx0XHR7IGhlYWRlciAmJiA8Q2FyZEhlYWRlcj5cblx0XHRcdFx0XHR7IGhlYWRlciB9XG5cdFx0XHRcdDwvQ2FyZEhlYWRlcj4gfVxuXHRcdFx0XHQ8Q2FyZEJvZHk+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdHZhbHVlPXsgYWN0aW9uLnR5cGUgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IGFjdGlvblR5cGVzIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VHlwZSA9PiB1cGRhdGVBY3Rpb25UeXBlKCBhY3Rpb24uaWQsIG5ld1R5cGUgKSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7IGFwcGx5RmlsdGVycyggYGpldC5mYi5zZWN0aW9uLmFjdGlvbnMuYWZ0ZXJTZWxlY3QuJHsgYWN0aW9uLnR5cGUgfWAsIG51bGwsIGFjdGlvbiwgYWN0aW9ucyApIH1cblx0XHRcdFx0XHQ8RmxleCBzdHlsZT17IHsgbWFyZ2luVG9wOiAnMC41ZW0nIH0gfSBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ICEgZ2V0QWN0aW9uQ2FsbGJhY2soIGFjdGlvbiApIH1cblx0XHRcdFx0XHRcdFx0aWNvbj0nZWRpdCdcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyAnRWRpdCBBY3Rpb24nIH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0ZWRBY3Rpb24oICgpID0+ICgge1xuXHRcdFx0XHRcdFx0XHRcdFx0Li4uYWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdH0gKSApO1xuXHRcdFx0XHRcdFx0XHRcdHNldEN1cnJlbnRBY3Rpb24oIHsgLi4uYWN0aW9uLCBpbmRleCB9ICk7XG5cdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0aWNvbj0ncmFuZG9taXplJ1xuXHRcdFx0XHRcdFx0XHRsYWJlbD17ICdDb25kaXRpb25zJyB9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0UHJvY2Vzc2VkQWN0aW9uKCAoKSA9PiAoIHsgLi4uYWN0aW9uIH0gKSApO1xuXHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8RHJvcGRvd25NZW51XG5cdFx0XHRcdFx0XHRcdGljb249eyAnZWxsaXBzaXMnIH1cblx0XHRcdFx0XHRcdFx0bGFiZWw9eyAnRWRpdCwgbW92ZSBvciBkZWxldGUnIH1cblx0XHRcdFx0XHRcdFx0Y29udHJvbHM9eyBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdVcCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnYXJyb3ctdXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggMCAhPT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4IC0gMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdEb3duJyxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdhcnJvdy1kb3duJyxcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkOiBpbmRleCA9PT0gYWN0aW9ucy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggKCBhY3Rpb25zLmxlbmd0aCAtIDEgKSAhPT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW92ZUFjdGlvbiggaW5kZXgsIGluZGV4ICsgMSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdEZWxldGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ3RyYXNoJyxcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlQWN0aW9uKCBpbmRleCApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9GbGV4PlxuXG5cdFx0XHRcdDwvQ2FyZEJvZHk+XG5cdFx0XHQ8L0NhcmQ+XG5cdFx0fSApIH1cblx0XHQ8QnV0dG9uXG5cdFx0XHRpc1ByaW1hcnlcblx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XG5cdFx0XHRcdHNldEFjdGlvbnMoIFtcblx0XHRcdFx0XHQuLi5hY3Rpb25zLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC4uLkpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCBkZWZhdWx0QWN0aW9uICkgKSxcblx0XHRcdFx0XHRcdGlkOiBnZXRSYW5kb21JRCgpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0gKTtcblx0XHRcdH0gfVxuXHRcdD5cblx0XHRcdHsgJysgTmV3IEFjdGlvbicgfVxuXHRcdDwvQnV0dG9uPlxuXHRcdHsgaXNFZGl0ICYmIDxBY3Rpb25Nb2RhbFxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgY2xvc2VNb2RhbCB9XG5cdFx0XHR0aXRsZT17ICdFZGl0IEFjdGlvbicgfVxuXHRcdFx0b25VcGRhdGVDbGljaz17ICgpID0+IHtcblx0XHRcdFx0dXBkYXRlQWN0aW9uU2V0dGluZ3MoIGVkaXRlZEFjdGlvbiApXG5cdFx0XHR9IH1cblx0XHRcdG9uQ2FuY2VsQ2xpY2s9eyBjbG9zZU1vZGFsIH1cblx0XHQ+XG5cdFx0XHR7IENhbGxiYWNrICYmIDxDYWxsYmFja1xuXHRcdFx0XHRzZXR0aW5ncz17IGdldE1lcmdlZFNldHRpbmdzKCkgfVxuXHRcdFx0XHRhY3Rpb25JZD17IGVkaXRlZEFjdGlvbi5pZCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCBkYXRhICkgPT4ge1xuXHRcdFx0XHRcdHNldEVkaXRlZEFjdGlvbiggcHJldiA9PiAoIHtcblx0XHRcdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0XHQuLi5wcmV2LnNldHRpbmdzLFxuXHRcdFx0XHRcdFx0XHRbIGVkaXRlZEFjdGlvbi50eXBlIF06IGRhdGEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0gKSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdC8+IH1cblx0XHQ8L0FjdGlvbk1vZGFsPiB9XG5cdFx0eyBpc0VkaXRQcm9jZXNzQWN0aW9uICYmIDxBY3Rpb25Nb2RhbFxuXHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHRcdHRpdGxlPXsgJ0VkaXQgQWN0aW9uIENvbmRpdGlvbnMnIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gc2V0RWRpdFByb2Nlc3NBY3Rpb24oIGZhbHNlICkgfVxuXHRcdFx0b25DYW5jZWxDbGljaz17ICgpID0+IHNldEVkaXRQcm9jZXNzQWN0aW9uKCBmYWxzZSApIH1cblx0XHQ+XG5cdFx0XHR7ICggeyBhY3Rpb25DbGljaywgb25SZXF1ZXN0Q2xvc2UgfSApID0+IHtcblx0XHRcdFx0cmV0dXJuIDxSZXBlYXRlcldpdGhTdGF0ZVxuXHRcdFx0XHRcdGl0ZW1zPXsgcHJvY2Vzc2VkQWN0aW9uLmNvbmRpdGlvbnMgfVxuXHRcdFx0XHRcdG5ld0l0ZW09eyBuZXdJdGVtQ29uZGl0aW9uIH1cblx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XG5cdFx0XHRcdFx0aXNTYXZlQWN0aW9uPXsgYWN0aW9uQ2xpY2sgfVxuXHRcdFx0XHRcdG9uU2F2ZUl0ZW1zPXsgdXBkYXRlQWN0aW9uQ29uZGl0aW9uIH1cblx0XHRcdFx0XHRhZGROZXdCdXR0b25MYWJlbD17IF9fKCAnQWRkIE5ldyBDb25kaXRpb24nICkgfVxuXHRcdFx0XHRcdGhlbHA9eyB7XG5cdFx0XHRcdFx0XHRoZWxwVmlzaWJsZTogY29uZGl0aW9ucyA9PiBjb25kaXRpb25zLmxlbmd0aCA+IDEsXG5cdFx0XHRcdFx0XHRoZWxwU291cmNlOiB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuaGVscEZvclJlcGVhdGVycyxcblx0XHRcdFx0XHRcdGhlbHBLZXk6ICdjb25kaXRpb25hbF9hY3Rpb24nLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyAoIHsgY3VycmVudEl0ZW0sIGNoYW5nZUN1cnJlbnRJdGVtIH0gKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgZXhlY3V0ZUxhYmVsID0gX18oICdUbyBmdWxmaWxsIHRoaXMgY29uZGl0aW9uLCB0aGUgcmVzdWx0IG9mIHRoZSBjaGVjayBtdXN0IGJlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICc7XG5cdFx0XHRcdFx0XHRleGVjdXRlTGFiZWwgKz0gY3VycmVudEl0ZW0uZXhlY3V0ZSA/ICdUUlVFJyA6ICdGQUxTRSc7XG5cblx0XHRcdFx0XHRcdHJldHVybiA8PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgZXhlY3V0ZUxhYmVsIH1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgY3VycmVudEl0ZW0uZXhlY3V0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VDdXJyZW50SXRlbSggeyBleGVjdXRlOiBuZXdWYWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJPcGVyYXRvclwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0ub3BlcmF0b3IgfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBjb25kaXRpb25PcGVyYXRvcnMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgb3BlcmF0b3I6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZpZWxkXCJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5maWVsZCB9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZmllbGQ6IG5ld1ZhbHVlIH0gKTtcblx0XHRcdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEZpZWxkV2l0aFByZXNldFxuXHRcdFx0XHRcdFx0XHRcdGJhc2VDb250cm9sUHJvcHM9eyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogXCJWYWx1ZSB0byBDb21wYXJlXCIsXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PiA8RHluYW1pY1ByZXNldFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjdXJyZW50SXRlbS5kZWZhdWx0IH1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2F2ZUFjdGlvbj17IGFjdGlvbkNsaWNrIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZGVmYXVsdDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRleGNsdWRlU291cmNlcz17IFsgJ3F1ZXJ5X3ZhcicgXSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0XHRcdHRyaWdnZXJDbGFzc2VzPXsgWyAndHJpZ2dlcl9fdGV4dGFyZWEnIF0gfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2pldC1jb250cm9sLWNsZWFyIGpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3QnIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3VycmVudEl0ZW0uZGVmYXVsdCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlQ3VycmVudEl0ZW0oIHsgZGVmYXVsdDogbmV3VmFsdWUgfSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9GaWVsZFdpdGhQcmVzZXQ+XG5cdFx0XHRcdFx0XHQ8Lz47XG5cdFx0XHRcdFx0fSB9XG5cdFx0XHRcdDwvUmVwZWF0ZXJXaXRoU3RhdGU+O1xuXHRcdFx0fSB9XG5cdFx0PC9BY3Rpb25Nb2RhbD4gfVxuXHQ8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aERpc3BhdGNoKCBkaXNwYXRjaCA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNldEN1cnJlbnRBY3Rpb24oIGFjdGlvbiApIHtcblx0XHRcdFx0ZGlzcGF0Y2goICdqZXQtZm9ybXMvYWN0aW9ucycgKS5zZXRDdXJyZW50QWN0aW9uKCBhY3Rpb24gKVxuXHRcdFx0fSxcblx0XHR9O1xuXHR9ICksXG4pKCBQbHVnaW5BY3Rpb25zICk7IiwiaW1wb3J0IFBsdWdpbkFyZ3MgZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGJhc2UgPSB7XG5cdG5hbWU6ICdqZi1hcmdzLXBhbmVsJyxcblx0dGl0bGU6IF9fKCAnRm9ybSBTZXR0aW5ncycgKVxufTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHJlbmRlcjogUGx1Z2luQXJncyxcblx0aWNvbjogbnVsbFxufTtcblxuZXhwb3J0IHtcblx0YmFzZSxcblx0c2V0dGluZ3Ncbn07IiwiY29uc3Qgc3VibWl0VHlwZXMgPSBbXG5cdHsgdmFsdWU6ICcnLCBsYWJlbDogJy0tJyB9LFxuXHR7IHZhbHVlOiAncmVsb2FkJywgbGFiZWw6ICdQYWdlIFJlbG9hZCcgfSxcblx0eyB2YWx1ZTogJ2FqYXgnLCBsYWJlbDogJ0FKQVgnIH1cbl07XG5cbmNvbnN0IGZpZWxkc0xheW91dCA9IFtcblx0eyB2YWx1ZTogJycsIGxhYmVsOiAnLS0nIH0sXG5cdHsgdmFsdWU6ICdjb2x1bW4nLCBsYWJlbDogJ0NvbHVtbicgfSxcblx0eyB2YWx1ZTogJ3JvdycsIGxhYmVsOiAnUm93JyB9XG5dO1xuXG5leHBvcnQge1xuXHRzdWJtaXRUeXBlcyxcblx0ZmllbGRzTGF5b3V0XG59OyIsImltcG9ydCB7XG5cdGZpZWxkc0xheW91dCxcblx0c3VibWl0VHlwZXNcbn0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5jb25zdCB7IHVzZU1ldGFTdGF0ZSB9ID0gSmV0RkJIb29rcztcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbHVnaW5BcmdzKCkge1xuXG5cdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX2FyZ3MnICk7XG5cblx0cmV0dXJuIDw+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGxhYmVsPXsgJ0ZpZWxkcyBMYXlvdXQnIH1cblx0XHRcdHZhbHVlPXsgYXJncy5maWVsZHNfbGF5b3V0IH1cblx0XHRcdG9wdGlvbnM9eyBmaWVsZHNMYXlvdXQgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0ZmllbGRzX2xheW91dDogbmV3VmFsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdGxhYmVsPXsgJ1JlcXVpcmVkIE1hcmsnIH1cblx0XHRcdHZhbHVlPXsgYXJncy5yZXF1aXJlZF9tYXJrIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdHJlcXVpcmVkX21hcms6IG5ld1ZhbFxuXHRcdFx0XHR9ICkgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdGxhYmVsPXsgJ1N1Ym1pdCBUeXBlJyB9XG5cdFx0XHR2YWx1ZT17IGFyZ3Muc3VibWl0X3R5cGUgfVxuXHRcdFx0b3B0aW9ucz17IHN1Ym1pdFR5cGVzIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdHN1Ym1pdF90eXBlOiBuZXdWYWxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9IH1cblx0XHQvPlxuXG5cdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdGtleT17ICdlbmFibGVfcHJvZ3Jlc3MnIH1cblx0XHRcdGxhYmVsPXsgJ0VuYWJsZSBmb3JtIHBhZ2VzIHByb2dyZXNzJyB9XG5cdFx0XHRjaGVja2VkPXsgYXJncy5lbmFibGVfcHJvZ3Jlc3MgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRzZXRBcmdzKCBwcmV2ID0+ICgge1xuXHRcdFx0XHRcdC4uLnByZXYsXG5cdFx0XHRcdFx0ZW5hYmxlX3Byb2dyZXNzOiBCb29sZWFuKCBuZXdWYWwgKVxuXHRcdFx0XHR9ICkgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdDwvPlxufTsiLCJpbXBvcnQgUGx1Z2luQ2FwdGNoYSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgYmFzZSA9IHtcblx0bmFtZTogJ2pmLWNhcHRjaGEtcGFuZWwnLFxuXHR0aXRsZTogX18oICdDYXB0Y2hhIFNldHRpbmdzJyApXG59O1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0cmVuZGVyOiBQbHVnaW5DYXB0Y2hhLFxuXHRpY29uOiBudWxsXG59O1xuXG5leHBvcnQge1xuXHRiYXNlLFxuXHRzZXR0aW5nc1xufTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBsYWJlbHMgPSB7XG5cdGVuYWJsZWQ6IF9fKCAnRW5hYmxlIHJlQ0FQVENIQSB2MyBmb3JtIHZlcmlmaWNhdGlvbicgKSxcblx0a2V5OiBfXyggJ1NpdGUgS2V5OicgKSxcblx0c2VjcmV0OiBfXyggJ1NlY3JldCBLZXk6JyApLFxuXHR1c2VfZ2xvYmFsOiBfXyggJ1VzZSBHbG9iYWwgU2V0dGluZ3MnIClcbn07XG5cbmV4cG9ydCB7IGxhYmVscyB9OyIsImltcG9ydCB7IGxhYmVscyB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgdXNlTWV0YVN0YXRlIH0gPSBKZXRGQkhvb2tzO1xuY29uc3Qge1xuXHRUb2dnbGVDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzXG5cbmNvbnN0IHsgZ2xvYmFsVGFiIH0gPSBKZXRGQkFjdGlvbnM7XG5jb25zdCBjdXJyZW50VGFiID0gZ2xvYmFsVGFiKCB7IHNsdWc6ICdjYXB0Y2hhLXRhYicgfSApO1xuXG5mdW5jdGlvbiBQbHVnaW5DYXB0Y2hhKCkge1xuXG5cdGNvbnN0IFsgYXJncywgc2V0QXJncyBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX3JlY2FwdGNoYScgKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0a2V5PXsgJ2VuYWJsZWQnIH1cblx0XHRcdGxhYmVsPXsgbGFiZWxzLmVuYWJsZWQgfVxuXHRcdFx0Y2hlY2tlZD17IGFyZ3MuZW5hYmxlZCB9XG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiB7XG5cdFx0XHRcdHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHRlbmFibGVkOiBCb29sZWFuKCBuZXdWYWwgKVxuXHRcdFx0XHR9ICkgKTtcblx0XHRcdH0gfVxuXHRcdC8+XG5cdFx0eyBhcmdzLmVuYWJsZWQgJiYgPD5cblx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdGtleT17ICd1c2VfZ2xvYmFsJyB9XG5cdFx0XHRcdGxhYmVsPXsgbGFiZWxzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRjaGVja2VkPXsgYXJncy51c2VfZ2xvYmFsIH1cblx0XHRcdFx0b25DaGFuZ2U9eyB1c2VfZ2xvYmFsID0+IHtcblx0XHRcdFx0XHRzZXRBcmdzKCBwcmV2QXJncyA9PiAoIHtcblx0XHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdFx0dXNlX2dsb2JhbDogQm9vbGVhbiggdXNlX2dsb2JhbCApXG5cdFx0XHRcdFx0fSApICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0Lz5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRrZXk9eyAnc2l0ZV9rZXknIH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbHMua2V5IH1cblx0XHRcdFx0dmFsdWU9eyBhcmdzLnVzZV9nbG9iYWwgPyBjdXJyZW50VGFiLmtleSA6IGFyZ3Mua2V5IH1cblx0XHRcdFx0ZGlzYWJsZWQ9eyBhcmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHRrZXk6IG5ld1ZhbHVlXG5cdFx0XHRcdH0gKSApIH1cblx0XHRcdC8+XG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0a2V5PXsgJ3NlY3JldF9rZXknIH1cblx0XHRcdFx0bGFiZWw9eyBsYWJlbHMuc2VjcmV0IH1cblx0XHRcdFx0dmFsdWU9eyBhcmdzLnVzZV9nbG9iYWwgPyBjdXJyZW50VGFiLnNlY3JldCA6IGFyZ3Muc2VjcmV0IH1cblx0XHRcdFx0ZGlzYWJsZWQ9eyBhcmdzLnVzZV9nbG9iYWwgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldEFyZ3MoICggcHJldkFyZ3MgKSA9PiAoIHtcblx0XHRcdFx0XHQuLi5wcmV2QXJncyxcblx0XHRcdFx0XHRzZWNyZXQ6IG5ld1ZhbHVlXG5cdFx0XHRcdH0gKSApIH1cblx0XHRcdC8+XG5cdFx0XHQ8c3Bhbj57ICdSZWdpc3RlciByZUNBUFRDSEEgdjMga2V5cyAnIH1cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FkbWluL2NyZWF0ZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdDwvPiB9XG5cdDwvPlxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbkNhcHRjaGE7XG4iLCJpbXBvcnQgUGx1Z2luR2F0ZXdheXMgZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGJhc2UgPSB7XG5cdG5hbWU6ICdqZi1nYXRld2F5cy1wYW5lbCcsXG5cdHRpdGxlOiBfXyggJ0dhdGV3YXlzIFNldHRpbmdzJyApLFxuXHRjb25kaXRpb246IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5nYXRld2F5cy5hbGxvd2VkXG59O1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0cmVuZGVyOiBQbHVnaW5HYXRld2F5cyxcblx0aWNvbjogbnVsbFxufTtcblxuZXhwb3J0IHtcblx0YmFzZSxcblx0c2V0dGluZ3Ncbn07IiwiaW1wb3J0IEdhdGV3YXlzRWRpdG9yIGZyb20gXCIuLi8uLi9nYXRld2F5cy9nYXRld2F5cy1lZGl0b3JcIjtcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3Qge1xuXHRSYWRpb0NvbnRyb2wsXG5cdEJ1dHRvbixcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG5cdHVzZVNlbGVjdCxcblx0dXNlRGlzcGF0Y2hcbn0gPSB3cC5kYXRhO1xuXG5jb25zdCB7XG5cdHVzZVN0YXRlLFxuXHR1c2VFZmZlY3Rcbn0gPSB3cC5lbGVtZW50O1xuXG5jb25zdCB7IEFjdGlvbk1vZGFsIH0gPSBKZXRGQkNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIFBsdWdpbkdhdGV3YXlzKCkge1xuXHRjb25zdCBnYXRld2F5c0RhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XG5cblx0Y29uc3QgbWV0YSA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XG5cdFx0cmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xuXHR9ICk7XG5cblx0Y29uc3Qge1xuXHRcdGVkaXRQb3N0XG5cdH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdG9yJyApO1xuXG5cdGNvbnN0IGdhdGV3YXlzUHJvcHMgPSB7XG5cdFx0YWN0aXZlQWN0aW9uczogSlNPTi5wYXJzZSggbWV0YS5famZfYWN0aW9ucyApLFxuXHRcdGdhdGV3YXlzQXJnczogSlNPTi5wYXJzZSggbWV0YS5famZfZ2F0ZXdheXMgfHwgJ3t9JyApLFxuXHR9O1xuXG5cdGNvbnN0IFsgZ2F0ZXdheSwgc2V0R2F0ZXdheSBdID0gdXNlU3RhdGUoIGdhdGV3YXlzUHJvcHMuZ2F0ZXdheXNBcmdzLmdhdGV3YXkgKTtcblxuXHRjb25zdCBbIGlzRWRpdCwgc2V0RWRpdCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XG5cblx0Y29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRFZGl0KCBmYWxzZSApO1xuXHR9O1xuXG5cdGNvbnN0IGdldEdhdGV3YXlMYWJlbCA9ICggdHlwZSApID0+IHtcblx0XHRyZXR1cm4gKCBnYXRld2F5c0RhdGEubGlzdC5maW5kKCBlbCA9PiBlbC52YWx1ZSA9PT0gdHlwZSApLmxhYmVsICk7XG5cdH07XG5cblx0Y29uc3Qgc2F2ZUFyZ3MgPSBuZXdBcmdzID0+IHtcblx0XHRlZGl0UG9zdCgge1xuXHRcdFx0bWV0YTogKCB7XG5cdFx0XHRcdC4uLm1ldGEsXG5cdFx0XHRcdF9qZl9nYXRld2F5czogSlNPTi5zdHJpbmdpZnkoIG5ld0FyZ3MgKVxuXHRcdFx0fSApXG5cdFx0fSApO1xuXHR9O1xuXG5cdGNvbnN0IHNhdmVHYXRld2F5ID0gdHlwZSA9PiB7XG5cdFx0Z2F0ZXdheXNQcm9wcy5nYXRld2F5c0FyZ3MuZ2F0ZXdheSA9IHR5cGU7XG5cblx0XHRlZGl0UG9zdCgge1xuXHRcdFx0bWV0YTogKCB7XG5cdFx0XHRcdC4uLm1ldGEsXG5cdFx0XHRcdF9qZl9nYXRld2F5czogSlNPTi5zdHJpbmdpZnkoIGdhdGV3YXlzUHJvcHMuZ2F0ZXdheXNBcmdzIClcblx0XHRcdH0gKVxuXHRcdH0gKTtcblx0fVxuXG5cdGNvbnN0IGlzc2V0QWN0aW9uVHlwZSA9IHR5cGUgPT4ge1xuXHRcdHJldHVybiBCb29sZWFuKCBnYXRld2F5c1Byb3BzLmFjdGl2ZUFjdGlvbnMuZmluZCggYWN0aW9uID0+IHR5cGUgPT09IGFjdGlvbi50eXBlICkgKTtcblx0fTtcblxuXHRjb25zdCBpc0Rpc2FibGVkID0gISBpc3NldEFjdGlvblR5cGUoICdpbnNlcnRfcG9zdCcgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRzYXZlR2F0ZXdheSggZ2F0ZXdheSApO1xuXHR9LCBbIGdhdGV3YXkgXSApO1xuXG5cdHJldHVybiA8PlxuXHRcdDxSYWRpb0NvbnRyb2xcblx0XHRcdGtleT17ICdnYXRld2F5c19yYWRpb19jb250cm9sJyB9XG5cdFx0XHRzZWxlY3RlZD17IGdhdGV3YXkgfVxuXHRcdFx0b3B0aW9ucz17IFtcblx0XHRcdFx0eyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogJ25vbmUnIH0sXG5cdFx0XHRcdC4uLmdhdGV3YXlzRGF0YS5saXN0XG5cdFx0XHRdIH1cblx0XHRcdG9uQ2hhbmdlPXsgc2V0R2F0ZXdheSB9XG5cdFx0Lz5cblx0XHR7ICggZ2F0ZXdheSAmJiAnbm9uZScgIT09IGdhdGV3YXkgKSAmJiA8PlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0RWRpdCggdHJ1ZSApIH1cblx0XHRcdFx0aWNvbj17ICdhZG1pbi10b29scycgfVxuXHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRtYXJnaW46ICcxZW0gMCdcblx0XHRcdFx0fSB9XG5cdFx0XHRcdGlzU2Vjb25kYXJ5XG5cdFx0XHRcdGRpc2FibGVkPXsgaXNEaXNhYmxlZCB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgX18oICdFZGl0JyApIH1cblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0eyBpc0Rpc2FibGVkICYmIDxwPnsgX18oICdQbGVhc2UgYWRkIFxcYEluc2VydC9VcGRhdGUgUG9zdFxcYCBhY3Rpb24nLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PC9wPiB9XG5cdFx0PC8+IH1cblx0XHR7IGlzRWRpdCAmJiAoXG5cdFx0XHQ8QWN0aW9uTW9kYWxcblx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBjbG9zZU1vZGFsIH1cblx0XHRcdFx0dGl0bGU9eyBgRWRpdCAkeyBnZXRHYXRld2F5TGFiZWwoIGdhdGV3YXkgKSB9IFNldHRpbmdzYCB9XG5cdFx0XHQ+XG5cdFx0XHRcdHsgKCB7IGFjdGlvbkNsaWNrLCBvblJlcXVlc3RDbG9zZSB9ICkgPT4gPD5cblx0XHRcdFx0XHQ8R2F0ZXdheXNFZGl0b3Jcblx0XHRcdFx0XHRcdHsgLi4uZ2F0ZXdheXNQcm9wcyB9XG5cdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XG5cdFx0XHRcdFx0XHRvblVuTW91bnQ9eyBvblJlcXVlc3RDbG9zZSB9XG5cdFx0XHRcdFx0XHRvblNhdmVJdGVtcz17IHNhdmVBcmdzIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8Lz4gfVxuXHRcdFx0PC9BY3Rpb25Nb2RhbD4gKSB9XG5cdDwvPjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQbHVnaW5HYXRld2F5cztcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgYXJncyBmcm9tIFwiLi9hcmd1bWVudHNcIjtcbmltcG9ydCAqIGFzIGNhcHRjaGEgZnJvbSBcIi4vY2FwdGNoYVwiO1xuaW1wb3J0ICogYXMgZ2F0ZXdheXMgZnJvbSBcIi4vZ2F0ZXdheXNcIjtcbmltcG9ydCAqIGFzIHByZXNldCBmcm9tIFwiLi9wcmVzZXRcIjtcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5cbmNvbnN0IHtcblx0YXBwbHlGaWx0ZXJzXG59ID0gd3AuaG9va3M7XG5cbmNvbnN0IHtcblx0cmVnaXN0ZXJQbHVnaW5cbn0gPSB3cC5wbHVnaW5zO1xuXG5jb25zdCB7XG5cdFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXG59ID0gd3AuZWRpdFBvc3Q7XG5cbmNvbnN0IHdpdGhQbHVnaW5Qcm9wcyA9ICggc2V0dGluZ3MsIGJhc2UgKSA9PiB7XG5cdGNvbnN0IFBsdWdpblJlbmRlciA9IHNldHRpbmdzLnJlbmRlcjtcblx0cmV0dXJuICgpID0+IDxQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbCB7IC4uLmJhc2UgfSBrZXk9eyBgcGx1Z2luLXBhbmVsLSR7IGJhc2UubmFtZSB9YCB9PlxuXHRcdDxQbHVnaW5SZW5kZXIga2V5PXsgYHBsdWdpbi1yZW5kZXItJHsgYmFzZS5uYW1lIH1gIH0vPlxuXHQ8L1BsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsPjtcbn1cblxuY29uc3QgcmVnaXN0ZXJKZmJQbHVnaW4gPSBwbHVnaW4gPT4ge1xuXHRjb25zdCB7IGJhc2UsIHNldHRpbmdzIH0gPSBwbHVnaW47XG5cblx0c2V0dGluZ3MucmVuZGVyID0gd2l0aFBsdWdpblByb3BzKCBzZXR0aW5ncywgYmFzZSApO1xuXG5cdHJlZ2lzdGVyUGx1Z2luKCBiYXNlLm5hbWUsIHNldHRpbmdzICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlclBsdWdpbnMoKSB7XG5cdGNvbnN0IHNvcnRlZFBsdWdpbnMgPSBbXTtcblx0Y29uc3QgamZiUGx1Z2lucyA9IGFwcGx5RmlsdGVycyggJ2pldC5mYi5yZWdpc3Rlci5wbHVnaW5zJywgW1xuXHRcdGFyZ3MsXG5cdFx0Y2FwdGNoYSxcblx0XHRnYXRld2F5cyxcblx0XHRhY3Rpb25zLFxuXHRcdHByZXNldCxcblx0XHRtZXNzYWdlc1xuXHRdICk7XG5cblx0amZiUGx1Z2lucy5mb3JFYWNoKCBwbHVnaW4gPT4ge1xuXHRcdGNvbnN0IHsgYmFzZTogeyBuYW1lLCBjb25kaXRpb24gPSB0cnVlIH0gfSA9IHBsdWdpbjtcblxuXHRcdGlmICggISBjb25kaXRpb24gKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYmVmb3JlUGx1Z2luID0gYXBwbHlGaWx0ZXJzKCBgamV0LmZiLnJlZ2lzdGVyLnBsdWdpbi4keyBuYW1lIH0uYmVmb3JlYCwgW10gKTtcblx0XHRpZiAoIGJlZm9yZVBsdWdpbiApIHtcblx0XHRcdHNvcnRlZFBsdWdpbnMucHVzaCggLi4uYmVmb3JlUGx1Z2luICk7XG5cdFx0fVxuXHRcdHNvcnRlZFBsdWdpbnMucHVzaCggcGx1Z2luICk7XG5cblx0XHRjb25zdCBhZnRlclBsdWdpbiA9IGFwcGx5RmlsdGVycyggYGpldC5mYi5yZWdpc3Rlci5wbHVnaW4uJHsgbmFtZSB9LmFmdGVyYCwgW10gKTtcblx0XHRpZiAoIGFmdGVyUGx1Z2luICkge1xuXHRcdFx0c29ydGVkUGx1Z2lucy5wdXNoKCAuLi5hZnRlclBsdWdpbiApO1xuXHRcdH1cblx0fSApO1xuXG5cdHNvcnRlZFBsdWdpbnMuZm9yRWFjaCggcmVnaXN0ZXJKZmJQbHVnaW4gKTtcbn1cblxuIiwiaW1wb3J0IFBsdWdpbk1lc3NhZ2VzIGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCBiYXNlID0ge1xuXHRuYW1lOiAnamYtbWVzc2FnZXMtcGFuZWwnLFxuXHR0aXRsZTogX18oICdHZW5lcmFsIE1lc3NhZ2VzIFNldHRpbmdzJyApLFxufTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHJlbmRlcjogUGx1Z2luTWVzc2FnZXMsXG5cdGljb246IG51bGxcbn07XG5cbmV4cG9ydCB7XG5cdGJhc2UsXG5cdHNldHRpbmdzXG59OyIsImNvbnN0IHsgVG9vbHMgfSA9IEpldEZCQWN0aW9ucztcblxuY29uc3Qge1xuXHR1c2VTZWxlY3QsXG5cdHVzZURpc3BhdGNoXG59ID0gd3AuZGF0YTtcblxuY29uc3Qge1xuXHR1c2VTdGF0ZSxcblx0dXNlRWZmZWN0XG59ID0gd3AuZWxlbWVudDtcblxuY29uc3Qge1xuXHRUZXh0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIFBsdWdpbk1lc3NhZ2VzKCkge1xuXG5cdGNvbnN0IG1ldGEgPSB3cC5kYXRhLnNlbGVjdCggJ2NvcmUvZWRpdG9yJyApLmdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApIHx8IHt9O1xuXG5cdGNvbnN0IHtcblx0XHRlZGl0UG9zdFxuXHR9ID0gdXNlRGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblxuXHRjb25zdCBnZXREZWZhdWx0TWVzc2FnZXNWYWx1ZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7fTtcblx0XHRPYmplY3QuZW50cmllcyggSmV0Rm9ybUVkaXRvckRhdGEubWVzc2FnZXNEZWZhdWx0ICkuZm9yRWFjaCggKCBbIHR5cGUsIGRhdGEgXSApID0+IHtcblx0XHRcdGRlZmF1bHRzWyB0eXBlIF0gPSBkYXRhLnZhbHVlO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBkZWZhdWx0cztcblx0fVxuXG5cdGNvbnN0IFsgbWVzc2FnZXMsIHNldE1lc3NhZ2VzIF0gPSB1c2VTdGF0ZSggKCkgPT4ge1xuXHRcdGNvbnN0IG1ldGFNZXNzYWdlcyA9IEpTT04ucGFyc2UoIG1ldGEuX2pmX21lc3NhZ2VzIHx8ICd7fScgKTtcblx0XHRyZXR1cm4gVG9vbHMuaXNFbXB0eU9iamVjdCggbWV0YU1lc3NhZ2VzICkgPyBnZXREZWZhdWx0TWVzc2FnZXNWYWx1ZXMoKSA6IG1ldGFNZXNzYWdlcztcblx0fSApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGVkaXRQb3N0KCB7XG5cdFx0XHRtZXRhOiAoIHtcblx0XHRcdFx0Li4ubWV0YSxcblx0XHRcdFx0X2pmX21lc3NhZ2VzOiBKU09OLnN0cmluZ2lmeSggbWVzc2FnZXMgKVxuXHRcdFx0fSApXG5cdFx0fSApO1xuXG5cdH0gKTtcblxuXHRjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoIHR5cGUsIHZhbHVlICkgPT4ge1xuXHRcdHNldE1lc3NhZ2VzKCBwcmV2ID0+ICggeyAuLi5wcmV2LCBbIHR5cGUgXTogdmFsdWUgfSApICk7XG5cdH1cblxuXHRyZXR1cm4gPD5cblx0XHR7IE9iamVjdC5lbnRyaWVzKCBtZXNzYWdlcyApLm1hcCggKCBbIHR5cGUsIHRleHQgXSwgaWQgKSA9PiB7XG5cdFx0XHRyZXR1cm4gSmV0Rm9ybUVkaXRvckRhdGEubWVzc2FnZXNEZWZhdWx0WyB0eXBlIF0gJiYgPFRleHRDb250cm9sXG5cdFx0XHRcdGtleT17IHR5cGUgKyBpZCB9XG5cdFx0XHRcdGxhYmVsPXsgSmV0Rm9ybUVkaXRvckRhdGEubWVzc2FnZXNEZWZhdWx0WyB0eXBlIF0ubGFiZWwgfVxuXHRcdFx0XHR2YWx1ZT17IHRleHQgfVxuXHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IG9uQ2hhbmdlTWVzc2FnZSggdHlwZSwgbmV3VmFsdWUgKSB9XG5cdFx0XHQvPjtcblx0XHR9ICkgfVxuXHQ8Lz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsdWdpbk1lc3NhZ2VzOyIsImltcG9ydCBQbHVnaW5QcmVzZXQgZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IGJhc2UgPSB7XG5cdG5hbWU6ICdqZi1wcmVzZXQtcGFuZWwnLFxuXHR0aXRsZTogX18oICdQcmVzZXQgU2V0dGluZ3MnICksXG59O1xuXG5jb25zdCBzZXR0aW5ncyA9IHtcblx0cmVuZGVyOiBQbHVnaW5QcmVzZXQsXG5cdGljb246IG51bGxcbn07XG5cbmV4cG9ydCB7XG5cdGJhc2UsXG5cdHNldHRpbmdzXG59OyIsImltcG9ydCBHZW5lcmFsUHJlc2V0IGZyb20gXCJAY29tcG9uZW50cy9wcmVzZXRzL2dlbmVyYWwtcHJlc2V0XCI7XG5cbmNvbnN0IHsgdXNlTWV0YVN0YXRlIH0gPSBKZXRGQkhvb2tzO1xuY29uc3QgeyBnZXRBdmFpbGFibGVGaWVsZHMgfSA9IEpldEZCQWN0aW9ucztcblxuZnVuY3Rpb24gUGx1Z2luUHJlc2V0KCkge1xuXG5cdGNvbnN0IHtcblx0XHRUb2dnbGVDb250cm9sLFxuXHR9ID0gd3AuY29tcG9uZW50cztcblxuXHRjb25zdCBbIGFyZ3MsIHNldEFyZ3MgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9wcmVzZXQnICk7XG5cdGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRBdmFpbGFibGVGaWVsZHMoKTtcblxuXHRyZXR1cm4gPD5cblx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0a2V5PXsgJ2VuYWJsZV9wcmVzZXQnIH1cblx0XHRcdGxhYmVsPXsgJ0VuYWJsZScgfVxuXHRcdFx0Y2hlY2tlZD17IGFyZ3MuZW5hYmxlZCB9XG5cdFx0XHRoZWxwPXsgJ0NoZWNrIHRoaXMgdG8gZW5hYmxlIGdsb2JhbCBmb3JtIHByZXNldCcgfVxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWwgPT4ge1xuXHRcdFx0XHRzZXRBcmdzKCAoIHByZXZBcmdzICkgPT4gKCB7XG5cdFx0XHRcdFx0Li4ucHJldkFyZ3MsXG5cdFx0XHRcdFx0ZW5hYmxlZDogbmV3VmFsXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0Lz5cblx0XHR7IGFyZ3MuZW5hYmxlZCAmJiA8R2VuZXJhbFByZXNldFxuXHRcdFx0a2V5PXsgJ19qZl9wcmVzZXRfZ2VuZXJhbCcgfVxuXHRcdFx0dmFsdWU9eyBhcmdzIH1cblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsID0+IHtcblx0XHRcdFx0c2V0QXJncyggKCBwcmV2QXJncyApID0+ICgge1xuXHRcdFx0XHRcdC4uLnByZXZBcmdzLFxuXHRcdFx0XHRcdC4uLm5ld1ZhbCxcblx0XHRcdFx0XHRlbmFibGVkOiBwcmV2QXJncy5lbmFibGVkXG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fSB9XG5cdFx0XHRhdmFpbGFibGVGaWVsZHM9eyBmb3JtRmllbGRzIH1cblx0XHQvPiB9XG5cdDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luUHJlc2V0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9ibG9ja3MvZm9ybS1maWVsZHMnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9zZW5kLWVtYWlsJztcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvaW5zZXJ0LXBvc3QnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9yZWdpc3Rlci11c2VyJztcbmltcG9ydCAnLi9mb3JtLWFjdGlvbnMvdXBkYXRlLXVzZXInO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy91cGRhdGUtb3B0aW9ucyc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2NhbGwtaG9vayc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2NhbGwtd2ViaG9vayc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL3JlZGlyZWN0LXRvLXBhZ2UnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9tYWlsY2hpbXAnO1xuaW1wb3J0ICcuL2Zvcm0tYWN0aW9ucy9nZXRyZXNwb25zZSc7XG5pbXBvcnQgJy4vZm9ybS1hY3Rpb25zL2FjdGl2ZWNhbXBhaWduJztcbmltcG9ydCBSZWdpc3RlclBsdWdpbnMgZnJvbSBcIi4vcGx1Z2lucy9tYW5hZ2VyXCI7XG5pbXBvcnQgUmVnaXN0ZXJGb3JtRmllbGRzIGZyb20gXCIuL2Jsb2Nrcy9mb3JtLWZpZWxkc1wiO1xuXG5jb25zdCB7IGV2ZW50IH0gPSBKZXRGQkFjdGlvbnM7XG5cbmV2ZW50KCAnamV0LWZvcm0tYnVpbGRlci1pbml0aWFsaXplJyApKCk7XG5cbndpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMuZm9yRWFjaCggZnVuY3Rpb24gKCBhY3Rpb24sIGluZGV4ICkge1xuXHRpZiAoIHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnMgJiYgd2luZG93LmpldEZvcm1EZWZhdWx0QWN0aW9uc1sgYWN0aW9uLmlkIF0gKSB7XG5cdFx0d2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgaW5kZXggXS5jYWxsYmFjayA9IHdpbmRvdy5qZXRGb3JtRGVmYXVsdEFjdGlvbnNbIGFjdGlvbi5pZCBdO1xuXHR9XG59ICk7XG5cblJlZ2lzdGVyUGx1Z2lucygpO1xuUmVnaXN0ZXJGb3JtRmllbGRzKCk7XG5cbmV2ZW50KCAnamV0LWZvcm0tYnVpbGRlci1pbml0aWFsaXplZCcgKSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFjQTtBQURBO0FBSUE7QUFEQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVRBO0FBYUE7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQVBBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFLQTtBQUdBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUtBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUxBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFJQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFjQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBZEE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBekVBO0FBZEE7QUFvR0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTEE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUZBO0FBUkE7QUFQQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBL0JBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVZBO0FBYUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFRQTs7OztBQWhHQTtBQUNBO0FBa0dBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBV0E7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBSkE7QUFTQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU5BO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFXQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBV0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUlBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQU1BO0FBQUE7QUFLQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBcENBO0FBQ0E7QUE2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBZUE7QUFHQTtBQURBO0FBSUE7QUFEQTtBQVFBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQWNBO0FBQUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BKQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBREE7QUFNQTtBQURBO0FBSUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFYQTtBQWVBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUZBO0FBUUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFOQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUdBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVlBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU5BO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUlBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQWNBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQWNBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFZQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVdBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU5BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUZBO0FBWkE7QUFQQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBRUE7QUFEQTtBQUtBO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFEQTtBQUlBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFRQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBU0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBREE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBSUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBYUE7QUFEQTtBQUtBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFTQTtBQUFBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFOQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUFBO0FBRUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBREE7QUFLQTtBQUFBO0FBRUE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFFQTtBQURBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFLQTtBQURBO0FBS0E7QUFBQTtBQUVBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFKQTtBQVNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQU1BO0FBREE7QUFJQTtBQURBO0FBS0E7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUZBO0FBU0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFOQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFVQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQTFDQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFkQTtBQTBCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeklBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSkE7QUFXQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUN6SEE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFoQ0E7QUFDQTtBQWtDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBV0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVVBO0FBQ0E7QUF2Q0E7QUEwQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTkE7QUFDQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBSEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFJQTs7OztBQTNFQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFEQTtBQUdBO0FBQUE7QUF1QkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQW5CQTtBQUNBO0FBREE7QUFBQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVVBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBYUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFLQTtBQUNBOzs7O0FBcEpBO0FBQ0E7QUFzSkE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFPQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBVUE7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQVRBO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXRCQTtBQTBCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBekVBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVBBO0FBY0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFIQTtBQWVBO0FBQ0E7Ozs7QUEzTEE7QUFDQTtBQTZMQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQU9BO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBSEE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaExBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQWtCQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBdEJBO0FBQUE7QUFBQTtBQXdCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQWpDQTtBQUFBO0FBQUE7QUFtQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBSkE7QUFjQTtBQUNBO0FBdEZBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUtBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBTkE7QUFBQTtBQWNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFOQTtBQUFBO0FBY0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQU5BO0FBQUE7QUFlQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFYQTtBQWNBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFhQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNyUUE7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBRkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQVFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQVJBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBeEJBO0FBcUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFKQTtBQU9BO0FBVkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQU9BO0FBWEE7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBYUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFiQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBU0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BYQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVRBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFUQTtBQVlBO0FBQUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFUQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQVBBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBUEE7QUFlQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFVQTtBQUNBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFBQTtBQUtBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==