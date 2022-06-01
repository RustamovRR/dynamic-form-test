import { Nullable } from "./utils";

export type CreditContractsTypes = {
    addHeader: string;
    addTitle: string;
    attributes: object;
    canClone: boolean;
    canCreate: boolean;
    canDelete: boolean;
    canEdit: boolean;
    canHardDelete: boolean;
    canRestore: boolean;
    css: string;
    editHeader: string;
    editTitle: string;
    elements: ElementsType[];
    focusedFieldName: string | null;
    formData: FormDataType[];
    gridOffset: number;
    id: number;
    isPublic: boolean | null;
    js: string;
    jsVersion: string | null;
    name: string;
    nextLink: string | null;
    params: {
        projectId: number;
    },
    projectId: number;
}

export type ElementsType = {
    cssClass: string;
    cssStyle: string | null;
    data: DataType[];
    dataField: string;
    displayCondition: number | null;
    hint: string | null;
    id: number;
    isAttribute: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    label: string;
    mask: string;
    maxLength: number;
    minLenght: number;
    parentId: number;
    placeholder: string;
    projectId: number;
    sortOrder: number;
    textAlign: string;
    type: "number" | "select" | "text" | "date";
    width: string;
}

type DataType = {
    id: number;
    bank_id: number;
    name: string;
}

type FormDataType = Nullable<{
    account: string;
    bank_group_id: number;
    bank_mfo: number;
    birth_date: number;
    district_code: number;
    doc_code: number;
    doc_date: number;
    doc_num: number;
    passport: string;
    pinfl: number;
    program_name: string;
    program: number;
    region_id: number;
    tin: number;
    type: string;
}>