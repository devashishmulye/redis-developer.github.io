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
        href: '/docs',
      },
      'embedded-finance/introduction',
      'embedded-finance/overview',
  
      {
        type: 'category',
        // collapsible: false,
        // collapsed: false,
        // sidebarCollapsible: false,
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
  'product/documentation_overview',
  'product/finbox_overview',
  'product/nomenclature',
  {
    type: 'category',
    label: 'What you can build?',
    items: [
      'product/build/buy-now-pay-later',
      'product/build/buy-now-pay-later-overdraft',
      'product/build/pay-in-n-days',
      'product/build/khata-receivable',
      'product/build/closed-loop-invoice-financing',
      'product/build/pay-in-n-installments',
      'product/build/working-capital',
      'product/build/term-loans',
      'product/build/credit-line',
      'product/build/salary-advance',
      'product/build/personal-loans',
      'product/build/what-cant-you-build',
    ]
  },
  {
    type: 'category',
    label: 'Building Blocks',
    items: [
      'product/block/onboarding',
      'product/block/risk',
      'product/block/capital',
      'product/block/loan-management',
      'product/block/collections',
      'product/block/reconciliation',

    ]
  },
  {
    type: 'category',
    label: 'Product suite',
    items: [
      'product/products/buy-now-pay-later-stack',
      'product/products/cashflow-based-lending-stack',
      'product/products/collect-x',
      'product/products/no-code-credit-link',
      'product/products/risk-engine',
      'product/products/supply-chain-finance-stack',
      'product/products/bank-connect',
      'product/products/device-connect',
    ]
  },
  'product/integrations',

  {
    type: 'category',
    label: "What's the right strategy for you?",
    items: [
      'product/persona/b2b-ecommerce',
      'product/persona/digital-platform',
      'product/persona/retail-tech',
      'product/persona/enterprise',

    ]
  },
  'product/pm-checklist',

  

  {
    type: 'category',
    label: 'Features',
    items: [
      'product/features/adaptive-journey',
      'product/features/configurable-journey',
      'product/features/NTC-lending',
      'product/features/device-data-underwriting',
      'product/features/platform-data-underwriting',
      'product/features/account-aggregator-integration',
      'product/features/automated-bank-statement-analysis',
      'product/features/collections-suite',
      'product/features/white-labelled',
      'product/features/customer-support',
      'product/features/lender-support',
      'product/features/loan-origination-system',
      'product/features/loan-management-system',
      'product/features/e-KYC',
      'product/features/e-mandate',
      'product/features/GST-integration',

    ]
  }


  ]

}
};