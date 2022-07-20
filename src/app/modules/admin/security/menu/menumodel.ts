export class MenuModel {
    menuId: number;
    parentMenuId?: any;
    name: string;
    nname: string;
    description: string;
    url: string;
    iconUrl: string;
    showInDashboard: boolean;
    moduleId: number;
    displayOrder?: any;
    hasMenu: boolean;
    menuInModule;
    isActive: boolean;
    status: number;
    createdBy: string;
    createdOn: string;
    modifiedBy?: any;
    modifiedOn?: any;
    verifiedBy?: any;
    verifiedOn?: any;
}