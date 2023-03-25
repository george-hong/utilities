import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const getPackageConfig = (format, uglify = false) => {
  const config = {
    input: 'src/index.ts',
    output: {
      file: `dist/index.${format}.${uglify ? 'min.' : ''}js`,
      format,
    },
    plugins: [
      // 用于处理使用node_modules中的模块
      nodeResolve(),
      typescript({
        tsconfig: `../../tsconfig.${format === 'cjs' ? '' : 'es.'}json`
      }),
    ]
  }
  if (uglify) config.plugins.push(terser())
  return config;
}

export default [
  getPackageConfig('cjs'),
  getPackageConfig('cjs', true),
  getPackageConfig('es'),
  getPackageConfig('es', true)
]
