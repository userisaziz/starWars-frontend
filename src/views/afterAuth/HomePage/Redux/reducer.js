import { createSlice } from '@reduxjs/toolkit';
import { useGetAllPlanets, fetchResidentsByPlanet, setTitle } from './actionCreator';

export const homeSlice = createSlice({
	name: 'home',
	initialState: {
		loading: false,
		isError: false,
		allPlanetDetails: [],
		allResidents: [],
	},
	reducers: {
		setHomeSlice: setTitle,
	},
	extraReducers: (builder) =>
		builder
			.addCase(useGetAllPlanets.pending, (state) => {
				state.isError = false;
				state.loading = true;
				state.allPlanetDetails = [];
			})
			.addCase(useGetAllPlanets.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
				state.allPlanetDetails = action?.payload;
			})
			.addCase(useGetAllPlanets.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			})
			.addCase(fetchResidentsByPlanet.pending, (state) => {
				state.loading = true;
				state.isError = false;
				state.allResidents = [];
			})
			.addCase(fetchResidentsByPlanet.fulfilled, (state, action) => {
				state.loading = false;
				state.isError = false;
				state.allResidents = action.payload;
			})
			.addCase(fetchResidentsByPlanet.rejected, (state) => {
				state.loading = false;
				state.isError = true;
			}),
});

export const { setHomeSlice } = homeSlice.actions;
export default setHomeSlice.reducer;
