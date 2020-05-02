import { StudentState } from '@src/store/models/student/interface';
import { RematchDispatcher } from '@rematch/core';
import { RouterInfo } from '@src/interface';

export interface SidebarMenuProps extends SidebarMenuWrapperProps, RouterInfo {
  studentState: StudentState;
  updateDispatch: RematchDispatcher;
}

export interface SidebarMenuWrapperProps {}
