import { YnaG3SystemAdapter, getToken, setToken, useMultiTags } from 'viy-menu';
import { ref } from 'vue';
import axios from 'axios';
import pluginsI18n from '@ymc-group/plugins-i18n';
import pluginsUserauthorize from '@ymc-group/plugins-userauthorize';
import { isEqual } from 'lodash-es';
import { request } from '@/utils/request';
import logoImage from '@/assets/A1DMSLogo.png';
import i18n from '@/i18n';
const t = i18n.global.t;
import CustomLoginInformation from '@/components/CustomLoginInformation.vue';
import CustomResetPoint from '@/components/CustomResetPoint.vue';

const { login, logout, getUserInfo, getMenusByEnv } = new YnaG3SystemAdapter();

// escort 预览假数据
// const dummyAuth = import.meta.env.MODE === 'preview'?
//     {
//         userCode: 'dummy',
//         userId: 'userID-ADMIN',
//         personId: 202405160001,
//         personCode: 'user',
//         personName: 'user',
//         companyCode: 'YT35',
//         dealerCode: 'YT35',
//         siteId: 'YT35',
//         name: 'DUMMY',
//         doFlag: 'Y',
//         loginDateTime: '20240612121',
//         lastLoginDateTime: '2024061212132',
//         defaultPointId: 568,
//         defaultPointCd: 'YT35A',
//         defaultPointNm: 'Yamaha Town Nha Trang - DO 10'
//     }
//     : {};

// const { login, getUserInfo, getMenusByEnv } = new YnaG3SystemAdapter( { dummyAuth } );

// let router;
// const notices = ref([]);
// let webSocket;

// 轮询请求例子
// async function getMessageDataFun() {
//   const response = await request('/common/homePage/statusBarMessageData.json', {
//     method: 'post',
//     headers: {
//       'X-Auth-Token': getToken()?.accessToken,
//     },
//     showProgress: false,
//     data: {},
//   });
//   notices.value = response.data;
// }
// // request this interface every 15s
// const { pause, resume } = useTimeoutPoll(getMessageDataFun, 15000);

// async function getMessageDataFun() {
//   const response = await request('/common/homePage/statusBarMessageData.json', {
//     method: 'post',
//     headers: {
//       'X-Auth-Token': getToken()?.accessToken,
//     },
//     showProgress: false,
//     data: {},
//   });
//   notices.value = response.data;
// }

// const connectWebSocket = (userCd, siteId, port) => {
//   const gateway = (document.location.protocol === 'https:') ? 'wss://' : 'ws://';
//   webSocket = new WebSocket(`${`${gateway}${port}`}/a1stream/api/websocket/common/${siteId}::${userCd}`, ['x-auth-token', getToken()?.accessToken]);

//   webSocket.onopen = function (event) {
//     console.log('websocket open');

//     // 心跳检测，保持长时间连接
//     // setInterval(() => {
//     //   if (webSocket.readyState === WebSocket.OPEN) {
//     //     webSocket.send('');
//     //   }
//     // }, 30000);
//   };

//   webSocket.onmessage = function (event) {
//     const jsonData = JSON.parse(event.data);
//     const contentJsonData = JSON.parse(jsonData.content);
//     if (isEqual(contentJsonData.messageType, 'HOMEPAGE')) {
//       notices.value = contentJsonData.message;
//     }
//   };

//   webSocket.onerror = function (event) {
//     console.log('websocket error', event);
//   };

//   webSocket.onclose = function (event) {
//     console.log('websocket close', event);
//   };
// };

// async function isLoggedIn() {
//   const resp = await axios.post(`${baseURL}/user/info`, {}, {
//     headers: {
//       'X-Auth-Token': getToken()?.accessToken,
//     },
//   }).catch(() => ({ status: 401 }));
//   // let the useTimeoutPoll move, the frist api, if status = 401, don`t post.
//   if (resp.status === 200) {
//     // resume();
//     if (resp.data.data.userCode && resp.data.data.companyCode) {
//       // frist get message data，then connect websocket
//       getMessageDataFun();
//       connectWebSocket(resp.data.data.userCode, resp.data.data.companyCode, resp.data.data.port);
//     }
//     // reset lastLoginTime
//     await request('/common/homePage/logInChangeLastLoginTime.json', {
//       method: 'post',
//       headers: {
//         'X-Auth-Token': getToken()?.accessToken,
//       },
//       showProgress: false,
//       data: {},
//     });
//   }
//   return resp.status === 200;
// }

// async function idpLogin(idp, url) {
//   localStorage.setItem('idp', idp);

//   const { data: redirectUrl, headers } = await axios.get(url);
//   setToken({
//     accessToken: headers.get('X-Auth-Token'),
//   });

//   window.location.href = redirectUrl;
//   return false;
// }

// async function getMenuDataFun() {
//   const response = await axios.post(`${baseURL}/common/homePage/menuList.json`, {}, {
//     headers: {
//       'X-Auth-Token': getToken()?.accessToken,
//     },
//   });
//   return response.data.data;
// }

// const noticeItemClick = (item) => {
//   useMultiTags().openTag({
//     name: 'msg0201_01',
//   });
//   router.push({ name: 'msg0201_01' });
// };

/**
 * Options of VIY-Menu
 * @type {import("viy-menu").MenuOptions}
 * const loginEntry = await oAuth2Entry.json();
 */
// const menuOptions = {
//   i18n,
//   async beforeInit() {
//     const queryString = window.location.search;
//     const path = window.location.pathname;
//     const isValid = await isLoggedIn();
//     if (path.endsWith('/auth-redirect')) {
//       const idp = localStorage.getItem('idp');
//       const resp = await axios.get(`/login/oauth2/code/${idp}${queryString}`, {
//         baseURL,
//         withCredentials: true,
//         headers: {
//           'X-Auth-Token': getToken()?.accessToken,
//         },
//       });

//       setToken({
//         accessToken: resp.headers.get('X-Auth-Token'),
//       });
//       window.location.href = '/';
//       // stop page render
//       return false;
//     }
//     if (!isValid) {
//       const oAuth2Entry = await axios.get('/public/loginentry', { baseURL });
//       const idp = oAuth2Entry.data[0].idp;
//       const url = oAuth2Entry.data[0].solid_url;
//       await idpLogin(idp, url);
//       return false;
//     }
//     return ({ router: r }) => {
//       router = r;
//     };
//   },
//   logout: async () => {
//     // pause();
//     const idp = localStorage.getItem('idp');
//     const { data: redirectUrl, headers } = await axios.get(`/oauth2/solid/logout/${idp}`, {
//       baseURL,
//       withCredentials: true,
//       headers: {
//         'X-Auth-Token': getToken()?.accessToken,
//       },
//     });
//     setToken({
//       accessToken: headers.get('X-Auth-Token'),
//     });
//     window.location.href = redirectUrl;
//     await delay(500);
//     return false;
//   },
//   getMenus: async () => {
//     const data = await getMenuDataFun();
//     return getMenusByEnv(data);
//   },
//   layout: 'mix',
//   title: ' ',
//   logo: logoImage,
//   notices,
//   noticeItemClick,
//   search: { enable: true, placeholder: t('label.run') },
//   login,
//   // logout,
//   getUserInfo,
//   CustomLoginInformation,
//   CustomResetPoint,
//   languages: { vn: 'Tiếng Việt', en: 'English', ja: '日本語', zh: '中文' },
//   views: import.meta.glob('/src/views/**/*.{vue,jsx}'),
//   modules: [
//     pluginsI18n(),
//     pluginsUserauthorize(),
//   ],
//   headerRight: {
//     items: [CustomResetPoint, CustomLoginInformation, 'Search', 'Notice', 'LangSelect', 'UserDropdown'],
//   },
// };
const staticMenus = [
  // Static Menus Data Example
  // {
  //   path: '/demo',
  //   meta: {
  //     title: 'blank.title.demo',
  //     rank: 10,
  //   },
  //   children: [
  //     {
  //       path: '/demo/Demo01',
  //       name: 'Demo01',
  //       meta: {
  //         title: 'blank.title.demo01',
  //       },
  //     },
  //   ],
  // },
];

/**
 * Options of VIY-Menu
 * @type {import("viy-menu").MenuOptions}
 */
const menuOptions = {
  i18n,
  getMenus: () => getMenusByEnv(staticMenus),
  login,
  logout,
  getUserInfo,
  views: import.meta.glob('/src/views/**/*.{vue,jsx}'),
};
export default menuOptions;
