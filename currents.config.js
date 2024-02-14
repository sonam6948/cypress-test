export default {
  projectId: 'Licence Manager', // the projectId, can be any values for sorry-cypress users
  recordKey: 'fakeKey', // the record key, can be any value for sorry-cypress users
  cloudServiceUrl: 'https://web-app-sorrycypressdirector.azurewebsites.net', // Sorry Cypress users - set the director service URL
  networkHeaders: {
    'x-ms-blob-type': 'BlockBlob',
  },
  projectRoot: './cypress',
};
