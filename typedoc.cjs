const pathPrefix = `./packages/utils${ process.env.PROJECT_NAME ? `-${process.env.PROJECT_NAME}` : '' }`;

module.exports = {
  entryPoints: [`${ pathPrefix }/src/index.ts`],
  out: `${ pathPrefix }/doc`,
  $schema: 'https://typedoc.org/schema.json',
  readme: 'none',
  disableSources: true,
  includeVersion: true,
  plugin: ['typedoc-plugin-markdown'],
};
