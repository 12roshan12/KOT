
export class RoleModel {
    roleId: number;
    roleName: string;
    menuInRole: MenuInRole[];
    functionInRole: FunctionInRole[];
    roleInModule: RoleInModule[];
    isActive: boolean;
    status: number;
    userTypeId;
    createdBy: string;
    createdOn: string;
    modifiedBy?: any;
    modifiedOn?: any;
    verifiedBy?: any;
    verifiedOn?: any;
    constructor(){
        this.menuInRole = new Array<MenuInRole>()
        this.functionInRole = new Array<FunctionInRole>()
        this.roleInModule = new Array<RoleInModule>()
    }
}

export class FunctionInRole {
    id: number;
    roleId: number;
    functionId: number;
    accessLevel = [];
    accessLevelTypeId: string;
}

export class RoleInModule {
    id: number;
    menuId: number;
    roleId: number;
    displayOrder: number;
    isActive: boolean;
    status: number;
    createdBy?: any;
    createdOn: string;
    modifiedBy?: any;
    modifiedOn?: any;
    verifiedBy?: any;
    verifiedOn?: any;
}

export class MenuInRole {
    id: number;
    menuId: number;
    roleId: number;
    displayOrder: number;
    isActive: boolean;
    status: number;
    createdBy?: any;
    createdOn: string;
    modifiedBy?: any;
    modifiedOn?: any;
    verifiedBy?: any;
    verifiedOn?: any;
}