import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
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
      // 处理typescript
      typescript({
        tsconfig: '../../tsconfig.json'
      }),
    ]
  }
  // 判断是否需要混淆压缩
  if (uglify) config.plugins.push(terser())
  return config;
}

export default [
  getPackageConfig('cjs'),
  getPackageConfig('cjs', true),
  getPackageConfig('esm'),
  getPackageConfig('esm', true)
]