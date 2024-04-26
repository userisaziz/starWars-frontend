import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_ALL_PLANETS } from '../../../../api/endpoints';
import { Get } from '../../../../services';
export const setTitle = (state, action) => {
	state.title = action.payload;
};
export const useGetAllPlanets = createAsyncThunk('home/useGetAllPlanets', async (_, thunkAPI) => {
	try {
		let apiUrl = GET_ALL_PLANETS;
		const queryParams = [];

		if (queryParams.length > 0) {
			apiUrl += '?' + queryParams.join('&');
		}
		const response = await Get(apiUrl);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error?.response?.message);
	}
});
