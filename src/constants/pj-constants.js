export const USE_TYPE = "Use Type";
export const PAGE_SIZE = 20;
export const YES_NO_FLAG = {
	YES:    "Y",
	NO:     "N"
}
export const DECIMAL_PLACE = {
	NUMBER:     2,
	QTY:        0,
	PRICE:      2,
	AMOUNT:     3,
}
export const DefaultDate = {
	MAX_DATE:   "2099-12-31",
	MAX_TIME:   "23:59:59",
	MIN_TIME:   "00:00:00"
}
export const DateFormat = {
	DEFAULT_DATE_FORMAT:    "yyyy/MM/dd",
	DB_DATE_FORMAT_YMD:     "yyyyMMdd",
	DB_DATE_FORMAT_HM:      "HHmm",
	DB_DATE_FORMAT_H_M:     "HH:mm"
}
export const OperationStatus = {
	NEW:        "NEW",
	UPDATE:     "UPDATE",
	DELETE:     "DELETE",
	CONFIRM:    "CONFIRM",
	CANCEL:     "CANCEL"
}
export const LocationType = {
	TENTATIVE:  "S006TENTATIVE",
	NORMAL:     "S006NORMAL",
	SERVICE:    "S006SERVICE",
	FROZEN:     "S006FROZEN"
}
export const ServiceCategory = {
	FREESERVICE:    "S012FREESERVICE",
	FREECOUPON:     "S012FREECOUPON",
	QUICKSERVICE:   "S012QUICKSERVICE",
	CLAIM:          "S012CLAIM",
	SPECIALCLAIM:   "S012SPECIALCLAIM",
	REPAIR:         "S012REPAIR",
    CLAIM_BATTERY:  "S012CLAIMBATTERY"
}
export const SettleType = {
	S012FREESERVICE:    "S013SHOP",
	S012REPAIR:         "S013CUSTOMER",
	S012PDI:            "S013FACTORY",
	S012FREECOUPON:     "S013FACTORY",
	S012QUICKSERVICE:   "S013CUSTOMER",
	S012CLAIM:          "S013FACTORY",
	S012SPECIALCLAIM:   "S013FACTORY",
	S012CLAIMBATTERY:   "S013FACTORY"
}
export const ServiceOrderStatus = {
	NEW:            "S032NEW",
	WAITFORSETTLE:  "S032WAITFORSETTLE",
	COMPLETED:      "S032COMPLETED",
	CANCELLED:      "S032CANCELLED"
}
export const RequestStatus = {
	INFOR_ECEIVED: "S028INFORECEIVED",
	CONFIRMED: "S028CONFIRMED",
	CONFIRM_ISSUED: "S028CONFIRMISSUED",
	STATEMENT_RECEIPT: "S028STATEMENTRECEIPT"
}
export const PurchaseOrderStatus = {
	CODE_ID:        "S042",
	SPONPURCHASE:   "S042SPONPURCHASE",
	SPONRECEIVING:  "S042SPONRECEIVING"
}
export const WarrantyPolicyType = {
	OLD:        "S046OLDWARRANTYPOLICY",
	BIGBIKE:    "S046BIGBIKEWARRANTYPOLICY",
	NEW:        "S046NEWWARRANTYPOLICY",
	EV:         "S046EVWARRANTYPOLICY",
}
export const AdjustmentType = {
	NORMALADJUSTMENT:   "S069NORMALADJUSTMENT",
	ADJUSTMENTTOFROZEN: "S069ADJUSTMENTTOFROZEN"
}
export const YamahaBrand = [1, 8];
export const OrderType = {
	PurchaseOrder: "S082SPPO",
	SalesOrder: "S082SPSO",
	ServiceOrder: "S082SV",
	ServiceFor0KMMC: "S082SVOD0KM",
	BatteryClaim: "S082SVODBATTERY"
}