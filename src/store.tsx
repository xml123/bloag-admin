export const PLAY_PLAYLIST = 'PLAY_PLAYLIST'

export type IAction = {
    readonly type: string
    [propName: string]: any
}
export type IActionCreator = (param: any) => IAction
enum CycleMode {
    single = 0,
    all,
    random
}
export type IPlayState = {
    isPlaying: boolean
    cycleMode: CycleMode
    playingTime: number
}

export type IPlayingSong = {
    id: string
    name: string
    coverImg: string
    url: string
    artists: string
    album: string
}
export type IPlaylist = {
    currIndex: number
    list: IPlayingSong[]
}
export type IStoreState = {
    playingSong: IPlayingSong,
    playState: IPlayState,
    playlist: IPlaylist
}

export const defaultState: IStoreState = {
    playingSong: {
      id: '',
      name: '💿',
      coverImg: '*.jpg',
      url: '',
      artists: '',
      album: ''
    },
    playState: {
      isPlaying: false,
      cycleMode: CycleMode.all,
      playingTime: 0
    },
    playlist: {
      currIndex: 0,
      list: []
    }
}

type IReducer = (state: IStoreState, action: IAction) => IStoreState

export const reducers: IReducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case PLAY_PLAYLIST:
            return state
        default:
            return state
    }
}