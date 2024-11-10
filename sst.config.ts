/// <reference path="./.sst/platform/config.d.ts" />
const service = 'left-wing-clothing';
const domainRoot = 'left-wing-clothing.com';

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
    const customDomain =
      $app.stage === 'prod' ? domainRoot : `${$app.stage}.${domainRoot}`;
    new sst.aws.Nextjs(service, {
     domain: customDomain,
      permissions: [
        {
          actions: ['ses:SendEmail', 'ses:SendRawEmail'],
          resources: ['*'],
        },
      ],
    });
  },
});

