import i18n from "@/i18n";
const t = i18n.global.t;

import { round } from 'lodash-es';

import { warn_msg, formatPrice} from '@/pj-commonutils.js';
import { ServiceCategory } from '@/constants/pj-constants.js';

export const inputNaN = (value) => {
    return (value == null || isNaN(value) );
}
// PARTS计算价格金额
export const calSellingPrice = (row, createForEmployeeFlag, hasEmployeeCd) => {
    var stdPrice = row.standardPrice;
    var taxRate = row.taxRate;
    var discount = row.discount;
    var discountAmtVAT = row.discountAmt;
    var sellingPrice = 0;
    var specialPrice = row.specialPrice;
    // 内部购买则先*0.75
    if ('1' === createForEmployeeFlag && hasEmployeeCd) {
        stdPrice = stdPrice * 0.75;
    }
    // 如果税率没值则默认为10
    if (!taxRate) {
        taxRate = 10;
    }
    if (discountAmtVAT && discount) { // 都没值
        sellingPrice = stdPrice * (100 - discount) * (100 + taxRate) / 10000 - discountAmtVAT;
    } else if (discountAmtVAT && !discount) { // 折扣金额有值
        sellingPrice = stdPrice * (100 + taxRate) / 100 - discountAmtVAT;
    } else if (!discountAmtVAT && discount) { // 折扣率有值
        sellingPrice = stdPrice * (100 - discount) * (100 + taxRate) / 10000;
    } else if(specialPrice) {
        sellingPrice = specialPrice;
    } else {
        sellingPrice = stdPrice * (100 + taxRate) / 100;
    }
    if (inputNaN(row.qty)) {
        row.qty = 1;
    }
    if (inputNaN(sellingPrice) && stdPrice == undefined) {
        warn_msg(t('label.standardPriceNotExistLines'));
    }
    var orderQty = row.qty;
    var orderAmt = orderQty * sellingPrice;

    row.taxRate = taxRate;
    row.sellingPrice = round(sellingPrice);
    row.amount = round(orderAmt);
}
// JobGrid: ['discountAmt','discount','specialPrice']
export const calPriceAndAmtOnJobGrid = (row, property) => {
    switch(property) {
        case 'discount':
            updPriceByDiscount(row);
            break;
        case 'discountAmt':
            updPriceByDiscountAmt(row);
            break;
        case 'specialPrice':
           updPriceBySpecial(row);
           break;
    }
}
// 按settleTypeId合计应收款
export const sumBySettleType = ($table, GRID, evFlag) => {
    var newSum = null;
    if ($table) {
        var tableData = $table.getTableData().fullData;
        newSum = tableData.reduce((acc, item) => {
            if (!item.settleTypeId || item.settleTypeId == undefined) {
                return {};
            }
            if (item.settleTypeId !== 'SUM') {
                if (GRID == 'PARTS') {
                    let sellingPrice  = item.sellingPrice;
                    if (evFlag && evFlag == 'Y' && item.batteryFlag && item.batteryFlag == "Y") {
                        sellingPrice = 0;
                    }
                    acc[item.settleTypeId] = (acc[item.settleTypeId] || 0) + (sellingPrice * item.qty);
                    // acc[item.settleTypeId] = (acc[item.settleTypeId] || 0) + (item.sellingPrice * item.qty);
                } else {
                    acc[item.settleTypeId] = (acc[item.settleTypeId] || 0) + item.sellingPrice;
                }
                return acc;
            }
        }, {});
    }

    return newSum;
}
// 应收款合计列重计算
export const sumArRowTotal = (row, newSum, GRID) => {
    var settleValue = !newSum? 0 : newSum[row.settleTypeId];
    if (row.settleTypeId !== 'SUM') {
        if (settleValue) {
            switch(GRID) {
                case 'JOB': row.jobDetail= settleValue; break;
                case 'PARTS': row.partDetail= settleValue; break;
                case 'BATTERY': row.batteryDetail= settleValue; break;
            }
        }
        row.total = row.jobDetail + row.partDetail + row.batteryDetail;
    } else {
        // 应付明细行尾合计
        row.jobDetail = 0; row.partDetail = 0; row.batteryDetail = 0; row.total = 0;
    }
}
export const setPartDetailCategory = (row, category, serviceDemand, serviceDemandId) => {
    var symptomCode = "99";
    if ([ServiceCategory.FREECOUPON, ServiceCategory.FREESERVICE].includes(category)) {
        row.serviceCategoryId = ServiceCategory.REPAIR;
        row.serviceDemand = '';
        row.serviceDemandId = '';
    } else if ([ServiceCategory.SPECIALCLAIM].includes(category)) {
        row.serviceCategoryId = ServiceCategory.SPECIALCLAIM;
        row.serviceDemand = serviceDemand;
        row.serviceDemandId = serviceDemandId;
        row.symptomId = symptomCode;
    } else {
        row.serviceCategoryId = category;
        row.serviceDemand = serviceDemand;
        row.serviceDemandId = serviceDemandId;
    }
}

// JOB表尾合计
export const sumSellingPrice = (data, filed) => {
    let sum = 0;
    data.forEach((item)=>{
        sum += item.sellingPrice;
    })
    return formatPrice(sum);
}
// PARTS表尾合计
export const sumAmount = (data, filed) => {
    let sum = 0;
    data.forEach((item)=>{
        sum += item.amount;
    })
    return formatPrice(sum);
}
/** 更新价格金额 */
// 根据SpecialPrice
const updPriceBySpecial = (row) => {
    if (!inputNaN(row.specialPrice)) {
        row.discount = null;
        row.discountAmt = null;
        row.sellingPrice = round(row.specialPrice);
    } else {
        if (inputNaN(row.discount) && inputNaN(row.standardPrice)) {
            row.sellingPrice = null;
            row.amount = null;
        } else if (inputNaN(row.discount) && !inputNaN(row.standardPrice)) {
            row.sellingPrice = row.standardPrice;
        } else {
            row.sellingPrice = 0;
        }
    }
}
// 根据DiscountAmt
const updPriceByDiscountAmt = (row) => {
    var discountAmt = !row.discountAmt? 0 : row.discountAmt;
    if (!inputNaN(discountAmt)) {
        row.specialPrice = null;
        var discount = inputNaN(row.discount)? 0 : row.discount;
        var calSellingPrice = row.standardPrice - discountAmt - row.standardPrice * discount /100;
        row.sellingPrice = round(calSellingPrice);
    } else {
        row.discountAmt = null;
    }
}
// 根据Discount
const updPriceByDiscount = (row) => {
    if (!inputNaN(row.discount)) {
        row.specialPrice = null;
        var discount = 100 - row.discount;
        var discountAmt = inputNaN(row.discountAmt)? 0 : row.discountAmt;
        var calSellingPrice = round(row.standardPrice * discount /100);
        var sellingPrice = calSellingPrice - discountAmt;
        row.sellingPrice = round(sellingPrice);
    } else {
        if (inputNaN(row.specialPrice) && inputNaN(row.standardPrice)) {
            row.sellingPrice = null;
        } else if (inputNaN(row.specialPrice) && !inputNaN(row.standardPrice)){
            row.sellingPrice = row.standardPrice;
        }
    }
}