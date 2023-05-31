const pathPrefix = `./packages/utils${ process.env.PROJECT_NAME ? `-${process.env.PROJECT_NAME}` : '' }`;

module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  includeVersion: true,
  entryPoints: [`${ pathPrefix }/src/index.ts`],
  out: `${ pathPrefix }/doc`,
};
