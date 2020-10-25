import 'app-module-path/register';
import 'source-map-support/register';
import * as sourceMapSupport from 'source-map-support';

sourceMapSupport.install({ hookRequire: true });
