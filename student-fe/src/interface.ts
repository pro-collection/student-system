import * as H from 'history';
import { match } from 'react-router';

export interface RouterInfo {
  history: H.History;
  location: H.Location;
  match: match;
}
