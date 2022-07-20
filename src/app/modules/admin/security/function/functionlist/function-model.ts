export class FunctionModel {
    functionId: number;
    name: string;
    description: string;
    entityInFunction: EntityInFunction[];
    isActive: boolean;
    status: number;
    createdBy?: any;
    createdOn: string;
    modifiedBy?: any;
    modifiedOn?: any;
    verifiedBy?: any;
    verifiedOn?: any;
    constructor(){
        this.entityInFunction = new Array<EntityInFunction>();
    }
}

export class EntityInFunction {
    id: number;
    functionId: number;
    entityId: number;
    isActive: boolean;
    status: number;
    createdBy?: any;
    createdOn: string;
    modifiedBy?: any;
    modifiedOn?: any;
    verifiedBy?: any;
    verifiedOn?: any;
}

export  class EntityModel{
    entityId: number;
    name: string;
    clientUrl;
    moduleId: number;
    actionType: number;
    status: number;
    createdOn: string;
}