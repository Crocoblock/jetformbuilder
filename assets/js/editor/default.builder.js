(()=>{"use strict";const e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"jet-forms/form-block","title":"JetForm","keywords":["jetform","form","builder","crocoblock"],"textdomain":"jet-form-builder","supports":{"html":false,"anchor":true},"editorScript":"jet-form-builder/form","editorStyle":"jet-form-builder-others","category":"layout","icon":"<svg width=\\"36\\" height=\\"48\\" viewBox=\\"0 0 36 48\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M9 10C7.34315 10 6 11.3431 6 13C6 14.6569 7.34315 16 9 16H27C28.6569 16 30 14.6569 30 13C30 11.3431 28.6569 10 27 10H9ZM8 13C8 12.4477 8.44772 12 9 12H27C27.5523 12 28 12.4477 28 13C28 13.5523 27.5523 14 27 14H9C8.44772 14 8 13.5523 8 13Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M27 24C28.6569 24 30 25.3431 30 27C30 28.6569 28.6569 30 27 30H9C7.34315 30 6 28.6569 6 27C6 25.3431 7.34315 24 9 24H27ZM9 26C8.44772 26 8 26.4477 8 27C8 27.5523 8.44772 28 9 28H27C27.5523 28 28 27.5523 28 27C28 26.4477 27.5523 26 27 26H9Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M17 34H9C7.34315 34 6 35.3431 6 37C6 38.6569 7.34315 40 9 40H17C18.6569 40 20 38.6569 20 37C20 35.3431 18.6569 34 17 34ZM8 37C8 36.4477 8.44772 36 9 36H17C17.5523 36 18 36.4477 18 37C18 37.5523 17.5523 38 17 38H9C8.44772 38 8 37.5523 8 37Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M6.5 7C6.5 6.44772 6.94772 6 7.5 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H7.5C6.94772 8 6.5 7.55228 6.5 7Z\\" fill=\\"currentColor\\"/>\\n<path d=\\"M7.5 20C6.94772 20 6.5 20.4477 6.5 21C6.5 21.5523 6.94772 22 7.5 22H17C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H7.5Z\\" fill=\\"currentColor\\"/>\\n<path fill-rule=\\"evenodd\\" clip-rule=\\"evenodd\\" d=\\"M0 4C0 1.79086 1.79086 0 4 0H32C34.2091 0 36 1.79086 36 4V44C36 46.2091 34.2091 48 32 48H4C1.79086 48 0 46.2091 0 44V4ZM4 2H32C33.1046 2 34 2.89543 34 4V44C34 45.1046 33.1046 46 32 46H4C2.89543 46 2 45.1046 2 44V4C2 2.89543 2.89543 2 4 2Z\\" fill=\\"currentColor\\"/>\\n</svg>","attributes":{"form_id":{"type":"number","default":0},"submit_type":{"type":"string","default":""},"required_mark":{"type":"string","default":""},"fields_layout":{"type":"string","default":""},"enable_progress":{"type":"boolean","default":false},"fields_label_tag":{"type":"string","default":""},"anchor":{"type":"string","default":""},"isPreview":{"type":"boolean","default":false}}}'),C=wp.element.createElement("svg",{width:"298",height:"144",viewBox:"0 0 298 144",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("rect",{width:"298",height:"144",fill:"#E2E8F0"}),wp.element.createElement("rect",{x:"40",y:"13",width:"198",height:"118",rx:"4",fill:"white"}),wp.element.createElement("path",{d:"M63.5352 27.7812V42H61.6504V27.7812H63.5352ZM69.4922 34.1777V35.7207H63.125V34.1777H69.4922ZM70.459 27.7812V29.3242H63.125V27.7812H70.459ZM71.7383 36.834V36.6094C71.7383 35.8477 71.849 35.1413 72.0703 34.4902C72.2917 33.8327 72.6107 33.263 73.0273 32.7812C73.444 32.293 73.9486 31.9154 74.541 31.6484C75.1335 31.375 75.7975 31.2383 76.5332 31.2383C77.2754 31.2383 77.9427 31.375 78.5352 31.6484C79.1341 31.9154 79.6419 32.293 80.0586 32.7812C80.4818 33.263 80.804 33.8327 81.0254 34.4902C81.2467 35.1413 81.3574 35.8477 81.3574 36.6094V36.834C81.3574 37.5957 81.2467 38.3021 81.0254 38.9531C80.804 39.6042 80.4818 40.1738 80.0586 40.6621C79.6419 41.1439 79.1374 41.5215 78.5449 41.7949C77.959 42.0618 77.2949 42.1953 76.5527 42.1953C75.8105 42.1953 75.1432 42.0618 74.5508 41.7949C73.9583 41.5215 73.4505 41.1439 73.0273 40.6621C72.6107 40.1738 72.2917 39.6042 72.0703 38.9531C71.849 38.3021 71.7383 37.5957 71.7383 36.834ZM73.5449 36.6094V36.834C73.5449 37.3613 73.6068 37.8594 73.7305 38.3281C73.8542 38.7904 74.0397 39.2005 74.2871 39.5586C74.541 39.9167 74.8568 40.1999 75.2344 40.4082C75.612 40.61 76.0514 40.7109 76.5527 40.7109C77.0475 40.7109 77.4805 40.61 77.8516 40.4082C78.2292 40.1999 78.5417 39.9167 78.7891 39.5586C79.0365 39.2005 79.222 38.7904 79.3457 38.3281C79.4759 37.8594 79.541 37.3613 79.541 36.834V36.6094C79.541 36.0885 79.4759 35.597 79.3457 35.1348C79.222 34.666 79.0332 34.2526 78.7793 33.8945C78.5319 33.5299 78.2194 33.2435 77.8418 33.0352C77.4707 32.8268 77.0345 32.7227 76.5332 32.7227C76.0384 32.7227 75.6022 32.8268 75.2246 33.0352C74.8535 33.2435 74.541 33.5299 74.2871 33.8945C74.0397 34.2526 73.8542 34.666 73.7305 35.1348C73.6068 35.597 73.5449 36.0885 73.5449 36.6094ZM85.4297 33.0938V42H83.623V31.4336H85.3809L85.4297 33.0938ZM88.7305 31.375L88.7207 33.0547C88.571 33.0221 88.4277 33.0026 88.291 32.9961C88.1608 32.9831 88.0111 32.9766 87.8418 32.9766C87.4251 32.9766 87.0573 33.0417 86.7383 33.1719C86.4193 33.3021 86.1491 33.4844 85.9277 33.7188C85.7064 33.9531 85.5306 34.2331 85.4004 34.5586C85.2767 34.8776 85.1953 35.2292 85.1562 35.6133L84.6484 35.9062C84.6484 35.2682 84.7103 34.6693 84.834 34.1094C84.9642 33.5495 85.1628 33.0547 85.4297 32.625C85.6966 32.1888 86.0352 31.8503 86.4453 31.6094C86.862 31.362 87.3568 31.2383 87.9297 31.2383C88.0599 31.2383 88.2096 31.2546 88.3789 31.2871C88.5482 31.3132 88.6654 31.3424 88.7305 31.375ZM92.1973 33.5332V42H90.3809V31.4336H92.0996L92.1973 33.5332ZM91.8262 36.3164L90.9863 36.2871C90.9928 35.5645 91.0872 34.8971 91.2695 34.2852C91.4518 33.6667 91.722 33.1296 92.0801 32.6738C92.4382 32.2181 92.8841 31.8665 93.418 31.6191C93.9518 31.3652 94.5703 31.2383 95.2734 31.2383C95.7682 31.2383 96.224 31.3099 96.6406 31.4531C97.0573 31.5898 97.4186 31.8079 97.7246 32.1074C98.0306 32.4069 98.2682 32.791 98.4375 33.2598C98.6068 33.7285 98.6914 34.2949 98.6914 34.959V42H96.8848V35.0469C96.8848 34.4935 96.7904 34.0508 96.6016 33.7188C96.4193 33.3867 96.1589 33.1458 95.8203 32.9961C95.4818 32.8398 95.0846 32.7617 94.6289 32.7617C94.0951 32.7617 93.6491 32.8561 93.291 33.0449C92.9329 33.2337 92.6465 33.4941 92.4316 33.8262C92.2168 34.1582 92.0605 34.5391 91.9629 34.9688C91.8717 35.3919 91.8262 35.8411 91.8262 36.3164ZM98.6719 35.3203L97.4609 35.6914C97.4674 35.112 97.5618 34.5553 97.7441 34.0215C97.9329 33.4876 98.2031 33.0124 98.5547 32.5957C98.9128 32.179 99.3522 31.8503 99.873 31.6094C100.394 31.362 100.99 31.2383 101.66 31.2383C102.227 31.2383 102.728 31.3132 103.164 31.4629C103.607 31.6126 103.978 31.8438 104.277 32.1562C104.583 32.4622 104.814 32.8561 104.971 33.3379C105.127 33.8197 105.205 34.3926 105.205 35.0566V42H103.389V35.0371C103.389 34.4447 103.294 33.9857 103.105 33.6602C102.923 33.3281 102.663 33.097 102.324 32.9668C101.992 32.8301 101.595 32.7617 101.133 32.7617C100.736 32.7617 100.384 32.8301 100.078 32.9668C99.7721 33.1035 99.515 33.2923 99.3066 33.5332C99.0983 33.7676 98.9388 34.0378 98.8281 34.3438C98.724 34.6497 98.6719 34.9753 98.6719 35.3203Z",fill:"#0F172A"}),wp.element.createElement("rect",{x:"60.5",y:"49.5",width:"156",height:"29",rx:"3.5",fill:"white"}),wp.element.createElement("path",{d:"M74.4814 64.8755H72.0122V63.8789H74.4814C74.9596 63.8789 75.3468 63.8027 75.6431 63.6504C75.9393 63.498 76.1551 63.2865 76.2905 63.0156C76.4302 62.7448 76.5 62.4359 76.5 62.0889C76.5 61.7715 76.4302 61.4731 76.2905 61.1938C76.1551 60.9146 75.9393 60.6903 75.6431 60.521C75.3468 60.3475 74.9596 60.2607 74.4814 60.2607H72.2979V68.5H71.0728V59.2578H74.4814C75.1797 59.2578 75.77 59.3784 76.2524 59.6196C76.7349 59.8608 77.1009 60.1951 77.3506 60.6226C77.6003 61.0457 77.7251 61.5303 77.7251 62.0762C77.7251 62.6686 77.6003 63.1743 77.3506 63.5933C77.1009 64.0122 76.7349 64.3317 76.2524 64.5518C75.77 64.7676 75.1797 64.8755 74.4814 64.8755ZM80.3721 58.75V68.5H79.1914V58.75H80.3721ZM86.3071 67.3257V63.79C86.3071 63.5192 86.2521 63.2843 86.1421 63.0854C86.0363 62.8823 85.8755 62.7257 85.6597 62.6157C85.4438 62.5057 85.1772 62.4507 84.8599 62.4507C84.5636 62.4507 84.3034 62.5015 84.0791 62.603C83.859 62.7046 83.6855 62.8379 83.5586 63.0029C83.4359 63.168 83.3745 63.3457 83.3745 63.5361H82.2002C82.2002 63.2907 82.2637 63.0474 82.3906 62.8062C82.5176 62.5649 82.6995 62.347 82.9365 62.1523C83.1777 61.9535 83.4655 61.7969 83.7998 61.6826C84.1383 61.5641 84.515 61.5049 84.9297 61.5049C85.429 61.5049 85.8691 61.5895 86.25 61.7588C86.6351 61.9281 86.9355 62.1841 87.1514 62.5269C87.3714 62.8654 87.4814 63.2907 87.4814 63.8027V67.002C87.4814 67.2305 87.5005 67.4738 87.5386 67.7319C87.5809 67.9901 87.6423 68.2122 87.7227 68.3984V68.5H86.4976C86.4383 68.3646 86.3918 68.1847 86.3579 67.9604C86.3241 67.7319 86.3071 67.5203 86.3071 67.3257ZM86.5103 64.3359L86.5229 65.1611H85.3359C85.0016 65.1611 84.7033 65.1886 84.4409 65.2437C84.1785 65.2944 83.9585 65.3727 83.7808 65.4785C83.603 65.5843 83.4676 65.7176 83.3745 65.8784C83.2814 66.035 83.2349 66.2191 83.2349 66.4307C83.2349 66.6465 83.2835 66.8433 83.3809 67.021C83.4782 67.1987 83.6242 67.3405 83.8188 67.4463C84.0177 67.5479 84.2611 67.5986 84.5488 67.5986C84.9085 67.5986 85.2259 67.5225 85.501 67.3701C85.776 67.2178 85.994 67.0316 86.1548 66.8115C86.3198 66.5915 86.4087 66.3778 86.4214 66.1704L86.9229 66.7354C86.8932 66.9131 86.8128 67.1099 86.6816 67.3257C86.5505 67.5415 86.3748 67.7489 86.1548 67.9478C85.939 68.1424 85.6808 68.3053 85.3804 68.4365C85.0841 68.5635 84.7498 68.627 84.3774 68.627C83.9119 68.627 83.5036 68.536 83.1523 68.354C82.8053 68.172 82.5345 67.9287 82.3398 67.624C82.1494 67.3151 82.0542 66.9702 82.0542 66.5894C82.0542 66.2212 82.1261 65.8975 82.27 65.6182C82.4139 65.3346 82.6213 65.0998 82.8921 64.9136C83.1629 64.7231 83.4888 64.5793 83.8696 64.4819C84.2505 64.3846 84.6758 64.3359 85.1455 64.3359H86.5103ZM92.0771 67.6621C92.3564 67.6621 92.6146 67.605 92.8516 67.4907C93.0885 67.3765 93.2832 67.2199 93.4355 67.021C93.5879 66.8179 93.6746 66.5872 93.6958 66.3291H94.813C94.7918 66.7354 94.6543 67.1141 94.4004 67.4653C94.1507 67.8123 93.8228 68.0938 93.4165 68.3096C93.0103 68.5212 92.5638 68.627 92.0771 68.627C91.5609 68.627 91.1102 68.536 90.7251 68.354C90.3442 68.172 90.0269 67.9224 89.7729 67.605C89.5233 67.2876 89.335 66.9237 89.208 66.5132C89.0853 66.0985 89.0239 65.6605 89.0239 65.1992V64.9326C89.0239 64.4714 89.0853 64.0355 89.208 63.625C89.335 63.2103 89.5233 62.8442 89.7729 62.5269C90.0269 62.2095 90.3442 61.9598 90.7251 61.7778C91.1102 61.5959 91.5609 61.5049 92.0771 61.5049C92.6146 61.5049 93.0843 61.6149 93.4863 61.835C93.8883 62.0508 94.2036 62.347 94.4321 62.7236C94.6649 63.096 94.7918 63.5192 94.813 63.9932H93.6958C93.6746 63.7096 93.5942 63.4536 93.4546 63.2251C93.3192 62.9966 93.133 62.8146 92.896 62.6792C92.6632 62.5396 92.3903 62.4697 92.0771 62.4697C91.7174 62.4697 91.4149 62.5417 91.1694 62.6855C90.9282 62.8252 90.7357 63.0156 90.5918 63.2568C90.4521 63.4938 90.3506 63.7583 90.2871 64.0503C90.2279 64.3381 90.1982 64.6322 90.1982 64.9326V65.1992C90.1982 65.4997 90.2279 65.7959 90.2871 66.0879C90.3464 66.3799 90.4458 66.6444 90.5854 66.8813C90.7293 67.1183 90.9219 67.3088 91.1631 67.4526C91.4085 67.5923 91.7132 67.6621 92.0771 67.6621ZM98.9834 68.627C98.5052 68.627 98.0715 68.5465 97.6821 68.3857C97.297 68.2207 96.9648 67.9901 96.6855 67.6938C96.4105 67.3976 96.1989 67.0464 96.0508 66.6401C95.9027 66.2339 95.8286 65.7896 95.8286 65.3071V65.0405C95.8286 64.4819 95.9111 63.9847 96.0762 63.5488C96.2412 63.1087 96.4655 62.7363 96.749 62.4316C97.0326 62.127 97.3542 61.8963 97.7139 61.7397C98.0736 61.5832 98.446 61.5049 98.8311 61.5049C99.3219 61.5049 99.7451 61.5895 100.101 61.7588C100.46 61.9281 100.754 62.165 100.983 62.4697C101.211 62.7702 101.381 63.1257 101.491 63.5361C101.601 63.9424 101.656 64.3867 101.656 64.8691V65.396H96.5269V64.4375H100.481V64.3486C100.465 64.0439 100.401 63.7477 100.291 63.46C100.185 63.1722 100.016 62.9352 99.7832 62.749C99.5505 62.5628 99.2331 62.4697 98.8311 62.4697C98.5645 62.4697 98.319 62.5269 98.0947 62.6411C97.8704 62.7511 97.6779 62.9162 97.5171 63.1362C97.3563 63.3563 97.2314 63.625 97.1426 63.9424C97.0537 64.2598 97.0093 64.6258 97.0093 65.0405V65.3071C97.0093 65.633 97.0537 65.9398 97.1426 66.2275C97.2357 66.5111 97.369 66.7607 97.5425 66.9766C97.7202 67.1924 97.9339 67.3617 98.1836 67.4844C98.4375 67.6071 98.7253 67.6685 99.0469 67.6685C99.4616 67.6685 99.8128 67.5838 100.101 67.4146C100.388 67.2453 100.64 67.0189 100.856 66.7354L101.567 67.3003C101.419 67.5246 101.23 67.7383 101.002 67.9414C100.773 68.1445 100.492 68.3096 100.158 68.4365C99.8276 68.5635 99.4362 68.627 98.9834 68.627ZM104.201 58.75V68.5H103.027V58.75H104.201ZM103.922 64.8057L103.433 64.7866C103.437 64.3169 103.507 63.8831 103.643 63.4854C103.778 63.0833 103.968 62.7342 104.214 62.438C104.459 62.1418 104.751 61.9132 105.09 61.7524C105.433 61.5874 105.811 61.5049 106.226 61.5049C106.565 61.5049 106.869 61.5514 107.14 61.6445C107.411 61.7334 107.642 61.8773 107.832 62.0762C108.027 62.2751 108.175 62.5332 108.276 62.8506C108.378 63.1637 108.429 63.5467 108.429 63.9995V68.5H107.248V63.9868C107.248 63.6271 107.195 63.3394 107.089 63.1235C106.984 62.9035 106.829 62.7448 106.626 62.6475C106.423 62.5459 106.173 62.4951 105.877 62.4951C105.585 62.4951 105.318 62.5565 105.077 62.6792C104.84 62.8019 104.635 62.9712 104.461 63.187C104.292 63.4028 104.159 63.6504 104.062 63.9297C103.968 64.2048 103.922 64.4967 103.922 64.8057ZM109.876 65.1421V64.9961C109.876 64.501 109.948 64.0418 110.092 63.6187C110.236 63.1912 110.443 62.821 110.714 62.5078C110.985 62.1904 111.313 61.945 111.698 61.7715C112.083 61.5938 112.514 61.5049 112.993 61.5049C113.475 61.5049 113.909 61.5938 114.294 61.7715C114.683 61.945 115.013 62.1904 115.284 62.5078C115.559 62.821 115.769 63.1912 115.913 63.6187C116.056 64.0418 116.128 64.501 116.128 64.9961V65.1421C116.128 65.6372 116.056 66.0964 115.913 66.5195C115.769 66.9427 115.559 67.313 115.284 67.6304C115.013 67.9435 114.685 68.189 114.3 68.3667C113.919 68.5402 113.488 68.627 113.005 68.627C112.523 68.627 112.089 68.5402 111.704 68.3667C111.319 68.189 110.989 67.9435 110.714 67.6304C110.443 67.313 110.236 66.9427 110.092 66.5195C109.948 66.0964 109.876 65.6372 109.876 65.1421ZM111.05 64.9961V65.1421C111.05 65.4849 111.09 65.8086 111.171 66.1133C111.251 66.4137 111.372 66.6803 111.533 66.9131C111.698 67.1458 111.903 67.3299 112.148 67.4653C112.394 67.5965 112.68 67.6621 113.005 67.6621C113.327 67.6621 113.608 67.5965 113.85 67.4653C114.095 67.3299 114.298 67.1458 114.459 66.9131C114.62 66.6803 114.74 66.4137 114.821 66.1133C114.905 65.8086 114.948 65.4849 114.948 65.1421V64.9961C114.948 64.6576 114.905 64.3381 114.821 64.0376C114.74 63.7329 114.618 63.4642 114.453 63.2314C114.292 62.9945 114.089 62.8083 113.843 62.6729C113.602 62.5374 113.319 62.4697 112.993 62.4697C112.671 62.4697 112.388 62.5374 112.142 62.6729C111.901 62.8083 111.698 62.9945 111.533 63.2314C111.372 63.4642 111.251 63.7329 111.171 64.0376C111.09 64.3381 111.05 64.6576 111.05 64.9961ZM118.877 58.75V68.5H117.696V58.75H118.877ZM125.091 67.167V58.75H126.272V68.5H125.193L125.091 67.167ZM120.47 65.1421V65.0088C120.47 64.484 120.534 64.008 120.661 63.5806C120.792 63.1489 120.976 62.7786 121.213 62.4697C121.454 62.1608 121.74 61.9238 122.07 61.7588C122.404 61.5895 122.777 61.5049 123.187 61.5049C123.619 61.5049 123.995 61.5811 124.317 61.7334C124.643 61.8815 124.918 62.0994 125.142 62.3872C125.371 62.6707 125.55 63.0135 125.682 63.4155C125.813 63.8175 125.904 64.2725 125.955 64.7803V65.3643C125.908 65.8678 125.817 66.3206 125.682 66.7227C125.55 67.1247 125.371 67.4674 125.142 67.751C124.918 68.0345 124.643 68.2524 124.317 68.4048C123.991 68.5529 123.61 68.627 123.174 68.627C122.772 68.627 122.404 68.5402 122.07 68.3667C121.74 68.1932 121.454 67.9499 121.213 67.6367C120.976 67.3236 120.792 66.9554 120.661 66.5322C120.534 66.1048 120.47 65.6414 120.47 65.1421ZM121.651 65.0088V65.1421C121.651 65.4849 121.685 65.8065 121.752 66.1069C121.824 66.4074 121.934 66.6719 122.083 66.9004C122.231 67.1289 122.419 67.3088 122.647 67.4399C122.876 67.5669 123.149 67.6304 123.466 67.6304C123.856 67.6304 124.175 67.5479 124.425 67.3828C124.679 67.2178 124.882 66.9998 125.034 66.729C125.187 66.4582 125.305 66.1641 125.39 65.8467V64.3169C125.339 64.0841 125.265 63.8599 125.167 63.644C125.074 63.424 124.952 63.2293 124.799 63.0601C124.651 62.8866 124.467 62.749 124.247 62.6475C124.031 62.5459 123.775 62.4951 123.479 62.4951C123.157 62.4951 122.88 62.5628 122.647 62.6982C122.419 62.8294 122.231 63.0114 122.083 63.2441C121.934 63.4727 121.824 63.7393 121.752 64.0439C121.685 64.3444 121.651 64.666 121.651 65.0088ZM130.95 68.627C130.472 68.627 130.038 68.5465 129.649 68.3857C129.264 68.2207 128.932 67.9901 128.652 67.6938C128.377 67.3976 128.166 67.0464 128.018 66.6401C127.869 66.2339 127.795 65.7896 127.795 65.3071V65.0405C127.795 64.4819 127.878 63.9847 128.043 63.5488C128.208 63.1087 128.432 62.7363 128.716 62.4316C128.999 62.127 129.321 61.8963 129.681 61.7397C130.04 61.5832 130.413 61.5049 130.798 61.5049C131.289 61.5049 131.712 61.5895 132.067 61.7588C132.427 61.9281 132.721 62.165 132.95 62.4697C133.178 62.7702 133.347 63.1257 133.458 63.5361C133.568 63.9424 133.623 64.3867 133.623 64.8691V65.396H128.494V64.4375H132.448V64.3486C132.431 64.0439 132.368 63.7477 132.258 63.46C132.152 63.1722 131.983 62.9352 131.75 62.749C131.517 62.5628 131.2 62.4697 130.798 62.4697C130.531 62.4697 130.286 62.5269 130.062 62.6411C129.837 62.7511 129.645 62.9162 129.484 63.1362C129.323 63.3563 129.198 63.625 129.109 63.9424C129.021 64.2598 128.976 64.6258 128.976 65.0405V65.3071C128.976 65.633 129.021 65.9398 129.109 66.2275C129.202 66.5111 129.336 66.7607 129.509 66.9766C129.687 67.1924 129.901 67.3617 130.15 67.4844C130.404 67.6071 130.692 67.6685 131.014 67.6685C131.428 67.6685 131.78 67.5838 132.067 67.4146C132.355 67.2453 132.607 67.0189 132.823 66.7354L133.534 67.3003C133.386 67.5246 133.197 67.7383 132.969 67.9414C132.74 68.1445 132.459 68.3096 132.125 68.4365C131.794 68.5635 131.403 68.627 130.95 68.627ZM136.168 62.7109V68.5H134.994V61.6318H136.136L136.168 62.7109ZM138.313 61.5938L138.307 62.6855C138.21 62.6644 138.117 62.6517 138.028 62.6475C137.943 62.639 137.846 62.6348 137.736 62.6348C137.465 62.6348 137.226 62.6771 137.019 62.7617C136.811 62.8464 136.636 62.9648 136.492 63.1172C136.348 63.2695 136.234 63.4515 136.149 63.6631C136.069 63.8704 136.016 64.099 135.99 64.3486L135.66 64.5391C135.66 64.1243 135.7 63.735 135.781 63.3711C135.865 63.0072 135.994 62.6855 136.168 62.4062C136.341 62.1227 136.562 61.9027 136.828 61.7461C137.099 61.5853 137.421 61.5049 137.793 61.5049C137.878 61.5049 137.975 61.5155 138.085 61.5366C138.195 61.5535 138.271 61.5726 138.313 61.5938ZM145.499 61.6318V62.5332H141.786V61.6318H145.499ZM143.042 59.9624H144.217V66.7988C144.217 67.0316 144.253 67.2072 144.325 67.3257C144.397 67.4442 144.49 67.5225 144.604 67.5605C144.718 67.5986 144.841 67.6177 144.972 67.6177C145.069 67.6177 145.171 67.6092 145.277 67.5923C145.387 67.5711 145.469 67.5542 145.524 67.5415L145.531 68.5C145.438 68.5296 145.315 68.5571 145.163 68.5825C145.014 68.6121 144.835 68.627 144.623 68.627C144.335 68.627 144.071 68.5698 143.83 68.4556C143.588 68.3413 143.396 68.1509 143.252 67.8843C143.112 67.6134 143.042 67.2495 143.042 66.7925V59.9624ZM149.727 68.627C149.248 68.627 148.815 68.5465 148.425 68.3857C148.04 68.2207 147.708 67.9901 147.429 67.6938C147.154 67.3976 146.942 67.0464 146.794 66.6401C146.646 66.2339 146.572 65.7896 146.572 65.3071V65.0405C146.572 64.4819 146.654 63.9847 146.819 63.5488C146.984 63.1087 147.209 62.7363 147.492 62.4316C147.776 62.127 148.097 61.8963 148.457 61.7397C148.817 61.5832 149.189 61.5049 149.574 61.5049C150.065 61.5049 150.488 61.5895 150.844 61.7588C151.203 61.9281 151.498 62.165 151.726 62.4697C151.955 62.7702 152.124 63.1257 152.234 63.5361C152.344 63.9424 152.399 64.3867 152.399 64.8691V65.396H147.27V64.4375H151.225V64.3486C151.208 64.0439 151.144 63.7477 151.034 63.46C150.928 63.1722 150.759 62.9352 150.526 62.749C150.294 62.5628 149.976 62.4697 149.574 62.4697C149.308 62.4697 149.062 62.5269 148.838 62.6411C148.614 62.7511 148.421 62.9162 148.26 63.1362C148.099 63.3563 147.975 63.625 147.886 63.9424C147.797 64.2598 147.752 64.6258 147.752 65.0405V65.3071C147.752 65.633 147.797 65.9398 147.886 66.2275C147.979 66.5111 148.112 66.7607 148.286 66.9766C148.463 67.1924 148.677 67.3617 148.927 67.4844C149.181 67.6071 149.468 67.6685 149.79 67.6685C150.205 67.6685 150.556 67.5838 150.844 67.4146C151.132 67.2453 151.383 67.0189 151.599 66.7354L152.31 67.3003C152.162 67.5246 151.974 67.7383 151.745 67.9414C151.517 68.1445 151.235 68.3096 150.901 68.4365C150.571 68.5635 150.179 68.627 149.727 68.627ZM154.563 61.6318L156.068 64.1328L157.591 61.6318H158.969L156.722 65.0215L159.039 68.5H157.68L156.093 65.9229L154.506 68.5H153.142L155.452 65.0215L153.211 61.6318H154.563ZM163.095 61.6318V62.5332H159.381V61.6318H163.095ZM160.638 59.9624H161.812V66.7988C161.812 67.0316 161.848 67.2072 161.92 67.3257C161.992 67.4442 162.085 67.5225 162.2 67.5605C162.314 67.5986 162.437 67.6177 162.568 67.6177C162.665 67.6177 162.767 67.6092 162.873 67.5923C162.983 67.5711 163.065 67.5542 163.12 67.5415L163.126 68.5C163.033 68.5296 162.911 68.5571 162.758 68.5825C162.61 68.6121 162.43 68.627 162.219 68.627C161.931 68.627 161.667 68.5698 161.425 68.4556C161.184 68.3413 160.992 68.1509 160.848 67.8843C160.708 67.6134 160.638 67.2495 160.638 66.7925V59.9624Z",fill:"#94A3B8"}),wp.element.createElement("rect",{x:"60.5",y:"49.5",width:"156",height:"29",rx:"3.5",stroke:"#E2E8F0"}),wp.element.createElement("rect",{x:"60",y:"88",width:"160",height:"32",rx:"16",fill:"#4272F9"}),wp.element.createElement("path",{d:"M121.622 108.5V99.4H125.054C125.933 99.4 126.585 99.5885 127.01 99.9655C127.439 100.338 127.654 100.882 127.654 101.597C127.654 102.13 127.532 102.576 127.29 102.936C127.051 103.291 126.692 103.551 126.211 103.716V103.404C126.939 103.56 127.482 103.846 127.842 104.262C128.202 104.678 128.382 105.228 128.382 105.913C128.382 106.732 128.117 107.369 127.589 107.824C127.06 108.275 126.336 108.5 125.418 108.5H121.622ZM123.286 107.018H125.171C125.626 107.018 125.987 106.925 126.256 106.738C126.529 106.552 126.666 106.216 126.666 105.731C126.666 105.237 126.523 104.901 126.237 104.723C125.951 104.546 125.595 104.457 125.171 104.457H123.286V107.018ZM123.286 102.975H124.807C125.21 102.975 125.511 102.893 125.71 102.728C125.914 102.563 126.016 102.299 126.016 101.935C126.016 101.558 125.914 101.289 125.71 101.129C125.511 100.964 125.21 100.882 124.807 100.882H123.286V102.975ZM132.127 108.63C131.451 108.63 130.912 108.496 130.509 108.227C130.106 107.958 129.815 107.59 129.638 107.122C129.46 106.65 129.371 106.108 129.371 105.497V102H130.983V105.497C130.983 106.099 131.083 106.548 131.282 106.842C131.486 107.133 131.815 107.278 132.27 107.278C132.634 107.278 132.935 107.191 133.174 107.018C133.416 106.845 133.618 106.602 133.778 106.29L133.492 107.109V102H135.104V108.5H133.596L133.518 107.369L133.869 107.824C133.713 108.023 133.466 108.207 133.128 108.376C132.794 108.546 132.461 108.63 132.127 108.63ZM138.728 108.63C138.321 108.63 137.989 108.548 137.733 108.383C137.478 108.214 137.289 107.999 137.168 107.739C137.047 107.479 136.986 107.209 136.986 106.927V103.326H136.063L136.206 102H136.986V100.57L138.598 100.401V102H140.028V103.326H138.598V106.264C138.598 106.593 138.617 106.832 138.656 106.979C138.695 107.122 138.784 107.213 138.923 107.252C139.062 107.287 139.283 107.304 139.586 107.304H140.028L139.885 108.63H138.728ZM143.197 108.63C142.789 108.63 142.458 108.548 142.202 108.383C141.947 108.214 141.758 107.999 141.637 107.739C141.515 107.479 141.455 107.209 141.455 106.927V103.326H140.532L140.675 102H141.455V100.57L143.067 100.401V102H144.497V103.326H143.067V106.264C143.067 106.593 143.086 106.832 143.125 106.979C143.164 107.122 143.253 107.213 143.392 107.252C143.53 107.287 143.751 107.304 144.055 107.304H144.497L144.354 108.63H143.197ZM148.497 108.63C147.791 108.63 147.189 108.476 146.69 108.168C146.192 107.861 145.811 107.451 145.546 106.94C145.286 106.429 145.156 105.87 145.156 105.263C145.156 104.652 145.286 104.089 145.546 103.573C145.811 103.057 146.192 102.646 146.69 102.338C147.189 102.026 147.791 101.87 148.497 101.87C149.204 101.87 149.806 102.026 150.304 102.338C150.803 102.646 151.182 103.057 151.442 103.573C151.706 104.089 151.838 104.652 151.838 105.263C151.838 105.87 151.706 106.429 151.442 106.94C151.182 107.451 150.803 107.861 150.304 108.168C149.806 108.476 149.204 108.63 148.497 108.63ZM148.497 107.304C149.039 107.304 149.455 107.115 149.745 106.738C150.04 106.357 150.187 105.865 150.187 105.263C150.187 104.652 150.04 104.156 149.745 103.774C149.455 103.389 149.039 103.196 148.497 103.196C147.96 103.196 147.544 103.389 147.249 103.774C146.955 104.156 146.807 104.652 146.807 105.263C146.807 105.865 146.955 106.357 147.249 106.738C147.544 107.115 147.96 107.304 148.497 107.304ZM152.961 108.5V102H154.469L154.534 103.209L154.157 102.715C154.404 102.507 154.698 102.318 155.041 102.149C155.383 101.98 155.782 101.896 156.237 101.896C157.069 101.896 157.686 102.173 158.089 102.728C158.492 103.278 158.694 103.993 158.694 104.873V108.5H157.082V105.003C157.082 104.396 156.98 103.948 156.776 103.657C156.577 103.367 156.25 103.222 155.795 103.222C155.426 103.222 155.125 103.313 154.891 103.495C154.657 103.673 154.451 103.911 154.274 104.21L154.573 103.417V108.5H152.961Z",fill:"white"}));function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,C){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);C&&(r=r.filter((function(C){return Object.getOwnPropertyDescriptor(e,C).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var C=1;C<arguments.length;C++){var t=null!=arguments[C]?arguments[C]:{};C%2?r(Object(t),!0).forEach((function(C){n(e,C,t[C])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(C){Object.defineProperty(e,C,Object.getOwnPropertyDescriptor(t,C))}))}return e}function n(e,C,r){return(C=function(e){var C=function(e,C){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,"string");if("object"!==t(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(C)?C:String(C)}(C))in e?Object.defineProperty(e,C,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[C]=r,e}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var C=1;C<arguments.length;C++){var t=arguments[C];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var i=wp.blocks.registerBlockType,a=wp.i18n.__,u=wp.blockEditor?wp.blockEditor:wp.editor,c=u.InspectorControls,s=u.useBlockProps,p=wp.components,m=p.PanelBody,f=p.SelectControl,d=p.TextControl,H=p.ToggleControl,V=wp.serverSideRender,b=function(C){return"".concat(e.name,"/").concat(C)};i(e.name,l(l({},e),{},{title:a("JetForm","jet-form-builder"),description:a("Display the created form on any WordPress page with the JetForm widget or block. Set the fields layout, required mark, and submit type.","jet-form-builder"),icon:wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.icon}}),attributes:e.attributes,edit:function(t){var r=t.attributes,l=t.setAttributes,n=t.isSelected,i=window.JetFormData,u=s();return r.isPreview?wp.element.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},C):[n&&wp.element.createElement(c,{key:b("InspectorControls")},wp.element.createElement(m,{title:a("Form Settings","jet-form-builder"),key:b("PanelBody")},wp.element.createElement(f,{key:"form_id",label:a("Choose Form","jet-form-builder"),labelposition:"top",value:r.form_id,onChange:function(e){l({form_id:Number(e)})},options:i.forms_list}),Boolean(r.form_id)&&wp.element.createElement(React.Fragment,null,wp.element.createElement(f,{label:a("Fields Layout","jet-form-builder"),value:r.fields_layout,options:i.fields_layout,onChange:function(e){return l({fields_layout:e})}}),wp.element.createElement(d,{label:a("Required Mark","jet-form-builder"),value:r.required_mark,onChange:function(e){return l({required_mark:e})}}),wp.element.createElement(f,{label:a("Fields label HTML tag","jet-form-builder"),value:r.fields_label_tag,options:i.fields_label_tag,onChange:function(e){return l({fields_label_tag:e})}}),wp.element.createElement(f,{label:a("Submit Type","jet-form-builder"),value:r.submit_type,options:i.submit_type,onChange:function(e){return l({submit_type:e})}}),wp.element.createElement(H,{key:"enable_progress",label:a("Enable form pages progress","jet-form-builder"),checked:r.enable_progress,onChange:function(e){l({enable_progress:Boolean(e)})}})))),wp.element.createElement("div",o({key:b("viewBlock")},u),wp.element.createElement(V,{block:e.name,attributes:r,httpMethod:"POST"}))]},example:{attributes:{isPreview:!0}}}))})();