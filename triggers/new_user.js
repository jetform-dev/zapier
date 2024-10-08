module.exports = {
  operation: {
    perform: {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.api_key}}',
      },
      params: {
        role: '{{bundle.inputData.role}}',
        plan: '{{bundle.inputData.plan}}',
        as_array: 'true',
      },
      removeMissingValuesFrom: { params: true, body: true },
      url: 'https://app.jetform.id/api/v1/users',
    },
    inputFields: [
      {
        key: 'role',
        label: 'User Role',
        helpText: 'Filter by role',
        type: 'string',
        choices: ['admin', 'user'],
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'plan',
        type: 'string',
        label: 'User plan',
        required: false,
        list: false,
        altersDynamicFields: true,
      },
    ],
    type: 'polling',
    canPaginate: false,
    sample: {
      id: 'dcf12444-6d8e-4f88-83b2-f8abdfcf624f',
      plan: 'plan-comm-5',
      username: "support",
      inserted_at: '2024-02-24T09:03:44Z',
      updated_at: '2024-02-24T07:03:44Z',
      email: 'support@jetform.me',
      role: 'user',
      timezone: 'Asia/Jakarta',
      email_confirmed_at: '2024-02-24T07:14:54Z',
      plan_valid_until: '2024-02-24T07:14:54Z',
    },
    outputFields: [
      { key: 'id', type: 'string' },
      { key: 'plan', type: 'string' },
      { key: 'username', type: 'string' },
      { key: 'inserted_at', type: 'datetime' },
      { key: 'updated_at', type: 'datetime' },
      { key: 'email', type: 'string' },
      { key: 'role', type: 'string' },
      { key: 'timezone', type: 'string' },
      { key: 'email_confirmed_at', type: 'datetime' },
      { key: 'plan_valid_until', type: 'datetime' },
    ],
  },
  display: {
    description: 'Triggers when a new user is created.',
    hidden: false,
    label: 'New User',
  },
  key: 'new_user',
  noun: 'User',
};
