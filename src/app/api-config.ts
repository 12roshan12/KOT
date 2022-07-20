

 export const Main_API = 'https://npsas.fcgo.gov.np/npsas/';
//export const Main_API = 'http://192.168.1.69:8000/mfmis/'
//  export const Main_API = 'http://localhost:8000/mfmis/'

export const apiConfig = {
    API_URL: Main_API + 'api/',
    API_WAREHOUSE: Main_API + 'api/warehouse/',
    API_SETUP: Main_API + 'api/setup/',
    API_SECURITY: Main_API + 'api/security/',
    API_AGENCY: Main_API + 'api/agency/',
    API_RC_AGENCY: Main_API + 'api/rcagency/',
    API_Revenue: Main_API + 'api/revenue/',
    API_TRADE: Main_API + 'api/trade/',
    API_MASTER: Main_API + 'api/master/',
    API_EBP: Main_API + 'api/ebp/',
    API_EBPP: Main_API + 'api/ebpp/',
    API_RCRECEIPT: Main_API + 'api/receipt/',
    API_RCAGENCY: Main_API + 'api/rcagencies/',
    API_SECURITY_AGENCY: Main_API + 'api/security/user/getAgencies',
    API_BANKS: Main_API + 'api/bank/',
    API_ACTIVITY_GROUP: Main_API + 'api/activitygroup/',
    API_DONOR_GROUP: Main_API + 'api/donorgroup/',
    API_FUNCTION_GROUP: Main_API + 'api/functiongroup/',
    API_TREASURyOFFICE: Main_API + 'api/treasuryoffice/',
    API_ACCOUNT: Main_API + 'api/account/',
    API_DOMAIN: Main_API + 'api/domain/',
    API_LEVEL: Main_API + 'api/level/',
    API_MINISTRY: Main_API + 'api/ministry/',
    API_DEPARTMENT: Main_API + 'api/department/',
    API_DESIGNATION: Main_API + 'api/designation/',
    API_PRIORITY: Main_API + 'api/priority/',
    API_PROJECT: Main_API + 'api/project/',
    API_CGAS_DESIGNATION: 'account/designation',
    API_CGAS_CGAS_BILL_ENTRY: 'account/treasury/bill',
    API_CGAS_CHEQUE_TYPE: 'account/chequetype',
    API_CGAS_IDENTITY_TYPE: 'account/identitytype',
    API_CGAS_VOUCHER_TYPE: 'account/vouchertype',
    API_CGAS_ACCOUNT_BUDGET_PROJECT_BANK: "budget/bank-khata-account",
    API_CGAS_ACCOUNT_PAYEE: 'account/payee',
    API_CGAS_ACCOUNT_PAYEE_TYPE: 'account/payeetype',
    API_CGAS_ACCOUNT_DEDUCTION_PAYEE: 'account/deductionPayee',
    API_CGAS_HRIS_DEDUCTION_PAYEE: 'hris/deductionPayee',
    API_CGAS_ACCOUNT_HEAD: 'account/accounthead',
    API_CGAS_ACCOUNT_GUARANTEE_TYPE: 'account/GuaranteeType',
    API_CGAS_ACCOUNT_CONTRACTOR: 'account/contractor',
    API_CGAS_ACCOUNT_COMMITMENT: 'account/commitment',
    API_CGAS_EXP_RELEASE_LIMIT: 'account/exp-release-limit',
    API_CGAS_PRIORITY: 'account/priority',
    API_CGAS_ADVANCE_TYPE: 'account/advancetype',
    API_CGAS_ACCOUNT_TYPE: 'account/accounttype',
    API_CGAS_ACCOUNT_AGENCY_BANK: 'budget/expense-bank',
    API_CGAS_ACCOUNT_JV: 'account/jv',
    API_CGAS_ACCOUNT_PAYEE_MAP: 'account/treasury/acpayeemap',
    API_CGAS_ACCOUNT_TREASURY_JV: 'account/treasury/jv',
    API_CGAS_ACCOUNT_MISC_INCOME: 'account/misc/income',
    API_CGAS_ACCOUNT_LOOKUP_JV: 'lookup',
    API_CGAS_ACCOUNT_TREASURY_PAYMENT_BOOK: 'account/treasury/paymentbook',
    API_CGAS_ACCOUNT_TREASURY_NIKASHA_VOUCHER: 'account/treasury/nikasa',
    API_CGAS_ACCOUNT_TREASURY_PESKI_VOUCHER: 'account/treasury/peski',
    API_CGAS_ACCOUNT_TREASURY_PAYMENT_ORDER: 'account/treasury/paymentorder',
    API_CGAS_ACCOUNT_TREASURY_PAYMENT_ORDER_RESPONSE: 'account/treasury/paymentorder-response',
    API_CGAS_ACCOUNT_BUDGET_PROGRAM_ACTIVITY: 'budget/activity',
    API_CGAS_ACCOUNT_BUDGET_RELEASE: 'budget/budget-release',
    API_CGAS_ACCOUNT_BUDGET_FUND_TRANSFER: 'budget/fund-transfer',
    API_CGAS_ACCOUNT_DEPOSITE_JV: 'account/dharauti/jv',
    API_CGAS_ACCOUNT_MISC_JV: 'account/misc/jv',
    API_CGAS_ACCOUNT_MISC_ACTIVITY: 'account/misc/activity',
    API_CGAS_ACCOUNT_PROGRAM: 'account/program',
    API_CGAS_ACCOUNT_MISC_BANK_KHATA: 'account/misc/bankkhata',
    API_CGAS_AUTHROZATION: 'account/authorization',
    API_CGAS_EXPENSE_BANK_ACCOUNT: 'budget/expense-bank-account',
    API_CGAS_HRIS_EMPLOYEEINFO: 'hris/employeeinfo',
    API_CGAS_HRIS_SALARYSHEET: 'hris/salarysheet',
    API_CGAS_RMIS_REVENUE_VOUCHER: 'rmis/revenue-voucher',
    API_CGAS_LOOKUP_MONTH: 'lookup/nepalimonth',
    API_DATE: Main_API + 'api/utilities/getdate',
    API_PANINFO: Main_API + 'api/paninfo/',
    API_PURPOSES: Main_API + 'api/office-purposes/',
    API_REVENUEHEAD: Main_API + 'api/revenuehead/',
    API_EBPPAYMENT: Main_API + 'api/ebpp/',
    API_ORGNATION: Main_API + 'api/org-structure',
    API_TREASURIES: Main_API + 'api/treasuryoffice',
    API_REPORTS: Main_API + 'api/reports/',
    API_USERS_MANAGER: Main_API + 'api/users-manager/',
    API_USERS_PROFILE: Main_API + 'api/user-profile',
    API_RECEIPT_MGMT: Main_API + 'api/receipt-management/',
    API_PENSION_PENSIONER: 'pension/pensioner',
    API_PENSION_PENSIONSHEET: 'pension/pensionsheet',
    API_NOTIFICATION: Main_API + 'api/notice/index',
    API_USER: Main_API + 'api/security/user/',
    API_BUDGET_AUTHORIZATION: 'budget/authorization',
    API_BUDGET_DEDUCTION: 'budget/deduction-payee',
    API_CGAS_ACCOUNT_MISC_MULTIPLE_PAYMENT: 'account/misc/multiple-payment',
    API_CGAS_ACCOUNT_MISC_PAYMENT_BOOK: 'account/misc/paymentbook',
    API_ACCOUNT_MISC_PAYMENT_ORDER: 'misc/payment-order',
    API_ACCOUNT_MISC_PAYMENT_ORDER_RESPONSE: 'misc/payment-order-response',
    API_ACCOUNT_MISC_PAYMENT_BOOK: 'misc/payment-book',
    API__BUDGET_INTERNAL_BUDGET: 'budget/budget-source',
    API_SETUP_CONFIG_TREASURY_OFFICE: 'setup/config/treasury-office',
    API_SETUP_CONFIG_MINISTRY: 'setup/config/ministry',
    API_SETUP_CONFIG_DEPARTMENT: 'setup/config/ministry',
    API_SETUP_CONFIG_ACCOUNT: 'setup/config/account',
    API_CONFIG_SETUP_ACCOUNT_TYPE: 'setup/config/account-type',
    API_SETUP_CONFIG_CHEQUE_TYPE: 'setup/config/cheque-type',
    API_SETUP_CONFIG_IDENTITY_TYPE: 'setup/config/identity-type',
    API_SETUP_CONFIG_VOUCHER_TYPE: 'setup/config/voucher-type',
    API_BILL: 'bill',
    API_LOAN_ENTRY: 'loan/loan-entry',
    API_LOAN_PAYMENT: 'loan/payment',
    API_LOAN_FULL_PAYMENT: 'loan/fullpayment',
    API_LOAN_SUMMARY: 'loan/payment/loanSummary',
    API_RMIS_AGENCY: 'rmis',
    API_CGAS_AGENCY: 'cgas',
};



// tslint:disable-next-line:variable-name
export const global_Date = 30;
export const statusList = [
    { id: 1, name: 'New', class: 'label label-primary' },
    { id: 2, name: 'Verified', class: 'label label-success' },
    { id: 3, name: 'Void', class: 'label label-danger' },
    { id: 5, name: 'Pending', class: 'label label-warning' },


];

export const statusMasterResponseList = [
    { id: "", name: 'All', class: 'label label-default' },
    { id: 2, name: 'Register', class: 'label label-success' },
    { id: 3, name: 'Reject', class: 'label label-danger' },
    { id: 8, name: 'Voucher Creation', class: 'label label-success' },
];

export const tsaNikasaResponseList = [
    { id: "", name: 'All', class: 'label label-default' },
    { id: 0, name: 'New', class: 'label label-success' },
    { id: 1, name: 'Complete', class: 'label label-danger' },
];

export const statusDetailResponseList = [
    { id: 4, name: 'Payment In-Process', class: 'label label-warning' },
    { id: 6, name: 'Payment Success', class: 'label label-success' },
    { id: 7, name: 'Payment Reject', class: 'label label-danger' },
    { id: 10, name: 'Temporary Refund', class: 'label label-info' },
    { id: 11, name: 'Permanent Refund', class: 'label label-danger' }
];

export const statusRefundResponseList = [
    { id: 11, name: 'New', class: 'label label-danger' },
    { id: 20, name: 'Complete', class: 'label label-success' },
];

export const activeInActiveList = [
    { id: "", name: 'All', class: 'label label-success' },
    { id: 1, name: 'Active', class: 'label label-primary' },
    { id: 0, name: 'InActive', class: 'label label-danger' },
];
export const pfVerifyList = [
    { id: "", name: 'No', class: 'label label-success' },
    { id: 1, name: 'Yes', class: 'label label-primary' },
    { id: 0, name: 'No', class: 'label label-danger' },
];
export const actionLevel = [
    { id: 1, name: 'Read' },
    { id: 2, name: 'Create' },
    { id: 3, name: 'Edit' },
    { id: 4, name: 'Delete' },
    { id: 5, name: 'Report' }
];

export const menuIconList = [
    { id: 'assets/images/icons/dashboard/_content.png', formalName: 'assets/images/icons/dashboard/_content.png' },
    { id: 'assets/images/icons/dashboard/aa.png', formalName: 'assets/images/icons/dashboard/aa.png' },
    { id: 'assets/images/icons/dashboard/Absence Category_absencecategory.jpg', formalName: 'assets/images/icons/dashboard/Absence Category_absencecategory.jpg' },
    { id: 'assets/images/icons/dashboard/Absence Category_content.png', formalName: 'assets/images/icons/dashboard/Absence Category_content.png' },
    { id: 'assets/images/icons/dashboard/Absence Detail_Absencedetail.jpg', formalName: 'assets/images/icons/dashboard/Absence Detail_Absencedetail.jpg' },
    { id: 'assets/images/icons/dashboard/Absence Reason_absencereason.png', formalName: 'assets/images/icons/dashboard/Absence Reason_absencereason.png' },
    { id: 'assets/images/icons/dashboard/Absence Structure_absencestructure.png', formalName: 'assets/images/icons/dashboard/Absence Structure_absencestructure.png' },
    { id: 'assets/images/icons/dashboard/Absence Structure_entity.jpg', formalName: 'assets/images/icons/dashboard/Absence Structure_entity.jpg' },
    { id: 'assets/images/icons/dashboard/absencecategory.jpg', formalName: 'assets/images/icons/dashboard/absencecategory.jpg' },
    { id: 'assets/images/icons/dashboard/Absencedetail.jpg', formalName: 'assets/images/icons/dashboard/Absencedetail.jpg' },
    { id: 'assets/images/icons/dashboard/absencereason.png', formalName: 'assets/images/icons/dashboard/absencereason.png' },
    { id: 'assets/images/icons/dashboard/AbsenceReason_NAVLoc_aa.png', formalName: 'assets/images/icons/dashboard/AbsenceReason_NAVLoc_aa.png' },
    { id: 'assets/images/icons/dashboard/absencestructure.png', formalName: 'assets/images/icons/dashboard/absencestructure.png' },
    { id: 'assets/images/icons/dashboard/ad.jpg', formalName: 'assets/images/icons/dashboard/ad.jpg' },
    { id: 'assets/images/icons/dashboard/applied.png', formalName: 'assets/images/icons/dashboard/applied.png' },
    { id: 'assets/images/icons/dashboard/apply.png', formalName: 'assets/images/icons/dashboard/apply.png' },
    { id: 'assets/images/icons/dashboard/Attendance Logs_NAVMenu_ad.jpg', formalName: 'assets/images/icons/dashboard/Attendance Logs_NAVMenu_ad.jpg' },
    { id: 'assets/images/icons/dashboard/AttendanceApprove.png', formalName: 'assets/images/icons/dashboard/AttendanceApprove.png' },
    { id: 'assets/images/icons/dashboard/Bank_df.jpg', formalName: 'assets/images/icons/dashboard/Bank_df.jpg' },
    { id: 'assets/images/icons/dashboard/BankDetail_aa.png', formalName: 'assets/images/icons/dashboard/BankDetail_aa.png' },
    { id: 'assets/images/icons/dashboard/bn.png', formalName: 'assets/images/icons/dashboard/bn.png' },
    { id: 'assets/images/icons/dashboard/cc.jpg', formalName: 'assets/images/icons/dashboard/cc.jpg' },
    { id: 'assets/images/icons/dashboard/de.png', formalName: 'assets/images/icons/dashboard/de.png' },
    { id: 'assets/images/icons/dashboard/Device.png', formalName: 'assets/images/icons/dashboard/Device.png' },
    { id: 'assets/images/icons/dashboard/df.jpg', formalName: 'assets/images/icons/dashboard/df.jpg' },
    { id: 'assets/images/icons/dashboard/emploan.png', formalName: 'assets/images/icons/dashboard/emploan.png' },
    { id: 'assets/images/icons/dashboard/employins.png', formalName: 'assets/images/icons/dashboard/employins.png' },
    { id: 'assets/images/icons/dashboard/entity.jpg', formalName: 'assets/images/icons/dashboard/entity.jpg' },
    { id: 'assets/images/icons/dashboard/facility.png', formalName: 'assets/images/icons/dashboard/facility.png' },
    { id: 'assets/images/icons/dashboard/fisyear.png', formalName: 'assets/images/icons/dashboard/fisyear.png' },
    { id: 'assets/images/icons/dashboard/gh.png', formalName: 'assets/images/icons/dashboard/gh.png' },
    { id: 'assets/images/icons/dashboard/icon-extras.png', formalName: 'assets/images/icons/dashboard/icon-extras.png' },
    { id: 'assets/images/icons/dashboard/icon-favourites.png', formalName: 'assets/images/icons/dashboard/icon-favourites.png' },
    { id: 'assets/images/icons/dashboard/icon-folder.png', formalName: 'assets/images/icons/dashboard/icon-folder.png' },
    { id: 'assets/images/icons/dashboard/icon-home.png', formalName: 'assets/images/icons/dashboard/icon-home.png' },
    { id: 'assets/images/icons/dashboard/icon-logout.png.png', formalName: 'assets/images/icons/dashboard/icon-logout.png.png' },
    { id: 'assets/images/icons/dashboard/icon-price.png', formalName: 'assets/images/icons/dashboard/icon-price.png' },
    { id: 'assets/images/icons/dashboard/icon-products.png', formalName: 'assets/images/icons/dashboard/icon-products.png' },
    { id: 'assets/images/icons/dashboard/icon-settings.png', formalName: 'assets/images/icons/dashboard/icon-settings.png' },
    { id: 'assets/images/icons/dashboard/icon-users.png', formalName: 'assets/images/icons/dashboard/icon-users.png' },
    { id: 'assets/images/icons/dashboard/insurance.png', formalName: 'assets/images/icons/dashboard/insurance.png' },
    { id: 'assets/images/icons/dashboard/insurancecomp.png', formalName: 'assets/images/icons/dashboard/insurancecomp.png' },
    { id: 'assets/images/icons/dashboard/LeaveAdjustment.png', formalName: 'assets/images/icons/dashboard/LeaveAdjustment.png' },
    { id: 'assets/images/icons/dashboard/LeaveCancel.png', formalName: 'assets/images/icons/dashboard/LeaveCancel.png' },
    { id: 'assets/images/icons/dashboard/LeaveRequest.png', formalName: 'assets/images/icons/dashboard/LeaveRequest.png' },
    { id: 'assets/images/icons/dashboard/loan.png', formalName: 'assets/images/icons/dashboard/loan.png' },
    { id: 'assets/images/icons/dashboard/manage.png', formalName: 'assets/images/icons/dashboard/manage.png' },
    { id: 'assets/images/icons/dashboard/manualattendace.png', formalName: 'assets/images/icons/dashboard/manualattendace.png' },
    { id: 'assets/images/icons/dashboard/menu.png', formalName: 'assets/images/icons/dashboard/menu.png' },
    { id: 'assets/images/icons/dashboard/Menu_menu.png', formalName: 'assets/images/icons/dashboard/Menu_menu.png' },
    { id: 'assets/images/icons/dashboard/mn.png', formalName: 'assets/images/icons/dashboard/mn.png' },
    { id: 'assets/images/icons/dashboard/NAVLoc_aa.png', formalName: 'assets/images/icons/dashboard/NAVLoc_aa.png' },
    { id: 'assets/images/icons/dashboard/NAVMenu_ad.jpg', formalName: 'assets/images/icons/dashboard/NAVMenu_ad.jpg' },
    { id: 'assets/images/icons/dashboard/office.png', formalName: 'assets/images/icons/dashboard/office.png' },
    { id: 'assets/images/icons/dashboard/op.png', formalName: 'assets/images/icons/dashboard/op.png' },
    { id: 'assets/images/icons/dashboard/orgpaymnet.png', formalName: 'assets/images/icons/dashboard/orgpaymnet.png' },
    { id: 'assets/images/icons/dashboard/pa.png', formalName: 'assets/images/icons/dashboard/pa.png' },
    { id: 'assets/images/icons/dashboard/pb.png', formalName: 'assets/images/icons/dashboard/pb.png' },
    { id: 'assets/images/icons/dashboard/pe.jpg', formalName: 'assets/images/icons/dashboard/pe.jpg' },
    { id: 'assets/images/icons/dashboard/periodtype.png', formalName: 'assets/images/icons/dashboard/periodtype.png' },
    { id: 'assets/images/icons/dashboard/pp.png', formalName: 'assets/images/icons/dashboard/pp.png' },
    { id: 'assets/images/icons/dashboard/role.png', formalName: 'assets/images/icons/dashboard/role.png' },
    { id: 'assets/images/icons/dashboard/Role Entity_role entity.jpg', formalName: 'assets/images/icons/dashboard/Role Entity_role entity.jpg' },
    { id: 'assets/images/icons/dashboard/Role Menu_rolemenu.png', formalName: 'assets/images/icons/dashboard/Role Menu_rolemenu.png' },
    { id: 'assets/images/icons/dashboard/rolemenu.png', formalName: 'assets/images/icons/dashboard/rolemenu.png' },
    { id: 'assets/images/icons/dashboard/rr.jpg', formalName: 'assets/images/icons/dashboard/rr.jpg' },
    { id: 'assets/images/icons/dashboard/sa.png', formalName: 'assets/images/icons/dashboard/sa.png' },
    { id: 'assets/images/icons/dashboard/taxslab.png', formalName: 'assets/images/icons/dashboard/taxslab.png' },
    { id: 'assets/images/icons/dashboard/tt.png', formalName: 'assets/images/icons/dashboard/tt.png' },
    { id: 'assets/images/icons/dashboard/ty.png', formalName: 'assets/images/icons/dashboard/ty.png' },
    { id: 'assets/images/icons/dashboard/type.png', formalName: 'assets/images/icons/dashboard/type.png' },
    { id: 'assets/images/icons/dashboard/ui.png', formalName: 'assets/images/icons/dashboard/ui.png' },
    { id: 'assets/images/icons/dashboard/user.png', formalName: 'assets/images/icons/dashboard/user.png' },
    { id: 'assets/images/icons/dashboard/UserDevice.png', formalName: 'assets/images/icons/dashboard/UserDevice.png' },
    { id: 'assets/images/icons/dashboard/vn.jpg', formalName: 'assets/images/icons/dashboard/vn.jpg' },

];
export const SetCoordinates = [];
export const imageURl = 'assets/img/gov-logo.png';
export const loginImageURl = 'assets/img/banner.jpg';
export const smallLogoUrl = 'assets/img/small-logo.jpeg';
export const loginSubTitleHead = 'mFMIS';
export const loginMainTitleHead = 'mFMIS';
export const loginFooterName = 'NPSAS ©FCGO 2021'
export const loginCTEVTFooterName = 'CAS ©Advertisement Board Nepal' + "\n\n" +
    'सम्पर्क , Babarmahal ' + "\n" +
    'इमेल : support@http://cas.adboard.gov.np/';
export const loginLUMBINIFooterName = 'CAS ©LUMBINI 2021' + "\n\n" +
    'सम्पर्क , Lumbini, Rupandehi, ' + "\n" +
    'इमेल : info@lumbinidevtrust.gov.np';
export const dashboardSideTitle = 'CAS';
export const approvalList = [
    { id: 2, name: 'Approve' },
    { id: 3, name: 'Reject' }
];
export const monthList = [{ id: 1, text: "बैशाख [1]" },
{ id: 2, text: "जेठ [2]" },
{ id: 3, text: "असार [3]" },
{ id: 4, text: "सावन [4]" },
{ id: 5, text: "भदौ [5]" },
{ id: 6, text: "असोज [6]" },
{ id: 7, text: "कार्तिक [7]" },
{ id: 8, text: "मंसिर [8]" },
{ id: 9, text: "पौष [9]" },
{ id: 10, text: "माघ [10]" },
{ id: 11, text: "फागुन [11]" },
{ id: 12, text: "चैत [12]" }];
export const rcfrBoolean = false;
