/// <reference path="./.sst/platform/config.d.ts" />
const service = 'template';

export default $config({
  app(input) {
    return {
      name: service,
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: {
          region: 'us-east-2',
        },
      },
    };
  },
  async run() {
    // const domainRoot = 'something.com';
    // const customDomain =
    //   $app.stage === 'prod' ? domainRoot : `${$app.stage}.${domainRoot}`;
    const table = new sst.aws.Dynamo(service, {
      fields: {
        pk: 'string',
        sk: 'string',
      },
      primaryIndex: { hashKey: 'pk', rangeKey: 'sk' },
    });
    new sst.aws.Nextjs(service, {
     // domain: customDomain,
      link: [table],
      permissions: [
        {
          actions: ['ses:SendEmail', 'ses:SendRawEmail'],
          resources: ['*'],
        },
      ],
    });
  },
});

