import { useApi } from '@/composables/useApi';
import i18n from "@/i18n";
const t = i18n.global.t;

const DATE_VALUE_FORMAT = 'YYYYMMDD';
const DATE_FOMART = 'DD/MM/YYYY'; 

// request api
const requestApi = {
	condition: "/common/valuelist/conditionList.json",
	consumer: "/common/valuelist/consumerByUnitList.json",
	customer: "/common/valuelist/customerValueList.json",
	dealer: "/common/valuelist/dealerList.json",
	demand: "/common/valuelist/demandList.json",
	employee: "/common/valuelist/employeeList.json",
	faultCode: "/common/valuelist/faultCodeValueList.json",
	faultDescription: "/common/valuelist/faultDescriptionValueList.json",
	// faultSection: "/common/valuelist/faultSectionList.json",
	location: "/common/valuelist/locationList.json",
	manufacturer: "/common/valuelist/manufacturerList.json",
	model: "/common/valuelist/modelList.json",
	orderPic: "/common/valuelist/orderPicList.json",
	package: "/common/valuelist/packageList.json",
	parts: "/common/valuelist/partsList.json",
	// plate: "/common/valuelist/plateList.json",
	point: "/common/valuelist/pointList.json",
    pointMulti: "/common/valuelist/pointMultiValueList.json",
	productPackage: "/common/valuelist/productPackageList.json",
	promotion: "/common/valuelist/promotionList.json",
	section: "/common/valuelist/sectionList.json",
	supplier: "/common/valuelist/supplierList.json",
	serviceJob: "/common/valuelist/serviceJobList.json",
	serviceJobByModel: "/common/valuelist/serviceJobByModelList.json",
	serviceJobByModelType: "/common/valuelist/serviceJobByModelTypeList.json",
	serviceSp: "/common/valuelist/serviceSpList.json",
	userRole: "/common/valuelist/userRoleList.json",
	user: "/common/valuelist/userList.json",
}
export const emptyData = {
  total: 0,
  list: [ ],
};
/** serviceSp */
export const serviceSp_column = [
	{ field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
	{ field: 'bulletinNo', title: t('label.bulletinNo'), width: 120, sortable:true },
	{ field: 'campaignNo', title: t('label.campaignNo'), width: 130, sortable:true },
	{ field: 'campaignTitle', title: t('label.campaignTitle'), width: 150, showOverflow: "tooltip", sortable:true },
	{ field: 'description', title: t('label.description'), width: 130, sortable:true },
	{ field: 'effectiveDate', title: t('label.effectDate'), width: 130, columnType: 'VueDateTimeColumn', sortable:true, editRender: { attrs: { textAlign: 'center', valueFormat: DATE_VALUE_FORMAT, format: DATE_FOMART } }, hiddenInPopover: true },
	{ field: 'expiredDate', title: t('label.expiredDate'), width: 130, columnType: 'VueDateTimeColumn', sortable:true, editRender: { attrs: { textAlign: 'center', valueFormat: DATE_VALUE_FORMAT, format: DATE_FOMART } }, hiddenInPopover: true },
];
export const serviceSp_pop_condition = [
//   {compType: 'VueInput',field: 'arg0',label: t('label.campaignNo'), clearable: true, style: { width: '150px' }},
];
export const serviceSp_query_method = ({ value, pageParams }) => {
    return request(requestApi.serviceSp, {
        data: {
            arg0: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const serviceSp_pop_query_method = ({ arg0, pageParams }) => {
    return request(requestApi.serviceSp, {
        data: {
            arg0: arg0,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** serviceJobByModelType */
export const serviceJob_model_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true },
  {field: 'code',title: t('label.serviceJob'), width:150, sortable:true},
  {field: 'name',title: t('label.serviceJobName'), sortable:true},
  {field: 'manHours',title: t('label.stdMenHour'), sortable:true},
];
export const serviceJob_model_pop_condition = [
  {compType: 'VueInput',field: 'serviceJobCd',label: t('label.serviceJob'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'serviceJobNm',label: t('label.serviceJobName'),clearable: true, style: { width: '150px' }},
];
export const serviceJobByModelType_query_method = ({ value, pageParams }) => {
    return request(requestApi.serviceJobByModelType, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const serviceJobByModelType_pop_query_method = ({ serviceJobCd, serviceJobNm, pageParams }) => {
    return request(requestApi.serviceJobByModelType, {
        data: {
            serviceJobCd: serviceJobCd,
            serviceJobNm: serviceJobNm,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const serviceJobByModel_query_method = ({ value, pageParams }) => {
    return request(requestApi.serviceJobByModel, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const serviceJobByModel_pop_query_method = ({ serviceJobCd, serviceJobNm, pageParams }) => {
    return request(requestApi.serviceJobByModel, {
        data: {
            serviceJobCd: serviceJobCd,
            serviceJobNm: serviceJobNm,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** Consumer */
export const consumer_pop_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'consumerType', title: t('label.consumerType'), width:200, hiddenInPopover: true, sortable:true },
  {field: 'mobilePhone', title: t('label.mobilephone'), width:150, sortable:true},
  {field: 'consumerName', title: t('label.consumerName'), minWidth:200, sortable:true},
];
export const consumer_pop_condition = [
  {compType: 'VueInput',field: 'frameNo',label: t('label.frameNumber'), clearable: true, style: { width: '150px' }},
];
export const consumer_query_method = ({ value, pageParams }) => {
    return request(requestApi.consumer, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const consumer_pop_query_method = ({ value, pageParams }) => {
    return request(requestApi.consumer, {
        data: {
            frameNo: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** Package */
export const package_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true , sortable:true},
  {field: 'code',title: t('label.packageNumber'), width:150, sortable:true},
  {field: 'name',title: t('label.packageName'), sortable:true}
];
export const package_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.packageNumber'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.packageName'),clearable: true, style: { width: '150px' }},
];
export const package_query_method = ({ value, pageParams }) => {
    return request(requestApi.package, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const package_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.package, {
        data: {
            code: code,
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** User */
export const user_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.userCode'), width:150, sortable:true},
  {field: 'name',title: t('label.userName'), sortable:true}
];
export const user_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.userCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.userName'),clearable: true, style: { width: '150px' }},
];
export const user_query_method = ({ value, pageParams }) => {
    return request(requestApi.user, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const user_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.user, {
        data: {
            code: code,
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
}; 
/** Manufacturer */
export const manufacturer_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.manufacturerCode'), width:150, sortable:true},
  {field: 'name',title: t('label.manufacturerName'), sortable:true}
];
export const manufacturer_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.manufacturerCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.manufacturerName'),clearable: true, style: { width: '150px' }},
];
export const manufacturer_query_method = ({ value, pageParams }) => {
    return request(requestApi.manufacturer, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const manufacturer_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.manufacturer, {
        data: {
            code: code,
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** Location */
export const location_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'locationNo',title: t('label.locationCode'), width:150, sortable:true},
  {field: 'locationType',title: t('label.location'), sortable:true}
];
export const location_pop_condition = [
  {compType: 'VueInput',field: 'locationNo',label: t('label.locationCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'locationType',label: t('label.location'),clearable: true, style: { width: '150px' }},
];
export const location_query_method = ({ value, pageParams }) => {
    return request(requestApi.location, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const location_pop_query_method = ({ locationNo, locationType, pageParams }) => {
    return request(requestApi.location, {
        data: {
            locationNo: locationNo,
            locationType: locationType,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** 店铺仓库 */
export const point_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.pointCode'), width:150, sortable:true},
  {field: 'name',title: t('label.pointName'), sortable:true}
];
export const point_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.pointCode'),clearable: true, style: { width: '100px' } },
  {compType: 'VueInput',field: 'name',label: t('label.pointName'),clearable: true, style: { width: '150px' } },
];
export const point_pop_query_all_method = ({ code, name, pageParams }) => {
    return request(requestApi.point, {
        data: {
            code: code, 
            name: name,
            arg0: 'ALL', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_query_all_method = ({ value, pageParams }) => {
    return request(requestApi.point, {
        data: {
            content: value, 
            arg0: 'ALL', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_pop_query_wo_method = ({ code, name, pageParams }) => {
    return request(requestApi.point, {
        data: {
            code: code, 
            name: name,
            arg0: 'WO', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_query_wo_method = ({ value, pageParams }) => {
    return request(requestApi.point, {
        data: {
            content: value, 
            arg0: 'WO', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_pop_query_consignee_method = ({ code, name, pageParams }) => {
    return request(requestApi.point, {
        data: {
            code: code, 
            name: name,
            arg0: 'CONSIGNEE', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_query_consignee_method = ({ value, pageParams }) => {
    return request(requestApi.point, {
        data: {
            content: value, 
            arg0: 'CONSIGNEE', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_pop_query_shop_method = ({ code, name, pageParams }) => {
    return request(requestApi.point, {
        data: {
            code: code, 
            name: name,
            arg0: 'SHOP', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_query_shop_method = ({ value, pageParams }) => {
    return request(requestApi.point, {
        data: {
            content: value, 
            arg0: 'SHOP', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_query_shop_all_method = ({ value, pageParams }) => {
    return request(requestApi.point, {
        data: {
            content: value, 
            arg0: 'SHOP_ALL', 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const point_query_shop_admin_method = ({ value, pageParams }) => {
    return request(requestApi.point, {
        data: {
            content: value, 
            arg0: 'SHOP', 
            arg1: 'Y',
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** Customer */
export const customer_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.customerCode'), width:150, sortable:true},
  {field: 'name',title: t('label.customerName'), sortable:true}
];
export const customer_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.customerCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.customerName'),clearable: true, style: { width: '150px' }},
];
export const customer_query_method = ({ value, pageParams }) => {
    return request(requestApi.customer, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const customer_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.customer, {
        data: {
            code: code, 
            name: name, 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** employee */
export const employee_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.employeeCode'), width:150, sortable:true},
  {field: 'name',title: t('label.employeeName'), sortable:true}
];
export const employee_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.code'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.name'),clearable: true, style: { width: '150px' }},
];
export const employee_query_method = ({ value, pageParams }) => {
    return request(requestApi.employee, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const employee_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.employee, {
        data: {
            code: code, 
            name: name, 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** Model */
export const model_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.modelCode'), width:150, sortable:true},
  {field: 'name',title: t('label.modelName'), sortable:true}
];
export const model_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.modelCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.modelName'),clearable: true, style: { width: '150px' }},
];
export const model_query_method = ({ value, pageParams }) => {
    return request(requestApi.model, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const model_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.model, {
        data: {
            code: code, 
            name: name, 
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** Parts */
export const parts_column = [
	 {field: 'codeFmt',title: t('label.parts'), width:150, sortable:true}
	,{field: 'name',title: t('label.partsName'), sortable:true}
];
export const parts_pop_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, sortable:true },
  {field: 'brand',title: t('label.brand'), width:100, sortable:true},
  {field: 'codeFmt',title: t('label.code'), width:150, sortable:true},
  {field: 'name',title: t('label.partsName'), minWidth:150, sortable:true},
  {field: 'salLotSize',title: t('label.salesLot'), width:100, sortable:true},
  {field: 'batteryFlag',title: t('label.batteryFlag'), width:120, sortable:true},
  {field: 'largeGroup',title: t('label.largeCategory'), width:150, sortable:true},
  {field: 'middleGroup',title: t('label.middleCategory'), width:150, sortable:true},
];
// 废弃，画面自定义
export const parts_pop_condition = [

]
export const parts_query_method = ({ value, pageParams }) => {
    if (value) {
        return request(requestApi.parts, {
            data: {
                content: value,
                pageSize: pageParams.pageSize,
                currentPage: pageParams.currentPage
            },
            method: 'post'
        });
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(emptyData);
            }, 200);
        }); 
    }
};
export const parts_pop_query_method = ({ code, batteryFlag, prodCtg, brandId, pageParams }) => {
    if(!code && !prodCtg && !brandId && batteryFlag != 'Y') {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(emptyData);
            }, 200);
        }); 
    } else {
        return request(requestApi.parts, {
            data: {
                code: code, 
                batteryFlag: batteryFlag, 
                brandId: brandId, 
                prodCtg: prodCtg,
                pageSize: pageParams.pageSize,
                currentPage: pageParams.currentPage
            },
            method: 'post'
        });
    }
};
/** Supplier */
export const supplier_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.supplierCode'), width:150, sortable:true},
  {field: 'name',title: t('label.supplierName'), sortable:true}
];
export const supplier_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.supplierCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.supplierName'),clearable: true, style: { width: '150px' }},
];
export const supplier_query_method = ({ value, pageParams }) => {
    return request(requestApi.supplier, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const supplier_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.supplier, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** Dealer */
export const dealer_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.dealerCode'), width:150, sortable:true},
  {field: 'name',title: t('label.dealerName'), sortable:true}
];
export const dealer_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.dealerCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.dealerName'),clearable: true, style: { width: '150px' }},
];
export const dealer_query_method = ({ value, pageParams }) => {
    return request(requestApi.dealer, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const dealer_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.dealer, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** condition */
export const condition_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.conditionCode'), width:150, sortable:true},
  {field: 'name',title: t('label.conditionName'), sortable:true}
];
export const condition_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.conditionCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.conditionName'),clearable: true, style: { width: '150px' }},
];
export const condition_query_method = ({ value, pageParams }) => {
    return request(requestApi.condition, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const condition_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.condition, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** ServiceJob */
export const serviceJob_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.serviceJobCode'), width:150, sortable:true},
  {field: 'name',title: t('label.serviceJobName'), sortable:true}
];
export const serviceJob_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.serviceJobCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.serviceJobName'),clearable: true, style: { width: '150px' }},
];
export const serviceJob_query_method = ({ value, pageParams }) => {
    return request(requestApi.serviceJob, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const serviceJob_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.serviceJob, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** demand */
export const demand_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'serviceDemand',title: t('label.serviceDemand'), width:150, sortable:true},
  {field: 'fromDate', columnType: 'VueDateTimeColumn', sortable:true, editRender: { attrs: { textAlign: 'center', valueFormat: DATE_VALUE_FORMAT, format: DATE_FOMART } }, title: t('label.fromDate')},
  {field: 'toDate', columnType: 'VueDateTimeColumn', sortable:true, editRender: { attrs: { textAlign: 'center', valueFormat: DATE_VALUE_FORMAT, format: DATE_FOMART } }, title: t('label.toDate')}
];
export const demand_pop_condition = [
  //{compType: 'VueInput',field: 'code',label: t('label.code'),clearable: true,},
  //{compType: 'VueInput',field: 'name',label: t('label.demand'),clearable: true,},
];
export const demand_query_method = ({ value, pageParams }) => {
    return request(requestApi.demand, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const demand_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.demand, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** productPackage */
export const productPackage_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.packageNumber'), width:150, sortable:true},
  {field: 'name',title: t('label.packageName'), sortable:true}
];
export const productPackage_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.packageNumber'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.packageName'),clearable: true, style: { width: '150px' }},
];
export const productPackage_query_method = ({ value, pageParams }) => {
    return request(requestApi.productPackage, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const productPackage_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.productPackage, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** section */
export const section_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.sectionCode'), width:150, sortable:true},
  {field: 'name',title: t('label.sectionName'), sortable:true}
];
export const section_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.sectionCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.sectionName'),clearable: true, style: { width: '150px' }},
];
export const section_query_method = ({ value, pageParams }) => {
    return request(requestApi.section, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const section_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.section, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** faultSection */
export const faultSection_column = [
  { field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.faultSectionCode'), width:150, sortable:true},
  {field: 'name',title: t('label.faultSectionName'), sortable:true}
];
export const faultSection_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.faultSectionCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.faultSectionName'),clearable: true, style: { width: '150px' }},
];
export const faultSection_query_method = ({ value, pageParams }) => {
    return request(requestApi.faultSection, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const faultSection_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.faultSection, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** userRole */
export const userRole_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width:50, hiddenInPopover: true, sortable:true },
  {field: 'roleCode',title: t('label.roleCode'), sortable:true, width:150},
  {field: 'roleName',title: t('label.roleName'), sortable:true},
];
export const userRole_pop_condition = [
  {compType: 'VueInput',field: 'roleCode',label: t('label.roleCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'roleName',label: t('label.roleName'),clearable: true, style: { width: '150px' }},
];
export const userRole_query_method = ({ value, pageParams }) => {
    return request(requestApi.userRole, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const userRole_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.userRole, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** promotion */
export const promotion_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true , sortable:true},
  {field: 'code',title: t('label.promotionCode'), width:150, sortable:true},
  {field: 'name',title: t('label.promotionName'), sortable:true}
];
export const promotion_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.promotionCode'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.promotionName'),clearable: true, style: { width: '150px' }},
];
export const promotion_query_method = ({ value, pageParams }) => {
    return request(requestApi.promotion, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const promotion_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.promotion, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** plate */
export const plate_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.code'), width:150, sortable:true},
  {field: 'name',title: t('label.plate'), sortable:true}
];
export const plate_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.code'),clearable: true, style: { width: '150px' }},
  {compType: 'VueInput',field: 'name',label: t('label.plate'),clearable: true, style: { width: '150px' }},
];
export const plate_query_method = ({ value, pageParams }) => {
    return request(requestApi.plate, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const plate_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.plate, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** orderPic */
export const orderPic_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.orderPicCode'), width:150, sortable:true},
  {field: 'name',title: t('label.orderPicName'), sortable:true}
];
export const orderPic_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.orderPicCode'),clearable: true, style: { width: '100px' } },
  {compType: 'VueInput',field: 'name',label: t('label.orderPicName'),clearable: true, style: { width: '150px' } },
];
export const orderPic_query_method = ({ value, pageParams }) => {
    return request(requestApi.orderPic, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const orderPic_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.orderPic, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** faultCode */
export const faultCode_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.faultCode'), width:150, sortable:true},
  {field: 'name',title: t('label.faultName'), sortable:true}
];
export const faultCode_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.faultCode'),clearable: true, style: { width: '100px' } },
  {compType: 'VueInput',field: 'name',label: t('label.faultName'),clearable: true, style: { width: '150px' } },
];
export const faultCode_query_method = ({ value, pageParams }) => {
    return request(requestApi.faultCode, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const faultCode_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.faultCode, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
/** faultDescription */
export const faultDescription_column = [
  {field: 'index', columnType: 'VueIndexColumn', title: '#', width: 50, hiddenInPopover: true, sortable:true },
  {field: 'code',title: t('label.conditionCode'), width:150, sortable:true},
  {field: 'name',title: t('label.description'), sortable:true}
];
export const faultDescription_pop_condition = [
  {compType: 'VueInput',field: 'code',label: t('label.conditionCode'),clearable: true, style: { width: '100px' } },
  {compType: 'VueInput',field: 'name',label: t('label.description'),clearable: true, style: { width: '150px' } },
];
export const faultDescription_query_method = ({ value, pageParams }) => {
    return request(requestApi.faultDescription, {
        data: {
            content: value,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};
export const faultDescription_pop_query_method = ({ code, name, pageParams }) => {
    return request(requestApi.faultDescription, {
        data: {
            code: code, 
            name: name,
            pageSize: pageParams.pageSize,
            currentPage: pageParams.currentPage
        },
        method: 'post'
    });
};