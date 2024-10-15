<script setup>
import { useLockScreen } from 'viy-ui';
import { useI18n } from 'vue-i18n';
import { debounce, round } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';
const { t } = useI18n();
const { lockScreen } = useLockScreen();
const imgUrlList = ref();
const commonMenuList = ref ();
const toDoList = ref();
const remindList = ref();
const bannerHeight = ref ();
const bannerCol = ref();
const functionHeight = ref();
const imageInterval = ref(5000);
const bannerLowHeight = ref ();
const functionLowHeight = ref();
const halfFunctionHeight = ref();
const router = useRouter();
const notifyEmergentFlag = ref();
const reservationRemindData = ref();
onMounted(() => {
  calculateHeight();
  window.addEventListener('resize', debouncedCalculateHeight);
  nextTick(() => {
    checkTextOverflow();
  });
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', debouncedCalculateHeight);
});
defineOptions({
  name: 'home_origin',
});
const form = ref();
const commonMenuAside = ref();
const viy2Button_CIWYt = ref();
const formData = reactive({
});
const commonMenuShowFlag = ref(false);
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
});
const homePageDataSrc = homePageDataSrcApi.data;
// height calculate
const calculateHeight = () => {
  const formDiv = form.value.$el;
  if (formDiv) {
    const formHeight = formDiv.parentElement.parentElement.clientHeight;
    const banWidth = bannerCol.value.$el.clientWidth;
    const banHeight = round(banWidth / 2.35);
    functionHeight.value = `${formHeight - banHeight - 30}px`;
    bannerHeight.value = `${banHeight}px`;
    bannerLowHeight.value = `${banHeight - 40}px`;
    functionLowHeight.value = `${formHeight - banHeight - 70}px`;
    halfFunctionHeight.value = `${round((formHeight - banHeight - 40) / 2) - 40}px`;
  }
};
const debouncedCalculateHeight = debounce(calculateHeight, 100);
// check the text is more than div width
const checkTextOverflow = () => {
  const textElements = document.querySelectorAll('.scrolling-text');
  textElements.forEach((el) => {
    const parent = el.parentElement;
    if (el.scrollWidth > parent.clientWidth) {
      el.classList.add('overflow');
    } else {
      el.classList.remove('overflow');
    }
  });
};
// carousel chart click
const imgClick = (item) => {
  alert('1');
};
// common menus click
const userMenuSettingClick = () => {
  commonMenuShowFlag.value = true;
};
// remind list click
const remindClick = (item) => {
  alert('3');
};
// common menu click
const menuClick = (item) => {
  useMultiTags().openTag({
    name: item.menuCd,
  });
  router.push({ name: item.menuCd });
};
// to do click
const toDoClick = (item) => {
  const data = { orderType: item.orderType };
  useMultiTags().openTag({
    name: item.menuCd,
  });
  useMultiTags().getTag({ name: item.menuCd }).meta.title = t('title.serviceToDoList_01_Id');
  router.push({ name: item.menuCd, data });
};
const reservationClick = (type, date) => {
// 等具体页面的编号和title出来后再修改此文件
  const data = { type, date };
  useMultiTags().openTag({
    name: 'cmm0001_01',
  });
  useMultiTags().getTag({ name: 'cmm0001_01' }).meta.title = t('title.notifyMessagesMaintenance_01');
  router.push({ name: 'cmm0001_01', data });
};
</script>

<template>
  <VueForm ref="form" v-loading="lockScreen" :model="formData">
    <!-- BEGIN CUSTOM DIV CODE -->
    <div class="dashboard-container">
      <vue-row ref="form" :gutter="8" style="height:100%;">
        <vue-col id="imgCol" ref="bannerCol" :span="13" :style="{ height: '100%' }">
          <vue-row class="dashboard-row">
            <vue-col>
              <vue-carousel :height="bannerHeight" :interval="imageInterval" :autoplay="notifyEmergentFlag">
                <vue-carousel-item v-for="(item, index) in imgUrlList" :key="index">
                  <VueImage style="width:100%; height:100%; border-radius:8px" :src="item.coverUrl" fit="fill" @click="imgClick(item)" />
                </vue-carousel-item>
              </vue-carousel>
            </vue-col>
          </vue-row>
          <vue-row ref="funtionCol" class="dashboard-row" :style="{ height: functionHeight }">
            <vue-col>
              <VueText id="viy2Text_1DggMGU" ref="viy2Text_1DggMGU" class="title-span" :style="{ width: '100%', display: 'inline-block' }">
                {{ t('label.toDoList') }}
              </VueText>
              <div class="notice-div" :style="{ height: halfFunctionHeight, overflow: 'auto' }">
                <div v-for="(item, index) in toDoList" :key="index" @click="toDoClick(item)">
                  <div class="schedule-div">
                    <div class="schedule-label-div">
                      {{ t(item.name) }}
                    </div>
                    <div class="schedule-qty-div">
                      {{ item.count }}
                      <!-- <span style="font-size: 15px; display: inline; font-weight: lighter;">
{{ t('label.records') }}
</span> -->
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <VueText id="viy2Text_a7PzRM" ref="viy2Text_a7PzRM" class="title-span" :style="{ width: '100%', display: 'inline-block', marginTop: '10px' }">
                  {{ t('label.frequentlyUsedMenu') }}
                  <VueIcon id="viy2Icon_10N8yO" ref="viy2Icon_10N8yO">
                    <IconEdit @click="userMenuSettingClick" />
                  </VueIcon>
                </VueText>
              </div>
              <div class="notice-div" :style="{ height: halfFunctionHeight, overflow: 'auto' }">
                <div v-for="(item, index) in commonMenuList" :key="index" @click="menuClick(item)">
                  <div class="function-row">
                    <div style="font-size: 15px;">
                      {{ t(item.menuNm) }}
                    </div>
                  </div>
                </div>
              </div>
            </vue-col>
          </vue-row>
        </vue-col>
        <vue-col :span="11">
          <vue-row class="dashboard-row" :style="{ height: bannerHeight }">
            <vue-col>
              <VueText id="viy2Text_a7PzRZ" ref="viy2Text_a7PzRZ" class="title-span" :style="{ width: '100%', display: 'inline-block' }">
                {{ t('label.remindList') }}
              </VueText>
              <div class="notice-div" :style="{ height: bannerLowHeight }">
                <div v-for="(item, index) in remindList" :key="index" @click="remindClick(item)">
                  <vue-row>
                    <vue-col :span="24" class="notice-li">
                      <div class="notice-point" />
                      <div class="notice-text-left">
                        <!-- {{ item.title }} -->
                        <span class="scrolling-text">{{ item.title }}</span>
                      </div>
                      <div class="notice-text-right">
                        {{ item.date }}
                      </div>
                    </vue-col>
                  </vue-row>
                </div>
              </div>
            </vue-col>
          </vue-row>
          <vue-row class="dashboard-row" :style="{ height: functionHeight }">
            <vue-col :span="24">
              <VueText id="viy2Text_1DggMGU" ref="viy2Text_1DggMGU" class="title-span" :style="{ width: '100%', display: 'inline-block' }">
                {{ t('label.reservationRemind') }}
              </VueText>
              <div v-if="reservationRemindData" class="container">
                <div class="confirm" @click="reservationClick(reservationRemindData.confirmType, reservationRemindData.today)">
                  <div>{{ t('label.confirmToday') }}</div>
                  <div>{{ reservationRemindData.todayConfirmed }}</div>
                </div>
                <div class="confirm" @click="reservationClick(reservationRemindData.confirmType, reservationRemindData.tomorrow)">
                  <div>{{ t('label.confirmTomorrow') }}</div>
                  <div>{{ reservationRemindData.tomorrowConfirmed }}</div>
                </div>
                <div class="confirm" @click="reservationClick(reservationRemindData.waitType, reservationRemindData.today)">
                  <div>{{ t('label.waitForConfirmToday') }}</div>
                  <div>{{ reservationRemindData.todayWaitConfirmed }}</div>
                </div>
                <div class="confirm" @click="reservationClick(reservationRemindData.waitType, reservationRemindData.tomorrow)">
                  <div>{{ t('label.waitForConfirmTomorrow') }}</div>
                  <div>{{ reservationRemindData.tomorrowWaitConfirmed }}</div>
                </div>
              </div>
            </vue-col>
          </vue-row>
        </vue-col>
      </vue-row>
    </div>
    <!-- <div class="outer-container">
<div class="container">
<div class="left"> confirm </div>
<div class="right">
<div class="confirm">
<div class="confirm-label-div"> today </div>
<div class="confirm-qty-div"> {{ reservationRemindData.todayConfirmed }} </div>
</div>
<div class="divider"></div>
<div class="confirm">
<div class="confirm-label-div"> tomorrow </div>
<div class="confirm-qty-div"> {{ reservationRemindData.tomorrowConfirmed }} </div>
</div>
</div>
</div>
<div class="container">
<div class="left"> wait confirm </div>
<div class="right">
<div class="confirm">
<div class="confirm-label-div"> today </div>
<div class="confirm-qty-div"> {{ reservationRemindData.todayWaitConfirmed }} </div>
</div>
<div class="divider"></div>
<div class="confirm">
<div class="confirm-label-div"> tomorrow </div>
<div class="confirm-qty-div"> {{ reservationRemindData.tomorrowWaitConfirmed }} </div>
</div>
</div>
</div>
</div> -->
    <!-- END CUSTOM DIV CODE -->
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
</style>
