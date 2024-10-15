import i18n from "@/i18n";
const t = i18n.global.t;
/**
 * 此文件是项目共用的JavaScript定义文件
 */
// export const datePickerShortcuts = [];
export const datePickerShortcuts = [
  {
    text: t('calendar.todayText'),
    value: new Date(),
  },
  {
    text: t('calendar.yesterdayText'),
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: t('calendar.lastMonthText'),
    value: () => {
      const date = new Date();
      date.setMonth(date.getMonth() - 1);
      return date;
    },
  },
];
/** partsNo formatter */
export const formatPartNo = (inputObj) => {
    if (typeof(inputObj) == "string") {
        if (!isPartNo(inputObj)) {
            return inputObj;
        }
        return toAddHyphenPartsNo(getSimpleFormat(inputObj));
    }
    if (typeof(inputObj) == "object") {
        if(!isPartNo(inputObj)) {
            return;
        }
        inputObj.value = toAddHyphenPartsNo(getSimpleFormat(inputObj.value));
    }
}
export const unformatPartNo = (inputObj) => {
    if (typeof(inputObj) == "string") {
        if(inputObj==null||inputObj=="") return "";
        return trim( fill2ZeroWhenLengthTen( getSimpleFormat(inputObj) ) );
    }
    if (typeof(inputObj) == "object") {
        if(inputObj.value==null||inputObj.value=="") return;
        inputObj.value = fill2ZeroWhenLengthTen( getSimpleFormat(inputObj.value) );
        inputObj.select();
        return;
    }
}
// 无效输入值
export const isNoValue = (value) => {
	return value === undefined || value === null || value === "";
}
// 编码格式化：英文+数字
export const formatCodeInput = (value) => {
    if (!!value) {
        value = value.replace(/[^a-zA-Z0-9]/g, ''); // 移除非英文和数字的字符
        value = value.toUpperCase(); // 转换为大写
    }
    return value;
}
// 大写
export const formatUpper = (value) => {
    if (value) {
        return value.toUpperCase();
    }
    return value;
}
// 保留两位小数
export const formatNumber2Decimal = (value) => {
    var result = value;
    if (value != null && !isNaN(value)) {
        result = Number(value).toFixed(2);
    } 
    return fmtNumber(result, 2);
}
// 保留一位小数
export const formatNumberDecimal = (value) => {
    var result = value;
    if (value != null && !isNaN(value)) {
        result = Number(value).toFixed(1);
    } 
    return fmtNumber(result, 1);
}
// 单价
export const formatPrice = (value) => {
    var result = value;
    if (value != null && !isNaN(value)) {
        result = Number(value).toFixed(0);
    } 
    return fmtNumber(result, 0);
}
// 金额
export const formatAmount = (value) => {
    var result = value;
    if (value != null && !isNaN(value)) {
        result = Number(value).toFixed(0);
    } 
    return fmtNumber(result, 0);
}
// 成本
export const formatCost = (value) => {
    var result = value;
    if (value != null && !isNaN(value)) {
        result = Number(value).toFixed(2);
    } 
    return fmtNumber(result, 2);
}
// 数量
export const formatQty = (value) => {
    var result = value;
    if (value != null && !isNaN(value)) {
        result = Number(value).toFixed(0);
    } 
    return fmtNumber(result, 0);
}
// 折扣
export const formatDiscount = (value) => {
    var result = value;
    if (value != null && !isNaN(value)) {
        result = Number(value).toFixed(2);
    } 
    return fmtNumber(result, 2);
}
// 消息提示
export const warn_msg = (msg) => {
    VueMessage({ message: msg, type: 'error', center: true, position: 'top-center'});
}
export const error_msg = (msg) => {
    VueMessage({ message: msg, type: 'error', center: true, position: 'top-center'});
}
export const info_msg = (msg) => {
    VueMessage({ message: msg, type: 'info', center: true, position: 'top-center'});
}
export const success_msg = (msg) => {
    VueMessage({ message: msg, type: 'success', center: true, position: 'top-center'});
}
// 对话框消息
export const alert_msg = (msg) => {
    VueMessageBox.alert(msg, t('label.warningMessage'), { confirmButtonText: t('label.know') });
}
// 清空表单字段值
export const clearFormData = (formData) => {
    for (let key in formData) {
        formData[key] = '';
    }
}

// 判断是否部品编码
const isPartNo = (inputObj) => {
    if (typeof(inputObj) == "string") {
        inputObj = inputObj.replace(/^[ ]+/, "");
        inputObj = inputObj.replace(/[ ã]+$/, "");
        if (inputObj.length == 0) {
            return true;
        }
        if (inputObj.match(/[^0-9a-z\-]/ig)) {
            return false;
        }
        var val = removeString(inputObj, "-");
        if (val.length != 10 && val.length != 12) {
            return false;
        }
        return true;
    }
    if (typeof(inputObj) == "object") {
        if (inputObj == null) {
            return false;
        }
        trimming(inputObj);
        if (inputObj.value.length == 0) {
            return true;
        }
        if (inputObj.value.match(/[^0-9a-z\-]/ig)) {
            return false;
        }
        var val = removeString(inputObj.value, "-");
        if (val.length != 10 && val.length != 12) {
            return false;
        }
        return true;
    }
}
const removeString = (val, del) => {
    return replaceString(val, del, "");
}
const replaceString = (val, oldVal, newVal) => {
    var re = new RegExp(oldVal, "ig");
    return val.replace(re, newVal);
}
const trim = (s) => {
    return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
}
const trimming = (obj) => {
    obj.value = obj.value.replace( /^[ ]+/, "" );
    obj.value = obj.value.replace( /[ ]+$/, "" );
}
const fmtNumber = (value, digits) => {
    if (value == undefined || value == null) {
        return '';
    }
    var number = parseFloat(value);
    
    return number.toLocaleString('en-US', { style: 'decimal', minimumFractionDigits: digits, maximumFractionDigits: digits });
};
const toAddHyphenPartsNo = (str) => {
    var partNo = str.substr(0, 10);
    var colorCd = "";
    var result = "";
    if (str.length == 12) {
        colorCd = str.substring(10, 12);
    }
    if (str.substr(0,1)==9) {
        if(str.length > 5) {
            result = str.substr(0,5)+"-"+str.substr(5,5);
        }else{
            result = str;
        }
    } else {
        if(str.length > 8) {
            result = str.substr(0,3)+"-"+str.substr(3,5)+"-"+str.substr(8,2);
        } else if(str.length > 3) {
            result = str.substr(0,3)+"-"+str.substr(3,5);
        } else {
            result = str;
        }
    }
    if (trim(colorCd) != "" && trim(colorCd) != "00") {
        result = result + "-" + trim(colorCd);
    }
    return result;
}
const fill2ZeroWhenLengthTen = (value) => {
    var result = value;
    if (result.length == 10) {
        result += "00";
    }
    return result;
}
const getSimpleFormat = (formatStr) => {
    formatStr = formatStr.replace(/[\/]/g,"");
    formatStr = formatStr.replace(/[-]/g,"");
    return formatStr ;
}