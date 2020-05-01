import { StudentState } from '@src/store/models/student/interface';
import { RematchDispatcher } from '@rematch/core';

export interface SidebarMenuProps extends SidebarMenuWrapperProps {
  studentState: StudentState;
  updateDispatch: RematchDispatcher;
}

export interface SidebarMenuWrapperProps {}
