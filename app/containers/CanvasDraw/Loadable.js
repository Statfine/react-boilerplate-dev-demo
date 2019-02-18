/**
 *
 * Asynchronously loads the component for CanvasDraw
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
