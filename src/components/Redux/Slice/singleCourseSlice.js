import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initistialcourseState = {
      course: {},
      loading: false,
      error: ''
}
export const fetchSinglecourse = createAsyncThunk('/course/fetch' , (id) =>{
      if(id){
            return axios.get(`https://ancient-earth-39666.herokuapp.com/api/v1/courses/course/${id}`)
            .then((res) => res.data)
      }
      
})


export const singlecourseSlice = createSlice({
      name: 'course',
      initialState: initistialcourseState,
      extraReducers: (builder) =>{
            builder.addCase(fetchSinglecourse.pending , (state) =>{
                  state.loading = true

            })
            builder.addCase(fetchSinglecourse.fulfilled , (state , action)=> {
                  state.loading = false
                  state.course = action.payload
                  state.error = ''
            })
            builder.addCase(fetchSinglecourse.rejected , (state , action)=> {
                  state.loading = false
                  state.course = {}
                  state.error = action.error.message
            })
      }
})

export default singlecourseSlice.reducer