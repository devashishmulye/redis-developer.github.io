// module.exports = {
//   docs: [
//     {
//       type: 'link',
//       label: 'Embedded Finance',
//       href: '/',
//     },
//     'embedded-finance/overview',

//     {
//       type: 'category',

//       label: 'Mobile Integration',
//       items: [
//         'embedded-finance/android-sdk',
//         'embedded-finance/react-native',
//         'embedded-finance/web-sdk',
//       ]
//     },
//     {
//       type: 'category',
//       label: 'REST APIs',

//       items: [
//         'embedded-finance/rest-api',
//         'embedded-finance/banner',
//       ]
//     },
//     {"bank-connect/overview" : {
//       "FinBox Product Suite": [
//         'bank-connect/overview',
//         'bank-connect/android-client',
//         'bank-connect/react'
//         ]
      
//     }
//   },
//   ]

// };


module.exports = {
  EmbeddedFinanceSideBar: {
    'Embedded Finance': [
      {
        type: 'link',
        label: 'Embedded Finance',
        href: '/',
      },
      'embedded-finance/overview',
  
      {
        type: 'category',
  
        label: 'Mobile Integration',
        items: [
          'embedded-finance/android-sdk',
          'embedded-finance/react-native',
          'embedded-finance/web-sdk',
        ]
      },
      {
        type: 'category',
        label: 'REST APIs',
  
        items: [
          'embedded-finance/rest-api',
          'embedded-finance/banner',
        ]
      },

    ],
  },
  BankConnectSideBar: { 'BankConnect' : [
      'bank-connect/overview',
      'bank-connect/basics',
      {
        type: 'category',
        label: 'Uploading Bank Statements',
        items: [
          'bank-connect/upload-overview',
          'bank-connect/android-client',
          'bank-connect/react',
          'bank-connect/cordova',
          'bank-connect/javascript-client',
          'bank-connect/upload-rest-api',

        ]
      },
      {
        type: 'category',
        label: 'Fetching Statements',
        items: [
          'bank-connect/fetch-overview',
          'bank-connect/android-client',
          'bank-connect/react',
          'bank-connect/cordova',
          'bank-connect/javascript-client',
          'bank-connect/upload-rest-api',

        ]
      },
        'bank-connect/management',
        'bank-connect/fraud',
        'bank-connect/appendix'

      
      ]
    
  },
  DeviceConnectSideBar: { 'DeviceConnect' : [
    'device-connect/README',
    {
      type: 'category',
      label: 'Sharing Data',
      items: [
        'device-connect/integration-flow',
        'device-connect/permissions',
        'device-connect/android',
        'device-connect/react-native',
        'device-connect/flutter',
        'device-connect/cordova',
        'device-connect/error-codes',

      ]
    },
    'device-connect/rest-api',

  
    ]
  
}
};
