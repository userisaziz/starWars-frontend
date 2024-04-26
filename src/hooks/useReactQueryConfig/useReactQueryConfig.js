import { QueryClient } from 'react-query';

export const useReactQueryConfig = (hasCustomRetry) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: 1,
			},
		},
	});

	return [queryClient];
};
