import { StudentState } from '@src/store/models/student/interface';
import { RematchDispatcher } from '@rematch/core';
import * as H from 'history';
import { match } from 'react-router';

export interface SidebarMenuProps extends SidebarMenuWrapperProps {
  studentState: StudentState;
  updateDispatch: RematchDispatcher;
  history: H.History;
  location: H.Location;
  match: match;
}

export interface SidebarMenuWrapperProps {}
