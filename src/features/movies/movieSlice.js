import {createSlice} from '@reduxjs/toolkit'
const initialState={
    movies:[],
    orginals:[],
    series:[]

}
const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            //setmovies is an action
            state.movies=action.payload;

        },
        setOrginals:(state,action)=>{
            //setmovies is an action
            state.orginals=action.payload;

        },
        setSeries:(state,action)=>{
            state.series=action.payload;

        }
    }

})

export const {setMovies}=movieSlice.actions;
export const {setOrginals}=movieSlice.actions;
export const selectMovies=(state)=>state.movie.movies;
export const selectOrginals=(state)=>state.movie.orginals;
export const selectSeries=(state)=>state.movie.series;
export default movieSlice.reducer;