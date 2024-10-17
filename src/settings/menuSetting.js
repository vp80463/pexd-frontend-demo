import { YnaG3SystemAdapter } from 'viy-menu';
import i18n from '@/i18n';
import logo from '@/assets/logo.png';
const t = i18n.global.t;
const { login, logout, getUserInfo, getMenusByEnv } = new YnaG3SystemAdapter({
  dummyAuth: { userCode: 'admin' }, // add this line for dummy login, this line will not be included in production build
});

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
  {
    path: '/parts/sales',
    meta: {
      title: '受注',
      rank: 1,
    },
    children: [
      {
        id: '1001',
        path: '/parts/sales/spm0201_03',
        name: 'spm201_03',
        meta: {
          rank: 1,
          activePath: '/parts/sales/spm0201_03New',
          title: '受注登録',
        },
      },
      {
        id: '1002',
        path: '/parts/sales/spm0201_02',
        name: 'spm0201_02',
        meta: {
          rank: 2,
          activePath: '/parts/sales/spm0201_02',
          title: '来店客受注登録',
        },
      },
      {
        id: '1003',
        path: '/parts/sales/spm0201_05',
        name: 'spm0201_05',
        meta: {
          rank: 3,
          activePath: '/parts/sales/spm0201_05',
          title: '複数受注登録',
        },
      },
      {
        id: '1004',
        path: '/parts/sales/spm0201_01',
        name: 'spm0201_01',
        meta: {
          rank: 4,
          activePath: '/parts/sales/spm0201_01',
          title: '受注一覧',
        },
      },
      {
        id: '1005',
        path: '/parts/sales/spq0202_01',
        name: 'spq0202_01',
        meta: {
          rank: 5,
          activePath: '/parts/sales/spq0202_01',
          title: '受注照会（部品別）',
        },
      },
      {
        id: '1006',
        path: '/parts/sales/spq0207_01',
        name: 'spq0207_01',
        meta: {
          rank: 6,
          activePath: '/parts/sales/spq0207_01',
          title: '受注キャンセル履歴',
        },
      },
      {
        id: '1007',
        path: '/parts/sales/spm0213_01',
        name: 'spm0213_01',
        meta: {
          rank: 7,
          activePath: '/parts/sales/spm0213_01',
          title: 'BOリリース',
        },
      },
      {
        id: '1008',
        path: '/parts/sales/spm0204_01',
        name: 'spm0204_01',
        meta: {
          rank: 8,
          activePath: '/parts/sales/spm0204_01',
          title: '引当数量調整',
        },
      },
      {
        id: '1009',
        path: '/parts/sales/spm0205_01',
        name: 'spm0205_01',
        meta: {
          rank: 9,
          activePath: '/parts/sales/spm0205_01',
          title: '引当優先度調整',
        },
      },
      {
        id: '1010',
        path: '/parts/sales/spm0202_01',
        name: 'spm0202_01',
        meta: {
          rank: 10,
          activePath: '/parts/sales/spm0202_01',
          title: '顧客返品登録（出荷履歴あり）',
        },
      },
      {
        id: '1011',
        path: '/parts/sales/spm0203_01',
        name: 'spm0203_01',
        meta: {
          rank: 11,
          activePath: '/parts/sales/spm0203_01',
          title: '顧客返品登録（出荷履歴なし）',
        },
      },
      {
        id: '1012',
        path: '/parts/sales/spm0202_02',
        name: 'spm0202_02',
        meta: {
          rank: 12,
          activePath: '/parts/sales/spm0202_02',
          title: '顧客返品履歴',
        },
      },
    ],
  },
  {
    path: '/parts/delivery',
    meta: {
      title: '出荷',
      rank: 2,
    },
    children: [
      {
        id: '2001',
        path: '/parts/delivery/spq0205_01',
        name: 'spq0205_01',
        meta: {
          rank: 1,
          activePath: '/parts/delivery/spq0205_01',
          title: '出庫指示',
        },
      },
      {
        id: '2002',
        path: '/parts/delivery/spm0209_01',
        name: 'spm0209_01',
        meta: {
          rank: 2,
          activePath: '/parts/delivery/spm0209_01',
          title: '出庫差異調整',
        },
      },
      {
        id: '2003',
        path: '/parts/delivery/spm0211_01',
        name: 'spm0211_01',
        meta: {
          rank: 3,
          activePath: '/parts/delivery/spm0211_01',
          title: '出荷完了',
        },
      },
      {
        id: '2004',
        path: '/parts/delivery/spq0206_01',
        name: 'spq0206_01',
        meta: {
          rank: 4,
          activePath: '/parts/delivery/spq0206_01',
          title: '出庫指示照会',
        },
      },
      {
        id: '2005',
        path: '/parts/delivery/spq0203_01',
        name: 'spq0203_01',
        meta: {
          rank: 5,
          activePath: '/parts/delivery/spq0203_01',
          title: '出荷履歴照会（販売店別）',
        },
      },
      {
        id: '2006',
        path: '/parts/delivery/spm0214_01',
        name: 'spm0214_01',
        meta: {
          rank: 6,
          activePath: '/parts/delivery/spm0214_01',
          title: '特殊売上',
        },
      },
    ],
  },
  {
    path: '/parts/inventory',
    meta: {
      title: '在庫',
      rank: 3,
    },
    children: [
      {
        id: '3001',
        path: '/parts/inventory/spm0307_01',
        name: 'spm0307_01',
        meta: {
          rank: 1,
          activePath: '/parts/inventory/spm0307_01',
          title: '在庫調整',
        },
      },
      {
        id: '3002',
        path: '/parts/inventory/spm0305_01',
        name: 'spm0305_01',
        meta: {
          rank: 2,
          activePath: '/parts/inventory/spm0305_01',
          title: '在庫移動',
        },
      },
      {
        id: '3003',
        path: '/parts/inventory/spm0312_01',
        name: 'spm0312_01',
        meta: {
          rank: 3,
          activePath: '/parts/inventory/spm0312_01',
          title: '凍結在庫解消',
        },
      },
      {
        id: '3004',
        path: '/parts/inventory/spq0303_01',
        name: 'spq0303_01',
        meta: {
          rank: 4,
          activePath: '/parts/inventory/spq0303_01',
          title: '在庫照会',
        },
      },
      {
        id: '3005',
        path: '/parts/inventory/spq0304_01',
        name: 'spq0304_01',
        meta: {
          rank: 5,
          activePath: '/parts/inventory/spq0304_01',
          title: '受払履歴',
        },
      },
      {
        id: '3006',
        path: '/parts/inventory/spq0302_01',
        name: 'spq0302_01',
        meta: {
          rank: 6,
          activePath: '/parts/inventory/spq0302_01',
          title: '在庫調整履歴',
        },
      },
      {
        id: '3007',
        path: '/parts/inventory/spq0303_02',
        name: 'spq0303_02',
        meta: {
          rank: 7,
          activePath: '/parts/inventory/spq0303_02',
          title: '部品棚在庫一覧',
          showLink: false,
        },
      },
    ],
  },
  {
    path: '/parts/purchase',
    meta: {
      title: '発注',
      rank: 4,
    },
    children: [
      {
        id: '4001',
        path: '/parts/purchase/spm0413_01',
        name: 'spm0413_01',
        meta: {
          rank: 1,
          activePath: '/parts/purchase/spm0413_01',
          title: '発注登録（点量）',
        },
      },
      {
        id: '4002',
        path: '/parts/purchase/spm0406_01',
        name: 'spm0406_01',
        meta: {
          rank: 2,
          activePath: '/parts/purchase/spm0406_01',
          title: '発注登録',
        },
      },
      {
        id: '4003',
        path: '/parts/purchase/spm0404_01',
        name: 'spm0404_01',
        meta: {
          rank: 3,
          activePath: '/parts/purchase/spm0404_01',
          title: '発注一覧',
        },
      },
      {
        id: '4004',
        path: '/parts/purchase/spq0401_01',
        name: 'spq0401_01',
        meta: {
          rank: 4,
          activePath: '/parts/purchase/spq0401_01',
          title: '発注照会（部品別）',
        },
      },
      {
        id: '4005',
        path: '/parts/purchase/spq0405_01',
        name: 'spq0405_01',
        meta: {
          rank: 5,
          activePath: '/parts/purchase/spq0405_01',
          title: '発注残照会',
        },
      },
      {
        id: '4006',
        path: '/parts/purchase/spm0402_01',
        name: 'spm0402_01',
        meta: {
          rank: 6,
          activePath: '/parts/purchase/spm0402_01',
          title: '発注点量メンテ',
        },
      },
      {
        id: '4007',
        path: '/parts/purchase/spm0401_01',
        name: 'spm0401_01',
        meta: {
          rank: 7,
          activePath: '/parts/purchase/spm0401_01',
          title: 'CU分類パラメータ設定',
        },
      },
    ],
  },
  {
    path: '/parts/receipt',
    meta: {
      title: '入庫',
      rank: 5,
    },
    children: [
      {
        id: '5001',
        path: '/parts/receipt/spm0301_01',
        name: 'spm0301_01',
        meta: {
          rank: 1,
          activePath: '/parts/receipt/spm0301_01',
          title: '受付',
        },
      },
      {
        id: '5002',
        path: '/parts/receipt/spm0302_01',
        name: 'spm0302_01',
        meta: {
          rank: 2,
          activePath: '/parts/receipt/spm0302_01',
          title: '受付(メーカー直送)',
        },
      },
      {
        id: '5003',
        path: '/parts/receipt/spm0315_01',
        name: 'spm0315_01',
        meta: {
          rank: 3,
          activePath: '/parts/receipt/spm0315_01',
          title: '棚入',
        },
      },
      {
        id: '5004',
        path: '/parts/receipt/spq0301_01',
        name: 'spq0301_01',
        meta: {
          rank: 4,
          activePath: '/parts/receipt/spq0301_01',
          title: '受付＆棚入照会',
        },
      },
      {
        id: '5005',
        path: '/parts/receipt/spq0309_01',
        name: 'spq0309_01',
        meta: {
          rank: 5,
          activePath: '/parts/receipt/spq0309_01',
          title: 'ラベル：部品番号ラベル',
        },
      },
    ],
  },
  {
    path: '/parts/product',
    meta: {
      title: '部品',
      rank: 6,
    },
    children: [
      {
        id: '6001',
        path: '/product/category/cmm0502_01',
        name: 'cmm0502_01',
        meta: {
          rank: 1,
          activePath: '/product/category/cmm0502_01',
          title: '大区分一覧',
        },
      },
      {
        id: '6002',
        path: '/product/category/cmm0503_01',
        name: 'cmm0503_01',
        meta: {
          rank: 2,
          activePath: '/product/category/cmm0503_01',
          title: '中区分一覧',
        },
      },
      {
        id: '6003',
        path: '/product/category/cmm0504_01',
        name: 'cmm0504_01',
        meta: {
          rank: 3,
          activePath: '/product/category/cmm0504_01',
          title: '小区分一覧',
        },
      },
      {
        id: '6004',
        path: '/product/productinfo/cmm0501_01',
        name: 'cmm0501_01',
        meta: {
          rank: 4,
          activePath: '/product/productinfo/cmm0501_01',
          title: '部品情報一覧',
        },
      },
      {
        id: '6005',
        path: '/product/productinfo/cmq0501_01',
        name: 'cmq0501_01',
        meta: {
          rank: 5,
          activePath: '/product/productinfo/cmq0501_01',
          title: '部品情報照会',
        },
      },
      {
        id: '6006',
        path: '/master/masterInfo/cmm0307_01',
        name: 'cmm0307_01',
        meta: {
          rank: 6,
          activePath: '/master/masterInfo/cmm0307_01',
          title: '価格照会',
        },
      },
      {
        id: '6007',
        path: '/master/masterInfo/cmm0309_01',
        name: 'cmm0309_01',
        meta: {
          rank: 7,
          activePath: '/master/masterInfo/cmm0309_01',
          title: '価格改定履歴',
        },
      },
      {
        id: '6008',
        path: '/master/masterInfo/cmm0308_01',
        name: 'cmm0308_01',
        meta: {
          rank: 8,
          activePath: '/master/masterInfo/cmm0308_01',
          title: '仕入先部品番号照会',
        },
      },
      {
        id: '6009',
        path: '/master/masterInfo/cmm0505_01',
        name: 'cmm0505_01',
        meta: {
          rank: 9,
          activePath: '/master/masterInfo/cmm0505_01',
          title: 'メインロケーションメンテ',
        },
      },
      {
        id: '6010',
        path: '/product/productinfo/cmm0501_02',
        name: 'cmm0501_02',
        meta: {
          rank: 10,
          activePath: '/product/productinfo/cmm0501_02',
          title: '部品情報詳細',
          showLink: false,
        },
      },
    ],
  },
  {
    path: '/parts/stocktaking',
    meta: {
      title: '棚卸',
      rank: 7,
    },
    children: [
      {
        id: '7001',
        path: '/parts/stocktaking/spq0305_01',
        name: 'spq0305_01',
        meta: {
          rank: 1,
          activePath: '/parts/stocktaking/spq0305_01',
          title: '作業中商品照会',
        },
      },
      {
        id: '7002',
        path: '/parts/stocktaking/spm0308_01',
        name: 'spm0308_01',
        meta: {
          rank: 2,
          activePath: '/parts/stocktaking/spm0308_01',
          title: '棚卸開始',
        },
      },
      {
        id: '7003',
        path: '/parts/stocktaking/spq0306_01',
        name: 'spq0306_01',
        meta: {
          rank: 3,
          activePath: '/parts/stocktaking/spq0306_01',
          title: '棚卸リスト印刷',
        },
      },
      {
        id: '7004',
        path: '/parts/stocktaking/spm0309_01',
        name: 'spm0309_01',
        meta: {
          rank: 4,
          activePath: '/parts/stocktaking/spm0309_01',
          title: '棚卸在庫実績入力',
        },
      },
      {
        id: '7005',
        path: '/parts/stocktaking/spq0307_01',
        name: 'spq0307_01',
        meta: {
          rank: 5,
          activePath: '/parts/stocktaking/spq0307_01',
          title: '棚卸進捗照会',
        },
      },
      {
        id: '7006',
        path: '/parts/stocktaking/spm0310_01',
        name: 'spm0310_01',
        meta: {
          rank: 6,
          activePath: '/parts/stocktaking/spm0310_01',
          title: '棚卸完了/取消',
        },
      },
    ],
  },
  {
    path: '/parts/spre',
    meta: {
      title: '請求',
      rank: 8,
    },
    children: [
      {
        id: '8001',
        path: '/parts/misp/spq0512_01Copy',
        name: 'spq0512_01Copy',
        meta: {
          rank: 1,
          activePath: '/parts/misp/spq0512_01Copy',
          title: '請求データ照会',
        },
      },
      {
        id: '8002',
        path: '/parts/misp/spq0513_01Copy',
        name: 'spq0513_01Copy',
        meta: {
          rank: 2,
          activePath: '/parts/misp/spq0513_01Copy',
          title: '請求データ検索（熊本用）',
        },
      },
      {
        id: '8003',
        path: '/parts/misp/spq0514_01Copy',
        name: 'spq0514_01Copy',
        meta: {
          rank: 3,
          activePath: '/parts/misp/spq0514_01Copy',
          title: '請求データ検索（東単用）',
        },
      },
      {
        id: '8004',
        path: '/parts/misp/spq0515_01Copy',
        name: 'spq0515_01Copy',
        meta: {
          rank: 4,
          activePath: '/parts/misp/spq0515_01Copy',
          title: '請求データ照会（沖縄用）',
        },
      },
    ],
  },
  {
    path: '/parts/misp',
    meta: {
      title: 'MI',
      rank: 9,
    },
    children: [
      {
        id: '9001',
        path: '/parts/misp/spq0501_01',
        name: 'spq0501_01',
        meta: {
          rank: 1,
          activePath: '/parts/misp/spq0501_01',
          title: '営業情報（オーダー行別＆金額別）',
        },
      },
      {
        id: '9002',
        path: '/parts/misp/spq0517_01_3S',
        name: 'spq0517_01_3S',
        meta: {
          rank: 2,
          activePath: '/parts/misp/spq0517_01_3S',
          title: '営業情報（販売店別）',
        },
      },
      {
        id: '9003',
        path: '/parts/misp/spq0503_01_3S',
        name: 'spq0503_01_3S',
        meta: {
          rank: 3,
          activePath: '/parts/misp/spq0503_01_3S',
          title: '営業報告（受注）',
        },
      },
      {
        id: '9004',
        path: '/parts/misp/spq0508_01_3S',
        name: 'spq0508_01_3S',
        meta: {
          rank: 4,
          activePath: '/parts/misp/spq0508_01_3S',
          title: '営業報告（在庫）',
        },
      },
      {
        id: '9005',
        path: '/parts/misp/cmm0310_01',
        name: 'cmm0310_01',
        meta: {
          rank: 5,
          activePath: '/parts/misp/cmm0310_01',
          title: '販売店グループメンテ',
        },
      },
      {
        id: '9006',
        path: '/parts/misp/spq0510_01_3s',
        name: 'spq0510_01_3s',
        meta: {
          rank: 6,
          activePath: '/parts/misp/spq0510_01_3s',
          title: '売上達成進捗',
        },
      },
      {
        id: '9007',
        path: '/parts/misp/spq0509_01',
        name: 'spq0509_01',
        meta: {
          rank: 7,
          activePath: '/parts/misp/spq0509_01',
          title: '販売店目標メンテ',
        },
      },
      {
        id: '9008',
        path: '/parts/misp/spq0518_01_3S',
        name: 'spq0518_01_3S',
        meta: {
          rank: 8,
          activePath: '/parts/misp/spq0518_01_3S',
          title: '売上目標メンテナンス',
        },
      },
    ],
  },
  {
    path: '/parts/master',
    meta: {
      title: 'マスタ',
      rank: 10,
    },
    children: [
      {
        id: '10001',
        path: '/master/masterInfo/cmm0801_01',
        name: 'cmm0801_01',
        meta: {
          rank: 1,
          activePath: '/master/masterInfo/cmm0801_01',
          title: '特約店マスタメンテ',
        },
      },
      {
        id: '10002',
        path: '/master/masterInfo/cmm0701_01',
        name: 'cmm0701_01',
        meta: {
          rank: 2,
          activePath: '/master/masterInfo/cmm0701_01',
          title: '販売店一覧',
        },
      },
      {
        id: '10003',
        path: '/master/masterInfo/cmm0702_01',
        name: 'cmm0702_01',
        meta: {
          rank: 3,
          activePath: '/master/masterInfo/cmm0702_01',
          title: '内部課一覧',
        },
      },
      {
        id: '10004',
        path: '/master/masterInfo/cmm0201_01',
        name: 'cmm0201_01',
        meta: {
          rank: 4,
          activePath: '/master/masterInfo/cmm0201_01',
          title: 'ロケーションメンテ',
        },
      },
      {
        id: '10005',
        path: '/master/masterInfo/cmm0303_01',
        name: 'cmm0303_01',
        meta: {
          rank: 5,
          activePath: '/master/masterInfo/cmm0303_01',
          title: '純掛掛率一覧',
        },
      },
      {
        id: '10006',
        path: '/master/masterInfo/cmm0301_01',
        name: 'cmm0301_01',
        meta: {
          rank: 6,
          activePath: '/master/masterInfo/cmm0301_01',
          title: '特掛ランクメンテ',
        },
      },
      {
        id: '10007',
        path: '/master/masterInfo/cmm0305_01',
        name: 'cmm0305_01',
        meta: {
          rank: 7,
          activePath: '/master/masterInfo/cmm0305_01',
          title: '特掛掛率一覧',
        },
      },
      {
        id: '10008',
        path: '/master/masterInfo/cmm0304_01',
        name: 'cmm0304_01',
        meta: {
          rank: 8,
          activePath: '/master/masterInfo/cmm0304_01',
          title: '内部掛率メンテ',
        },
      },
      {
        id: '10009',
        path: '/master/masterInfo/cmm0306_01',
        name: 'cmm0306_01',
        meta: {
          rank: 9,
          activePath: '/master/masterInfo/cmm0306_01',
          title: '特殊単価適用一覧',
        },
      },
      {
        id: '10010',
        path: '/master/masterInfo/cmm0309_02',
        name: 'cmm0309_02',
        meta: {
          rank: 10,
          activePath: '/master/masterInfo/cmm0309_02',
          title: '価格履歴詳細',
          showLink: false,
        },
      },
    ],
  },
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
  logo,
  title: '',
  views: import.meta.glob('/src/views/**/*.{vue,jsx}'),
};
export default menuOptions;
