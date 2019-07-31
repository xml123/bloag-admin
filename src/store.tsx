export const CHANGE_STATUS = 'CHANGE_STATUS'
export const GET_HEADER_LIST = 'GET_HEADER_LIST'

export type IAction = {
    readonly type: string
    [propName: string]: any
}
export type IHeader = {
    jsList:[]
    afterList:[]
    otherList:[]
}
export type IStoreState = {
    headStatus: boolean
    jsList:[]
    afterList:[]
    otherList:[]
}

export const defaultState: IStoreState = {
    headStatus:false,
    jsList:[],
    afterList:[],
    otherList:[],
}

export type IActionCreator = (param: any) => IAction
type IReducer = (state: IStoreState, action: IAction) => IStoreState

const switchStatus:IReducer = (state, action) => {
    const IheadStatus = state.headStatus
    const IHeaderList = action.headerList
    const allList:IStoreState = {
        headStatus:!IheadStatus,
        jsList:IHeaderList.jsList,
        afterList:IHeaderList.afterList,
        otherList:IHeaderList.otherList
    }
    return allList
}

export const reducers: IReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return switchStatus(state,action)
        default:
            return state
    }
}