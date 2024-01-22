import { fetchWithCredentials } from '../../common/fetch-with-credentials';
import { getNodeNames } from '../../common/get-node-names';

export const searchInNodes = async ({
  searchedText,
}: {
  searchedText: string;
}) => {
  const pathArray = window.location.pathname.split('/');
  const appId = pathArray[2];
  const workflowId = pathArray[4];
  const workflowResponse = await fetchWithCredentials({
    url: `https://web.backend.actioner.com/v2/apps/${appId}/workflows/${workflowId}`,
  });
  const nodeNames = getNodeNames(workflowResponse);
  const foundedNodeNames = [];
  for (const n of nodeNames) {
    const res = await fetchWithCredentials({
      url: `https://web.backend.actioner.com/v2/apps/${appId}/workflows/${workflowId}/nodes/${n}`,
    });

    if (JSON.stringify(res).includes(searchedText)) {
      foundedNodeNames.push(n);
      const node = document.querySelector<HTMLElement>(`[data-nodeid="${n}"]`);
      if (node) {
        node.setAttribute(
          'style',
          'width: 15px;height: 15px;background: red; opacity:1; z-index:1000;'
        );
      }
    }
  }

  return;
};
