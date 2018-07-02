let apiHost = window.location.origin;
apiHost = apiHost.indexOf('localhost') !== -1 ? 'http://livebeta.clip.cn' : 'http://livebeta.clip.cn';
export const API_BASE_V2 = `${apiHost}/api/v2`;
