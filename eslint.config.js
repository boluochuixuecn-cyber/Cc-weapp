import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 基础配置
  js.configs.recommended,

  // 全局忽略文件
  {
    ignores: [
      'node_modules/**',
      'miniprogram_npm/**',
      '.vitepress/cache/**',
      'dist/**',
      'build/**',
      '**/cache/**',
      '**/*.min.js',
      '**/*.min.css',
      '**/*.vue', // 暂时忽略Vue文件
      '**/deps/**', // 忽略依赖缓存文件
      '**/chunk-*.js', // 忽略chunk文件
    ],
  },

  // 小程序组件文件配置
  {
    files: ['miniprogram/**/*.js'],
    languageOptions: {
      globals: {
        // 微信小程序全局变量
        wx: 'readonly',
        App: 'readonly',
        Page: 'readonly',
        Component: 'readonly',
        getApp: 'readonly',
        getCurrentPages: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
      },
    },
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'no-undef': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
    },
  },

  // 其他 JavaScript 文件
  {
    files: ['**/*.js'],
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
    },
  },
];
