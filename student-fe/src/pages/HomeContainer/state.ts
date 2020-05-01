import { StateModels } from '@src/store/interface';

export const homeState = ({ count }: StateModels) => ({
  countState: count,
});

export const homeDispatch = (dispatch: any) => ({
  countDispatch: dispatch.count,
});
