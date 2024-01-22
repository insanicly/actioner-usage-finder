import { fetchWithCredentials } from '../../common/fetch-with-credentials';
import { getNodeNames } from '../../common/get-node-names';

export const reset = async () => {
  const pathArray = window.location.pathname.split('/');
  const appId = pathArray[2];
  const workflowId = pathArray[4];
  const workflowResponse = await fetchWithCredentials({
    url: `https://web.backend.actioner.com/v2/apps/${appId}/workflows/${workflowId}`,
  });
  const nodeNames = getNodeNames(workflowResponse);
  for (const n of nodeNames) {
    const node = document.querySelector(`[data-nodeid="${n}"]`);
    node?.setAttribute('style', 'opacity:0');
  }
  return;
};
