/**
 *
 * Asynchronously loads the component for SingleEdit
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
