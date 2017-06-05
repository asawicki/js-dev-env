/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minifield bundle for production. This will take a moment...' ));
webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

const jsonStats = stats.toJson();

if(jsonStats.hasErrors)
{
  return jsonStats.errors.map(error => console.log(chalk.red(error)));
}

if(jsonStats.hesWarnings)
{
  return jsonStats.warning.map(warning => console.log(chalk.yellow(warning)));
}

console.log(`Webpack stats: ${stats}`);

  return 0
});
