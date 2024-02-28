module.exports = {
  type: 'custom',
  test: {
    headers: { Authorization: 'Bearer {{bundle.authData.api_key}}' },
    url: 'https://app.jetform.me/api/v1/orders',
  },
  fields: [
    {
      computed: false,
      key: 'api_key',
      required: true,
      label: 'API Key',
      type: 'password',
      helpText:
        'Anda bisa membuat API KEY dari halaman integrasi JetForm:\nhttps://app.jetform.me/integrations',
    },
  ],
  customConfig: {},
  connectionLabel: '',
};
