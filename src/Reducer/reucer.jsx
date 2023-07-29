export const reducer = (state, action)=>{
switch(action.type){
case "_SELECTED_CATEGORY_": {
    return {...state, selecteCategory: action.payload}
}
case "_LOAD_CATEGORY_VIDEO_":
        {
            if(action.payload!=null){
                const categorySelecteVideo = state?.videoes.filter(({category})=> category === action.payload)  ;
                return {
                  ...state, selectedCategoryVideos:[...categorySelecteVideo]
                }  
            }
            return state;
        }
    default : 
    return state;
}
}