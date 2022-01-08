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
        label: 'Documentation Home Page',
        href: '/dev',
      },
      'embedded-finance/introduction',
      'embedded-finance/overview',
  
      {
        type: 'category',
        // collapsible: false,
        // collapsed: false,
        // sidebarCollapsible: false,
        label: 'Integrations',
        items: [
          'embedded-finance/android-sdk',
          'embedded-finance/react-native',
          'embedded-finance/web-sdk',
        ]
      },
      {
        type: 'category',
        label: 'REST APIs',
        // sidebarCollapsible: false,
        // collapsible: false,
        // collapsed: false,
        items: [
          'embedded-finance/rest-api',
          'embedded-finance/banner',
        ]
      },
      'embedded-finance/appendix',


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
          'bank-connect/upload-python',


        ]
      },

      {
        type: 'category',
        label: 'Fetching Statements',
        items: [
          'bank-connect/fetch-overview',
          'bank-connect/rest-api',
          'bank-connect/python',
          'bank-connect/webhook',
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
    {
      type: 'category',
      label: 'Fetching Data using REST APIs',
      items: [
        'device-connect/insights-integration-flow',
        'device-connect/insights-api',
        'device-connect/salt-generation',

      ]
    },
  
    ]
  
},

ProductOverview: { 'FinBox Overview' : [
  'documentation_overview',
  'finbox_overview',
  'nomenclature',
  {
    type: 'category',
    label: 'What you can build?',
    items: [
      'build/buy-now-pay-later',
      'build/buy-now-pay-later-overdraft',
      'build/working-capital',
      'build/term-loans',
      'build/credit-line',
      'build/salary-advance',
      'build/personal-loans',
    ]
  },
  {
    type: 'category',
    label: 'Building Blocks',
    items: [
      'block/onboarding',
      'block/risk',
      'block/capital',
      'block/loan-management',
      'block/collections',
      'block/reconciliation',

    ]
  },
  {
    type: 'category',
    label: 'Product suite',
    items: [
      'products/buy-now-pay-later-stack',
      // 'products/cashflow-based-lending-stack',
      // 'products/supply-chain-finance-stack',
      'products/no-code-credit-link',
      'products/device-connect',
      'products/bank-connect',
      'products/risk-engine',
      'products/collect-x',
    ]
  },
  'integrations',

  {
    type: 'category',
    label: "What's the right strategy for you?",
    items: [
      'persona/b2b-ecommerce',
      'persona/digital-platform',
      'persona/retail-tech',
      'persona/enterprise',

    ]
  },
  'pm-checklist',
  {
    type: 'link',
    label: 'Developer Documentation',
    href: '/dev',
  },

  
 

  

    // {
    //   type: 'category',
    //   label: 'Features',
    //   items: [
    //     'features/adaptive-journey',
    //     'features/configurable-journey',
    //     'features/NTC-lending',
    //     'features/device-data-underwriting',
    //     'features/platform-data-underwriting',
    //     'features/account-aggregator-integration',
    //     'features/automated-bank-statement-analysis',
    //     'features/collections-suite',
    //     'features/white-labelled',
    //     'features/customer-support',
    //     'features/lender-support',
    //     'features/loan-origination-system',
    //     'features/loan-management-system',
    //     'features/e-KYC',
    //     'features/e-mandate',
    //     'features/GST-integration',

    //   ]
    // }


  ],

},

DevDocOverview:{"Developer Documentation":[
  'documentation_homepage',

  {
    type: 'link',
    label: 'Embedded Finance',
    href: '/embedded-finance',
  },
  {
    type: 'link',
    label: 'DeviceConnect',
    href: '/device-connect',
  },
  {
    type: 'link',
    label: 'BankConnect',
    href: '/bank-connect',
  },
 

]

}

};