import { getCookie } from '../get-cookie';
import { getSubdomain } from '../get-subdomain';

export const fetchWithCredentials = async ({ url }: { url: string }) => {
  const access_token = getCookie('access_token');
  const res = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${access_token}`,
      Workspace: getSubdomain(),
    },
  });
  const res_1 = await res.json();
  return res_1;
};
