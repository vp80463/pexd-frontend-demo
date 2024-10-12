<script setup>
import { IconEdit, useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const router = useRouter();
// import { round, debounce } from 'lodash-es';
// import { useRouter } from "vue-router";
// import { useMultiTagsStoreHook, useUserStoreHook } from 'viy-menu';
// const imgUrlList = ref();
// const commonMenuList = ref ();
// const toDoList = ref();
// const remindList = ref();
// const bannerHeight = ref ();
// const bannerCol = ref();
// const functionHeight = ref();
// const imageInterval = ref(5000);
// const bannerLowHeight = ref ();
// const functionLowHeight = ref();
// const halfFunctionHeight = ref();
// const router = useRouter();
// const notifyEmergentFlag = ref();
// const reservationRemindData = ref();
// onMounted(() => {
// calculateHeight();
// window.addEventListener('resize', debouncedCalculateHeight);
// nextTick(() => {
// checkTextOverflow();
// });
// });
// onBeforeUnmount(() => {
// window.removeEventListener('resize', debouncedCalculateHeight);
// });
defineOptions({
  name: 'homeTest',
});
const form = ref();
const viy2Flex_H1Ncg = ref();
const viy2Row_HaXU4 = ref();
const viy2Form_HbkDw = ref();
const viy2Panel_6PeN3i = ref();
const viy2Row_Hl07P = ref();
const viy2Row_6Z5sIw = ref();
const viy2Button_6ZrFZO = ref();
const viy2Button_6Z4TFW = ref();
const viy2Button_6Z5sGd = ref();
const viy2Row_6Z3zgK = ref();
const viy2Button_6Z5emm = ref();
const viy2Button_6Z5sG2 = ref();
const viy2Button_6ZqzeU = ref();
const viy2Row_6ZsHuK = ref();
const viy2Button_6Z5sIR = ref();
const viy2Button_6ZrdQE = ref();
const viy2Button_6Z52GO = ref();
const viy2Flex_H9Nk0 = ref();
const viy2Panel_Fviu0 = ref();
const grid = ref();
const viy2Row_H2TUO = ref();
const commonMenuAside = ref();
const viy2Button_CIWYt = ref();
const formData = reactive({
});
const viy2Form_HbkDwData = reactive({
});
const commonMenuShowFlag = ref(false);
const gridEditConfig = reactive({
  trigger: 'click',
});
const gridMouseConfig = reactive({
  extension: true,
});
const gridViy2TableButtonColumn_FGo96Buttons = (scope) => {
  return [
    {
      label: '',
      type: 'text',
      icon: IconEdit,
      click: onEditWin,
    },
  ];
};
const gridDsApi = useApi({
  method: 'post',
  localData: [
    {
      date: '20240101',
      item: '原価未定',
      qty: '3',
      flag: '0',
      message: '原価未定の部品を含む受注があります。',
    },
    {
      date: '20240101',
      item: '価格未定',
      qty: '4',
      flag: '0',
      message: '価格未定の部品を含む受注があります。',
    },
    {
      date: '20240101',
      item: '粗利不足',
      qty: '6',
      flag: '0',
      message: '粗利不足の受注があります。',
    },
    {
      date: '20240101',
      item: '粗利オーバー',
      qty: '1',
      flag: '0',
      message: '粗利オーバーの受注があります。',
    },
    {
      date: '20240101',
      item: '標準単価オーバー',
      qty: '2',
      flag: '0',
      message: '標準単価オーバーの受注があります。',
    },
    {
      date: '20240101',
      item: '受注数チェック',
      qty: '3',
      flag: '0',
      message: '受注数が多い受注があります。',
    },
    {
      date: '20240101',
      item: '受注金額チェック',
      qty: '5',
      flag: '0',
      message: '受注金額が大きい受注があります。',
    },
    {
      date: '20240101',
      item: '受注キャンセル',
      qty: '4',
      flag: '0',
      message: 'キャンセルされた受注があります。',
    },
    {
      date: '20240101',
      item: '発注キャンセル',
      qty: '1',
      flag: '1',
      message: 'キャンセルされた発注があります。',
    },
    {
      date: '20240101',
      item: 'まとめ出荷',
      qty: '1',
      flag: '0',
      message: '出荷されていないまとめ出荷の受注があります。',
    },
    {
      date: '20240102',
      item: 'flex発注失敗',
      qty: '2',
      flag: '1',
      message: 'flex発注失敗しました。',
    },
  ],
});
const gridDs = gridDsApi.data;
const homePageDataSrcApi = useApi({
  url: '/common/homePage/homePageData.json',
  method: 'post',
  data: () => {
    const param = {};
    return param;
  },
}, {
  onSuccess: (data, params) => {
    notifyEmergentFlag.value = data.data.notifyEmergentFlag;
    imgUrlList.value = data.data.imgUrlList;
    commonMenuList.value = data.data.commonMenuList;
    toDoList.value = data.data.toDoList;
    reservationRemindData.value = data.data.reservationRemindBO;
    remindList.value = [
      { title: 'Bạn có thông tin khách hàng tiềm năng mới, vui lòng kiểm tra và cập nhật kết quả, vui lòng kiểm tra và cập nhật kết quả, vui lòng kiểm tra và cập nhật kết quả ', count: 8, date: '20240605' },
      { title: 'Bạn có thông tin khách hàng tiềm năng chưa được xử lý, vui lòng kiểm tra và cập nhật, vui lòng kiểm tra và cập nhật ', count: 17, date: '20240604' }, // kết quả
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng, vui lòng kiểm tra và cập nhật, vui lòng kiểm tra và cập nhật, vui lòng kiểm tra và cập nhật, vui lòng kiểm tra và cập nhật', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng, vui lòng kiểm tra và cập nhật, vui lòng kiểm tra và cập nhật', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng', count: 3, date: '20240603' },
      { title: 'Theo dõi bán hàng, vui lòng kiểm tra và cập nhật kết quả, vui lòng kiểm tra và cập nhật kết quả, vui lòng kiểm tra và cập nhật kết quả, vui lòng kiểm tra và cập nhật kết quả, vui lòng kiểm tra và cập nhật kết quả', count: 3, date: '20240603' },
    ];
    nextTick(() => {
      checkTextOverflow();
    });
  },
  manual: true,
});
const homePageDataSrc = homePageDataSrcApi.data;
const viy2Button_6ZrFZOClick = () => {
  skipTo1();
};
const viy2Button_6Z4TFWClick = () => {
  skipTo2();
};
const viy2Button_6Z5sGdClick = () => {
  skipTo3();
};
const viy2Button_6Z5emmClick = () => {
  skipTo4();
};
const viy2Button_6Z5sG2Click = () => {
  skipTo5();
};
const viy2Button_6ZqzeUClick = () => {
  skipTo6();
};
const viy2Button_6Z5sIRClick = () => {
  skipTo7();
};
const viy2Button_6ZrdQEClick = () => {
  skipTo8();
};
const viy2Button_6Z52GOClick = () => {
  skipTo9();
};
const gridDateEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'center',
    },
  };
});
const gridItemEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const gridQtyEditRender = computed(() => {
  return {
    enabled: false,
    attrs: {
      textAlign: 'right',
    },
  };
});
const gridMessageEditRender = computed(() => {
  return {
    enabled: false,
  };
});
const onEditWin = (selectedRow) => {
  const data = {
    dataType: 'view',
  };
  if (selectedRow.flag === '0') {
    // 受注
    useMultiTags().openTag({
      name: 'spm0201_01', // 路由名称
    });
    // Update the meta title of the tag if it exists.
    useMultiTags().getTag({ name: 'spm0201_01' }).meta.title = t('受注一覧', data);
    // Use Vue Router to navigate to the specified route and pass the data parameters
    router.push({ name: 'spm0201_01', data });
  } else {
    // 発注
    useMultiTags().openTag({
      name: 'spm0404_01Copy', // 路由名称
    });
    // Update the meta title of the tag if it exists.
    useMultiTags().getTag({ name: 'spm0404_01Copy' }).meta.title = t('発注一覧', data);
    // Use Vue Router to navigate to the specified route and pass the data parameters
    router.push({ name: 'spm0404_01Copy', data });
  }
};
// 受注入力
const skipTo1 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'spm0201_03_new', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_03_new' }).meta.title = t('受注登録');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_03_new', data });
};
// 受注一覧
const skipTo2 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'spm0201_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0201_01' }).meta.title = t('受注一覧');
  // router导航到页面并传递参数
  router.push({ name: 'spm0201_01', data });
};
// 引当数量調整
const skipTo3 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'spm0204_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0204_01' }).meta.title = t('引当数量調整');
  // router导航到页面并传递参数
  router.push({ name: 'spm0204_01', data });
};
// 発注登録
const skipTo4 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'spm0406_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0406_01' }).meta.title = t('発注登録');
  // router导航到页面并传递参数
  router.push({ name: 'spm0406_01', data });
};
// 発注オーダー照会（部品別）
const skipTo5 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'spq0401_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spq0401_01' }).meta.title = t('発注オーダー照会（部品別）');
  // router导航到页面并传递参数
  router.push({ name: 'spq0401_01', data });
};
// 在庫照会
const skipTo6 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'spq0303_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spq0303_01' }).meta.title = t('在庫照会');
  // router导航到页面并传递参数
  router.push({ name: 'spq0303_01', data });
};
// 在庫調整
const skipTo7 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'spm0307_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'spm0307_01' }).meta.title = t('在庫調整');
  // router导航到页面并传递参数
  router.push({ name: 'spm0307_01', data });
};
// 部品情報一覧
const skipTo8 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'cmm0501_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'cmm0501_01' }).meta.title = t('部品情報一覧');
  // router导航到页面并传递参数
  router.push({ name: 'cmm0501_01', data });
};
// 部品価格照会
const skipTo9 = (row) => {
// 跳转到详情页的必要参数
  const data = {};
  useMultiTags().openTag({
    name: 'cmm0307_01', // 路由名称
  });
  // 详情页标签名
  useMultiTags().getTag({ name: 'cmm0307_01' }).meta.title = t('部品価格照会');
  // router导航到页面并传递参数
  router.push({ name: 'cmm0307_01', data });
};
// //height calculate
// const calculateHeight = () => {
// const formDiv = form.value.$el;
// if (formDiv) {
// const formHeight = formDiv.parentElement.parentElement.clientHeight;
// const banWidth = bannerCol.value.$el.clientWidth;
// const banHeight = round(banWidth / 2.35);
// functionHeight.value = (formHeight - banHeight - 30) + 'px';
// bannerHeight.value = banHeight + 'px';
// bannerLowHeight.value = (banHeight - 40) + 'px';
// functionLowHeight.value = (formHeight - banHeight - 70) + 'px';
// halfFunctionHeight.value = (round((formHeight - banHeight - 40) / 2) - 40) + 'px';
// }
// };
// const debouncedCalculateHeight = debounce(calculateHeight, 100);
// //check the text is more than div width
// const checkTextOverflow = () => {
// const textElements = document.querySelectorAll('.scrolling-text');
// textElements.forEach(el => {
// const parent = el.parentElement;
// if (el.scrollWidth > parent.clientWidth) {
// el.classList.add('overflow');
// } else {
// el.classList.remove('overflow');
// }
// });
// };
// //carousel chart click
// const imgClick = (item) => {
// alert("1");
// };
// //common menus click
// const userMenuSettingClick = () => {
// commonMenuShowFlag.value = true;
// };
// //remind list click
// const remindClick = (item) => {
// alert("3");
// };
// //common menu click
// const menuClick = (item) => {
// useMultiTags().openTag({
// name: item.menuCd,
// });
// router.push({ name: item.menuCd });
// };
// //to do click
// const toDoClick = (item) => {
// const data = {orderType: item.orderType};
// useMultiTags().openTag({
// name: item.menuCd,
// });
// useMultiTags().getTag({ name: item.menuCd }).meta.title = t('title.serviceToDoList_01_Id');
// router.push({ name: item.menuCd, data });
// };
// const reservationClick = (type, date) => {
// //等具体页面的编号和title出来后再修改此文件
// const data = {type: type, date: date};
// useMultiTags().openTag({
// name: 'cmm0001_01',
// });
// useMultiTags().getTag({ name: 'cmm0001_01' }).meta.title = t('title.notifyMessagesMaintenance_01');
// router.push({ name: 'cmm0001_01', data });
// };
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <VueFlex
      id="viy2Flex_H1Ncg"
      ref="viy2Flex_H1Ncg"
      direction="column"
      class="full-height"
    >
      <VueRow
        id="viy2Row_HaXU4"
        ref="viy2Row_HaXU4"
      >
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueText id="viy2Text_6W9tuw" ref="viy2Text_6W9tuw" :style="{ textAlign: 'left', lineHeight: '30px', width: '100%', display: 'inline-block' }">
            特約店システムをご利用いただきありがとうございます。
          </VueText>
        </VueCol>
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueText id="viy2Text_GZ8eu" ref="viy2Text_GZ8eu" :style="{ textAlign: 'right', lineHeight: '30px', width: '100%', display: 'inline-block' }">
            前回のログイン日時：2024-08-30 14:55:06
          </VueText>
        </VueCol>
      </VueRow>
      <vue-divider
        id="viy2divider_GmNlr"
        ref="viy2divider_GmNlr"
        direction="horizontal"
      >
        <template #default>
          本ページ情報
        </template>
      </vue-divider>
      <VueForm
        id="viy2Form_HbkDw"
        ref="viy2Form_HbkDw"
        :model="viy2Form_HbkDwData"
      >
        <VuePanel id="viy2Panel_6PeN3i" ref="viy2Panel_6PeN3i" title="マイメニュー">
          <VueRow
            id="viy2Row_Hl07P"
            ref="viy2Row_Hl07P"
          >
            <VueCol
              item-key="item"
              align="center"
              :md="{ span: 24 }"
            >
              <VueRow
                id="viy2Row_6Z5sIw"
                ref="viy2Row_6Z5sIw"
              >
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6ZrFZO" ref="viy2Button_6ZrFZO" icon-position="left" class="btn2" @click="viy2Button_6ZrFZOClick">
                    受注入力
                  </VueButton>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6Z4TFW" ref="viy2Button_6Z4TFW" icon-position="left" class="btn2" @click="viy2Button_6Z4TFWClick">
                    受注一覧
                  </VueButton>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6Z5sGd" ref="viy2Button_6Z5sGd" class="btn2" @click="viy2Button_6Z5sGdClick">
                    引当数量調整
                  </VueButton>
                </VueCol>
              </VueRow>
              <!-- BEGIN CUSTOM DIV CODE -->
              <div style="height: 10px; width: 100%; background-color: #ffffff;" />
              <!-- END CUSTOM DIV CODE -->
              <VueRow
                id="viy2Row_6Z3zgK"
                ref="viy2Row_6Z3zgK"
              >
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6Z5emm" ref="viy2Button_6Z5emm" icon-position="left" class="btn1" @click="viy2Button_6Z5emmClick">
                    発注登録
                  </VueButton>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6Z5sG2" ref="viy2Button_6Z5sG2" icon-position="left" class="btn1" @click="viy2Button_6Z5sG2Click">
                    発注オーダー照会（部品別）
                  </VueButton>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6ZqzeU" ref="viy2Button_6ZqzeU" icon-position="left" class="btn1" @click="viy2Button_6ZqzeUClick">
                    在庫照会
                  </VueButton>
                </VueCol>
              </VueRow>
              <!-- BEGIN CUSTOM DIV CODE -->
              <div style="height: 10px; width: 100%; background-color: #ffffff;" />
              <!-- END CUSTOM DIV CODE -->
              <VueRow
                id="viy2Row_6ZsHuK"
                ref="viy2Row_6ZsHuK"
              >
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6Z5sIR" ref="viy2Button_6Z5sIR" icon-position="left" class="btn3" @click="viy2Button_6Z5sIRClick">
                    在庫調整
                  </VueButton>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6ZrdQE" ref="viy2Button_6ZrdQE" icon-position="left" class="btn3" @click="viy2Button_6ZrdQEClick">
                    部品情報一覧
                  </VueButton>
                </VueCol>
                <VueCol
                  item-key="item"
                  align="center"
                  :inline="true"
                  :md="{ span: 8 }"
                >
                  <VueButton id="viy2Button_6Z52GO" ref="viy2Button_6Z52GO" icon-position="left" class="btn3" @click="viy2Button_6Z52GOClick">
                    部品価格照会
                  </VueButton>
                </VueCol>
              </VueRow>
              <!-- BEGIN CUSTOM DIV CODE -->
              <div style="height: 10px; width: 100%; background-color: #ffffff;" />
              <!-- END CUSTOM DIV CODE -->
            </VueCol>
          </VueRow>
        </VuePanel>
      </VueForm>
      <VueFlex
        id="viy2Flex_H9Nk0"
        ref="viy2Flex_H9Nk0"
        direction="column"
        grow="1"
      >
        <VuePanel id="viy2Panel_Fviu0" ref="viy2Panel_Fviu0" title="メッセージ一覧" height="100%" :collapse="true">
          <VueTable id="grid" ref="grid" height="auto" :data="gridDs" :edit-config="gridEditConfig" :mouse-config="gridMouseConfig">
            <VueIndexColumn
              align="center"
              width="50px"
              min-width="50px"
              header-align="center"
            />
            <VueDateTimeColumn
              :edit-render="gridDateEditRender"
              field="date"
              align="center"
              :sortable="true"
              width="200px"
              title="日付"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridItemEditRender"
              field="item"
              :sortable="true"
              title="内容"
              header-align="center"
              width="150px"
            />
            <VueNumberColumn
              :edit-render="gridQtyEditRender"
              field="qty"
              align="right"
              :sortable="true"
              title="件数"
              width="70px"
              header-align="center"
            />
            <VueInputColumn
              :edit-render="gridMessageEditRender"
              field="message"
              :sortable="true"
              title="メッセージ"
              header-align="center"
              width="500px"
            />
            <VueButtonColumn
              width="40px"
              :buttons="gridViy2TableButtonColumn_FGo96Buttons"
            />
          </VueTable>
        </VuePanel>
      </VueFlex>
      <VueRow
        id="viy2Row_H2TUO"
        ref="viy2Row_H2TUO"
      >
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        />
        <VueCol
          item-key="item"
          :md="{ span: 12 }"
        >
          <VueText id="viy2Text_6WvuKY" ref="viy2Text_6WvuKY" :style="{ textAlign: 'right', lineHeight: '30px', width: '100%', display: 'inline-block' }">
            1.10.1（20240807106665）
          </VueText>
        </VueCol>
      </VueRow>
    </VueFlex>
    <VueAside
      id="commonMenuAside"
      ref="commonMenuAside"
      v-model="commonMenuShowFlag"
      :modal="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      size="30%"
      :title="t('label.commonMenuSettings')"
    >
      <VueButton id="viy2Button_CIWYt" ref="viy2Button_CIWYt" icon-position="left">
        Button
      </VueButton>
    </VueAside>
  </VueForm>
</template>

<style type="text/css" scoped>
:deep(.vue-card__body) {
padding:5px;
}
:deep(.vue-card__header) {
padding: 3px;
background: #e7f0f7;
}
.vue-card + .vue-card {
margin: 10px;
}
.status-button {
color: rgb(20, 20, 20);
font-size: 15px;
}
.status-text {
color: rgb(19, 156, 238);
font-size: 30px;
}
.dashboard-row {
background-color: rgb(255, 255, 255);
border-radius: 4px;
}
.dashboard-row +.dashboard-row {
margin-top: 10px;
}
.title-span {
border-left: 6px solid rgb(34, 162, 239);
/* color: rgb(51, 51, 51); */
color: rgb(19, 156, 238);
display: block;
font-size: 18px;
font-weight: bold;
margin-bottom: 10px;
padding-left: 10px;
height: 30px;
line-height: 30px;
}
.div-height {
height: 340px;
padding-top: 10px;
overflow: auto;
}
.div-height-carousel {
height: 380px;
}
.div-height-bottom {
height: 100%;
}
.remind-item-button {
border: 0px;
height: 45px;
}
.function-row {
background: rgb(246, 246, 246);
float: left;
height: 66px;
width: calc(33% - 8px);
margin: 0px 4px 4px 4px;
cursor: pointer;
display: flex;
align-items: center;
}
.function-row:hover {
background: rgb(234, 234, 234);
}
.schedule-div {
background: rgb(246, 246, 246);
font-size: 16px;
padding: 16px 12px;
float: left;
height: 66px;
width: calc(33% - 8px);
cursor: pointer;
margin: 0px 4px 4px 4px;
display: flex;
justify-content: space-between;
align-items: center;
}
.schedule-div:hover {
background: rgb(234, 234, 234);
}
.schedule-label-div {
color: rgb(20, 20, 20);
font-size: 15px;
}
.schedule-qty-div {
/* color: rgb(19, 156, 238); */
color: red;
display: inline;
font-size: 20px;
font-weight: bold;
text-align: right;
}
.function-icon {
background-color: rgb(231, 240, 247);
color:rgb(20, 20, 20);
float: left;
height: 50px;
padding: 15px;
}
.function-label {
float: left;
padding-left: 6px;
font-size: 12px;
font-weight: 500;
}
.used-menu-area {
height: calc(100% - 30px);
overflow: auto;
}
.dashboard-container {
height:100%;
width:100%;
overflow: hidden;
}
/* Hide scrollbar by default */
.notice-div {
margin:0 16px;
overflow: hidden; /* Hide the scrollbar */
}
/* Show scrollbar on hover */
.notice-div:hover {
overflow: auto; /* Show the scrollbar */
}
/* Custom scrollbar styles for WebKit browsers (Chrome, Safari) */
.notice-div::-webkit-scrollbar {
width: 8px; /* Adjust the width of the scrollbar */
}
.notice-div::-webkit-scrollbar-track {
background: #f1f1f1; /* Background color of the scrollbar track */
border-radius: 10px; /* Rounded corners for the scrollbar track */
}
.notice-div::-webkit-scrollbar-thumb {
background: #888; /* Color of the scrollbar thumb */
border-radius: 10px; /* Rounded corners for the scrollbar thumb */
}
.notice-div::-webkit-scrollbar-thumb:hover {
background: #555; /* Color of the scrollbar thumb when hovered */
}
/* Custom scrollbar styles for Firefox */
.notice-div {
scrollbar-width: thin; /* Make the scrollbar thinner */
scrollbar-color: #888 #f1f1f1; /* Color of the scrollbar thumb and track */
}
/* Custom scrollbar styles for Internet Explorer and Edge */
.notice-div {
-ms-overflow-style: -ms-autohiding-scrollbar; /* Hide scrollbar when not in use */
}
.notice-li {
display:flex;
height:30px !important;
align-items:center;
cursor: pointer;
justify-content: space-between;
}
.notice-point {
height: 6px;
width: 6px;
background-color: black;
border-radius: 50%;
margin-right: 8px;
}
.notice-text-left {
color:#333333;
font-size:15px;
max-width: calc(100% - 100px);
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
display: inline-block;
vertical-align: middle;
position: relative;
}
.notice-text-right {
color:#868686;
font-size:14px;
line-height: 30px;
margin-left: auto;
width: 80px;
text-align: right;
}
.scrolling-text {
display: inline-block;
white-space: nowrap;
transition: transform 0.5s ease;
will-change: transform;
}
.scrolling-text.overflow:hover {
animation: scroll-text 10s linear infinite;
}
@keyframes scroll-text {
0% {
transform: translateX(0%);
}
100% {
transform: translateX(-100%);
}
}
/* .outer-container {
display: flex;
gap: 20px;
margin-left: 20px;
}
.container {
display: flex;
align-items: stretch;
height: 132px;
background: rgb(246, 246, 246);
font-size: 16px;
width: 45%;
}
.left {
flex: 0 0 100px;
display: flex;
align-items: center;
justify-content: center;
border-right: solid 2px #d1d1d1;
}
.right {
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;
}
.confirm {
float: left;
cursor: pointer;
margin: 0px 4px 4px 4px;
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
padding: 16px 12px;
}
.confirm:hover {
background: rgb(234, 234, 234);
}
.confirm-label-div {
color: rgb(20, 20, 20);
font-size: 15px;
}
.confirm-qty-div {
color: rgb(19, 156, 238);
display: inline;
font-size: 20px;
font-weight: bold;
text-align: right;
}
.divider {
height: 2px;
background-color: #d1d1d1;
} */
.container {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
gap: 16px;
background: rgb(246, 246, 246);
padding: 16px;
}
.confirm {
height: 132px;
background: white;
font-size: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 16px;
cursor: pointer;
}
.confirm:hover {
background: rgb(234, 234, 234);
}
.confirm div:first-child {
/* font-weight: bold; */
margin-bottom: 8px;
}
.confirm div:last-child {
font-size: 20px;
/* color: rgb(19, 156, 238); */
color: red;
font-weight: bold;
}
/* test*/
.btn1 {
width: 300px;
height: 60px;
background: linear-gradient(to right, #e1f1f9, #bad6f9); /* 渐变从浅蓝色到深蓝色 */
border: none; /* 移除边框以适应现代设计 */
border-radius: 5px; /* 添加圆角提升美感 */
color: rgba(7, 0, 0, 0.701); /* 文字颜色设为白色，与背景对比更鲜明 */
font-weight: bold;/* 添加这一行来使字体加粗 */
font-size: 18px; /* 根据需要调整字体大小 */
cursor: pointer; /* 更改鼠标指针为手形，提升用户体验 */
transition: background 0.3s ease; /* 添加平滑的背景过渡效果 */
}
.btn2 {
width: 300px;
height: 60px;
background: linear-gradient(to right, #efeff9, #e1cef7); /* 渐变从浅蓝色到深蓝色 */
border: none; /* 移除边框以适应现代设计 */
border-radius: 5px; /* 添加圆角提升美感 */
color: rgba(7, 0, 0, 0.701); /* 文字颜色设为白色，与背景对比更鲜明 */
font-weight: bold;/* 添加这一行来使字体加粗 */
font-size: 18px; /* 根据需要调整字体大小 */
cursor: pointer; /* 更改鼠标指针为手形，提升用户体验 */
transition: background 0.3s ease; /* 添加平滑的背景过渡效果 */
}
.btn3 {
width: 300px;
height: 60px;
background: linear-gradient(to right, #eef7f7, #c1e6f5); /* 渐变从浅蓝色到深蓝色 */
border: none; /* 移除边框以适应现代设计 */
border-radius: 5px; /* 添加圆角提升美感 */
color: rgba(7, 0, 0, 0.701); /* 文字颜色设为白色，与背景对比更鲜明 */
font-weight: bold;/* 添加这一行来使字体加粗 */
font-size: 18px; /* 根据需要调整字体大小 */
cursor: pointer; /* 更改鼠标指针为手形，提升用户体验 */
transition: background 0.3s ease; /* 添加平滑的背景过渡效果 */
}
</style>
