import { createSlice } from '@reduxjs/toolkit';
import { useGetAllPlanets, setTitle } from './actionCreator';

export const homeSlice = createSlice({
	name: 'home',
	initialState: {
		loading: false,
		isError: false,
		allPlanetDetails: [],
	},
	reducers: {
		setHomeSlice: setTitle,
	},
	extraReducers: (builder) =>
		builder
			.addCase(useGetAllPlanets.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(useGetAllPlanets.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
				state.allPlanetDetails = action?.payload;
			})
			.addCase(useGetAllPlanets.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			}),
});

export const { setHomeSlice } = homeSlice.actions;
export default setHomeSlice.reducer;
