import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_ALL_PLANETS, GET_ALL_RESIDENTS } from '../../../../api/endpoints';
import { Get } from '../../../../services';
export const setTitle = (state, action) => {
	state.title = action.payload;
};
export const useGetAllPlanets = createAsyncThunk('home/useGetAllPlanets', async ({ page, pageSize = 5 }, thunkAPI) => {
	try {
		let apiUrl = GET_ALL_PLANETS;
		const queryParams = [];
		if (page) queryParams.push(`page=${page}`);
		if (pageSize) queryParams.push(`pageSize${pageSize}`);
		if (queryParams.length > 0) {
			apiUrl += '?' + queryParams.join('&');
		}
		const response = await Get(apiUrl);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error?.response?.message);
	}
});
export const fetchResidentsByPlanet = createAsyncThunk(
	'residentsDisplay/fetchResidentsByPlanet',
	async ({ url, page }, thunkAPI) => {
		try {
			const planetData = await Get(url.planet);
			const residentDataPromises = planetData.residents.map((residentUrl) => Get(residentUrl));
			const residentDataResponses = await Promise.all(residentDataPromises);
			console.log('residentDataResponses: ', residentDataResponses);
			const residentInfo = residentDataResponses.map((response) => ({
				name: response.name,
				height: response.height,
				mass: response.mass,
				gender: response.gender,
				birth: response.birth_year,
				eyeColor: response.eye_color,
				hairColor: response.hair_color,
				skinColor: response.skin_color,
			}));
			console.log('residentInfo: ', residentInfo);
			return residentInfo;
		} catch (error) {
			return thunkAPI.rejectWithValue(error?.response?.message);
		}
	}
);
